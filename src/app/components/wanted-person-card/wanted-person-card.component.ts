import { Component, Input } from '@angular/core';
import { isDefined } from '../../shared/helpers/is-defined';

@Component({
    selector: 'WantedPersonCard',
    templateUrl: './wanted-person-card.component.html',
})
export class WantedPersonCardComponent {
    @Input() tag?: string;
    @Input() wantedPersonAge: number = 0;
    @Input() wantedPersonName: string = '';
    @Input() wantedPersonGender: string = 'NÃO INFORMADO';
    @Input() disappearanceLocation: string = '';
    @Input() disappearanceDate: Date = new Date();
    @Input() wantedPersonLastOcurrenceInfo: string = '';
    @Input() wantedPersonLastOcurrenceVestment: string = '';
    @Input() imageUrl: string = '';
    @Input() id: number = 0;

    getTagDetails(tag?: string) {
        if (isDefined(tag)) return { description: 'Localizado', color: '#3f6600' };

        return { description: 'Não Encontrado', color: '#ff0000' };
    }
}
