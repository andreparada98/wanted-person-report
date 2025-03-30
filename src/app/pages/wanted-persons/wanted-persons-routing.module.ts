import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WantedPersonsComponent } from './wanted-persons.component';

const routes: Routes = [
    {
        path: '',
        component: WantedPersonsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WantedPersonsRoutingModule {}
