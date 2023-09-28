import { Component, OnInit } from '@angular/core';
import { FormHomeComponent } from '../form-home/form-home.component';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UiserviceService } from 'src/app/features/services/uiservice.service';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

  title: 'Crear Jugador';

  constructor(public dialog: MatDialog, public uiserviceService: UiserviceService) { }

  ngOnInit(): void {
  }


  /*Openpopup(code: any, title: any,component:any) {
    var _popup = this.dialog.open(component, {
      width: '40%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    _popup.afterClosed().subscribe(item => {
      // console.log(item)
      this.loadcustomer();
    })
  }*/

  openDialog(): void {
    /* this.uiserviceService.sideMenu$.next(true)
    return; */
    const dialogRef = this.dialog.open(FormHomeComponent, {
      width: '700px',
      data: {title: 'Crear Jugador'}
    });

    dialogRef.afterClosed().subscribe(result => {
     });
  }

}
