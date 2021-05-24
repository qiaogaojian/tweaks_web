import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import countReducer from "./CountReducer";
import timerReducer from "./TimerReducer";
import todoListReducer from "./ToDoListReducer";

const allReducer = combineReducers({
  countState: countReducer,
  timerState: timerReducer,
  todoListState: todoListReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
