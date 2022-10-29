import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GestionErreurModule } from './gestion-erreur/gestion-erreur.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    AdminModule,
    NgbModule,
    GestionErreurModule,
   
  
   
   
    
    

  
    
    
    
    
  ],
  

	
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
