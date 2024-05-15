import { combineReducers } from "redux";
import teamsSlice from "../slices/saveSlice";
export const rootReducer = combineReducers({
  teams: teamsSlice,
});
