import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersRoutingModule } from './players-routing.module';
import { HomePlayersModule } from './pages/home-players/home-players.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePlayersModule,
    PlayersRoutingModule,

  ]
})
export class PlayersModule { }
