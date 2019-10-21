"use strict";

console.log("app.js is running");

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
  name: "Aweseome bane2",
  age: 3
};
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    "p",
    null,
    "I am learning React.js and Node.js"
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
