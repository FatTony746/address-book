import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { debounceTime, Subject, takeUntil } from "rxjs";
import { UpdateSearchValueAction } from "./actions/update-search-value.action";
import { GlobalSearchState } from "./models/global-search.state";
import { GlobalSearchStateService } from "./services/global-search.state-service";

@Component({
    selector: 'app-global-search',
    templateUrl: './global-search.component.html',
    styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit, OnDestroy {

    public searchPlaceholder: string;
    public searchInputControl: FormControl;

    private readonly DEFAULT_SEARCH_PLACEHOLDER = 'Search Contacts';

    private unsubscribe$: Subject<void> = new Subject<void>();

    constructor(private router: Router,
                private searchStateService: GlobalSearchStateService) {};

    ngOnInit() {
        this.searchStateService.state$.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(this.onSearchStateUpdate)

        this.searchPlaceholder = this.DEFAULT_SEARCH_PLACEHOLDER;
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    private onSearchStateUpdate = (updatedState: GlobalSearchState) => {
        if (!this.searchInputControl) {
            this.searchInputControl = new FormControl(updatedState.searchValue);
            this.searchInputControl.valueChanges.pipe(
                debounceTime(500)
            ).subscribe(this.onSearchInputChange);
        }
    }

    private onSearchInputChange = (searchValue: string) => {
        this.searchStateService.dispatch(new UpdateSearchValueAction(searchValue));
    }
}