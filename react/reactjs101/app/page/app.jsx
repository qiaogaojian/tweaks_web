import React from "react";
import Counter from "../component/counter/counter.jsx";
import "./app.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Counter />
      </div>
    );
  }
}
