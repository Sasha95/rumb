import { reducerWithInitialState } from "typescript-fsa-reducers";
import {set_order_date} from "./orderDateActions"
import { newState } from "../../core/common/newState";

export interface IOrderDate {
    dateOfStart: string;
    dateOfEnd: string;
}

export const OrderDateInitialState: IOrderDate = {
    dateOfStart: "2020-01-15",
    dateOfEnd: "2020-01-19"
}

export const orderDateReducer = reducerWithInitialState<IOrderDate>(OrderDateInitialState)
.case(set_order_date, (state, result) => newState(state, {
    dateOfStart: result.dateOfStart,
    dateOfEnd: result.dateOfEnd
}))