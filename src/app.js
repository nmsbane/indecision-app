import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";

// react differentiates between normal html and react component using uppercase letter

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// class OldSyntax {
//   constructor() {
//     this.name = "abcd";
//     this.getGreeting = this.getGreeting.bind(this);
//   }

//   getGreeting() {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;

// console.log(getGreeting());

// // ---------------------------
// class NewSyntax {
//   name = "efgh";
//   getGreeting = () => {
//     // 'this' points to class instance itself
//     return `Hi my name is ${this.name}`;
//   };
// }

// const newSyntax = new NewSyntax();
// const newGreeting = newSyntax.getGreeting;
// console.log(newGreeting());
