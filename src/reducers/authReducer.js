import { TYPES } from "../redux/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { ...state, state: action.payload };
    default:
      return state;
  }
};
