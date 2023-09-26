import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCardComponent } from './header-card/header-card.component';
import { ListPlayersComponent } from './list-players/list-players.component';



@NgModule({
  declarations: [
    HeaderCardComponent,
    ListPlayersComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ListPlayersComponent, HeaderCardComponent
  ]
})
export class ComponentsModule { }
