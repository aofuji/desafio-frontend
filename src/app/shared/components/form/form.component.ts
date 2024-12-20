// Modules NG-ZORRO
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzGridModule } from 'ng-zorro-antd/grid';
// Core
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { RegisterService } from '../../services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, Subscription } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    OnlyNumberDirective,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent extends BaseComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.maxLength(70)]],
    category: [null, [Validators.required]],
    amount: [null],
    price: [null],
    active: [false],
  });

  categories: Array<string> = [...Object.values(Categories)];

  changedFields: Array<string> = ['amount', 'price'];

  enabledIcon: boolean = false;

  descriptionId: string = 'id';

  paramsID!: string;

  isUpdate: boolean = false;

  private subscription!: Subscription;

  loading: boolean = false;

  constructor(
    private fb: NonNullableFormBuilder,
    private registerService: RegisterService,
    private routes: Router,
    private activatedRoute: ActivatedRoute,
    private message: NzMessageService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getId();

    this.selectChangeField();
  }

  onSubmit(): void {
    if (this.validateForm(this.form)) {
      this.loading = true;
      // Cadastra produto caso a rota for diferente ira atualizar o produto conforme comparacao do ID
      if (!this.isUpdate) {
        this.subscription = this.registerService
          .create(this.form.value)
          .pipe(delay(2000))
          .subscribe(
            () => {
              this.loading = false;
              this.createMessage('success');
              // Redireciona para tela de listagem
              this.routes.navigate(['registers']);
            },
            (err) => {
              console.error(err);
              this.createMessage('error');
              this.loading = false;
            }
          );
      } else {
        this.subscription = this.registerService
          .update(this.paramsID, this.form.value)
          .pipe(delay(2000))
          .subscribe(
            () => {
              this.loading = false;
              this.createMessage('success');
              // Redireciona para tela de listagem
              this.routes.navigate(['registers']);
            },
            (err) => {
              this.loading = false;
              console.error(err);
              this.createMessage('error');
            }
          );
      }
    }
  }

  selectChangeField(): void {
    this.form.valueChanges.subscribe((field) => {
      this.setFieldAndRemove(field);
    });
  }

  getId(): void {
    this.activatedRoute.params.subscribe((res) => {
      if (res[this.descriptionId]) {
        this.isUpdate = true;
        this.paramsID = res[this.descriptionId];
        this.subscription = this.registerService
          .getId(res[this.descriptionId])
          .subscribe(
            (res) => {
              if (res) {
                this.form.patchValue(res);
                this.setFieldAndRemove(res);
              }
            },
            (err) => {
              console.error(err);
              this.createMessage('error');
            }
          );
      }
    });
  }

  private setFieldAndRemove(field: { active?: boolean }): void {
    if (field?.active) {
      this.setFieldRequired(this.form, this.changedFields);
      this.enabledIcon = true;
    } else {
      this.removeFieldRequired(this.form, this.changedFields);
      this.enabledIcon = false;
    }
  }

  redirecList(): void {
    this.routes.navigate(['registers']);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  createMessage(type: 'success' | 'error'): void {
    if (type === 'success') {
      this.message.create(type, `Salvo com sucesso`);
    } else {
      this.message.create(type, `Houve um erro`);
    }
  }
}
