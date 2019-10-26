console.log("app.js is running");

// if statements
// ternary operator
// logical and operator

// JSX -Javascript XML
// var template = React.createElement("p", null, "This is JSX from app.js");

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const appRoot = document.getElementById("app");

const app = {
  title: "indecision app",
  subtitle: "Subtitle",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value; // points to the form which generated onSubmit event
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

const removeOptions = () => {
  app.options = [];
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length}</p>
      <button onClick={removeOptions}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
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
