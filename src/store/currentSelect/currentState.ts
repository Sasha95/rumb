import { reducerWithInitialState } from "typescript-fsa-reducers";
import {set_current} from "./currentActions"

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
.case(set_current, (state, result) => ({
    ...state,
    ...result
}))