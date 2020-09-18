import { API_CONSTANTE } from './../../config/api-constante';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private httpClient: HttpClient) {}

    putExperience(data: any): Observable<any> {
        return this.httpClient.put<any>(API_CONSTANTE.SERVER_HOST + '/experience', JSON.stringify(data));
    }

    getExperience(): Observable<any[]> {
        return this.httpClient.get<any>(API_CONSTANTE.SERVER_HOST + '/experience');

    }

    deletExperience(id: string): Observable<any> {
        return this.httpClient.delete<any>(API_CONSTANTE.SERVER_HOST + '/experience/' + id);
    }

}
