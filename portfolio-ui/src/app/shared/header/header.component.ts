import { UnsubscribeService } from './../../service/unsubscribe.service';
import { MenuActiveService } from './../../service/menu-active.service';
import { MenuShowEventService } from './../../service/menu-show-event.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription = [];

  constructor(
    private menuShowEventService: MenuShowEventService,
    private menuActiveService: MenuActiveService
  ) { }

  ngOnInit(): void {
    this.subscription.push(this.menuActiveService.getShowMenuActiveEventStatus().subscribe(value => {
      if (value === 1) {
        document.getElementById('toolbar').style.opacity = '0.5';
        return;
      }
      document.getElementById('toolbar').style.opacity = '1';
    }));
  }

  openSideBare(): void {
    this.menuShowEventService.setShowMenuEventStatus(true);
  }

  openLinkedinLink(): void {
    window.open('https://www.linkedin.com/in/kevin-dupeyrat/', '_blank');
  }

  openGithubLink(): void {
    window.open('https://github.com/KevinDupeyrat/', '_blank');
  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscription);
  }

}
