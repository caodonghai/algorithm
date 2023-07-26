// 编写一个防抖函数，等待 wait 后执行 func，
// 并且返回一个 calcel 函数，调用后取消，
// 同时提供一个frush，调用后立即执行；

function debounce(func, wait) {
    let timer = null
    let params = []
    function deFun(...args) {
        params = args
        if(timer) {
            clearTimeout(timer)
            timer = null
            params = []
        }
        timer = setTimeout(() => func(...args), wait)
    }
    deFun.cancel = function() {
        if(timer) {
            clearTimeout(timer)
            timer = null
            params = []
        }
    }
    deFun.frush = function() {
        if(timer) {
            clearTimeout(timer)
            timer = null
        }
        func(...params)
        params = []
    }
    return deFun
}

function debounce2(func, wait, isImmediatey) {
    let timer = null
    return function(...args) {
        if(isImmediatey && !timer) {
            func(...args)
            timer = setTimeout(() => {
                clearTimeout(timer)
                timer = null
            }, wait)
        } else {
            timer = setTimeout(() => {
                func(...args)
            }, wait)
        }
    }
}