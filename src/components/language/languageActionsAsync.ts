import {getLanguages, setLanguage} from "./languageActions"
import { SimpleThunk } from "../../common/simpleThunk";
import { LanguageSetData, LanguagesGetData } from "../../api/ApiRequestLanguages";
import { ILanguages } from "../../api/dto/Languages.g";

export const getDataLanguages = (): SimpleThunk => {
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

export const setDataLanguage = (lang: ILanguages): SimpleThunk => {
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