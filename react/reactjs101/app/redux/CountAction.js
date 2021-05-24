import * as Action from "../consts/ActionType";

export function increment() {
  return { type: Action.INCREMENT };
}
export function decrement() {
  return { type: Action.DECREMENT };
}
export function reset() {
  return { type: Action.RESET };
}
