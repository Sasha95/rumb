import {ILanguages} from "./dto/Languages.g";
import {languages as langs} from "./mock/languages";

let languages = langs;

export const LanguagesGetData = async (): Promise<ILanguages[]> => {
    return languages; //api вместо мока
};

export const LanguageSetData = async (lang: ILanguages): Promise<boolean> => {
    return true //send lang to server
}