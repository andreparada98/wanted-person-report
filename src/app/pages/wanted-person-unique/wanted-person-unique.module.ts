import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantedPersonUniqueRoutingModule } from './wanted-person-unique-routing.module';
import { WantedPersonUniqueComponent } from './wanted-person-unique.component';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    declarations: [WantedPersonUniqueComponent],
    imports: [ComponentsModule, CommonModule, WantedPersonUniqueRoutingModule, PipesModule],
})
export class WantedPersonUniqueModule {}
