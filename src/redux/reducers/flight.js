import { flightConstants } from "../actions/flight";

const initalState = {
  flightList: [],
  loading: false,
  error: null,
};

export default function flightReducer(
  state = initalState,
  { type, payload = {} }
) {
  switch (type) {
    case flightConstants.GET_FLIGHT_LIST_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case flightConstants.GET_FLIGHT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        flightList: payload,
      };
    case flightConstants.GET_FLIGHT_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}
