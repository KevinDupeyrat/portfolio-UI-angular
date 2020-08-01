import { skillsModel } from './../../model/skill.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills = skillsModel;

  constructor() { }

  ngOnInit(): void {
  }

}
