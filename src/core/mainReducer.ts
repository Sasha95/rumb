import { Action, combineReducers } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { languageReducer } from "../components/language/languageReducer";
import { valuteReducer } from "../components/valute/valuteReducer";
import { currentReducer } from "../store/currentSelect/currentState";
import { orderDateReducer } from "../store/order/orderState";
import { currentValuteReducer } from "../store/currentValute/currentValuteState";


export const createMainReducer = () =>
combineReducers({
  language: languageReducer,
  valute: valuteReducer,
  current: currentReducer,  
  order: orderDateReducer,
  current_valute: currentValuteReducer,
});


export interface IAppState extends ReturnType<ReturnType<typeof createMainReducer>> {}

export interface IAppDispatch extends ThunkDispatch<IAppState, Error, Action> {}

export interface IThunkAction extends ThunkAction<Promise<void>, IAppState, {}, Action> {}