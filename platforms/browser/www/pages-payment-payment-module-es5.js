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


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Payment Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <div *ngIf=\"paymenttype\">\r\n      <ion-list radio-group [(ngModel)]=\"paymentMethods\" ngDefaultControl>\r\n        <ion-item>\r\n          <ion-label>Online Payment <b>(₹{{totalamount}})</b>\r\n            <p><small>(Incl 2% extra)</small></p>\r\n          </ion-label>\r\n          <ion-radio value=\"Online Payment\" (click)=\"onlinepay()\"></ion-radio>\r\n        </ion-item>\r\n        <!-- <ion-item>\r\n          <ion-label>Bank Transfer <b>(₹{{onlineamount}})</b>\r\n            <p><small>(NEFT/RTGS/IMPS)</small></p>\r\n          </ion-label>\r\n          <ion-radio value=\"Bank Transfer\" (click)=\"change()\"></ion-radio>\r\n        </ion-item> -->\r\n\r\n        <ion-item>\r\n          <ion-label>COD <b>(₹{{totalamount}})</b>\r\n            <p><small>(Incl 2% extra)</small></p>\r\n          </ion-label>\r\n          <ion-radio value=\"COD\" (click)=\"placeOrderforCod()\"></ion-radio>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n  </ion-card>\r\n  <ion-card class=\"ion-card\" *ngIf=\"paymentmodeltype\">\r\n    <ion-item>\r\n      <ion-label color=\"primary\">Select Bank</ion-label>\r\n      <ion-select [interfaceOptions]=\"selectOptions\" (ionChange)=\"optionsFn($event);\">\r\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of bankdata\">\r\n          <span>{{item.bank_name}}</span>\r\n        </ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-card>\r\n  <ion-card class=\"ion-card\">\r\n    <div *ngIf=\"paymentmodeltype\">\r\n      <ion-item>\r\n        <ion-label>\r\n          <h2><b>Bank Transaction Details</b></h2>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label class=\"paymentpageionlabel\"><b>Date :</b> </ion-label>\r\n        <ion-label class=\"paymentamount\">\r\n          <!-- TODO please do fix it bug  -->\r\n          <!-- <span [(value)]=\"localDate\" [max]=\"datetoday\" clear class=\"ScheduleDate\"> -->\r\n          <span>{{localDate | date: 'dd/MM/yyyy'}}\r\n            <ion-icon name=\"clipboard\" item-left></ion-icon>\r\n          </span>\r\n          <!-- </span> -->\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label><b>Amount :</b> </ion-label>\r\n        <ion-label class=\"paymentamount\"><b>{{onlineamount | currency:'INR':true}}</b></ion-label>\r\n      </ion-item>\r\n      <ion-item [(ngModel)]=\"twentyfivetransaction_id\" ngDefaultControl>\r\n        <ion-label class=\"paymenttransaction\"><b>Transaction Id:</b>\r\n        </ion-label>\r\n        <ion-input class=\"textboox\" type=\"text\" placeholder=\"XXXXXXXXX\" onfocus=\"this.placeholder = ''\"\r\n          onblur=\"this.placeholder = 'XXXXXXXXXX'\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"caseondelivery\">\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"placeOrderforCod()\">\r\n      <b> PLACE ORDER </b>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<ion-footer *ngIf=\"paymentmodeltype\">\r\n  <ion-toolbar>\r\n    <ion-button (click)=\"placeOrders()\">\r\n      <b> PLACE ORDER </b>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>";
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


    __webpack_exports__["default"] = ".payment {\n  background-color: WhiteSmoke;\n}\n.payment ion-item {\n  background-color: WhiteSmoke;\n}\n.payment .text-color {\n  color: #387ef5;\n  font-size: 15px;\n  padding-top: 15px;\n}\n.payment .button1 {\n  text-transform: lowercase;\n  font-size: 13px;\n  float: right;\n}\n.payment .ion-card ion-item {\n  background-color: white;\n  height: 20px;\n}\n.payment ion-label {\n  color: black;\n  font-weight: normal;\n}\n.payment .ion-item ion-select {\n  text-align: center;\n}\n.payment .align-left {\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment ion-item ion-input {\n  text-align: right;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment .color1 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.payment .color2 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-bottom: -10px;\n  padding-top: -10px;\n}\n.paymentamount {\n  text-align: right;\n}\n.paymenttransaction {\n  padding-right: 80px;\n}\n.textboox {\n  margin-left: 20px;\n}\n.paymentcard {\n  height: 55px;\n  font-size: 14px;\n  font-weight: bold;\n}\n.paymentpageionlabel b {\n  color: black;\n  padding-right: 20%;\n}\n.paymenttransaction b {\n  color: black;\n}\n.addrespayment {\n  max-height: 105px;\n  margin-top: 20px;\n  background-color: lightgray;\n}\n.addrespayment ion-row {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9EOlxcU2VlbWFcXFByb2plY3RcXGl2aXBuaS9zcmNcXGFwcFxccGFnZXNcXHBheW1lbnRcXHBheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBRENJO0VBQ0UsNEJBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRE47QURJSTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNITjtBREtJO0VBQ0Usa0JBQUE7QUNITjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDSk47QURPSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0xOO0FEUUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNQTjtBRFVFO0VBQ0UsaUJBQUE7QUNQSjtBRFNFO0VBQ0UsbUJBQUE7QUNOSjtBRFFFO0VBQ0UsaUJBQUE7QUNMSjtBRE9FO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0pKO0FET0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE1FO0VBQ0UsWUFBQTtBQ0hKO0FES0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUNGSjtBRElFO0VBQ0UsZ0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGF5bWVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gIFxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRleHQtY29sb3Ige1xyXG4gICAgICBjb2xvcjogIzM4N2VmNTtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5idXR0b24xIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW9uLWNhcmQgaW9uLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmlvbi1pdGVtIGlvbi1zZWxlY3Qge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSBpb24taW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sb3IxIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sb3IyIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogLTEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wYXltZW50YW1vdW50IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICAucGF5bWVudHRyYW5zYWN0aW9uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC50ZXh0Ym9veCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcbiAgLnBheW1lbnRjYXJkIHtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAucGF5bWVudHBhZ2Vpb25sYWJlbCBiIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICB9XHJcbiAgLnBheW1lbnR0cmFuc2FjdGlvbiBiIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLmFkZHJlc3BheW1lbnQge1xyXG4gICAgbWF4LWhlaWdodDogMTA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIH1cclxuICAuYWRkcmVzcGF5bWVudCBpb24tcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gICIsIi5wYXltZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5wYXltZW50IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5wYXltZW50IC50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMzODdlZjU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ucGF5bWVudCAuYnV0dG9uMSB7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnBheW1lbnQgLmlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMjBweDtcbn1cbi5wYXltZW50IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5wYXltZW50IC5pb24taXRlbSBpb24tc2VsZWN0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBheW1lbnQgLmFsaWduLWxlZnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnQgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnQgLmNvbG9yMSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnQgLmNvbG9yMiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAtMTBweDtcbiAgcGFkZGluZy10b3A6IC0xMHB4O1xufVxuXG4ucGF5bWVudGFtb3VudCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucGF5bWVudHRyYW5zYWN0aW9uIHtcbiAgcGFkZGluZy1yaWdodDogODBweDtcbn1cblxuLnRleHRib294IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5wYXltZW50Y2FyZCB7XG4gIGhlaWdodDogNTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBheW1lbnRwYWdlaW9ubGFiZWwgYiB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZy1yaWdodDogMjAlO1xufVxuXG4ucGF5bWVudHRyYW5zYWN0aW9uIGIge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hZGRyZXNwYXltZW50IHtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmFkZHJlc3BheW1lbnQgaW9uLXJvdyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */";
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