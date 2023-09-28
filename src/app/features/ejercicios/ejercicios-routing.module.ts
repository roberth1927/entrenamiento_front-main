import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEjerciciosComponent } from './pages/home-ejercicios/home-ejercicios.component';


const routes: Routes = [
  {
    component: HomeEjerciciosComponent,
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
export class EjerciciosRoutingModule { }
