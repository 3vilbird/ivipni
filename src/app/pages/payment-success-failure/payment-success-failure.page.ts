// all clear
import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { Products } from "../../../providers/commerce/products";
import { NetworkService } from "../../../providers/network-service/network-service";
import { PaymentDetailsPage } from "../payment-details/payment-details.page";
import { Logger } from "../../../providers/logger/logger";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-payment-success-failure",
  templateUrl: "./payment-success-failure.page.html",
  styleUrls: ["./payment-success-failure.page.scss"],
})
export class PaymentSuccessFailurePage implements OnInit {
  public paymentSuccessFailure = [];
  public paymentSuccess: boolean;
  public paymentFailure: boolean;
  paymentSuccessFailureCount = false;
  loading;

  constructor(
    public navCtrl: NavController,
    public productServices: Products,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger,
    private router: Router
  ) {
    var _this = this;

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      _this.loader();
      this.productServices.getPayment(function (data) {
        _this.paymentSuccessFailure = data.data.orders;
        _this.logger.info(
          "payment object" + JSON.stringify(_this.paymentSuccessFailure)
        );
        if (data.status == "1") {
          _this.paymentSuccess = true;
          _this.paymentFailure = false;
        } else {
          _this.paymentSuccessFailureCount = true;
          _this.paymentSuccess = false;
          _this.paymentFailure = true;
        }
      });
    }
  }

  // loader
  async loader() {
    this.loading = await this.loadingCtrl.create({
      message: ``,
      duration: 1000,
    });
    this.loading.present();
  }

  paymentdetail(payment) {
    var _this = this;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(payment),
      },
    };
    // _this.navCtrl.push(PaymentDetailsPage, payment);
    _this.router.navigate(["/payment-details"], navigationExtras);
  }

  ngOnInit() {}
}
