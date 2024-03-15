import { all } from "redux-saga/effects";
import flightSaga from "./sagas/flight";

export default function* rootSaga() {
  yield all([flightSaga()]);
}
