import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../controller/service/player.service';
import { Player } from '../../model/player';

@Component({
  selector: 'app-admin-palyerlist',
  templateUrl: './admin-palyerlist.component.html',
  styleUrls: ['./admin-palyerlist.component.scss'],
  providers:[PlayerService]
})
export class AdminPalyerlistComponent implements OnInit {

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.refreshPlayerList(); 
   }

   refreshPlayerList() {
     this.playerService.getPlayerList().subscribe((res) => {
       this.playerService.players = res as Player[];
     }
     );
   }

}
