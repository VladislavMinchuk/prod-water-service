import { getValueByKey } from "../helpers";
import { dictionaryList } from "./dictionaryList";


/**
 * WARNING: dictionaryList - should be crete by yourself (sensitive file)
 * interface IDictionaryList { [key: string]: string[] };
 */
export const getLocationName = (locationCode: string): string => {
    const locationsKey = Object.keys(dictionaryList || {});
    const location = locationCode.toLocaleLowerCase();

    return locationsKey.find((dictItem) => {
        const codeList: string[] = getValueByKey(dictItem, dictionaryList);
        if (codeList.find(l => l === location)) return dictItem;
    });
}