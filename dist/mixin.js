////////////////////
// Example mixins
////////////////////
// A mixin that adds a property
function Timestamped(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            Object.defineProperty(this, "timestamp", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: Date.now()
            });
        }
    };
}
// a mixin that adds a property and methods
function Activatable(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            Object.defineProperty(this, "isActivated", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: false
            });
        }
        activate() {
            this.isActivated = true;
        }
        deactivate() {
            this.isActivated = false;
        }
    };
}
////////////////////
// Usage to compose classes
////////////////////
// Simple class
class User {
    constructor() {
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
    }
}
// User that is Timestamped
const TimestampedUser = Timestamped(User);
// User that is Timestamped and Activatable
const TimestampedActivatableUser = Timestamped(Activatable(User));
////////////////////
// Using the composed classes
////////////////////
const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);
const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
//# sourceMappingURL=mixin.js.map