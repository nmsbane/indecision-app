console.log("app.js is running");

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");
var app = {
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

var userName = "Awesome bane1";
var userAge = 10;

var user = {
  name: "Aweseome bane2",
  age: 3
};
var template2 = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>I am learning React.js and Node.js</p>
    <p>Age: {user.age}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
