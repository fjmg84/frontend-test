import { TYPES } from "../types";

export const addMessage = (username, message) => {
  let id = new Date().getTime();
  return {
    type: TYPES.ADD_MESSAGE,
    payload: {
      id,
      who: "me",
      username,
      message,
      dateMessage: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    },
  };
};

export const loadMessage = () => {
  return new Promise((resolve, reject) => {
    resolve({
      type: TYPES.ADD_MESSAGE,
      payload: {
        id: new Date().getTime(),
        who: "he",
        username: "leo",
        message:
          "Body Message Body MessageBody MessageBody MessageBody Message Body Message Body MessageBody MessageBody MessageBody Message",
        dateMessage: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      },
    });
    reject("error loading message");
  });
};
