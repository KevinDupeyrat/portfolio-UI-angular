import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports: [
        MatCardModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    entryComponents: []

})
export class CoreModule {
}
