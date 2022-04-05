import { Contact } from "./contact";

export class AddressBookState {
    public contacts: Contact[];
    public filteredContacts: Contact[];
    public searchTerm: string;

    constructor() {
        this.contacts = [];
        this.filteredContacts = [];
        this.searchTerm = '';
    }
}