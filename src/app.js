class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision Application</h1>
        <h2>Put your life in the hands of a computer</h2>
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

class Options extends React.Component {
  render() {
    return (
      <div>
        <p>Options component goes here</p>
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

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
