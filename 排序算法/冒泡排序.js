// 冒泡排序
function booleSort(arrs) {
    for(let i = 0; i < arrs.length; i++) {
        for(let j = 0; j < arrs.length - 1 - i; j++) {
            if(arrs[j] > arrs[j + 1]) {
                swap(arrs, j, j + 1)
            }
        }
    }
    return arrs
}

function swap(arrs, i, j) {
    const curr = arrs[i];
    arrs[i] = arrs[j]
    arrs[j] = curr
}

let values = [1,4,7,3,5,63,3,23,452,1,323,3,34]

console.log(booleSort(values));