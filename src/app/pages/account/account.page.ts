// all clear
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { MyOrderPage } from "../my-order/my-order.page";
import { MyPasswordPage } from "../my-password/my-password.page";
import { MyProfilePage } from "../my-profile/my-profile.page";
import { NotificationPage } from "../notification/notification.page";
import { Logger } from "../../../providers/logger/logger";
import { Router } from "@angular/router";

import { PaymentSuccessFailurePage } from "../payment-success-failure/payment-success-failure.page";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public logger: Logger,
    public router: Router
  ) {}

  ngOnInit() {}

  myprofile() {
    this.logger.info("invoking MyProfilePage page");
    this.router.navigateByUrl("/my-profile");
  }
  myOrder() {
    this.logger.info("invoking myOrder page");
    this.router.navigateByUrl("/my-order");
  }

  paymentSuccessFailure() {
    this.logger.info("invoking paymentSuccessFailure page");
    this.router.navigateByUrl("/payment-success-failure");
  }

  changePasswd() {
    this.logger.info("invoking changePasswd page");
    this.router.navigateByUrl("/my-password");
  }

  notification() {
    this.router.navigateByUrl("/notification");
  }
}
