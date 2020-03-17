// node .\es-class.js

// node v12.10.0
// ならclassに値が入らなくてもReflectでkeyがとれる

class User {
  id;
  name;
}

// [ 'id', 'name' ]
console.log(Reflect.ownKeys(new User()));