import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEjerciciosComponent } from './home-ejercicios.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ComponentesModule } from '../../componentes/componentes.module';


@NgModule({
  declarations: [HomeEjerciciosComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    ComponentesModule
  ]
})
export class HomeEjerciciosModule { }
