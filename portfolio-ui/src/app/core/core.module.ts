import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatCarouselModule,
        MatProgressBarModule,
        MatGridListModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ServicesComponent
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        MatCardModule,
        MatGridListModule,
        MatCarouselModule
    ],
    entryComponents: []

})
export class CoreModule {
}
