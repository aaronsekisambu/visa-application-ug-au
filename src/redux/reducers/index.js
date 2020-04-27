import { combineReducers } from "redux";
import authentication from "./authentication";
import pages from "./pages";

const rootReducer = combineReducers({
  authentication,
  pages
});

export default rootReducer;
