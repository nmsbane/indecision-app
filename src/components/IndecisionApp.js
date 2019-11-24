import React from "react";

import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // handleDeleteOptions
  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  // handlePick
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  };

  handleAddOption = option => {
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
  };

  handleDeleteOption = optionToRemove => {
    this.setState(prevstate => {
      return {
        options: prevstate.options.filter(option => {
          return optionToRemove !== option;
        })
      };
    });
  };

  clearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

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

  render() {
    const subtitle = "Put your life in the hands of the computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
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
        <OptionModal
          selectedOption={this.state.selectedOption}
          clearSelectedOption={this.clearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
