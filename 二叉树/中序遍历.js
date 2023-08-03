function prevErgodic(root, res = []) {
    if(root) {
        let { val, left, right } = root
        prevErgodic(left, res)
        res.push(val)
        prevErgodic(right, res)
    }
    return res
}