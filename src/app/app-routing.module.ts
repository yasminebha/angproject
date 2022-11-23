import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './gestion-erreur/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'site', loadChildren: () => import("./client/client.module").then(m => m.ClientModule)
  },
  {
    path: 'admin', loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {path: '',redirectTo:'site/home',pathMatch:'full'},
  {path: "**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
