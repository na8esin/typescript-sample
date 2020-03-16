class User {
  id;
  name;
}

function identity<T>(arg: T): T {
  return arg;
}

// Argument of type 'User' is not assignable to parameter of type 'string'.
console.log(identity<string>(new User()));

