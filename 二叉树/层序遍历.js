// 广度优先算法
function bfa(root) {
    if(!root) return root
    let res = []
    let currentQuenue = [root]
    while(currentQuenue.length) {
        let { left, right, val } = currentQuenue.shift()
        res.push(val)
        if(left) currentQuenue.push(left)
        if(right) currentQuenue.push(right)
    }
    return res
}


// 广度优先算法
// 每层分组的二维数组
function bfaGroup(root) {
    let res = []
    if(!root) return res
    let depth = 0
    let currentQuenue = [root]
    let currentValues = []
    let nextQuenue = []
    while(currentQuenue.length) {
        let { left, right, val } = currentQuenue.shift()
        currentValues.push(val)
        if(left) nextQuenue.push(left)
        if(right) nextQuenue.push(right)
        if(!currentQuenue.length) {
            depth++
            res.push(currentValues)
            currentQuenue = nextQuenue
            currentValues = []
            nextQuenue = []
        }
    }
    return res
}