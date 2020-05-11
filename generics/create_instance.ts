class Dto {
  flg?: number = 1;
}

function create<T>(c: {new(): T; }): T {
    return new c();
}

/* これだとだめみたい
function create2<T>(c: T): T {
    return new c();
}*/
// ブラウザなら動くが、nodeだと動かない
// TODO nodeで動的にクラスを生成する方法を探す
function create3<T>(arg: T): T {
    // 自身の型はこれで取得できると思うけど、
    // 大体object型だよね。
    const className = arg.constructor.name;
    console.log(className);
    const clazz = getClass(className);
    return new clazz();
}
function service(dto: Dto) {
  create3(dto);
}

const dto = create<Dto>(Dto);
console.log(dto.flg);
