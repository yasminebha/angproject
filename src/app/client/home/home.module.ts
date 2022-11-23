import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';

import { HomeProductDetailComponent } from './home-product-detail/home-product-detail.component';
import { HomeProductsComponent } from './home-products/home-products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    HomeComponent,

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
