import {reducerWithInitialState} from "typescript-fsa-reducers";
import {getLanguages, setLanguage} from "./languageActions";
import {Failure, Success} from "typescript-fsa";
import {IEmpty} from "../../core/common/empty";
import {newState} from "../../core/common/newState";
import { LanguageInitialState, ILanguageState } from "./languageState";
import { ILanguages } from "../../api/dto/Languages.g";

const getLanguagesStart = (state: ILanguageState): ILanguageState => {
    return newState(state, {error: null, isLoading: true})
}
const getLanguagesDone = (state: ILanguageState, {result}: Success<IEmpty, ILanguages[]>): ILanguageState => {
    return {...state, data: result, isLoading: false}
}
const getLanguagesFail = (state: ILanguageState, result: Failure<IEmpty, Error>): ILanguageState => {
    return newState(state, {error: result.error.message, isLoading: false})
}

const setLanguagesStart = (state: ILanguageState): ILanguageState => {
    return newState(state, {error: null, isLoading: true})
}
const setLanguagesDone = (state: ILanguageState): ILanguageState => {
    return {...state, isLoading: false}
}
const setLanguagesFail = (state: ILanguageState, result: Failure<IEmpty, Error>): ILanguageState => {
    return newState(state, {error: result.error.message, isLoading: false})
}

export const languageReducer = reducerWithInitialState(LanguageInitialState)
    .case(getLanguages.started, getLanguagesStart)
    .case(getLanguages.done, getLanguagesDone)
    .case(getLanguages.failed, getLanguagesFail)
    .case(setLanguage.started, setLanguagesStart)
    .case(setLanguage.done, setLanguagesDone)
    .case(setLanguage.failed, setLanguagesFail)
;