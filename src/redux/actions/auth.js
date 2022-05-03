import { TYPES } from "../types";

export const login = (username) => {
  return {
    type: TYPES.LOGIN,
    payload: {
      username: username,
      avatar: "ok",
    },
  };
};
