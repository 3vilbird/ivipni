import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryProductDetailsInfoPage } from './category-product-details-info.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryProductDetailsInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryProductDetailsInfoPageRoutingModule {}
