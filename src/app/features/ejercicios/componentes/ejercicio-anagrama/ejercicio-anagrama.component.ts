import { Component } from "@angular/core";

@Component({
  selector: "app-ejercicio-anagrama",
  templateUrl: "./ejercicio-anagrama.component.html",
  styleUrls: ["./ejercicio-anagrama.component.scss"],
})
export class EjercicioAnagramaComponent {
  cadena1: string = "";
  cadena2: string = "";
  mostrarResultado: boolean = false;
  sonAnagramas: boolean = false;

  verificarAnagramas() {
    const str1 = this.cadena1.replace(/\s/g, "").toLowerCase();
    const str2 = this.cadena2.replace(/\s/g, "").toLowerCase();

    if (str1.length !== str2.length) {
      this.mostrarResultado = true;
      this.sonAnagramas = false;
    } else {
      const sortedStr1 = str1.split("").sort().join("");
      const sortedStr2 = str2.split("").sort().join("");

      this.sonAnagramas = sortedStr1 === sortedStr2;
      this.mostrarResultado = true;
    }
  }
  resetearFormulario() {
    this.cadena1 = "";
    this.cadena2 = "";
    this.mostrarResultado = false;
    this.sonAnagramas = null;
  }
}
