import { createStore, applyMiddleware, combineReducers } from "redux";
import countReducer from "./CountReducer";
import thunk from "redux-thunk";

const allReducer = combineReducers({
  countState: countReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk));

export default store;
