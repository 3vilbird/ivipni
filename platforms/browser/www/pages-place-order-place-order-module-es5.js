function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-place-order-place-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/place-order/place-order.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/place-order/place-order.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPlaceOrderPlaceOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Your Order Summary</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"address\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label><b>Delivery Details</b></ion-label>\r\n  </ion-item>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>{{firstname}} {{lastname}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <h2>{{company}}</h2>\r\n      <h2>{{address_1}}</h2>\r\n      <h2>{{address_2}}</h2>\r\n      <h2>{{city}}, {{name}}, {{postcode}}</h2>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\r\n        <ion-label>{{email}}</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\r\n        <ion-label>{{telephone}}</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-item>\r\n    <ion-label><b>Order Details</b></ion-label>\r\n  </ion-item>\r\n  <ion-item *ngFor=\"let data of dataArray\">\r\n    <ion-label>\r\n      <h2>{{data.name}}-{{data.model}}</h2>\r\n      <h3 *ngIf=\"data.option.length >1\">(Size:{{data.option[0].value}})</h3>\r\n      <h3 *ngIf=\"data.option.length == 1\">{{data.option[0].value}}</h3>\r\n      <h3 *ngIf=\"data.option.length >1\">{{data.option[1].value}}</h3>\r\n    </ion-label>\r\n    <div>\r\n      <ion-label>\r\n        <h2>Quantity: {{data.quantity}}</h2>\r\n      </ion-label>\r\n      <ion-label>\r\n        <h2>{{data.total | currency:'INR':true}}</h2>\r\n      </ion-label>\r\n    </div>\r\n  </ion-item>\r\n  \r\n  <ion-card class=\"ion-margin-top\">\r\n    <div *ngFor=\"let cost of allTotal\">\r\n      <ion-row class=\"addressrow\">\r\n        <ion-col>\r\n          {{cost.title}}\r\n        </ion-col>\r\n        <ion-col>\r\n          {{cost.value | currency:'INR':true}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button small class=\"ion-margin\" (click)=\"pay()\" shape=\"round\" expand=\"full\">Proceed To Pay</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/place-order/place-order-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/place-order/place-order-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PlaceOrderPageRoutingModule */

  /***/
  function srcAppPagesPlaceOrderPlaceOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceOrderPageRoutingModule", function () {
      return PlaceOrderPageRoutingModule;
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


    var _place_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./place-order.page */
    "./src/app/pages/place-order/place-order.page.ts");

    var routes = [{
      path: '',
      component: _place_order_page__WEBPACK_IMPORTED_MODULE_3__["PlaceOrderPage"]
    }];

    var PlaceOrderPageRoutingModule = function PlaceOrderPageRoutingModule() {
      _classCallCheck(this, PlaceOrderPageRoutingModule);
    };

    PlaceOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PlaceOrderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/place-order/place-order.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/place-order/place-order.module.ts ***!
    \*********************************************************/

  /*! exports provided: PlaceOrderPageModule */

  /***/
  function srcAppPagesPlaceOrderPlaceOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceOrderPageModule", function () {
      return PlaceOrderPageModule;
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


    var _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./place-order-routing.module */
    "./src/app/pages/place-order/place-order-routing.module.ts");
    /* harmony import */


    var _place_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./place-order.page */
    "./src/app/pages/place-order/place-order.page.ts");

    var PlaceOrderPageModule = function PlaceOrderPageModule() {
      _classCallCheck(this, PlaceOrderPageModule);
    };

    PlaceOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _place_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["PlaceOrderPageRoutingModule"]],
      declarations: [_place_order_page__WEBPACK_IMPORTED_MODULE_6__["PlaceOrderPage"]]
    })], PlaceOrderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/place-order/place-order.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/place-order/place-order.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPlaceOrderPlaceOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".placeorder button {\n  text-align: center;\n  text-transform: lowercase;\n}\n.placeorder .card-md {\n  line-height: 2;\n}\n.placeorder .card-ios {\n  line-height: 2;\n}\n.placeorder .card-md p {\n  margin-right: 0;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 2;\n}\n.placeorder .card-ios p {\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 1.4rem;\n  font-weight: normal;\n  line-height: 2;\n}\n.placeorder .addresplaceorder {\n  margin-top: 20px;\n  background-color: lightgray;\n}\n.placeorder ion-card div ion-row .clas1 {\n  margin-bottom: -10px;\n  color: black;\n}\n.placeorder ion-card div ion-row .clas2 {\n  margin-bottom: -25px;\n}\n.placeorder ion-card div ion-row .clas3 {\n  margin-bottom: -20px;\n}\n.placeorder .row p {\n  padding-left: 15px;\n  padding: 5px;\n}\n.placeorder ion-card div ion-row .clas4 {\n  margin-bottom: -15px;\n}\n.placeorder .dataname {\n  width: 20px;\n}\n.placeorder ion-card {\n  margin-top: -10px;\n}\n.placeorder .clas3place {\n  margin-right: -100px;\n}\n.aline ion-row {\n  padding-left: 10px;\n}\n.aline ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n}\n.aline ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  width: 25%;\n}\n.item ion-row {\n  padding-left: 10px;\n}\n.item ion-row .placecol1 {\n  border: 1px solid #edebeb !important;\n  width: 75%;\n  color: gray;\n}\n.item ion-row .placecol2 {\n  border: 1px solid #edebeb !important;\n  color: gray;\n  width: 25%;\n}\n.platform-ios .ptag {\n  margin-top: -1px;\n  margin-bottom: -1px;\n}\n.platform-android .ptag {\n  margin-top: 1px;\n  margin-bottom: -1px;\n}\n.placeorderrow {\n  padding-left: 10px;\n  color: #387ef5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGxhY2Utb3JkZXIvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxwbGFjZS1vcmRlclxccGxhY2Utb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FDQU47QURHSTtFQUNFLGNBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNGTjtBRElJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRk47QURhSTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7QUNYTjtBRGtCSTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQ2hCTjtBRGtCSTtFQUNFLG9CQUFBO0FDaEJOO0FEa0JJO0VBQ0Usb0JBQUE7QUNoQk47QURrQkk7RUFFRSxrQkFBQTtFQUNBLFlBQUE7QUNqQk47QURtQkk7RUFDRSxvQkFBQTtBQ2pCTjtBRG1CSTtFQUNFLFdBQUE7QUNqQk47QURvQkk7RUFDRSxpQkFBQTtBQ2xCTjtBRG9CSTtFQUNFLG9CQUFBO0FDbEJOO0FEd0JFO0VBQ0ksa0JBQUE7QUNyQk47QURzQkc7RUFDRyxvQ0FBQTtFQUNBLFVBQUE7QUNwQk47QUR1Qkk7RUFDRSxvQ0FBQTtFQUNKLFVBQUE7QUNyQkY7QUQyQkU7RUFDQSxrQkFBQTtBQ3hCRjtBRDJCSTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNGLFdBQUE7QUN6Qko7QUQ4Qkk7RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFFSixVQUFBO0FDN0JGO0FEb0NFO0VBRUcsZ0JBQUE7RUFDRCxtQkFBQTtBQ2xDSjtBRHNDSTtFQUNFLGVBQUE7RUFDQyxtQkFBQTtBQ25DUDtBRHNDRTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ25DTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BsYWNlLW9yZGVyL3BsYWNlLW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGFjZW9yZGVye1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQtbWQge1xyXG4gICAgICBsaW5lLWhlaWdodDogMi4wO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaW9zIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuMDtcclxuICAgIH1cclxuICBcclxuICAgIC5jYXJkLW1kIHAge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuMDtcclxuICAgIH1cclxuICAgIC5jYXJkLWlvcyBwIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi4wO1xyXG4gICAgfVxyXG4gICAgLy8gLml0ZW0gaW9uLXJvdyBpb24tY29sIHtcclxuICAgIC8vICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjODg4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgIHBhZGRpbmc6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIC8vICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgLy8gfVxyXG4gICAgLy8gLml0ZW0gaW9uLXJvdyAudG90YWwge1xyXG4gICAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIC8vIH1cclxuICAgIC5hZGRyZXNwbGFjZW9yZGVyIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gLmFsaW5lIHtcclxuICAgIC8vICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIC8vICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAvLyB9XHJcbiAgICBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQgZGl2IGlvbi1yb3cgLmNsYXMyIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczMge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuICAgIH1cclxuICAgIC5yb3cgcCB7XHJcbiAgICAgIC8vbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQgZGl2IGlvbi1yb3cgLmNsYXM0IHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XHJcbiAgICB9XHJcbiAgICAuZGF0YW5hbWUge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2xhczNwbGFjZSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTEwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gICAgXHJcbiAgXHJcbiAgLmFsaW5lIGlvbi1yb3cge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgIC5wbGFjZWNvbDF7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6NzUlO1xyXG4gICAgLy9tYXgtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAgIC5wbGFjZWNvbDJ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICB3aWR0aDoyNSU7XHJcbiAgLy9tYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAuaXRlbSBpb24tcm93e1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAvL21hcmdpbjogLTJweDtcclxuICBcclxuICAgIC5wbGFjZWNvbDEge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOjc1JTtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAvL21hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAtMThweDtcclxuICAgICAvLyBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICAgIC5wbGFjZWNvbDJ7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgLy8gbWFyZ2luLWJvdHRvbTogLTE4cHg7XHJcbiAgd2lkdGg6MjUlO1xyXG4gICAvL21hcmdpbi10b3A6IC0ycHg7XHJcbiAgXHJcbiAgXHJcbiAgLy9tYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGxhdGZvcm0taW9zIC5wdGFne1xyXG4gICAgLy9wYWRkaW5nLXRvcDogLTVweDtcclxuICAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgICAvLyBwYWRkaW5nLWJvdHRvbTogLTEwJTtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnBsYXRmb3JtLWFuZHJvaWQgLnB0YWd7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgICAgICB9XHJcbiAgXHJcbiAgLnBsYWNlb3JkZXJyb3d7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgY29sb3I6ICMzODdlZjU7XHJcbiAgICB9XHJcbiAgIFxyXG4gIC8vIC5wbGFjZW9yZGVyc3BhbmRpdntcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgLy8gfSIsIi5wbGFjZW9yZGVyIGJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5wbGFjZW9yZGVyIC5jYXJkLW1kIHtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuY2FyZC1pb3Mge1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5wbGFjZW9yZGVyIC5jYXJkLW1kIHAge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuY2FyZC1pb3MgcCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG4ucGxhY2VvcmRlciAuYWRkcmVzcGxhY2VvcmRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5wbGFjZW9yZGVyIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzMSB7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4ucGxhY2VvcmRlciBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczIge1xuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcbn1cbi5wbGFjZW9yZGVyIGlvbi1jYXJkIGRpdiBpb24tcm93IC5jbGFzMyB7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuLnBsYWNlb3JkZXIgLnJvdyBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ucGxhY2VvcmRlciBpb24tY2FyZCBkaXYgaW9uLXJvdyAuY2xhczQge1xuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbn1cbi5wbGFjZW9yZGVyIC5kYXRhbmFtZSB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnBsYWNlb3JkZXIgaW9uLWNhcmQge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5wbGFjZW9yZGVyIC5jbGFzM3BsYWNlIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTAwcHg7XG59XG5cbi5hbGluZSBpb24tcm93IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmFsaW5lIGlvbi1yb3cgLnBsYWNlY29sMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDc1JTtcbn1cbi5hbGluZSBpb24tcm93IC5wbGFjZWNvbDIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5pdGVtIGlvbi1yb3cge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uaXRlbSBpb24tcm93IC5wbGFjZWNvbDEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NSU7XG4gIGNvbG9yOiBncmF5O1xufVxuLml0ZW0gaW9uLXJvdyAucGxhY2Vjb2wyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xuICBjb2xvcjogZ3JheTtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnBsYXRmb3JtLWlvcyAucHRhZyB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5wbGF0Zm9ybS1hbmRyb2lkIC5wdGFnIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4ucGxhY2VvcmRlcnJvdyB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICMzODdlZjU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/place-order/place-order.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/place-order/place-order.page.ts ***!
    \*******************************************************/

  /*! exports provided: PlaceOrderPage */

  /***/
  function srcAppPagesPlaceOrderPlaceOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaceOrderPage", function () {
      return PlaceOrderPage;
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

    var PlaceOrderPage =
    /*#__PURE__*/
    function () {
      function PlaceOrderPage(route, router) {
        _classCallCheck(this, PlaceOrderPage);

        this.route = route;
        this.router = router;
        this.dataArray = [];
        this.allTotal = [];
      }

      _createClass(PlaceOrderPage, [{
        key: "pay",
        value: function pay() {
          var placeObj = {
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
            allTotal: this.allTotal
          }; // this.navCtrl.push(PaymentPage, placeObj);
          // navigate to payment page

          var navigationExtras = {
            queryParams: {
              data: JSON.stringify(placeObj)
            }
          };
          this.router.navigate(["/payment"], navigationExtras);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (param) {
            var cheakoutDetails = JSON.parse(param["data"]); // loading the data from the url

            _this.email = cheakoutDetails.email;
            _this.telephone = cheakoutDetails.telephone;
            _this.address_id = cheakoutDetails.address_id;
            _this.customer_id = cheakoutDetails.customer_id;
            _this.firstname = cheakoutDetails.firstname;
            _this.lastname = cheakoutDetails.lastname;
            _this.company = cheakoutDetails.company;
            _this.address_1 = cheakoutDetails.address_1;
            _this.address_2 = cheakoutDetails.address_2;
            _this.city = cheakoutDetails.city;
            _this.postcode = cheakoutDetails.postcode;
            _this.zone_id = cheakoutDetails.zone_id;
            _this.name = cheakoutDetails.name;
            _this.dataArray = cheakoutDetails.dataArray;
            _this.cartTotal = cheakoutDetails.cartTotal;
            _this.allTotal = cheakoutDetails.allTotal;
          });
        }
      }]);

      return PlaceOrderPage;
    }();

    PlaceOrderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PlaceOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-place-order",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./place-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/place-order/place-order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./place-order.page.scss */
      "./src/app/pages/place-order/place-order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], PlaceOrderPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-place-order-place-order-module-es5.js.map