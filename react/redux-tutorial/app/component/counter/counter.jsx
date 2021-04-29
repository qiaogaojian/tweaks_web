import React from "react";
import "./counter.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
