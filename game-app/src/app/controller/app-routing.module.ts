import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';


import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../component/header/header.component';
import { PlayerListComponent } from '../component/player-list/player-list.component';
import { AdminloginComponent } from '../component/adminlogin/adminlogin.component';
import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes=[
{path: 'adminlogin',  component: AdminloginComponent},
{ path: '**', component: PageNotFoundComponent }

]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }