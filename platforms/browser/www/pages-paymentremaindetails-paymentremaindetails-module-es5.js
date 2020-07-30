function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paymentremaindetails-paymentremaindetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentremaindetails/paymentremaindetails.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentremaindetails/paymentremaindetails.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentremaindetailsPaymentremaindetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<ion-header>\r\n  <ion-nav color=\"primary\">\r\n      <ion-title>Payment Details</ion-title>\r\n  </ion-nav>\r\n</ion-header>\r\n\r\n<ion-content class=\"payment\">\r\n  <ion-card class=\"ion-card\">\r\n      <ion-item>\r\n          <ion-label><b class=\"date\">Payment Type</b>\r\n          </ion-label>\r\n          <ion-select [(ngModel)]=\"seventyfive_payment_method\">\r\n              <ion-select-option>NEFT</ion-select-option>\r\n              <ion-select-option>UPI</ion-select-option>\r\n              <ion-select-option>IMPS</ion-select-option>\r\n              <ion-select-option>RTGS</ion-select-option>\r\n          </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label><b class=\"date\">Date</b>\r\n          </ion-label>\r\n           <ion-label class=\"optionselectpay\"><span [(value)]=\"localDate\" [max]=\"datetoday\"  clear class=\"ScheduleDate\">\r\n  <span>{{localDate | date: 'dd/MM/yyyy'}} <ion-icon name=\"clipboard\" item-left ></ion-icon> </span>\r\n</span></ion-label>\r\n          <!--<ion-datetime displayFormat=\"DD/MM/YYYY\"  [(ngModel)]=\"datetoday\"></ion-datetime>-->\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label><b>Amount Paid</b>\r\n          </ion-label>\r\n          <ion-label class=\"optionselectpay\"><b>{{twentyfiveamount | currency:'INR':true}}</b>\r\n          </ion-label>\r\n      </ion-item>\r\n      <ion-item [(ngModel)]=\"seventyfivetransaction_id\">\r\n          <ion-label class=\"transactionid\"><b class=\"date\">Transaction Id</b>\r\n          </ion-label>\r\n          <ion-input class=\"transactionpay\" type=\"text\" placeholder=\"XXXXXXXXX\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label><b>Amount Due</b>\r\n          </ion-label>\r\n          <ion-label class=\"optionselectpay\"><b>{{seventyfiveamount | currency:'INR':true}}</b>\r\n          </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n          <ion-label>\r\n              <b> Total</b>\r\n          </ion-label>\r\n          <ion-label class=\"optionselectpay\">\r\n              <b> {{total |  currency:'INR':true}}</b>\r\n          </ion-label>\r\n      </ion-item>\r\n  </ion-card>\r\n\r\n  <ion-card class=\"cardtotal\">\r\n      <div>\r\n      </div>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n      <button ion-button full (click)=\"placeOrders()\"> Save </button>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/paymentremaindetails/paymentremaindetails-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/paymentremaindetails/paymentremaindetails-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PaymentremaindetailsPageRoutingModule */

  /***/
  function srcAppPagesPaymentremaindetailsPaymentremaindetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentremaindetailsPageRoutingModule", function () {
      return PaymentremaindetailsPageRoutingModule;
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


    var _paymentremaindetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paymentremaindetails.page */
    "./src/app/pages/paymentremaindetails/paymentremaindetails.page.ts");

    var routes = [{
      path: '',
      component: _paymentremaindetails_page__WEBPACK_IMPORTED_MODULE_3__["PaymentremaindetailsPage"]
    }];

    var PaymentremaindetailsPageRoutingModule = function PaymentremaindetailsPageRoutingModule() {
      _classCallCheck(this, PaymentremaindetailsPageRoutingModule);
    };

    PaymentremaindetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentremaindetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/paymentremaindetails/paymentremaindetails.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/paymentremaindetails/paymentremaindetails.module.ts ***!
    \***************************************************************************/

  /*! exports provided: PaymentremaindetailsPageModule */

  /***/
  function srcAppPagesPaymentremaindetailsPaymentremaindetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentremaindetailsPageModule", function () {
      return PaymentremaindetailsPageModule;
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


    var _paymentremaindetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./paymentremaindetails-routing.module */
    "./src/app/pages/paymentremaindetails/paymentremaindetails-routing.module.ts");
    /* harmony import */


    var _paymentremaindetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./paymentremaindetails.page */
    "./src/app/pages/paymentremaindetails/paymentremaindetails.page.ts");

    var PaymentremaindetailsPageModule = function PaymentremaindetailsPageModule() {
      _classCallCheck(this, PaymentremaindetailsPageModule);
    };

    PaymentremaindetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paymentremaindetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentremaindetailsPageRoutingModule"]],
      declarations: [_paymentremaindetails_page__WEBPACK_IMPORTED_MODULE_6__["PaymentremaindetailsPage"]]
    })], PaymentremaindetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/paymentremaindetails/paymentremaindetails.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/paymentremaindetails/paymentremaindetails.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentremaindetailsPaymentremaindetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".paymentremaindetails {\n  background-color: WhiteSmoke;\n}\n.paymentremaindetails ion-item {\n  background-color: WhiteSmoke;\n}\n.paymentremaindetails .text-color {\n  color: #387ef5;\n  font-size: 15px;\n  padding-top: 15px;\n}\n.paymentremaindetails .button1 {\n  text-transform: lowercase;\n  font-size: 13px;\n  float: right;\n}\n.paymentremaindetails .ion-card ion-item {\n  background-color: white;\n  height: 20px;\n}\n.paymentremaindetails .align-left {\n  text-align: left;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.paymentremaindetails .align-right {\n  text-align: right;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.paymentremaindetails .color1 {\n  text-align: left;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-top: -10px;\n  padding-bottom: -10px;\n}\n.paymentremaindetails .color2 {\n  text-align: right;\n  color: green;\n  font-size: 14px;\n  font-weight: bold;\n  padding-bottom: -10px;\n  padding-top: -10px;\n}\n.paymentremaindetails .cardtotal {\n  font-size: 20px;\n  font-weight: bold;\n}\n.optionselectpay {\n  text-align: right;\n}\n.transactionid {\n  padding-right: 80px;\n  color: black;\n}\n.transactionpay {\n  margin-left: 40px;\n}\n.date {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudHJlbWFpbmRldGFpbHMvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50cmVtYWluZGV0YWlsc1xccGF5bWVudHJlbWFpbmRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50cmVtYWluZGV0YWlscy9wYXltZW50cmVtYWluZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSw0QkFBQTtBQ0NOO0FERUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURHSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNETjtBRElJO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDRk47QURLSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0hOO0FETUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNKTjtBRE9JO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0xOO0FEUUk7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDTk47QURTSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1BOO0FEVUU7RUFDRSxpQkFBQTtBQ1BKO0FEU0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNOSjtBRFFFO0VBQ0UsaUJBQUE7QUNMSjtBRE9FO0VBQ0UsWUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudHJlbWFpbmRldGFpbHMvcGF5bWVudHJlbWFpbmRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnRyZW1haW5kZXRhaWxzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGV4dC1jb2xvciB7XHJcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ1dHRvbjEge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24tY2FyZCBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWxpZ24tbGVmdCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAtMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFsaWduLXJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAtMTBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbG9yMSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy10b3A6IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sb3IyIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogLTEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZHRvdGFsIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbiAgLm9wdGlvbnNlbGVjdHBheSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgLnRyYW5zYWN0aW9uaWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgLnRyYW5zYWN0aW9ucGF5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIH1cclxuICAuZGF0ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gICIsIi5wYXltZW50cmVtYWluZGV0YWlscyB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4ucGF5bWVudHJlbWFpbmRldGFpbHMgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnBheW1lbnRyZW1haW5kZXRhaWxzIC50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMzODdlZjU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4ucGF5bWVudHJlbWFpbmRldGFpbHMgLmJ1dHRvbjEge1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wYXltZW50cmVtYWluZGV0YWlscyAuaW9uLWNhcmQgaW9uLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuLnBheW1lbnRyZW1haW5kZXRhaWxzIC5hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IC0xMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG59XG4ucGF5bWVudHJlbWFpbmRldGFpbHMgLmFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnRyZW1haW5kZXRhaWxzIC5jb2xvcjEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbiAgcGFkZGluZy1ib3R0b206IC0xMHB4O1xufVxuLnBheW1lbnRyZW1haW5kZXRhaWxzIC5jb2xvcjIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogLTEwcHg7XG4gIHBhZGRpbmctdG9wOiAtMTBweDtcbn1cbi5wYXltZW50cmVtYWluZGV0YWlscyAuY2FyZHRvdGFsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9wdGlvbnNlbGVjdHBheSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udHJhbnNhY3Rpb25pZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRyYW5zYWN0aW9ucGF5IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5kYXRlIHtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/paymentremaindetails/paymentremaindetails.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/paymentremaindetails/paymentremaindetails.page.ts ***!
    \*************************************************************************/

  /*! exports provided: PaymentremaindetailsPage */

  /***/
  function srcAppPagesPaymentremaindetailsPaymentremaindetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentremaindetailsPage", function () {
      return PaymentremaindetailsPage;
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
    "./src/providers/logger/logger.ts"); // all clear


    var PaymentremaindetailsPage =
    /*#__PURE__*/
    function () {
      function PaymentremaindetailsPage(navCtrl, users, networkService, logger) {
        _classCallCheck(this, PaymentremaindetailsPage);

        this.navCtrl = navCtrl;
        this.users = users;
        this.networkService = networkService;
        this.logger = logger;
        this.dataArray = []; // this.order_id = this.navParams.get("order_id");
        // this.total = this.navParams.get("amount");
        // this.twentyfiveamount = this.navParams.get("twentyfiveamount");

        this.seventyfiveamount = this.total - this.twentyfiveamount;
        this.datetoday = new Date();
        this.localDate = new Date();
      }

      _createClass(PaymentremaindetailsPage, [{
        key: "closeDatepicker",
        value: function closeDatepicker() {// this.datepickerDirective.modal.dismiss();
        }
      }, {
        key: "placeOrders",
        value: function placeOrders() {
          var _this = this;

          var payDetailsObj = {
            order_id: _this.order_id,
            seventyfiveamount: _this.seventyfiveamount,
            seventyfivetransaction_id: _this.seventyfivetransaction_id,
            date: _this.localDate.toISOString(),
            seventyfive_payment_method: this.seventyfive_payment_method
          };

          _this.logger.debug("paydetailsobj " + JSON.stringify(payDetailsObj));

          _this.logger.debug("paymentmethods " + _this.seventyfive_payment_method);

          var myThankYouObj;

          if (_this.seventyfive_payment_method) {
            if (_this.seventyfivetransaction_id) {
              this.users.SeventyfiveplaceOrder(payDetailsObj, function (result, data) {
                _this.logger.debug("data " + JSON.stringify(data));

                _this.logger.debug("parse data " + JSON.stringify(data));

                if (result == "1") {
                  myThankYouObj = {
                    pay: payDetailsObj,
                    data: data
                  };

                  _this.logger.debug("checking the myThankYouObj" + JSON.stringify(myThankYouObj)); // _this.navCtrl.setRoot(PaythankYouPage, myThankYouObj);

                } else {
                  _this.networkService.showErrorAlert(); // _this.navCtrl.setRoot(PaythankYouPage, myThankYouObj);

                }
              });
            } else {
              _this.networkService.showSuccessAlert("please enter transaction id");
            }
          } else {
            _this.networkService.showSuccessAlert("please select payment method");
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentremaindetailsPage;
    }();

    PaymentremaindetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }];
    };

    PaymentremaindetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-paymentremaindetails",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paymentremaindetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentremaindetails/paymentremaindetails.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paymentremaindetails.page.scss */
      "./src/app/pages/paymentremaindetails/paymentremaindetails.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]])], PaymentremaindetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-paymentremaindetails-paymentremaindetails-module-es5.js.map