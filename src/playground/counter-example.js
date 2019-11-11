class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.resetFunction = this.resetFunction.bind(this);
    this.state = {
      count: props.count
    };
  }

  addOne(e) {
    // setState takes only one argument, we are passing a function
    // from there we want to return an object
    this.setState(prevState => {
      return {
        count: prevState.count + 1 // we are not overriding state completely, we are just updating the specific value
      };
    });
  }

  minusOne(e) {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  resetFunction(e) {
    // this.setState is asynchronus
    this.setState(() => {
      return {
        count: 0
      };
    });
    // this.setState({
    //   count: 0
    // });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.resetFunction}>Reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};

ReactDOM.render(<Counter count={5} />, document.getElementById("app"));

// let count = 0;
// const someId = "my-id";

// const addOne = () => {
//   count = count + 1;
//   console.log("fired");
//   renderCounterApp();
// };

// const minusOne = () => {
//   count = count - 1;
//   console.log("minus one");
//   renderCounterApp();
// };

// const resetFunction = () => {
//   count = 0;
//   console.log("reset counter");
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const template3 = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetFunction}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(template3, appRoot); // min no of changes that need to be made to show the changed html,
//   // using ReactDOM.render will use virtual dom
// };

// renderCounterApp();
