import { UnsubscribeService } from './../../service/unsubscribe.service';
import { skillsModel } from './../../model/skill.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  skills = skillsModel;

  subscribe = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscribe);
  }

}
