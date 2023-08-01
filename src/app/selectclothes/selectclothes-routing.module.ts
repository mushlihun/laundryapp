import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectclothesPage } from './selectclothes.page';

const routes: Routes = [
  {
    path: '',
    component: SelectclothesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectclothesPageRoutingModule {}
