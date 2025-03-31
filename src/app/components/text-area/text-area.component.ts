import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
    selector: 'XTextArea',
    templateUrl: './text-area.component.html',
    styleUrls: ['./text-area.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextAreaComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => TextAreaComponent),
            multi: true,
        },
    ],
})
export class TextAreaComponent implements ControlValueAccessor, Validator {
    @Input() placeholder: string = '';
    @Input() value: string = '';
    @Input() disabled: boolean = false;
    @Input() label?: string = '';

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

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    handleInput(event: Event): void {
        const target = event.target as HTMLTextAreaElement;
        this.value = target.value;
        this.onChange(this.value);
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
