import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeProductDetailComponent,
    HomeProductsComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
