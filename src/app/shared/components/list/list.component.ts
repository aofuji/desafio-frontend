// Core
import {
  Component,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules NG-ZORRO
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
// Services
import { RegisterService } from '../../services/register.service';
import { IRegister } from '../../../interface/Register';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    CommonModule,
    NzButtonModule,
    RouterOutlet,
    RouterModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit, OnDestroy {
  public listData: Array<IRegister> = [];

  subscription!: Subscription;

  constructor(
    private registerService: RegisterService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  redirectRegister(): void {
    this.routes.navigate(['register']);
  }

  delete(id: string | undefined): void {
    this.subscription = this.registerService.delete(id).subscribe(() => {
      this.getAll();
    });
  }

  getAll(): void {
    this.subscription = this.registerService.getAll().subscribe((res) => {
      this.listData = res;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
