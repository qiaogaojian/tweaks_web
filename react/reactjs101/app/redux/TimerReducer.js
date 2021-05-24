import * as Action from "../consts/ActionType";

const initState = {
  second: 0,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case Action.TICK:
      state = { second: state.second + 1 };
      break;
    default:
      return state;
  }
  console.log("TimerReducer ", action, state);
  return state;
}
