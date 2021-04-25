import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi0(props) {
  return (
    <div>
      Hello{" "}
      <strong>
        {props.firstName} {props.lastName}!
      </strong>
    </div>
  );
}

function Hi1({ firstName, lastName }) {
  return (
    <div>
      Hello{" "}
      <strong>
        {firstName} {lastName}!
      </strong>

      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
}

const Hi2 = ({ firstName, lastName }) => {
  return (
    <div id="hello">
      Hello{" "}
      <strong class="name">
        {firstName} {lastName}!
      </strong>
      <ol>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ol>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
      <br />1 + 2 = {1 + 2}
    </div>
  );
};

ReactDOM.render(
  <Hi1 firstName="Michael" lastName="Qiao" />,
  document.querySelector("#root")
);
