import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegThankyouPage } from './reg-thankyou.page';

const routes: Routes = [
  {
    path: '',
    component: RegThankyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegThankyouPageRoutingModule {}
