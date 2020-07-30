import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Products } from "../../../providers/commerce/products";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.page.html",
  styleUrls: ["./my-profile.page.scss"],
})
export class MyProfilePage implements OnInit {
  userDetails = [];
  loading;

  constructor(
    public productServices: Products,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger
  ) {
    var _this = this;

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      this.loader();
      _this.userDetails = [];
      this.productServices.getUserDetails(function (data) {
        _this.logger.debug("checking my user Details" + data);
        _this.userDetails.push(data.data);
        _this.logger.debug("userDetails " + _this.userDetails);
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

  ngOnInit() {}
}
