import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'XDatePicker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DatePickerComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DatePickerComponent),
            multi: true,
        },
    ],
})
export class DatePickerComponent implements ControlValueAccessor, Validator {
    private _value: string | null = null;
    displayValue: string = '';

    @Input() disabled: boolean = false;
    @Input() placeholder: string = 'dd/mm/yyyy';
    @Input() label?: string = '';
    touched: boolean = false;
    isValid: boolean = true;

    onChange: (value: string | null) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: Date | string | null): void {
        if (value) {
            if (value instanceof Date) {
                value = value.toISOString().slice(0, 10);
            }
            this._value = value;
            const parts = value.split('-');
            if (parts.length === 3) {
                this.displayValue = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
            this.isValid = true;
        } else {
            this.displayValue = '';
            this._value = null;
            this.isValid = false;
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onInputChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        let digits = input.value.replace(/\D/g, '');

        if (digits.length > 8) {
            digits = digits.substring(0, 8);
        }

        if (digits.length >= 3 && digits.length < 5) {
            digits = digits.substring(0, 2) + '/' + digits.substring(2);
        } else if (digits.length >= 5) {
            digits = digits.substring(0, 2) + '/' + digits.substring(2, 4) + '/' + digits.substring(4);
        }

        this.displayValue = digits;
        input.value = digits;

        if (digits.length === 10) {
            const regex = /^(0[1-9]|[12]\d|3[01])\/(0[1-9]|1[0-2])\/(\d{4})$/;
            if (regex.test(digits)) {
                this.isValid = true;
                const [dd, mm, yyyy] = digits.split('/');
                const iso = `${yyyy}-${mm}-${dd}`;
                this._value = iso;
                this.onChange(iso);
                return;
            } else {
                this.isValid = false;
            }
        } else {
            this.isValid = false;
        }
        this._value = digits;
        this.onChange(digits);
    }

    onBlur(): void {
        this.touched = true;
        this.onTouched();
    }

    get hasError(): boolean {
        return this.touched && (!this._value || !this.isValid);
    }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!this._value) {
            return { required: true };
        }
        if (!this.isValid) {
            return { invalidDate: true };
        }
        return null;
    }
}
