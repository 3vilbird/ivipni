import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentremainPage } from './paymentremain.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentremainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentremainPageRoutingModule {}
