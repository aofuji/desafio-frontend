import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class SidebarService {
  public Collapsed$: Subject<boolean> = new Subject();
}
