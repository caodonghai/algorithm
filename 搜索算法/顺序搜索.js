// 顺序搜索、线性搜索
let arrs = [2,3,54,6,4,7,586,7,5,453,43]

function search(values, val) {
    for(let i = 0; i < values.length; i++) {
        if(values[i] === val) {
            return i
        }
    }
    return -1
}


search(arrs, 6)