import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ClientComponent } from './client.component';
import { BannerComponent } from './banner/banner.component';




@NgModule({
  declarations: [
    ClientComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AboutModule,
    HomeModule,
    
   
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
