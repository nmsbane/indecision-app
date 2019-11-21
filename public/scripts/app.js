"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.addOne = _this.addOne.bind(_this);
    _this.minusOne = _this.minusOne.bind(_this);
    _this.resetFunction = _this.resetFunction.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // get the count from localstorage
      var count = parseInt(localStorage.getItem("count"));
      if (!isNaN(count)) {
        this.setState(function () {
          return {
            count: count
          };
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem("count", this.state.count);
      }
    }
  }, {
    key: "addOne",
    value: function addOne(e) {
      // setState takes only one argument, we are passing a function
      // from there we want to return an object
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1 // we are not overriding state completely, we are just updating the specific value
        };
      });
    }
  }, {
    key: "minusOne",
    value: function minusOne(e) {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: "resetFunction",
    value: function resetFunction(e) {
      // this.setState is asynchronus
      this.setState(function () {
        return {
          count: 0
        };
      });
      // this.setState({
      //   count: 0
      // });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Count: ",
          this.state.count
        ),
        React.createElement(
          "button",
          { onClick: this.addOne },
          "+1"
        ),
        React.createElement(
          "button",
          { onClick: this.minusOne },
          "-1"
        ),
        React.createElement(
          "button",
          { onClick: this.resetFunction },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, { count: 5 }), document.getElementById("app"));

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
