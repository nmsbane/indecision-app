// const obj = {
//   name: "seattle",
//   getName() {
//     return this.name;
//   }
// };

// // for regular functions, `this` is undefined

// const getName = obj.getName.bind(obj);

// console.log(getName());

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

// react differentiates between normal html and react component using uppercase letter

class Action extends React.Component {
  /*
    in Action component, this points to instance of Action Component
    so, this.handlePick is a method inside the class itself
  */

  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePick}
        >
          What should i do?
        </button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    );
  }
}

class Options extends React.Component {
  // for handling this binding for handler events

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => {
          return <Option key={option} optionText={option} />;
        })}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["thing one", "thing two", "thing four"]
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  // handleDeleteOptions
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  // handlePick
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  render() {
    const title = "Indecision Application";
    const subtitle = "Put your life in the hands of the computer";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
