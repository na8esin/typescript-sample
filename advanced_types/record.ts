class Vo {
  constructor(readonly v: Record<string, boolean>) { }
  print() {
    Object.entries(this.v).forEach(([key, value]) => {
      console.log(key, value);
    });
  }
}

const data = {
  aaaa: true,
  bbbb: false,
  'cccc': true,
  1: false
};

new Vo(data).print();