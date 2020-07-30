import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MenuShowEventService {

    constructor() {}

    protected showMenuEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


    public getShowMenuEventStatus(): Observable<boolean> {
        return this.showMenuEvent;
    }

    public setShowMenuEventStatus(isShow: boolean): void {
        this.showMenuEvent.next(isShow);
    }

}
