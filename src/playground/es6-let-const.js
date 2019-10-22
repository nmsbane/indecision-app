var nameVar = "bane";
var nameVar = "another one";
console.log("nameVar", nameVar);

let nameLet = "andrew";
nameLet = "andy";
console.log("nameLet", nameLet);

const nameConst = "udemy";
console.log("nameConst", nameConst);

// var based variables can be created again, but not let and const based variables

function getCourseName() {
  var courseName = "reacts";
  return courseName;
}

// let and const as well are function based scoped also block level scope

console.log(getCourseName());

// block scoping
var fullName = "awesome bane";

if (fullName) {
  var firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);

if (fullName) {
  const lastName = fullName.split(" ")[1]; // cant access lastName outside of if block
  console.log(lastName);
}

console.log(lastName);
