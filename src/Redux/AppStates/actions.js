import { ALL_GOOD, ERROR_TRUE, LOADING_TRUE } from "./actionTypes";

export const setLoadingIndecators = () => ({
  type: LOADING_TRUE,
});
export const setErrorIndecators = () => ({
  type: ERROR_TRUE,
});
export const loginDone = () => ({
  type: ALL_GOOD,
});
