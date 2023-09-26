import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { LayoutModule } from '../shared/layout/layout.module';
import { HomePlayersComponent } from './players/pages/home-players/home-players.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    HomePlayersComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    LayoutModule

  ]
})
export class FeaturesModule { }
