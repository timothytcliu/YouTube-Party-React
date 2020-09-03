import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { Rooms } from "./room";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      rooms: Rooms,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
