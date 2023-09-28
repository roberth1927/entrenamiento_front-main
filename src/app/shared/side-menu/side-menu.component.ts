import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input('isOpen') isOpen: boolean = false;
  @Output('isChanged') isChanged = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }
  open() {
    this.isOpen = true
  }
  close() {
    this.isOpen = false
    this.isChanged.emit(this.isOpen)
  }

}
