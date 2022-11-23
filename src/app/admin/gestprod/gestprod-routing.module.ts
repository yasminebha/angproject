import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ShowProductComponent } from './show-product/show-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: "gestprod", component: GestprodComponent, children:[
    { path: 'products', component: ProductListComponent },
    
     { path: 'products/create', component: ProductAddComponent },
 
  { path: "products/:id", component: ShowProductComponent },
  { path: "products/:id/update", component: UpdateProductComponent },
  { path: "products/:id/delete", component: DeleteProductComponent }
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestprodRoutingModule { }
