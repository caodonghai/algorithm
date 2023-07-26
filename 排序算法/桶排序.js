// 桶排序 
function bucketSort(arrs, count = 3) {
    if(arrs.length <= 1) return arrs
    const min = Math.min(...arrs)
    const buckets = creatBuckets(arrs, count)
    for (let i = 0; i < arrs.length; i++) {
        const index = Math.floor((arrs[i] - min) / count)
        buckets[index].push(arrs[i])
    }
    return buckets.reduce((res, curr) => res.concat(insertSort(curr)), [])
}

function creatBuckets(arrs, count) {
    const min = Math.min(...arrs)
    const max = Math.max(...arrs)
    const bucketCounts = Math.floor((max - min) / count) + 1;
    return new Array(bucketCounts).fill(0).map(item => [])
}

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


let values = [5,4,3,2,6,1,7,10,9,8]

console.log(bucketSort(values));