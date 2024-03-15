export const flightConstants = {
  GET_FLIGHT_LIST_REQUESTED: "GET_FLIGHT_LIST_REQUESTED",
  GET_FLIGHT_LIST_SUCCESS: "GET_FLIGHT_LIST_SUCCESS",
  GET_FLIGHT_LIST_FAILED: "GET_FLIGHT_LIST_FAILED",

  SEARCH_FLIGHT_LIST_REQUESTED: "SEARCH_FLIGHT_LIST_REQUESTED",
  SEARCH_FLIGHT_LIST_SUCCESS: "SEARCH_FLIGHT_LIST_SUCCESS",
  SEARCH_FLIGHT_LIST_FAILED: "SEARCH_FLIGHT_LIST_FAILED",

  APPLY_FILTERS_REQUESTED: "APPLY_FILTERS_REQUESTED",
  APPLY_FILTERS_SUCCESS: "APPLY_FILTERS_SUCCESS",
  APPLY_FILTERS_FAILED: "APPLY_FILTERS_FAILED",

  APPLY_SORT_REQUESTED: "APPLY_SORT_REQUESTED",
  APPLY_SORT_SUCCESS: "APPLY_SORT_SUCCESS",
  APPLY_SORT_FAILED: "APPLY_SORT_FAILED",
};

export const flightActions = {
  getFlightList: (payload) => ({
    type: flightConstants.GET_FLIGHT_LIST_REQUESTED,
    payload,
  }),

  searchFlightList: (payload) => ({
    type: flightConstants.SEARCH_FLIGHT_LIST_REQUESTED,
    payload,
  }),

  applyFilters: (payload) => ({
    type: flightConstants.APPLY_FILTERS_REQUESTED,
    payload,
  }),
  
  sortFlights: (payload) => ({
    type: flightConstants.APPLY_SORT_REQUESTED,
    payload,
  }),

  setFlightList: (payload) => ({
    type: flightConstants.GET_FLIGHT_LIST_SUCCESS,
    payload,
  }),
};
