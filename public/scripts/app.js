"use strict";

console.log("app.js is running");

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Indecision App"
  ),
  React.createElement(
    "p",
    null,
    "This is some info"
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

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Awesome bane"
  ),
  React.createElement(
    "p",
    null,
    "I am learning React.js and Node.js"
  ),
  React.createElement(
    "p",
    null,
    "I have to finish them before going to new job"
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
