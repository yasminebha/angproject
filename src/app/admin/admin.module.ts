import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { GestprodModule } from './gestprod/gestprod.module';
import { HomeadmModule } from './homeadm/homeadm.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GestprodModule,
    HomeadmModule,
  ],
   exports: [AdminComponent]
})
export class AdminModule { }
