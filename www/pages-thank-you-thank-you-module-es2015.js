(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thank-you-thank-you-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-title>Order Received</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"thank-you\">\n    <div *ngIf=\"orderSuccess\" class=\"ion-margin\">\n        <ion-item lines=\"none\">\n            <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon>\n            <ion-text>Order Successful! </ion-text>\n        </ion-item>\n        <ion-text>Thank you.Your order has been placed. </ion-text>\n    </div>\n    <div *ngIf=\"orderFailure\" class=\"ion-margin\">\n        <ion-item lines=\"none\">\n            <ion-icon name=\"close-circle\" color=\"danger\"></ion-icon>\n            <ion-text>Order Failed!</ion-text>\n        </ion-item>\n        <ion-text>Oops! Failed to place your order. </ion-text>\n    </div>\n    <ion-list>\n        <ion-item *ngIf=\"orderSuccess\">\n            <ion-label>\n                <h3>Order number</h3>\n            </ion-label>\n            <ion-note slot=\"end\">{{order_id}}</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <h3>Date</h3>\n            </ion-label>\n            <ion-note slot=\"end\">{{date | date:'dd-MM-yyyy'}}</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <h3>Amount</h3>\n            </ion-label>\n            <ion-note slot=\"end\">{{totalamount | currency:'INR':true}}</ion-note>\n        </ion-item>\n        <ion-item>\n            <ion-label>\n                <h3>Payment method</h3>\n            </ion-label>\n            <ion-note slot=\"end\">{{paymentMethod}}</ion-note>\n        </ion-item>\n    </ion-list>\n    <ion-item>\n        <ion-label>Order Details</ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let item of dataArray\">\n        <ion-label>\n            <h2>{{item.name}}-{{item.model}}</h2>\n            <h3 *ngIf=\"item.option.length > 1\">( Size:{{item.option[0].value}})</h3>\n            <h3 *ngIf=\"item.option.length == 1\">{{item.option[0].value}}</h3>\n            <h3 *ngIf=\"item.option.length >1\">{{item.option[1].value}}</h3>\n        </ion-label>\n        <div>\n            <ion-label>\n                <h2>Quantity: {{item.quantity}}</h2>\n            </ion-label>\n            <ion-label>\n                <h2>{{item.total |  currency:'INR':true}}</h2>\n            </ion-label>\n        </div>\n    </ion-item>\n    <ion-card>\n        <div *ngFor=\"let cost of allTotal\">\n            <ion-row class=\"addressrow\">\n                <ion-col>\n                    {{cost.title}}\n                </ion-col>\n                <ion-col>\n                    {{cost.value | currency:'INR':true}}\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <b>Total Amount:</b>\n                    <p><small>(Incl 2% extra)</small></p>\n                </ion-col>\n                <ion-col>\n                    <b>{{totalamount |  currency:'INR':true}}</b>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-card>\n    <ion-item *ngIf=\"orderSuccess\">\n        <ion-label>Delivery Details</ion-label>\n    </ion-item>\n    <ion-item *ngIf=\"orderSuccess\">\n        <ion-label class=\"ion-padding\">\n            <h3>{{firstname}} {{lastname}}</h3>\n            <h3>{{company}}</h3>\n            <h3>{{address_1}}</h3>\n            <h3>{{address_2}}</h3>\n            <h3>{{city}}, {{name}}, {{postcode}}</h3>\n            <ion-item lines=\"none\">\n                <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n                <ion-label>{{email}}</ion-label>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n                <ion-label>{{telephone}}</ion-label>\n              </ion-item>\n        </ion-label>\n    </ion-item>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-button *ngIf=\"orderSuccess\" (click)=\"submit()\" shape=\"round\" expand=\"full\" color=\"primary\">Home\n        </ion-button>\n        <ion-button *ngIf=\"orderFailure\" (click)=\"notSubmit()\" shape=\"round\" expand=\"full\" color=\"primary\"\n            fill=\"outline\">MoveToCart</ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/thank-you/thank-you-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ThankYouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageRoutingModule", function() { return ThankYouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/pages/thank-you/thank-you.page.ts");




const routes = [
    {
        path: '',
        component: _thank_you_page__WEBPACK_IMPORTED_MODULE_3__["ThankYouPage"]
    }
];
let ThankYouPageRoutingModule = class ThankYouPageRoutingModule {
};
ThankYouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThankYouPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.module.ts ***!
  \*****************************************************/
/*! exports provided: ThankYouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPageModule", function() { return ThankYouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thank-you-routing.module */ "./src/app/pages/thank-you/thank-you-routing.module.ts");
/* harmony import */ var _thank_you_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thank-you.page */ "./src/app/pages/thank-you/thank-you.page.ts");







let ThankYouPageModule = class ThankYouPageModule {
};
ThankYouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _thank_you_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThankYouPageRoutingModule"]
        ],
        declarations: [_thank_you_page__WEBPACK_IMPORTED_MODULE_6__["ThankYouPage"]]
    })
], ThankYouPageModule);



/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".thank-you {\n  background-color: WhiteSmoke;\n}\n.thank-you .success {\n  color: green;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you p.success_text {\n  margin: auto;\n}\n.thank-you p.order_text {\n  margin: auto;\n}\n.thank-you .failure {\n  color: red;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you .ion-item1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.thank-you .ion-item2 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.thank-you .ion-item ion-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  border: 1px solid black;\n  padding: 1px 0 0px 0;\n  margin: 0.8px;\n  text-indent: 5px;\n  background-color: WhiteSmoke;\n}\n.thank-you .header {\n  font-size: 15px;\n  font-weight: bold;\n  color: #387ef5;\n  padding-bottom: 15px;\n}\n.thank-you .background {\n  padding-top: 10px;\n}\n.thank-you .dataname {\n  width: 20px;\n}\n.thank-you .datanamethank {\n  width: 20px;\n}\n.thank-you .dataname b {\n  max-width: 20px;\n  text-overflow: ellipsis;\n}\n.thank-you .deliver-details {\n  font-weight: normal;\n  white-space: normal;\n  font-size: 14px;\n}\n.thank-you .deliver-details_2 {\n  margin-top: -18px;\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .total {\n  background-color: lightgrey;\n  padding-top: 0px;\n  padding-right: -30px;\n}\n.thank-you .title {\n  padding-left: 10px;\n}\n.thank-you .contact_details_place {\n  padding-top: 5px;\n}\n.thank-you .contact-mail {\n  font-weight: normal;\n  font-size: 13px;\n  margin-top: -10px !important;\n  margin-bottom: 8px;\n}\n.thank-you .dataarraythankyou {\n  border: 1.5px solid #888 !important;\n}\n.thank-you .aline ion-row {\n  padding-left: 10px;\n}\n.thank-you .aline ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  white-space: wrap;\n  width: 75%;\n}\n.thank-you .aline ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n.thank-you .item ion-row {\n  padding-left: 10px;\n}\n.thank-you .item ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  white-space: normal;\n  width: 75%;\n}\n.thank-you .item ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy90aGFuay15b3UvdGhhbmsteW91LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFTjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQUk7RUFDRSxZQUFBO0FDRU47QURDSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NOO0FERUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREdJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDRE47QURJSTtFQUVFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUNITjtBREtJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDSE47QURNSTtFQUNFLGlCQUFBO0FDSk47QURNSTtFQUNFLFdBQUE7QUNKTjtBRE1HO0VBQ0csV0FBQTtBQ0pOO0FEUUk7RUFDRSxlQUFBO0VBR0EsdUJBQUE7QUNSTjtBRGdCSTtFQUNFLG1CQUFBO0VBQ0ksbUJBQUE7RUFDSixlQUFBO0FDZE47QURnQkk7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2ROO0FEZ0JJO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUVBLG9CQUFBO0FDZk47QURtQ0k7RUFDRSxrQkFBQTtBQ2pDTjtBRG1DSTtFQUNFLGdCQUFBO0FDakNOO0FEb0NJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ2xDTjtBRHFDSTtFQUNFLG1DQUFBO0FDbkNOO0FEcUNJO0VBQ0Usa0JBQUE7QUNuQ047QURvQ0c7RUFFRyxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ25DTjtBRHFDSTtFQUNFLG9DQUFBO0VBQ0osVUFBQTtBQ25DRjtBRHVDSTtFQUNGLGtCQUFBO0FDckNGO0FEdUNJO0VBQ0Usb0NBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNyQ047QUR1Q0k7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNyQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90aGFuay15b3UvdGhhbmsteW91LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aGFuay15b3Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG4gICAgLnN1Y2Nlc3Mge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIHAuc3VjY2Vzc190ZXh0IHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgcC5vcmRlcl90ZXh0IHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gIFxuICAgIC5mYWlsdXJlIHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gIFxuICAgIC5pb24taXRlbTEge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICBcbiAgICAuaW9uLWl0ZW0yIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgfVxuICBcbiAgICAuaW9uLWl0ZW0gaW9uLWNvbCB7XG4gICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICBwYWRkaW5nOiAxcHggMCAwcHggMDtcbiAgICAgIG1hcmdpbjogMC44cHg7XG4gICAgICB0ZXh0LWluZGVudDogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgfVxuICBcbiAgICAuYmFja2dyb3VuZCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gICAgLmRhdGFuYW1lIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgIC5kYXRhbmFtZXRoYW5rIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgXG4gIFxuICAgIC5kYXRhbmFtZSBiIHtcbiAgICAgIG1heC13aWR0aDogMjBweDtcbiAgICAgIC8vd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgXG4gICAgfVxuICAgIC8vIC5zcGFuIHtcbiAgICAvLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgXG4gICAgLy8gfVxuICBcbiAgICAuZGVsaXZlci1kZXRhaWxzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmRlbGl2ZXItZGV0YWlsc18yIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnRvdGFsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIFxuICAgICAgcGFkZGluZy1yaWdodDogLTMwcHg7XG4gICAgfVxuICBcbiAgICAvLyAuYWxpbmUge1xuICAgIC8vICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAvLyAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgXG4gICAgLy8gfVxuICAgIC8vIC5pdGVtIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgLy8gICBib3JkZXI6IDEuNXB4IHNvbGlkICM4ODggIWltcG9ydGFudDtcbiAgICAvLyAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICAgIC8vICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgLy8gICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIC8vIH1cbiAgICAvLyAuaXRlbSBpb24tcm93IC50b3RhbHRoYW5rIHtcbiAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgIFxuICAgIC8vIH1cbiAgXG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB9XG4gICAgLmNvbnRhY3RfZGV0YWlsc19wbGFjZSB7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgXG4gICAgLmNvbnRhY3QtbWFpbCB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gIFxuICAgIC5kYXRhYXJyYXl0aGFua3lvdSB7XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM4ODggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFsaW5lIGlvbi1yb3cge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgLnBsYWNlY29sMXtcbiAgXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgICAgIHdpZHRoOjc1JTtcbiAgfVxuICAgIC5wbGFjZWNvbDJ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjIzJTtcbiAgICB9XG4gIFxuICB9XG4gICAgLml0ZW0gaW9uLXJvd3tcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgXG4gICAgLnBsYWNlY29sMSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgd2lkdGg6NzUlO1xuICB9XG4gICAgLnBsYWNlY29sMntcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6MjMlO1xuICAgIH1cbiAgfVxuICBcbiAgIFxuICB9XG4gICIsIi50aGFuay15b3Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnRoYW5rLXlvdSAuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aGFuay15b3UgcC5zdWNjZXNzX3RleHQge1xuICBtYXJnaW46IGF1dG87XG59XG4udGhhbmsteW91IHAub3JkZXJfdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aGFuay15b3UgLmZhaWx1cmUge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRoYW5rLXlvdSAuaW9uLWl0ZW0xIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aGFuay15b3UgLmlvbi1pdGVtMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi50aGFuay15b3UgLmlvbi1pdGVtIGlvbi1jb2wge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMXB4IDAgMHB4IDA7XG4gIG1hcmdpbjogMC44cHg7XG4gIHRleHQtaW5kZW50OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4udGhhbmsteW91IC5oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4N2VmNTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udGhhbmsteW91IC5iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udGhhbmsteW91IC5kYXRhbmFtZSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnRoYW5rLXlvdSAuZGF0YW5hbWV0aGFuayB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnRoYW5rLXlvdSAuZGF0YW5hbWUgYiB7XG4gIG1heC13aWR0aDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHNfMiB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC50b3RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogLTMwcHg7XG59XG4udGhhbmsteW91IC50aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aGFuay15b3UgLmNvbnRhY3RfZGV0YWlsc19wbGFjZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4udGhhbmsteW91IC5jb250YWN0LW1haWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi50aGFuay15b3UgLmRhdGFhcnJheXRoYW5reW91IHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XG59XG4udGhhbmsteW91IC5hbGluZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnRoYW5rLXlvdSAuYWxpbmUgaW9uLXJvdyAucGxhY2Vjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgd2lkdGg6IDc1JTtcbn1cbi50aGFuay15b3UgLmFsaW5lIGlvbi1yb3cgLnBsYWNlY29sMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIzJTtcbn1cbi50aGFuay15b3UgLml0ZW0gaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aGFuay15b3UgLml0ZW0gaW9uLXJvdyAucGxhY2Vjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3aWR0aDogNzUlO1xufVxuLnRoYW5rLXlvdSAuaXRlbSBpb24tcm93IC5wbGFjZWNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMyU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/thank-you/thank-you.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/thank-you/thank-you.page.ts ***!
  \***************************************************/
/*! exports provided: ThankYouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouPage", function() { return ThankYouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// all clear




let ThankYouPage = class ThankYouPage {
    constructor(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        // pay;
        // data;
        // result;
        this.orderSuccess = false;
        this.orderFailure = false;
        this.dataArray = [];
        this.allTotal = [];
        var _this = this;
        var routeParams = JSON.parse(this.route.snapshot.queryParams.data);
        var _dataObj = JSON.parse(routeParams.data);
        var _paymentDataObj = routeParams.pay;
        _this.date = new Date();
        _this.order_id = _dataObj.order_id;
        _this.cartTotal = _paymentDataObj.cartTotal;
        _this.paymentMethod = _paymentDataObj.paymentMethod;
        _this.firstTermAmount = _paymentDataObj.firstTermAmount;
        _this.dataArray = _paymentDataObj.dataArray;
        _this.allTotal = _paymentDataObj.totals;
        if (_this.paymentMethod == "Bank Transfer") {
            _this.totalamount = (_paymentDataObj.cartTotal), (_this.firstname = _paymentDataObj.firstname);
        }
        else {
            _this.totalamount = (_paymentDataObj.firstTermAmount), (_this.firstname = _paymentDataObj.firstname);
        }
        _this.lastname = _paymentDataObj.lastname;
        _this.address_1 = _paymentDataObj.address_1;
        _this.address_2 = _paymentDataObj.address_2;
        _this.company = _paymentDataObj.company;
        _this.postcode = _paymentDataObj.postcode;
        _this.city = _paymentDataObj.city;
        _this.name = _paymentDataObj.name;
        _this.email = _paymentDataObj.email;
        _this.telephone = _paymentDataObj.telephone;
        if (_dataObj.order_id) {
            _this.orderSuccess = true;
        }
        else {
            _this.orderFailure = true;
        }
    }
    submit() {
        this.navCtrl.navigateRoot('/home');
    }
    notSubmit() {
        this.navCtrl.navigateForward('/payment');
    }
    ngOnInit() {
    }
};
ThankYouPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thank-you',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-you.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-you.page.scss */ "./src/app/pages/thank-you/thank-you.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], ThankYouPage);



/***/ })

}]);
//# sourceMappingURL=pages-thank-you-thank-you-module-es2015.js.map