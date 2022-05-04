import { TYPES } from "../redux/types";

const initialState = JSON.parse(window.localStorage.getItem("login"));

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return action.payload;
    case TYPES.LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
