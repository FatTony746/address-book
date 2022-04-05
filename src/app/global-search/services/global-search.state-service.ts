import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { IAction } from "../../_core/interfaces/action.interface";
import { UpdateSearchValueAction } from "../actions/update-search-value.action";
import { GlobalSearchState } from "../models/global-search.state";

@Injectable()
export class GlobalSearchStateService {

    public state$: BehaviorSubject<GlobalSearchState>;
    private state: GlobalSearchState;

    constructor() {
        this.state = new GlobalSearchState();
        this.state$ = new BehaviorSubject<GlobalSearchState>(this.state);
        this.publishUpdate();
    }

    public dispatch = (action: IAction) => {
        if (action instanceof UpdateSearchValueAction) {
            this.handleSearchChangeAction(action);
        }
    }

    private publishUpdate = () => {
        this.state$.next(this.state);
    }

    private handleSearchChangeAction = (action: UpdateSearchValueAction) => {
        this.state.searchValue = action.searchValue;
        this.publishUpdate();
    }
}