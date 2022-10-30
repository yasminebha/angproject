import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutModule } from './about/about.module';
import { BannerComponent } from './banner/banner.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    ClientComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AboutModule,
    HomeModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
