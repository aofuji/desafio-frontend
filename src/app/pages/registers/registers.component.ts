import { Component } from '@angular/core';
import { ListComponent } from '../../shared/components/list/list.component';

@Component({
  selector: 'app-registers',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './registers.component.html',
  styleUrl: './registers.component.scss'
})
export class RegistersComponent {

}
