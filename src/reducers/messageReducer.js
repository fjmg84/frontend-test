import { TYPES } from "../redux/types";

export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
};
