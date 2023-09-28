import { Component, OnInit, ViewChild } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";

@Component({
  selector: "app-home-ejercicios",
  templateUrl: "./home-ejercicios.component.html",
  styleUrls: ["./home-ejercicios.component.scss"],
})
export class HomeEjerciciosComponent implements OnInit {
  @ViewChild("stepper") stepper!: MatStepper;

  isLinear = false;
  isEditable = false;

  constructor() {}

  ngOnInit(): void {}

  onStepChange(event: any) {
    if (event.previouslySelectedStep) {
    }
  }
}
