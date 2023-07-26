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

knapSack([2,2,6,5,4], [6,3,5,4,6], 10)