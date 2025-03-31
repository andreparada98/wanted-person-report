import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/wanted-persons/wanted-persons.module').then((m) => m.WantedPersonsModule),
    },
    {
        path: 'detalhes/:id',
        loadChildren: () => import('./pages/wanted-person-unique/wanted-person-unique.module').then((m) => m.WantedPersonUniqueModule),
    },
    {
        path: 'report/:ocoId',
        loadChildren: () =>
            import('./pages/wanted-person-unique-report/wanted-person-unique-report.module').then((m) => m.WantedPersonUniqueReportModule),
        outlet: 'modal',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
