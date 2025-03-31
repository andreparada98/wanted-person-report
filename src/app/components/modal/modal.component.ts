import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'XModal',
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
})
export class ModalComponent {
    @Input() title: string = 'Modal';
    @Output() closed = new EventEmitter<void>();

    close(): void {
        this.closed.emit();
    }
}
