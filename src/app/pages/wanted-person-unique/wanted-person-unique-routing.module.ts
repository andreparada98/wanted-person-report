import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantedPersonUniqueComponent } from './wanted-person-unique.component';

const routes: Routes = [{ path: '', component: WantedPersonUniqueComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WantedPersonUniqueRoutingModule {}
