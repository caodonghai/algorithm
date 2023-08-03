// new 一个对象的过程：

// 创建一个新对象
// 将构造函数中的this指向新对象
// 执行构造函数
// 返回新对象


function newMethod(Parent, ...args) {
    let child = Object.create(Parent.prototype)
    let result = Parent.apply(child, args)
    return typeof result === 'object' ? result : child;
}

function newMethod2(Parent, ...args) {
    let child = {};
    child.__proto__ = Parent.prototype
    let result = Parent.apply(child, args)
    return typeof result === 'object' ? result : child;
}

// test 
// 构造器函数
let Parent = function (name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};

//创建实例，将构造函数Parent与形参作为参数传入
const child = newMethod(Parent, 'echo', 26);
child.sayName() //'echo';

//最后检验，与使用new的效果相同
child instanceof Parent//true
child.hasOwnProperty('name')//true
child.hasOwnProperty('age')//true
child.hasOwnProperty('sayName')//false