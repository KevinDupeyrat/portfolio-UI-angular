import { UnsubscribeService } from './../../service/unsubscribe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {

  subscription = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscription);
  }

}
