import CountryReducer from "./CountryReducer";
import UserReducer from "./UserReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  CountryReducer: CountryReducer,
  UserReducer: UserReducer,
});

export default allReducers;
