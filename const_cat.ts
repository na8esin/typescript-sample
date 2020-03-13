interface IAuthor {
  id: number;
  name: string;
}
class Author {
  private readonly id: number;
  private readonly name: string;
  // コンストラクタで受け取るときに分割代入しちゃう
  constructor({id, name}) {
    this.id = id;
    this.name = name;
  }
}
const data = {
  id: 2,
  name: 'mackel',
  birthday: '2020'
}

const author : IAuthor = data;
// { id: 2, name: 'mackel', birthday: '2020' }
console.log(author);

// Property 'id' is missing in type '{ name: string; }' but required in type 'Author'
// const author2 : Author = {name: "tomas"};
// console.log(author2);

let author3 = new Author(data);
console.log(author3);

// TODO: object.keysをfilterするみたいなことできる？