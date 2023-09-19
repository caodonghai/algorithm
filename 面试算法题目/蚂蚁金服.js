// 实现一个 autoShowModal
// 该方法接受三个参数：
    // time-为一个以秒为单位的时间，
    // n-表示在time时间内最多执行n次
    // fun-回调函数

function autoShowModal(time, n, fun) {
    let count = 0;
    const preTime = 0;
    return function name(...params) {
        const current = new Date().getTime()
        if(count <= n && preTime && current - preTime <= time * 1000) {
            fun.apply(this, params)
            count++
        }
    }
}

// url解析，w3c 标准
// http://www.linan.com?cao=wo&dong=ai&hai=ni#hash
function queryString(url) {
    let res = {}
    if(url && typeof url === 'string') {
        let strsArr = url.split('?')[1].split('&');
        for(let item of strsArr) {
            const [key, value=''] = item.split('=')
            res[key] = value
        }
    }
    return res
}

// test
queryString('http://www.linan.com?cao=wo&dong=ai&hai=ni#hash')

// 实现居中

// 实现 1px

// 