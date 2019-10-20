console.log("app.js is running");

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var template2 = (
  <div>
    <h1>Awesome bane</h1>
    <p>I am learning React.js and Node.js</p>
    <p>I have to finish them before going to new job</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
