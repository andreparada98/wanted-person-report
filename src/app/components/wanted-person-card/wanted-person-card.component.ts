import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isDefined } from '../../shared/helpers/is-defined';

@Component({
    selector: 'WantedPersonCard',
    templateUrl: './wanted-person-card.component.html',
})
export class WantedPersonCardComponent {
    @Input() tag?: string | Date;
    @Input() wantedPersonAge?: number = 0;
    @Input() wantedPersonName?: string = '';
    @Input() wantedPersonGender?: string = 'NÃO INFORMADO';
    @Input() disappearanceLocation?: string = '';
    @Input() disappearanceDate?: Date = new Date();
    @Input() wantedPersonLastOcurrenceInfo?: string = '';
    @Input() wantedPersonLastOcurrenceVestment?: string = '';
    @Input() imageUrl?: string = '';
    @Input() id?: number = 0;

    @Output() cardClick = new EventEmitter<number>();

    onCardClick(): void {
        if (!this.id) return;
        this.cardClick.emit(this.id);
    }

    getTagDetails(tag?: string | Date) {
        if (isDefined(tag)) return { description: 'Localizado', color: '#3f6600' };

        return { description: 'Desaparecido', color: '#ff0000' };
    }

    onImgError(event: Event): void {
        const imgElement = event.target as HTMLImageElement;
        imgElement.src = 'assets/images/image-not-found.png';
    }
}
