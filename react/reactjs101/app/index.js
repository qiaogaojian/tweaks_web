import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./page/app.jsx";
import store from "./redux/DataStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
