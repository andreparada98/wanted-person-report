import { NgModule } from '@angular/core';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout-footer/layout-footer.component';
import { AnotaAiCardComponent } from './anota-ai-card/anota-ai-card.component';
import { WantedPersonCardComponent } from './wanted-person-card/wanted-person-card.component';

@NgModule({
    declarations: [LayoutHeaderComponent, LayoutFooterComponent, AnotaAiCardComponent, WantedPersonCardComponent],
    providers: [],
    exports: [LayoutHeaderComponent, LayoutFooterComponent, AnotaAiCardComponent, WantedPersonCardComponent],
})
export class ComponentsModule {}
