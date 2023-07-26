const data = {
    name:'xiaoming',
    age:18,
    parents: [
        {
            name: 'laowang',
            age: 40,
        },
        {
            name: 'xiaoxue',
            age: 30,
        }
    ]
}

let handler = {
    get(target, key) {
        console.log('get--->', {key});
        return Reflect.get(target, key)
    },
    set(target, key, value) {
        if (key === 'length') return true
        console.log('set--->', {key, value});
        return Reflect.set(target, key, value)
    }
}

const proxyData = new Proxy(data, handler)

proxyData.name = 'dali'
console.log(proxyData.name);
console.log({proxyData});
proxyData.parents.push({})
