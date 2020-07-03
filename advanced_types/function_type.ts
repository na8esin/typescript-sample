class Entity {
  name: string;
}

function sample<T extends Function>(arg: T, ): T {
  console.log(arg);

  // This expression is not constructable.
  // Type 'Function' has no construct signatures.
  //console.log(new arg());
  return arg;
}

function sample2(arg: Constructor) {

}

sample(Entity); // [Function: Entity]
console.log(Entity); // [Function: Entity]
console.log(Object.getPrototypeOf(Entity));