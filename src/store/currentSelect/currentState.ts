import { reducerWithInitialState } from "typescript-fsa-reducers";
import {set_current} from "./currentActions"
import { newState } from "../../core/common/newState";

export interface ICurrent {
    interests: string[];
    places: string;
    numberOfPeople: number;
    dateOfStart: string;
    dateOfEnd: string;
}

export const CurrentInitialState: ICurrent = {
    interests: [],
    places: "",
    numberOfPeople: 2,
    dateOfStart: "",
    dateOfEnd: ""
}

export const currentReducer = reducerWithInitialState<ICurrent>(CurrentInitialState)
.case(set_current, (state, result) => newState(state, {
    dateOfStart: result.dateOfStart,
    dateOfEnd: result.dateOfEnd,
    interests: result.interests,
    numberOfPeople: result.numberOfPeople,
    places: result.places
}))