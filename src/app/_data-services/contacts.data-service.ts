import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { RandomUserResponseDto } from "./_dtos/random-user-response.dto";

@Injectable()
export class ContactsDataService {

    private readonly baseUrl: string = 'https://randomuser.me/api/'

    constructor(private httpClient: HttpClient){}

    public getAllContactsForUser = (userId: string): Observable<RandomUserResponseDto> => {
        return this.httpClient.get(`${this.baseUrl}/?results=10`) as Observable<RandomUserResponseDto>;
    }
}