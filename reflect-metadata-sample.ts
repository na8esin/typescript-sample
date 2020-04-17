// https://qiita.com/taqm/items/4bfd26dfa1f9610128bc#reflect-metadata

import 'reflect-metadata';

const KEY = Symbol('test key');
function hoge(target: any, propKey: string, desc: PropertyDescriptor) {
  const sample = Reflect.getMetadata(KEY, target, propKey);
  console.log(`値は ${sample} です`);
}

function fuga(sample: string) {
  return (target: any, propKey: string, idx: number) => {
    Reflect.defineMetadata(KEY, sample, target, propKey);
  };
}

class SomeClass {
  @hoge
  someMethod(@fuga('テスト') name: string) {
  }
}