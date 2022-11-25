import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametreComponent } from './parametre.component';

const routes: Routes = [
  {
    path: '',
    component: ParametreComponent,
    children: [
      { path: '', component: ParametreComponent, pathMatch: 'full' },
      { path: '**', component: ParametreComponent, pathMatch: 'full' },]
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametreRoutingModule { }
