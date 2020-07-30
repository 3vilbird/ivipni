(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paythank-you-paythank-you-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paythank-you/paythank-you.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-nav color=\"primary\">\n      <ion-title>Payment Received</ion-title>\n  </ion-nav>\n</ion-header>\n\n<ion-content class=\"thank-you\">\n  <div *ngIf=\"orderSuccess\">\n      <ion-item no-lines>\n          <ion-row>\n              <ion-icon ios=\"ios-checkmark-circle\" md=\"md-checkmark-circle\" class=\"success\"></ion-icon>\n          </ion-row>\n          <ion-row no-lines class=\"ion-item1\">\n              <p class=\"success_text\">Payment Successful! </p>\n          </ion-row>\n\n          <ion-row class=\"ion-item2\">\n              <p class=\"order_text\">Thank you.Your Payment has been updated. </p>\n          </ion-row>\n      </ion-item>\n  </div>\n\n  <div *ngIf=\"orderFailure\">\n      <ion-item>\n          <ion-row>\n              <ion-icon ios=\"ios-close-circle\" md=\"md-close-circle\" class=\"failure\"></ion-icon>\n          </ion-row>\n\n          <ion-row no-lines class=\"ion-item1\">\n              <p class=\"success_text\">Order Failed! </p>\n          </ion-row>\n\n          <ion-row class=\"ion-item2\">\n              <p class=\"order_text\">Oops! Failed to place your Payment. </p>\n          </ion-row>\n      </ion-item>\n  </div>\n\n  <ion-item class=\"ion-item\" no-lines>\n      <ion-row *ngIf=\"orderSuccess\">\n          <ion-col>Order number</ion-col>\n          <br>\n          <ion-col>{{order_id}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>Date</ion-col>\n          <br>\n          <ion-col>{{date | date:'dd-MM-yyyy'}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>Total</ion-col>\n          <br>\n          <ion-col>{{seventyfiveamount | currency:'INR':true}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col>Payment method</ion-col>\n          <br>\n          <ion-col>{{paymentMethod}}</ion-col>\n      </ion-row>\n  </ion-item>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <div *ngIf=\"orderSuccess\">\n          <button color=\"primary\" ion-button (click)=\"submit();\" block> Home </button>\n      </div>\n      <div *ngIf=\"orderFailure\">\n          <button color=\"primary\" ion-button block outline (click)=\"notSubmit()\">MoveToCart</button>\n      </div>\n  </ion-toolbar>\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = (".thank-you {\n  background-color: WhiteSmoke;\n}\n.thank-you .success {\n  color: green;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you p.success_text {\n  margin: auto;\n}\n.thank-you p.order_text {\n  margin: auto;\n}\n.thank-you .failure {\n  color: red;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you .ion-item1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.thank-you .ion-item2 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.thank-you .ion-item ion-col {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  border: 1px solid black;\n  padding: 1px 0 0px 0;\n  margin: 0.8px;\n  text-indent: 5px;\n  background-color: WhiteSmoke;\n}\n.thank-you .header {\n  font-size: 15px;\n  font-weight: bold;\n  color: #387ef5;\n  padding-bottom: 15px;\n}\n.thank-you .background {\n  padding-top: 10px;\n}\n.thank-you .deliver-details {\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .deliver-details_2 {\n  margin-top: -20px;\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .contact_details_place {\n  padding-top: 5px;\n}\n.thank-you .contact-mail {\n  font-weight: normal;\n  font-size: 13px;\n  margin-top: -10px !important;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9wYXl0aGFuay15b3UvcGF5dGhhbmsteW91LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5dGhhbmsteW91L3BheXRoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFTjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQUk7RUFDRSxZQUFBO0FDRU47QURDSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRElJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRk47QURNSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDSk47QURPSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0xOO0FEZ0JJO0VBRUUsaUJBQUE7QUNmTjtBRDBCSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ3hCTjtBRGdDSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDOUJOO0FEb0NJO0VBQ0UsZ0JBQUE7QUNsQ047QURxQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDbkNOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5dGhhbmsteW91L3BheXRoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmsteW91IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICAgIC5zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBwLnN1Y2Nlc3NfdGV4dCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIHAub3JkZXJfdGV4dCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICBcbiAgICAuZmFpbHVyZSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICBcbiAgICAuaW9uLWl0ZW0xIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgLy9tYXJnaW4tdG9wOiAtMTFweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLmlvbi1pdGVtMiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgLy9tYXJnaW4tdG9wOiAtMTFweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLmlvbi1pdGVtIGlvbi1jb2wge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgIHBhZGRpbmc6IDFweCAwIDBweCAwO1xuICAgICAgbWFyZ2luOiAwLjhweDtcbiAgICAgIHRleHQtaW5kZW50OiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICAgIH1cbiAgXG4gICAgLmhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICBcbiAgICAvLyAgZGl2IGlvbi1yb3cgIHtcbiAgICAvLyBcdGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xuICAgIC8vIH1cbiAgXG4gICAgLy8gLnRpdGxlIHtcbiAgICAvLyBcdGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vIH1cbiAgXG4gICAgLmJhY2tncm91bmQge1xuICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICBcbiAgICAvLyAudGV4dC1yaWdodCB7XG4gICAgLy8gXHR0ZXh0LWFsaWduOiByaWdodDtcbiAgICAvLyB9XG4gIFxuICAgIC8vIC5jb2xvciB7XG4gICAgLy8gXHRjb2xvcjogZ3JlZW47XG4gICAgLy8gfVxuICBcbiAgICAuZGVsaXZlci1kZXRhaWxzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAvLyBpb24taWNvbntcbiAgICAgIC8vIFx0Y29sb3I6Ymx1ZTtcbiAgICAgIC8vIH1cbiAgICAgIC8vIC5jb250YWN0e1xuICAgICAgLy8gXHRwYWRkaW5nLXRvcDoxMHB4XG4gICAgICAvLyB9XG4gICAgfVxuICAgIC5kZWxpdmVyLWRldGFpbHNfMiB7XG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAvLyBpb24taWNvbntcbiAgICAgIC8vIFx0Y29sb3I6Ymx1ZTtcbiAgICAgIC8vIH1cbiAgICB9XG4gIFxuICAgIC5jb250YWN0X2RldGFpbHNfcGxhY2Uge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gIFxuICAgIC5jb250YWN0LW1haWwge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICB9XG4gIFxuICAvLyAuaW9uLWxhYmVsIHtcbiAgLy8gXHRwYWRkaW5nLXRvcDogMTBweDtcbiAgLy8gfVxuICAiLCIudGhhbmsteW91IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi50aGFuay15b3UgLnN1Y2Nlc3Mge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGhhbmsteW91IHAuc3VjY2Vzc190ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRoYW5rLXlvdSBwLm9yZGVyX3RleHQge1xuICBtYXJnaW46IGF1dG87XG59XG4udGhhbmsteW91IC5mYWlsdXJlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aGFuay15b3UgLmlvbi1pdGVtMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGhhbmsteW91IC5pb24taXRlbTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udGhhbmsteW91IC5pb24taXRlbSBpb24tY29sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleDogMTtcbiAgLW1zLWZsZXg6IDE7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nOiAxcHggMCAwcHggMDtcbiAgbWFyZ2luOiAwLjhweDtcbiAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi50aGFuay15b3UgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzg3ZWY1O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi50aGFuay15b3UgLmJhY2tncm91bmQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi50aGFuay15b3UgLmRlbGl2ZXItZGV0YWlscyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aGFuay15b3UgLmRlbGl2ZXItZGV0YWlsc18yIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50aGFuay15b3UgLmNvbnRhY3RfZGV0YWlsc19wbGFjZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4udGhhbmsteW91IC5jb250YWN0LW1haWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn0iXX0= */");

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