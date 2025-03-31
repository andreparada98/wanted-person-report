import { NgModule } from '@angular/core';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { WantedPersonCardComponent } from './wanted-person-card/wanted-person-card.component';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
    imports: [CommonModule, PipesModule],
    declarations: [LayoutHeaderComponent, LayoutFooterComponent, WantedPersonCardComponent],
    providers: [],
    exports: [LayoutHeaderComponent, LayoutFooterComponent, WantedPersonCardComponent],
})
export class ComponentsModule {}
