import { TYPES } from "../redux/types";

const initialState = JSON.parse(window.localStorage.getItem("login"));

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      /* Returning the payload from the action. */
      return action.payload;
    case TYPES.LOGOUT:
      /* Returning the payload from the action. */
      return action.payload;
    default:
      return state;
  }
};
