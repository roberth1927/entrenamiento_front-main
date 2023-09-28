import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },


  {
    path: '/ejercicios',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  },

 /*  {
    path: '**',
    component: ErrorPageComponent
  } */
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
