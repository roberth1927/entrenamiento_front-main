import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEjerciciosModule } from './pages/home-ejercicios/home-ejercicios.module';
import { EjerciciosRoutingModule } from './ejercicios-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeEjerciciosModule,
    EjerciciosRoutingModule,
  ]
})
export class EjerciciosModule { }
