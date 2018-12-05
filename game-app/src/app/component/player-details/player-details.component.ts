import { Component, OnInit } from '@angular/core';

import { Player } from '../../model/player';
import { PlayerService } from '../../controller/service/player.service';
import { NgForm } from '@angular/forms'
import { GameService } from '../../controller/service/game.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player[];
 
  selectedPlayer: Player;


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
   // this.gameSerivce.getUsers();
  }
  onSelect(player: Player):void {
    this.selectedPlayer = player;
  }
}
