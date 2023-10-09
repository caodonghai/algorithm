class Watcher {
    constructor() {
        this.watchers = new Map()
    }
    sub(key, fun) {
        if(this.watchers.has(key)) {
            const currWatcher = this.watchers.get(key) || []
            console.log({currWatcher});
            this.watchers.delete(key)
            this.watchers.set(key, currWatcher.concat(fun))
        } else {
            this.watchers.set(key, [fun])
        }
    }

    dispach(key, ...args) {
        if(this.watchers.has(key)) {
            const currWatcher = this.watchers.get(key) || []
            currWatcher.forEach(element => {
                element(...args)
            });
            return true
        }
        return false
    }

    remove(key, fun) {
        if(this.watchers.has(key)) {
            const currWatcher = this.watchers.get(key) || []
            this.watchers.delete(key)
            if(fun) this.watchers.set(key, currWatcher.filter(item => item !== fun))
            return true
        }
        return false
    }

    clear() {
        this.watchers.clear()
    }
}

// test
const watch = new Watcher()
watch.sub('log', () => console.log(1))
watch.sub('log', () => console.log(2))
watch.sub('log', () => console.log(3))
watch.sub('log', () => console.log(4))


watch.sub('str', () => console.log('111'))
watch.sub('str', () => console.log('222'))
watch.sub('str', () => console.log('333'))
watch.sub('str', () => console.log('444'))