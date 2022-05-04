import { TYPES } from "../types";

export const addChannel = (name) => {
  let id = new Date().getTime();
  return {
    type: TYPES.ADD_CHANNEL,
    payload: { id, name },
  };
};

export const activeChannel = (id) => {
  return {
    type: TYPES.ACTIVE_CHANNEL,
    payload: { id },
  };
};

export const removeChannel = (id) => {
  return {
    type: TYPES.REMOVE_CHANNEL,
    payload: { id },
  };
};
