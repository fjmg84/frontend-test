import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";

const rootReducers = combineReducers({
  authReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
