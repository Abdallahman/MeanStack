import { BrowserModule } from '@angular/platform-browser';
import { NgModule }  from '@angular/core';


import { AppComponent } from '../app.component';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../component/header/header.component';
import { PlayerListComponent } from '../component/player-list/player-list.component';
import { AdminloginComponent } from '../component/adminlogin/adminlogin.component';
//import { PageNotFoundComponent } from '../component/page-not-found/page-not-found.component';
import { MainpageComponent} from '../component/mainpage/mainpage.component';
import { AdminAddplayerComponent} from '../component/admin-addplayer/admin-addplayer.component';
import {AdminEditplayerComponent} from '../component/admin-editplayer/admin-editplayer.component';
import {AdminGamelistComponent} from'../component/admin-gamelist/admin-gamelist.component';
import {AdminPalyerlistComponent} from '../component/admin-palyerlist/admin-palyerlist.component';



import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from '../component/footer/footer.component';


const appRoutes: Routes=[
{path: "",  redirectTo:'app-root', pathMatch:'full'},
{path: "adminlogin",  component: AdminloginComponent},
//{path: '**', component: PageNotFoundComponent },
{path:'mainpage' ,component: MainpageComponent },
{path:'player-list', component: PlayerListComponent},
{path:'admin-addplayer', component:AdminAddplayerComponent},
{path:'admin-editplayer/:id', component:AdminEditplayerComponent},
{path:'admingamelist', component:AdminGamelistComponent},
{path: 'admin-playerlist', component: AdminPalyerlistComponent}


]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }