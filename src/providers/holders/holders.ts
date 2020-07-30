// one error at line no 25
import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "@ionic/angular";
import { Network } from "@ionic-native/network/ngx";
import { LoadingController } from "@ionic/angular";
import { Logger } from "../logger/logger";

/*
  Generated class for the Holders provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Holders {
  loading;
  loginData;
  deviceToken: string;

  infinate;
  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public network: Network,
    public logger: Logger
  ) {
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
          }
        }
      ]
    });
    await networkAlert.present();
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
          }
        }
      ]
    });
    await networkAlert.present();
  }

  // presentLoadingCustom() {
  //   this.loading = this.loadingCtrl.create({
  //     spinner: "crescent"
  //   });
  //   this.loading.present();
  // }

  async presentLoadingCustom() {
    let loading = await this.loadingCtrl.create({
      message: ``,
      duration: 2000,
    });
    loading.present();
  }

  setLoginData(data) {
    this.loginData = data;
    this.logger.debug("checking the login data" + data);
  }
  getLoginData() {
    this.logger.debug(
      "checking the login data" + JSON.stringify(this.loginData)
    );
    return this.loginData;
  }

  dissmissLoadingCustom() {
    this.loading.dismiss();
  }

  nullConnection() {
    return this.network.type === "none";
  }

  setDeviceToken(token) {
    this.deviceToken = token;
  }

  getDeviceToken() {
    return this.deviceToken;
  }
  async showSuccessAlert(msg: string) {
    this.logger.debug("msg " + msg);
    var _this = this;
    let networkAlert = await _this.alertCtrl.create({
      header: "Ivipni",
      message: msg,
      buttons: [
        {
          text: "Ok",
          handler: () => {
            _this.logger.info("clicked showErrorAlert cancel button");
          }
        }
      ]
    });
    await networkAlert.present();
  }

  setInfinateScrollObj(infinate) {
    this.infinate = infinate;
  }
  getInfinateScrollObj() {
    return this.infinate;
  }
}
