import * as Action from "../consts/ActionType";

const initState = {
  text: "",
  items: [],
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case Action.TODO_ADD:
      let curItem = { id: Date.now(), content: action.content };
      return { ...state, items: state.items.concat([curItem]), text: "" };
    case Action.TODO_REMOVE:
      let curItems = state.items.filter(function (item) {
        return item.id != action.id;
      });
      return {
        ...state,
        items: curItems,
      };
    case Action.TODO_CHANGE:
      return { ...state, text: action.text };
    default:
      return state;
  }
}
