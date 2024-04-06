import { LOGIN_SUCESS, LOGIN_UNSUCESS } from "./actionItems";

const defaultOne = {
  isAuth: false,
  token: null,
};

export const loginReducer = (state = defaultOne, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCESS:
      return payload;
    case LOGIN_UNSUCESS:
      return defaultOne;
    default:
      return state;
  }
};
