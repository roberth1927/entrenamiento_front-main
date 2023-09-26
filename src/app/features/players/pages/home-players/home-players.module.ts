import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import {MatCardModule} from '@angular/material/card';
import { HomePlayersComponent } from './home-players.component';


@NgModule({
  declarations: [HomePlayersComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule
  ]
})
export class HomePlayersModule { }
