import {reducerWithInitialState} from "typescript-fsa-reducers";
import {getValutes, setValute} from "./valuteActions";
import {Failure, Success} from "typescript-fsa";
import {IEmpty} from "../../core/common/empty";
import {newState} from "../../core/common/newState";
import { ValuteInitialState, IValutetate } from "./valuteState";
import { IValute } from "../../api/dto/Valutes.g";

const getValutesStart = (state: IValutetate): IValutetate => {
    return newState(state, {error: null, isLoading: true})
}
const getValutesDone = (state: IValutetate, {result}: Success<IEmpty, IValute[]>): IValutetate => {
    return {...state, data: result, isLoading: false}
}
const getValutesFail = (state: IValutetate, result: Failure<IEmpty, Error>): IValutetate => {
    return newState(state, {error: result.error.message, isLoading: false})
}

const setValutesStart = (state: IValutetate): IValutetate => {
    return newState(state, {error: null, isLoading: true})
}
const setValutesDone = (state: IValutetate): IValutetate => {
    return {...state, isLoading: false}
}
const setValutesFail = (state: IValutetate, result: Failure<IEmpty, Error>): IValutetate => {
    return newState(state, {error: result.error.message, isLoading: false})
}

export const languageReducer = reducerWithInitialState(ValuteInitialState)
    .case(getValutes.started, getValutesStart)
    .case(getValutes.done, getValutesDone)
    .case(getValutes.failed, getValutesFail)    
    .case(setValute.started, setValutesStart)
    .case(setValute.done, setValutesDone)
    .case(setValute.failed, setValutesFail)
;