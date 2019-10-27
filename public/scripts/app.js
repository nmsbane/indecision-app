"use strict";

var appRoot = document.getElementById("app");

var app = {
  clicked: false
};

var changeClickedStatus = function changeClickedStatus(e) {
  app.clicked = !app.clicked;
  renderContent();
};
var renderContent = function renderContent() {
  var htmlContent = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: changeClickedStatus },
      app.clicked ? "Hide details" : "Show details"
    ),
    app.clicked && React.createElement(
      "p",
      null,
      "Hi there here are some details to show"
    )
  );

  ReactDOM.render(htmlContent, appRoot);
};

renderContent();
