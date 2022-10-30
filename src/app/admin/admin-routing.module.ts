import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProductComponent } from './gestprod/delete-product/delete-product.component';
import { ProductAddComponent } from './gestprod/product-add/product-add.component';
import { ShowProductComponent } from './gestprod/show-product/show-product.component';
import { UpdateProductComponent } from './gestprod/update-product/update-product.component';

const routes: Routes = [{
  path: 'admin/product/create', component: ProductAddComponent,
  // children: [
  //   { path: 'gestprod', component: GestprodComponent },
  //   { path: 'homeadm', component: HomeadmComponent }
  // ],
},
{ path: "admin/product/:id", component: ShowProductComponent },
{ path: "admin/product/:id/update", component: UpdateProductComponent },
{ path: "admin/product/:id/delete", component: DeleteProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
