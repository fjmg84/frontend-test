import { TYPES } from "../redux/types";

export const channelReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_CHANNEL: {
      return [...state, { channel: action.payload }];
    }
    case TYPES.REMOVE_CHANNEL: {
      return state.filter((ch) => ch.channel.id !== action.payload.id);
    }
    default:
      return state;
  }
};
