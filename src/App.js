import React from "react";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    // example with react createElement
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement(Button, {
    //     handleClick: this.handleIncrement,
    //     name: "increment"
    //   }),
    //   React.createElement(Button, {
    //     handleClick: this.handleDecrement,
    //     name: "decrement"
    //   }),
    //   React.createElement("span", null, count)
    // );
    return (
      <div>
        <Button handleClick={this.handleIncrement} name="increment" />
        <Button handleClick={this.handleDecrement} name="decrement" />
        <span>{count}</span>
      </div>
    );
  }
}

export default App;
