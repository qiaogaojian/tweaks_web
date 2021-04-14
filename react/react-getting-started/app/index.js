import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi(props) {
  return (
    <div>
      Hello <strong>{props.name}!</strong>
    </div>
  );
}

ReactDOM.render(<Hi name="Qiao" />, document.querySelector("#root"));
