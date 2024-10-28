import { Injectable } from '@angular/core';
import { IRegister } from '../../interface/Register';
import { BaseSerice } from '../class/base-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class RegisterService extends BaseSerice {
  public data: Array<IRegister> = [];

  constructor() {
    super();
  }

  create(data: IRegister): Observable<Array<null>> {
    this.data = this.hasJsonValue();

    const newValue: IRegister = {
      ...data,
      uuid: self.crypto.randomUUID(),
      price: this.onHandleRemoveCharacter(data.price) / 100,
    };

    this.data.push(newValue);

    this.createLocalstorage(this.data);

    return of([]);
  }

  getId(id:string): Observable<any> {
    return of();
  }

  getAll(): Observable<Array<IRegister>> {
    return of(this.hasJsonValue());
  }

  delete(id: string): Observable<any> {
    return of();
  }

  private createLocalstorage(data: Array<IRegister>): void {
    localStorage.setItem('registers', JSON.stringify(data));
  }

  private hasJsonValue(): Array<IRegister> {
    const stringValue = localStorage.getItem('registers');

    return stringValue === null ? [] : JSON.parse(stringValue);
  }

  private onHandleRemoveCharacter(value: number): number {
    let regex = /[^0-9]*/g;
    return Number(new String(value).replace(regex, ''));
  }
}
