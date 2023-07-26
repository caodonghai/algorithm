// 内插搜索
let arrs = [0,2,4,5,7,9, 23,45,67,879,54546]

function insertSearch(values, val, _start, _end) {
    let start = _start || 0;
    let end = _end || values.length - 1;
    if(start <= end && val >= values[start] && val <= values[end]) {
        if(values[start] === val) return start
        if(values[end] === val) return end
        
        let mid = Math.floor((val - arrs[start]) / (arrs[end] - arrs[start]) * (end - start))

        if(val === values[mid]) {
            return mid
        }else if(values[mid] > val) {
            return insertSearch(values, val, start, mid - 1)
        } else {
            return insertSearch(values, val, mid + 1, end)
        }
    }
    return -1
}


console.log(insertSearch(arrs, 6));