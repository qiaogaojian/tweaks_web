import React, { Component } from "react";
import { connect } from "react-redux";

import * as Action from "../../redux/TimerAction";

class Timer extends Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.props.dispatch(Action.tick());
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="Timer">Second Elapsed: {this.props.second}</div>;
  }
}

function mapStateToProps(state) {
  return {
    second: state.timerState.second,
  };
}

export default connect(mapStateToProps)(Timer);
