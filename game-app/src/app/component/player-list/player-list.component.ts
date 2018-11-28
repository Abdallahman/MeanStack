import { Component, OnInit } from '@angular/core';

import { Player } from '../../controller/player';
import { PLAYERS } from '../../controller/mock-players';
import { GameService } from '../../controller/service/game.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
 
  player: Player[];
 
  selectedPlayer: Player;

  constructor(private gameSerivce: GameService) {}
      
    ngOnInit() {
      this.gameSerivce.getUsers();
      
  }
  onSelect(player: Player):void {
    this.selectedPlayer = player;
  }

}
