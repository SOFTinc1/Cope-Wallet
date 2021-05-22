import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


import { AngularMaterialModule } from "../angular-material.module";


import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    HeaderModule,
    FooterModule,
    AngularMaterialModule,
    CarouselModule
  ]
})
export class LandingModule { }
