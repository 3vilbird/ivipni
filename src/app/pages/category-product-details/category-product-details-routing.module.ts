import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryProductDetailsPage } from './category-product-details.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryProductDetailsPageRoutingModule {}
