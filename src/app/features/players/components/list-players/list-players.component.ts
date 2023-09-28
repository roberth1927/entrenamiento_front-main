import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { Player } from "../../../../../../src/core/reqResPlayers.interface";
import { PlayersService } from "src/app/features/services/players.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { FormHomeComponent } from "../form-home/form-home.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-list-players",
  templateUrl: "./list-players.component.html",
  styleUrls: ["./list-players.component.scss"],
})
export class ListPlayersComponent implements OnInit {
  displayedColumns: string[] = [
    "codigo",
    "nombres",
    "camiseta",
    "nombreEquipo",
    "campeonatos",
    "acciones",
  ];
  dataSource = new MatTableDataSource<Player>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loadingData = true;

  constructor(
    private playersService: PlayersService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.loadingData = true;
    this.playersService.getPlayers().subscribe((response: Player[]) => {
      this.dataSource.data = response;
      this.dataSource.paginator = this.paginator;
      this.loadingData = false;
    });
  }

  openDialog(element: Player): void {
    const dialogRef = this.dialog.open(FormHomeComponent, {
      width: "700px",
      data: { title: "Editar Jugador", playerData: element },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getPlayers();

    });
  }
}
