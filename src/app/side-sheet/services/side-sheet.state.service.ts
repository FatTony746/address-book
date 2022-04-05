import { Injectable } from '@angular/core';
import { SideSheetState } from '../models/side-sheet-state';
import { BehaviorSubject } from 'rxjs';
import { SIDE_SHEET_SLIDE_STATES } from '../animations/side-sheet-slide/side-sheet-slide.states';
import { SIDE_SHEET_SIZE } from '../enums/side-sheet-size.enum';
import { Contact } from '../../address-book/models/contact';
import { ContactDetailsComponent } from '../../contact-details/contact-details.component';
import { ContactDetailsSideSheetData } from '../models/contact-details-side-sheet-data';

@Injectable()
export class SideSheetStateService {

    private sideSheetState: SideSheetState = <SideSheetState> {
        isSideSheetOpen: false,
        sideSheetAnimationState: SIDE_SHEET_SLIDE_STATES.CLOSED,
    };

    public sideSheetState$: BehaviorSubject<SideSheetState> = new BehaviorSubject<SideSheetState>(this.sideSheetState);

    constructor() {}

    public openContactDetailsSideSheet = (contact: Contact) => {
        this.sideSheetState = <SideSheetState> {
            sideSheetSize: SIDE_SHEET_SIZE.LARGE,
            isSideSheetOpen: true,
            sideSheetAnimationState: SIDE_SHEET_SLIDE_STATES.OPEN,
            sideSheetComponent: ContactDetailsComponent,
            sideSheetComponentData: <ContactDetailsSideSheetData> {
                contact: contact
            }
        };

        this.sideSheetState$.next(this.sideSheetState);
    }

    public closeOverlay = () => {
        this.sideSheetState.isSideSheetOpen = false;
        this.sideSheetState.sideSheetAnimationState = SIDE_SHEET_SLIDE_STATES.CLOSED;

        this.sideSheetState$.next(this.sideSheetState);
    }
}