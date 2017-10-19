import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from './services-page.component';
import { ServicesIntroComponent } from './services-intro/services-intro.component';
import { ServicesItemsComponent } from './services-items/services-items.component';
import { ServicesAdvantagesComponent } from './services-advantages/services-advantages.component';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ServicesPageComponent, ServicesIntroComponent, ServicesItemsComponent, ServicesAdvantagesComponent, ProgrammingLanguagesComponent, WhoWeAreComponent],
  exports: [ServicesPageComponent]
})
export class ServicesPageModule { }
