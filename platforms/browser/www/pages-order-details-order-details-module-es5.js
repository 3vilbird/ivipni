function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-details-order-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrderDetailsOrderDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\r\n  Generated template for the OrderDetailsPage page.\r\n\r\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          </ion-buttons>\r\n        <ion-title>Order Details</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"order-details\">\r\n    <div class=\"order\">\r\n        <ion-row>\r\n            <ion-col>Order Number</ion-col>\r\n            <ion-col>{{order_id}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>Date</ion-col>\r\n            <ion-col>{{date_added}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>Total</ion-col>\r\n            <ion-col>{{total | currency:'INR':true}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>Payment Method</ion-col>\r\n            <ion-col>{{payment_method}}</ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col>Status</ion-col>\r\n            <ion-col>{{name}}</ion-col>\r\n        </ion-row>\r\n    </div>\r\n    <div>\r\n        <ion-item>\r\n            <ion-label><b>Order Details</b></ion-label>\r\n            <ion-icon name=\"cart\" color=\"success\" slot=\"end\" (click)=\"addToCart(order_id)\"></ion-icon>\r\n        </ion-item>\r\n        <ion-row class=\"ion-margin\">\r\n            <ion-col size=\"8\"><b>Products</b></ion-col>\r\n            <ion-col size=\"4\"><b>Total</b></ion-col>\r\n        </ion-row>\r\n        <ion-item class=\"ion-margin\" *ngFor=\"let orderDetails of productsArray\">\r\n            <ion-row>\r\n                <ion-col size=\"8\">{{orderDetails.name}} -{{orderDetails.model}} ({{orderDetails.quantity}} x {{orderDetails.price}})\r\n                    <div *ngIf=\"orderDetails.option.length >1\">(Size:{{orderDetails.option[0].value}})</div>\r\n                    <div *ngIf=\"orderDetails.option.length == 1\">{{orderDetails.option[0].value}}</div>\r\n                    <div *ngIf=\"orderDetails.option.length >1\">{{orderDetails.option[1].value}}-{{orderDetails.option[0].value}}</div>\r\n                </ion-col>\r\n                <ion-col size=\"4\">{{orderDetails.total | currency:'INR':true}}</ion-col>\r\n            </ion-row>\r\n        </ion-item>\r\n    </div>\r\n    <ion-card *ngFor=\"let cost of orderTotals\">\r\n        <ion-row class=\"backgroundTotals\">\r\n            <ion-col size=\"8\" class=\"orderTotalsTitle\">\r\n                {{cost.title}}\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"orderTotals\">\r\n                {{cost.value | currency:'INR':true}}\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-card>\r\n    <hr>\r\n    <ion-card>\r\n        <ion-card-header>\r\n            <ion-title>Delivery Details</ion-title>\r\n        </ion-card-header>\r\n        <ion-item>\r\n            <ion-label>\r\n                <h3>{{firstname}} {{lastname}}</h3>\r\n                <h3>{{payment_company}}</h3>\r\n                <h3>{{payment_address_1}}</h3>\r\n                <h3>{{payment_address_2}}</h3>\r\n                <h3>{{payment_city}}, {{payment_zone}}, {{payment_postcode}}</h3>\r\n                <ion-item lines=\"none\">\r\n                    <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\r\n                    <ion-label>{{email}}</ion-label>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                    <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\r\n                    <ion-label>{{telephone}}</ion-label>\r\n                </ion-item>\r\n            </ion-label>\r\n        </ion-item>\r\n    </ion-card>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/order-details/order-details-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/order-details/order-details-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: OrderDetailsPageRoutingModule */

  /***/
  function srcAppPagesOrderDetailsOrderDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsPageRoutingModule", function () {
      return OrderDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./order-details.page */
    "./src/app/pages/order-details/order-details.page.ts");

    var routes = [{
      path: '',
      component: _order_details_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailsPage"]
    }];

    var OrderDetailsPageRoutingModule = function OrderDetailsPageRoutingModule() {
      _classCallCheck(this, OrderDetailsPageRoutingModule);
    };

    OrderDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrderDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/order-details/order-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/order-details/order-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: OrderDetailsPageModule */

  /***/
  function srcAppPagesOrderDetailsOrderDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function () {
      return OrderDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./order-details-routing.module */
    "./src/app/pages/order-details/order-details-routing.module.ts");
    /* harmony import */


    var _order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./order-details.page */
    "./src/app/pages/order-details/order-details.page.ts");

    var OrderDetailsPageModule = function OrderDetailsPageModule() {
      _classCallCheck(this, OrderDetailsPageModule);
    };

    OrderDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsPageRoutingModule"]],
      declarations: [_order_details_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailsPage"]]
    })], OrderDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/order-details/order-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/order-details/order-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrderDetailsOrderDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order-details .order ion-row {\n  width: 100%;\n}\n.order-details .order ion-row ion-col {\n  width: 40%;\n  float: left;\n  border: 1px solid #edebeb;\n  background-color: whitesmoke;\n}\n.order-details .order {\n  padding: 16px;\n  margin-top: 10px;\n}\n.order-details .subhead {\n  padding-top: 8px;\n}\n.order-details .subhead ion-row {\n  font-size: 16px;\n  color: #3d7ce2;\n  margin-left: 14px;\n  margin-right: 14px;\n}\n.order-details .subhead ion-row ion-col {\n  color: black;\n  border: 1px solid #edebeb !important;\n}\n.order-details .deliverDetails1 ion-row {\n  font-size: 16px;\n  color: #3d7ce2;\n  margin-left: 14px;\n}\n.order-details .deliverDetails1 p {\n  margin-left: 20px;\n  margin-bottom: -5px;\n  font-size: 1.5rem;\n}\n.order-details .cartion {\n  margin-left: 100px;\n}\n.order-details .cart {\n  padding-left: 80%;\n  font-size: 40px;\n  color: #15a033;\n}\n.order-details .subhead ion-row .ordercol1 {\n  border: 1px solid #edebeb !important;\n  width: 77%;\n}\n.order-details .subhead ion-row .ordercol2 {\n  border: 1px solid #edebeb !important;\n  width: 23%;\n}\n.order-details .orderDetails ion-row {\n  padding-left: 15px;\n}\n.order-details .orderDetails ion-row .ordercol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n}\n.order-details .orderDetails ion-row .ordercol2 {\n  border: 1px solid #edebeb !important;\n  width: 21%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlscy9EOlxcU2VlbWFcXFByb2plY3RcXGl2aXBuaS9zcmNcXGFwcFxccGFnZXNcXG9yZGVyLWRldGFpbHNcXG9yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0MsV0FBQTtBQ0FMO0FERUc7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNBTDtBREVHO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDQUw7QURFRztFQUNFLGdCQUFBO0FDQUw7QURFRztFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FMO0FERUc7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7QUNBTDtBREdHO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RMO0FER0c7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNETDtBRGlCRztFQUNFLGtCQUFBO0FDZkw7QURpQkc7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDZkw7QURrQkk7RUFDRyxvQ0FBQTtFQUNBLFVBQUE7QUNoQlA7QURrQks7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNoQkg7QURvQks7RUFDRixrQkFBQTtBQ2xCSDtBRG9CSztFQUNFLG9DQUFBO0VBQ0EsVUFBQTtBQ2xCUDtBRG9CSztFQUNFLG9DQUFBO0VBQ0osVUFBQTtBQ2xCSCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXItZGV0YWlsc3tcclxuICAgIC5vcmRlciBpb24tcm93IHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgfVxyXG4gICAub3JkZXIgaW9uLXJvdyBpb24tY29sIHtcclxuICAgICB3aWR0aDogNDAlO1xyXG4gICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWI7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgfVxyXG4gICAub3JkZXIge1xyXG4gICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgfVxyXG4gICAuc3ViaGVhZCB7XHJcbiAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgfVxyXG4gICAuc3ViaGVhZCBpb24tcm93IHtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgY29sb3I6ICMzZDdjZTI7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICB9XHJcbiAgIC5zdWJoZWFkIGlvbi1yb3cgaW9uLWNvbCB7XHJcbiAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBcclxuICAgLmRlbGl2ZXJEZXRhaWxzMSBpb24tcm93IHtcclxuICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgY29sb3I6ICMzZDdjZTI7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgIH1cclxuICAgLmRlbGl2ZXJEZXRhaWxzMSBwIHtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xyXG4gICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICB9XHJcbiAgIC8vIC5hbGluZSB7XHJcbiAgIC8vICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAvLyAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgIC8vICAgfVxyXG4gICAvLyAgIC5pdGVtIGlvbi1yb3cgaW9uLWNvbCB7XHJcbiAgIC8vICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICM4ODggIWltcG9ydGFudDtcclxuICAgLy8gICAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAvLyAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgIC8vICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgIC8vICAgfVxyXG4gICAvLyAgIC5pdGVtIGlvbi1yb3cgLnRvdGFsIHtcclxuICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAvLyAgIH1cclxuICAgXHJcbiAgIC5jYXJ0aW9uIHtcclxuICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgIH1cclxuICAgLmNhcnQge1xyXG4gICAgIHBhZGRpbmctbGVmdDogODAlO1xyXG4gICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICBjb2xvcjogIzE1YTAzMztcclxuICAgfVxyXG4gICAgLnN1YmhlYWQgaW9uLXJvdyB7XHJcbiAgICAub3JkZXJjb2wxIHtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICAgICAgIHdpZHRoOjc3JTtcclxuICAgfVxyXG4gICAgIC5vcmRlcmNvbDJ7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgIHdpZHRoOjIzJTtcclxuICAgICB9XHJcbiAgIFxyXG4gICB9XHJcbiAgICAgLm9yZGVyRGV0YWlscyBpb24tcm93e1xyXG4gICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICBcclxuICAgICAub3JkZXJjb2wxIHtcclxuICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICAgICAgIHdpZHRoOjc1JTtcclxuICAgfVxyXG4gICAgIC5vcmRlcmNvbDJ7XHJcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgIHdpZHRoOjIxJTtcclxuICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICBcclxuICAgfVxyXG4gICAiLCIub3JkZXItZGV0YWlscyAub3JkZXIgaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyIHtcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjM2Q3Y2UyO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuLm9yZGVyLWRldGFpbHMgLnN1YmhlYWQgaW9uLXJvdyBpb24tY29sIHtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG59XG4ub3JkZXItZGV0YWlscyAuZGVsaXZlckRldGFpbHMxIGlvbi1yb3cge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjM2Q3Y2UyO1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5kZWxpdmVyRGV0YWlsczEgcCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5vcmRlci1kZXRhaWxzIC5jYXJ0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLm9yZGVyLWRldGFpbHMgLmNhcnQge1xuICBwYWRkaW5nLWxlZnQ6IDgwJTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzE1YTAzMztcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cgLm9yZGVyY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDc3JTtcbn1cbi5vcmRlci1kZXRhaWxzIC5zdWJoZWFkIGlvbi1yb3cgLm9yZGVyY29sMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIzJTtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlckRldGFpbHMgaW9uLXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5vcmRlci1kZXRhaWxzIC5vcmRlckRldGFpbHMgaW9uLXJvdyAub3JkZXJjb2wxIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICB3aWR0aDogNzUlO1xufVxuLm9yZGVyLWRldGFpbHMgLm9yZGVyRGV0YWlscyBpb24tcm93IC5vcmRlcmNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyMSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/order-details/order-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/order-details/order-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: OrderDetailsPage */

  /***/
  function srcAppPagesOrderDetailsOrderDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderDetailsPage", function () {
      return OrderDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear


    var OrderDetailsPage =
    /*#__PURE__*/
    function () {
      function OrderDetailsPage(navCtrl, users, toastCtrl, route) {
        _classCallCheck(this, OrderDetailsPage);

        this.navCtrl = navCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.myOrderDeliver = [];
        this.productsArray = [];
        this.orderTotals = [];

        var _this = this;
      }

      _createClass(OrderDetailsPage, [{
        key: "addToCart",
        value: function addToCart(order_id) {
          var _this = this;

          var addProduct;
          addProduct = {
            order_id: this.order_id
          };

          _this.users.orderToCart(addProduct, function (result, data) {
            if (result == "1") {
              _this.toastMessage = "Products added to cart";

              _this.presentToast();
            } else {
              this.networkService.showErrorAlert();
            }
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: this.toastMessage,
                      duration: 1000,
                      position: "middle"
                    });

                  case 2:
                    toast = _context.sent;
                    // toast.onDidDismiss(() => {
                    // });
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (param) {
            var orderDetails = JSON.parse(param["data"]);
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
      }]);

      return OrderDetailsPage;
    }();

    OrderDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    OrderDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-order-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-details/order-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order-details.page.scss */
      "./src/app/pages/order-details/order-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], OrderDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-order-details-order-details-module-es5.js.map