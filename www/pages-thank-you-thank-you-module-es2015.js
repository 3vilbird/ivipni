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
/* harmony default export */ __webpack_exports__["default"] = (".thank-you {\n  background-color: WhiteSmoke;\n}\n.thank-you .success {\n  color: green;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you p.success_text {\n  margin: auto;\n}\n.thank-you p.order_text {\n  margin: auto;\n}\n.thank-you .failure {\n  color: red;\n  font-size: 30px;\n  margin: 0 auto;\n}\n.thank-you .ion-item1 {\n  font-size: 16px;\n  font-weight: bold;\n}\n.thank-you .ion-item2 {\n  font-size: 14px;\n  font-weight: normal;\n}\n.thank-you .ion-item ion-col {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  border: 1px solid black;\n  padding: 1px 0 0px 0;\n  margin: 0.8px;\n  text-indent: 5px;\n  background-color: WhiteSmoke;\n}\n.thank-you .header {\n  font-size: 15px;\n  font-weight: bold;\n  color: #387ef5;\n  padding-bottom: 15px;\n}\n.thank-you .background {\n  padding-top: 10px;\n}\n.thank-you .dataname {\n  width: 20px;\n}\n.thank-you .datanamethank {\n  width: 20px;\n}\n.thank-you .dataname b {\n  max-width: 20px;\n  text-overflow: ellipsis;\n}\n.thank-you .deliver-details {\n  font-weight: normal;\n  white-space: normal;\n  font-size: 14px;\n}\n.thank-you .deliver-details_2 {\n  margin-top: -18px;\n  font-weight: normal;\n  font-size: 14px;\n}\n.thank-you .total {\n  background-color: lightgrey;\n  padding-top: 0px;\n  padding-right: -30px;\n}\n.thank-you .title {\n  padding-left: 10px;\n}\n.thank-you .contact_details_place {\n  padding-top: 5px;\n}\n.thank-you .contact-mail {\n  font-weight: normal;\n  font-size: 13px;\n  margin-top: -10px !important;\n  margin-bottom: 8px;\n}\n.thank-you .dataarraythankyou {\n  border: 1.5px solid #888 !important;\n}\n.thank-you .aline ion-row {\n  padding-left: 10px;\n}\n.thank-you .aline ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  white-space: wrap;\n  width: 75%;\n}\n.thank-you .aline ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n.thank-you .item ion-row {\n  padding-left: 10px;\n}\n.thank-you .item ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  white-space: normal;\n  width: 75%;\n}\n.thank-you .item ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RoYW5rLXlvdS90aGFuay15b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBREFJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRU47QURBSTtFQUNFLFlBQUE7QUNFTjtBREFJO0VBQ0UsWUFBQTtBQ0VOO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDTjtBREVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0ROO0FESUk7RUFFRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDSE47QURLSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ0hOO0FETUk7RUFDRSxpQkFBQTtBQ0pOO0FETUk7RUFDRSxXQUFBO0FDSk47QURNRztFQUNHLFdBQUE7QUNKTjtBRFFJO0VBQ0UsZUFBQTtFQUdBLHVCQUFBO0FDUk47QURnQkk7RUFDRSxtQkFBQTtFQUNJLG1CQUFBO0VBQ0osZUFBQTtBQ2ROO0FEZ0JJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNkTjtBRGdCSTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQkFBQTtBQ2ZOO0FEbUNJO0VBQ0Usa0JBQUE7QUNqQ047QURtQ0k7RUFDRSxnQkFBQTtBQ2pDTjtBRG9DSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNsQ047QURxQ0k7RUFDRSxtQ0FBQTtBQ25DTjtBRHFDSTtFQUNFLGtCQUFBO0FDbkNOO0FEb0NHO0VBRUcsb0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNuQ047QURxQ0k7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNuQ0Y7QUR1Q0k7RUFDRixrQkFBQTtBQ3JDRjtBRHVDSTtFQUNFLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDckNOO0FEdUNJO0VBQ0Usb0NBQUE7RUFDSixVQUFBO0FDckNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGhhbmsteW91L3RoYW5rLXlvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGhhbmsteW91IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICAgIC5zdWNjZXNzIHtcbiAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBwLnN1Y2Nlc3NfdGV4dCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIHAub3JkZXJfdGV4dCB7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICBcbiAgICAuZmFpbHVyZSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICBcbiAgICAuaW9uLWl0ZW0xIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgXG4gICAgLmlvbi1pdGVtMiB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgXG4gICAgLmlvbi1pdGVtIGlvbi1jb2wge1xuICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgcGFkZGluZzogMXB4IDAgMHB4IDA7XG4gICAgICBtYXJnaW46IDAuOHB4O1xuICAgICAgdGV4dC1pbmRlbnQ6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG4gICAgfVxuICAgIC5oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzM4N2VmNTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgXG4gICAgLmJhY2tncm91bmQge1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5kYXRhbmFtZSB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gICAuZGF0YW5hbWV0aGFuayB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIFxuICBcbiAgICAuZGF0YW5hbWUgYiB7XG4gICAgICBtYXgtd2lkdGg6IDIwcHg7XG4gICAgICAvL3doaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICAvL2Rpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIFxuICAgIH1cbiAgICAvLyAuc3BhbiB7XG4gICAgLy8gICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIFxuICAgIC8vIH1cbiAgXG4gICAgLmRlbGl2ZXItZGV0YWlscyB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5kZWxpdmVyLWRldGFpbHNfMiB7XG4gICAgICBtYXJnaW4tdG9wOiAtMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC50b3RhbCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICBcbiAgICAgIHBhZGRpbmctcmlnaHQ6IC0zMHB4O1xuICAgIH1cbiAgXG4gICAgLy8gLmFsaW5lIHtcbiAgICAvLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgLy8gICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIFxuICAgIC8vIH1cbiAgICAvLyAuaXRlbSBpb24tcm93IGlvbi1jb2wge1xuICAgIC8vICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XG4gICAgLy8gICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgICAvLyAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIC8vICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIC8vICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAvLyB9XG4gICAgLy8gLml0ZW0gaW9uLXJvdyAudG90YWx0aGFuayB7XG4gICAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICBcbiAgICAvLyB9XG4gIFxuICAgIC50aXRsZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxuICAgIC5jb250YWN0X2RldGFpbHNfcGxhY2Uge1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gIFxuICAgIC5jb250YWN0LW1haWwge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICBcbiAgICAuZGF0YWFycmF5dGhhbmt5b3Uge1xuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hbGluZSBpb24tcm93IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgIC5wbGFjZWNvbDF7XG4gIFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gICAgICB3aWR0aDo3NSU7XG4gIH1cbiAgICAucGxhY2Vjb2wye1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDoyMyU7XG4gICAgfVxuICBcbiAgfVxuICAgIC5pdGVtIGlvbi1yb3d7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIFxuICAgIC5wbGFjZWNvbDEge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIHdpZHRoOjc1JTtcbiAgfVxuICAgIC5wbGFjZWNvbDJ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjIzJTtcbiAgICB9XG4gIH1cbiAgXG4gICBcbiAgfVxuICAiLCIudGhhbmsteW91IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi50aGFuay15b3UgLnN1Y2Nlc3Mge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4udGhhbmsteW91IHAuc3VjY2Vzc190ZXh0IHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRoYW5rLXlvdSBwLm9yZGVyX3RleHQge1xuICBtYXJnaW46IGF1dG87XG59XG4udGhhbmsteW91IC5mYWlsdXJlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi50aGFuay15b3UgLmlvbi1pdGVtMSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGhhbmsteW91IC5pb24taXRlbTIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udGhhbmsteW91IC5pb24taXRlbSBpb24tY29sIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAtbXMtZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDFweCAwIDBweCAwO1xuICBtYXJnaW46IDAuOHB4O1xuICB0ZXh0LWluZGVudDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnRoYW5rLXlvdSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzODdlZjU7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuLnRoYW5rLXlvdSAuYmFja2dyb3VuZCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnRoYW5rLXlvdSAuZGF0YW5hbWUge1xuICB3aWR0aDogMjBweDtcbn1cbi50aGFuay15b3UgLmRhdGFuYW1ldGhhbmsge1xuICB3aWR0aDogMjBweDtcbn1cbi50aGFuay15b3UgLmRhdGFuYW1lIGIge1xuICBtYXgtd2lkdGg6IDIwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRoYW5rLXlvdSAuZGVsaXZlci1kZXRhaWxzIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRoYW5rLXlvdSAuZGVsaXZlci1kZXRhaWxzXzIge1xuICBtYXJnaW4tdG9wOiAtMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRoYW5rLXlvdSAudG90YWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IC0zMHB4O1xufVxuLnRoYW5rLXlvdSAudGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4udGhhbmsteW91IC5jb250YWN0X2RldGFpbHNfcGxhY2Uge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLnRoYW5rLXlvdSAuY29udGFjdC1tYWlsIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4udGhhbmsteW91IC5kYXRhYXJyYXl0aGFua3lvdSB7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzg4OCAhaW1wb3J0YW50O1xufVxuLnRoYW5rLXlvdSAuYWxpbmUgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi50aGFuay15b3UgLmFsaW5lIGlvbi1yb3cgLnBsYWNlY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHdyYXA7XG4gIHdpZHRoOiA3NSU7XG59XG4udGhhbmsteW91IC5hbGluZSBpb24tcm93IC5wbGFjZWNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMyU7XG59XG4udGhhbmsteW91IC5pdGVtIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4udGhhbmsteW91IC5pdGVtIGlvbi1yb3cgLnBsYWNlY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd2lkdGg6IDc1JTtcbn1cbi50aGFuay15b3UgLml0ZW0gaW9uLXJvdyAucGxhY2Vjb2wyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDogMjMlO1xufSJdfQ== */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ThankYouPage = class ThankYouPage {
    // _dataObj;
    // _paymentDataObj;
    constructor(router, route) {
        this.router = router;
        this.route = route;
        // pay;
        // data;
        // result;
        this.orderSuccess = false;
        this.orderFailure = false;
        this.dataArray = [];
        this.allTotal = [];
        var _this = this;
        var _dataObj;
        var _paymentDataObj;
        // var routeParams = JSON.parse(this.route.snapshot.queryParams.data);
        this.route.queryParams.subscribe((param) => {
            _dataObj = JSON.parse(JSON.parse(param["data"]).data);
            _paymentDataObj = JSON.parse(param["data"]).pay;
            // console.log(_dataObj.order_id);
            // // console.log(_dataObj.data);
            // // console.log(_dataObj.pay);
            // console.log(_paymentDataObj);
            _this.date = new Date();
            _this.order_id = _dataObj.order_id;
            _this.cartTotal = _paymentDataObj.cartTotal;
            _this.paymentMethod = _paymentDataObj.paymentMethod;
            _this.firstTermAmount = _paymentDataObj.firstTermAmount;
            _this.dataArray = _paymentDataObj.dataArray;
            _this.allTotal = _paymentDataObj.totals;
            if (_this.paymentMethod == "Bank Transfer") {
                (_this.totalamount = _paymentDataObj.cartTotal),
                    (_this.firstname = _paymentDataObj.firstname);
            }
            else {
                (_this.totalamount = _paymentDataObj.firstTermAmount),
                    (_this.firstname = _paymentDataObj.firstname);
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
        });
        // var _dataObj = JSON.parse(routeParams.data);
        // var _paymentDataObj = routeParams.pay;
    }
    submit() {
        this.router.navigateByUrl("/home");
    }
    notSubmit() {
        this.router.navigateByUrl("/payment");
    }
    ngOnInit() { }
};
ThankYouPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ThankYouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-thank-you",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thank-you.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/thank-you/thank-you.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thank-you.page.scss */ "./src/app/pages/thank-you/thank-you.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ThankYouPage);



/***/ })

}]);
//# sourceMappingURL=pages-thank-you-thank-you-module-es2015.js.map