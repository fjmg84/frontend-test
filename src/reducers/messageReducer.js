import { TYPES } from "../redux/types";

const initialState = { edit: {}, messages: [] };

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_MESSAGE:
      const messageEditable = state.edit.id || undefined;
      if (messageEditable) {
        /* Mapping through the messages array and returning a new array with the message that has been
        edited. */
        const messagesNewList = state.messages.map((message) => {
          if (message.id === messageEditable)
            message.message = action.payload.message;
          return message;
        });
        state.edit = {};
        return {
          ...state,
          messages: messagesNewList,
        };
      } else return { ...state, messages: [...state.messages, action.payload] };
    case TYPES.EDIT_MESSAGE:
      /* Returning the state and the edit object. The edit object is the message that is being edited. */
      return {
        ...state,
        edit: state.messages.filter(
          (message) => message.id === action.payload.id
        )[0],
      };
    case TYPES.REMOVE_MESSAGE:
      /* Returning the state and the messages array. The messages array is the array of messages that
      is being filtered. */
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload.id
        ),
      };
    case TYPES.REMOVE_MESSAGE_THIS_CHANNEL:
      /* Returning the state and the messages array. The messages array is the array of messages that
      is being filtered. */
      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.channel !== action.payload.channel
        ),
      };
    default:
      return state;
  }
};
