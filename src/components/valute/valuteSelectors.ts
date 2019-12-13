import { createSelector } from "reselect";
import { IAppState } from "../../core/appState";

export const ValuteSelectors = {
  mapStateToProps: createSelector(
    (state: IAppState) => state.valute,
    valute => {
      return {
        valute
      };
    }
  )
};