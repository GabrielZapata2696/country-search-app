import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public cambiarTema: boolean = false;

  private toggle: BehaviorSubject<boolean>;

  constructor() {
    this.toggle = new BehaviorSubject<boolean>(false);
  }

  public getToggleValue(): Observable<boolean> {
    return this.toggle.asObservable();
  }

  public changeToggleValue() {
    this.toggle.next(!this.toggle);
  }

}
