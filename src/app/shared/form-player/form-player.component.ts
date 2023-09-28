import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormHomeComponent } from "src/app/features/players/components/form-home/form-home.component";
import { PlayersService } from "src/app/features/services/players.service";
import { Team } from "src/core/reqResTeams.interface";
import Swal from "sweetalert2";

@Component({
  selector: "app-form-player",
  templateUrl: "./form-player.component.html",
  styleUrls: ["./form-player.component.scss"],
})
export class FormPlayerComponent implements OnInit {
  @Output() formSubmitted = new EventEmitter<any>();
  @Input() fetching = "";
  @Input() idEquipo: number | null = null;
  form!: FormGroup;
  showCampeonatos = false;
  showCampeon = false;
  equipos: Team[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<FormHomeComponent>,
    private formBuilder: FormBuilder,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.loadTeams();
    if (!this.form) {
      this.formInit();
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¿Deseas guardar el registro?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Guardar",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        this.formSubmitted.emit(this.form.value);
        Swal.fire("Guardado", "Registro guardado", "success");
      } else {
      }
    } else {
      console.log("Formulario inválido");
    }
  }
  cancel(){
    this.dialogRef.close();
  }

  formInit() {
    this.form = this.formBuilder.group({
      idJugador: [""],
      codigo: ["", [Validators.required, Validators.pattern(/^[A-Z0-9]+$/)]],
      nombres: ["", [Validators.required]],
      camiseta: ["", Validators.required],
      idEquipo: ["", Validators.required],
      campeonatos: ["", Validators.required],
    });
    Swal.close();
  }

  checkCampeonatosVisibility(id: any) {
    let { idEquipo, nombre } = this.equipos.find((equipo) => equipo.idEquipo === id);
    if (nombre) {
      const nombreE = nombre.toLowerCase();
      this.showCampeonatos = nombreE.startsWith("a") || nombreE.startsWith("b");
      if (this.showCampeonatos) {
        if(!this.idEquipo){this.form.get("campeonatos")?.setValue(null)}
        this.form.get("campeonatos")?.setValidators([Validators.required]);
      } else {
        this.form.get("campeonatos")?.clearValidators();
        this.form.get("idEquipo")?.setValue(idEquipo);
        this.form.get("campeonatos")?.setValue(null);
      }
      this.form.get("campeonatos")?.updateValueAndValidity();
    }
  }

  loadTeams() {
    this.playersService.getTeams().subscribe((equipos: Team[]) => {
      this.equipos = equipos.sort((a, b) => a.nombre.localeCompare(b.nombre));
      if(this.idEquipo){this.checkCampeonatosVisibility(this.idEquipo)}
    });
  }

  onCodigoInput(event: any) {
    const codigo = this.form.get("codigo")?.value;
    if (codigo) {
      this.playersService.validateCode(codigo).subscribe((response) => {
        if (response) {
          setTimeout(() => {
            this.form.get("codigo")?.reset();
          }, 800);
        } else {
          const codigo = event.target.value
            .toUpperCase()
            .replace(/[^A-Z0-9]/g, "");
          this.form.get("codigo")?.setValue(codigo);
        }
      });
    }
  }
}
