import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantedPersonsRoutingModule } from './wanted-persons-routing.module';
import { WantedPersonsComponent } from './wanted-persons.component';

@NgModule({
    declarations: [WantedPersonsComponent],
    imports: [CommonModule, WantedPersonsRoutingModule],
})
export class WantedPersonsModule {}
