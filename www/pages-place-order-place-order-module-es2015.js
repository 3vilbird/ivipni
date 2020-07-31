(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-order-place-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/place-order/place-order.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/place-order/place-order.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Your Order Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"address\">\n  <ion-item lines=\"none\">\n    <ion-label><b>Delivery Details</b></ion-label>\n  </ion-item>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>{{firstname}} {{lastname}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <h2>{{company}}</h2>\n      <h2>{{address_1}}</h2>\n      <h2>{{address_2}}</h2>\n      <h2>{{city}}, {{name}}, {{postcode}}</h2>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n        <ion-label>{{email}}</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n        <ion-label>{{telephone}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n  <ion-item>\n    <ion-label><b>Order Details</b></ion-label>\n  </ion-item>\n  <ion-item *ngFor=\"let data of dataArray\">\n    <ion-label>\n      <h2>{{data.name}}-{{data.model}}</h2>\n      <h3 *ngIf=\"data.option.length >1\">(Size:{{data.option[0].value}})</h3>\n      <h3 *ngIf=\"data.option.length == 1\">{{data.option[0].value}}</h3>\n      <h3 *ngIf=\"data.option.length >1\">{{data.option[1].value}}</h3>\n    </ion-label>\n    <div>\n      <ion-label>\n        <h2>Quantity: {{data.quantity}}</h2>\n      </ion-label>\n      <ion-label>\n        <h2>{{data.total | currency:'INR':true}}</h2>\n      </ion-label>\n    </div>\n  </ion-item>\n  \n  <ion-card class=\"ion-margin-top\">\n    <div *ngFor=\"let cost of allTotal\">\n      <ion-row class=\"addressrow\">\n        <ion-col>\n          {{cost.title}}\n        </ion-col>\n        <ion-col>\n          {{cost.value | currency:'INR':true}}\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button small class=\"ion-margin\" (click)=\"pay()\" shape=\"round\" expand=\"full\">Proceed To Pay</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/place-order/place-order-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/place-order/place-order-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PlaceOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderPageRoutingModule", function() { return PlaceOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _place_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./place-order.page */ "./src/app/pages/place-order/place-order.page.ts");




const routes = [
    {
        path: '',
        component: _place_order_page__WEBPACK_IMPORTED_MODULE_3__["PlaceOrderPage"]
    }
];
let PlaceOrderPageRoutingModule = class PlaceOrderPageRoutingModule {
};
PlaceOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PlaceOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/place-order/place-order.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/place-order/place-order.module.ts ***!
  \*********************************************************/
/*! exports provided: PlaceOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderPageModule", function() { return PlaceOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./place-order-routing.module */ "./src/app/pages/place-order/place-order-routing.module.ts");
/* harmony import */ var _place_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-order.page */ "./src/app/pages/place-order/place-order.page.ts");







let PlaceOrderPageModule = class PlaceOrderPageModule {
};
PlaceOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceOrderPageRoutingModule"]
        ],
        declarations: [_place_order_page__WEBPACK_IMPORTED_MODULE_6__["PlaceOrderPage"]]
    })
], PlaceOrderPageModule);



/***/ }),

/***/ "./src/app/pages/place-order/place-order.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/place-order/place-order.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".placeorder button {\n  text-align: center;\n  text-transform: lowercase;\n}\n.placeorder .card-md {\n  line-height: 2;\n}\n.placeorder .card-ios {\n  line-height: 2;\n}\n.placeorder .card-md p {\n  margin-right: 0;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 2;\n}\n.placeorder .card-ios p {\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 2;\n}\n.placeorder .addresplaceorder {\n  margin-top: 20px;\n  background-color: lightgray;\n}\n.placeorder ion-card div ion-row .clas1 {\n  margin-bottom: -10px;\n  color: black;\n}\n.placeorder ion-card div ion-row .clas2 {\n  margin-bottom: -25px;\n}\n.placeorder ion-card div ion-row .clas3 {\n  margin-bottom: -20px;\n}\n.placeorder .row p {\n  padding-left: 15px;\n  padding: 5px;\n}\n.placeorder ion-card div ion-row .clas4 {\n  margin-bottom: -15px;\n}\n.placeorder .dataname {\n  width: 20px;\n}\n.placeorder ion-card {\n  margin-top: -10px;\n}\n.placeorder .clas3place {\n  margin-right: -100px;\n}\n.aline ion-row {\n  padding-left: 10px;\n}\n.aline ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n}\n.aline ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 25%;\n}\n.item ion-row {\n  padding-left: 10px;\n}\n.item ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n  color: gray;\n}\n.item ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  color: gray;\n  width: 25%;\n}\n.platform-ios .ptag {\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n.platform-android .ptag {\n  margin-top: 1px;\n  margin-bottom: -1px;\n}\n.placeorderrow {\n  padding-left: 10px;\n  color: #387ef5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQU47QURHSTtFQUNFLGNBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGTjtBRElJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRk47QURhSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QUNYTjtBRGtCSTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ2hCTjtBRGtCSTtFQUNFLG9CQUFBO0FDaEJOO0FEa0JJO0VBQ0Usb0JBQUE7QUNoQk47QURrQkk7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNqQk47QURtQkk7RUFDRSxvQkFBQTtBQ2pCTjtBRG1CSTtFQUNFLFdBQUE7QUNqQk47QURvQkk7RUFDRSxpQkFBQTtBQ2xCTjtBRG9CSTtFQUNFLG9CQUFBO0FDbEJOO0FEd0JFO0VBQ0ksa0JBQUE7QUNyQk47QURzQkc7RUFDRyxvQ0FBQTtFQUNBLFVBQUE7QUNwQk47QUR1Qkk7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNyQkY7QUQyQkU7RUFDQSxrQkFBQTtBQ3hCRjtBRDJCSTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNGLFdBQUE7QUN6Qko7QUQ4Qkk7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFFSixVQUFBO0FDN0JGO0FEb0NFO0VBRUcsZ0JBQUE7RUFDRCxtQkFBQTtBQ2xDSjtBRHNDSTtFQUNFLGVBQUE7RUFDQyxtQkFBQTtBQ25DUDtBRHNDRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ25DTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFjZW9yZGVye1xuICAgIGJ1dHRvbiB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIH1cbiAgXG4gICAgLmNhcmQtbWQge1xuICAgICAgbGluZS1oZWlnaHQ6IDIuMDtcbiAgICB9XG4gICAgLmNhcmQtaW9zIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjA7XG4gICAgfVxuICBcbiAgICAuY2FyZC1tZCBwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjA7XG4gICAgfVxuICAgIC5jYXJkLWlvcyBwIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMi4wO1xuICAgIH1cbiAgICAvLyAuaXRlbSBpb24tcm93IGlvbi1jb2wge1xuICAgIC8vICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XG4gICAgLy8gICBwYWRkaW5nOiAzcHggIWltcG9ydGFudDtcbiAgICAvLyAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIC8vICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIC8vIH1cbiAgICAvLyAuaXRlbSBpb24tcm93IC50b3RhbCB7XG4gICAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAvLyB9XG4gICAgLmFkZHJlc3BsYWNlb3JkZXIge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB9XG4gIFxuICAgIC8vIC5hbGluZSB7XG4gICAgLy8gICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIC8vICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgLy8gfVxuICAgIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgaW9uLWNhcmQgZGl2IGlvbi1yb3cgLmNsYXMyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgIH1cbiAgICBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG4gICAgfVxuICAgIC5yb3cgcCB7XG4gICAgICAvL21hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG4gICAgfVxuICAgIC5kYXRhbmFtZSB7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIFxuICAgIGlvbi1jYXJkIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIH1cbiAgICAuY2xhczNwbGFjZSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMDBweDtcbiAgICB9XG4gICAgXG4gIH1cbiAgICBcbiAgXG4gIC5hbGluZSBpb24tcm93IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgIC5wbGFjZWNvbDF7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDo3NSU7XG4gICAgLy9tYXgtaGVpZ2h0OiA0MHB4O1xuICB9XG4gICAgLnBsYWNlY29sMntcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6MjUlO1xuICAvL21heC1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuICBcbiAgfVxuICBcbiAgLml0ZW0gaW9uLXJvd3tcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAvL21hcmdpbjogLTJweDtcbiAgXG4gICAgLnBsYWNlY29sMSB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDo3NSU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgICAvL21hcmdpbi10b3A6IC0ycHg7XG4gICAgLy8gbWFyZ2luLWJvdHRvbTogLTE4cHg7XG4gICAgIC8vIG1heC1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgICAucGxhY2Vjb2wye1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgIC8vIG1hcmdpbi1ib3R0b206IC0xOHB4O1xuICB3aWR0aDoyNSU7XG4gICAvL21hcmdpbi10b3A6IC0ycHg7XG4gIFxuICBcbiAgLy9tYXgtaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuICAucGxhdGZvcm0taW9zIC5wdGFne1xuICAgIC8vcGFkZGluZy10b3A6IC01cHg7XG4gICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgLy8gcGFkZGluZy1ib3R0b206IC0xMCU7XG4gICAgXG4gICAgfVxuICAgIC5wbGF0Zm9ybS1hbmRyb2lkIC5wdGFne1xuICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgICAgfVxuICBcbiAgLnBsYWNlb3JkZXJyb3d7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICBjb2xvcjogIzM4N2VmNTtcbiAgICB9XG4gICBcbiAgLy8gLnBsYWNlb3JkZXJzcGFuZGl2e1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XG4gIC8vIH0iLCIucGxhY2VvcmRlciBidXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG4ucGxhY2VvcmRlciAuY2FyZC1tZCB7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLnBsYWNlb3JkZXIgLmNhcmQtaW9zIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuY2FyZC1tZCBwIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLnBsYWNlb3JkZXIgLmNhcmQtaW9zIHAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLnBsYWNlb3JkZXIgLmFkZHJlc3BsYWNlb3JkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG59XG4ucGxhY2VvcmRlciBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczEge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnBsYWNlb3JkZXIgaW9uLWNhcmQgZGl2IGlvbi1yb3cgLmNsYXMyIHtcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG59XG4ucGxhY2VvcmRlciBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczMge1xuICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbn1cbi5wbGFjZW9yZGVyIC5yb3cgcCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLnBsYWNlb3JkZXIgaW9uLWNhcmQgZGl2IGlvbi1yb3cgLmNsYXM0IHtcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG4ucGxhY2VvcmRlciAuZGF0YW5hbWUge1xuICB3aWR0aDogMjBweDtcbn1cbi5wbGFjZW9yZGVyIGlvbi1jYXJkIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4ucGxhY2VvcmRlciAuY2xhczNwbGFjZSB7XG4gIG1hcmdpbi1yaWdodDogLTEwMHB4O1xufVxuXG4uYWxpbmUgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5hbGluZSBpb24tcm93IC5wbGFjZWNvbDEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NSU7XG59XG4uYWxpbmUgaW9uLXJvdyAucGxhY2Vjb2wyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDogMjUlO1xufVxuXG4uaXRlbSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLml0ZW0gaW9uLXJvdyAucGxhY2Vjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlO1xuICBjb2xvcjogZ3JheTtcbn1cbi5pdGVtIGlvbi1yb3cgLnBsYWNlY29sMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgY29sb3I6IGdyYXk7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5wbGF0Zm9ybS1pb3MgLnB0YWcge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4ucGxhdGZvcm0tYW5kcm9pZCAucHRhZyB7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLnBsYWNlb3JkZXJyb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjMzg3ZWY1O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/place-order/place-order.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/place-order/place-order.page.ts ***!
  \*******************************************************/
/*! exports provided: PlaceOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderPage", function() { return PlaceOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PlaceOrderPage = class PlaceOrderPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.dataArray = [];
        this.allTotal = [];
    }
    pay() {
        let placeObj = {
            dataArray: this.dataArray,
            email: this.email,
            telephone: this.telephone,
            address_id: this.address_id,
            customer_id: this.customer_id,
            firstname: this.firstname,
            lastname: this.lastname,
            company: this.company,
            address_1: this.address_1,
            address_2: this.address_2,
            city: this.city,
            postcode: this.postcode,
            zone_id: this.zone_id,
            name: this.name,
            cartTotal: this.cartTotal,
            allTotal: this.allTotal,
        };
        // this.navCtrl.push(PaymentPage, placeObj);
        // navigate to payment page
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(placeObj),
            },
        };
        this.router.navigate(["/payment"], navigationExtras);
    }
    ngOnInit() {
        this.route.queryParams.subscribe((param) => {
            let cheakoutDetails = JSON.parse(param["data"]);
            // loading the data from the url
            this.email = cheakoutDetails.email;
            this.telephone = cheakoutDetails.telephone;
            this.address_id = cheakoutDetails.address_id;
            this.customer_id = cheakoutDetails.customer_id;
            this.firstname = cheakoutDetails.firstname;
            this.lastname = cheakoutDetails.lastname;
            this.company = cheakoutDetails.company;
            this.address_1 = cheakoutDetails.address_1;
            this.address_2 = cheakoutDetails.address_2;
            this.city = cheakoutDetails.city;
            this.postcode = cheakoutDetails.postcode;
            this.zone_id = cheakoutDetails.zone_id;
            this.name = cheakoutDetails.name;
            this.dataArray = cheakoutDetails.dataArray;
            this.cartTotal = cheakoutDetails.cartTotal;
            this.allTotal = cheakoutDetails.allTotal;
        });
    }
};
PlaceOrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PlaceOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-place-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./place-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/place-order/place-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./place-order.page.scss */ "./src/app/pages/place-order/place-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], PlaceOrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-place-order-place-order-module-es2015.js.map