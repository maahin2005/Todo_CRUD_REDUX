import { legacy_createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import { thunk } from "redux-thunk";

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
