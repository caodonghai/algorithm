
function prevErgodic(root, res = []) {
    if(root) {
        let { val, left, right } = root
        prevErgodic(left, res)
        prevErgodic(right, res)
        res.push(val)
    }
    return res
}