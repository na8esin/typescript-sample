"use strict";
// https://qiita.com/taqm/items/4bfd26dfa1f9610128bc#reflect-metadata
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const KEY = Symbol('test key');
function hoge(target, propKey, desc) {
    const sample = Reflect.getMetadata(KEY, target, propKey);
    console.log(`値は ${sample} です`);
}
function fuga(sample) {
    return (target, propKey, idx) => {
        Reflect.defineMetadata(KEY, sample, target, propKey);
    };
}
class SomeClass {
    someMethod(name) {
    }
}
__decorate([
    hoge,
    __param(0, fuga('テスト')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SomeClass.prototype, "someMethod", null);
//# sourceMappingURL=reflect-metadata-sample.js.map