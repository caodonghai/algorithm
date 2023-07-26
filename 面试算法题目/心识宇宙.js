// 给定一个未排序的整数数组,可能有重复数字、负数,返回二元组最大和。
// 要求二元组的位置不能相邻
function maxTotao(arrs) {
    let result;
    for(let i = 2; i < arrs.length; i++) {
        for(let j = 0; j < i - 1; j++) {
            if(result == undefined) {
                result = arrs[i] + arrs[j]
            } else {
                result = Math.max(result, arrs[i] + arrs[j])
            }
        }
    }
    console.log({ result });
}

// test

maxTotao([2, 4, 10, 5, 8, 9, 3]) // 19
maxTotao([2, 100, 2]) // 4
maxTotao([2, 100, 2, 1, 1, 10]) // 110
