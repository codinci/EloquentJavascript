class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(add) {
        return new Vec(this.x + add.x, this.y + add.y);
    }

    minus(less) {
        return new Vec(this.x - less.x, this.y - less.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);