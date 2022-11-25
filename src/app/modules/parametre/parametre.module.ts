import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametreRoutingModule } from './parametre-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { DropdownMenusModule, WidgetsModule } from '../../_metronic/partials';
import { ParametreComponent } from './parametre.component';

@NgModule({
  declarations: [ParametreComponent],
  imports: [
    CommonModule,
    ParametreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    HttpClientModule
  ]
})
export class ParametreModule { }
