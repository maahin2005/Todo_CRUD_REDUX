import axios from "axios";
import { GET_API_TODOS } from "./actionTypes";

// const API_URL = "https://dummyjson.com/todos";
const API_URL = "http://localhost:8080/todos";

const getAPItodos = (APITodoArray) => ({
  type: GET_API_TODOS,
  payload: APITodoArray,
});

export const getAllTodos = async (dispatch) => {
  try {
    let resp = await axios.get(API_URL);

    dispatch(getAPItodos(resp.data));
  } catch (error) {
    console.log(error);
  }
};

export const postTodoRequest = (newTodoObj) => {
  try {
    axios.post(API_URL, newTodoObj);
  } catch (error) {
    console.log(error);
  }
};

export const makeToggleStatusPostRequest = (id, status) => async (dispatch) => {
  const API_URL_ID = `http://localhost:8080/todos/${id}`;

  try {
    await axios.patch(API_URL_ID, {
      status: !status,
    });
    dispatch(getAllTodos);
  } catch (error) {
    console.log(error);
  }
};

export const makeTitlePostRequest = (id, newTask) => async (dispatch) => {
  const API_URL_ID = `http://localhost:8080/todos/${id}`;
  try {
    await axios.patch(API_URL_ID, {
      title: newTask,
    });
    dispatch(getAllTodos);
  } catch (error) {
    console.log(error);
  }
};

export const makeDeleteRequest = (id) => async (dispatch) => {
  const API_URL_ID = `http://localhost:8080/todos/${id}`;
  try {
    await axios.delete(API_URL_ID);
    dispatch(getAllTodos);
  } catch (error) {
    console.log(error);
  }
};
