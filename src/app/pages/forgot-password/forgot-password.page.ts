import { Component, OnInit } from "@angular/core";
import {
  NavController,
  LoadingController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { LoginPage } from "../login/login.page";
import { Logger } from "../../../providers/logger/logger";
import { Holders } from "../../../providers/holders/holders";
import { Router } from "@angular/router";

import { SmsRetriever } from "@ionic-native/sms-retriever/ngx";

declare var window;
declare var cordova;
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.page.html",
  styleUrls: ["./forgot-password.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
  public loginId = "";
  public otp = "";
  hash: any;
  loading;

  otpNumber: any;
  text;
  //FIXME: remove the hard coded value
  customer_id;
  access_token;
  email: boolean = true;
  emailButton1: boolean = true;
  emailButton2: boolean = false;
  newpassword;
  conformPassword;
  toastMessage: string;
  secondDiv: boolean = false;

  constructor(
    public navCtrl: NavController,
    public user: Users,
    public toastCtrl: ToastController,
    public platform: Platform,
    public logger: Logger,
    public holders: Holders,
    public loadingCtrl: LoadingController,
    private router: Router,
    private smsRetriever: SmsRetriever
  ) {}

  ngOnInit() {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad OtpPage");
    var permissions = cordova.plugins.permissions;
    var errorCallback = () => {
      this.holders.showSuccessAlert("READ_SMS permission is not turned on");
    };
    permissions.requestPermission(
      permissions.READ_SMS,
      (status) => {
        console.log("vidya1" + JSON.stringify(status));
        // if(!status.hasPermission) {
        //   console.log("vidya"+JSON.stringify(status));
        //   errorCallback();
        // }
        // else{
        //    console.log("vidya2"+JSON.stringify(status));
        //   this.getSMS();
        // }
      },
      errorCallback
    );
    console.log("permissions" + permissions);
  }
  //=================================================

  genHash() {
    // This function is to get hash string of APP.
    // * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
    this.smsRetriever
      .getAppHash()
      .then((res: any) => {
        console.log(res);
        alert(res);
        this.hash = res;
        // after generating the hash call the genopt
        // FIXME: uncomment me for test you commented me
        this.generateOTP();
        // this.retriveSMS();
      })
      .catch((error: any) => console.error(error));
  }

  retriveSMS() {
    // issues time out after 5 min

    console.log("Watching SMS");
    this.smsRetriever
      .startWatching()
      .then((res: any) => {
        console.log(res);
        //  <#> 323741 is your 6 digit OTP for MyApp. t3YUyserD4H
        // logic to retrieve read sms depends on the string
        // this function will be automatically dissmissed after some time 5min
        const otp = res.Message.toString().substr(0, 4);
        alert(`OTP Received - ${otp}`);
        this.otpNumber = otp;
        console.log("the otp ii ===>", this.otpNumber);

        // call to get sms()
        this.storeSMS();
      })
      .catch((error: any) => {
        console.error(error);
        this.storeSMS();
      });
    this.storeSMS();
  }

  //====================================================

  generateOTP() {
    this.logger.info("invoking generateOTP FN");

    this.user.generateOTP(this.loginId, this.hash, (result, data, id) => {
      if (result == "1") {
        this.logger.debug(
          "checking the data for generateotp " + JSON.stringify(data)
        );

        this.customer_id = id;
        console.log("===> cust id", id);

        this.logger.debug("checking the customerid " + this.customer_id);
        this.emailButton2 = false;
        this.emailButton1 = true;
        if (this.platform.is("android")) {
          // //setting the permission for android above 6.0
          this.holders.presentLoadingCustom();

          setTimeout(() => {
            //TODO: uncomment this not needed
            this.holders.dissmissLoadingCustom();
            // this.platform.ready().then(() => {
            //   var permissions = cordova.plugins.permissions;
            //   permissions.checkPermission(
            //     permissions.READ_SMS,
            //     checkPermissionCallback,
            //     null
            //   );
            //   this.getSMS();
            //   function checkPermissionCallback(status) {
            //     console.log("checking first " + JSON.stringify(status));
            //     if (!status.hasPermission) {
            //       console.log("invoking the if state");
            //       var errorCallback = () => {
            //         this.holders.showSuccessAlert(
            //           "READ_SMS permission is not turned on"
            //         );
            //       };
            //       permissions.requestPermission(
            //         permissions.READ_SMS,
            //         (status) => {
            //           console.log(status);
            //           if (!status.hasPermission) {
            //             errorCallback();
            //           } else {
            //             this.getSMS();
            //           }
            //         },
            //         errorCallback
            //       );
            //     }
            //   }
            // });
            console.log("=====>", data);
            // calling retriveSMS()
            this.retriveSMS();
          }, 10000);
        } else {
          console.log("it is not cordova");
        }
      } else {
        alert(data);
        console.log("=====>", data);
      }
    });
  }
  validateOTP() {
    this.user.validateOTP(this.otp, this.loginId, (result, data, id) => {
      if (result == "1") {
        this.access_token = id;
        this.email = false;
        this.emailButton2 = false;
        this.secondDiv = true;
        this.logger.debug("checking access tocken " + this.access_token);
      } else {
        this.logger.error("error of otp" + data);
        this.emailButton2 = true;
        this.emailButton1 = false;
        alert("Please enter correct OTP");
      }
    });
  }

  storeSMS() {
    if (this.otpNumber) {
      this.user.validateOTP(
        this.otpNumber,
        this.loginId,
        (result, data, id) => {
          if (result == "1") {
            this.access_token = id;
            this.email = false;
            this.emailButton1 = false;
            this.emailButton2 = false;
            this.secondDiv = true;
            this.logger.debug("checking access tocken " + this.access_token);
          } else {
            this.logger.error("error of otp" + data);
            this.email = false;
            this.emailButton2 = true;
          }
        }
      );
    } else {
      this.logger.info("no otpnumber");
      this.email = false;
      this.emailButton2 = true;
    }
  }

  getSMS() {
    var filter = {
      box: "inbox", // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

      // following 4 filters should NOT be used together, they are OR relationship
      read: 0, // 0 for unread SMS, 1 for SMS already read
      // _id : 1234, // specify the msg id

      //address : 'IM-WAYSMS', // sender's phone number
      // body : 'This is a test SMS', // content to match

      // following 2 filters can be used to list page up/down
      indexFrom: 0, // start from index 0
      maxCount: 10, // count of SMS to return each time
    };

    this.logger.debug("getSms" + JSON.stringify(filter));

    if (window.SMS)
      window.SMS.listSMS(
        filter,
        (data) => {
          //Filterd Data
          this.logger.debug("checking the filter data " + JSON.stringify(data));

          for (var i = 0; i < data.length; i++) {
            this.logger.debug("checking");

            if (data[i].address.substr(3, 7) == "VIPNI") {
              this.logger.debug(
                "checking the text of adress " + data[i].address.substr(3, 7)
              );
              this.text = data[i].body;
              this.logger.debug("checking the text " + this.text);
              this.otpNumber = this.text.substring(
                Number(this.text.indexOf("'")) + Number(1),
                Number(this.text.lastIndexOf("'"))
              );
              this.logger.debug("checking the otpNumber " + this.otpNumber);
              break;
            }
            console.log("Vidya" + this.otpNumber);
          }

          if (this.otpNumber) {
            this.user.validateOTP(
              this.otpNumber,
              this.loginId,
              (result, data, id) => {
                if (result == "1") {
                  this.access_token = id;
                  this.email = false;
                  this.emailButton1 = false;
                  this.emailButton2 = false;
                  this.secondDiv = true;
                  this.logger.debug(
                    "checking access tocken " + this.access_token
                  );
                } else {
                  this.logger.error("error of otp" + data);
                  this.email = false;
                  this.emailButton2 = true;
                }
              }
            );
          } else {
            this.logger.info("no otpnumber");
            this.email = false;
            this.emailButton2 = true;
          }
        },
        (err) => {
          this.logger.debug("checking the err " + JSON.stringify(err));
        }
      );
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 1000,
      position: "middle",
    });

    // toast.onDidDismiss(() => {
    //   this.logger.info("Dismissed toast");
    // });
    toast.present();
  }

  async changePassword() {
    console.log("cahnge password called");

    var _this = this;
    var newPassword = {
      user_id: _this.customer_id,
      access_token: _this.access_token,
      password: _this.newpassword,
    };
    _this.logger.debug("checking newPassword " + JSON.stringify(newPassword));
    console.log("========> new password data", newPassword);
    if (_this.newpassword === _this.conformPassword) {
      this.loading = await _this.loadingCtrl.create({
        message: `<ion-spinner name="bubbles"></ion-spinner>`,
      });
      this.loading.present();
      this.user.newPassword(newPassword, (result, data) => {
        if (result == "1") {
          _this.logger.debug("success callback of the new password");

          _this.toastMessage = "Password changed successfully";
          _this.holders.dissmissLoadingCustom();

          _this.presentToast();

          this.loading.dismiss();
          // _this.navCtrl.setRoot(LoginPage, {});
          _this.router.navigateByUrl("/login");
        } else {
          _this.logger.error("error of otp " + data);
        }
      });
    } else {
      _this.logger.debug("check your password");
      _this.toastMessage = "Password and re-enter password should be same";
      _this.presentToast();
    }
  }
}
