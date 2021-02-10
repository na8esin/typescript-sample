const types = require('util').types;

// object
console.log('----------- typeof ------------');
console.log(typeof ([])); // object

console.log('----------- isArray ------------');
console.log(Array.isArray([])); // true

console.log('----------- deepType ------------');
console.log(deepType([])); // array
console.log(deepType(new Map())); // map
console.log(deepType(null)); // null
console.log(deepType(undefined)); // undefined

console.log('----------- isObject ------------');
console.log(isObject({})); // true
console.log(isObject([])); // true

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof#real-world_usage
function deepType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

// util.isObjectの代替
// https://nodejs.org/api/util.html#util_util_isobject_object
function isObject(value) {
  return value !== null && typeof value === 'object'
}