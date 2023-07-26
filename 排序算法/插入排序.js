// 插入排序 
function insertSort(arrs) {
    let temp;
    for(let i = 1; i < arrs.length; i++) {
        temp = arrs[i]
        let j = i
        while (j > 0 && arrs[j-1] > temp) {
            arrs[j] = arrs[j - 1]
            j--
        }
        arrs[j] = temp
    }
    return arrs
}

let values = [1000,1,4,7,3,5,63,3,23,452,1,323,3,34]

console.log(insertSort(values));