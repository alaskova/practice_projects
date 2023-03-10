// Prototype
const Animal = function(options) {
    this.name = options.name;
    this.color = options.color;
}

Animal.prototype.voice = function() {
    console.log('Base voice from ', this.name);
}

const dog = new Animal({name: 'Rex', color: '#fff'});

const Cat = function(options) {
    Animal.apply(this, arguments);
    this.hasTail = options.hasTail;
    this.type = 'cat';
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.voice = function() {
    console.log(this.name + ' says meow');
}

const cat = new Cat({name: 'Dinkin', color: '#000', hasTail: true});

// Class
class Animal2 {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
    }

    voice() {
        console.log('Base voice from ', this.name);
    }
}

const dog2 = new Animal2({name: 'Rex', color: '#fff'});

class Cat2 extends Animal2 {
    constructor(options) {
        super(options);

        this.hasTail = options.hasTail;
        this.type = 'cat';
    }

    voice() {
        super.voice();
        console.log(this.name + ' says meow');
    }
}

const cat2 = new Cat2({name: 'Dinkin', color: '#000', hasTail: true});

Array.prototype.mapAndLog = function() {
    console.log('Array to map', this);
    return this.map.apply(this, arguments);
}

console.log([1, 2, 3, 4].mapAndLog(x => x * 2));

String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`;
}

console.log('new string'.toTag('strong'));

Number.prototype.toBigInt = function() {
    return BigInt(this);
}

console.log((151).toBigInt());

