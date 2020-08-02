import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MenuActiveService {

    constructor() {}

    protected showMenuActiveEvent: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    protected scrollToView: BehaviorSubject<number> = new BehaviorSubject<number>(0);


    public getShowMenuActiveEventStatus(): Observable<number> {
        return this.showMenuActiveEvent;
    }

    public setShowMenuActiveEventStatus(active: number): void {
        this.showMenuActiveEvent.next(active);
    }

    public setScrollIntoView(view: any): void {
        this.scrollToView.next(view);
    }

    public getScrollIntoView(): Observable<number> {
        return this.scrollToView;
    }
}