export class Dto {
  flg?: number = 1;
  name?: string;

  static toDto(arg: Dto): Dto {
    // new this()はstaticだから使える
    return Object.assign(new this(), arg);
  }
}

function create<T>(c: { new(): T; }): T {
  return new c();
}

function create5<T>(c: { new(): T }, arg: T): T {
  return Object.assign(new c(), arg);
}

console.log(create5(Dto, { name: "michel" }));

function create4(c: Function): Function {
  // Type 'Function' has no construct signatures.
  //return new c();
  return c;
}

/* これだとだめみたい
function create2<T>(c: T): T {
    return new c();
}*/

// Function()はブラウザなら動くが、nodeだと動かない
// TODO nodeで動的にクラスを生成する方法を探す
function create3<T>(arg: T): T {
  // 自身の型はこれで取得できると思うけど、
  // 大体object型だよね。
  const className = arg.constructor.name;
  console.log(className);
  //const clazz = getClass(className);
  return arg;
}
function service(dto: Dto) {
  create3(dto);
}

const dto = create<Dto>(Dto);
console.log(dto.flg);

const dto2 = create4(Dto);
console.log(dto.flg);
