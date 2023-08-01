import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaundryservicePage } from './laundryservice.page';

const routes: Routes = [
  {
    path: '',
    component: LaundryservicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaundryservicePageRoutingModule {}
