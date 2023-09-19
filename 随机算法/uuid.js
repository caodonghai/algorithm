function getBaseStr() {
    let res = '';
    let num = 35
    while(num >= 0) {
        res += num.toString(36)
        num--
    }
    return res
}

function uuid(len) {
    const baseStr = getBaseStr()
    let res = ''
    while(len > 0) {
        res += baseStr[(Math.random() * baseStr.length) | 0]
        len--
    }
    return res
}