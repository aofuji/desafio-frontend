// Core
import {
  Component,
  DEFAULT_CURRENCY_CODE,
  LOCALE_ID,
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    CommonModule,
    NzButtonModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  public listData: Array<IRegister> = [];

  constructor(
    private registerService: RegisterService,
    private routes: Router
  ) {}

  ngOnInit(): void {
    this.registerService.getAll().subscribe((res) => {
      this.listData = res;
    });
  }

  redirectRegister(): void {
    this.routes.navigate(['register']);
  }
}
