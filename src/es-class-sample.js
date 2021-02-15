// node .\es-class.js

// node v12.10.0
// ならclassに値が入らなくてもReflectでkeyがとれる

class User {
  id;
  name;
}

class Person extends User{}

// [ 'id', 'name' ]
let userKeys = Reflect.ownKeys(new User());
console.log(userKeys);

for (const key in userKeys) {
  console.log(userKeys[key]);
}

let personKeys = Reflect.ownKeys(new Person());
console.log(personKeys);

