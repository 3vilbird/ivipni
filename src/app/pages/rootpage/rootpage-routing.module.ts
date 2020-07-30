import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RootpagePage } from './rootpage.page';

const routes: Routes = [
  {
    path: '',
    component: RootpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootpagePageRoutingModule {}
