import { IAppState } from "../../core/mainReducer";

export const currentSelector = (state: IAppState) => state.current;