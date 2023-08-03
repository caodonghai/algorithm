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


// 二面
// 设计一个栈结构，push 用于压栈，pop 用于出栈，
// head 方法用于返回栈顶，min 返回栈内最小值
// 假设该栈数据全部为数字

class MyStack {
    constructor() {
        this.values = []
        this.mins = [] // 记录每个位置的最小值
    }

    push(value) {
        this.values.push(value)
        if(!this.mins.length) {
            this.mins.push(value)
        } else {
            if(value < this.mins.at(-1)) {
                this.mins[this.mins.length] = value
            } else {
                this.mins[this.mins.length] = this.mins[this.mins.length - 1]
            }
        }
    }
    
    pop() {
        this.mins.pop()
        return this.values.pop()
    }

    head() {
        return this.values.at(-1)
    }
    
    min() {
        return this.mins.at(-1)
    }
}