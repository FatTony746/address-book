import { Component, Input } from "@angular/core";
import { Contact } from "../address-book/models/contact";

@Component({
    selector: 'app-contact-card',
    templateUrl: './contact-card.component.html',
    styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent {
    @Input() contact: Contact;
}