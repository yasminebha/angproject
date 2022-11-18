import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: "", component: ProductListComponent, },
  {
    path: 'create', component: ProductAddComponent
  },
  { path: ":id", component: ShowProductComponent },
  { path: ":id/update", component: UpdateProductComponent },
  { path: ":id/delete", component: DeleteProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestprodRoutingModule { }
