(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-thank-you-thank-you-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-title>Order Received</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"thank-you\">\r\n    <div *ngIf=\"orderSuccess\" class=\"ion-margin\">\r\n        <ion-item lines=\"none\">\r\n            <ion-icon name=\"checkmark-circle\" color=\"success\"></ion-icon>\r\n            <ion-text>Order Successful! </ion-text>\r\n        </ion-item>\r\n        <ion-text>Thank you.Your order has been placed. </ion-text>\r\n    </div>\r\n    <div *ngIf=\"orderFailure\" class=\"ion-margin\">\r\n        <ion-item lines=\"none\">\r\n            <ion-icon name=\"close-circle\" color=\"danger\"></ion-icon>\r\n            <ion-text>Order Failed!</ion-text>\r\n        </ion-item>\r\n        <ion-text>Oops! Failed to place your order. </ion-text>\r\n    </div>\r\n    <ion-list>\r\n        <ion-item *ngIf=\"orderSuccess\">\r\n            <ion-label>\r\n                <h3>Order number</h3>\r\n            </ion-label>\r\n            <ion-note slot=\"end\">{{order_id}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>Date</h3>\r\n            </ion-label>\r\n            <ion-note slot=\"end\">{{date | date:'dd-MM-yyyy'}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>Amount</h3>\r\n            </ion-label>\r\n            <ion-note slot=\"end\">{{totalamount | currency:'INR':true}}</ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>Payment method</h3>\r\n            </ion-label>\r\n            <ion-note slot=\"end\">{{paymentMethod}}</ion-note>\r\n        </ion-item>\r\n    </ion-list>\r\n    <ion-item>\r\n        <ion-label>Order Details</ion-label>\r\n    </ion-item>\r\n    <ion-item *ngFor=\"let item of dataArray\">\r\n        <ion-label>\r\n            <h2>{{item.name}}-{{item.model}}</h2>\r\n            <h3 *ngIf=\"item.option.length > 1\">( Size:{{item.option[0].value}})</h3>\r\n            <h3 *ngIf=\"item.option.length == 1\">{{item.option[0].value}}</h3>\r\n            <h3 *ngIf=\"item.option.length >1\">{{item.option[1].value}}</h3>\r\n        </ion-label>\r\n        <div>\r\n            <ion-label>\r\n                <h2>Quantity: {{item.quantity}}</h2>\r\n            </ion-label>\r\n            <ion-label>\r\n                <h2>{{item.total |  currency:'INR':true}}</h2>\r\n            </ion-label>\r\n        </div>\r\n    </ion-item>\r\n    <ion-card>\r\n        <div *ngFor=\"let cost of allTotal\">\r\n            <ion-row class=\"addressrow\">\r\n                <ion-col>\r\n                    {{cost.title}}\r\n                </ion-col>\r\n                <ion-col>\r\n                    {{cost.value | currency:'INR':true}}\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col>\r\n                    <b>Total Amount:</b>\r\n                    <p><small>(Incl 2% extra)</small></p>\r\n                </ion-col>\r\n                <ion-col>\r\n                    <b>{{totalamount |  currency:'INR':true}}</b>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n    </ion-card>\r\n    <ion-item *ngIf=\"orderSuccess\">\r\n        <ion-label>Delivery Details</ion-label>\r\n    </ion-item>\r\n    <ion-item *ngIf=\"orderSuccess\">\r\n        <ion-label class=\"ion-padding\">\r\n            <h3>{{firstname}} {{lastname}}</h3>\r\n            <h3>{{company}}</h3>\r\n            <h3>{{address_1}}</h3>\r\n            <h3>{{address_2}}</h3>\r\n            <h3>{{city}}, {{name}}, {{postcode}}</h3>\r\n            <ion-item lines=\"none\">\r\n                <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\r\n                <ion-label>{{email}}</ion-label>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\r\n                <ion-label>{{telephone}}</ion-label>\r\n              </ion-item>\r\n        </ion-label>\r\n    </ion-item>\r\n</ion-content>\r\n<ion-footer>\r\n    <ion-toolbar>\r\n        <ion-button *ngIf=\"orderSuccess\" (click)=\"submit()\" shape=\"round\" expand=\"full\" color=\"primary\">Home\r\n        </ion-button>\r\n        <ion-button *ngIf=\"orderFailure\" (click)=\"notSubmit()\" shape=\"round\" expand=\"full\" color=\"primary\"\r\n            fill=\"outline\">MoveToCart</ion-button>\r\n    </ion-toolbar>\r\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = (".thank-you {\n  background-color: WhiteSmoke;\n}\n.thank-you .success {\n  color: green;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you p.success_text {\n  margin: auto;\n}\n.thank-you p.order_text {\n  margin: auto;\n}\n.thank-you .failure {\n  color: red;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you .ion-item1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.thank-you .ion-item2 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.thank-you .ion-item ion-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  border: 1px solid black;\n  padding: 1px 0 0px 0;\n  margin: 0.8px;\n  text-indent: 5px;\n  background-color: WhiteSmoke;\n}\n.thank-you .header {\n  font-size: 15px;\n  font-weight: bold;\n  color: #387ef5;\n  padding-bottom: 15px;\n}\n.thank-you .background {\n  padding-top: 10px;\n}\n.thank-you .dataname {\n  width: 20px;\n}\n.thank-you .datanamethank {\n  width: 20px;\n}\n.thank-you .dataname b {\n  max-width: 20px;\n  text-overflow: ellipsis;\n}\n.thank-you .deliver-details {\n  font-weight: normal;\n  white-space: normal;\n  font-size: 14px;\n}\n.thank-you .deliver-details_2 {\n  margin-top: -18px;\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .total {\n  background-color: lightgrey;\n  padding-top: 0px;\n  padding-right: -30px;\n}\n.thank-you .title {\n  padding-left: 10px;\n}\n.thank-you .contact_details_place {\n  padding-top: 5px;\n}\n.thank-you .contact-mail {\n  font-weight: normal;\n  font-size: 13px;\n  margin-top: -10px !important;\n  margin-bottom: 8px;\n}\n.thank-you .dataarraythankyou {\n  border: 1.5px solid #888 !important;\n}\n.thank-you .aline ion-row {\n  padding-left: 10px;\n}\n.thank-you .aline ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  white-space: wrap;\n  width: 75%;\n}\n.thank-you .aline ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n.thank-you .item ion-row {\n  padding-left: 10px;\n}\n.thank-you .item ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  white-space: normal;\n  width: 75%;\n}\n.thank-you .item ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGhhbmsteW91L0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcdGhhbmsteW91XFx0aGFuay15b3UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90aGFuay15b3UvdGhhbmsteW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURBSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VOO0FEQUk7RUFDRSxZQUFBO0FDRU47QURBSTtFQUNFLFlBQUE7QUNFTjtBRENJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ047QURFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNETjtBRElJO0VBRUUsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0hOO0FES0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUNITjtBRE1JO0VBQ0UsaUJBQUE7QUNKTjtBRE1JO0VBQ0UsV0FBQTtBQ0pOO0FETUc7RUFDRyxXQUFBO0FDSk47QURRSTtFQUNFLGVBQUE7RUFHQSx1QkFBQTtBQ1JOO0FEZ0JJO0VBQ0UsbUJBQUE7RUFDSSxtQkFBQTtFQUNKLGVBQUE7QUNkTjtBRGdCSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDZE47QURnQkk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBRUEsb0JBQUE7QUNmTjtBRG1DSTtFQUNFLGtCQUFBO0FDakNOO0FEbUNJO0VBQ0UsZ0JBQUE7QUNqQ047QURvQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDbENOO0FEcUNJO0VBQ0UsbUNBQUE7QUNuQ047QURxQ0k7RUFDRSxrQkFBQTtBQ25DTjtBRG9DRztFQUVHLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDbkNOO0FEcUNJO0VBQ0Usb0NBQUE7RUFDSixVQUFBO0FDbkNGO0FEdUNJO0VBQ0Ysa0JBQUE7QUNyQ0Y7QUR1Q0k7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ3JDTjtBRHVDSTtFQUNFLG9DQUFBO0VBQ0osVUFBQTtBQ3JDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRoYW5rLXlvdSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gICAgLnN1Y2Nlc3Mge1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbiAgICBwLnN1Y2Nlc3NfdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICAgIHAub3JkZXJfdGV4dCB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5mYWlsdXJlIHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5pb24taXRlbTEge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1pdGVtMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24taXRlbSBpb24tY29sIHtcclxuICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gICAgICAtbXMtZmxleDogMTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHBhZGRpbmc6IDFweCAwIDBweCAwO1xyXG4gICAgICBtYXJnaW46IDAuOHB4O1xyXG4gICAgICB0ZXh0LWluZGVudDogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZGF0YW5hbWUge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICAgLmRhdGFuYW1ldGhhbmsge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIC5kYXRhbmFtZSBiIHtcclxuICAgICAgbWF4LXdpZHRoOiAyMHB4O1xyXG4gICAgICAvL3doaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIC8vZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLy8gLnNwYW4ge1xyXG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgXHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgICAuZGVsaXZlci1kZXRhaWxzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5kZWxpdmVyLWRldGFpbHNfMiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudG90YWwge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgXHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IC0zMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gLmFsaW5lIHtcclxuICAgIC8vICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIC8vICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIFxyXG4gICAgLy8gfVxyXG4gICAgLy8gLml0ZW0gaW9uLXJvdyBpb24tY29sIHtcclxuICAgIC8vICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIC8vICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gLml0ZW0gaW9uLXJvdyAudG90YWx0aGFuayB7XHJcbiAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9kZXRhaWxzX3BsYWNlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250YWN0LW1haWwge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICBcclxuICAgIC5kYXRhYXJyYXl0aGFua3lvdSB7XHJcbiAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzg4OCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsaW5lIGlvbi1yb3cge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgIC5wbGFjZWNvbDF7XHJcbiAgXHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICAgICAgd2hpdGUtc3BhY2U6IHdyYXA7XHJcbiAgICAgIHdpZHRoOjc1JTtcclxuICB9XHJcbiAgICAucGxhY2Vjb2wye1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6MjMlO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICAgIC5pdGVtIGlvbi1yb3d7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBcclxuICAgIC5wbGFjZWNvbDEge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIHdpZHRoOjc1JTtcclxuICB9XHJcbiAgICAucGxhY2Vjb2wye1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6MjMlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAgXHJcbiAgfVxyXG4gICIsIi50aGFuay15b3Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnRoYW5rLXlvdSAuc3VjY2VzcyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aGFuay15b3UgcC5zdWNjZXNzX3RleHQge1xuICBtYXJnaW46IGF1dG87XG59XG4udGhhbmsteW91IHAub3JkZXJfdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aGFuay15b3UgLmZhaWx1cmUge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnRoYW5rLXlvdSAuaW9uLWl0ZW0xIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50aGFuay15b3UgLmlvbi1pdGVtMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi50aGFuay15b3UgLmlvbi1pdGVtIGlvbi1jb2wge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gIC1tcy1mbGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMXB4IDAgMHB4IDA7XG4gIG1hcmdpbjogMC44cHg7XG4gIHRleHQtaW5kZW50OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4udGhhbmsteW91IC5oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM4N2VmNTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4udGhhbmsteW91IC5iYWNrZ3JvdW5kIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udGhhbmsteW91IC5kYXRhbmFtZSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnRoYW5rLXlvdSAuZGF0YW5hbWV0aGFuayB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnRoYW5rLXlvdSAuZGF0YW5hbWUgYiB7XG4gIG1heC13aWR0aDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC5kZWxpdmVyLWRldGFpbHNfMiB7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGhhbmsteW91IC50b3RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogLTMwcHg7XG59XG4udGhhbmsteW91IC50aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aGFuay15b3UgLmNvbnRhY3RfZGV0YWlsc19wbGFjZSB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4udGhhbmsteW91IC5jb250YWN0LW1haWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi50aGFuay15b3UgLmRhdGFhcnJheXRoYW5reW91IHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XG59XG4udGhhbmsteW91IC5hbGluZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnRoYW5rLXlvdSAuYWxpbmUgaW9uLXJvdyAucGxhY2Vjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogd3JhcDtcbiAgd2lkdGg6IDc1JTtcbn1cbi50aGFuay15b3UgLmFsaW5lIGlvbi1yb3cgLnBsYWNlY29sMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIzJTtcbn1cbi50aGFuay15b3UgLml0ZW0gaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aGFuay15b3UgLml0ZW0gaW9uLXJvdyAucGxhY2Vjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3aWR0aDogNzUlO1xufVxuLnRoYW5rLXlvdSAuaXRlbSBpb24tcm93IC5wbGFjZWNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMyU7XG59Il19 */");

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