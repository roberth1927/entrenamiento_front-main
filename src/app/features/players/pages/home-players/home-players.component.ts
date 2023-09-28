import { Component, OnInit, ViewChild } from "@angular/core";
import { UiserviceService } from "src/app/features/services/uiservice.service";

@Component({
  selector: "app-home-players",
  templateUrl: "./home-players.component.html",
  styleUrls: ["./home-players.component.scss"],
})
export class HomePlayersComponent implements OnInit {
  @ViewChild("side") side: any;
  isOpen: boolean = true;

  constructor(public uiserviceService: UiserviceService) {}

  ngOnInit(): void {
    this.uiserviceService.sideMenu$.subscribe((r) => {
      if (r) {
        this.side?.open();
      }/*  else {
        this.side?.close();
      } */
    });
  }

  isChanged(isOpen: boolean): void {
    if(!isOpen){
      this.uiserviceService.sideMenu$.next(isOpen);
      this.side?.close()
    }
    /* this.isOpen = isOpen;
    this.side?.open(); */
  }
}
