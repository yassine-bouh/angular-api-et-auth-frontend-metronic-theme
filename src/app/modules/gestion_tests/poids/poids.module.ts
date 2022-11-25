import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoidsRoutingModule } from './poids-routing.module';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { PoidsComponent } from './poids.component';

@NgModule({
  declarations: [EditComponent, ListComponent,PoidsComponent, AddComponent],
  imports: [
    CommonModule,
    PoidsRoutingModule,
    FormsModule, ReactiveFormsModule,
    InlineSVGModule,
    HttpClientModule
  ]
})
export class PoidsModule { }
