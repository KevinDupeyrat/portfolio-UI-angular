import { MenuActiveService } from './../../service/menu-active.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  currentActive;

  constructor(private menuActiveService: MenuActiveService) { }

  ngOnInit(): void {
    this.menuActiveService.getShowMenuActiveEventStatus().subscribe( value => {
      this.currentActive = value;
    });
  }

  scrollToElement(element: any): void {
    
  }

}
