// 快速排序 
function quickSort(arrs) {
    let res = arrs;
    if(arrs.length > 1) {
        const middle = arrs[0]
        const mins = arrs.slice(1).filter(item => item < middle)
        const maxs = arrs.slice(1).filter(item => item >= middle)
        res = quickSort(mins).concat(middle).concat(quickSort(maxs))
    }
    return res
}

let values = [50, 1000,1,4,7,3,5,63,3,23,452,1,323,3,34]

console.log(quickSort(values));