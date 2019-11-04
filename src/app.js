// const obj = {
//   name: "seattle",
//   getName() {
//     return this.name;
//   }
// };

// // for regular functions, `this` is undefined

// const getName = obj.getName.bind(obj);

// console.log(getName());

// stateless functional component
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// react differentiates between normal html and react component using uppercase letter

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should i do?
      </button>
    </div>
  );
};

const Option = props => {
  return (
    <div>
      <p>{props.optionText}</p>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => {
        return <Option key={option} optionText={option} />;
      })}
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    // alert(option);
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
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
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
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

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      // we found the match
      return "This option already exists";
    }

    this.setState(prevstate => {
      return {
        options: [...prevstate.options, option]
      };
    });
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
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
