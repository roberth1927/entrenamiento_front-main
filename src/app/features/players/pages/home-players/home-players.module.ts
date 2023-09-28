import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import {MatCardModule} from '@angular/material/card';
import { HomePlayersComponent } from './home-players.component';
import { SideMenuModule } from 'src/app/shared/side-menu/side-menu.module';


@NgModule({
  declarations: [HomePlayersComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MatCardModule,
    SideMenuModule
  ]
})
export class HomePlayersModule { }
