import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantedPersonUniqueReportRoutingModule } from './wanted-person-unique-report-routing.module';
import { WantedPersonUniqueReportComponent } from './wanted-person-unique-report.component';
import { ComponentsModule } from '../../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [WantedPersonUniqueReportComponent],
    imports: [CommonModule, WantedPersonUniqueReportRoutingModule, ComponentsModule, ReactiveFormsModule],
})
export class WantedPersonUniqueReportModule {}
