(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paythank-you-paythank-you-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header>\r\n  <ion-nav color=\"primary\">\r\n      <ion-title>Payment Received</ion-title>\r\n  </ion-nav>\r\n</ion-header>\r\n\r\n<ion-content class=\"thank-you\">\r\n  <div *ngIf=\"orderSuccess\">\r\n      <ion-item no-lines>\r\n          <ion-row>\r\n              <ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\" class=\"success\"></ion-icon>\r\n          </ion-row>\r\n          <ion-row no-lines class=\"ion-item1\">\r\n              <p class=\"success_text\">Payment Successful! </p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-item2\">\r\n              <p class=\"order_text\">Thank you.Your Payment has been updated. </p>\r\n          </ion-row>\r\n      </ion-item>\r\n  </div>\r\n\r\n  <div *ngIf=\"orderFailure\">\r\n      <ion-item>\r\n          <ion-row>\r\n              <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" class=\"failure\"></ion-icon>\r\n          </ion-row>\r\n\r\n          <ion-row no-lines class=\"ion-item1\">\r\n              <p class=\"success_text\">Order Failed! </p>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"ion-item2\">\r\n              <p class=\"order_text\">Oops! Failed to place your Payment. </p>\r\n          </ion-row>\r\n      </ion-item>\r\n  </div>\r\n\r\n  <ion-item class=\"ion-item\" no-lines>\r\n      <ion-row *ngIf=\"orderSuccess\">\r\n          <ion-col>Order number</ion-col>\r\n          <br>\r\n          <ion-col>{{order_id}}</ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n          <ion-col>Date</ion-col>\r\n          <br>\r\n          <ion-col>{{date | date:'dd-MM-yyyy'}}</ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n          <ion-col>Total</ion-col>\r\n          <br>\r\n          <ion-col>{{seventyfiveamount | currency:'INR':true}}</ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n          <ion-col>Payment method</ion-col>\r\n          <br>\r\n          <ion-col>{{paymentMethod}}</ion-col>\r\n      </ion-row>\r\n  </ion-item>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n      <div *ngIf=\"orderSuccess\">\r\n          <button color=\"primary\" ion-button (click)=\"submit();\" block> Home </button>\r\n      </div>\r\n      <div *ngIf=\"orderFailure\">\r\n          <button color=\"primary\" ion-button block outline (click)=\"notSubmit()\">MoveToCart</button>\r\n      </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/paythank-you/paythank-you-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/paythank-you/paythank-you-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaythankYouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaythankYouPageRoutingModule", function() { return PaythankYouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paythank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paythank-you.page */ "./src/app/pages/paythank-you/paythank-you.page.ts");




const routes = [
    {
        path: '',
        component: _paythank_you_page__WEBPACK_IMPORTED_MODULE_3__["PaythankYouPage"]
    }
];
let PaythankYouPageRoutingModule = class PaythankYouPageRoutingModule {
};
PaythankYouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaythankYouPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/paythank-you/paythank-you.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/paythank-you/paythank-you.module.ts ***!
  \***********************************************************/
/*! exports provided: PaythankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaythankYouPageModule", function() { return PaythankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _paythank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paythank-you-routing.module */ "./src/app/pages/paythank-you/paythank-you-routing.module.ts");
/* harmony import */ var _paythank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paythank-you.page */ "./src/app/pages/paythank-you/paythank-you.page.ts");







let PaythankYouPageModule = class PaythankYouPageModule {
};
PaythankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paythank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaythankYouPageRoutingModule"]
        ],
        declarations: [_paythank_you_page__WEBPACK_IMPORTED_MODULE_6__["PaythankYouPage"]]
    })
], PaythankYouPageModule);



/***/ }),

/***/ "./src/app/pages/paythank-you/paythank-you.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/paythank-you/paythank-you.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thank-you {\n  background-color: WhiteSmoke;\n}\n.thank-you .success {\n  color: green;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you p.success_text {\n  margin: auto;\n}\n.thank-you p.order_text {\n  margin: auto;\n}\n.thank-you .failure {\n  color: red;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you .ion-item1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.thank-you .ion-item2 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.thank-you .ion-item ion-col {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  border: 1px solid black;\n  padding: 1px 0 0px 0;\n  margin: 0.8px;\n  text-indent: 5px;\n  background-color: WhiteSmoke;\n}\n.thank-you .header {\n  font-size: 15px;\n  font-weight: bold;\n  color: #387ef5;\n  padding-bottom: 15px;\n}\n.thank-you .background {\n  padding-top: 10px;\n}\n.thank-you .deliver-details {\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .deliver-details_2 {\n  margin-top: -20px;\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .contact_details_place {\n  padding-top: 5px;\n}\n.thank-you .contact-mail {\n  font-weight: normal;\n  font-size: 13px;\n  margin-top: -10px !important;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5dGhhbmsteW91L0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xccGF5dGhhbmsteW91XFxwYXl0aGFuay15b3UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXl0aGFuay15b3UvcGF5dGhhbmsteW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VOO0FEQUk7RUFDRSxZQUFBO0FDRU47QURBSTtFQUNFLFlBQUE7QUNFTjtBRENJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FESUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNGTjtBRE1JO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNKTjtBRE9JO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDTE47QURnQkk7RUFFRSxpQkFBQTtBQ2ZOO0FEMEJJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDeEJOO0FEZ0NJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUM5Qk47QURvQ0k7RUFDRSxnQkFBQTtBQ2xDTjtBRHFDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNuQ04iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXl0aGFuay15b3UvcGF5dGhhbmsteW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFuay15b3Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuICAgIC5zdWNjZXNzIHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gICAgcC5zdWNjZXNzX3RleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBwLm9yZGVyX3RleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZmFpbHVyZSB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW9uLWl0ZW0xIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgLy9tYXJnaW4tdG9wOiAtMTFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1pdGVtMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgLy9tYXJnaW4tdG9wOiAtMTFweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1pdGVtIGlvbi1jb2wge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gICAgICAtbXMtZmxleDogMTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAwIDBweCAwO1xyXG4gICAgICBtYXJnaW46IDAuOHB4O1xyXG4gICAgICB0ZXh0LWluZGVudDogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC8vICBkaXYgaW9uLXJvdyAge1xyXG4gICAgLy8gXHRoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICBcclxuICAgIC8vIC50aXRsZSB7XHJcbiAgICAvLyBcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAvL2JhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gLnRleHQtcmlnaHQge1xyXG4gICAgLy8gXHR0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC8vIH1cclxuICBcclxuICAgIC8vIC5jb2xvciB7XHJcbiAgICAvLyBcdGNvbG9yOiBncmVlbjtcclxuICAgIC8vIH1cclxuICBcclxuICAgIC5kZWxpdmVyLWRldGFpbHMge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIC8vIGlvbi1pY29ue1xyXG4gICAgICAvLyBcdGNvbG9yOmJsdWU7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gLmNvbnRhY3R7XHJcbiAgICAgIC8vIFx0cGFkZGluZy10b3A6MTBweFxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAuZGVsaXZlci1kZXRhaWxzXzIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAvLyBpb24taWNvbntcclxuICAgICAgLy8gXHRjb2xvcjpibHVlO1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29udGFjdF9kZXRhaWxzX3BsYWNlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWN0LW1haWwge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gLmlvbi1sYWJlbCB7XHJcbiAgLy8gXHRwYWRkaW5nLXRvcDogMTBweDtcclxuICAvLyB9XHJcbiAgIiwiLnRoYW5rLXlvdSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4udGhhbmsteW91IC5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRoYW5rLXlvdSBwLnN1Y2Nlc3NfdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aGFuay15b3UgcC5vcmRlcl90ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRoYW5rLXlvdSAuZmFpbHVyZSB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGhhbmsteW91IC5pb24taXRlbTEge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnRoYW5rLXlvdSAuaW9uLWl0ZW0yIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnRoYW5rLXlvdSAuaW9uLWl0ZW0gaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMXB4IDAgMHB4IDA7XG4gIG1hcmdpbjogMC44cHg7XG4gIHRleHQtaW5kZW50OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4udGhhbmsteW91IC5oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4N2VmNTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udGhhbmsteW91IC5iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHNfMiB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC5jb250YWN0X2RldGFpbHNfcGxhY2Uge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRoYW5rLXlvdSAuY29udGFjdC1tYWlsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/paythank-you/paythank-you.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/paythank-you/paythank-you.page.ts ***!
  \*********************************************************/
/*! exports provided: PaythankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaythankYouPage", function() { return PaythankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

// all clear


let PaythankYouPage = class PaythankYouPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.orderSuccess = false;
        this.orderFailure = false;
        // var _this = this;
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
    submit() {
        // this.navCtrl.setRoot(HomePage, {});
    }
    notSubmit() {
        // this.navCtrl.push(PaymentPage, {});
    }
    ngOnInit() { }
};
PaythankYouPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PaythankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-paythank-you",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paythank-you.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paythank-you.page.scss */ "./src/app/pages/paythank-you/paythank-you.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PaythankYouPage);



/***/ })

}]);
//# sourceMappingURL=pages-paythank-you-paythank-you-module-es2015.js.map