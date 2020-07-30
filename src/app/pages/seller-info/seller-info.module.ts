import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerInfoPageRoutingModule } from './seller-info-routing.module';

import { SellerInfoPage } from './seller-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerInfoPageRoutingModule
  ],
  declarations: [SellerInfoPage]
})
export class SellerInfoPageModule {}
