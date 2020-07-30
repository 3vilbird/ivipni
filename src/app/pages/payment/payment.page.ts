// has errors at line number 194 ,370
import { Component, OnInit, ViewChild } from "@angular/core";
import { Platform, NavController, LoadingController } from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Products } from "../../../providers/commerce/products";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";

declare var RazorpayCheckout: any;

@Component({
  selector: "app-payment",
  templateUrl: "./payment.page.html",
  styleUrls: ["./payment.page.scss"],
})
export class PaymentPage implements OnInit {
  public closeDatepicker() {
    // this.datepickerDirective.modal.dismiss();
  }

  selectOptions: any = {
    title: "Select",
  };
  // todo fix the date
  bankdata;
  paymentMethods;
  couponNumber;
  dataArray = [];
  email;
  telephone;
  address_id;
  customer_id;
  firstname;
  lastname;
  current;
  company;
  address_1;
  address_2;
  city;
  postcode;
  zone_id;
  name;
  cartTotal;
  localDate;
  coupon;
  paymentMethod;
  datetoday;
  twentyfivetransaction_id;
  allTotal = [];
  firstTermAmount;
  paymenttype: boolean = true;
  caseondelivery: boolean = false;
  paymentmodeltype: boolean = false;
  totalamount;
  onlineamount;
  allowFutureDates: boolean = false;

  // calendar = {
  //   mode: 'month',
  //   currentDate : new Date()
  // };

  constructor(
    public navCtrl: NavController,

    public productServices: Products,
    public users: Users,
    public platform: Platform,
    public networkService: NetworkService,
    public loadingCtrl: LoadingController,
    public logger: Logger,
    public iab: InAppBrowser,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.datetoday = new Date();
    this.localDate = new Date();
  }

  codchange() {
    var _this = this;
    this.paymentMethod = this.paymentMethods;
    if (_this.paymentMethods == "COD") {
      _this.caseondelivery = true;
      _this.paymentmodeltype = false;
      _this.paymenttype = true;
    } else {
      _this.caseondelivery = false;
      _this.paymentmodeltype = true;
      _this.paymenttype = false;
    }
  }

  onlinepay() {
    this.paymentMethods == "Online Payment";

    var options = {
      description: "Online Payment",
      image: "http://kmartprod1298.cloudapp.net/ivipni/image/logo.png",
      currency: "INR",
      key: "rzp_test_ITL1czDoYxnnqj", //"rzp_live_HXw5DZggBTmgfm",
      amount: this.firstTermAmount,
      name: "Ivipani",
      prefill: {
        email: this.email,
        contact: this.telephone,
        name: this.firstname,
      },
      theme: {
        color: "royal-blue",
      },
      modal: {
        ondismiss: function () {
          alert("dismissed");
        },
      },
    };

    var successCallback = (payment_id) => {
      //alert('payment_id: ' + payment_id);
      let payDetailsObj = {
        dataArray: this.dataArray,
        email: this.email,
        totalamount: this.totalamount,
        firstTermAmount: this.totalamount,
        twentyfivetransaction_id: payment_id,
        date: this.localDate.toISOString(),
        telephone: this.telephone,
        address_id: this.address_id,
        customer_id: this.customer_id,
        firstname: this.firstname,
        lastname: this.lastname,
        company: this.company,
        address_1: this.address_1,
        address_2: this.address_2,
        city: this.city,
        postcode: this.postcode,
        zone_id: this.zone_id,
        name: this.name,
        cartTotal: this.cartTotal,
        coupon: this.coupon,
        paymentMethod: this.paymentMethods,
        totals: this.allTotal,
      };

      let myThankYouObj;
      this.users.placeOrder(payDetailsObj, (result, data) => {
        if (result == "1") {
          myThankYouObj = {
            pay: payDetailsObj,
            data: data,
          };

          // this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
          let navagationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(myThankYouObj),
            },
          };
          this.router.navigate(["/thank-you"], navagationExtras);
        } else {
          // this.navCtrl.setRoot(ThankYouPage, myThankYouObj);

          let navagationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(myThankYouObj),
            },
          };
          this.router.navigate(["/thank-you"], navagationExtras);
        }
      });
    };

    var cancelCallback = function (error) {
      alert(error.description + " (Error " + error.code + ")");
    };

    this.platform.ready().then(() => {
      RazorpayCheckout.open(options, successCallback, cancelCallback);
    });
  }

  change() {
    var _this = this;
    this.paymentMethod = this.paymentMethods;
    if (_this.paymentMethods == "COD") {
      _this.caseondelivery = true;
      _this.paymentmodeltype = false;
      _this.paymenttype = true;
    } else {
      _this.caseondelivery = false;
      _this.paymentmodeltype = true;
      _this.paymenttype = true;
    }
    this.productServices.getBanks(function (data) {
      _this.logger.debug("checking Array" + JSON.stringify(data));
      _this.bankdata = data.data;
    });
  }

  placeOrderforCod() {
    var _this = this;
    _this.paymentMethods = "COD";

    let payDetailsObj2 = {
      totalamount: _this.totalamount,
      date: _this.localDate.toISOString(),
      address_id: _this.address_id,
      paymentMethod: _this.paymentMethods,
      totals: _this.allTotal,
    };
    let payDetailsObj = {
      totalamount: _this.totalamount,
      dataArray: _this.dataArray,
      email: _this.email,
      firstTermAmount: _this.totalamount,
      twentyfivetransaction_id: _this.twentyfivetransaction_id,
      date: _this.localDate.toISOString(),
      telephone: _this.telephone,
      address_id: _this.address_id,
      customer_id: _this.customer_id,
      firstname: _this.firstname,
      lastname: _this.lastname,
      company: _this.company,
      address_1: _this.address_1,
      address_2: _this.address_2,
      city: _this.city,
      postcode: _this.postcode,
      zone_id: _this.zone_id,
      name: _this.name,
      cartTotal: _this.cartTotal,
      coupon: _this.coupon,
      paymentMethod: _this.paymentMethods,
      totals: _this.allTotal,
    };
    let loading = _this.loadingCtrl.create({
      message: ``,
    });

    _this.logger.debug(
      "checking the myThankYouObj" + JSON.stringify(payDetailsObj2)
    );
    let myThankYouObj;
    if (_this.paymentMethods == "COD") {
      // loading.present();

      this.users.CODplaceOrder(payDetailsObj2, function (result, data) {
        // console.log("result==>", result);
        // console.log("data==>", data);

        _this.logger.debug("data " + JSON.stringify(data));
        _this.logger.debug("parse data " + JSON.parse(data));
        if (result == "1") {
          myThankYouObj = {
            pay: payDetailsObj,
            data: data,
          };
          _this.logger.debug(
            "checking the myThankYouObj" + JSON.stringify(myThankYouObj)
          );

          // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
          let navagationExtras: NavigationExtras = {
            queryParams: {
              data: JSON.stringify(myThankYouObj),
            },
          };
          _this.router.navigate(["/thank-you"], navagationExtras); // loading.dismiss();
        } else {
          _this.networkService.showErrorAlert();
          // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
          // loading.dismiss();
        }
      });
    } else {
      // loading.dismiss();
      _this.networkService.showSuccessAlert("please select payment method");
    }
  }

  placeOrders() {
    var _this = this;

    let payDetailsObj1 = {
      totalamount: _this.onlineamount,
      firstTermAmount: _this.onlineamount,
      twentyfivetransaction_id: _this.twentyfivetransaction_id,
      date: _this.localDate.toISOString(),
      address_id: _this.address_id,
      paymentMethod: _this.paymentMethods,
      totals: _this.allTotal,
    };

    let payDetailsObj = {
      dataArray: _this.dataArray,
      email: _this.email,
      totalamount: _this.onlineamount,
      firstTermAmount: _this.onlineamount,
      twentyfivetransaction_id: _this.twentyfivetransaction_id,
      date: _this.localDate.toISOString(),
      telephone: _this.telephone,
      address_id: _this.address_id,
      customer_id: _this.customer_id,
      firstname: _this.firstname,
      lastname: _this.lastname,
      company: _this.company,
      address_1: _this.address_1,
      address_2: _this.address_2,
      city: _this.city,
      postcode: _this.postcode,
      zone_id: _this.zone_id,
      name: _this.name,
      cartTotal: _this.cartTotal,
      coupon: _this.coupon,
      paymentMethod: _this.paymentMethods,
      totals: _this.allTotal,
    };
    let loading = _this.loadingCtrl.create({
      message: ``,
    });

    _this.logger.debug("paydetailsobj " + JSON.stringify(payDetailsObj1));
    _this.logger.debug(
      "paymentmethods " + JSON.stringify(_this.paymentMethods)
    );
    let myThankYouObj;
    if (_this.paymentMethods != "COD") {
      if (_this.twentyfivetransaction_id) {
        // loading.present();
        this.users.placeOrder(payDetailsObj1, function (result, data) {
          _this.logger.debug("data " + JSON.stringify(data));
          _this.logger.debug("parse data " + JSON.parse(data));
          if (result == "1") {
            myThankYouObj = {
              pay: payDetailsObj,
              data: data,
            };
            _this.logger.debug(
              "checking the myThankYouObj" + JSON.stringify(myThankYouObj)
            );

            // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
            // loading.dismiss();
          } else {
            _this.networkService.showErrorAlert();
            // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
            // loading.dismiss();
          }
        });
      } else {
        // loading.dismiss();
        _this.networkService.showSuccessAlert("Please insert transaction id");
      }
    }
  }

  optionsFn(event) {
    const browser = this.iab.create(event.bank_url, "_self", {
      location: "yes",
      closebuttoncaption: "Close",
    });
    browser.insertCSS({ code: "{color: royal-blue;}" });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      let orderDetails = JSON.parse(param["data"]);

      this.email = orderDetails.email;
      this.telephone = orderDetails.telephone;
      this.address_id = orderDetails.address_id;
      this.customer_id = orderDetails.customer_id;
      this.firstname = orderDetails.firstname;
      this.lastname = orderDetails.lastname;
      this.company = orderDetails.company;
      this.address_1 = orderDetails.address_1;
      this.address_2 = orderDetails.address_2;
      this.city = orderDetails.city;
      this.postcode = orderDetails.postcode;
      this.zone_id = orderDetails.zone_id;
      this.name = orderDetails.name;
      this.dataArray = orderDetails.dataArray;
      this.cartTotal = orderDetails.cartTotal;
      this.totalamount = (this.cartTotal + (this.cartTotal * 2) / 100).toFixed(
        2
      );
      this.allTotal = orderDetails.allTotal;
      this.onlineamount = this.cartTotal.toFixed(2);
      this.firstTermAmount = Math.round(
        (this.cartTotal + (this.cartTotal * 2) / 100) * 100
      );
    });
  }
}
