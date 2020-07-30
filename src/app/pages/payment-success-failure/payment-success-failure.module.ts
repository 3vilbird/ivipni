import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentSuccessFailurePageRoutingModule } from './payment-success-failure-routing.module';

import { PaymentSuccessFailurePage } from './payment-success-failure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentSuccessFailurePageRoutingModule
  ],
  declarations: [PaymentSuccessFailurePage]
})
export class PaymentSuccessFailurePageModule {}
