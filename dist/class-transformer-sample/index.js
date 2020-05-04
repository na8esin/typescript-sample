"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
// Exposeはクラス自体に設定できないから1つづつやらないといけないみたい
// https://github.com/typestack/class-transformer#enforcing-type-safe-instance
class User {
    constructor() {
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "firstName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "age", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
}
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    class_transformer_1.Expose(),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
const userJson = [
    {
        id: 1,
        firstName: "Johny",
        lastName: "Cage",
        age: 27,
        create_date: "2010"
    },
    {
        id: 2,
        firstName: "Ismoil",
        lastName: "Somoni",
        age: 50
    },
    {
        id: 3,
        firstName: "Luke",
        lastName: "Dacascos",
        age: 12
    }
];
let users = class_transformer_1.plainToClass(User, userJson, { excludeExtraneousValues: true });
console.log(users);
//# sourceMappingURL=index.js.map