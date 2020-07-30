import { MenuShowEventService } from './service/menu-show-event.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private menuShowEventService: MenuShowEventService) { }


  ngOnInit(): void {
    this.menuShowEventService.getShowMenuEventStatus().subscribe(event => {

      if (!this.sidenav) {
        return;
      }

      if (event) {
        this.sidenav.open();
        return;
      }

      this.sidenav.close();
    });
  }

  close(): void {
    this.sidenav.close();
  }

}
