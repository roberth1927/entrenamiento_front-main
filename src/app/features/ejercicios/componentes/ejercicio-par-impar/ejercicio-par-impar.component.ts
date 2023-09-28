import { Component, OnInit } from "@angular/core";
import { FormsModule } from '@angular/forms';


@Component({
  selector: "app-ejercicio-par-impar",
  templateUrl: "./ejercicio-par-impar.component.html",
  styleUrls: ["./ejercicio-par-impar.component.scss"],
})
export class EjercicioParImparComponent implements OnInit {
  numero: number | null = null;
  numeros: number[] = [];
  mostrarResultado: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onInputChange() {
    if (this.numero !== null && (this.numero < 0 || this.numero > 9999)) {
      this.numero = null;
    }
  }

  agregarNumero() {
    if (this.numero !== null) {
      this.numeros.push(this.numero);
      this.mostrarResultado = true;
      this.numero = null;
    }
  }
  resetearNumeros() {
    this.numeros = [];
    this.mostrarResultado = false;

  }

}
