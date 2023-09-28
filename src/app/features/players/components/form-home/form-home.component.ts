import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { PlayersService } from "src/app/features/services/players.service";
import { FormPlayerComponent } from "src/app/shared/form-player/form-player.component";
import { Player } from "src/core/reqResPlayers.interface";

@Component({
  selector: "app-form-home",
  templateUrl: "./form-home.component.html",
  styleUrls: ["./form-home.component.scss"],
})
export class FormHomeComponent implements OnInit {
  @ViewChild("playerForm") playerForm!: FormPlayerComponent;
  @Output() idEquipoEmitter: EventEmitter<number> = new EventEmitter<number>();

  playerData: Player;
  inputdata: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormHomeComponent>,
    public playerService: PlayersService
  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;
    this.playerData = this.inputdata.playerData;
  }

  ngAfterViewInit(): void {
    if (this.playerData) {
      this.playerForm.form.patchValue({
        idJugador: this.playerData.idJugador,
        codigo: this.playerData.codigo,
        nombres: this.playerData.nombres,
        camiseta: this.playerData.camiseta,
        idEquipo: this.playerData.idEquipo,
        campeonatos: this.playerData.campeonatos,
      });

    }
  }

  handleFormSubmit(form: any) {
    const { ...formData } = form;

    if (!formData.idJugador) {
      this.playerService.postPlayer(formData).subscribe(
        (r) => {
          this.dialogRef.close();
        },
        (err) => {}
      );
    } else {
      this.playerService.putPlayer(formData).subscribe(
        (r) => {
          this.dialogRef.close();
        },
        (err) => {}
      );
    }
    //this.playerForm.formInit();
  }
}
