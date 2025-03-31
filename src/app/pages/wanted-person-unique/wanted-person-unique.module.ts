import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WantedPersonUniqueRoutingModule } from './wanted-person-unique-routing.module';
import { WantedPersonUniqueComponent } from './wanted-person-unique.component';


@NgModule({
  declarations: [
    WantedPersonUniqueComponent
  ],
  imports: [
    CommonModule,
    WantedPersonUniqueRoutingModule
  ]
})
export class WantedPersonUniqueModule { }
