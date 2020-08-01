import { MenuShowEventService } from './../../service/menu-show-event.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private menuShowEventService: MenuShowEventService) { }

  ngOnInit(): void {
  }

  openSideBare(): void {
    // this.menuShowEventService.setShowMenuEventStatus(true);
  }

  openLinkedinLink(): void {
    window.open('https://www.linkedin.com/in/kevin-dupeyrat/', '_blank');
  }

  openGithubLink(): void {
    window.open('https://github.com/KevinDupeyrat/', '_blank');
  }

}
