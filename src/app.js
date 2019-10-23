console.log("app.js is running");

// if statements
// ternary operator
// logical and operator

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");
const app = {
  title: "indecision app",
  subtitle: "Subtitle"
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const userName = "Awesome bane1";
const userAge = 10;

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
  return <p>My location is hyd</p>;
}

const template2 = (
  <div>
    <h1>{user.name ? user.name.toUpperCase() : "some user"}</h1>
    <p>I am learning React.js and Node.js</p>
    {user.age > 18 && <p>Age: {getAge(user.age)}</p>}
    {getLocation()}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

let count = 0;
const someId = "my-id";
const addOne = () => {
  console.log("fired");
};

const minusOne = () => {
  console.log("minus one");
};

const resetFunction = () => {
  console.log("reset counter");
};

const template3 = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={resetFunction}>Reset</button>
  </div>
);

ReactDOM.render(template3, appRoot);
