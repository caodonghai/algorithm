// 迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换，
// 这个随机位置比当前位置小。这样，这个算法可以保证随机过得
// 位置不会再被随机一次

function shuffle(arrs) {
    for(let i = arrs.length - 1; i >=0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        swap(arrs, i, randomIndex)
    }
    return arrs
}

function swap(arrs, i, randomIndex) {
    const swapVal = arrs[i]
    arrs[i] = arrs[randomIndex]
    arrs[randomIndex] = swapVal
}

const myArrs = [1,43,5435,312,54,767,343,21,43,65,323,23,1,12,45]

console.log(shuffle(myArrs));

