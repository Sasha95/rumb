import actionCreatorFactory from "typescript-fsa";
import { IValute } from "../../api/dto/Valutes.g";

export const actionCreator = actionCreatorFactory();

export const set_current_valute = actionCreator<IValute>("SET_CURENT_VALUTE");