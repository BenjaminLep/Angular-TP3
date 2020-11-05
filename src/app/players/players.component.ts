import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public players;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
   this.getplayers();
  }
  getplayers(){
    this.playersService.getPlayers()
    .subscribe( 
      data => { this.players = data}
    ,)
  }


}
