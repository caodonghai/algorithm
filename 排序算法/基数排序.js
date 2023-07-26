// 基数排序 
function radixSort(arrs) {
    if(arrs.length <= 1) return arrs
    let res = arrs
    const base = 10;
    let devider = 1;
    let maxValue = Math.max(...res);
    while(devider <= maxValue) {
        // 创建二维数组
        let buckets = new Array(base).fill(0).map(() => [])
        for(let i = 0; i < res.length; i++) {
            buckets[Math.floor(res[i] / devider) % base].push(res[i])
        }
        console.log(buckets);
        res = [].concat(...buckets)
        devider*=base
    }
    return res
}

let values = [34,23,2,786,6,333,4444,8,9987,11,10000,56,345]

console.log(radixSort(values));