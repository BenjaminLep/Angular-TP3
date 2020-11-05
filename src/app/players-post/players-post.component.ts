import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { PlayersComponent } from '../players/players.component';


@Component({
  selector: 'app-players-post',
  templateUrl: './players-post.component.html',
  styleUrls: ['./players-post.component.css']
})
export class PlayersPostComponent implements OnInit {

  public players;

  constructor(private playersService: PlayersService, private playersComponent: PlayersComponent) { }

  ngOnInit(): void {
    this.getplayers();
  }
  
  getplayers(){
    this.playersService.getPlayers()
    .subscribe( 
      data => { this.players = data}
    ,)
  }

  addplayers(value:any){
    let player = value;
    this.playersService.addPlayers(player)
    .subscribe( 
      data => { 
        this.getplayers();
         return true; }
    ,)
  }


}
