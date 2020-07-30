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
/* harmony default export */ __webpack_exports__["default"] = (".placeorder button {\n  text-align: center;\n  text-transform: lowercase;\n}\n.placeorder .card-md {\n  line-height: 2;\n}\n.placeorder .card-ios {\n  line-height: 2;\n}\n.placeorder .card-md p {\n  margin-right: 0;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 2;\n}\n.placeorder .card-ios p {\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 2;\n}\n.placeorder .addresplaceorder {\n  margin-top: 20px;\n  background-color: lightgray;\n}\n.placeorder ion-card div ion-row .clas1 {\n  margin-bottom: -10px;\n  color: black;\n}\n.placeorder ion-card div ion-row .clas2 {\n  margin-bottom: -25px;\n}\n.placeorder ion-card div ion-row .clas3 {\n  margin-bottom: -20px;\n}\n.placeorder .row p {\n  padding-left: 15px;\n  padding: 5px;\n}\n.placeorder ion-card div ion-row .clas4 {\n  margin-bottom: -15px;\n}\n.placeorder .dataname {\n  width: 20px;\n}\n.placeorder ion-card {\n  margin-top: -10px;\n}\n.placeorder .clas3place {\n  margin-right: -100px;\n}\n.aline ion-row {\n  padding-left: 10px;\n}\n.aline ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n}\n.aline ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 25%;\n}\n.item ion-row {\n  padding-left: 10px;\n}\n.item ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n  color: gray;\n}\n.item ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  color: gray;\n  width: 25%;\n}\n.platform-ios .ptag {\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n.platform-android .ptag {\n  margin-top: 1px;\n  margin-bottom: -1px;\n}\n.placeorderrow {\n  padding-left: 10px;\n  color: #387ef5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNBTjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FESUk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGTjtBRGFJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBQ1hOO0FEa0JJO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDaEJOO0FEa0JJO0VBQ0Usb0JBQUE7QUNoQk47QURrQkk7RUFDRSxvQkFBQTtBQ2hCTjtBRGtCSTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtBQ2pCTjtBRG1CSTtFQUNFLG9CQUFBO0FDakJOO0FEbUJJO0VBQ0UsV0FBQTtBQ2pCTjtBRG9CSTtFQUNFLGlCQUFBO0FDbEJOO0FEb0JJO0VBQ0Usb0JBQUE7QUNsQk47QUR3QkU7RUFDSSxrQkFBQTtBQ3JCTjtBRHNCRztFQUNHLG9DQUFBO0VBQ0EsVUFBQTtBQ3BCTjtBRHVCSTtFQUNFLG9DQUFBO0VBQ0osVUFBQTtBQ3JCRjtBRDJCRTtFQUNBLGtCQUFBO0FDeEJGO0FEMkJJO0VBQ0Usb0NBQUE7RUFDQSxVQUFBO0VBQ0YsV0FBQTtBQ3pCSjtBRDhCSTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUVKLFVBQUE7QUM3QkY7QURvQ0U7RUFFRyxnQkFBQTtFQUNELG1CQUFBO0FDbENKO0FEc0NJO0VBQ0UsZUFBQTtFQUNDLG1CQUFBO0FDbkNQO0FEc0NFO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDbkNOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYWNlb3JkZXJ7XG4gICAgYnV0dG9uIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgfVxuICBcbiAgICAuY2FyZC1tZCB7XG4gICAgICBsaW5lLWhlaWdodDogMi4wO1xuICAgIH1cbiAgICAuY2FyZC1pb3Mge1xuICAgICAgbGluZS1oZWlnaHQ6IDIuMDtcbiAgICB9XG4gIFxuICAgIC5jYXJkLW1kIHAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuMDtcbiAgICB9XG4gICAgLmNhcmQtaW9zIHAge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjA7XG4gICAgfVxuICAgIC8vIC5pdGVtIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgLy8gICBib3JkZXI6IDEuNXB4IHNvbGlkICM4ODggIWltcG9ydGFudDtcbiAgICAvLyAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICAgIC8vICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgLy8gICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgLy8gfVxuICAgIC8vIC5pdGVtIGlvbi1yb3cgLnRvdGFsIHtcbiAgICAvLyAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIC8vIH1cbiAgICAuYWRkcmVzcGxhY2VvcmRlciB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIH1cbiAgXG4gICAgLy8gLmFsaW5lIHtcbiAgICAvLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgLy8gICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAvLyB9XG4gICAgaW9uLWNhcmQgZGl2IGlvbi1yb3cgLmNsYXMxIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XG4gICAgfVxuICAgIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzMyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcbiAgICB9XG4gICAgLnJvdyBwIHtcbiAgICAgIC8vbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICAgIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzNCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbiAgICB9XG4gICAgLmRhdGFuYW1lIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWNhcmQge1xuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgfVxuICAgIC5jbGFzM3BsYWNlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTEwMHB4O1xuICAgIH1cbiAgICBcbiAgfVxuICAgIFxuICBcbiAgLmFsaW5lIGlvbi1yb3cge1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgLnBsYWNlY29sMXtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOjc1JTtcbiAgICAvL21heC1oZWlnaHQ6IDQwcHg7XG4gIH1cbiAgICAucGxhY2Vjb2wye1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDoyNSU7XG4gIC8vbWF4LWhlaWdodDogNDBweDtcbiAgICB9XG4gIFxuICB9XG4gIFxuICAuaXRlbSBpb24tcm93e1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIC8vbWFyZ2luOiAtMnB4O1xuICBcbiAgICAucGxhY2Vjb2wxIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOjc1JTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICAgIC8vbWFyZ2luLXRvcDogLTJweDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAtMThweDtcbiAgICAgLy8gbWF4LWhlaWdodDogNDBweDtcbiAgfVxuICAgIC5wbGFjZWNvbDJ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgLy8gbWFyZ2luLWJvdHRvbTogLTE4cHg7XG4gIHdpZHRoOjI1JTtcbiAgIC8vbWFyZ2luLXRvcDogLTJweDtcbiAgXG4gIFxuICAvL21heC1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuICB9XG4gIC5wbGF0Zm9ybS1pb3MgLnB0YWd7XG4gICAgLy9wYWRkaW5nLXRvcDogLTVweDtcbiAgICAgbWFyZ2luLXRvcDogLTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICAgICAvLyBwYWRkaW5nLWJvdHRvbTogLTEwJTtcbiAgICBcbiAgICB9XG4gICAgLnBsYXRmb3JtLWFuZHJvaWQgLnB0YWd7XG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgICAgICB9XG4gIFxuICAucGxhY2VvcmRlcnJvd3tcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xuICAgIH1cbiAgIFxuICAvLyAucGxhY2VvcmRlcnNwYW5kaXZ7XG4gIC8vICAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgLy8gfSIsIi5wbGFjZW9yZGVyIGJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5wbGFjZW9yZGVyIC5jYXJkLW1kIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuY2FyZC1pb3Mge1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5wbGFjZW9yZGVyIC5jYXJkLW1kIHAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuY2FyZC1pb3MgcCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuYWRkcmVzcGxhY2VvcmRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5wbGFjZW9yZGVyIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzMSB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGxhY2VvcmRlciBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczIge1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cbi5wbGFjZW9yZGVyIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzMyB7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuLnBsYWNlb3JkZXIgLnJvdyBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGxhY2VvcmRlciBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczQge1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cbi5wbGFjZW9yZGVyIC5kYXRhbmFtZSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnBsYWNlb3JkZXIgaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5wbGFjZW9yZGVyIC5jbGFzM3BsYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwcHg7XG59XG5cbi5hbGluZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmFsaW5lIGlvbi1yb3cgLnBsYWNlY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDc1JTtcbn1cbi5hbGluZSBpb24tcm93IC5wbGFjZWNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5pdGVtIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaXRlbSBpb24tcm93IC5wbGFjZWNvbDEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NSU7XG4gIGNvbG9yOiBncmF5O1xufVxuLml0ZW0gaW9uLXJvdyAucGxhY2Vjb2wyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheTtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnBsYXRmb3JtLWlvcyAucHRhZyB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5wbGF0Zm9ybS1hbmRyb2lkIC5wdGFnIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4ucGxhY2VvcmRlcnJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMzODdlZjU7XG59Il19 */");

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