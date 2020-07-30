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


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          </ion-buttons>\r\n        <ion-title>My Account</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"account\">\r\n    <ion-card (click)=\"myprofile()\">\r\n        <ion-item lines=\"none\">\r\n            <ion-label>My Profile</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card (click)=\"myOrder()\">\r\n        <ion-item lines=\"none\">\r\n            <ion-label>My Orders</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card (click)=\"paymentSuccessFailure()\">\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Payment History</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card (click)=\"changePasswd()\">\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Change Password</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card (click)=\"notification()\">\r\n        <ion-item lines=\"none\">\r\n            <ion-label>Notifications</ion-label>\r\n            <ion-icon name=\"chevron-forward-outline\" slot=\"end\"></ion-icon>\r\n        </ion-item>\r\n    </ion-card>\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card-content {\n  font-size: 14px;\n  float: right;\n  color: #387ef5;\n}\n.account ion-card {\n  width: 93%;\n  background-color: white;\n}\n.account hr {\n  width: 97%;\n}\n.account .ion-label {\n  color: #387ef5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9EOlxcU2VlbWFcXFByb2plY3RcXGl2aXBuaS9zcmNcXGFwcFxccGFnZXNcXGFjY291bnRcXGFjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBRENJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0k7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7QUNETjtBRElJO0VBQ0UsVUFBQTtBQ0ZOO0FES0k7RUFDRSxjQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuICBcclxuICAgIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgY29sb3I6ICMzODdlZjU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaHIge1xyXG4gICAgICB3aWR0aDogOTclO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIuYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uYWNjb3VudCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWNjb3VudCBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMzg3ZWY1O1xufVxuLmFjY291bnQgaW9uLWNhcmQge1xuICB3aWR0aDogOTMlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5hY2NvdW50IGhyIHtcbiAgd2lkdGg6IDk3JTtcbn1cbi5hY2NvdW50IC5pb24tbGFiZWwge1xuICBjb2xvcjogIzM4N2VmNTtcbn0iXX0= */";
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