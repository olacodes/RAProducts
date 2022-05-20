import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
