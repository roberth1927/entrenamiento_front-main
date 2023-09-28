import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiserviceService {

  sideMenu$ = new BehaviorSubject(false);


  constructor() { }
}
