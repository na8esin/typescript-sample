class Author {
    // コンストラクタで受け取るときに分割代入しちゃう
    constructor({ id, name }) {
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
        this.id = id;
        this.name = name;
    }
}
const data = {
    id: 2,
    name: 'mackel',
    birthday: '2020'
};
const author = data;
// { id: 2, name: 'mackel', birthday: '2020' }
console.log(author);
// Property 'id' is missing in type '{ name: string; }' but required in type 'Author'
// const author2 : Author = {name: "tomas"};
// console.log(author2);
let author3 = new Author(data);
console.log(author3);
// TODO: object.keysをfilterするみたいなことできる？
//# sourceMappingURL=const_cat.js.map