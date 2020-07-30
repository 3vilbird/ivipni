import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SearchProductsPageRoutingModule } from "./search-products-routing.module";

import { SearchProductsPage } from "./search-products.page";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchProductsPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SearchProductsPage],
})
export class SearchProductsPageModule {}
