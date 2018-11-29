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
import { HttpClientModule } from '@angular/common/http'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainpageComponent } from './component/mainpage/mainpage.component';
import { PlayerDetailsComponent } from './component/player-details/player-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerListComponent,
    AdminloginComponent,
    PageNotFoundComponent,
    MainpageComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
