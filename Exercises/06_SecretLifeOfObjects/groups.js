class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if(!this.has(value)) {
            this.group.push(value);
        }
    }

    delete(remove) {
        this.group = this.group.filter(v => v !== remove);
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(members) {
        let array = new Group;
        for(let element of members) {
            array.add(element);
        }
        return array;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
group.add(10);
group.delete(10);
console.log(group.has(10));