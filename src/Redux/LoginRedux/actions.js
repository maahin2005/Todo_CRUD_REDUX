import axios from "axios";
import { LOGIN_SUCESS, LOGIN_UNSUCESS } from "./actionItems";
import {
  loginDone,
  setErrorIndecators,
  setLoadingIndecators,
} from "../AppStates/actions";

const loginSucceeded = (token) => ({
  type: LOGIN_SUCESS,
  payload: { isAuth: true, token },
});
export const loginUnsuccessful = () => ({
  type: LOGIN_UNSUCESS,
});

export const loginCredintied = (credentials) => async (dispatch) => {
  dispatch(setLoadingIndecators());
  let API_URL = "https://reqres.in/api/login";
  try {
    let resp = await axios.post(API_URL, credentials);

    resp.data.token
      ? dispatch(loginSucceeded(resp.data.token))
      : dispatch(loginUnsuccessful());

    dispatch(loginDone());
  } catch (error) {
    console.log(error);
    dispatch(setErrorIndecators());
  }
};
