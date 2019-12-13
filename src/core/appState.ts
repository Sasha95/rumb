import { ILanguageState, LanguageInitialState } from "../components/language/languageState";
import { IValutetate, ValuteInitialState } from "../components/valute/valuteState";
  
  export interface IAppState {
    language: ILanguageState;
    valute: IValutetate;
  }
  
  export const AppInitialState: IAppState = {
    language: LanguageInitialState,
    valute: ValuteInitialState,
  };
  
  export function getAppInitialState(): IAppState {
    return AppInitialState;
  }