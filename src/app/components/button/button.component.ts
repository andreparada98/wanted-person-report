import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'XButton',
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() label: string = 'Button';
    @Input() disabled: boolean = false;
    @Input() variant: 'primary' | 'secondary' = 'primary';

    @Output() clickEvent = new EventEmitter<Event>();

    onClick(event: Event): void {
        if (this.disabled) return;
        this.clickEvent.emit(event);
    }
}
