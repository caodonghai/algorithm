// 给你一个容量为 weight 的背包，给定一批物品goods，
// 请你计算出该背包所能容纳物品的最大价值

let weight = 10
let goods = [
    {
        weight: 2,
        value: 6,
    },
    {
        weight: 2,
        value: 3,
    },
    {
        weight: 6,
        value: 5,
    },
    {
        weight: 5,
        value: 4,
    },
    {
        weight: 4,
        value: 6,
    },
]
/**
 * 额为数组实现0,1背包
 * 解题：
 * dp[i][j] ===> [0--i]之间的物品，任取放到容量为[j]的背包里
 * 不放物品i ===> dp[i-1][j]
 * 放物品i ===> dp[i-1][j - weight[i]] + value[i]
*/
function maxValue(g, w) {
    const goodKeys = Object.keys(g);
    const goodLen = goodKeys.length;
    const dp = new Array(goodLen).fill().map(() => new Array(w).fill(0))
    for(let j = 0; j <= 10; j++) {
        dp[0][j] = j < g[0].weight ? 0 : g[0].value
    }
    for(let i = 1; i < goodLen; i++) {
        for(let j = 1; j <= 10; j++) {
            console.log(dp[i-1][j],  dp[i-1][j-g[i]])
            if(j < g[i].weight) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-g[i].weight] + g[i].value)
            }
        }
    }
    return dp[goodLen-1][w]
}


// maxValue(goods, weight)

/**
 * 解题：
 * dp[i][j] ===> [0--i]之间的物品，任取放到容量为[j]的背包里
 * 不放物品i ===> dp[i-1][j]
 * 放物品i ===> dp[i-1][j - weight[i]] + value[i]
*/
function knapSack(weights, values, W) {
    let n = weights.length - 1;
    let f = [[]];
    for(let j = 0; j <= W; j++) {
        if(j < weights[0]) {
            f[0][j] = 0
        } else {
            f[0][j] = values[0]
        }
    }
    for(let j = 0; j <= W; j++) {
        for(let i = 1; i <=n; i++) {
            if(!f[i]) {
                f[i] = []
            }
            if(j < weights[i]) {
                f[i][j] = f[i - 1][j]
            } else {
                f[i][j] = Math.max(f[i - 1][j], f[i -1][j - weights[i]] + values[i])
            }
        }
    }
    console.log({f});
    return f[n][W]
}

// knapSack([2,2,6,5,4], [6,3,5,4,6], 10)

// 用一维数组实现0,1背包

/**
 * 一维数组必须要从后向前遍历，因为每次都要使用当前值进行求取最大值，
 * 如果从前向后，没办法保证每个物品只使用一次；
 */

function maxValueWithOne(weights, values, W) {
    let n = weights.length - 1;
    let dp = new Array(W).fill(0);
    for(let i = 0; i <= n; i++) { // 遍历物品
        for(let j = W-1; j >= weights[i]; j--) { // 遍历背包【顺序不能颠倒】
            dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
        }
    }
    console.log({dp});
    return dp[W-1]
}

maxValueWithOne([2,2,6,5,4], [6,3,5,4,6], 10)