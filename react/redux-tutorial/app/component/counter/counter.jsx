import React from "react";
import { connect } from "react-redux";
import "./counter.css";
import * as Action from "../../consts/actions";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    // this.setState({ count: this.state.count + 1 });
    this.props.dispatch(Action.increment());
  }

  decrement() {
    // this.setState({ count: this.state.count - 1 });
    this.props.dispatch(Action.decrement());
  }

  reset() {
    this.props.dispatch(Action.reset());
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button id="btn_reset" onClick={this.reset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(Counter);
