import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from './format-date.pipe';
import { ImageUrlOrNotFoundPipe } from './image-url-or-not-found.pipe';

@NgModule({
    declarations: [FormatDatePipe, ImageUrlOrNotFoundPipe],
    imports: [CommonModule],
    exports: [FormatDatePipe, ImageUrlOrNotFoundPipe],
})
export class PipesModule {}
