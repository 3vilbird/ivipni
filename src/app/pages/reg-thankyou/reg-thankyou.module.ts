import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegThankyouPageRoutingModule } from './reg-thankyou-routing.module';

import { RegThankyouPage } from './reg-thankyou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegThankyouPageRoutingModule
  ],
  declarations: [RegThankyouPage]
})
export class RegThankyouPageModule {}
