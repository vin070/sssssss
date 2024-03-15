import { combineReducers } from "redux";
import flightReducer from "./reducers/flight";

const rootReducer = combineReducers({
  flightReducer,
});
export default rootReducer;
