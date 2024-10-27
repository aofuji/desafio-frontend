import { Component } from '@angular/core';
import { FormComponent } from '../../shared/components/form/form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
