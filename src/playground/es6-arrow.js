const square = function(x) {
  return x * x;
};

console.log(square(4));

const squareArrow = x => {
  return x * x;
};

console.log(squareArrow(9));

// all arrow functions are anonymous

const squareArrowExpress = x => x * x;
console.log(squareArrowExpress(10));

const regularArrow = firstName => {
  return firstName.split(" ")[0];
};

console.log(regularArrow("Awesome bane"));

const conciseArrow = firstName => firstName.split(" ")[0];
