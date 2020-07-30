// all clear

import { Component, OnInit, ViewChild } from "@angular/core";
import { NavController } from "@ionic/angular";
import { PaythankYouPage } from "../paythank-you/paythank-you.page";
import { Users } from "../../../providers/commerce/users";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";

@Component({
  selector: "app-paymentremaindetails",
  templateUrl: "./paymentremaindetails.page.html",
  styleUrls: ["./paymentremaindetails.page.scss"],
})
export class PaymentremaindetailsPage implements OnInit {
  public closeDatepicker() {
    // this.datepickerDirective.modal.dismiss();
  }

  twentyfiveamount;
  seventyfiveamount;
  total;
  localDate;
  dataArray = [];
  order_id;
  seventyfive_payment_method;
  datetoday;
  seventyfivetransaction_id;
  constructor(
    public navCtrl: NavController,

    public users: Users,
    public networkService: NetworkService,
    public logger: Logger
  ) {
    // this.order_id = this.navParams.get("order_id");
    // this.total = this.navParams.get("amount");
    // this.twentyfiveamount = this.navParams.get("twentyfiveamount");
    this.seventyfiveamount = this.total - this.twentyfiveamount;
    this.datetoday = new Date();
    this.localDate = new Date();
  }

  placeOrders() {
    var _this = this;
    let payDetailsObj = {
      order_id: _this.order_id,
      seventyfiveamount: _this.seventyfiveamount,
      seventyfivetransaction_id: _this.seventyfivetransaction_id,
      date: _this.localDate.toISOString(),
      seventyfive_payment_method: this.seventyfive_payment_method,
    };

    _this.logger.debug("paydetailsobj " + JSON.stringify(payDetailsObj));
    _this.logger.debug("paymentmethods " + _this.seventyfive_payment_method);
    let myThankYouObj;
    if (_this.seventyfive_payment_method) {
      if (_this.seventyfivetransaction_id) {
        this.users.SeventyfiveplaceOrder(payDetailsObj, function (
          result,
          data
        ) {
          _this.logger.debug("data " + JSON.stringify(data));
          _this.logger.debug("parse data " + JSON.stringify(data));
          if (result == "1") {
            myThankYouObj = {
              pay: payDetailsObj,
              data: data,
            };
            _this.logger.debug(
              "checking the myThankYouObj" + JSON.stringify(myThankYouObj)
            );

            // _this.navCtrl.setRoot(PaythankYouPage, myThankYouObj);
          } else {
            _this.networkService.showErrorAlert();
            // _this.navCtrl.setRoot(PaythankYouPage, myThankYouObj);
          }
        });
      } else {
        _this.networkService.showSuccessAlert("please enter transaction id");
      }
    } else {
      _this.networkService.showSuccessAlert("please select payment method");
    }
  }

  ngOnInit() {}
}
