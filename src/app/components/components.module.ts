import { NgModule } from '@angular/core';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { WantedPersonCardComponent } from './wanted-person-card/wanted-person-card.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../shared/pipes/pipes.module';
import { InputComponent } from './input/input.component';
import { SelectWantedPersonStatusComponent } from './select-wanted-person-status/select-wanted-person-status.component';
import { SelectComponent } from './select/select.component';
import { FormsModule } from '@angular/forms';
import { SelectWantedPersonGenderComponent } from './select-wanted-person-gender/select-wanted-person-gender.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [CommonModule, PipesModule, FormsModule],
    declarations: [
        LayoutHeaderComponent,
        LayoutFooterComponent,
        WantedPersonCardComponent,
        InputComponent,
        SelectWantedPersonStatusComponent,
        SelectComponent,
        SelectWantedPersonGenderComponent,
        InputNumberComponent,
        NotFoundComponent,
    ],
    providers: [],
    exports: [
        LayoutHeaderComponent,
        LayoutFooterComponent,
        WantedPersonCardComponent,
        InputComponent,
        SelectWantedPersonStatusComponent,
        SelectWantedPersonGenderComponent,
        SelectComponent,
        InputNumberComponent,
        NotFoundComponent,
    ],
})
export class ComponentsModule {}
