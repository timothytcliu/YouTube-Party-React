import * as ActionTypes from "./ActionTypes";

export const Rooms = (
  state = {
    room: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_ROOM:
      return { ...state, room: action.payload };
    default:
      return state;
  }
};
