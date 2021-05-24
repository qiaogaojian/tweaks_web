import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import Counter from "../component/counter/counter.jsx";
import Hello from "../component/hello/Hello.jsx";
import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Switch>
            <Route path="/hello" component={Hello} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
