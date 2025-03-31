import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'XInputNumber',
    templateUrl: './input-number.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputNumberComponent),
            multi: true,
        },
    ],
})
export class InputNumberComponent implements ControlValueAccessor {
    @Input() placeholder: string = 'Digite um valor';
    @Input() value: number | null = null;
    @Input() disabled: boolean = false;
    @Input() errorMessage: string | null = null;

    onChange: (value: number | null) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(value: number | null): void {
        this.value = value;
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

    onInput(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        const newValue = inputElement.value ? parseFloat(inputElement.value) : null;
        this.value = newValue;
        this.onChange(newValue);
    }
}
