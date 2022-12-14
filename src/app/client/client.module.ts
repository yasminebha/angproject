import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutModule } from './about/about.module';
import { BannerComponent } from './banner/banner.component';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeModule } from './home/home.module';
import { AccountModule } from './account/account.module';
import { ShopModule } from './shop/shop.module';


 


@NgModule({
  declarations: [
    ClientComponent,
    BannerComponent,
   
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    AboutModule,
    HomeModule,
    AccountModule,
    ShopModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
