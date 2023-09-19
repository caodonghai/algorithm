function curryFun (fun) {
    return function baseFun(...args) {
        if(args.length === fun.length) {
            return fun(...args)
        } else {
            return function (...nextArgs) {
                return baseFun.apply(this, args.concat(nextArgs))
            }
        }
    }
}