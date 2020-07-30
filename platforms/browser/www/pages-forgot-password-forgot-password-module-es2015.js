(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Reset Password\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div *ngIf=\"email\">\r\n    <ion-item *ngIf=\"emailButton1\">\r\n      <ion-label floating>Email/Mobile</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"loginId\"></ion-input>\r\n    </ion-item>\r\n    <ion-button (click)=\"generateOTP()\" expand='full' fill=\"outline\" shape=\"round\" *ngIf=\"emailButton1\">\r\n      Send OTP\r\n    </ion-button>\r\n  </div>\r\n  <div *ngIf=\"emailButton2\">\r\n    <h6 *ngIf=\"emailButton2\" class=\"tageinforgot\">\r\n      We are Unable to read SMS, Please enter OTP here\r\n    </h6>\r\n    <ion-item *ngIf=\"emailButton2\">\r\n      <ion-label floating>Enter OTP</ion-label>\r\n      <ion-input type=\"text\" [(ngModel)]=\"otp\"></ion-input>\r\n    </ion-item>\r\n    <ion-row *ngIf=\"emailButton2\">\r\n      <ion-col>\r\n        <ion-button (click)=\"generateOTP()\">Resend OTP</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button (click)=\"validateOTP()\" *ngIf=\"emailButton2\">\r\n          Validate OTP\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </div>\r\n  <div *ngIf=\"secondDiv\">\r\n    <ion-item>\r\n      <ion-label floating> New Password</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"newpassword\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating> Confirm Password</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"conformPassword\"></ion-input>\r\n    </ion-item>\r\n    <ion-button (click)=\"changePassword()\">Change Password</ion-button>\r\n  </div>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("page-forgotpassword ion-header {\n  background-color: blue;\n}\npage-forgotpassword .button-round-ios {\n  height: 10px;\n}\npage-forgotpassword .button-round-md {\n  height: 10px;\n}\npage-forgotpassword .tageinforgot {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHNCQUFBO0FDQU47QURFSTtFQUNFLFlBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FERUk7RUFDRSxXQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtZm9yZ290cGFzc3dvcmQge1xyXG4gICAgaW9uLWhlYWRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLXJvdW5kLWlvcyB7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5idXR0b24tcm91bmQtbWQge1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudGFnZWluZm9yZ290IHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsInBhZ2UtZm9yZ290cGFzc3dvcmQgaW9uLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG59XG5wYWdlLWZvcmdvdHBhc3N3b3JkIC5idXR0b24tcm91bmQtaW9zIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxucGFnZS1mb3Jnb3RwYXNzd29yZCAuYnV0dG9uLXJvdW5kLW1kIHtcbiAgaGVpZ2h0OiAxMHB4O1xufVxucGFnZS1mb3Jnb3RwYXNzd29yZCAudGFnZWluZm9yZ290IHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

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







let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(navCtrl, user, toastCtrl, platform, logger, holders, loadingCtrl, router) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.logger = logger;
        this.holders = holders;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.loginId = "";
        this.otp = "";
        this.email = true;
        this.emailButton1 = true;
        this.emailButton2 = false;
        this.secondDiv = false;
    }
    ngOnInit() { }
    ionViewDidLoad() {
        var permissions = cordova.plugins.permissions;
        var errorCallback = () => {
            this.holders.showSuccessAlert("READ_SMS permission is not turned on");
        };
        permissions.requestPermission(permissions.READ_SMS, (status) => {
            // if(!status.hasPermission) {
            //   console.log("vidya"+JSON.stringify(status));
            //   errorCallback();
            // }
            // else{
            //    console.log("vidya2"+JSON.stringify(status));
            //   this.getSMS();
            // }
        }, errorCallback);
    }
    generateOTP() {
        this.logger.info("invoking generateOTP FN");
        this.user.generateOTP(this.loginId, (result, data, id) => {
            if (result == "1") {
                this.logger.debug("checking the data for generateotp " + JSON.stringify(data));
                this.customer_id = id;
                this.logger.debug("checking the customerid " + this.customer_id);
                this.emailButton2 = false;
                this.emailButton1 = true;
                if (this.platform.is("android")) {
                    // //setting the permission for android above 6.0
                    this.holders.presentLoadingCustom();
                    setTimeout(() => {
                        this.holders.dissmissLoadingCustom();
                        this.platform.ready().then(() => {
                            var permissions = cordova.plugins.permissions;
                            permissions.checkPermission(permissions.READ_SMS, checkPermissionCallback, null);
                            this.getSMS();
                            function checkPermissionCallback(status) {
                                if (!status.hasPermission) {
                                    var errorCallback = () => {
                                        this.holders.showSuccessAlert("READ_SMS permission is not turned on");
                                    };
                                    permissions.requestPermission(permissions.READ_SMS, (status) => {
                                        if (!status.hasPermission) {
                                            errorCallback();
                                        }
                                        else {
                                            this.getSMS();
                                        }
                                    }, errorCallback);
                                }
                            }
                        });
                    }, 10000);
                }
                else {
                    console.log("it is not cordova");
                }
            }
            else {
                alert(data);
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
        var _this = this;
        var newPassword = {
            user_id: _this.customer_id,
            access_token: _this.access_token,
            password: _this.newpassword,
        };
        _this.logger.debug("checking newPassword " + JSON.stringify(newPassword));
        if (_this.newpassword === _this.conformPassword) {
            //     let loading = _this.loadingCtrl.create({
            //  content: ``
            //  });
            this.user.newPassword(newPassword, (result, data) => {
                if (result == "1") {
                    _this.logger.debug("success callback of the new password");
                    _this.toastMessage = "Password changed successfully";
                    _this.holders.dissmissLoadingCustom();
                    _this.presentToast();
                    // loading.dismiss();
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
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
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es2015.js.map