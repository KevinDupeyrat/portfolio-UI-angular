import { AddExperienceComponent } from './../../shared/add-experience/add-experience.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  panelOpenState = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  addExp(): void {
    console.log('coucou');
    const dialogRef = this.dialog.open(AddExperienceComponent, {
      width: '40rem',
      height: '30rem',
      backdropClass: 'backdropBackground'
    });
  }

}
