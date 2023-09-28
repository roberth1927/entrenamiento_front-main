import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioParImparComponent } from './ejercicio-par-impar/ejercicio-par-impar.component';
import { EjercicioAnagramaComponent } from './ejercicio-anagrama/ejercicio-anagrama.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MonedasComponent } from './monedas/monedas.component';


@NgModule({
  declarations: [
    EjercicioParImparComponent,
    EjercicioAnagramaComponent,
    MonedasComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    EjercicioParImparComponent,
    EjercicioAnagramaComponent,
    MonedasComponent
  ]
})
export class ComponentesModule { }
