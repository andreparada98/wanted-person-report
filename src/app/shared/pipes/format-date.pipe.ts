import { Pipe, PipeTransform } from '@angular/core';
import { formatDate as utilFormatDate } from '../../shared/helpers/format-date';

@Pipe({
    name: 'formatDate',
    pure: true,
})
export class FormatDatePipe implements PipeTransform {
    transform(value: Date): string {
        return utilFormatDate(value);
    }
}
