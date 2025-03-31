import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'XSelectWantedPersonStatus',
    templateUrl: './select-wanted-person-status.component.html',
    styleUrls: ['./select-wanted-person-status.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectWantedPersonStatusComponent),
            multi: true,
        },
    ],
})
export class SelectWantedPersonStatusComponent implements ControlValueAccessor {
    statusOptions = [
        { label: 'Desaparecido', value: 'DESAPARECIDO' },
        { label: 'Localizado', value: 'LOCALIZADO' },
    ];

    @Input() placeholder: string = 'Selecione o status';
    @Input() disabled: boolean = false;
    @Input() value?: 'DESAPARECIDO' | 'LOCALIZADO' | null = null;

    onChange = (_: any) => {};
    onTouched = () => {};

    writeValue(value: 'DESAPARECIDO' | 'LOCALIZADO' | null): void {
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
        this.value = selectElement.value as 'DESAPARECIDO' | 'LOCALIZADO';
        this.onChange(this.value);
    }
}
