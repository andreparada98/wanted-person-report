import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantedPersonsRoutingModule } from './wanted-persons-routing.module';
import { WantedPersonsComponent } from './wanted-persons.component';
import { ComponentsModule } from '../../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [WantedPersonsComponent],
    imports: [CommonModule, WantedPersonsRoutingModule, ComponentsModule, ReactiveFormsModule, RouterModule],
})
export class WantedPersonsModule {}
