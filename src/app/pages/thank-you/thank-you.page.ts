import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";

import { HomePage } from "../../home/home.page";
import { PaymentPage } from "../payment/payment.page";

@Component({
  selector: "app-thank-you",
  templateUrl: "./thank-you.page.html",
  styleUrls: ["./thank-you.page.scss"],
})
export class ThankYouPage implements OnInit {
  // pay;
  // data;
  // result;
  public orderSuccess: boolean = false;
  public orderFailure: boolean = false;
  name: string;
  order_id;
  date: Date;
  cartTotal;
  paymentMethod;
  dataArray = [];
  allTotal = [];
  firstname;
  lastname;
  address_1;
  address_2;
  company;
  email;
  telephone;
  city;
  postcode;
  firstTermAmount;
  totalamount;

  // _dataObj;
  // _paymentDataObj;

  constructor(private router: Router, private route: ActivatedRoute) {
    var _this = this;
    var _dataObj;
    var _paymentDataObj;

    // var routeParams = JSON.parse(this.route.snapshot.queryParams.data);

    this.route.queryParams.subscribe((param) => {
      _dataObj = JSON.parse(JSON.parse(param["data"]).data);
      _paymentDataObj = JSON.parse(param["data"]).pay;
      // console.log(_dataObj.order_id);
      // // console.log(_dataObj.data);
      // // console.log(_dataObj.pay);
      // console.log(_paymentDataObj);

      _this.date = new Date();
      _this.order_id = _dataObj.order_id;
      _this.cartTotal = _paymentDataObj.cartTotal;
      _this.paymentMethod = _paymentDataObj.paymentMethod;
      _this.firstTermAmount = _paymentDataObj.firstTermAmount;
      _this.dataArray = _paymentDataObj.dataArray;
      _this.allTotal = _paymentDataObj.totals;
      if (_this.paymentMethod == "Bank Transfer") {
        (_this.totalamount = _paymentDataObj.cartTotal),
          (_this.firstname = _paymentDataObj.firstname);
      } else {
        (_this.totalamount = _paymentDataObj.firstTermAmount),
          (_this.firstname = _paymentDataObj.firstname);
      }

      _this.lastname = _paymentDataObj.lastname;
      _this.address_1 = _paymentDataObj.address_1;
      _this.address_2 = _paymentDataObj.address_2;
      _this.company = _paymentDataObj.company;
      _this.postcode = _paymentDataObj.postcode;
      _this.city = _paymentDataObj.city;
      _this.name = _paymentDataObj.name;
      _this.email = _paymentDataObj.email;
      _this.telephone = _paymentDataObj.telephone;

      if (_dataObj.order_id) {
        _this.orderSuccess = true;
      } else {
        _this.orderFailure = true;
      }
    });

    // var _dataObj = JSON.parse(routeParams.data);
    // var _paymentDataObj = routeParams.pay;
  }

  submit() {
    this.router.navigateByUrl("/home");
  }
  notSubmit() {
    this.router.navigateByUrl("/payment");
  }

  ngOnInit() {}
}
