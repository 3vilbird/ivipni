(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Reset Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"email\">\n    <ion-item *ngIf=\"emailButton1\">\n      <ion-label position=\"stacked\">Email/Mobile</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"loginId\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"genHash()\" *ngIf=\"emailButton1\" expand=\"block\">\n      Send OTP\n    </ion-button>\n  </div>\n  <div *ngIf=\"emailButton2\">\n    <h6 *ngIf=\"emailButton2\" class=\"tageinforgot\">\n      We are Unable to read SMS, Please enter OTP here\n    </h6>\n    <ion-item *ngIf=\"emailButton2\">\n      <ion-label position=\"stacked\">Enter OTP</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"otp\"></ion-input>\n    </ion-item>\n    <ion-row *ngIf=\"emailButton2\">\n      <ion-col>\n        <ion-button (click)=\"generateOTP();\" expand=\"block\"\n          >Resend OTP</ion-button\n        >\n      </ion-col>\n      <ion-col>\n        <ion-button\n          (click)=\"validateOTP();\"\n          *ngIf=\"emailButton2\"\n          expand=\"block\"\n        >\n          Validate OTP\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"secondDiv\">\n    <ion-item>\n      <ion-label position=\"stacked\"> New Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"newpassword\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> Confirm Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"conformPassword\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"changePassword();\" expand=\"block\"\n      >CHANGE PASSWORD</ion-button\n    >\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/pages/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-forgotpassword ion-header {\n  background-color: blue;\n}\npage-forgotpassword .button-round-ios {\n  height: 10px;\n}\npage-forgotpassword .button-round-md {\n  height: 10px;\n}\npage-forgotpassword .tageinforgot {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usc0JBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1mb3Jnb3RwYXNzd29yZCB7XG4gICAgaW9uLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIH1cbiAgICAuYnV0dG9uLXJvdW5kLWlvcyB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5idXR0b24tcm91bmQtbWQge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAudGFnZWluZm9yZ290IHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxuICAiLCJwYWdlLWZvcmdvdHBhc3N3b3JkIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxucGFnZS1mb3Jnb3RwYXNzd29yZCAuYnV0dG9uLXJvdW5kLWlvcyB7XG4gIGhlaWdodDogMTBweDtcbn1cbnBhZ2UtZm9yZ290cGFzc3dvcmQgLmJ1dHRvbi1yb3VuZC1tZCB7XG4gIGhlaWdodDogMTBweDtcbn1cbnBhZ2UtZm9yZ290cGFzc3dvcmQgLnRhZ2VpbmZvcmdvdCB7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/holders/holders */ "./src/providers/holders/holders.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sms-retriever/ngx */ "./node_modules/@ionic-native/sms-retriever/ngx/index.js");








let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(navCtrl, user, toastCtrl, platform, logger, holders, loadingCtrl, router, smsRetriever) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.logger = logger;
        this.holders = holders;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.smsRetriever = smsRetriever;
        this.loginId = "";
        this.otp = "";
        this.email = true;
        this.emailButton1 = true;
        this.emailButton2 = false;
        this.secondDiv = false;
    }
    ngOnInit() { }
    ionViewDidLoad() {
        console.log("ionViewDidLoad OtpPage");
        var permissions = cordova.plugins.permissions;
        var errorCallback = () => {
            this.holders.showSuccessAlert("READ_SMS permission is not turned on");
        };
        permissions.requestPermission(permissions.READ_SMS, (status) => {
            console.log("vidya1" + JSON.stringify(status));
            // if(!status.hasPermission) {
            //   console.log("vidya"+JSON.stringify(status));
            //   errorCallback();
            // }
            // else{
            //    console.log("vidya2"+JSON.stringify(status));
            //   this.getSMS();
            // }
        }, errorCallback);
        console.log("permissions" + permissions);
    }
    //=================================================
    genHash() {
        // This function is to get hash string of APP.
        // * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
        this.smsRetriever
            .getAppHash()
            .then((res) => {
            console.log(res);
            alert(res);
            this.hash = res;
            // after generating the hash call the genopt
            // FIXME: uncomment me for test you commented me
            this.generateOTP();
            // this.retriveSMS();
        })
            .catch((error) => console.error(error));
    }
    retriveSMS() {
        // issues time out after 5 min
        console.log("Watching SMS");
        this.smsRetriever
            .startWatching()
            .then((res) => {
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
            .catch((error) => {
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
                this.logger.debug("checking the data for generateotp " + JSON.stringify(data));
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
                }
                else {
                    console.log("it is not cordova");
                }
            }
            else {
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
            }
            else {
                this.logger.error("error of otp" + data);
                this.emailButton2 = true;
                this.emailButton1 = false;
                alert("Please enter correct OTP");
            }
        });
    }
    storeSMS() {
        if (this.otpNumber) {
            this.user.validateOTP(this.otpNumber, this.loginId, (result, data, id) => {
                if (result == "1") {
                    this.access_token = id;
                    this.email = false;
                    this.emailButton1 = false;
                    this.emailButton2 = false;
                    this.secondDiv = true;
                    this.logger.debug("checking access tocken " + this.access_token);
                }
                else {
                    this.logger.error("error of otp" + data);
                    this.email = false;
                    this.emailButton2 = true;
                }
            });
        }
        else {
            this.logger.info("no otpnumber");
            this.email = false;
            this.emailButton2 = true;
        }
    }
    getSMS() {
        var filter = {
            box: "inbox",
            // following 4 filters should NOT be used together, they are OR relationship
            read: 0,
            // _id : 1234, // specify the msg id
            //address : 'IM-WAYSMS', // sender's phone number
            // body : 'This is a test SMS', // content to match
            // following 2 filters can be used to list page up/down
            indexFrom: 0,
            maxCount: 10,
        };
        this.logger.debug("getSms" + JSON.stringify(filter));
        if (window.SMS)
            window.SMS.listSMS(filter, (data) => {
                //Filterd Data
                this.logger.debug("checking the filter data " + JSON.stringify(data));
                for (var i = 0; i < data.length; i++) {
                    this.logger.debug("checking");
                    if (data[i].address.substr(3, 7) == "VIPNI") {
                        this.logger.debug("checking the text of adress " + data[i].address.substr(3, 7));
                        this.text = data[i].body;
                        this.logger.debug("checking the text " + this.text);
                        this.otpNumber = this.text.substring(Number(this.text.indexOf("'")) + Number(1), Number(this.text.lastIndexOf("'")));
                        this.logger.debug("checking the otpNumber " + this.otpNumber);
                        break;
                    }
                    console.log("Vidya" + this.otpNumber);
                }
                if (this.otpNumber) {
                    this.user.validateOTP(this.otpNumber, this.loginId, (result, data, id) => {
                        if (result == "1") {
                            this.access_token = id;
                            this.email = false;
                            this.emailButton1 = false;
                            this.emailButton2 = false;
                            this.secondDiv = true;
                            this.logger.debug("checking access tocken " + this.access_token);
                        }
                        else {
                            this.logger.error("error of otp" + data);
                            this.email = false;
                            this.emailButton2 = true;
                        }
                    });
                }
                else {
                    this.logger.info("no otpnumber");
                    this.email = false;
                    this.emailButton2 = true;
                }
            }, (err) => {
                this.logger.debug("checking the err " + JSON.stringify(err));
            });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            // toast.onDidDismiss(() => {
            //   this.logger.info("Dismissed toast");
            // });
            toast.present();
        });
    }
    changePassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
                this.loading = yield _this.loadingCtrl.create({
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
                    }
                    else {
                        _this.logger.error("error of otp " + data);
                    }
                });
            }
            else {
                _this.logger.debug("check your password");
                _this.toastMessage = "Password and re-enter password should be same";
                _this.presentToast();
            }
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"] },
    { type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_5__["Holders"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_7__["SmsRetriever"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-forgot-password",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/forgot-password/forgot-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"],
        _providers_holders_holders__WEBPACK_IMPORTED_MODULE_5__["Holders"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_7__["SmsRetriever"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es2015.js.map