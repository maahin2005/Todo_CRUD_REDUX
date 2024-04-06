import { GET_API_TODOS } from "./actionTypes";

export const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_API_TODOS:
      return payload;
    default:
      return state;
  }
};
