import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClientModule } from './client/client.module';
import { GestionErreurModule } from './gestion-erreur/gestion-erreur.module';
import { AdminModule } from './admin/admin.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    NgbModule,
    MatTabsModule,
    AdminModule,
    GestionErreurModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
