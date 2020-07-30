import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentremainPageRoutingModule } from './paymentremain-routing.module';

import { PaymentremainPage } from './paymentremain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentremainPageRoutingModule
  ],
  declarations: [PaymentremainPage]
})
export class PaymentremainPageModule {}
