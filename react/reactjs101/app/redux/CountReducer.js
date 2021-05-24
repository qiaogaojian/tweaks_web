import * as Action from "../consts/ActionType";

const initState = {
  count: 0,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case Action.INCREMENT:
      state = { count: state.count + 1 };
      break;
    case Action.DECREMENT:
      state = { count: state.count - 1 };
      break;
    case Action.RESET:
      state = { count: 0 };
      break;
    default:
      return state;
  }
  console.log("CountReducer ", action, state);
  return state;
}
