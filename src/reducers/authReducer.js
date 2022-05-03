import { TYPES } from "../redux/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.LOGIN:
      return { isLogin: action.payload };
    default:
      return state;
  }
};
