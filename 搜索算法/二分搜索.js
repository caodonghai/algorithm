// 二叉搜索树原理
// 数组排序
// 中间 ===》两边
let arrs = [0,2,4,5,7,9, 23,45,67,879,54546]

function binarySearch(values, val, _start, _end) {
    let start = _start || 0;
    let end = _end || values.length - 1;
    if(start <= end && val >= values[start] && val <= values[end]) {
        if(values[start] === val) return start
        if(values[end] === val) return end
        
        let mid = Math.ceil((end + start) / 2)

        if(val === values[mid]) {
            return mid
        }else if(values[mid] > val) {
            return binarySearch(values, val, start, mid - 1)
        } else {
            return binarySearch(values, val, mid + 1, end)
        }
    }
    return -1
}


console.log(binarySearch(arrs, 6));