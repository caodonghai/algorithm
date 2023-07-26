// 节流函数
function throttle(func, wait, isImmediate) {
    let time = isImmediate ? 0 : null;
    return function(...args) {
        const current = new Date().getTime()
        if(isImmediate) {
            if(current - time > wait) {
                func(...args)
                time = current
            }
        } else {
            if(!time) {
                time = setTimeout(() => {
                    clearTimeout(time)
                    time = null
                    func(...args)
                }, wait)
            }
        }
    }
}