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
  render() {
    return (
      <div>
        <button>What should i do?</button>
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
  render() {
    return (
      <div>
        {this.props.options.map(option => {
          return <Option key={option} optionText={option} />;
        })}
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add option component goes here</p>
      </div>
    );
  }
}

class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision Application";
    const subtitle = "Put your life in the hands of the computer";
    const options = ["thing one", "thing two", "thing four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
