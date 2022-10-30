import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';



@NgModule({
  declarations: [
    GestprodComponent,
    ProductAddComponent,
    ShowProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    GestprodComponent,
    ProductAddComponent
  ]
})
export class GestprodModule { }
