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

    // Primer pesaje (A y B vs C)
    const pesaje1 = this.compararPesos(
      [monedas[0], monedas[1]],
      [monedas[2], monedas[3]]
    );

    if (pesaje1 === 0) {
      // El grupo C es más pesado
      const pesaje2 = this.compararPesos([monedas[4]], [monedas[5]]);

      if (pesaje2 === 0) {
        // La moneda más pesada está en el grupo C
        this.resultado = "C";
      } else if (pesaje2 === 1) {
        // La moneda más pesada está en el grupo E
        this.resultado = "E";
      } else {
        // La moneda más pesada está en el grupo D
        this.resultado = "D";
      }
    } else if (pesaje1 === 1) {
      // El grupo A es más pesado
      const pesaje3 = this.compararPesos([monedas[0]], [monedas[1]]);

      if (pesaje3 === 0) {
        // La moneda más pesada está en el grupo B
        this.resultado = "B";
      } else {
        // La moneda más pesada está en el grupo A
        this.resultado = "A";
      }
    } else {
      // El grupo B es más pesado
      const pesaje4 = this.compararPesos([monedas[4]], [monedas[5]]);

      if (pesaje4 === 0) {
        // La moneda más pesada está en el grupo F
        this.resultado = "F";
      } else if (pesaje4 === 1) {
        // La moneda más pesada está en el grupo E
        this.resultado = "E";
      } else {
        // La moneda más pesada está en el grupo D
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
