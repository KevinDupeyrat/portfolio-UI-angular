import { API_CONSTANTE } from './../../config/api-constante';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class EmailService {

    constructor(private httpClient: HttpClient) {}

    postEmail(data: any): Observable<any> {
        return this.httpClient.post<any>(API_CONSTANTE.SERVER_HOST + '/email', JSON.stringify(data));
    }
}
