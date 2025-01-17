import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';


import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
const routes: Routes = [{
  path: '', component: ClientComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'account', loadChildren:() => import('./account/account.module').then(m => m.AccountModule)},
   
    { path: 'shop', component: ShopComponent },

  
  ],
}]
  ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
