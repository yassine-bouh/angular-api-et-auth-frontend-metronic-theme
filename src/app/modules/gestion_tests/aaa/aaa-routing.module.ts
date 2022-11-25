import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AaaComponent } from './aaa.component';
import { HorizontalComponent } from './horizontal/horizontal.component';

const routes: Routes = [
  {
    path: '',
    component: AaaComponent,
    children: [
      {
        path: 'horizontal',
        component: HorizontalComponent,
      },
      { path: '', redirectTo: 'horizontal', pathMatch: 'full' },
      { path: '**', redirectTo: 'horizontal', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AaaRoutingModule { }
