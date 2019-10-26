"use strict";

console.log("app.js is running");

// if statements
// ternary operator
// logical and operator

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

var appRoot = document.getElementById("app");

var app = {
  title: "indecision app",
  subtitle: "Subtitle",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value; // points to the form which generated onSubmit event
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

var removeOptions = function removeOptions() {
  app.options = [];
  render();
};

var render = function render() {
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
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeOptions },
      "Remove All"
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
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();

// const userName = "Awesome bane1";
// const userAge = 10;

// var user = {
//   name: "Cool dude",
//   age: 25
// };

// function getAge(age) {
//   if (age) {
//     return age;
//   }
//   return 25;
// }

// function getLocation() {
//   return <p>My location is hyd</p>;
// }

// const template2 = (
//   <div>
//     <h1>{user.name ? user.name.toUpperCase() : "some user"}</h1>
//     <p>I am learning React.js and Node.js</p>
//     {user.age > 18 && <p>Age: {getAge(user.age)}</p>}
//     {getLocation()}
//   </div>
// );
// const appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);
