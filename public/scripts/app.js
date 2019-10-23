"use strict";

console.log("app.js is running");

// if statements
// ternary operator
// logical and operator

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");
var app = {
  title: "indecision app",
  subtitle: "Subtitle"
};
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  )
);

var userName = "Awesome bane1";
var userAge = 10;

var user = {
  name: "Cool dude",
  age: 25
};

function getAge(age) {
  if (age) {
    return age;
  }
  return 25;
}

function getLocation() {
  return React.createElement(
    "p",
    null,
    "My location is hyd"
  );
}

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name.toUpperCase() : "some user"
  ),
  React.createElement(
    "p",
    null,
    "I am learning React.js and Node.js"
  ),
  user.age > 18 && React.createElement(
    "p",
    null,
    "Age: ",
    getAge(user.age)
  ),
  getLocation()
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var count = 0;
var someId = "my-id";
var addOne = function addOne() {
  console.log("fired");
};

var minusOne = function minusOne() {
  console.log("minus one");
};

var resetFunction = function resetFunction() {
  console.log("reset counter");
};

var template3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: resetFunction },
    "Reset"
  )
);

ReactDOM.render(template3, appRoot);
