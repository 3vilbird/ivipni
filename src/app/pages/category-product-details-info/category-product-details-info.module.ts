import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductDetailsInfoPageRoutingModule } from './category-product-details-info-routing.module';

import { CategoryProductDetailsInfoPage } from './category-product-details-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryProductDetailsInfoPageRoutingModule
  ],
  declarations: [CategoryProductDetailsInfoPage]
})
export class CategoryProductDetailsInfoPageModule {}
