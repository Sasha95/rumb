import { createSelector } from "reselect";
import { IAppState } from "../../core/appState";

export const LanguageSelectors = {
  mapStateToProps: createSelector(
    (state: IAppState) => state.language,
    language => {
      return {
        language
      };
    }
  )
};