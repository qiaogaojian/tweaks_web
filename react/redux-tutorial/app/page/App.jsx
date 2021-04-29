import React from "react";
import ReactDOM from "react-dom";
import { UserContext, Nav, Body } from "../component/user-info/user-info.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        avatar:
          "https://upload.jianshu.io/users/upload_avatars/3947109/812fee1a-4941-4470-8678-e34c77281711.jpg",
        name: "Michael",
        followers: 12680,
        following: 23,
      },
    };
  }

  render() {
    const { user } = this.state;
    return (
      <div className="app">
        <UserContext.Provider value={this.state.user}>
          <Nav />
          <Body />
        </UserContext.Provider>
      </div>
    );
  }
}
