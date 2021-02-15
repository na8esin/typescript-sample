class Vo {
  constructor(
    // keyの型がnumberだろうとエラーが出ない
    // string | number | symbol,なら大丈夫らしい
    readonly v: Record<string, boolean>) { }
  print() {
    Object.entries(this.v).forEach(([key, value]) => {
      console.log(key, value);
    });
  }
}

// keyに関してはある程度許容される
const data = {
  aaaa: true,
  bbbb: false,
  'cccc': true,
  1: false
};

new Vo(data).print();

// こういういっぺんに投入するときに矛盾があると怒られる
const list = [{ dddd: false }, { cccc: true }];
list.map(e => new Vo(e).print());
