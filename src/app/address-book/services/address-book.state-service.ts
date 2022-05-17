import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { APP_CONSTS } from '../../_core/consts/app.consts';
import { GENDER } from '../../_core/enums/gender.enum';
import { IAction } from '../../_core/interfaces/action.interface';
import { ContactsDataService } from '../../_data-services/contacts.data-service';
import {
  ContactDto,
  ContactLocationDto,
} from '../../_data-services/_dtos/contact.dto';
import { RandomUserResponseDto } from '../../_data-services/_dtos/random-user-response.dto';
import { LoadNextContactsAction } from '../actions/load-next-contacts.action';
import { AddressBookState } from '../models/address-book.state';
import { Contact } from '../models/contact';

@Injectable()
export class AddressBookStateService {
  public state$: BehaviorSubject<AddressBookState>;
  public isLoading$: BehaviorSubject<boolean>;
  private state: AddressBookState;
  private isLoading: boolean;

  constructor(private contactsDataService: ContactsDataService) {
    this.state = new AddressBookState();
    this.state$ = new BehaviorSubject<AddressBookState>(this.state);
    this.isLoading = true;
    this.isLoading$ = new BehaviorSubject<boolean>(this.isLoading);

    this.contactsDataService
      .getAllContactsForUser('123')
      .pipe(take(1))
      .subscribe(this.onGetInitialContactsForUserSuccess);
  }

  public dispatch = (action: IAction) => {
    if (action instanceof LoadNextContactsAction) {
      this.handleLoadNextContactsAction();
    }
  };

  private publishStateUpdate = () => {
    this.state$.next(this.state);
  };

  private publishIsLoadingUpdate = () => {
    this.isLoading$.next(this.isLoading);
  };

  private onGetInitialContactsForUserSuccess = (
    response: RandomUserResponseDto
  ) => {
    this.state.contacts = response.results.map(this.mapContactDtoToContact);
    this.state.filteredContacts = this.state.contacts;
    this.isLoading = false;
    this.publishStateUpdate();
    this.publishIsLoadingUpdate();
  };

  private filterContacts = (searchTerm: string, contacts: Contact[]) => {
    if (searchTerm) {
      return contacts.filter((contact) => {
        const returnValue = this.searchHelperService.filterObjectBySearchTerm(
          contact,
          this.state.searchTerm
        );
        return returnValue;
      });
    } else {
      return contacts;
    }
  };

  private handleLoadNextContactsAction = () => {
    if (!this.isLoading) {
      this.isLoading = true;

      this.contactsDataService
        .getAllContactsForUser(null)
        .pipe(take(1))
        .subscribe(this.onGetMoreContactsSuccess);
    }
  };

  private onGetMoreContactsSuccess = (response: RandomUserResponseDto) => {
    this.state.contacts = this.state.contacts.concat(
      response.results.map(this.mapContactDtoToContact)
    );
    this.state.filteredContacts = this.filterContacts(
      this.state.searchTerm,
      this.state.contacts
    );
    this.isLoading = false;
    this.publishStateUpdate();
    this.publishIsLoadingUpdate();
  };

  private mapContactDtoToContact = (dto: ContactDto) => {
    return <Contact>{
      firstName: dto.name.first,
      lastName: dto.name.last,
      fullName: [dto.name.first, dto.name.last].join(' '),
      primaryNumber: dto.phone,
      cellNumber: dto.cell,
      email: dto.email,
      birthday: new Date(dto.dob.date).toLocaleDateString(
        'en-US',
        APP_CONSTS.BIRTHDAY_LONG_DATE_FORMAT_OPTIONS
      ),
      address: this.getAddressLabel(dto.location),
      profilePictureUrl: dto.picture.thumbnail,
      pictureUrl: dto.picture.large,
      age: dto.dob.age,
      gender: dto.gender,
      shortGenderLabel: this.getShortGenderLabel(dto.gender),
      fullGenderLabel: this.getFullGenderLabel(dto.gender),
      occupation: '',
    };
  };

  private getAddressLabel = (location: ContactLocationDto) => {
    return `${location.street.number} ${location.street.name}, ${location.city}, ${location.state}, ${location.postcode}`;
  };

  private getShortGenderLabel = (userGender: GENDER) => {
    switch (userGender) {
      case GENDER.MALE:
        return 'M';
      case GENDER.FEMALE:
        return 'F';
      case GENDER.NON_BINARY:
        return 'Non-Binary';
    }
  };

  private getFullGenderLabel = (userGender: GENDER) => {
    switch (userGender) {
      case GENDER.MALE:
        return 'Male';
      case GENDER.FEMALE:
        return 'Female';
      case GENDER.NON_BINARY:
        return 'Non-Binary';
    }
  };
}
