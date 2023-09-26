import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDasboardComponent } from './header-dasboard/header-dasboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderDasboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,

    RouterModule
  ],
  exports: [
    HeaderDasboardComponent
  ]
})
export class LayoutModule { }
