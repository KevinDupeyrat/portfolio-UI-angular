import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ExperienceComponent } from './experience/experience.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatCarouselModule,
        MatProgressBarModule,
        MatGridListModule,
        MatExpansionModule
    ],
    declarations: [
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        ExperienceComponent
    ],
    exports: [
        HomeComponent,
        AboutComponent,
        ServicesComponent,
        MatCardModule,
        MatGridListModule,
        MatCarouselModule,
        ExperienceComponent,
        MatExpansionModule
    ],
    entryComponents: []

})
export class CoreModule {
}
