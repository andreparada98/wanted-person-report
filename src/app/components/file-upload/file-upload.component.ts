import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'XFileUpload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FileUploadComponent),
            multi: true,
        },
    ],
})
export class FileUploadComponent implements ControlValueAccessor {
    selectedFiles: File[] = [];
    disabled: boolean = false;

    onChange: (value: File[]) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(obj: File[]): void {
        if (obj && Array.isArray(obj)) {
            this.selectedFiles = obj;
        }
    }

    registerOnChange(fn: (value: File[]) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onFileChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFiles = Array.from(input.files);
            this.onChange(this.selectedFiles);
        }
    }

    removeFile(file: File): void {
        const index = this.selectedFiles.indexOf(file);
        if (index !== -1) {
            this.selectedFiles.splice(index, 1);
            this.onChange(this.selectedFiles);
        }
    }
}
