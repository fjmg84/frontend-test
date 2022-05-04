import { TYPES } from "../redux/types";

const initialState = { channel: [], active: {} };

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_CHANNEL: {
      return { ...state, channel: [...state.channel, action.payload] };
    }
    case TYPES.ACTIVE_CHANNEL:
      const active = state.channel.filter((ch) => ch.id === action.payload.id);
      return { ...state, active: active };

    case TYPES.REMOVE_CHANNEL: {
      return {
        ...state,
        channel: state.channel.filter((ch) => ch.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
