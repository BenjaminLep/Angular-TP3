import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  url ='http://localhost:3000/players';

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(this.url);
  }

  addPlayers(value: any){
    let body = {
      lastname : value.lastname,
      firstname : value.firstname,
      position : value.position,
      age : value.age,

    }
    return this.http.post(this.url, body)
  }

}
