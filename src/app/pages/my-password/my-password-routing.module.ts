import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyPasswordPage } from './my-password.page';

const routes: Routes = [
  {
    path: '',
    component: MyPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyPasswordPageRoutingModule {}
