import {actionCreator} from "../../core/common/actionCreator";
import {IValute} from "../../api/dto/Valutes.g";
import { IEmpty } from "../../core/common/empty";

export const getValutes = actionCreator.async<IEmpty, IValute[], Error>("GET_VALUTES");
export const setValute = actionCreator.async<IValute, IEmpty, Error>("SET_VALUTE");