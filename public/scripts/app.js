"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Indecision App"
};
// react differentiates between normal html and react component using uppercase letter

var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "What should i do?"
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      {
        onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        }
      },
      "Remove"
    )
  );
};

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please add an option to get started"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

var AddOption = function (_React$Component) {
  _inherits(AddOption, _React$Component);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      // alert(option);
      var error = this.props.handleAddOption(option);
      e.target.elements.option.value = "";

      this.setState(function () {
        return {
          error: error
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "option" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var IndecisionApp = function (_React$Component2) {
  _inherits(IndecisionApp, _React$Component2);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this2 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this2.state = {
      options: []
    };
    _this2.handleDeleteOptions = _this2.handleDeleteOptions.bind(_this2);
    _this2.handlePick = _this2.handlePick.bind(_this2);
    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
    return _this2;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return {
              options: options
            };
          });
        }
      } catch (e) {
        // Do nothing at all,
        // Will fire when parsing JSON data it raises error
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component will unmount");
    }

    // handleDeleteOptions

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }

    // handlePick

  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value";
      } else if (this.state.options.indexOf(option) > -1) {
        // we found the match
        return "This option already exists";
      }

      this.setState(function (prevstate) {
        return {
          options: [].concat(_toConsumableArray(prevstate.options), [option])
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevstate) {
        return {
          options: prevstate.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = "Put your life in the hands of the computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
