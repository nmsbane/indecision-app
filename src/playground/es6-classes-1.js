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

class Student extends Person {
  constructor(name, age, major = "undecided") {
    super(name, age); // refers to the parent class
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      return `${description} and has a major of ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    if (!!this.homeLocation) {
      return `${super.getGreeting()} visiting from ${this.homeLocation}`;
    }
    return super.getGreeting();
  }
}

// const me = new Student("andrew mead", 26, "Computer science");
// console.log(me);
// console.log(me.hasMajor());
// console.log(me.getGreeting());
// console.log(me.getDescription());
const traveller1 = new Traveller("first", 33, "hyderabad");
console.log(traveller1.getGreeting());
const traveller2 = new Traveller("second", 30);
console.log(traveller2.getGreeting());
