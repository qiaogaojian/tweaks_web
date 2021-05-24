import * as Action from "../consts/ActionType";

export function todoAdd(content) {
  return { type: Action.TODO_ADD, content: content };
}

export function todoRemove(id) {
  return { type: Action.TODO_REMOVE, id: id };
}

export function todoChange(text) {
  return { type: Action.TODO_CHANGE, text: text };
}
