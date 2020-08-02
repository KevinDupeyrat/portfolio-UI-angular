import { UnsubscribeService } from './../../service/unsubscribe.service';
import { MenuActiveService } from './../../service/menu-active.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

  subscription = [];

  currentActive;

  constructor(private menuActiveService: MenuActiveService) { }

  ngOnInit(): void {
    this.subscription.push(this.menuActiveService.getShowMenuActiveEventStatus().subscribe( value => {
      this.currentActive = value;
    }));
  }

  scrollToElement(element: any): void {
    this.menuActiveService.setScrollIntoView(element);
  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscription);
  }

}
