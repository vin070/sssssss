import { call, put, select, takeLatest } from "redux-saga/effects";
import API_END_POINTS from "../../integration/integration";
import { getApiData } from "../fetcher";
import { flightConstants, flightActions } from "../actions/flight";
import {
  addSeatClassInResponse,
  filterFlights,
  searchFlights,
  sortFlights,
} from "../../utils/utils";

// worker saga for flights
function* fetchFlightList({ payload }) {
  try {
    const flightList = yield call(getApiData, API_END_POINTS.fetchFlights);
    const modifiedFlightList = addSeatClassInResponse(flightList);
    yield put(flightActions.setFlightList(modifiedFlightList));
  } catch (error) {
    yield put({
      type: flightConstants.GET_FLIGHT_LIST_FAILED,
      message: error.message,
    });
  }
}

function* searchFlightList({ payload }) {
  try {
    const flightList = yield call(getApiData, API_END_POINTS.fetchFlights);
    const modifiedFlightList = addSeatClassInResponse(flightList);
    const searchedFlightList = searchFlights(modifiedFlightList, payload);
    yield put(flightActions.setFlightList(searchedFlightList));
  } catch (error) {
    yield put({
      type: flightConstants.SEARCH_FLIGHT_LIST_FAILED,
      message: error.message,
    });
  }
}
function* applyFilters({ payload }) {
  try {
    const flightList = yield select(
      ({ flightReducer }) => flightReducer.flightList
    );
    const filteredFlightList = filterFlights(flightList, payload);
    yield put(flightActions.setFlightList(filteredFlightList));
  } catch (error) {
    yield put({
      type: flightConstants.APPLY_FILTERS_FAILED,
      message: error.message,
    });
  }
}
function* applySort({ payload }) {
  try {
    const flightList = yield select(
      ({ flightReducer }) => flightReducer?.flightList
    );
    const sortedFlightList = sortFlights(flightList, payload);
    yield put(flightActions.setFlightList(sortedFlightList));
  } catch (error) {
    yield put({
      type: flightConstants.APPLY_SORT_FAILED,
      message: error.message,
    });
  }
}

// watcher saga for flights
function* flightSaga() {
  yield takeLatest(flightConstants.GET_FLIGHT_LIST_REQUESTED, fetchFlightList);
  yield takeLatest(
    flightConstants.SEARCH_FLIGHT_LIST_REQUESTED,
    searchFlightList
  );
  yield takeLatest(flightConstants.APPLY_FILTERS_REQUESTED, applyFilters);
  yield takeLatest(flightConstants.APPLY_SORT_REQUESTED, applySort);
}

export default flightSaga;
