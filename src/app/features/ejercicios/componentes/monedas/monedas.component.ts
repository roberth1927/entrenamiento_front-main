import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-monedas",
  templateUrl: "./monedas.component.html",
  styleUrls: ["./monedas.component.scss"],
})
export class MonedasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  resultado: string = "";

  encontrarMonedaMasPesada() {
    const monedas = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"];

    const pesaje1 = this.compararPesos(
      [monedas[0], monedas[1]],
      [monedas[2], monedas[3]]
    );

    if (pesaje1 === 0) {
      const pesaje2 = this.compararPesos([monedas[4]], [monedas[5]]);

      if (pesaje2 === 0) {
        this.resultado = "C";
      } else if (pesaje2 === 1) {
        this.resultado = "E";
      } else {
        this.resultado = "D";
      }
    } else if (pesaje1 === 1) {
      const pesaje3 = this.compararPesos([monedas[0]], [monedas[1]]);

      if (pesaje3 === 0) {
        this.resultado = "B";
      } else {
        this.resultado = "A";
      }
    } else {
      const pesaje4 = this.compararPesos([monedas[4]], [monedas[5]]);

      if (pesaje4 === 0) {
        this.resultado = "F";
      } else if (pesaje4 === 1) {
        this.resultado = "E";
      } else {
        this.resultado = "D";
      }
    }
  }

  compararPesos(grupo1: string[], grupo2: string[]): number {
    // Devuelve 0 si los grupos tienen el mismo peso, 1 si el grupo1 es más pesado, -1 si el grupo2 es más pesado
    // Aqui implmente la función de pesaje real
    return 0; // siempre equilibrados
  }
}
