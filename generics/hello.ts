// 関数名の横のTがないと本当に存在するクラスなのか？ジェネリックなのかわからないのか
function identity<T>(arg: T): T {
    return arg;
}

function quantity(arg: T): T {
    return arg;
}

class T {
  name: string
}

identity(8);
// TSError: ⨯ Unable to compile TypeScript:
// generics/hello.ts:16:10 - error TS2345: Argument of type '8' is not assignable to parameter of type 'T'.
quantity(8);