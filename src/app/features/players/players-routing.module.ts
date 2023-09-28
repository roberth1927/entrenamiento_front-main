import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePlayersComponent } from './pages/home-players/home-players.component';


const routes: Routes = [
  {
    component: HomePlayersComponent,
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
