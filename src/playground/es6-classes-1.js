class Person {
  // method definition syntax
  constructor(name = "react js course", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi there cool dude ${this.name}`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`;
  }
}

const me = new Person("andrew mead");
console.log(me.getGreeting());
console.log(me.getDescription());
