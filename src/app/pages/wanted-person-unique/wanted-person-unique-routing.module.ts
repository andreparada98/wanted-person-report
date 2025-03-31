import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantedPersonUniqueComponent } from './wanted-person-unique.component';
import { WantedPersonUniqueReportComponent } from '../wanted-person-unique-report/wanted-person-unique-report.component';

const routes: Routes = [
    { path: '', component: WantedPersonUniqueComponent },
    { path: 'report', component: WantedPersonUniqueReportComponent, outlet: 'modal' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WantedPersonUniqueRoutingModule {}
