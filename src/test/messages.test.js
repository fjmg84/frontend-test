import { messageReducer } from "../reducers/messageReducer";
import { TYPES } from "../redux/types";

const initialState = {
  edit: {
    id: 3,
    message: "Hola Mundo! #3",
  },
  messages: [
    {
      id: 1,
      message: "Hola Mundo! #1",
    },
    {
      id: 2,
      message: "Hola Mundo! #2",
    },
    {
      id: 3,
      message: "Hola Mundo! #3",
    },
    {
      id: 4,
      message: "Hola Mundo! #4",
    },
  ],
};

/* A test for the reducer. */
describe("testing message reducers and actions", () => {
  /* Testing the messageReducer function. */
  test("list messages", () => {
    const state = messageReducer(initialState, {});
    console.log(state);
    expect(state).toEqual(initialState);
  });

  /* Testing the messageReducer function. */
  test("edit message", () => {
    let action = {
      type: TYPES.ADD_MESSAGE,
      payload: {
        message: "Hola Mundo! Editado...",
      },
    };
    const state = messageReducer(initialState, action);
    console.log(state);
    expect(state).toEqual({
      edit: {},
      messages: [
        { id: 1, message: "Hola Mundo! #1" },
        { id: 2, message: "Hola Mundo! #2" },
        { id: 3, message: "Hola Mundo! Editado..." },
        { id: 4, message: "Hola Mundo! #4" },
      ],
    });
  });
});
