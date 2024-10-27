import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
})
export class BaseComponent {
  public validateForm(form: FormGroup): boolean {
    for (const i in form.controls) {
      form.controls[i].markAsDirty();
      form.controls[i].updateValueAndValidity();
    }

    return form.valid;
  }

  setFieldRequired(form: FormGroup, fields: Array<string>): void {
    for (const field of fields) {
      form.controls[field].setValidators([Validators.required]);
    }
  }

  removeFieldRequired(form: FormGroup, fields: Array<string>): void {
    for (const field of fields) {
      form.controls[field].removeValidators([Validators.required]);
    }
  }

  messageError(form: FormGroup, nameField: string): string | undefined {
    if (form.controls[nameField].hasError('required')) {
      return `Campo Obrigatório`;
    }

    if (form.controls[nameField].hasError('maxlength')) {
      return `Máximo de ${
        form.controls[nameField].getError('maxlength').requiredLength
      } caracteres`;
    }
    return undefined;
  }
}
