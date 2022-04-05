import { Injectable } from "@angular/core";
import { NATIVE_TYPES } from "../../_core/enums/native-types.enum";

@Injectable()
export class GlobalSearchHelperService {
    constructor() {}

    public filterObjectBySearchTerm = (object: any, searchTerm: string) => {
        return this.filterObjectBySearchTermWithParsedSearchTerm(object, searchTerm.toLocaleLowerCase(), parseInt(searchTerm));
    }

    private filterObjectBySearchTermWithParsedSearchTerm = (object: any, searchTerm: string, searchTermAsNumber: number): boolean => {
        return Object.values(object).some((value: any) => {
                if (typeof value === NATIVE_TYPES.NUMBER && searchTermAsNumber) {
                    return value == searchTermAsNumber;
                } else if (typeof value === NATIVE_TYPES.STRING) {
                    return value.toLocaleLowerCase().includes(searchTerm);
                } else if (typeof value === NATIVE_TYPES.OBJECT) {
                    return this.filterObjectBySearchTermWithParsedSearchTerm(value, searchTerm, searchTermAsNumber);
                }
            });
    }
}