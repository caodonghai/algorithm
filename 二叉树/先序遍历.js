function prevErgodic(root, res = []) {
    if(root) {
        let { val, left, right } = root
        res.push(val)
        prevErgodic(left, res)
        prevErgodic(right, res)
    }
    return res
}