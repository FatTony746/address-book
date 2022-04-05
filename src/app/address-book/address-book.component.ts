import { Component, OnInit } from "@angular/core";
import { Subscribable } from "rxjs";
import { SideSheetStateService } from "../side-sheet/services/side-sheet.state.service";
import { LoadNextContactsAction } from "./actions/load-next-contacts.action";
import { AddressBookState } from "./models/address-book.state";
import { Contact } from "./models/contact";
import { AddressBookStateService } from "./services/address-book.state-service";

@Component({
    selector: 'app-address-book',
    templateUrl: './address-book.component.html',
    styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {

    public state: AddressBookState;
    public isLoading$: Subscribable<boolean>;

    constructor(private addressBookStateService: AddressBookStateService,
                private sideSheetStateService: SideSheetStateService) {}

    ngOnInit() {
        this.addressBookStateService.state$
            .subscribe(this.onStateUpdate);
        
        this.isLoading$ = this.addressBookStateService.isLoading$;
    }

    public onContactSelected = (selectedContact: Contact) => {
        this.sideSheetStateService.openContactDetailsSideSheet(selectedContact);
    }

    public onScrollToBottom = () => {
        this.addressBookStateService.dispatch(new LoadNextContactsAction())
    }

    private onStateUpdate = (updatedState: AddressBookState) => {
        this.state = updatedState;
    }
}