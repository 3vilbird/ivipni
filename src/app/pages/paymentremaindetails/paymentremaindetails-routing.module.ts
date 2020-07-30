import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentremaindetailsPage } from './paymentremaindetails.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentremaindetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentremaindetailsPageRoutingModule {}
