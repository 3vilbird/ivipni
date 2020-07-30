import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryProductDetailsPageRoutingModule } from './category-product-details-routing.module';

import { CategoryProductDetailsPage } from './category-product-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryProductDetailsPageRoutingModule
  ],
  declarations: [CategoryProductDetailsPage]
})
export class CategoryProductDetailsPageModule {}
