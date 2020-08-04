import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MailDialogComponent } from './mail-dialog/mail-dialog.component';
import { CommonModule } from '@angular/common';
import { WebDetailPopupComponent } from './web-detail-popup/web-detail-popup.component';
import { MatStepperModule } from '@angular/material/stepper';





@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatSlideToggleModule,
        CommonModule,
        MatStepperModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent,
        MailDialogComponent,
        WebDetailPopupComponent
    ],
    exports: [
        HeaderComponent,
        MenuComponent,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule
    ],
    entryComponents: []

})
export class SharedModule {
}
