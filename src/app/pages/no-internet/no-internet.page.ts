// all clear
import { Component, OnInit } from '@angular/core';
import {
  NavController,
  ToastController,
  LoadingController
} from "@ionic/angular";
import { NetworkService } from "../../../providers/network-service/network-service";
import { HomePage } from "../../home/home.page";
import { LoginPage } from "../login/login.page";
import { Users } from "../../../providers/commerce/users";
import { Rest } from "../../../providers/network/rest";
import { Logger } from "../../../providers/logger/logger";
import { Holders } from "../../../providers/holders/holders";
// import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-no-internet',
  templateUrl: './no-internet.page.html',
  styleUrls: ['./no-internet.page.scss'],
})
export class NoInternetPage implements OnInit {


    deviceToken: string;
  rootPage: any = LoginPage;
  constructor(
    public navCtrl: NavController,
    public networkService: NetworkService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public user: Users,
    public holders: Holders,
    public storage: Storage,
    public rest: Rest,
    public logger: Logger
  ) {
    //var self = this;
    this.deviceToken = this.holders.getDeviceToken();
  }

  ionViewDidLoad() {
    this.logger.info("Hello NoInternet Page");
  }

async  presentToast() {
    let toast = this.toastCtrl.create({
      message: "No internet connection, check your internet connection",
      duration: 1000,
      position: "middle"
    });

    // toast.onDidDismiss(() => {
    //   this.logger.info("Dismissed toast");
    // });

    // toast.present();
  }

  internetCheck() {
    var self = this;

   
    if (self.holders.nullConnection()) {
      self.holders.showNetworkAlert();
      self.rootPage = NoInternetPage;
    } else {
      var loginId;
      var passwd;
      self.storage.get("loginId").then(val => {
        loginId = val;
        self.storage.get("passwd").then(val => {
          passwd = val;
          
          if (loginId || passwd) {
            let validateUserObj = {
              loginId: loginId,
              password: passwd,
              device_token: self.deviceToken
            };
            self.holders.presentLoadingCustom();
            if (validateUserObj) {
              self.user.validateUser(
                validateUserObj.loginId,
                validateUserObj.password,
                this.deviceToken,
                function(status, data) {
                  if (status) {
                    self.holders.dissmissLoadingCustom();

                    var _dataObj = JSON.parse(data);

                    self.rest.setAuthToken(_dataObj.userId, _dataObj.authToken);

                    // self.navCtrl.setRoot(HomePage, {});
                  } else {
                    self.holders.dissmissLoadingCustom();
                    this.navCtrl.setRoot(LoginPage);
                  }
                }
              );
            }
          } else {
            // this.navCtrl.setRoot(LoginPage);
          }
        });
      });
    }
  }
  ngOnInit() {
  }

}
