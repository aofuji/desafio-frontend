import { Injectable } from '@angular/core';
import { IRegister } from '../../interface/Register';
import { BaseSerice } from '../class/base-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class RegisterService extends BaseSerice {

  constructor() {
    super()
  }

  create(data: IRegister): Observable<any> {
    console.log(data);

    return of();
  }

  getId(): Observable<any> {
    return of();
  }

  getAll(): Observable<any> {
    return of();
  }
}
