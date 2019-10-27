const appRoot = document.getElementById("app");

const app = {
  clicked: false
};

const changeClickedStatus = e => {
  app.clicked = !app.clicked;
  renderContent();
};
const renderContent = () => {
  const htmlContent = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changeClickedStatus}>
        {app.clicked ? "Hide details" : "Show details"}
      </button>
      {app.clicked && <p>Hi there here are some details to show</p>}
    </div>
  );

  ReactDOM.render(htmlContent, appRoot);
};

renderContent();
