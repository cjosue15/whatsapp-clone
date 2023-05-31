import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_PROVIDER = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => WInputComponent),
  multi: true,
};

@Component({
  standalone: true,
  selector: 'w-input',
  template: `
    <label>{{ label }}</label>
    <input type="text" #input (input)="changeValue(input.value)" />
  `,
  styleUrls: ['./w-input.component.scss'],
  providers: [INPUT_PROVIDER],
})
export class WInputComponent implements ControlValueAccessor {
  @Input() label = '';

  value = '';

  disabled = false;

  private _onTouched: () => void = () => {};

  private _onChange: (value: string) => void = () => {};

  writeValue(obj: string): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  changeValue(value: string) {
    this.value = value;
    this._onChange(this.value);
    this._onTouched();
  }
}
