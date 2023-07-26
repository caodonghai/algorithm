// 选择排序 
function selectionSort(arrs) {
    for(let i = 0; i < arrs.length - 1; i++) {
        let minIndex = i;
        for(let j = i+1; j < arrs.length; j++) {
            if(arrs[minIndex] > arrs[j]) {
                minIndex = j
            }
        }
        if(i !== minIndex) {
            swap(arrs, i, minIndex)
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

console.log(selectionSort(values));