import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDetailPopupComponent } from './web-detail-popup.component';

describe('WebDetailPopupComponent', () => {
  let component: WebDetailPopupComponent;
  let fixture: ComponentFixture<WebDetailPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDetailPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
