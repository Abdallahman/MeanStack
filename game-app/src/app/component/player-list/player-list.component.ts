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
 
 
  playe$ : Object;
  selectedPlayer: Player;

  constructor(private gameService: GameService) {}
      
    ngOnInit() {
      this.gameService.getUsers().subscribe(
        gameService=>this.playe$ = gameService
      )
      
    }
  onSelect(player: Player):void {
    this.selectedPlayer = player;
  }

}
