import { Component, OnInit } from '@angular/core';

import { Player1 } from '../../controller/player1';
import { PLAYERS } from '../../controller/mock-players';
import { GameService } from '../../controller/service/game.service';


@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
 
 
  playe$ : Object;
  selectedPlayer: Player1;

  constructor(private gameService: GameService) {}
      
    ngOnInit() {
      this.gameService.getUsers().subscribe(
        gameService=>this.playe$ = gameService
      )
      
    }
  onSelect(player: Player1):void {
    this.selectedPlayer = player;
  }

}
