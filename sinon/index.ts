import * as sinon from 'sinon';
//https://sinonjs.org/releases/v9.2.4/sandbox/
var sandbox = sinon.createSandbox({});

var myObject = {
  myMethod: function () {
    return 'apple pie';
  }
};

sandbox.replace(myObject, 'myMethod', function () {
  return 'strawberry';
});

console.log(myObject.myMethod());