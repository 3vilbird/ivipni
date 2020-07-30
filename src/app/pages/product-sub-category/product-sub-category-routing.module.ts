import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductSubCategoryPage } from './product-sub-category.page';

const routes: Routes = [
  {
    path: '',
    component: ProductSubCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductSubCategoryPageRoutingModule {}
