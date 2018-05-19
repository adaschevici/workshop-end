### Block scope

```javascript
{
  var a = "block";
}
console.log(a); // prints out block
```

```javascript
function hello() {
  var a = "function";
}
hello();
console.log(a);
```
a is an undefined reference, raises an error

```javascript
function hello() {
  var a = "function";
  for (var i = 0; i < 10; i++) {
    var a = "block";
  }
  console.log(a);
}
hello();
```

a will print out block

#### Some block scope weirdness

```javascript
var funcs = [];
for (var i = 0; i < 5; i += 1) {
  var y = i;
  funcs.push(function () {
    console.log(y);
  })
}
funcs.forEach(function (func) {
  func() // prints out 4 4 4 4 4
});
```

#### Using `let` to fix that

```javascript
var funcs = [];
for (let i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});
```

#### Using `const` to poromote immutability for your variables

```javascript
const hello = 'world'; // an immutable hello, you can't change that
hello = 'nope'; // error

// an object
const mutable = {};
mutable['trait'] = 'Hello world'; // this works

const foo = Object.freeze({}); // proper immutability for objects
foo.prop = 123;
console.log(foo.prop) // undefined
```

#### String interpolation
```javascript
let people = 'folks';

const message = `Hello all you happy ${people}`;
```

#### Fat arrow functions

In ES5 the this in functions is bound to the function (closure).

```javascript
let obj = {
  name: 'awesome',
  sayLater: function () {
    let self = this; // Assign to self
    console.log(self);
    setTimeout(function () {
      console.log(`${self.name}`); // Use self not this
    }, 1000);
  }
};
```

In ES6 the this in fat arrow functions are bound to the containing object 

```javascript
let obj = {
  name: 'awesome',
  sayLater: function () {
    console.log(this); // `this` points to obj
    setTimeout(() => {
      console.log(this); // `this` points to obj
      console.log(`${this.name}`); // `this` points to obj
    }, 1000);
  }
};
obj.sayLater();
```