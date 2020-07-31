function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotPasswordForgotPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Reset Password\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf=\"email\">\n    <ion-item *ngIf=\"emailButton1\">\n      <ion-label position=\"stacked\">Email/Mobile</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"loginId\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"genHash()\" *ngIf=\"emailButton1\" expand=\"block\">\n      Send OTP\n    </ion-button>\n  </div>\n  <div *ngIf=\"emailButton2\">\n    <h6 *ngIf=\"emailButton2\" class=\"tageinforgot\">\n      We are Unable to read SMS, Please enter OTP here\n    </h6>\n    <ion-item *ngIf=\"emailButton2\">\n      <ion-label position=\"stacked\">Enter OTP</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"otp\"></ion-input>\n    </ion-item>\n    <ion-row *ngIf=\"emailButton2\">\n      <ion-col>\n        <ion-button (click)=\"generateOTP();\" expand=\"block\"\n          >Resend OTP</ion-button\n        >\n      </ion-col>\n      <ion-col>\n        <ion-button\n          (click)=\"validateOTP();\"\n          *ngIf=\"emailButton2\"\n          expand=\"block\"\n        >\n          Validate OTP\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf=\"secondDiv\">\n    <ion-item>\n      <ion-label position=\"stacked\"> New Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"newpassword\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\"> Confirm Password</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"conformPassword\"></ion-input>\n    </ion-item>\n    <ion-button (click)=\"changePassword();\" expand=\"block\"\n      >CHANGE PASSWORD</ion-button\n    >\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/forgot-password/forgot-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/forgot-password/forgot-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ForgotPasswordPageRoutingModule */

  /***/
  function srcAppPagesForgotPasswordForgotPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function () {
      return ForgotPasswordPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/pages/forgot-password/forgot-password.page.ts");

    var routes = [{
      path: '',
      component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }];

    var ForgotPasswordPageRoutingModule = function ForgotPasswordPageRoutingModule() {
      _classCallCheck(this, ForgotPasswordPageRoutingModule);
    };

    ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot-password/forgot-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ForgotPasswordPageModule */

  /***/
  function srcAppPagesForgotPasswordForgotPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function () {
      return ForgotPasswordPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgot-password-routing.module */
    "./src/app/pages/forgot-password/forgot-password-routing.module.ts");
    /* harmony import */


    var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password.page */
    "./src/app/pages/forgot-password/forgot-password.page.ts");

    var ForgotPasswordPageModule = function ForgotPasswordPageModule() {
      _classCallCheck(this, ForgotPasswordPageModule);
    };

    ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]],
      declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })], ForgotPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgot-password/forgot-password.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgotPasswordForgotPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "page-forgotpassword ion-header {\n  background-color: blue;\n}\npage-forgotpassword .button-round-ios {\n  height: 10px;\n}\npage-forgotpassword .button-round-md {\n  height: 10px;\n}\npage-forgotpassword .tageinforgot {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Usc0JBQUE7QUNBTjtBREVJO0VBQ0UsWUFBQTtBQ0FOO0FERUk7RUFDRSxZQUFBO0FDQU47QURFSTtFQUNFLFdBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1mb3Jnb3RwYXNzd29yZCB7XG4gICAgaW9uLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgIH1cbiAgICAuYnV0dG9uLXJvdW5kLWlvcyB7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5idXR0b24tcm91bmQtbWQge1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAudGFnZWluZm9yZ290IHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxuICAiLCJwYWdlLWZvcmdvdHBhc3N3b3JkIGlvbi1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufVxucGFnZS1mb3Jnb3RwYXNzd29yZCAuYnV0dG9uLXJvdW5kLWlvcyB7XG4gIGhlaWdodDogMTBweDtcbn1cbnBhZ2UtZm9yZ290cGFzc3dvcmQgLmJ1dHRvbi1yb3VuZC1tZCB7XG4gIGhlaWdodDogMTBweDtcbn1cbnBhZ2UtZm9yZ290cGFzc3dvcmQgLnRhZ2VpbmZvcmdvdCB7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/forgot-password/forgot-password.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
    \***************************************************************/

  /*! exports provided: ForgotPasswordPage */

  /***/
  function srcAppPagesForgotPasswordForgotPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function () {
      return ForgotPasswordPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/holders/holders */
    "./src/providers/holders/holders.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/sms-retriever/ngx */
    "./node_modules/@ionic-native/sms-retriever/ngx/index.js");

    var ForgotPasswordPage =
    /*#__PURE__*/
    function () {
      function ForgotPasswordPage(navCtrl, user, toastCtrl, platform, logger, holders, loadingCtrl, router, smsRetriever) {
        _classCallCheck(this, ForgotPasswordPage);

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

      _createClass(ForgotPasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          var _this2 = this;

          console.log("ionViewDidLoad OtpPage");
          var permissions = cordova.plugins.permissions;

          var errorCallback = function errorCallback() {
            _this2.holders.showSuccessAlert("READ_SMS permission is not turned on");
          };

          permissions.requestPermission(permissions.READ_SMS, function (status) {
            console.log("vidya1" + JSON.stringify(status)); // if(!status.hasPermission) {
            //   console.log("vidya"+JSON.stringify(status));
            //   errorCallback();
            // }
            // else{
            //    console.log("vidya2"+JSON.stringify(status));
            //   this.getSMS();
            // }
          }, errorCallback);
          console.log("permissions" + permissions);
        } //=================================================

      }, {
        key: "genHash",
        value: function genHash() {
          var _this3 = this;

          // This function is to get hash string of APP.
          // * @return {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
          this.smsRetriever.getAppHash().then(function (res) {
            console.log(res);
            alert(res);
            _this3.hash = res; // after generating the hash call the genopt
            // FIXME: uncomment me for test you commented me

            _this3.generateOTP(); // this.retriveSMS();

          }).catch(function (error) {
            return console.error(error);
          });
        }
      }, {
        key: "retriveSMS",
        value: function retriveSMS() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "<ion-spinner name=\"bubbles\"></ion-spinner>"
                    });

                  case 2:
                    this.loading = _context.sent;
                    this.loading.present();
                    console.log("Watching SMS");
                    this.smsRetriever.startWatching().then(function (res) {
                      console.log(res); //  <#> 323741 is your 6 digit OTP for MyApp. t3YUyserD4H
                      // logic to retrieve read sms depends on the string
                      // this function will be automatically dissmissed after some time 5min

                      var otp = res.Message.toString().substr(0, 4);
                      alert("OTP Received - ".concat(otp));
                      _this4.otpNumber = otp;
                      console.log("the otp ii ===>", _this4.otpNumber); // call to get sms()

                      _this4.loading.dismiss();

                      _this4.storeSMS();
                    }).catch(function (error) {
                      console.error(error);

                      _this4.loading.dismiss();

                      _this4.storeSMS();
                    });
                    this.storeSMS();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //====================================================

      }, {
        key: "generateOTP",
        value: function generateOTP() {
          var _this5 = this;

          this.logger.info("invoking generateOTP FN");
          this.user.generateOTP(this.loginId, this.hash, function (result, data, id) {
            if (result == "1") {
              _this5.logger.debug("checking the data for generateotp " + JSON.stringify(data));

              _this5.customer_id = id;
              console.log("===> cust id", id);

              _this5.logger.debug("checking the customerid " + _this5.customer_id);

              _this5.emailButton2 = false;
              _this5.emailButton1 = true;

              if (_this5.platform.is("android")) {
                // //setting the permission for android above 6.0
                _this5.holders.presentLoadingCustom();

                setTimeout(function () {
                  //TODO: uncomment this not needed
                  _this5.holders.dissmissLoadingCustom(); // this.platform.ready().then(() => {
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


                  console.log("=====>", data); // calling retriveSMS()

                  _this5.retriveSMS();
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
      }, {
        key: "validateOTP",
        value: function validateOTP() {
          var _this6 = this;

          this.user.validateOTP(this.otp, this.loginId, function (result, data, id) {
            if (result == "1") {
              _this6.access_token = id;
              _this6.email = false;
              _this6.emailButton2 = false;
              _this6.secondDiv = true;

              _this6.logger.debug("checking access tocken " + _this6.access_token);
            } else {
              _this6.logger.error("error of otp" + data);

              _this6.emailButton2 = true;
              _this6.emailButton1 = false;
              alert("Please enter correct OTP");
            }
          });
        }
      }, {
        key: "storeSMS",
        value: function storeSMS() {
          var _this7 = this;

          if (this.otpNumber) {
            this.user.validateOTP(this.otpNumber, this.loginId, function (result, data, id) {
              if (result == "1") {
                _this7.access_token = id;
                _this7.email = false;
                _this7.emailButton1 = false;
                _this7.emailButton2 = false;
                _this7.secondDiv = true;

                _this7.logger.debug("checking access tocken " + _this7.access_token);
              } else {
                _this7.logger.error("error of otp" + data);

                _this7.email = false;
                _this7.emailButton2 = true;
              }
            });
          } else {
            this.logger.info("no otpnumber");
            this.email = false;
            this.emailButton2 = true;
          }
        }
      }, {
        key: "getSMS",
        value: function getSMS() {
          var _this8 = this;

          var filter = {
            box: "inbox",
            // following 4 filters should NOT be used together, they are OR relationship
            read: 0,
            // _id : 1234, // specify the msg id
            //address : 'IM-WAYSMS', // sender's phone number
            // body : 'This is a test SMS', // content to match
            // following 2 filters can be used to list page up/down
            indexFrom: 0,
            maxCount: 10
          };
          this.logger.debug("getSms" + JSON.stringify(filter));
          if (window.SMS) window.SMS.listSMS(filter, function (data) {
            //Filterd Data
            _this8.logger.debug("checking the filter data " + JSON.stringify(data));

            for (var i = 0; i < data.length; i++) {
              _this8.logger.debug("checking");

              if (data[i].address.substr(3, 7) == "VIPNI") {
                _this8.logger.debug("checking the text of adress " + data[i].address.substr(3, 7));

                _this8.text = data[i].body;

                _this8.logger.debug("checking the text " + _this8.text);

                _this8.otpNumber = _this8.text.substring(Number(_this8.text.indexOf("'")) + Number(1), Number(_this8.text.lastIndexOf("'")));

                _this8.logger.debug("checking the otpNumber " + _this8.otpNumber);

                break;
              }

              console.log("Vidya" + _this8.otpNumber);
            }

            if (_this8.otpNumber) {
              _this8.user.validateOTP(_this8.otpNumber, _this8.loginId, function (result, data, id) {
                if (result == "1") {
                  _this8.access_token = id;
                  _this8.email = false;
                  _this8.emailButton1 = false;
                  _this8.emailButton2 = false;
                  _this8.secondDiv = true;

                  _this8.logger.debug("checking access tocken " + _this8.access_token);
                } else {
                  _this8.logger.error("error of otp" + data);

                  _this8.email = false;
                  _this8.emailButton2 = true;
                }
              });
            } else {
              _this8.logger.info("no otpnumber");

              _this8.email = false;
              _this8.emailButton2 = true;
            }
          }, function (err) {
            _this8.logger.debug("checking the err " + JSON.stringify(err));
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: this.toastMessage,
                      duration: 1000,
                      position: "middle"
                    });

                  case 2:
                    toast = _context2.sent;
                    // toast.onDidDismiss(() => {
                    //   this.logger.info("Dismissed toast");
                    // });
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this9 = this;

            var _this, newPassword;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log("cahnge password called");
                    _this = this;
                    newPassword = {
                      user_id: _this.customer_id,
                      access_token: _this.access_token,
                      password: _this.newpassword
                    };

                    _this.logger.debug("checking newPassword " + JSON.stringify(newPassword));

                    console.log("========> new password data", newPassword);

                    if (!(_this.newpassword === _this.conformPassword)) {
                      _context3.next = 13;
                      break;
                    }

                    _context3.next = 8;
                    return _this.loadingCtrl.create({
                      message: "<ion-spinner name=\"bubbles\"></ion-spinner>"
                    });

                  case 8:
                    this.loading = _context3.sent;
                    this.loading.present();
                    this.user.newPassword(newPassword, function (result, data) {
                      if (result == "1") {
                        _this.logger.debug("success callback of the new password");

                        _this.toastMessage = "Password changed successfully";

                        _this.holders.dissmissLoadingCustom();

                        _this.presentToast();

                        _this9.loading.dismiss(); // _this.navCtrl.setRoot(LoginPage, {});


                        _this.router.navigateByUrl("/login");
                      } else {
                        _this.logger.error("error of otp " + data);
                      }
                    });
                    _context3.next = 16;
                    break;

                  case 13:
                    _this.logger.debug("check your password");

                    _this.toastMessage = "Password and re-enter password should be same";

                    _this.presentToast();

                  case 16:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ForgotPasswordPage;
    }();

    ForgotPasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]
      }, {
        type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_5__["Holders"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_7__["SmsRetriever"]
      }];
    };

    ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-forgot-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.page.scss */
      "./src/app/pages/forgot-password/forgot-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"], _providers_holders_holders__WEBPACK_IMPORTED_MODULE_5__["Holders"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_7__["SmsRetriever"]])], ForgotPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module-es5.js.map