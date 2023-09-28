import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderCardComponent } from "./header-card/header-card.component";
import { ListPlayersComponent } from "./list-players/list-players.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { FormHomeComponent } from "./form-home/form-home.component";
import { MatDialogModule } from "@angular/material/dialog";
import { FormPlayerModule } from "src/app/shared/form-player/form-player.module";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [HeaderCardComponent, ListPlayersComponent, FormHomeComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormPlayerModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  exports: [ListPlayersComponent, HeaderCardComponent],
})
export class ComponentsModule {}
