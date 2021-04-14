import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return (
    <div>
      Hello <strong>React!</strong>
      <li>Node</li>
      <li>Npm</li>
      <li>Webpack</li>
      <p>1 + 2 = {1 + 2}</p>
    </div>
  );
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
