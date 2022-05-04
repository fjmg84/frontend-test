import { TYPES } from "../redux/types";

export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_MESSAGE:
      return [...state, action.payload];
    case TYPES.REMOVE_MESSAGE_THIS_CHANNEL:
      return state.filter(
        (message) => message.channel !== action.payload.channel
      );
    default:
      return state;
  }
};
