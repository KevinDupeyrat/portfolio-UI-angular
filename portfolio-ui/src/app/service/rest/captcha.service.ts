import { API_CONSTANTE } from './../../config/api-constante';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CaptchaService {

    constructor(private http: HttpClient) { }

    post(captcha): Observable<any> {
        return this.http.post(API_CONSTANTE.SERVER_HOST + '/technical/captcha', { captcha: captcha });

    }
}