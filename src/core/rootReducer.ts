import { combineReducers } from "redux";
import { languageReducer } from "../components/language/languageReducer";
import { valuteReducer } from "../components/valute/valuteReducer";
import { currentReducer } from "../store/currentSelect/currentState";

export const rootReducer = combineReducers({
  language: languageReducer,
  valute: valuteReducer,
  current: currentReducer,  
});
