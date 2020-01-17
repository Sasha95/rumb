import { IAppState } from "../../core/mainReducer";

export const currentValuteSelector = (state: IAppState) => state.current_valute;