import { channelReducer } from "../reducers/channelReducer";
import { TYPES } from "../redux/types";

const channels = {
  channel: [],
  acvite: {},
};

/* This is a test to see if the channel reducer is working. */
describe("testing channel reducers and actions", () => {
  /* Testing to see if the channelReducer is working. */
  test("test channelReducer", () => {
    const state = channelReducer(channels, {});
    console.log(state);
    expect(state).toEqual(channels);
  });

  /* This is testing to see if the channelReducer is working. */
  test("test channelReducer add channel", () => {
    const action = {
      type: TYPES.ADD_CHANNEL,
      payload: {
        id: 1,
        name: "test1",
      },
    };
    const state = channelReducer(channels, action);
    console.log("🚀 ~ file: channel.test.js ~ line 36 ~ test ~ state", state);

    expect(state).toEqual({
      ...state,
      channel: [action.payload],
    });
  });
});
