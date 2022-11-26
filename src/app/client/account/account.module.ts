import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    
  
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    
  ]
})
export class AccountModule { }
