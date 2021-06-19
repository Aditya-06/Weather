// Action types
export const UPDATE_COORDINATES = "UPDATE_COORDINATES";

// Action Creators
export const update_coordinates = (latlng) => {
  return {
    type: "UPDATE_COORDINATES",
    payload: latlng,
  };
};
