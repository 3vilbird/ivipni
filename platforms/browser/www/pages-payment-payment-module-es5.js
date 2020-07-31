function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Payment Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <div *ngIf=\"paymenttype\">\n      <ion-list radio-group [(ngModel)]=\"paymentMethods\" ngDefaultControl>\n        <ion-item>\n          <ion-label\n            >Online Payment <b>(₹{{totalamount}})</b>\n            <p><small>(Incl 2% extra)</small></p>\n          </ion-label>\n          <ion-radio value=\"Online Payment\" (click)=\"onlinepay()\"></ion-radio>\n        </ion-item>\n        <!-- <ion-item>\n          <ion-label>Bank Transfer <b>(₹{{onlineamount}})</b>\n            <p><small>(NEFT/RTGS/IMPS)</small></p>\n          </ion-label>\n          <ion-radio value=\"Bank Transfer\" (click)=\"change()\"></ion-radio>\n        </ion-item> -->\n\n        <ion-item>\n          <ion-label\n            >COD <b>(₹{{totalamount}})</b>\n            <p><small>(Incl 2% extra)</small></p>\n          </ion-label>\n          <ion-radio value=\"COD\" (click)=\"placeOrderforCod()\"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </div>\n  </ion-card>\n  <ion-card class=\"ion-card\" *ngIf=\"paymentmodeltype\">\n    <ion-item>\n      <ion-label color=\"primary\">Select Bank</ion-label>\n      <ion-select\n        [interfaceOptions]=\"selectOptions\"\n        (ionChange)=\"optionsFn($event);\"\n      >\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of bankdata\">\n          <span>{{item.bank_name}}</span>\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n  <ion-card class=\"ion-card\">\n    <div *ngIf=\"paymentmodeltype\">\n      <ion-item>\n        <ion-label>\n          <h2><b>Bank Transaction Details</b></h2>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label class=\"paymentpageionlabel\"><b>Date :</b> </ion-label>\n        <ion-label class=\"paymentamount\">\n          <!-- TODO please do fix it bug  -->\n          <!-- <span [(value)]=\"localDate\" [max]=\"datetoday\" clear class=\"ScheduleDate\"> -->\n          <span\n            >{{localDate | date: 'dd/MM/yyyy'}}\n            <ion-icon name=\"clipboard\" item-left></ion-icon>\n          </span>\n          <!-- </span> -->\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label><b>Amount :</b> </ion-label>\n        <ion-label class=\"paymentamount\"\n          ><b>{{onlineamount | currency:'INR':true}}</b></ion-label\n        >\n      </ion-item>\n      <ion-item [(ngModel)]=\"twentyfivetransaction_id\" ngDefaultControl>\n        <ion-label class=\"paymenttransaction\"\n          ><b>Transaction Id:</b>\n        </ion-label>\n        <ion-input\n          class=\"textboox\"\n          type=\"text\"\n          placeholder=\"XXXXXXXXX\"\n          onfocus=\"this.placeholder = ''\"\n          onblur=\"this.placeholder = 'XXXXXXXXXX'\"\n        ></ion-input>\n      </ion-item>\n    </div>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"caseondelivery\">\n  <ion-toolbar>\n    <ion-button (click)=\"placeOrderforCod()\">\n      <b> PLACE ORDER </b>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<ion-footer *ngIf=\"paymentmodeltype\">\n  <ion-toolbar>\n    <ion-button (click)=\"placeOrders()\">\n      <b> PLACE ORDER </b>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/payment/payment-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentPageRoutingModule */

  /***/
  function srcAppPagesPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
      return PaymentPageRoutingModule;
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


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");

    var routes = [{
      path: '',
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
      _classCallCheck(this, PaymentPageRoutingModule);
    };

    PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.module.ts ***!
    \*************************************************/

  /*! exports provided: PaymentPageModule */

  /***/
  function srcAppPagesPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
      return PaymentPageModule;
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


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/pages/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");

    var PaymentPageModule = function PaymentPageModule() {
      _classCallCheck(this, PaymentPageModule);
    };

    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })], PaymentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".payment {\n  background-color: WhiteSmoke;\n}\n.payment ion-item {\n  background-color: WhiteSmoke;\n}\n.payment .text-color {\n  color: #387ef5;\n  font-size: 15px;\n  padding-top: 15px;\n}\n.payment .button1 {\n  text-transform: lowercase;\n  font-size: 13px;\n  float: right;\n}\n.payment .ion-card ion-item {\n  background-color: white;\n  height: 20px;\n}\n.payment ion-label {\n  color: black;\n  font-weight: normal;\n}\n.payment .ion-item ion-select {\n  text-align: center;\n}\n.payment .align-left {\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment ion-item ion-input {\n  text-align: right;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment .color1 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment .color2 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-bottom: -10px;\n  padding-top: -10px;\n}\n.paymentamount {\n  text-align: right;\n}\n.paymenttransaction {\n  padding-right: 80px;\n}\n.textboox {\n  margin-left: 20px;\n}\n.paymentcard {\n  height: 55px;\n  font-size: 14px;\n  font-weight: bold;\n}\n.paymentpageionlabel b {\n  color: black;\n  padding-right: 20%;\n}\n.paymenttransaction b {\n  color: black;\n}\n.addrespayment {\n  max-height: 105px;\n  margin-top: 20px;\n  background-color: lightgray;\n}\n.addrespayment ion-row {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURDSTtFQUNFLDRCQUFBO0FDQ047QURFSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREdJO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ROO0FESUk7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNGTjtBREtJO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDSE47QURLSTtFQUNFLGtCQUFBO0FDSE47QURNSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0pOO0FET0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNMTjtBRFFJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ05OO0FEU0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDUE47QURVRTtFQUNFLGlCQUFBO0FDUEo7QURTRTtFQUNFLG1CQUFBO0FDTko7QURRRTtFQUNFLGlCQUFBO0FDTEo7QURPRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE9FO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDSko7QURNRTtFQUNFLFlBQUE7QUNISjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDRko7QURJRTtFQUNFLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG4gIFxuICAgIGlvbi1pdGVtIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG4gICAgfVxuICBcbiAgICAudGV4dC1jb2xvciB7XG4gICAgICBjb2xvcjogIzM4N2VmNTtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgIH1cbiAgXG4gICAgLmJ1dHRvbjEge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIFxuICAgIC5pb24tY2FyZCBpb24taXRlbSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG4gIFxuICAgIGlvbi1sYWJlbCB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgICAuaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICBcbiAgICAuYWxpZ24tbGVmdCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbiAgICB9XG4gIFxuICAgIGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xuICAgIH1cbiAgXG4gICAgLmNvbG9yMSB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xuICAgIH1cbiAgXG4gICAgLmNvbG9yMiB7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xuICAgIH1cbiAgfVxuICAucGF5bWVudGFtb3VudCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLnBheW1lbnR0cmFuc2FjdGlvbiB7XG4gICAgcGFkZGluZy1yaWdodDogODBweDtcbiAgfVxuICAudGV4dGJvb3gge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG4gIC5wYXltZW50Y2FyZCB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnBheW1lbnRwYWdlaW9ubGFiZWwgYiB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcbiAgfVxuICAucGF5bWVudHRyYW5zYWN0aW9uIGIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICAuYWRkcmVzcGF5bWVudCB7XG4gICAgbWF4LWhlaWdodDogMTA1cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gIH1cbiAgLmFkZHJlc3BheW1lbnQgaW9uLXJvdyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAiLCIucGF5bWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4ucGF5bWVudCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4ucGF5bWVudCAudGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjMzg3ZWY1O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLnBheW1lbnQgLmJ1dHRvbjEge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wYXltZW50IC5pb24tY2FyZCBpb24taXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDIwcHg7XG59XG4ucGF5bWVudCBpb24tbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ucGF5bWVudCAuaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYXltZW50IC5hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbn1cbi5wYXltZW50IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbn1cbi5wYXltZW50IC5jb2xvcjEge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbn1cbi5wYXltZW50IC5jb2xvcjIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbn1cblxuLnBheW1lbnRhbW91bnQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnBheW1lbnR0cmFuc2FjdGlvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG59XG5cbi50ZXh0Ym9veCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ucGF5bWVudGNhcmQge1xuICBoZWlnaHQ6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXltZW50cGFnZWlvbmxhYmVsIGIge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctcmlnaHQ6IDIwJTtcbn1cblxuLnBheW1lbnR0cmFuc2FjdGlvbiBiIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYWRkcmVzcGF5bWVudCB7XG4gIG1heC1oZWlnaHQ6IDEwNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5hZGRyZXNwYXltZW50IGlvbi1yb3cge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/payment/payment.page.ts ***!
    \***********************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPagesPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
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


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // has errors at line number 194 ,370


    var PaymentPage =
    /*#__PURE__*/
    function () {
      // calendar = {
      //   mode: 'month',
      //   currentDate : new Date()
      // };
      function PaymentPage(navCtrl, productServices, users, platform, networkService, loadingCtrl, logger, iab, route, router) {
        _classCallCheck(this, PaymentPage);

        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.users = users;
        this.platform = platform;
        this.networkService = networkService;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.iab = iab;
        this.route = route;
        this.router = router;
        this.selectOptions = {
          title: "Select"
        };
        this.dataArray = [];
        this.allTotal = [];
        this.paymenttype = true;
        this.caseondelivery = false;
        this.paymentmodeltype = false;
        this.allowFutureDates = false;
        this.datetoday = new Date();
        this.localDate = new Date();
      }

      _createClass(PaymentPage, [{
        key: "closeDatepicker",
        value: function closeDatepicker() {// this.datepickerDirective.modal.dismiss();
        }
      }, {
        key: "codchange",
        value: function codchange() {
          var _this = this;

          this.paymentMethod = this.paymentMethods;

          if (_this.paymentMethods == "COD") {
            _this.caseondelivery = true;
            _this.paymentmodeltype = false;
            _this.paymenttype = true;
          } else {
            _this.caseondelivery = false;
            _this.paymentmodeltype = true;
            _this.paymenttype = false;
          }
        }
      }, {
        key: "onlinepay",
        value: function onlinepay() {
          var _this2 = this;

          this.paymentMethods == "Online Payment";
          var options = {
            description: "Online Payment",
            image: "http://kmartprod1298.cloudapp.net/ivipni/image/logo.png",
            currency: "INR",
            key: "rzp_test_ITL1czDoYxnnqj",
            amount: this.firstTermAmount,
            name: "Ivipani",
            prefill: {
              email: this.email,
              contact: this.telephone,
              name: this.firstname
            },
            theme: {
              color: "royal-blue"
            },
            modal: {
              ondismiss: function ondismiss() {
                alert("dismissed");
              }
            }
          };

          var successCallback = function successCallback(payment_id) {
            //alert('payment_id: ' + payment_id);
            var payDetailsObj = {
              dataArray: _this2.dataArray,
              email: _this2.email,
              totalamount: _this2.totalamount,
              firstTermAmount: _this2.totalamount,
              twentyfivetransaction_id: payment_id,
              date: _this2.localDate.toISOString(),
              telephone: _this2.telephone,
              address_id: _this2.address_id,
              customer_id: _this2.customer_id,
              firstname: _this2.firstname,
              lastname: _this2.lastname,
              company: _this2.company,
              address_1: _this2.address_1,
              address_2: _this2.address_2,
              city: _this2.city,
              postcode: _this2.postcode,
              zone_id: _this2.zone_id,
              name: _this2.name,
              cartTotal: _this2.cartTotal,
              coupon: _this2.coupon,
              paymentMethod: _this2.paymentMethods,
              totals: _this2.allTotal
            };
            var myThankYouObj;

            _this2.users.placeOrder(payDetailsObj, function (result, data) {
              if (result == "1") {
                myThankYouObj = {
                  pay: payDetailsObj,
                  data: data
                }; // this.navCtrl.setRoot(ThankYouPage, myThankYouObj);

                var navagationExtras = {
                  queryParams: {
                    data: JSON.stringify(myThankYouObj)
                  }
                };

                _this2.router.navigate(["/thank-you"], navagationExtras);
              } else {
                // this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                var _navagationExtras = {
                  queryParams: {
                    data: JSON.stringify(myThankYouObj)
                  }
                };

                _this2.router.navigate(["/thank-you"], _navagationExtras);
              }
            });
          };

          var cancelCallback = function cancelCallback(error) {
            alert(error.description + " (Error " + error.code + ")");
          };

          this.platform.ready().then(function () {
            RazorpayCheckout.open(options, successCallback, cancelCallback);
          });
        }
      }, {
        key: "change",
        value: function change() {
          var _this = this;

          this.paymentMethod = this.paymentMethods;

          if (_this.paymentMethods == "COD") {
            _this.caseondelivery = true;
            _this.paymentmodeltype = false;
            _this.paymenttype = true;
          } else {
            _this.caseondelivery = false;
            _this.paymentmodeltype = true;
            _this.paymenttype = true;
          }

          this.productServices.getBanks(function (data) {
            _this.logger.debug("checking Array" + JSON.stringify(data));

            _this.bankdata = data.data;
          });
        }
      }, {
        key: "placeOrderforCod",
        value: function placeOrderforCod() {
          var _this = this;

          _this.paymentMethods = "COD";
          var payDetailsObj2 = {
            totalamount: _this.totalamount,
            date: _this.localDate.toISOString(),
            address_id: _this.address_id,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal
          };
          var payDetailsObj = {
            totalamount: _this.totalamount,
            dataArray: _this.dataArray,
            email: _this.email,
            firstTermAmount: _this.totalamount,
            twentyfivetransaction_id: _this.twentyfivetransaction_id,
            date: _this.localDate.toISOString(),
            telephone: _this.telephone,
            address_id: _this.address_id,
            customer_id: _this.customer_id,
            firstname: _this.firstname,
            lastname: _this.lastname,
            company: _this.company,
            address_1: _this.address_1,
            address_2: _this.address_2,
            city: _this.city,
            postcode: _this.postcode,
            zone_id: _this.zone_id,
            name: _this.name,
            cartTotal: _this.cartTotal,
            coupon: _this.coupon,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal
          };

          var loading = _this.loadingCtrl.create({
            message: ""
          });

          _this.logger.debug("checking the myThankYouObj" + JSON.stringify(payDetailsObj2));

          var myThankYouObj;

          if (_this.paymentMethods == "COD") {
            // loading.present();
            this.users.CODplaceOrder(payDetailsObj2, function (result, data) {
              // console.log("result==>", result);
              // console.log("data==>", data);
              _this.logger.debug("data " + JSON.stringify(data));

              _this.logger.debug("parse data " + JSON.parse(data));

              if (result == "1") {
                myThankYouObj = {
                  pay: payDetailsObj,
                  data: data
                };

                _this.logger.debug("checking the myThankYouObj" + JSON.stringify(myThankYouObj)); // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);


                var navagationExtras = {
                  queryParams: {
                    data: JSON.stringify(myThankYouObj)
                  }
                };

                _this.router.navigate(["/thank-you"], navagationExtras); // loading.dismiss();

              } else {
                _this.networkService.showErrorAlert(); // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                // loading.dismiss();

              }
            });
          } else {
            // loading.dismiss();
            _this.networkService.showSuccessAlert("please select payment method");
          }
        }
      }, {
        key: "placeOrders",
        value: function placeOrders() {
          var _this = this;

          var payDetailsObj1 = {
            totalamount: _this.onlineamount,
            firstTermAmount: _this.onlineamount,
            twentyfivetransaction_id: _this.twentyfivetransaction_id,
            date: _this.localDate.toISOString(),
            address_id: _this.address_id,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal
          };
          var payDetailsObj = {
            dataArray: _this.dataArray,
            email: _this.email,
            totalamount: _this.onlineamount,
            firstTermAmount: _this.onlineamount,
            twentyfivetransaction_id: _this.twentyfivetransaction_id,
            date: _this.localDate.toISOString(),
            telephone: _this.telephone,
            address_id: _this.address_id,
            customer_id: _this.customer_id,
            firstname: _this.firstname,
            lastname: _this.lastname,
            company: _this.company,
            address_1: _this.address_1,
            address_2: _this.address_2,
            city: _this.city,
            postcode: _this.postcode,
            zone_id: _this.zone_id,
            name: _this.name,
            cartTotal: _this.cartTotal,
            coupon: _this.coupon,
            paymentMethod: _this.paymentMethods,
            totals: _this.allTotal
          };

          var loading = _this.loadingCtrl.create({
            message: ""
          });

          _this.logger.debug("paydetailsobj " + JSON.stringify(payDetailsObj1));

          _this.logger.debug("paymentmethods " + JSON.stringify(_this.paymentMethods));

          var myThankYouObj;

          if (_this.paymentMethods != "COD") {
            if (_this.twentyfivetransaction_id) {
              // loading.present();
              this.users.placeOrder(payDetailsObj1, function (result, data) {
                _this.logger.debug("data " + JSON.stringify(data));

                _this.logger.debug("parse data " + JSON.parse(data));

                if (result == "1") {
                  myThankYouObj = {
                    pay: payDetailsObj,
                    data: data
                  };

                  _this.logger.debug("checking the myThankYouObj" + JSON.stringify(myThankYouObj)); // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                  // loading.dismiss();

                } else {
                  _this.networkService.showErrorAlert(); // _this.navCtrl.setRoot(ThankYouPage, myThankYouObj);
                  // loading.dismiss();

                }
              });
            } else {
              // loading.dismiss();
              _this.networkService.showSuccessAlert("Please insert transaction id");
            }
          }
        }
      }, {
        key: "optionsFn",
        value: function optionsFn(event) {
          var browser = this.iab.create(event.bank_url, "_self", {
            location: "yes",
            closebuttoncaption: "Close"
          });
          browser.insertCSS({
            code: "{color: royal-blue;}"
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.queryParams.subscribe(function (param) {
            var orderDetails = JSON.parse(param["data"]);
            _this3.email = orderDetails.email;
            _this3.telephone = orderDetails.telephone;
            _this3.address_id = orderDetails.address_id;
            _this3.customer_id = orderDetails.customer_id;
            _this3.firstname = orderDetails.firstname;
            _this3.lastname = orderDetails.lastname;
            _this3.company = orderDetails.company;
            _this3.address_1 = orderDetails.address_1;
            _this3.address_2 = orderDetails.address_2;
            _this3.city = orderDetails.city;
            _this3.postcode = orderDetails.postcode;
            _this3.zone_id = orderDetails.zone_id;
            _this3.name = orderDetails.name;
            _this3.dataArray = orderDetails.dataArray;
            _this3.cartTotal = orderDetails.cartTotal;
            _this3.totalamount = (_this3.cartTotal + _this3.cartTotal * 2 / 100).toFixed(2);
            _this3.allTotal = orderDetails.allTotal;
            _this3.onlineamount = _this3.cartTotal.toFixed(2);
            _this3.firstTermAmount = Math.round((_this3.cartTotal + _this3.cartTotal * 2 / 100) * 100);
          });
        }
      }]);

      return PaymentPage;
    }();

    PaymentPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_7__["Products"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }, {
        type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-payment",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/pages/payment/payment.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_7__["Products"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_6__["InAppBrowser"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payment-payment-module-es5.js.map