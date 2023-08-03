// 找出两个字符串序列最长子序列的长度，并打印这个子序列；
// 最长子序列是指在两个字符串中以相同顺序出现，但不要求连续（非字符串子串）的字符串序列

// https://www.bilibili.com/video/BV1ay4y1X7xd/?p=40&spm_id_from=pageDriver&vd_source=f0fddcbec69fd087bf0b9e9bda168c71

function LCS(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let dp = [new Array(n + 1).fill(0)]
    for(let i = 1; i <= m; i++) {
        dp[i] = [0]
        for(let j = 1; j <= n; j++) {
            if(str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    console.log({ dp });
    console.log(printLCS(dp, str1, str2, m, n));
    return dp[m][n]
}

function printLCS(dp, str1, str2, m, n) {
    if(m === 0 || n === 0) return ''
    if(str1[m - 1] === str2[n - 1]) {
        return printLCS(dp, str1, str2, m - 1, n - 1) + str1[m -1]
    } else {
        if(dp[m - 1][n] > dp[m][n - 1]) {
            return printLCS(dp, str1, str2, m - 1, n)
        } else {
            return printLCS(dp, str1, str2, m, n - 1)
        }
    }
}

LCS('acbaed', 'abcadf')