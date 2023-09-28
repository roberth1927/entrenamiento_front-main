import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuComponent } from './side-menu.component';



@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
