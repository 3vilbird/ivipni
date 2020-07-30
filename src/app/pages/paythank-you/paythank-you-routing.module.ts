import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaythankYouPage } from './paythank-you.page';

const routes: Routes = [
  {
    path: '',
    component: PaythankYouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaythankYouPageRoutingModule {}
