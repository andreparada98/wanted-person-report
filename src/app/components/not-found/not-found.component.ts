import { Component, Input } from '@angular/core';

@Component({
    selector: 'XNotFound',
    templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
    @Input() message: string = 'Nenhum filtro atendeu o requisito.';
}
