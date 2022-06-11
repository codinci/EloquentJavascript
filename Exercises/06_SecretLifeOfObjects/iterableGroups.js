class Group {
    constructor() {
        this.elements = [];
    }

    add(value) {
        if(!this.has(value)) {
            this.elements.push(value);
        }
    }

    delete(remove) {
        this.elements = this.elements.filter(v => v !== remove);
    }

    has(value) {
        return this.elements.includes(value);
    }

    static from(members) {
        let array = new Group;
        for(let element of members) {
            array.add(element);
        }
        return array;
    }

    [Symbol.iterator] () {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if(this.position >= this.group.elements.length) {
            return {done:true};
        } else {
            let result = {value:this.group.elements[this.position],
                            done: false};
            this.position ++;
            return result;
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }