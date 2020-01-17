import { reducerWithInitialState } from "typescript-fsa-reducers";
import {set_current_valute} from "./currentValuteActions"
import { IValute } from "../../api/dto/Valutes.g";

export const CurrentInitialState: IValute = {
    description: "доллар США",
    name: "USD",
    symbol: "$",
}

export const currentValuteReducer = reducerWithInitialState<IValute>(CurrentInitialState)
.case(set_current_valute, (state, result) => ({
    ...state,
    ...result
}))