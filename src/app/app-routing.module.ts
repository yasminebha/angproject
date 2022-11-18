import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'site', loadChildren: () => import("./client/client.module").then(m => m.ClientModule)
  },
  {
    path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {path: '',redirectTo:'site/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
