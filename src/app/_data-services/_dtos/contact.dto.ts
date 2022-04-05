import { GENDER } from "../../_core/enums/gender.enum"
import { NATIONALITY } from "../../_core/enums/nationality.enum";
import { TimeZone } from "../../_core/models/time-zone";

export class ContactNameDto {
    public title: string;
    public first: string;
    public last: string;
}

export class ContactLocationDto {
    public street: ContactLocationStreetDto;
    public city: string;
    public state: string;
    public postcode: string;
    public coordinates: Location;
    public timezone: TimeZone;
}

export class ContactLocationStreetDto {
    public name: string;
    public number: number;
}

export class ContactLoginMetaData {
    public uuid: string;
    public username: string;
    public password: string;
    public salt: string;
    public md5: string;
    public sha1: string;
    public sha256: string;
}

export class ContactDobDto {
    public date: string;
    public age: number;
}

export class ContactRegistrationDto {
    public date: string;
    public age: number;
}

export class ContactId {
    public name: string;
    public value: string;
}

export class ContactPicture {
    public large: string;
    public medium: string;
    public thumbnail: string;
}

export class ContactDto {
    public gender: GENDER;
    public name: ContactNameDto;
    public location: ContactLocationDto;
    public email: string;
    public login: ContactLoginMetaData;
    public dob: ContactDobDto;
    public registered: ContactRegistrationDto;
    public phone: string;
    public cell: string;
    public id: ContactId;
    public picture: ContactPicture;
    public nat: NATIONALITY;
}