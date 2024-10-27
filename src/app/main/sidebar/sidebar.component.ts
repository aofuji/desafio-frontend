import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SidebarService } from '../../shared/services/sidebar.service';
import { Subscription } from 'rxjs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IMenus } from '../../interface/Menu';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NzMenuModule, NzLayoutModule, NzIconModule,RouterOutlet, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  sidebarService = inject(SidebarService);

  subscription!: Subscription;

  menus: Array<IMenus> = [
    { name: 'Home', link: 'home', icon: 'home' },
    { name: 'Formulario', link: 'register', icon: 'file' },
    { name: 'Listagem', link: 'list', icon: 'unordered-list' },
  ];

  ngOnInit(): void {
    this.subscription = this.sidebarService.Collapsed$.subscribe(
      (res: boolean) => {
        this.isCollapsed = res;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
