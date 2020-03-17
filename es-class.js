// node .\es-class.js

class User {
  id;
  name;
}

// [ 'id', 'name' ]
console.log(Reflect.ownKeys(new User()));