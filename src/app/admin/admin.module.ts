import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GestprodModule } from './gestprod/gestprod.module';
import { HomeadmModule } from './homeadm/homeadm.module';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    GestprodModule,
    HomeadmModule,
    
    
  ]
})
export class AdminModule { }
