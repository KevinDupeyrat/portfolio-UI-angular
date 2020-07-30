import { MenuShowEventService } from './../../service/menu-show-event.service';
import { Component, OnInit } from '@angular/core';

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
    this.menuShowEventService.setShowMenuEventStatus(true);
  }

  openLinkedinLink() {
    window.open('https://www.linkedin.com/in/kevin-dupeyrat/','_blank');
  }

  openLinkedinGithub() {
    window.open('https://github.com/KevinDupeyrat/','_blank');
  }

}
