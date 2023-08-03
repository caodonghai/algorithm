class newClass {
    constructor(name){
        this.name = name
    }
    getName() {
        return this.name
    }
    setName(newName) {
        this.name = newName
    }
}

newClass.prototype.removeName = function removeName() {
    this.name = ''
}

const a = new newClass('lihua')

