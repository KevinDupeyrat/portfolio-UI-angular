import { UnsubscribeService } from './service/unsubscribe.service';
import { MenuActiveService } from './service/menu-active.service';
import { MailDialogComponent } from './shared/mail-dialog/mail-dialog.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Component, ViewChild, OnInit, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  subscription = [];

  @ViewChild('sidenav') sidenav: MatSidenav;

  @ViewChild('home', { static: true }) homeElement: ElementRef;
  @ViewChild('apropos', { static: true }) aproposElement: ElementRef;
  @ViewChild('service', { static: true }) serviceElement: ElementRef;
  @ViewChild('experience', { static: true }) experienceElement: ElementRef;


  homeOffset = null;
  aproposOffset = null;
  serviceOffset = null;
  experienceOffset = null;

  currentActive = 1;

  constructor(private dialog: MatDialog,
              private menuActiveService: MenuActiveService) {
  }


  ngOnInit(): void {

    const elementsRef: Array<ElementRef> = [
      this.homeElement,
      this.aproposElement,
      this.serviceElement,
      this.experienceElement
    ];

    this.homeOffset = this.homeElement.nativeElement.offsetTop;
    this.aproposOffset = this.homeOffset + 400;
    this.serviceOffset = this.aproposOffset + 600;
    this.experienceOffset = this.serviceOffset + 600;

    this.subscription.push(this.menuActiveService.getScrollIntoView().subscribe(value => {
      if (value === 0) {
        return;
      }
      elementsRef[value - 1].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }));
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    const yOffset = window.pageYOffset;

    if (yOffset >= this.homeOffset && yOffset < this.aproposOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(1);
    } else if (yOffset >= this.aproposOffset && yOffset < this.serviceOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(2);
    } else if (yOffset >= this.serviceOffset && yOffset < this.experienceOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(3);
    } else if (yOffset >= this.experienceOffset) {
      this.menuActiveService.setShowMenuActiveEventStatus(4);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MailDialogComponent, {
      width: '60rem',
      height: '35rem',
      backdropClass: 'backdropBackground'
    });

  }

  ngOnDestroy(): void {
    UnsubscribeService.unsubscribe(this.subscription);
  }

}
