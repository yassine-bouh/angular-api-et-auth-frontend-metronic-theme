import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step5Component } from './steps/step5/step5.component';
import { AaaRoutingModule } from './aaa-routing.module';
import { Step1Component } from './steps/step1/step1.component';
import { Step2Component } from './steps/step2/step2.component';
import { Step3Component } from './steps/step3/step3.component';
import { Step4Component } from './steps/step4/step4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { AaaComponent } from './aaa.component';
import { TestComponent } from '../test/test.component';
import { DropdownMenusModule, WidgetsModule } from '../../../_metronic/partials';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HorizontalComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    AaaComponent,  ],
  imports: [
    CommonModule,
    AaaRoutingModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    FormsModule,

  ]
})
export class AaaModule { }
