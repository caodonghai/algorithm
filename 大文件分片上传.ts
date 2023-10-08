// 切片大小，先定为10M
const SLICE_SIZE = 10 * 1024 * 1024;
const createFileSlices: (file: File) => Blob[] = (file: File) => {
    if (!file) return [];

    const slices: any = [];
    let start = 0;
    while (start < file.size) {
      const slice = file.slice(start, start + SLICE_SIZE)
      slices.push(slice)
      start += SLICE_SIZE
    }

    return slices;
};

//  md5-wasm 的库计算文件hash值
import md5WASM from 'md5-wasm'
const calculateFileHashWasm: (file: File) => Promise<string> = (file) => {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = (event: any) => {
        const buffer = event.target.result;
        md5WASM(buffer).then((res: string) => {
          resolve(res);
        }).catch(() => {
          reject('');
        });
      }
    } catch (e) {
      reject(e)
    }
  })
};

interface IChunk {
  // 切片对象
  chunk: Blob;
  // hash值，用来标识文件的唯一性
  hash: string;
  // 文件名
  fileName: string;
  // 请求进度
  progress: number;
  // 下标，标记哪些分片包已上传完成
  index: number;
  // abort上传请求
  cancel: () => void;
}

const createFileChunks: (file: File, slices: Blob[]) => IChunk[] = (file, slices) => {
  if (!slices?.length) return [];
  const hash = calculateFileHashWasm(file)
  return slices.map((slice, index) => ({
    index,
    chunk: slice,
    hash: hash + '-' + index,
    fileName: file.name,
    progress: 0,
    cancel: () => { }
  }));
};


import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const upload = (param: FormData, confg: AxiosRequestConfig) => axios.post('http://xxxxx/upload', param);

const uploadFileChunks = (chunks: IChunk[], upLoadedChunks: string[]): Promise<AxiosResponse<any, any>[]> | undefined => {
    if (!chunks?.length) return;

    const requests = chunks.filter(({ hash }) => !upLoadedChunks.includes(hash)).map((item) => {
      const { chunk, hash, fileName, index } = item;
      const data = new FormData();
      data.append('chunk', chunk)
      data.append('hash', hash)
      data.append('fileName', fileName)

      const cancelToken = createCancelAction(item);

      return upload(data, {
        cancelToken
      });
    })

    Promise.all(requests).then(res => {
      // 合并文件请求
      merge({
        fileName: chunks[0].fileName,
        hash: chunks[0].hash,
        size: SLICE_SIZE
      })
    }).catch(err => {
      console.log(err)
    })
};


// 生成个cancelToken，并给每个chunk添加cancel函数
const createCancelAction = (chunk: IChunk) => {
  const { cancel, token }=  axios.CancelToken.source();
  chunk.cancel = cancel;
  return token;
};

interface IMergeParams {
  fileName: string;
  hash: string;
  size: number;
}
// 上传完成之后发送合并请求
const merge = (param: IMergeParams) => axios.post('http://xxxxx/merge', param);