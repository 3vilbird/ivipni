import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MyPasswordPageRoutingModule } from "./my-password-routing.module";

import { MyPasswordPage } from "./my-password.page";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPasswordPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MyPasswordPage],
})
export class MyPasswordPageModule {}
