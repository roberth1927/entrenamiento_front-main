import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { EjerciciosModule } from './ejercicios/ejercicios.module';


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
        path: 'ejercicios',
        loadChildren: () => import('./ejercicios/ejercicios.module').then(m => m.EjerciciosModule)
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
