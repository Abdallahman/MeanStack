import { Component, OnInit } from '@angular/core';

import { Player } from '../../controller/player';
import { PLAYERS } from '../../controller/mock-players';
import { GameService } from '../../controller/service/game.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  player: Player[];
 
  selectedPlayer: Player;


  constructor(private gameSerivce: GameService) { }

  ngOnInit() {
    this.gameSerivce.getUsers();
  }
  onSelect(player: Player):void {
    this.selectedPlayer = player;
  }
}
