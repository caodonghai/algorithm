// 求第n个菲波那切数列的值

function dpN(num) {
    if(num <= 2) return 1;
    return dpN(num - 1) + dpN(num - 2)
}

// 动态规划解题
function dpNums(num) {
    let dp = [1, 1]
    if(num <= 2) return dp[num-1]
    for(let i = 2; i < num; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    console.log({ dp });
    return dp[num-1]
}