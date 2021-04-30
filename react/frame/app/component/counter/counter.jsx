import React from "react";
import { connect } from "react-redux";
import "./counter.css";
import * as Action from "../../consts/actions";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.props.dispatch(Action.increment());
  }

  decrement() {
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
          <button onClick={this.decrement}>-1</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+1</button>
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
