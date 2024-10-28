import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[onlyNumber]',
  standalone: true,
})
export class OnlyNumberDirective {
  constructor(public ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    let regex = /[^0-9]*/g;

    const newValue = value.replace(regex, '');

    this.ngControl.valueAccessor?.writeValue(newValue);
  }
}
