import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActiveTabDirective } from './active-tab.directive';
import { ResetComponent } from './reset/reset.component';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    ActiveTabDirective,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ], bootstrap: [AccountComponent]
})
export class AccountModule { }
