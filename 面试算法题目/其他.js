// 判断括号是否正确闭合

function check(str) {
    let enterObj = {
        '(': 1,
        "{": 2,
        "[": 3,
    }
    let leaveObj = {
        ')': 1,
        "}": 2,
        "]": 3,
    }
    const stack = []
    for (const item of str) {
        if(enterObj[item]) {
            stack.push(enterObj[item])
        }
        if(leaveObj[item]) {
            const last = stack.pop()
            if(last !== leaveObj[item]) {
                return false
            }
        }
    }
    if(stack.length === 0) {
        return true
    }
    return false
}

// test
check('(){}')
check('({{{[]}()}})')
check('function fun () { let arr = []}')

// 实现对一批请求的并发控制