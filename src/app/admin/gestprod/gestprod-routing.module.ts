import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestprodComponent } from './gestprod.component';

const routes: Routes = [
  {path:"gestprod",component:GestprodComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestprodRoutingModule { }
