class User {
  id;
  name;
  constructor() {
    this.name = 'mikcel';
  }
}

class Person extends User{
  // declareを付けないと
  //  Property 'name' will overwrite the base property in 'User'. If this is intentional, add an initializer. Otherwise, add a 'declare' modifier or remove the redundant declaration
  declare name;
}

let userKeys = Reflect.ownKeys(new User());
console.log(userKeys); // [ 'id', 'name' ]

const person = new Person();
let personKeys = Reflect.ownKeys(person);
console.log(personKeys); // [ 'id', 'name' ]

person.name = "john";
console.log(person.name); // john