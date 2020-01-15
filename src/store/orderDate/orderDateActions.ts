import { IOrderDate } from "./orderDateState";
import actionCreatorFactory from "typescript-fsa";

export const actionCreator = actionCreatorFactory();

export const set_order_date = actionCreator<IOrderDate>("SET_ORDER_DATE");