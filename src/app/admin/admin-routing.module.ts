import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';


// Hint: using ":" refers to dynamic url param declaration, example :id or :product_id

const routes: Routes = [
  { path: "", component: AdminComponent },
  {
    path: "",
    loadChildren: () => import("./gestprod/gestprod.module").then(m => m.GestprodModule),
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

