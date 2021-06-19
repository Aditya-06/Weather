import { UPDATE_COUNTRY } from "../actions/CountryActions";

const CountryReducer = (state = "India", action) => {
  switch (action.type) {
    case UPDATE_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default CountryReducer;
