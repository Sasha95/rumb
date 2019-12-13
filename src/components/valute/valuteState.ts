import { IValute } from "../../api/dto/Valutes.g";


export interface IValutetate {
    error: string | null;
    isLoading: boolean;
    data: IValute[];
  }
  
  export const ValuteInitialState: IValutetate = {
    error: "",
    isLoading: false,
    data: []
  };