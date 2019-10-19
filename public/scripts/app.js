"use strict";

console.log("app.js is running");

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");
var template = React.createElement(
  "h1",
  null,
  "Indecision App"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
