import { IOrder } from "./orderState";
import actionCreatorFactory from "typescript-fsa";

export const actionCreator = actionCreatorFactory();

export const set_order = actionCreator<Partial<IOrder>>("SET_ORDER_DATE");