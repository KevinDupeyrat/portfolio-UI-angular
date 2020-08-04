import { WebDetailPopupComponent } from './../../shared/web-detail-popup/web-detail-popup.component';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WebDetailPopupComponent, {
      width: '60rem',
      height: '30rem',
      backdropClass: 'backdropBackground'
    });
  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscribe);
  }

}
