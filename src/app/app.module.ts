import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClientModule } from './client/client.module';
import { GestionErreurModule } from './gestion-erreur/gestion-erreur.module';
import { AdminModule } from './admin/admin.module';




@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    NgbModule,
    
    AdminModule,
    GestionErreurModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
