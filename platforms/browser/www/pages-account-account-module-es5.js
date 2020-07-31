function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"account\">\n  <ion-grid class=\"padding\">\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-card class=\"accountleft\" color=\"primary\" (click)=\"myprofile()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"person-outline\" style=\"zoom: 1.5;\"></ion-icon\n            ></ion-card-title>\n            <ion-card-subtitle>My profile</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card class=\"accountright\" color=\"secondary\" (click)=\"myOrder()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"list-outline\" style=\"zoom: 1.5;\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>My Orders</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"padding\">\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-card\n          class=\"accountleft\"\n          color=\"dark\"\n          (click)=\"paymentSuccessFailure()\"\n        >\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"wallet-outline\" style=\"zoom:1.5;\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>\n              Payment\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card class=\"accountright\" color=\"danger\" (click)=\"changePasswd()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"key-outline\" style=\"zoom: 1.5;\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>Password</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"padding\">\n    <ion-row>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"accountleft\" color=\"dark\" (click)=\"notification()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon\n                name=\"notifications-circle-outline\"\n                style=\"zoom: 1.5;\"\n              ></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>\n              Notification\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/account/account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/account/account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AccountPageRoutingModule */

  /***/
  function srcAppPagesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
      return AccountPageRoutingModule;
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


    var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/pages/account/account.page.ts");

    var routes = [{
      path: '',
      component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }];

    var AccountPageRoutingModule = function AccountPageRoutingModule() {
      _classCallCheck(this, AccountPageRoutingModule);
    };

    AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.module.ts ***!
    \*************************************************/

  /*! exports provided: AccountPageModule */

  /***/
  function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
      return AccountPageModule;
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


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/pages/account/account-routing.module.ts");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/pages/account/account.page.ts");

    var AccountPageModule = function AccountPageModule() {
      _classCallCheck(this, AccountPageModule);
    };

    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]],
      declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })], AccountPageModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card-content {\n  font-size: 14px;\n  float: right;\n  color: #387ef5;\n}\n.account ion-card {\n  width: 93%;\n}\n.account hr {\n  width: 97%;\n}\n.account .ion-label {\n  color: #387ef5;\n}\n.account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card {\n  width: 94%;\n  font-family: \"PT Serif\", serif;\n}\n.accountleft {\n  background: white;\n  background: linear-gradient(23deg, white 0%, white 5%, white 10%, #84affb 87%, #3171e0 100%);\n  color: #000;\n  padding: 10px;\n  text-align: center;\n  font-family: \"PT Serif\", serif;\n}\n.accountright {\n  position: relative;\n  margin-left: 50px;\n  background: white;\n  background: white;\n  background: linear-gradient(23deg, white 0%, white 10%, white 0%, #84affb 87%, #3171e0 100%);\n  color: #000;\n  padding: 10px;\n  text-align: center;\n  font-family: \"PT Serif\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FES0U7RUFDRSxVQUFBO0FDSEo7QURNRTtFQUNFLGNBQUE7QUNKSjtBRE9BO0VBQ0UsNEJBQUE7QUNKRjtBRE1FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDSko7QURPRTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ0xKO0FEU0E7RUFDRSxpQkFBQTtFQUNBLDRGQUFBO0VBUUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDYkY7QURlQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQWFBLGlCQUFBO0VBQ0EsNEZBQUE7RUFRQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUMvQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMzg3ZWY1O1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MyU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBociB7XG4gICAgd2lkdGg6IDk3JTtcbiAgfVxuXG4gIC5pb24tbGFiZWwge1xuICAgIGNvbG9yOiAjMzg3ZWY1O1xuICB9XG59XG4uYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCIsIHNlcmlmO1xuICB9XG59XG5cbi5hY2NvdW50bGVmdCB7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDIzZGVnLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA1JSxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwJSxcbiAgICByZ2JhKDEzMiwgMTc1LCAyNTEsIDEpIDg3JSxcbiAgICByZ2JhKDQ5LCAxMTMsIDIyNCwgMSkgMTAwJVxuICApO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiLCBzZXJpZjtcbn1cbi5hY2NvdW50cmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgLy8gICAyM2RlZyxcbiAgLy8gICByZ2JhKDU2LCAxMjgsIDI1NSwgMSkgMTAlIHJnYmEoNTYsIDEyOCwgMjU1LCAxKSAzMCUgcmdiYSg1NiwgMTI4LCAyNTUsIDEpXG4gIC8vICAgICAxMDAlXG4gIC8vICk7XG4gIC8vIGJhY2tncm91bmQ6IHJnYigyMTMsIDI1MiwgMjQ0KTtcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAvLyAgIDI1ZGVnLFxuICAvLyAgIHJnYmEoMjQ4LCAyNTAsIDI1MCwgMSkgNjAlLFxuICAvLyAgIHJnYmEoMjI0LCAyNDUsIDIzNiwgMSkgNzklLFxuICAvLyAgIHJnYmEoMTI0LCAyMzAsIDI0MSwgMSkgMTAwJVxuICAvLyApO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAyM2RlZyxcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAlLFxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsXG4gICAgcmdiYSgxMzIsIDE3NSwgMjUxLCAxKSA4NyUsXG4gICAgcmdiYSg0OSwgMTEzLCAyMjQsIDEpIDEwMCVcbiAgKTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG59XG4iLCIuYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uYWNjb3VudCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWNjb3VudCBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMzg3ZWY1O1xufVxuLmFjY291bnQgaW9uLWNhcmQge1xuICB3aWR0aDogOTMlO1xufVxuLmFjY291bnQgaHIge1xuICB3aWR0aDogOTclO1xufVxuLmFjY291bnQgLmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMzg3ZWY1O1xufVxuXG4uYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uYWNjb3VudCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWNjb3VudCBpb24tY2FyZCB7XG4gIHdpZHRoOiA5NCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCIsIHNlcmlmO1xufVxuXG4uYWNjb3VudGxlZnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIzZGVnLCB3aGl0ZSAwJSwgd2hpdGUgNSUsIHdoaXRlIDEwJSwgIzg0YWZmYiA4NyUsICMzMTcxZTAgMTAwJSk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCIsIHNlcmlmO1xufVxuXG4uYWNjb3VudHJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjNkZWcsIHdoaXRlIDAlLCB3aGl0ZSAxMCUsIHdoaXRlIDAlLCAjODRhZmZiIDg3JSwgIzMxNzFlMCAxMDAlKTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/account/account.page.ts ***!
    \***********************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppPagesAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
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


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear


    var AccountPage =
    /*#__PURE__*/
    function () {
      function AccountPage(navCtrl, logger, router) {
        _classCallCheck(this, AccountPage);

        this.navCtrl = navCtrl;
        this.logger = logger;
        this.router = router;
      }

      _createClass(AccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myprofile",
        value: function myprofile() {
          this.logger.info("invoking MyProfilePage page");
          this.router.navigateByUrl("/my-profile");
        }
      }, {
        key: "myOrder",
        value: function myOrder() {
          this.logger.info("invoking myOrder page");
          this.router.navigateByUrl("/my-order");
        }
      }, {
        key: "paymentSuccessFailure",
        value: function paymentSuccessFailure() {
          this.logger.info("invoking paymentSuccessFailure page");
          this.router.navigateByUrl("/payment-success-failure");
        }
      }, {
        key: "changePasswd",
        value: function changePasswd() {
          this.logger.info("invoking changePasswd page");
          this.router.navigateByUrl("/my-password");
        }
      }, {
        key: "notification",
        value: function notification() {
          this.router.navigateByUrl("/notification");
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-account",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/pages/account/account.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], AccountPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-account-account-module-es5.js.map