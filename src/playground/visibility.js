class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide details" : "show details"}
        </button>
        {this.state.visibility && <p>Hi there here are some details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// const app = {
//   clicked: false
// };

// const changeClickedStatus = e => {
//   app.clicked = !app.clicked;
//   renderContent();
// };
// const renderContent = () => {
//   const htmlContent = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={changeClickedStatus}>
//         {app.clicked ? "Hide details" : "Show details"}
//       </button>
//       {app.clicked && <p>Hi there here are some details to show</p>}
//     </div>
//   );

//   ReactDOM.render(htmlContent, appRoot);
// };

// renderContent();
