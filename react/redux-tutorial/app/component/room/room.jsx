import React from "react";
import "./room.css";

export const RoomContext = React.createContext();

export class RoomStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLight: false };
    this.toggleLight = this.toggleLight.bind(this);
  }

  toggleLight() {
    let temState = { isLight: !this.state.isLight };
    this.setState(temState);
  }

  render() {
    return (
      <RoomContext.Provider
        value={{ isLight: this.state.isLight, onToggleLight: this.toggleLight }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

export const Room = () => (
  <RoomContext.Consumer>
    {({ isLight, onToggleLight }) => (
      <div className={`room ${isLight ? "light" : "dark"}`}>
        The room is {isLight ? "Light" : "Dark"}.
        <br />
        <button onClick={onToggleLight}> Toggle Light</button>
      </div>
    )}
  </RoomContext.Consumer>
);
