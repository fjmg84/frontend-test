import { TYPES } from "../redux/types";

const initialState = { channel: [], active: {} };

export const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_CHANNEL: {
      /* Adding a channel to the state. */
      return { ...state, channel: [...state.channel, action.payload] };
    }
    case TYPES.ACTIVE_CHANNEL:
      /* Filtering the channel array and returning the channel that matches the id of the payload. */
      const active = state.channel.filter((ch) => ch.id === action.payload.id);
      return { ...state, active: active };

    case TYPES.REMOVE_CHANNEL: {
      /* Filtering the channel array and returning the channel that matches the id of the payload. */
      return {
        ...state,
        channel: state.channel.filter((ch) => ch.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
