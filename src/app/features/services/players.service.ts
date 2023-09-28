import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Player } from "src/core/reqResPlayers.interface";

@Injectable({
  providedIn: "root",
})
export class PlayersService {
  private apiPlayers = environment.apiPlayersTeams;

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http.get(`/api/jugadores`);
  }

  postPlayer(body: any) {
    return this.http.post<Player>(`/api/jugadores`, body);
  }

  putPlayer(body: Player) {
    return this.http.put(`/api/jugadores`, body);
  }

  getTeams() {
    return this.http.get(`/api/equipos`);
  }

  validateCode(code: string) {
    return this.http.get(`/api/jugadores/codigo/${code}`);
  }

}
