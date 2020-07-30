import { MenuShowEventService } from './../../service/menu-show-event.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuShowEventService: MenuShowEventService) { }

  ngOnInit(): void {
  }

}
