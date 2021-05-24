import React, { Component } from "react";
import { connect } from "react-redux";

import * as Action from "../../redux/ToDoListAction";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.onInputSubmit = this.addTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  addTodo(input) {
    this.props.dispatch(Action.todoAdd(this.props.text));
  }

  removeTodo(id) {
    this.props.dispatch(Action.todoRemove(id));
  }

  onInputChange(input) {
    this.props.dispatch(Action.todoChange(input.target.value));
  }

  render() {
    return (
      <div>
        <h3> TodoList</h3>
        <ul>
          {this.props.items.map((item) => (
            <li key={item.id}>
              {item.content}{" "}
              <button onClick={() => this.removeTodo(item.id)}>{"X"}</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.addTodo}>
          <input onChange={this.onInputChange} value={this.props.text} />
          <button>{"Add #" + (this.props.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.todoListState.text,
    items: state.todoListState.items,
  };
}

export default connect(mapStateToProps)(TodoList);
