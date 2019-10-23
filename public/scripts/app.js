"use strict";

// arguments object - no longer bound with arrow functions
// this keyword - no longer bound

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

var addArrow = function addArrow(a, b) {
  // can't access arguments using es6 arrow function
  return a + b;
};

// console.log(add(1, 3));

var user = {
  name: "Name first",
  cities: ["first", "second"],
  printPlaces: function printPlaces() {
    // we have access to this, this is bound to user
    console.log(this.name);
    console.log(this.cities);
    var that = this;
    this.cities.forEach(function (city) {
      console.log(that.name + city); // we get error, because this is no longer bound
    });
  }
};

user.printPlaces();

var user1 = {
  name: "Cool",
  cities: ["first", "second"],
  printPlaces: function printPlaces() {
    var _this = this;

    console.log(this); // will throw error in arrow function, so use normal function
    this.cities.forEach(function (city) {
      console.log(_this.name + city);
    });
  },
  printPlaces1: function printPlaces1() {
    var _this2 = this;

    // new method definition
    this.cities.forEach(function (city) {
      console.log(_this2.name + city);
    });
  }
};
// user1.printPlaces();
// user1.printPlaces1();

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 4,
  multiply: function multiply() {
    var _this3 = this;

    return this.numbers.map(function (number) {
      return _this3.multiplyBy * number;
    });
  }
};

console.log(multiplier.multiply());
