import CountryReducer from "./CountryReducer";
import LocationReducer from "./LocationReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  CountryReducer: CountryReducer,
  LocationReducer: LocationReducer,
});

export default allReducers;
