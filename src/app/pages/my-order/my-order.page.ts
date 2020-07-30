import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Products } from "../../../providers/commerce/products";
import { OrderDetailsPage } from "../order-details/order-details.page";
import { Logger } from "../../../providers/logger/logger";
import { Router, NavigationExtras } from "@angular/router";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-my-order",
  templateUrl: "./my-order.page.html",
  styleUrls: ["./my-order.page.scss"],
})
export class MyOrderPage implements OnInit {
  public myOrder = [];
  myOrderCount = false;
  loading;

  constructor(
    public navCtrl: NavController,
    public productServices: Products,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger,
    public router: Router
  ) {
    var _this = this;

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      this.loader();
      _this.myOrder = [];
      this.productServices.getOrders(function (data) {
        _this.logger.debug("checking my order Details" + data);
        if (data.status == 1) {
          _this.myOrder = data.data.orders;
          _this.logger.debug("myorder " + JSON.stringify(_this.myOrder));
        } else {
          _this.myOrderCount = true;
        }
      });
    }
  }

  orderdetail(order) {
    // var _this = this;
    // _this.logger.debug("order " + JSON.stringify(order));
    // console.log("orderdata"+ JSON.stringify(order));
    let navigationExatras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(order),
      },
    };
    this.router.navigate(["/order-details"], navigationExatras);
  }

  // loader
  async loader() {
    this.loading = await this.loadingCtrl.create({
      message: ``,
      duration: 1000,
    });
    this.loading.present();
  }

  ngOnInit() {}
}
