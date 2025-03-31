import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
    selector: 'XInput',
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor, Validator {
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() disabled: boolean = false;
    @Input() label?: string;
    touched: boolean = false;
    isValid: boolean = true;

    onChange: (value: string) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: string): void {
        this.value = value || '';
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    handleInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        this.value = target.value;
        this.onChange(target.value);
    }

    onBlur(): void {
        this.touched = true;
        this.onTouched();
    }

    get hasError(): boolean {
        return this.touched && (!this.value || !this.isValid);
    }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!this.value || this.value.trim() === '') {
            this.isValid = false;
            return { required: true };
        }

        this.isValid = true;
        return null;
    }
}
