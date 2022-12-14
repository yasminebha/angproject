import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarComponent } from '../sidebar/sidebar.component';

import { DeleteProductComponent } from './delete-product/delete-product.component';
import { GestprodRoutingModule } from './gestprod-routing.module';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    GestprodComponent,
    ProductAddComponent,
    ShowProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ProductListComponent,
    SidebarComponent
    

  ],
  imports: [
    FormsModule,
    CommonModule,
    GestprodRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    GestprodComponent,
    ProductAddComponent,
  ]
})
export class GestprodModule { }
