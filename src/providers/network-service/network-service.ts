// error line no 17
import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Network } from "@ionic-native/network/ngx";
import { Logger } from "../logger/logger";

/*
  Generated class for the NetworkService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NetworkService {
  constructor(
    public alertCtrl: AlertController,
    public logger: Logger,
    public Network: Network
  ) {
    this.logger.info("Hello NetworkService Provider");
    this.logger.debug("checking in network " + this.nullConnection());
    this.logger.debug("connection type " + Network.type);
  }

  async showNetworkAlert() {
    var _this = this;
    let networkAlert = await _this.alertCtrl.create({
      header: "No Internet Connection",
      message:
        "Cannot proceed with this operation. No network connection!. Please check your internet connection",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            _this.logger.info("clicked cancel button");
          },
        },
      ],
    });
    networkAlert.present();
  }

  nullConnection() {
    return this.Network.type === "none";
  }

  async showErrorAlert() {
    var _this = this;
    let networkAlert = await _this.alertCtrl.create({
      header: "Error",
      message: "There seems to be system error. We are not able to proceed.",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            _this.logger.info("clicked showErrorAlert cancel button");
          },
        },
      ],
    });
    networkAlert.present();
  }

  async showSuccessAlert(msg: string) {
    this.logger.debug("msg " + msg);
    var _this = this;
    let networkAlert = await _this.alertCtrl.create({
      header: "Alert",
      message: msg,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            _this.logger.info("clicked showErrorAlert cancel button");
          },
        },
      ],
    });
    networkAlert.present();
  }
}
