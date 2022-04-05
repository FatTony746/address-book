import { Component, Inject, OnInit } from "@angular/core";
import { Contact } from "../address-book/models/contact";
import { ContactDetailsSideSheetData } from "../side-sheet/models/contact-details-side-sheet-data";
import { APP_CONSTS } from "../_core/consts/app.consts";
import { ContactDetailDataField } from "./models/contact-detail-data-field";

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    public contact: Contact;
    public contactDetailDataFields: ContactDetailDataField[];

    constructor(@Inject(APP_CONSTS.SIDE_SHEET_DATA) private componentData: ContactDetailsSideSheetData) {}

    ngOnInit() {
        this.contact = this.componentData.contact;

        this.contactDetailDataFields = [
            <ContactDetailDataField> { label: 'primary', value: this.contact.primaryNumber },
            <ContactDetailDataField> { label: 'cell', value: this.contact.cellNumber },
            <ContactDetailDataField> { label: 'email', value: this.contact.email },
            <ContactDetailDataField> { label: 'birthday', value: this.contact.birthday },
            <ContactDetailDataField> { label: 'address', value: this.contact.address },
        ];
    }
}