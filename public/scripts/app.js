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

var numbers = [1, 3, 2, 4, 5];
// only array of jsx elements need to have key prop

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
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
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
