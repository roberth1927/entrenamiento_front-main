import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePlayersModule } from './pages/home-players/home-players.module';
import { PlayersRoutingModule } from './players-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePlayersModule,
    PlayersRoutingModule,

  ]
})
export class PlayersModule { }
