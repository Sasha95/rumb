import { reducerWithInitialState } from "typescript-fsa-reducers";
import {set_order} from "./orderActions"

export interface IOrder {
    id: number;
    title: string;
    description: string;    
    dateOfStart: string;
    dateOfEnd: string;
    members: number;
    cost: number;
    services: number;
    sum: number;
}

export const OrderDateInitialState: IOrder = {
    id: 0,
    title: "",
    description: "",
    dateOfStart: "2020-01-15",
    dateOfEnd: "2020-01-19",
    cost: 0,
    members: 0,
    services: 0,
    sum: 0,
}

export const orderDateReducer = reducerWithInitialState<IOrder>(OrderDateInitialState)
.case(set_order, (state, result) => ({
    ...state,
    ...result
}))