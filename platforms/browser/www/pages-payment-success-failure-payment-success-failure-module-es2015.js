(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-success-failure-payment-success-failure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-success-failure/payment-success-failure.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-success-failure/payment-success-failure.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>Payment History</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n</ion-card>\r\n\r\n<ion-content class=\"payment-success-failure\">\r\n  <div *ngIf=\"paymentSuccess\">\r\n    <ion-card class=\"order1\" *ngFor=\"let payment of paymentSuccessFailure\" (click)=\"paymentdetail(payment)\">\r\n      <ion-row>\r\n        <ion-col class=\"col1\">\r\n          <p>Order Id:</p>\r\n        </ion-col>\r\n        <ion-col class=\"col2\">\r\n          <p> {{payment.order_id}} </p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"col1\">\r\n          <p>Status:</p>\r\n        </ion-col>\r\n        <ion-col class=\"col2\">\r\n          <p>{{payment.status}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"col1\">\r\n          <p>Amount:</p>\r\n        </ion-col>\r\n        <ion-col class=\"col2\">\r\n          <p>{{payment.total | currency:'INR':true}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col class=\"col1\">\r\n          <p>Order Date:</p>\r\n        </ion-col>\r\n        <ion-col class=\"col2\">\r\n          <p>{{payment.date_added}}</p>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n  \r\n  <div *ngIf=\"paymentFailure\">\r\n    <ion-card *ngFor=\"let payment of paymentSuccessFailure\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item lines=\"none\">\r\n            <ion-icon slot=\"start\" name=\"close-circle\" class=\"failure\"></ion-icon>\r\n            <h3>{{payment.order_id}}</h3>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h3>123{{payment.payment_method}}</h3>\r\n        </ion-col>\r\n        <ion-col>\r\n          <h3>{{payment.total | currency:'INR':true}}</h3>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"paymentSuccessFailureCount\">\r\n    <h1 class=\"payfail\"><b>No record found</b></h1>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/payment-success-failure/payment-success-failure-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/payment-success-failure/payment-success-failure-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: PaymentSuccessFailurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessFailurePageRoutingModule", function() { return PaymentSuccessFailurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_success_failure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-success-failure.page */ "./src/app/pages/payment-success-failure/payment-success-failure.page.ts");




const routes = [
    {
        path: '',
        component: _payment_success_failure_page__WEBPACK_IMPORTED_MODULE_3__["PaymentSuccessFailurePage"]
    }
];
let PaymentSuccessFailurePageRoutingModule = class PaymentSuccessFailurePageRoutingModule {
};
PaymentSuccessFailurePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentSuccessFailurePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment-success-failure/payment-success-failure.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/payment-success-failure/payment-success-failure.module.ts ***!
  \*********************************************************************************/
/*! exports provided: PaymentSuccessFailurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessFailurePageModule", function() { return PaymentSuccessFailurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_success_failure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-success-failure-routing.module */ "./src/app/pages/payment-success-failure/payment-success-failure-routing.module.ts");
/* harmony import */ var _payment_success_failure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-success-failure.page */ "./src/app/pages/payment-success-failure/payment-success-failure.page.ts");







let PaymentSuccessFailurePageModule = class PaymentSuccessFailurePageModule {
};
PaymentSuccessFailurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_success_failure_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentSuccessFailurePageRoutingModule"]
        ],
        declarations: [_payment_success_failure_page__WEBPACK_IMPORTED_MODULE_6__["PaymentSuccessFailurePage"]]
    })
], PaymentSuccessFailurePageModule);



/***/ }),

/***/ "./src/app/pages/payment-success-failure/payment-success-failure.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/payment-success-failure/payment-success-failure.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".payment-success-failure {\n  background-color: WhiteSmoke;\n}\n.payment-success-failure .success {\n  color: green;\n  font-size: 30px;\n  text-indent: 25px;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n.payment-success-failure ion-card {\n  background-color: white;\n}\n.payment-success-failure ion-col h2 b {\n  padding-left: 50px;\n  font-size: 14px;\n  font-weight: bold;\n  text-indent: 50px;\n}\n.payment-success-failure ion-col h3 p {\n  font-size: 13px;\n  font-weight: normal;\n  text-indent: 50px;\n}\n.payment-success-failure ion-col h4 p {\n  font-size: 13px;\n  font-weight: normal;\n  text-indent: 50px;\n}\n.payment-success-failure .failure {\n  color: red;\n  margin-top: 1rem;\n  font-size: 20px;\n}\n.payment-success-failure .payfail {\n  color: lightgrey;\n}\n.order1 {\n  background-color: white;\n  padding: 15px;\n}\n.order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #393838;\n}\n.order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n.order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzLWZhaWx1cmUvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50LXN1Y2Nlc3MtZmFpbHVyZVxccGF5bWVudC1zdWNjZXNzLWZhaWx1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZS9wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NOO0FERUk7RUFDRSx1QkFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRk47QURLSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSE47QURNSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKTjtBRE1JO0VBQ0UsZ0JBQUE7QUNKTjtBRFFFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FDTEo7QURPRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FETUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNISjtBREtFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtc3VjY2Vzcy1mYWlsdXJlL3BheW1lbnQtc3VjY2Vzcy1mYWlsdXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gIFxyXG4gICAgLnN1Y2Nlc3Mge1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgdGV4dC1pbmRlbnQ6IDI1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY29sIGgyIGIge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHRleHQtaW5kZW50OiA1MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWNvbCBoMyBwIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICB0ZXh0LWluZGVudDogNTBweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jb2wgaDQgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgdGV4dC1pbmRlbnQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZmFpbHVyZSB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIC5wYXlmYWlsIHtcclxuICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5vcmRlcjEgLmNvbDEgIHAge1xyXG4gICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgY29sb3I6ICMzOTM4Mzg7XHJcbiAgfVxyXG4gIC5vcmRlcjEgLmNvbDIgIHAge1xyXG4gICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGNvbG9yOiAjMzkzODM4O1xyXG4gIH1cclxuICBcclxuICAub3JkZXIxIC5jb2wxICBiIHtcclxuICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgIGNvbG9yOiAjMzkzODM4O1xyXG4gIH1cclxuICAub3JkZXIxIC5jb2wyICBiIHtcclxuICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzM5MzgzODtcclxuICB9XHJcbiAgIiwiLnBheW1lbnQtc3VjY2Vzcy1mYWlsdXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZSAuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWluZGVudDogMjVweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBheW1lbnQtc3VjY2Vzcy1mYWlsdXJlIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ucGF5bWVudC1zdWNjZXNzLWZhaWx1cmUgaW9uLWNvbCBoMiBiIHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWluZGVudDogNTBweDtcbn1cbi5wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZSBpb24tY29sIGgzIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLnBheW1lbnQtc3VjY2Vzcy1mYWlsdXJlIGlvbi1jb2wgaDQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XG59XG4ucGF5bWVudC1zdWNjZXNzLWZhaWx1cmUgLmZhaWx1cmUge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucGF5bWVudC1zdWNjZXNzLWZhaWx1cmUgLnBheWZhaWwge1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4ub3JkZXIxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5vcmRlcjEgLmNvbDEgcCB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG5cbi5vcmRlcjEgLmNvbDIgcCB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG5cbi5vcmRlcjEgLmNvbDEgYiB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzM5MzgzODtcbn1cblxuLm9yZGVyMSAuY29sMiBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzM5MzgzODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/payment-success-failure/payment-success-failure.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/payment-success-failure/payment-success-failure.page.ts ***!
  \*******************************************************************************/
/*! exports provided: PaymentSuccessFailurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessFailurePage", function() { return PaymentSuccessFailurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear






let PaymentSuccessFailurePage = class PaymentSuccessFailurePage {
    constructor(navCtrl, productServices, loadingCtrl, networkService, logger, router) {
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.paymentSuccessFailure = [];
        this.paymentSuccessFailureCount = false;
        var _this = this;
        if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
        }
        else {
            _this.loader();
            this.productServices.getPayment(function (data) {
                _this.paymentSuccessFailure = data.data.orders;
                _this.logger.info("payment object" + JSON.stringify(_this.paymentSuccessFailure));
                if (data.status == "1") {
                    _this.paymentSuccess = true;
                    _this.paymentFailure = false;
                }
                else {
                    _this.paymentSuccessFailureCount = true;
                    _this.paymentSuccess = false;
                    _this.paymentFailure = true;
                }
            });
        }
    }
    // loader
    loader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: ``,
                duration: 1000,
            });
            this.loading.present();
        });
    }
    paymentdetail(payment) {
        var _this = this;
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(payment),
            },
        };
        // _this.navCtrl.push(PaymentDetailsPage, payment);
        _this.router.navigate(["/payment-details"], navigationExtras);
    }
    ngOnInit() { }
};
PaymentSuccessFailurePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
PaymentSuccessFailurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-payment-success-failure",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-success-failure.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-success-failure/payment-success-failure.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-success-failure.page.scss */ "./src/app/pages/payment-success-failure/payment-success-failure.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], PaymentSuccessFailurePage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-success-failure-payment-success-failure-module-es2015.js.map