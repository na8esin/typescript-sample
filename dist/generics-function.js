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
function identity(arg) {
    return arg;
}
// Argument of type 'User' is not assignable to parameter of type 'string'.
console.log(identity(new User()));
//# sourceMappingURL=generics-function.js.map