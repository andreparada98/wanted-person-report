import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'XSelectWantedPersonGender',
    templateUrl: './select-wanted-person-gender.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectWantedPersonGenderComponent),
            multi: true,
        },
    ],
})
export class SelectWantedPersonGenderComponent implements ControlValueAccessor {
    genderOptions = [
        { label: 'Masculino', value: 'MASCULINO' },
        { label: 'Feminino', value: 'FEMININO' },
    ];

    @Input() placeholder: string = 'Selecione o gênero';
    @Input() disabled: boolean = false;
    @Input() value: 'MASCULINO' | 'FEMININO' | null = null;

    onChange = (_: any) => {};
    onTouched = () => {};

    writeValue(value: 'MASCULINO' | 'FEMININO' | null): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(disabled: boolean): void {
        this.disabled = disabled;
    }

    onSelectChange(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        this.value = selectElement.value as 'MASCULINO' | 'FEMININO';
        this.onChange(this.value);
    }
}
