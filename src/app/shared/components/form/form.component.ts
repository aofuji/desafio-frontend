// Modules NG-ZORRO
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
// Core
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// Shared Components
import { BaseComponent } from '../../class/base.component';
// Enum
import { Categories } from '../../../enum/category';
// Directive
import { CurrencyDirective } from '../../directives/currency.directive';
import { OnlyNumberDirective } from '../../directives/only-number.directive';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzCheckboxModule,
    NzGridModule,
    CurrencyDirective,
    OnlyNumberDirective
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent extends BaseComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(70)]],
    category: [null, [Validators.required]],
    amount: [null],
    price: [null],
    active: [null],
  });

  categories: Array<string> = [...Object.values(Categories)];

  changedFields: Array<string> = ['amount', 'price'];

  enabledIcon: boolean = false;

  constructor(private fb: NonNullableFormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.selectChangeField();
  }

  onSubmit(): void {
    if (this.validateForm(this.form)) {
      console.log(this.form.value);
    }
  }

  selectChangeField(): void {
    this.form.valueChanges.subscribe((field) => {
      if (field?.active) {
        this.setFieldRequired(this.form, this.changedFields);
        this.enabledIcon = true;
      } else {
        this.removeFieldRequired(this.form, this.changedFields);
        this.enabledIcon = false;
      }
    });
  }
}
