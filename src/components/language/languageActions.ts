import {actionCreator} from "../../core/common/actionCreator";
import {ILanguages } from "../../api/dto/Languages.g";
import { IEmpty } from "../../core/common/empty";

export const getLanguages = actionCreator.async<IEmpty, ILanguages[], Error>("GET_LANGUAGES");
export const setLanguage = actionCreator.async<ILanguages, IEmpty, Error>("SET_LANGUAGE");