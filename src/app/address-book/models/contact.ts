import { GENDER } from "../../_core/enums/gender.enum";

export class Contact {
    public firstName: string;
    public lastName: string;
    public fullName: string;

    public primaryNumber: string;
    public cellNumber: string;

    public email: string;
    public birthday: string;
    public address: string;

    public profilePictureUrl: string;
    public pictureUrl: string;

    public age: number;
    public gender: GENDER;
    public shortGenderLabel: string;
    public fullGenderLabel: string;

    public occupation: string;
}