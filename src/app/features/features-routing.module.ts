import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';


const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
     children: [
      {
        path: 'players',
        loadChildren: () => import('./players/players.module').then(m => m.PlayersModule)
      },
      {
        path: '**',
        redirectTo: 'players'
      }
    ]
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

export class FeaturesRoutingModule { }
