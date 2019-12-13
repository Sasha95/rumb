import { ILanguages } from "../../api/dto/Languages.g";


export interface ILanguageState {
    error: string | null;
    isLoading: boolean;
    data: ILanguages[];
    selected?: boolean
  }
  
  export const LanguageInitialState: ILanguageState = {
    error: "",
    isLoading: false,
    data: [],
  };