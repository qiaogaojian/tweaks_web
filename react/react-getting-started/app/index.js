// practice from https://daveceddia.com/react-getting-started-tutorial/
import "./index.css";
import Hello from "./app.jsx";
import OneTimeButton from "./hook.jsx";
import { useLight } from "./hook";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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
  const [isLight,label, toggleLight, on, off] = useLight(true);
  const [temperature, setTemperature] = React.useState(22);
  const lightStyle = isLight ? "light" : "dark";
  return (
    <div className={`room ${lightStyle}`}>
      {/* <div className={`room ${isLight ? "light" : "dark"}`}> */}
      the room is {label}
      <br />
      <button onClick={toggleLight}>switch</button>
      <br />
      <button onClick={on}>on</button>
      <button onClick={off}>off</button>
      <br />
      the temperatuer in room is {temperature}
      <br />
      <button
        onClick={() => {
          setTemperature(temperature + 1);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          setTemperature(temperature - 1);
        }}
      >
        sub
      </button>
    </div>
  );
};

const Reddit = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/eos.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/eos</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.url}>{post.title}</a>
            <br />
            anthor: {post.author}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

function logTest() {
  console.log("Click OneTimeButton");
}

ReactDOM.render(<Room />, document.querySelector("#root"));
