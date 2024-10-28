import { CurrencyPipe } from '@angular/common';
import { Directive, HostListener, Injector } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[currencyDirective]',
  standalone: true,
  providers: [CurrencyPipe],
})
export class CurrencyDirective {
  private currency: any;

  private currencySymbol: string = 'BRL';

  private locale: string = 'pt-BR';

  constructor(public ngControl: NgControl, private injector: Injector) {
    this.currency = this.injector.get(CurrencyPipe);
  }
  @HostListener('input', ['$event.target.value'])
  onInput(value: any) {
    const newValue = this.onHandleOnlyNumber(value) / 100;

    this.ngControl.valueAccessor?.writeValue(this.parsedValue(newValue));
  }

  private parsedValue(value: any): string {
    const { currencySymbol, locale } = this;
    return this.currency.transform(
      value,
      currencySymbol,
      'symbol',
      '',
      locale
    );
  }

  private onHandleOnlyNumber(value: any): number {
    return value.replace(new RegExp(/[^0-9]/g), '');
  }
}
