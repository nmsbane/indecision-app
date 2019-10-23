// arguments object - no longer bound with arrow functions
// this keyword - no longer bound

const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => {
  // can't access arguments using es6 arrow function
  return a + b;
};

// console.log(add(1, 3));

const user = {
  name: "Name first",
  cities: ["first", "second"],
  printPlaces: function() {
    // we have access to this, this is bound to user
    console.log(this.name);
    console.log(this.cities);
    var that = this;
    this.cities.forEach(function(city) {
      console.log(that.name + city); // we get error, because this is no longer bound
    });
  }
};

user.printPlaces();

const user1 = {
  name: "Cool",
  cities: ["first", "second"],
  printPlaces: function() {
    console.log(this); // will throw error in arrow function, so use normal function
    this.cities.forEach(city => {
      console.log(this.name + city);
    });
  },
  printPlaces1() {
    // new method definition
    this.cities.forEach(city => {
      console.log(this.name + city);
    });
  }
};
// user1.printPlaces();
// user1.printPlaces1();

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  }
};

console.log(multiplier.multiply());
