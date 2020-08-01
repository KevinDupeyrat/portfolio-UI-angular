import { MenuActiveService } from './service/menu-active.service';
import { MailDialogComponent } from './shared/mail-dialog/mail-dialog.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild, OnInit, HostListener, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  @ViewChild('home', { static: true }) homeElement: ElementRef;

  homeOffset = null;
  aproposOffset = null;
  serviceOffset = null;
  portfolioOffset = null;

  currentActive = 1;

  constructor(
    public dialog: MatDialog,
    private menuActiveService: MenuActiveService
    ) {

  }


  ngOnInit(): void {
    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.aproposOffset = this.homeOffset + 400;
    this.serviceOffset = this.aproposOffset + 600;
    this.portfolioOffset = this.serviceOffset + 600;
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    const yOffset = window.pageYOffset;

    if (yOffset >= this.homeOffset && yOffset < this.aproposOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(1);
    } else if (yOffset >= this.aproposOffset && yOffset < this.serviceOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(2);
    } else if (yOffset >= this.serviceOffset && yOffset < this.portfolioOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(3);
    } else if (yOffset >= this.portfolioOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(4);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MailDialogComponent, {
      width: '60rem',
      height: '30rem',
      backdropClass: 'backdropBackground'
    });

  }

}
