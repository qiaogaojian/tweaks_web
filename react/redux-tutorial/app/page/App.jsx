import React from "react";
import ReactDOM from "react-dom";
import { UserContext, Nav, Body } from "../component/user-info/user-info.jsx";
import { RoomContext, RoomStore, Room } from "../component/room/room.jsx";
import { Counter } from "../component/counter/counter.jsx";
import { createStore } from "redux";

const initState = {
  count: 0,
};
const store = createStore(reducer);

function reducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      state = { count: state.count + 1 };
      break;
    case "DECREMENT":
      state = { count: state.count - 1 };
      break;
    case "RESET":
      state = { count: 0 };
      break;
  }
  console.log("reducer", state, action);
  return state;
}

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

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

  //   render() {
  //     const { user } = this.state;
  //     return (
  //       <div className="app">
  //         <UserContext.Provider value={this.state.user}>
  //           <Nav />
  //           <Body />
  //         </UserContext.Provider>
  //       </div>
  //     );
  //   }

  //   render() {
  //     return (
  //       <RoomStore>
  //         <div className="app">
  //           <Room />
  //         </div>
  //       </RoomStore>
  //     );
  //   }

  render() {
    return (
      <div className="app">
        <Counter />
      </div>
    );
  }
}
