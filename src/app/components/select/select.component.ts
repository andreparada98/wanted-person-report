import { Component, Input } from '@angular/core';

export interface XSelectOption {
    value: any;
    label: string;
}

@Component({
    selector: 'XSelect',
    templateUrl: './select.component.html',
    styleUrl: './select.component.scss',
})
export class SelectComponent {
    @Input() options: XSelectOption[] = [];
    @Input() placeholder: string = 'Selecione uma opção';
    @Input() disabled: boolean = false;
    @Input() value?: any = null;

    onChange: (value: any) => void = (_: any) => {};
    onTouched: () => void = () => {};

    writeValue(value: any): void {
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

    onSelectChange(event: Event): void {
        const target = event.target as HTMLSelectElement;
        const newValue = target.value;
        this.value = newValue;
        this.onChange(newValue);
    }
}
