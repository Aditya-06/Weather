// Action types
export const UPDATE_COUNTRY = "UPDATE_COUNTRY";

// Action Creators
export const update_country = (value) => {
  return {
    type: UPDATE_COUNTRY,
    payload: value,
  };
};
