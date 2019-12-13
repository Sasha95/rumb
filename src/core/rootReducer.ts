import { combineReducers } from "redux";
import { languageReducer } from "../components/language/languageReducer";

export const rootReducer = combineReducers({
  language: languageReducer
});
