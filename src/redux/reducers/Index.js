import CountryReducer from "./CountryReducer";
import LocationReducer from "./LocationReducer";

import { combineReducers } from "redux";

// Combine all reducers since createStore takes only one reducer param
const allReducers = combineReducers({
  CountryReducer: CountryReducer,
  LocationReducer: LocationReducer,
});

export default allReducers;
