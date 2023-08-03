// 解题思路：
// 算出每个物品的性价比，然后从大到小排列，优先放入性价比高的物品，计算出最大价值；
// 默认物品可分割；

function tanxin(goods, W) {
    let currentW = 0
    let totalPrise = 0
    const list = goods.map(item => ({
        ...item,
        value: item.prise / item.weight,
    })).sort((a, b) => b.value-a.value)
    for (const item of list) {
        if(item.weight + currentW <= W) {
            currentW += item.weight
            totalPrise += item.prise
        } else {
            const less = W - currentW
            totalPrise += less/item.weight*item.prise
            break
        }
    }
    console.log({ totalPrise });
    return totalPrise
}

let goods = [{weight: 2, prise: 6}, {weight: 2, prise: 3}, {weight: 6, prise: 5}, {weight: 5, prise: 4}, {weight: 4, prise: 6}]

tanxin(goods, 10)