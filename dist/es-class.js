class User {
    constructor() {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = 'mikcel';
    }
}
class Person extends User {
}
let userKeys = Reflect.ownKeys(new User());
console.log(userKeys); // [ 'id', 'name' ]
const person = new Person();
let personKeys = Reflect.ownKeys(person);
console.log(personKeys); // [ 'id', 'name' ]
person.name = "john";
console.log(person.name); // john
//# sourceMappingURL=es-class.js.map