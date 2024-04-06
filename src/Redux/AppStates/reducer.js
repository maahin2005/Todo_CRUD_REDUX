import { ALL_GOOD, ERROR_TRUE, LOADING_TRUE } from "./actionTypes";

const defaultOne = {
  isLoading: false,
  isError: false,
};

export const appStateReducer = (state = defaultOne, { type, payload }) => {
  switch (type) {
    case LOADING_TRUE:
      return { isLoading: true, isError: false };
    case ERROR_TRUE:
      return { isLoading: false, isError: true };
    case ALL_GOOD:
      return { isLoading: false, isError: false };
    default:
      return state;
  }
};
