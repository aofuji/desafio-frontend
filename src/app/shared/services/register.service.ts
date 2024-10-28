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

  getId(id: string): Observable<IRegister | undefined> {
    const list = this.hasJsonValue();

    const data: IRegister | undefined = list.find((val) => {
      return val.uuid == id;
    });

    return of(data);
  }

  update(id: string, data: IRegister): Observable<null> {
    const newValue: IRegister = {
      ...data,
      price: this.onHandleRemoveCharacter(data.price) / 100,
      uuid: id,
    };

    const list = this.hasJsonValue();

    const newList = list.map((val) => {
      if (val.uuid === id) {
        return {
          ...newValue,
        };
      }
      return val;
    });

    this.createLocalstorage(newList);

    return of(null);
  }

  getAll(): Observable<Array<IRegister>> {
    return of(this.hasJsonValue());
  }

  delete(id: string | undefined): Observable<any> {
    const list = this.hasJsonValue();

    const newList = list.filter((val) => {
      return val.uuid !== id;
    });

    this.createLocalstorage(newList);

    return of(null);
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
