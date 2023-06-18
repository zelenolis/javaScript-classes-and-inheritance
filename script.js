class BaseClass {
    constructor(value) {
        this.value = value;
    }

    plus(...n) {
        for (let nums of n) this.value += nums;
        return this;
    }
    minus(...n) {
        if (typeof this.value === 'number') {
            for (let nums of n) this.value -= nums;
        } else {
            this.value = this.value.slice(0, -n);
        }
        return this;
    }
    multiply(n) {
        if (typeof this.value === 'number') {
            this.value *= n;
        } else {
            this.value = this.value.repeat(n);
        }
        return this;
    }
    divide(n) {
        if (typeof this.value === 'number') {
            this.value = Math.floor(this.value / n);
        } else {
            this.value = this.value.slice(0, Math.floor(this.value.length / n));
        }
        return this;
    }
    get() {
        return this.value;
    }
}

// ES6 style child class

class IntBuilder extends BaseClass {
    constructor(value = 0) {
        super(value)
    }

    mod(n) {
        return this.value %= n;
    }

    static random(from, to) {
        return Math.floor(Math.random() * (to + 1 - from) + from);
    }
}

// ES5 style child class

function StringBuilder(value) {
    //BaseClass.call(this);
    this.value = value || '';
}

StringBuilder.prototype = Object.create(BaseClass.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function (str) {
    this.value = this.value.split(str).join("");
    return this;
}

StringBuilder.prototype.sub = function (from, n) {
    this.value = this.value.substr(from, n);
    return this;
}

// IntBuilder example

let intBuilder = new IntBuilder(10);

let rnd = IntBuilder.random(10, 100); 
console.log(`IntBuilder starts with : ${intBuilder.get()}`);
console.log(`IntBuilder Random : ${rnd}`)
intBuilder.plus(2, 3, 2);
console.log(`IntBuilder plus : ${intBuilder.get()}`);
intBuilder.minus(1, 2);
console.log(`IntBuilder minus : ${intBuilder.get()}`);
intBuilder.multiply(2);
console.log(`IntBuilder multiply : ${intBuilder.get()}`);
intBuilder.divide(4);
console.log(`IntBuilder divide : ${intBuilder.get()}`);
intBuilder.mod(3);
console.log(`IntBuilder mod : ${intBuilder.get()}`);
console.log(`IntBuilder get : ${intBuilder.get()}`);

// StringBuilder example

let strBuilder = new StringBuilder('Hello');
console.log(`StringBuilder starts with : ${strBuilder.get()}`);
strBuilder.plus(' all', '!');
console.log(`StringBuilder plus : ${strBuilder.get()}`);
strBuilder.minus(4);
console.log(`StringBuilder minus : ${strBuilder.get()}`);
strBuilder.multiply(3);
console.log(`StringBuilder multiply : ${strBuilder.get()}`);
strBuilder.divide(4);
console.log(`StringBuilder divide : ${strBuilder.get()}`);
strBuilder.remove('l');
console.log(`StringBuilder remove : ${strBuilder.get()}`);
strBuilder.sub(1, 1);
console.log(`StringBuilder sub : ${strBuilder.get()}`);
console.log(`StringBuilder get : ${strBuilder.get()}`);