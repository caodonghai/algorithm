// ES5 原型链继承
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.desc = function() {
    console.log(`${this.name}今年${this.age}岁`);
}

const xiaoming = new Person('小明', 24)

// 对象冒充继承
function Teacher(name, age, course) {
    Person.call(this, name, age)
    this.course = course
    this.teach = function() {
        console.log(`${this.name}教${this.course}`);
    }
    
}

const xiaoli = new Teacher('小李', 34, '语文')

// 组合继承
function Worker(name, age, work) {
    Person.call(this, name, age)
    this.work = work
    this.action = function() {
        console.log(`${this.name}是做${this.work}的`);
    }
}

Worker.prototype = Person.prototype

const xiaozhou = new Worker('小周', 30, '装修')

// 类继承
class Parent {
    constructor(name, age, work) {
        this.name = name
        this.age = age
        this.work = work
    }
    desc() {
        console.log(`${this.name}是一名${this.work}，今年${this.age}岁了`);
    }
}

class Mom extends Parent {
    six = '女'
}

class Father extends Parent {
    six = '男'
}

const zhuli = new Mom('朱莉', 34, '老师')
const luomi = new Mom('罗密', 36, '司机')