import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PoidsComponent } from './poids.component';
const routes: Routes = [

  {
    path: '',
    component: PoidsComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: 'list', component: ListComponent },
      { path: 'edit/:degreeId', component: EditComponent },
      { path: '', component: AddComponent, pathMatch: 'full' },
      { path: '**', component: PoidsComponent, pathMatch: 'full' }]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoidsRoutingModule { }
