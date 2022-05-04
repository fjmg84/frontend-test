import { TYPES } from "../types";

export const login = (username) => {
  const payload = {
    username: username,
    avatar: "ok",
  };
  window.localStorage.setItem("login", JSON.stringify(payload));
  return {
    type: TYPES.LOGIN,
    payload,
  };
};

export const logout = () => {
  window.localStorage.removeItem("login");
  return {
    type: TYPES.LOGOUT,
    payload: {
      username: "",
      avatar: "",
    },
  };
};
