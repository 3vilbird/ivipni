import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentSuccessFailurePage } from './payment-success-failure.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentSuccessFailurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentSuccessFailurePageRoutingModule {}
