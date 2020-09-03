import * as ActionTypes from "./ActionTypes";

export const addRoom = (room) => ({
  type: ActionTypes.ADD_ROOM,
  payload: room,
});
