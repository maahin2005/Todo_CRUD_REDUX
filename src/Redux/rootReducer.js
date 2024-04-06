import { appStateReducer } from "./AppStates/reducer";
import { loginReducer } from "./LoginRedux/reducer";
import { todoReducer } from "./Todo/reducer";
import { combineReducers } from "redux";
import { themeReducer } from "./themeRedux/reducer";

export const rootReducer = combineReducers({
  todos: todoReducer,
  loginState: loginReducer,
  appState: appStateReducer,
  theme: themeReducer,
});
