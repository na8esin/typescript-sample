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
    }
}
class Person extends User {
}
// [ 'id', 'name' ]
let userKeys = Reflect.ownKeys(new User());
console.log(userKeys);
for (const key in userKeys) {
    console.log(userKeys[key]);
}
let personKeys = Reflect.ownKeys(new Person());
console.log(personKeys);
//# sourceMappingURL=es-class.js.map