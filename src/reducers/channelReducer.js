import { TYPES } from "../redux/types";

export const channelReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_CHANNEL: {
      return [...state, { channel: action.payload }];
    }
    default:
      return state;
  }
};
