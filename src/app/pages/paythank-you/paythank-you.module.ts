import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaythankYouPageRoutingModule } from './paythank-you-routing.module';

import { PaythankYouPage } from './paythank-you.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaythankYouPageRoutingModule
  ],
  declarations: [PaythankYouPage]
})
export class PaythankYouPageModule {}
