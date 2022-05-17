import { AddressBookStateService } from './address-book/services/address-book.state-service';
import { SideSheetRendererService } from './side-sheet/services/side-sheet-renderer.service';
import { SideSheetStateService } from './side-sheet/services/side-sheet.state.service';
import { ContactsDataService } from './_data-services/contacts.data-service';

export const APP_PROVIDERS = [
  ContactsDataService,

  AddressBookStateService,
  SideSheetRendererService,
  SideSheetStateService,
];
