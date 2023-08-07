// 实现一个 useAsyncEffect
function useAsyncEffect(asyncFun, deps) {
    return useEffect(() => {
        const cleanupPromise = asyncFun()
        return () => {
            cleanupPromise.then((cleanUp) => {
                cleanUp?.()
            })
        }
    }, deps)
}

// 手动实现 useEffect
// 用来存储每次调用useEffect时传入的依赖数组
let prevDeps = []
function useEffect(callback, depsAry) {
    // 判断是否发生改变，判断prevDeps是否存在
    const hasChanged = prevDeps ? depsAry.every((dep, index) => dep === prevDeps[index]) === false : true
    if(hasChanged) {
        // 有依赖发生改变，调用callback
        callback()
    }
    // 同步本次更改后的依赖数组
    prevDeps = depsAry
}

// 实现一个给什么返回什么的TS泛型
// 注意，这里写法是定义的方法哦
interface Search {
    <T>(name:T):T
}

let fn:Search = function <T>(name: T):T {
    console.log(name)
    return name;
}

