import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchProductsPage } from './search-products.page';

const routes: Routes = [
  {
    path: '',
    component: SearchProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchProductsPageRoutingModule {}
