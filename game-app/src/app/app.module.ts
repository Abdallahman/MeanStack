import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';
import { FormsModule }   from  '@angular/forms';
//import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './controller/app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { PlayerListComponent } from './component/player-list/player-list.component';
import { AdminloginComponent } from './component/adminlogin/adminlogin.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerListComponent,
    AdminloginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
