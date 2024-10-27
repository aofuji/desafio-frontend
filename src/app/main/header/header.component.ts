import { Component, inject } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SidebarService } from '../../shared/services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isCollapsed = false;

  sidebarService = inject(SidebarService);

  collapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.sidebarService.Collapsed$.next(this.isCollapsed);
  }
}
