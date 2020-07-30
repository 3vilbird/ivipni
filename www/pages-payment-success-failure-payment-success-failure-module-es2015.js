(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-success-failure-payment-success-failure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-success-failure/payment-success-failure.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-success-failure/payment-success-failure.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>Payment History</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-card>\n\n<ion-content class=\"payment-success-failure\">\n  <div *ngIf=\"paymentSuccess\">\n    <ion-card class=\"order1\" *ngFor=\"let payment of paymentSuccessFailure\" (click)=\"paymentdetail(payment)\">\n      <ion-row>\n        <ion-col class=\"col1\">\n          <p>Order Id:</p>\n        </ion-col>\n        <ion-col class=\"col2\">\n          <p> {{payment.order_id}} </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"col1\">\n          <p>Status:</p>\n        </ion-col>\n        <ion-col class=\"col2\">\n          <p>{{payment.status}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"col1\">\n          <p>Amount:</p>\n        </ion-col>\n        <ion-col class=\"col2\">\n          <p>{{payment.total | currency:'INR':true}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"col1\">\n          <p>Order Date:</p>\n        </ion-col>\n        <ion-col class=\"col2\">\n          <p>{{payment.date_added}}</p>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  \n  <div *ngIf=\"paymentFailure\">\n    <ion-card *ngFor=\"let payment of paymentSuccessFailure\">\n      <ion-row>\n        <ion-col>\n          <ion-item lines=\"none\">\n            <ion-icon slot=\"start\" name=\"close-circle\" class=\"failure\"></ion-icon>\n            <h3>{{payment.order_id}}</h3>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <h3>123{{payment.payment_method}}</h3>\n        </ion-col>\n        <ion-col>\n          <h3>{{payment.total | currency:'INR':true}}</h3>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"paymentSuccessFailureCount\">\n    <h1 class=\"payfail\"><b>No record found</b></h1>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".payment-success-failure {\n  background-color: WhiteSmoke;\n}\n.payment-success-failure .success {\n  color: green;\n  font-size: 30px;\n  text-indent: 25px;\n  padding-top: 20px;\n  padding-bottom: 10px;\n}\n.payment-success-failure ion-card {\n  background-color: white;\n}\n.payment-success-failure ion-col h2 b {\n  padding-left: 50px;\n  font-size: 14px;\n  font-weight: bold;\n  text-indent: 50px;\n}\n.payment-success-failure ion-col h3 p {\n  font-size: 13px;\n  font-weight: normal;\n  text-indent: 50px;\n}\n.payment-success-failure ion-col h4 p {\n  font-size: 13px;\n  font-weight: normal;\n  text-indent: 50px;\n}\n.payment-success-failure .failure {\n  color: red;\n  margin-top: 1rem;\n  font-size: 20px;\n}\n.payment-success-failure .payfail {\n  color: lightgrey;\n}\n.order1 {\n  background-color: white;\n  padding: 15px;\n}\n.order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #393838;\n}\n.order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n.order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZS9wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtc3VjY2Vzcy1mYWlsdXJlL3BheW1lbnQtc3VjY2Vzcy1mYWlsdXJlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDQ047QURFSTtFQUNFLHVCQUFBO0FDQU47QURHSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNETjtBRElJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNGTjtBREtJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNITjtBRE1JO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pOO0FETUk7RUFDRSxnQkFBQTtBQ0pOO0FEUUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNMSjtBRE9FO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSko7QURNRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSEo7QURNRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0hKO0FES0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudC1zdWNjZXNzLWZhaWx1cmUvcGF5bWVudC1zdWNjZXNzLWZhaWx1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtc3VjY2Vzcy1mYWlsdXJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICBcbiAgICAuc3VjY2VzcyB7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB0ZXh0LWluZGVudDogMjVweDtcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICBcbiAgICBpb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIFxuICAgIGlvbi1jb2wgaDIgYiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHRleHQtaW5kZW50OiA1MHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWNvbCBoMyBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB0ZXh0LWluZGVudDogNTBweDtcbiAgICB9XG4gIFxuICAgIGlvbi1jb2wgaDQgcCB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgdGV4dC1pbmRlbnQ6IDUwcHg7XG4gICAgfVxuICBcbiAgICAuZmFpbHVyZSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLnBheWZhaWwge1xuICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB9XG4gIH1cbiAgXG4gIC5vcmRlcjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cbiAgLm9yZGVyMSAuY29sMSAgcCB7XG4gICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGNvbG9yOiAjMzkzODM4O1xuICB9XG4gIC5vcmRlcjEgLmNvbDIgIHAge1xuICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGNvbG9yOiAjMzkzODM4O1xuICB9XG4gIFxuICAub3JkZXIxIC5jb2wxICBiIHtcbiAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcbiAgICBjb2xvcjogIzM5MzgzODtcbiAgfVxuICAub3JkZXIxIC5jb2wyICBiIHtcbiAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzM5MzgzODtcbiAgfVxuICAiLCIucGF5bWVudC1zdWNjZXNzLWZhaWx1cmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnBheW1lbnQtc3VjY2Vzcy1mYWlsdXJlIC5zdWNjZXNzIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRleHQtaW5kZW50OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGF5bWVudC1zdWNjZXNzLWZhaWx1cmUgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZSBpb24tY29sIGgyIGIge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtaW5kZW50OiA1MHB4O1xufVxuLnBheW1lbnQtc3VjY2Vzcy1mYWlsdXJlIGlvbi1jb2wgaDMgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1pbmRlbnQ6IDUwcHg7XG59XG4ucGF5bWVudC1zdWNjZXNzLWZhaWx1cmUgaW9uLWNvbCBoNCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWluZGVudDogNTBweDtcbn1cbi5wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZSAuZmFpbHVyZSB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5wYXltZW50LXN1Y2Nlc3MtZmFpbHVyZSAucGF5ZmFpbCB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG5cbi5vcmRlcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLm9yZGVyMSAuY29sMSBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzM5MzgzODtcbn1cblxuLm9yZGVyMSAuY29sMiBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzM5MzgzODtcbn1cblxuLm9yZGVyMSAuY29sMSBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuXG4ub3JkZXIxIC5jb2wyIGIge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMzkzODM4O1xufSJdfQ== */");

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