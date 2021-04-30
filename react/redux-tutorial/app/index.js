import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./page/App.jsx";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as Action from "./consts/actions"

const initState = {
  count: 0,
};
const store = createStore(reducer);

function reducer(state = initState, action) {
  switch (action.type) {
    case Action.INCREMENT:
      state = { count: state.count + 1 };
      break;
    case Action.DECREMENT:
      state = { count: state.count - 1 };
      break;
    case Action.RESET:
      state = { count: 0 };
      break;
  }
  console.log("reducer", state, action);
  return state;
}

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
