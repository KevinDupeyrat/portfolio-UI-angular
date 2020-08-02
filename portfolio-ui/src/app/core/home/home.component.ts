import { UnsubscribeService } from './../../service/unsubscribe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscription = [];

  slides = [];

  constructor() { }

  ngOnInit(): void {

    this.slides = [
      {image : 'assets/images/laptop.jpg'},
      {image : 'assets/images/mac.jpg'},
      {image : 'assets/images/office.jpg'},

    ];
  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscription);
  }

}
