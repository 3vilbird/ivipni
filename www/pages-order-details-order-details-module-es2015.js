(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n          </ion-buttons>\n        <ion-title>Order Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"order-details\">\n    <div class=\"order\">\n        <ion-row>\n            <ion-col>Order Number</ion-col>\n            <ion-col>{{order_id}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Date</ion-col>\n            <ion-col>{{date_added}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Total</ion-col>\n            <ion-col>{{total | currency:'INR':true}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Payment Method</ion-col>\n            <ion-col>{{payment_method}}</ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>Status</ion-col>\n            <ion-col>{{name}}</ion-col>\n        </ion-row>\n    </div>\n    <div>\n        <ion-item>\n            <ion-label><b>Order Details</b></ion-label>\n            <ion-icon name=\"cart\" color=\"success\" slot=\"end\" (click)=\"addToCart(order_id)\"></ion-icon>\n        </ion-item>\n        <ion-row class=\"ion-margin\">\n            <ion-col size=\"8\"><b>Products</b></ion-col>\n            <ion-col size=\"4\"><b>Total</b></ion-col>\n        </ion-row>\n        <ion-item class=\"ion-margin\" *ngFor=\"let orderDetails of productsArray\">\n            <ion-row>\n                <ion-col size=\"8\">{{orderDetails.name}} -{{orderDetails.model}} ({{orderDetails.quantity}} x {{orderDetails.price}})\n                    <div *ngIf=\"orderDetails.option.length >1\">(Size:{{orderDetails.option[0].value}})</div>\n                    <div *ngIf=\"orderDetails.option.length == 1\">{{orderDetails.option[0].value}}</div>\n                    <div *ngIf=\"orderDetails.option.length >1\">{{orderDetails.option[1].value}}-{{orderDetails.option[0].value}}</div>\n                </ion-col>\n                <ion-col size=\"4\">{{orderDetails.total | currency:'INR':true}}</ion-col>\n            </ion-row>\n        </ion-item>\n    </div>\n    <ion-card *ngFor=\"let cost of orderTotals\">\n        <ion-row class=\"backgroundTotals\">\n            <ion-col size=\"8\" class=\"orderTotalsTitle\">\n                {{cost.title}}\n            </ion-col>\n            <ion-col size=\"4\" class=\"orderTotals\">\n                {{cost.value | currency:'INR':true}}\n            </ion-col>\n        </ion-row>\n    </ion-card>\n    <hr>\n    <ion-card>\n        <ion-card-header>\n            <ion-title>Delivery Details</ion-title>\n        </ion-card-header>\n        <ion-item>\n            <ion-label>\n                <h3>{{firstname}} {{lastname}}</h3>\n                <h3>{{payment_company}}</h3>\n                <h3>{{payment_address_1}}</h3>\n                <h3>{{payment_address_2}}</h3>\n                <h3>{{payment_city}}, {{payment_zone}}, {{payment_postcode}}</h3>\n                <ion-item lines=\"none\">\n                    <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n                    <ion-label>{{email}}</ion-label>\n                </ion-item>\n                <ion-item lines=\"none\">\n                    <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n                    <ion-label>{{telephone}}</ion-label>\n                </ion-item>\n            </ion-label>\n        </ion-item>\n    </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/order-details/order-details-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function() { return OrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");




const routes = [
    {
        path: '',
        component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }
];
let OrderDetailsPageRoutingModule = class OrderDetailsPageRoutingModule {
};
OrderDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details-routing.module */ "./src/app/pages/order-details/order-details-routing.module.ts");
/* harmony import */ var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-details.page */ "./src/app/pages/order-details/order-details.page.ts");







let OrderDetailsPageModule = class OrderDetailsPageModule {
};
OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]
        ],
        declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })
], OrderDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".order-details .order ion-row {\n  width: 100%;\n}\n.order-details .order ion-row ion-col {\n  width: 40%;\n  float: left;\n  border: 1px solid #edebeb;\n  background-color: whitesmoke;\n}\n.order-details .order {\n  padding: 16px;\n  margin-top: 10px;\n}\n.order-details .subhead {\n  padding-top: 8px;\n}\n.order-details .subhead ion-row {\n  font-size: 16px;\n  color: #3d7ce2;\n  margin-left: 14px;\n  margin-right: 14px;\n}\n.order-details .subhead ion-row ion-col {\n  color: black;\n  border: 1px solid #edebeb !important;\n}\n.order-details .deliverDetails1 ion-row {\n  font-size: 16px;\n  color: #3d7ce2;\n  margin-left: 14px;\n}\n.order-details .deliverDetails1 p {\n  margin-left: 20px;\n  margin-bottom: -5px;\n  font-size: 1.5rem;\n}\n.order-details .cartion {\n  margin-left: 100px;\n}\n.order-details .cart {\n  padding-left: 80%;\n  font-size: 40px;\n  color: #15a033;\n}\n.order-details .subhead ion-row .ordercol1 {\n  border: 1px solid #edebeb !important;\n  width: 77%;\n}\n.order-details .subhead ion-row .ordercol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n.order-details .orderDetails ion-row {\n  padding-left: 15px;\n}\n.order-details .orderDetails ion-row .ordercol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n}\n.order-details .orderDetails ion-row .ordercol2 {\n  border: 1px solid #edebeb !important;\n  width: 21%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNDLFdBQUE7QUNBTDtBREVHO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FDQUw7QURFRztFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ0FMO0FERUc7RUFDRSxnQkFBQTtBQ0FMO0FERUc7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBTDtBREVHO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0FDQUw7QURHRztFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNETDtBREdHO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDREw7QURpQkc7RUFDRSxrQkFBQTtBQ2ZMO0FEaUJHO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2ZMO0FEa0JJO0VBQ0csb0NBQUE7RUFDQSxVQUFBO0FDaEJQO0FEa0JLO0VBQ0Usb0NBQUE7RUFDSixVQUFBO0FDaEJIO0FEb0JLO0VBQ0Ysa0JBQUE7QUNsQkg7QURvQks7RUFDRSxvQ0FBQTtFQUNBLFVBQUE7QUNsQlA7QURvQks7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNsQkgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyLWRldGFpbHN7XG4gICAgLm9yZGVyIGlvbi1yb3cge1xuICAgICB3aWR0aDogMTAwJTtcbiAgIH1cbiAgIC5vcmRlciBpb24tcm93IGlvbi1jb2wge1xuICAgICB3aWR0aDogNDAlO1xuICAgICBmbG9hdDogbGVmdDtcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYjtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgIH1cbiAgIC5vcmRlciB7XG4gICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICB9XG4gICAuc3ViaGVhZCB7XG4gICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICB9XG4gICAuc3ViaGVhZCBpb24tcm93IHtcbiAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICBjb2xvcjogIzNkN2NlMjtcbiAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gICAgIG1hcmdpbi1yaWdodDogMTRweDtcbiAgIH1cbiAgIC5zdWJoZWFkIGlvbi1yb3cgaW9uLWNvbCB7XG4gICAgIGNvbG9yOiBibGFjaztcbiAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgfVxuICAgXG4gICAuZGVsaXZlckRldGFpbHMxIGlvbi1yb3cge1xuICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgIGNvbG9yOiAjM2Q3Y2UyO1xuICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgIH1cbiAgIC5kZWxpdmVyRGV0YWlsczEgcCB7XG4gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgIH1cbiAgIC8vIC5hbGluZSB7XG4gICAvLyAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgIC8vICAgfVxuICAgLy8gICAuaXRlbSBpb24tcm93IGlvbi1jb2wge1xuICAgLy8gICAgIGJvcmRlcjogMS41cHggc29saWQgIzg4OCAhaW1wb3J0YW50O1xuICAgLy8gICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xuICAgLy8gICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgLy8gICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgIC8vICAgfVxuICAgLy8gICAuaXRlbSBpb24tcm93IC50b3RhbCB7XG4gICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAvLyAgIH1cbiAgIFxuICAgLmNhcnRpb24ge1xuICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICB9XG4gICAuY2FydCB7XG4gICAgIHBhZGRpbmctbGVmdDogODAlO1xuICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgfVxuICAgIC5zdWJoZWFkIGlvbi1yb3cge1xuICAgIC5vcmRlcmNvbDEge1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgICAgICB3aWR0aDo3NyU7XG4gICB9XG4gICAgIC5vcmRlcmNvbDJ7XG4gICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICAgd2lkdGg6MjMlO1xuICAgICB9XG4gICBcbiAgIH1cbiAgICAgLm9yZGVyRGV0YWlscyBpb24tcm93e1xuICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgIFxuICAgICAub3JkZXJjb2wxIHtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gICAgICAgd2lkdGg6NzUlO1xuICAgfVxuICAgICAub3JkZXJjb2wye1xuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgIHdpZHRoOjIxJTtcbiAgICAgfVxuICAgfVxuICAgXG4gICBcbiAgIFxuICAgfVxuICAgIiwiLm9yZGVyLWRldGFpbHMgLm9yZGVyIGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlciBpb24tcm93IGlvbi1jb2wge1xuICB3aWR0aDogNDAlO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ub3JkZXItZGV0YWlscyAuc3ViaGVhZCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4ub3JkZXItZGV0YWlscyAuc3ViaGVhZCBpb24tcm93IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzNkN2NlMjtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xufVxuLm9yZGVyLWRldGFpbHMgLmRlbGl2ZXJEZXRhaWxzMSBpb24tcm93IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzNkN2NlMjtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4ub3JkZXItZGV0YWlscyAuZGVsaXZlckRldGFpbHMxIHAge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ub3JkZXItZGV0YWlscyAuY2FydGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5jYXJ0IHtcbiAgcGFkZGluZy1sZWZ0OiA4MCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMxNWEwMzM7XG59XG4ub3JkZXItZGV0YWlscyAuc3ViaGVhZCBpb24tcm93IC5vcmRlcmNvbDEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NyU7XG59XG4ub3JkZXItZGV0YWlscyAuc3ViaGVhZCBpb24tcm93IC5vcmRlcmNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMyU7XG59XG4ub3JkZXItZGV0YWlscyAub3JkZXJEZXRhaWxzIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4ub3JkZXItZGV0YWlscyAub3JkZXJEZXRhaWxzIGlvbi1yb3cgLm9yZGVyY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDc1JTtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlckRldGFpbHMgaW9uLXJvdyAub3JkZXJjb2wyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDogMjElO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/order-details/order-details.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-details/order-details.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function() { return OrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear




let OrderDetailsPage = class OrderDetailsPage {
    constructor(navCtrl, users, toastCtrl, route) {
        this.navCtrl = navCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.myOrderDeliver = [];
        this.productsArray = [];
        this.orderTotals = [];
        var _this = this;
    }
    addToCart(order_id) {
        var _this = this;
        let addProduct;
        addProduct = {
            order_id: this.order_id,
        };
        _this.users.orderToCart(addProduct, function (result, data) {
            if (result == "1") {
                _this.toastMessage = "Products added to cart";
                _this.presentToast();
            }
            else {
                this.networkService.showErrorAlert();
            }
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            // toast.onDidDismiss(() => {
            // });
            toast.present();
        });
    }
    ngOnInit() {
        var _this = this;
        this.route.queryParams.subscribe((param) => {
            let orderDetails = JSON.parse(param["data"]);
            _this.order_id = orderDetails.order_id;
            _this.date_added = orderDetails.date_added;
            _this.total = orderDetails.total;
            _this.payment_method = orderDetails.payment_method;
            _this.productsArray = orderDetails.products;
            _this.firstname = orderDetails.firstname;
            _this.lastname = orderDetails.lastname;
            _this.payment_address_2 = orderDetails.payment_address_2;
            _this.payment_city = orderDetails.payment_city;
            _this.payment_zone = orderDetails.payment_zone;
            _this.payment_country = orderDetails.payment_country;
            _this.payment_method = orderDetails.payment_method;
            _this.payment_address_1 = orderDetails.payment_address_1;
            _this.payment_company = orderDetails.payment_company;
            _this.email = orderDetails.email;
            _this.telephone = orderDetails.telephone;
            _this.payment_postcode = orderDetails.payment_postcode;
            _this.name = orderDetails.name;
            _this.postcode = orderDetails.postcode;
            _this.orderTotals = orderDetails.totals;
        });
    }
};
OrderDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-order-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-details.page.scss */ "./src/app/pages/order-details/order-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], OrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-details-order-details-module-es2015.js.map