function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paythank-you-paythank-you-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaythankYouPaythankYouPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-header>\n  <ion-nav color=\"primary\">\n      <ion-title>Payment Received</ion-title>\n  </ion-nav>\n</ion-header>\n\n<ion-content class=\"thank-you\">\n  <div *ngIf=\"orderSuccess\">\n      <ion-item no-lines>\n          <ion-row>\n              <ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\" class=\"success\"></ion-icon>\n          </ion-row>\n          <ion-row no-lines class=\"ion-item1\">\n              <p class=\"success_text\">Payment Successful! </p>\n          </ion-row>\n\n          <ion-row class=\"ion-item2\">\n              <p class=\"order_text\">Thank you.Your Payment has been updated. </p>\n          </ion-row>\n      </ion-item>\n  </div>\n\n  <div *ngIf=\"orderFailure\">\n      <ion-item>\n          <ion-row>\n              <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" class=\"failure\"></ion-icon>\n          </ion-row>\n\n          <ion-row no-lines class=\"ion-item1\">\n              <p class=\"success_text\">Order Failed! </p>\n          </ion-row>\n\n          <ion-row class=\"ion-item2\">\n              <p class=\"order_text\">Oops! Failed to place your Payment. </p>\n          </ion-row>\n      </ion-item>\n  </div>\n\n  <ion-item class=\"ion-item\" no-lines>\n      <ion-row *ngIf=\"orderSuccess\">\n          <ion-col>Order number</ion-col>\n          <br>\n          <ion-col>{{order_id}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>Date</ion-col>\n          <br>\n          <ion-col>{{date | date:'dd-MM-yyyy'}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>Total</ion-col>\n          <br>\n          <ion-col>{{seventyfiveamount | currency:'INR':true}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>Payment method</ion-col>\n          <br>\n          <ion-col>{{paymentMethod}}</ion-col>\n      </ion-row>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <div *ngIf=\"orderSuccess\">\n          <button color=\"primary\" ion-button (click)=\"submit();\" block> Home </button>\n      </div>\n      <div *ngIf=\"orderFailure\">\n          <button color=\"primary\" ion-button block outline (click)=\"notSubmit()\">MoveToCart</button>\n      </div>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/paythank-you/paythank-you-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/paythank-you/paythank-you-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PaythankYouPageRoutingModule */

  /***/
  function srcAppPagesPaythankYouPaythankYouRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaythankYouPageRoutingModule", function () {
      return PaythankYouPageRoutingModule;
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


    var _paythank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paythank-you.page */
    "./src/app/pages/paythank-you/paythank-you.page.ts");

    var routes = [{
      path: '',
      component: _paythank_you_page__WEBPACK_IMPORTED_MODULE_3__["PaythankYouPage"]
    }];

    var PaythankYouPageRoutingModule = function PaythankYouPageRoutingModule() {
      _classCallCheck(this, PaythankYouPageRoutingModule);
    };

    PaythankYouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaythankYouPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/paythank-you/paythank-you.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/paythank-you/paythank-you.module.ts ***!
    \***********************************************************/

  /*! exports provided: PaythankYouPageModule */

  /***/
  function srcAppPagesPaythankYouPaythankYouModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaythankYouPageModule", function () {
      return PaythankYouPageModule;
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


    var _paythank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./paythank-you-routing.module */
    "./src/app/pages/paythank-you/paythank-you-routing.module.ts");
    /* harmony import */


    var _paythank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./paythank-you.page */
    "./src/app/pages/paythank-you/paythank-you.page.ts");

    var PaythankYouPageModule = function PaythankYouPageModule() {
      _classCallCheck(this, PaythankYouPageModule);
    };

    PaythankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _paythank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaythankYouPageRoutingModule"]],
      declarations: [_paythank_you_page__WEBPACK_IMPORTED_MODULE_6__["PaythankYouPage"]]
    })], PaythankYouPageModule);
    /***/
  },

  /***/
  "./src/app/pages/paythank-you/paythank-you.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/paythank-you/paythank-you.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaythankYouPaythankYouPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".thank-you {\n  background-color: WhiteSmoke;\n}\n.thank-you .success {\n  color: green;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you p.success_text {\n  margin: auto;\n}\n.thank-you p.order_text {\n  margin: auto;\n}\n.thank-you .failure {\n  color: red;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you .ion-item1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.thank-you .ion-item2 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.thank-you .ion-item ion-col {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  border: 1px solid black;\n  padding: 1px 0 0px 0;\n  margin: 0.8px;\n  text-indent: 5px;\n  background-color: WhiteSmoke;\n}\n.thank-you .header {\n  font-size: 15px;\n  font-weight: bold;\n  color: #387ef5;\n  padding-bottom: 15px;\n}\n.thank-you .background {\n  padding-top: 10px;\n}\n.thank-you .deliver-details {\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .deliver-details_2 {\n  margin-top: -20px;\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .contact_details_place {\n  padding-top: 5px;\n}\n.thank-you .contact-mail {\n  font-weight: normal;\n  font-size: 13px;\n  margin-top: -10px !important;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcGF5dGhhbmsteW91L3BheXRoYW5rLXlvdS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheXRoYW5rLXlvdS9wYXl0aGFuay15b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRU47QURBSTtFQUNFLFlBQUE7QUNFTjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDTjtBREVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURJSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FETUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0pOO0FET0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNMTjtBRGdCSTtFQUVFLGlCQUFBO0FDZk47QUQwQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUN4Qk47QURnQ0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQzlCTjtBRG9DSTtFQUNFLGdCQUFBO0FDbENOO0FEcUNJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ25DTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheXRoYW5rLXlvdS9wYXl0aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoYW5rLXlvdSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgICAuc3VjY2VzcyB7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgcC5zdWNjZXNzX3RleHQge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICBwLm9yZGVyX3RleHQge1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgXG4gICAgLmZhaWx1cmUge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgXG4gICAgLmlvbi1pdGVtMSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIC8vbWFyZ2luLXRvcDogLTExcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5pb24taXRlbTIge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIC8vbWFyZ2luLXRvcDogLTExcHggIWltcG9ydGFudDtcbiAgICB9XG4gIFxuICAgIC5pb24taXRlbSBpb24tY29sIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBwYWRkaW5nOiAxcHggMCAwcHggMDtcbiAgICAgIG1hcmdpbjogMC44cHg7XG4gICAgICB0ZXh0LWluZGVudDogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgICB9XG4gIFxuICAgIC5oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzM4N2VmNTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgXG4gICAgLy8gIGRpdiBpb24tcm93ICB7XG4gICAgLy8gXHRoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAvLyB9XG4gIFxuICAgIC8vIC50aXRsZSB7XG4gICAgLy8gXHRmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyB9XG4gIFxuICAgIC5iYWNrZ3JvdW5kIHtcbiAgICAgIC8vYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgXG4gICAgLy8gLnRleHQtcmlnaHQge1xuICAgIC8vIFx0dGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgLy8gfVxuICBcbiAgICAvLyAuY29sb3Ige1xuICAgIC8vIFx0Y29sb3I6IGdyZWVuO1xuICAgIC8vIH1cbiAgXG4gICAgLmRlbGl2ZXItZGV0YWlscyB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLy8gaW9uLWljb257XG4gICAgICAvLyBcdGNvbG9yOmJsdWU7XG4gICAgICAvLyB9XG4gICAgICAvLyAuY29udGFjdHtcbiAgICAgIC8vIFx0cGFkZGluZy10b3A6MTBweFxuICAgICAgLy8gfVxuICAgIH1cbiAgICAuZGVsaXZlci1kZXRhaWxzXzIge1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLy8gaW9uLWljb257XG4gICAgICAvLyBcdGNvbG9yOmJsdWU7XG4gICAgICAvLyB9XG4gICAgfVxuICBcbiAgICAuY29udGFjdF9kZXRhaWxzX3BsYWNlIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgfVxuICBcbiAgICAuY29udGFjdC1tYWlsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLy8gLmlvbi1sYWJlbCB7XG4gIC8vIFx0cGFkZGluZy10b3A6IDEwcHg7XG4gIC8vIH1cbiAgIiwiLnRoYW5rLXlvdSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4udGhhbmsteW91IC5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRoYW5rLXlvdSBwLnN1Y2Nlc3NfdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aGFuay15b3UgcC5vcmRlcl90ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRoYW5rLXlvdSAuZmFpbHVyZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGhhbmsteW91IC5pb24taXRlbTEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRoYW5rLXlvdSAuaW9uLWl0ZW0yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnRoYW5rLXlvdSAuaW9uLWl0ZW0gaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMXB4IDAgMHB4IDA7XG4gIG1hcmdpbjogMC44cHg7XG4gIHRleHQtaW5kZW50OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4udGhhbmsteW91IC5oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4N2VmNTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udGhhbmsteW91IC5iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHNfMiB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC5jb250YWN0X2RldGFpbHNfcGxhY2Uge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRoYW5rLXlvdSAuY29udGFjdC1tYWlsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/paythank-you/paythank-you.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/paythank-you/paythank-you.page.ts ***!
    \*********************************************************/

  /*! exports provided: PaythankYouPage */

  /***/
  function srcAppPagesPaythankYouPaythankYouPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaythankYouPage", function () {
      return PaythankYouPage;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // all clear


    var PaythankYouPage =
    /*#__PURE__*/
    function () {
      function PaythankYouPage(navCtrl) {
        _classCallCheck(this, PaythankYouPage);

        this.navCtrl = navCtrl;
        this.orderSuccess = false;
        this.orderFailure = false; // var _this = this;
        // _this.pay = _this.navParams.get("pay");
        // _this.data = _this.navParams.get("data");
        // var _dataObj = JSON.parse(_this.data);
        // _this.date = new Date();
        // _this.order_id = _this.pay.order_id;
        // _this.paymentMethod = _this.pay.seventyfive_payment_method;
        // _this.seventyfiveamount = _this.pay.seventyfiveamount;
        // if (_dataObj.order_id) {
        //   _this.orderSuccess = true;
        // } else {
        //   _this.orderFailure = true;
        // }
      }

      _createClass(PaythankYouPage, [{
        key: "submit",
        value: function submit() {// this.navCtrl.setRoot(HomePage, {});
        }
      }, {
        key: "notSubmit",
        value: function notSubmit() {// this.navCtrl.push(PaymentPage, {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaythankYouPage;
    }();

    PaythankYouPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    PaythankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-paythank-you",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paythank-you.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paythank-you.page.scss */
      "./src/app/pages/paythank-you/paythank-you.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PaythankYouPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-paythank-you-paythank-you-module-es5.js.map