// practice from https://daveceddia.com/react-getting-started-tutorial/
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

const MediaCard = ({ title, body, imageUrl }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img src={imageUrl}></img>
    </div>
  );
};

ReactDOM.render(
  <MediaCard title="MediaCard" body="body" imageUrl="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"/>,
  document.querySelector("#root")
);
