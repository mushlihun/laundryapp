import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectclothesPageRoutingModule } from './selectclothes-routing.module';

import { SelectclothesPage } from './selectclothes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectclothesPageRoutingModule
  ],
  declarations: [SelectclothesPage]
})
export class SelectclothesPageModule {}
