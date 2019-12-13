import {getValutes, setValute} from "./valuteActions"
import { SimpleThunk } from "../../common/simpleThunk";
import { ValutesGetData, ValuteSetData } from "../../api/ApiRequestValutes";
import { IValute } from "../../api/dto/Valutes.g";

export const getDataLanguages = (): SimpleThunk => {
    return async (dispatch): Promise<void> => {
        try {
            dispatch(getValutes.started({}));
            const answer = await ValutesGetData();
            dispatch(getValutes.done({ params: {}, result: answer }));
          } catch (error) {
            dispatch(getValutes.failed(error));
        }
    }
}

export const setDataLanguage = (valute: IValute): SimpleThunk => {
  return async (dispatch): Promise<void> => {
      try {
          dispatch(setValute.started(valute));
          const answer = await ValuteSetData(valute);
          dispatch(setValute.done({ params: valute, result: answer }));
        } catch (error) {
          dispatch(setValute.failed(error));
        }
  }
}