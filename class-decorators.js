var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter = __decorate([
        sealed
    ], Greeter);
    return Greeter;
}());
var Creature = /** @class */ (function () {
    function Creature(message) {
        this.greeting = message;
    }
    Creature.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Creature;
}());
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var greeter = new Greeter("company");
console.log(greeter.greet());
delete greeter.constructor;
console.log(greeter.greet());
'use strict';
delete Greeter.constructor;
new Greeter('bello');
delete Creature.constructor;
var cr = new Creature('aaa');
cr.greet();
