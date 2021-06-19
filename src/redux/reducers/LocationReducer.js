import { UPDATE_COORDINATES } from "../actions/LocationAction";

const LocationReducer = (state = [20.6, 78.9], action) => {
  switch (action.type) {
    case UPDATE_COORDINATES:
      return action.payload;
    default:
      return state;
  }
};

export default LocationReducer;
