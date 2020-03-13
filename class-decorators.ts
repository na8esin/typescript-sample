@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

class Creature {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

const greeter = new Greeter("company");

console.log(greeter.greet());

delete greeter.constructor
console.log(greeter.greet());

'use strict'
delete Greeter.constructor;

new Greeter('bello');

delete Creature.constructor;
const cr = new Creature('aaa');
cr.greet();