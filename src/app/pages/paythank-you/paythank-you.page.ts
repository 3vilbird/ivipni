// all clear
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HomePage } from "../../home/home.page";
import { PaymentPage } from "../payment/payment.page";

@Component({
  selector: "app-paythank-you",
  templateUrl: "./paythank-you.page.html",
  styleUrls: ["./paythank-you.page.scss"],
})
export class PaythankYouPage implements OnInit {
  pay;
  data;
  result;
  public orderSuccess: boolean = false;
  public orderFailure: boolean = false;
  order_id;
  date;
  paymentMethod;
  seventyfiveamount;

  constructor(public navCtrl: NavController) {
    // var _this = this;
    // _this.pay = _this.navParams.get("pay");
    // _this.data = _this.navParams.get("data");
    // var _dataObj = JSON.parse(_this.data);
    // _this.date = new Date();
    // _this.order_id = _this.pay.order_id;
    // _this.paymentMethod = _this.pay.seventyfive_payment_method;
    // _this.seventyfiveamount = _this.pay.seventyfiveamount;
    // if (_dataObj.order_id) {
    //   _this.orderSuccess = true;
    // } else {
    //   _this.orderFailure = true;
    // }
  }

  submit() {
    // this.navCtrl.setRoot(HomePage, {});
  }
  notSubmit() {
    // this.navCtrl.push(PaymentPage, {});
  }

  ngOnInit() {}
}
