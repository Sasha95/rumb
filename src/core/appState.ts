import { ILanguageState, LanguageInitialState } from "../components/language/languageState";
import { IValutetate, ValuteInitialState } from "../components/valute/valuteState";
import { ICurrent, CurrentInitialState } from "../store/currentSelect/currentState";
  
  export interface IAppState {
    language: ILanguageState;
    valute: IValutetate;
    current: ICurrent;
  }
  
  export const AppInitialState: IAppState = {
    language: LanguageInitialState,
    valute: ValuteInitialState,
    current: CurrentInitialState,
  };
  
  export function getAppInitialState(): IAppState {
    return AppInitialState;
  }