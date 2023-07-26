// 计数排序 
function countSortWithArray(arrs) {
    if(arrs.length <= 1) return arrs
    const mapArrs = []
    const res = []
    arrs.forEach((element) => {
        mapArrs[element] ? mapArrs[element]++ : mapArrs[element] = 1
    });
    mapArrs.forEach((item, key) => {
        let num = item
        while(num > 0) {
            res.push(key)
            num--
        }
    });
    return res
}

function countSortWithObject(arrs) {
    if(arrs.length <= 1) return arrs
    const mapObj = {}
    const res = []
    arrs.forEach((element) => {
        mapObj[element] ? mapObj[element]++ : mapObj[element] = 1
    });
    for(let key in mapObj) {
        let num = mapObj[key]
        while (num > 0) {
            res.push(Number(key))
            num--
        }
    }
    return res
}

let values = [4,1,5,6,3,2,5,1,4]

console.log(countSortWithObject(values));