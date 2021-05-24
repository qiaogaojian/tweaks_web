import * as Action from "../consts/ActionType";

export function tick() {
  return { type: Action.TICK };
}
