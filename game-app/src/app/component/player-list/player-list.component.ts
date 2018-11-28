import { Component, OnInit } from '@angular/core';
import { Player } from '../../controller/player';
import { PLAYERS } from '../../controller/mock-players';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
 
  player = PLAYERS;

  selectedPlayer: Player;

  constructor() { }

  onSelect(player: Player):void {
    this.selectedPlayer = player;
  }
    ngOnInit() {
  }

}
