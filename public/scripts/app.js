"use strict";

var square = function square(x) {
  return x * x;
};

console.log(square(4));

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(9));

// all arrow functions are anonymous

var squareArrowExpress = function squareArrowExpress(x) {
  return x * x;
};
console.log(squareArrowExpress(10));

var regularArrow = function regularArrow(firstName) {
  return firstName.split(" ")[0];
};

console.log(regularArrow("Awesome bane"));

var conciseArrow = function conciseArrow(firstName) {
  return firstName.split(" ")[0];
};
