class Anchor {
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
const data = {
    id: 1,
    name: "takeshi",
    book: "hogehoge"
};
const anchor = new Anchor();
// 値が入ってないとkeyがとれない
console.log(Object.keys(anchor)); // []
console.log(Object.getPrototypeOf(anchor)); //Anchor {}
console.log(Object.entries(anchor)); // []
// nullで初期化したら？ → OK
const anchor2 = new Anchor();
anchor2.id = null;
anchor2.name = null;
console.log(Object.keys(anchor2)); //[ 'id', 'name' ]
//# sourceMappingURL=object_keys_filter.js.map