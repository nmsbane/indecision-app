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
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App"
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
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map(option => {
        return (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        );
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
    e.target.elements.option.value = "";

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
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          return {
            options
          };
        });
      }
    } catch (e) {
      // Do nothing at all,
      // Will fire when parsing JSON data it raises error
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
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

  handleDeleteOption(optionToRemove) {
    this.setState(prevstate => {
      return {
        options: prevstate.options.filter(option => {
          return optionToRemove !== option;
        })
      };
    });
  }

  render() {
    const subtitle = "Put your life in the hands of the computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
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
