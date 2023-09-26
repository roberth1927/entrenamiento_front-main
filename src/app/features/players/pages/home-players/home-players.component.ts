import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.scss']
})
export class HomePlayersComponent implements OnInit {

  @ViewChild('side') side: any;
  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  isChanged(isOpen: boolean): void {
    this.isOpen = isOpen;
    this.side?.open();
  }


}
