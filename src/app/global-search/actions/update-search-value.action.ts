import { IAction } from "../../_core/interfaces/action.interface";

export class UpdateSearchValueAction implements IAction {
    constructor(public searchValue: string) {}
}