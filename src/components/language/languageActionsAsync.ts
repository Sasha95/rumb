import {getLanguages, setLanguage} from "./languageActions"
import { LanguageSetData, LanguagesGetData } from "../../api/ApiRequestLanguages";
import { ILanguages } from "../../api/dto/Languages.g";
import { IThunkAction } from "../../core/mainReducer";

export const getDataLanguages = (): IThunkAction => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch(getLanguages.started({}));
            const answer = await LanguagesGetData();
            dispatch(getLanguages.done({ params: {}, result: answer }));
          } catch (error) {
            dispatch(getLanguages.failed(error));
          }
    }
}

export const setDataLanguage = (lang: ILanguages): IThunkAction => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch(setLanguage.started(lang));
            const answer = await LanguageSetData(lang);
            dispatch(setLanguage.done({ params: lang, result: answer }));
          } catch (error) {
            dispatch(setLanguage.failed(error));
          }
    }
}