import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestprodComponent } from './gestprod.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: "gestprod", component: ProductAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestprodRoutingModule { }
