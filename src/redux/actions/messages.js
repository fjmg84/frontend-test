import { TYPES } from "../types";

export const addMessage = (username, message, channel) => {
  let id = new Date().getTime();
  return {
    type: TYPES.ADD_MESSAGE,
    payload: {
      id,
      who: "me",
      username,
      message,
      channel,
      dateMessage: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    },
  };
};

export const removeMessageThisChannel = (channel) => {
  return {
    type: TYPES.REMOVE_MESSAGE_THIS_CHANNEL,
    payload: { channel },
  };
};

export const loadMessage = (channel) => {
  return new Promise((resolve, reject) => {
    resolve({
      type: TYPES.ADD_MESSAGE,
      payload: {
        id: new Date().getTime(),
        who: "he",
        username: "leo",
        channel,
        message:
          "Body Message Body MessageBody MessageBody MessageBody Message Body Message Body MessageBody MessageBody MessageBody Message",
        dateMessage: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
      },
    });
    reject("error loading message");
  });
};
