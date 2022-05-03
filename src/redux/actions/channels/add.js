import { TYPES } from "../../types";

export const addChannel = (name) => {
  let id = new Date().getTime();
  return {
    type: TYPES.ADD_CHANNEL,
    payload: { id, name },
  };
};
