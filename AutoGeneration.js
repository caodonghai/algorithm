function * myGeneration() {
    yield '1'
    yield '2'
    yield '3'
    yield '4'
    yield '5'
}

function autoGeneration(genFun) {
    const nextFun = genFun()
    function next() {
        const { value, done } = nextFun.next()
        console.log({value, done});
        if(done) {
            return value
        } else {
            if(value instanceof Function) {
                value(next)
            } else if(value instanceof Promise) {
                value.then(() => next())
            } else {
                next()
            }
        }
    }
    next()
}

autoGeneration(myGeneration)