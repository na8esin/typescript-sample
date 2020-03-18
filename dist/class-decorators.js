var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let Greeter = class Greeter {
    constructor(message) {
        Object.defineProperty(this, "greeting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
};
Greeter = __decorate([
    sealed,
    __metadata("design:paramtypes", [String])
], Greeter);
class Creature {
    constructor(message) {
        Object.defineProperty(this, "greeting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
const greeter = new Greeter("company");
console.log(greeter.greet());
delete greeter.constructor;
console.log(greeter.greet());
'use strict';
delete Greeter.constructor;
new Greeter('bello');
delete Creature.constructor;
const cr = new Creature('aaa');
cr.greet();
//# sourceMappingURL=class-decorators.js.map