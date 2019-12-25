import { actionCreator } from "../../core/common/actionCreator";
import { ICurrent } from "./currentState";

export const set_current = actionCreator<ICurrent>("SET_CURRENT");

