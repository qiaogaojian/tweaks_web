import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import Hello from "../component/hello/Hello.jsx";
import Counter from "../component/counter/Counter.jsx";
import Timer from "../component/timer/Timer.jsx";
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
            <Route path="/timer" component={Timer} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
