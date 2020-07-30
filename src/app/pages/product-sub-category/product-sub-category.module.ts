import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductSubCategoryPageRoutingModule } from './product-sub-category-routing.module';

import { ProductSubCategoryPage } from './product-sub-category.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductSubCategoryPageRoutingModule
  ],
  declarations: [ProductSubCategoryPage]
})
export class ProductSubCategoryPageModule {}
