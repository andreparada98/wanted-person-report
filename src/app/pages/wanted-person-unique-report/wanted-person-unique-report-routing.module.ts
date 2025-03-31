import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantedPersonUniqueReportComponent } from './wanted-person-unique-report.component';

const routes: Routes = [{ path: '', component: WantedPersonUniqueReportComponent, outlet: 'modal' }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WantedPersonUniqueReportRoutingModule {}
