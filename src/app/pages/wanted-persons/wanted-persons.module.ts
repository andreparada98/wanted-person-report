import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantedPersonsRoutingModule } from './wanted-persons-routing.module';
import { WantedPersonsComponent } from './wanted-persons.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
    declarations: [WantedPersonsComponent],
    imports: [CommonModule, WantedPersonsRoutingModule, ComponentsModule],
})
export class WantedPersonsModule {}
