// all clear
import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Products } from "../../../providers/commerce/products";
import { Logger } from "../../../providers/logger/logger";
import { PaymentremaindetailsPage } from "../paymentremaindetails/paymentremaindetails.page";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-paymentremain",
  templateUrl: "./paymentremain.page.html",
  styleUrls: ["./paymentremain.page.scss"],
})
export class PaymentremainPage implements OnInit {
  public amount = [];
  amountremain;
  amountRemainCount = false;
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
      // loading.present();
      this.loader();
      _this.amount = [];
      this.productServices.getamountremain(function (data) {
        _this.logger.debug("checking  Details" + JSON.stringify(data));
        if (data.status == 1) {
          _this.logger.debug("checking  Details" + JSON.stringify(data));

          _this.amount = data.remain_amount;
          _this.amountremain =
            data.remain_amount.amount - data.remain_amount.twentyfiveamount;

          _this.logger.debug("payment " + JSON.stringify(_this.amount));
          // loading.dismiss();
        } else {
          _this.amountRemainCount = true;
          _this.amount = [];
          // loading.dismiss();
        }
      });
    }
  }

  async loader() {
    this.loading = await this.loadingCtrl.create({
      message: ``,
      duration: 1000,
    });
    this.loading.present();
  }

  paymentdetail(amounts) {
    var _this = this;
    _this.logger.debug("paymentremain " + JSON.stringify(amounts));
    let navagatoinExtars: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.amount),
      },
    };
    // _this.navCtrl.push(PaymentremaindetailsPage, amounts);
    _this.router.navigate(["/paymentremaindetails"], navagatoinExtars);
  }
  ngOnInit() {}
}
