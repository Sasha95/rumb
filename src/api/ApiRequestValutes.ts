import {IValute} from "./dto/Valutes.g";
import {valutes} from "./mock/valutes";

export const ValutesGetData = async (): Promise<IValute[]> => {
    return valutes; //api вместо мока
};

export const ValuteSetData = async (valute: IValute): Promise<boolean> => {
    return true //send lang to server
}