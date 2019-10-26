let count = 0;
const someId = "my-id";

const addOne = () => {
  count = count + 1;
  console.log("fired");
  renderCounterApp();
};

const minusOne = () => {
  count = count - 1;
  console.log("minus one");
  renderCounterApp();
};

const resetFunction = () => {
  count = 0;
  console.log("reset counter");
  renderCounterApp();
};

const renderCounterApp = () => {
  const template3 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetFunction}>Reset</button>
    </div>
  );

  ReactDOM.render(template3, appRoot); // min no of changes that need to be made to show the changed html,
  // using ReactDOM.render will use virtual dom
};

renderCounterApp();
