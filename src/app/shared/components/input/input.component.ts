import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  // value of input
  private _value: string = '';

  // on change hook, to propagate changes back to form
  private _onChange = (value: string) => {};

  private _onTouched = () => {};

  // disabled status of input
  private _disabled!: boolean;

  /**
   * Get value of input
   */
  get value(): string {
    return this._value;
  }

  /**
   * Set value of input and propagate changes
   */
  set value(value: string) {
    this._value = value;
    this._onChange(this._value);
  }
  
  /**
   * Get disabled state
   */
  get disabled(): boolean {
    return this._disabled;
  }

  constructor() { }

  writeValue(value: string): void {
    this._value = value;
  }

  registerOnChange(onChange: any): void {
    this._onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this._onTouched = onTouched;
  }

  onChange(event: string) {
    this._onChange(event);
  }

  setDisabledState(disabled : boolean) : void {
    this._disabled = disabled;
  }
}
