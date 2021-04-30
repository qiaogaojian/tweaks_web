import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "../component/counter/counter.jsx";
import Home from "../component/home/home.jsx";
import About from "../component/about/about.jsx";
import Contact from "../component/contact/contact.jsx";
import "./app.css";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
