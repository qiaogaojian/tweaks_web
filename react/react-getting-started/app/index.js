// practice from https://daveceddia.com/react-getting-started-tutorial/
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

function Hi() {
  return <div>Hello World!</div>;
}

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

const Gate = ({ isOpen }) => {
  return <h2>Door is {isOpen ? "open" : "closed"}</h2>;
};

const Room = () => {
  const [isLight, setLight] = React.useState(false);

  return (
    <div className="room">
      the room is list {isLight ? "light" : "dark"}
      <br />
      <button onClick={() => setLight(!isLight)}>switch</button>
    </div>
  );
};

ReactDOM.render(<Room />, document.querySelector("#root"));
