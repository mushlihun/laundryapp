import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaundryservicePageRoutingModule } from './laundryservice-routing.module';

import { LaundryservicePage } from './laundryservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaundryservicePageRoutingModule
  ],
  declarations: [LaundryservicePage]
})
export class LaundryservicePageModule {}
