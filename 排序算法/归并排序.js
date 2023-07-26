// 归并排序 
function mergeSort(arrs) {
    let { length } = arrs
    let res = arrs;
    if (length > 1) {  
        const middleIndex = Math.floor(length / 2)
        const left = mergeSort(arrs.slice(0, middleIndex))
        const right = mergeSort(arrs.slice(middleIndex))
        res =  merge(left, right)
    }
    return res;
}

function merge(left, right) {
    let i = 0, j = 0;
    let result = []
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i])
            i++
        } else {
            result.push(right[j])
            j++
        }
    }
    if(i < left.length) {
        return result.concat(left.slice(i))
    } else {
        return result.concat(right.slice(j))
    }
}

let values = [1000,1,4,7,3,5,63,3,23,452,1,323,3,34]

console.log(mergeSort(values));