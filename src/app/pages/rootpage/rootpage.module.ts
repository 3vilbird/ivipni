import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RootpagePageRoutingModule } from './rootpage-routing.module';

import { RootpagePage } from './rootpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RootpagePageRoutingModule
  ],
  declarations: [RootpagePage]
})
export class RootpagePageModule {}
