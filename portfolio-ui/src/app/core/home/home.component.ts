import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [];

  constructor() { }

  ngOnInit(): void {

    this.slides = [
      {image : 'assets/images/laptop.jpg'},
      {image : 'assets/images/forest.jpg'},
      {image : 'assets/images/mac.jpg'}
    ];
  }

}
