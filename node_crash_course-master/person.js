// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

console.log(__dirname, __filename, module);

const DEFAULT_NAME = "KDU_INTERN";
class Person {
  constructor(name, age) {
    this.name = name === undefined ? DEFAULT_NAME : name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

// module.exports = Person;
module.exports = { DEFAULT_NAME, Person };
