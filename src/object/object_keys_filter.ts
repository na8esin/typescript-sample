class Anchor {
  id?: number;
  name?: string;
}

const data = {
  id: 1,
  name: "takeshi",
  book: "hogehoge"
}

const anchor = new Anchor();

// 値が入ってないとkeyがとれない
console.log(Object.keys(anchor)); // []
console.log(Object.getPrototypeOf(anchor)); //Anchor {}
console.log(Object.entries(anchor)); // []

// nullで初期化したら？ → OK
const anchor2 = new Anchor();
anchor2.id = undefined;
anchor2.name = undefined;
console.log(Object.keys(anchor2)); //[ 'id', 'name' ]

export { };