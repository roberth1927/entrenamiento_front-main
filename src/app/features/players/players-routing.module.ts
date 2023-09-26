import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePlayersModule } from './pages/home-players/home-players.module';


const routes: Routes = [
  {
    component: HomePlayersModule,
    path: '',

  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PlayersRoutingModule { }
