(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Select delivery address\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"address\">\r\n  <ion-item lines=\"none\">\r\n    <ion-label><b>Delivery Address</b></ion-label>\r\n    <ion-icon name=\"add-circle-outline\" class=\"color\" slot=\"end\" (click)=\"checkoutFn()\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <ion-card *ngFor=\"let details of firstIndex\">\r\n    <ion-card-header class=\"ion-margin\">\r\n      <ion-card-title>{{details.firstname}} {{details.lastname}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content (click)=\"placeOrder(details)\">\r\n      <h2>{{details.company}}</h2>\r\n      <h2>{{details.address_1}}</h2>\r\n      <h2>{{details.address_2}}</h2>\r\n      <h2>{{details.city}}, {{details.name}}, {{details.postcode}}</h2>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\r\n        <ion-label>{{details.email}}</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\r\n        <ion-label>{{details.telephone}}</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-card *ngFor=\"let details of checkOutAddr\">\r\n    <ion-card-header>\r\n      <ion-item lines=\"none\">\r\n        <ion-card-title>{{details.firstname}} {{details.lastname}}</ion-card-title>\r\n        <ion-icon name=\"pencil-outline\" (click)=\"checkoutEdit(details)\" slot=\"end\"></ion-icon>\r\n      </ion-item>\r\n    </ion-card-header>\r\n    <ion-card-content (click)=\"placeOrder(details)\">\r\n      <h2>{{details.company}}</h2>\r\n      <h2>{{details.address_1}}</h2>\r\n      <h2>{{details.address_2}}</h2>\r\n      <h2>{{details.city}}, {{details.name}}, {{details.postcode}}</h2>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\r\n        <ion-label>{{details.email}}</ion-label>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\r\n        <ion-label>{{details.telephone}}</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <ion-button shape=\"round\" class=\"ion-margin\" expand=\"full\" color=\"medium\" (click)=\"deleteAddress(details)\">\r\n    Remove\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/address/address-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/address/address-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function() { return AddressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");




const routes = [
    {
        path: '',
        component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }
];
let AddressPageRoutingModule = class AddressPageRoutingModule {
};
AddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddressPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/address/address.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.module.ts ***!
  \*************************************************/
/*! exports provided: AddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address-routing.module */ "./src/app/pages/address/address-routing.module.ts");
/* harmony import */ var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address.page */ "./src/app/pages/address/address.page.ts");







let AddressPageModule = class AddressPageModule {
};
AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]
        ],
        declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })
], AddressPageModule);



/***/ }),

/***/ "./src/app/pages/address/address.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/address/address.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".address {\n  background-color: WhiteSmoke;\n}\n.address ion-card {\n  background-color: white;\n}\n.address .color {\n  color: green;\n}\n.address .card-ios {\n  margin: 12px 12px 12px 0px;\n}\n.address .card-md {\n  margin: 12px 12px 12px 0px;\n}\n.address .color1 {\n  color: gray;\n  font-size: 20px;\n  float: right;\n  padding-right: 10px;\n}\n.address .color2 {\n  color: gray;\n}\n.address ion-card-header {\n  padding: 0px;\n}\n.address .first b {\n  margin-left: 11px;\n  margin-top: 3px;\n  color: blue;\n}\n.address .last b {\n  margin-left: -20px;\n  color: blue;\n}\n.address .card-content-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 4px;\n  padding-bottom: 13px;\n  font-size: 1.4rem;\n  line-height: 2.3;\n}\n.address .card-content-ios {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 1.4rem;\n  line-height: 2.3;\n}\n.address ion-card-content ion-row p {\n  color: black;\n  margin-bottom: -5px;\n}\n.address ion-card-content ion-row ion-col {\n  margin-bottom: -14px;\n  margin-left: -5px;\n  margin-top: -5px;\n}\n.address .addressshow {\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9EOlxcU2VlbWFcXFByb2plY3RcXGl2aXBuaS9zcmNcXGFwcFxccGFnZXNcXGFkZHJlc3NcXGFkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hZGRyZXNzL2FkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBREFJO0VBQ0UsdUJBQUE7QUNFTjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FERUk7RUFDRSwwQkFBQTtBQ0FOO0FERUk7RUFDRSwwQkFBQTtBQ0FOO0FER0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0ROO0FESUk7RUFDRSxXQUFBO0FDRk47QURTSTtFQUNFLFlBQUE7QUNQTjtBRFVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1JOO0FEV0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNUTjtBRFlJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVk47QURZSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEY007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGVRO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDYlY7QURpQkk7RUFDRSxnQkFBQTtBQ2ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZXNzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbG9yIHtcclxuICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNhcmQtaW9zIHtcclxuICAgICAgbWFyZ2luOiAxMnB4IDEycHggMTJweCAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1tZCB7XHJcbiAgICAgIG1hcmdpbjogMTJweCAxMnB4IDEycHggMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbG9yMSB7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5jb2xvcjIge1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIGlvbi1jYXJkIHtcclxuICAgIC8vICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZmlyc3QgYiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxhc3QgYiB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZC1jb250ZW50LW1kIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1jb250ZW50LWlvcyB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgaW9uLXJvdyBwIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICAgICAgfVxyXG4gICAgICBpb24tcm93IHtcclxuICAgICAgICBpb24tY29sIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZHJlc3NzaG93IHtcclxuICAgICAgbWFyZ2luLXRvcDogLTNweDtcclxuICAgICAvLyBoZWlnaHQ6MzVweDtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxuICB9XHJcbiAgIiwiLmFkZHJlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLmFkZHJlc3MgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5hZGRyZXNzIC5jb2xvciB7XG4gIGNvbG9yOiBncmVlbjtcbn1cbi5hZGRyZXNzIC5jYXJkLWlvcyB7XG4gIG1hcmdpbjogMTJweCAxMnB4IDEycHggMHB4O1xufVxuLmFkZHJlc3MgLmNhcmQtbWQge1xuICBtYXJnaW46IDEycHggMTJweCAxMnB4IDBweDtcbn1cbi5hZGRyZXNzIC5jb2xvcjEge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uYWRkcmVzcyAuY29sb3IyIHtcbiAgY29sb3I6IGdyYXk7XG59XG4uYWRkcmVzcyBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWRkcmVzcyAuZmlyc3QgYiB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIGNvbG9yOiBibHVlO1xufVxuLmFkZHJlc3MgLmxhc3QgYiB7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgY29sb3I6IGJsdWU7XG59XG4uYWRkcmVzcyAuY2FyZC1jb250ZW50LW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM7XG59XG4uYWRkcmVzcyAuY2FyZC1jb250ZW50LWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM7XG59XG4uYWRkcmVzcyBpb24tY2FyZC1jb250ZW50IGlvbi1yb3cgcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcbn1cbi5hZGRyZXNzIGlvbi1jYXJkLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIHtcbiAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmFkZHJlc3MgLmFkZHJlc3NzaG93IHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/address/address.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/address/address.page.ts ***!
  \***********************************************/
/*! exports provided: AddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPage", function() { return AddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear







let AddressPage = class AddressPage {
    constructor(navCtrl, productServices, users, loadingCtrl, networkService, logger, route, router) {
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.users = users;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.route = route;
        this.router = router;
        this.checkOutAddr = [];
        this.checkOutAddrss = [];
        this.cartArray = [];
        this.firstIndex = [];
        var _this = this;
        _this.logger.debug("cartArray data " + _this.cartArray);
    }
    ngOnInit() {
        var _this = this;
        this.route.queryParams.subscribe((params) => {
            const mydata = JSON.parse(params["data"]);
            _this.cartArray = mydata.cartData;
            _this.cartTotal = mydata.cartTotal;
            _this.allTotal = mydata.allTotal;
        });
    }
    ionViewDidEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var _this = this;
            _this.logger.info("invoking ionviewDidEnter for address");
            let loading = yield _this.loadingCtrl.create({
                message: ``,
            });
            if (_this.networkService.nullConnection()) {
                _this.networkService.showNetworkAlert();
            }
            else {
                loading.present();
                this.productServices.getAddress(function (data) {
                    _this.logger.debug("checking Array in check out address details" + JSON.stringify(data));
                    _this.checkOutAddrss = data.orders;
                    if (_this.firstIndex.length == 0) {
                        _this.firstIndex.push(data.orders[0]);
                    }
                    _this.logger.debug("firstIndex" + JSON.stringify(_this.firstIndex));
                    if (_this.checkOutAddrss.length > 1) {
                        for (var i = 1; i < _this.checkOutAddrss.length; i++) {
                            _this.checkOutAddr.push(_this.checkOutAddrss[i]);
                        }
                    }
                    _this.logger.debug("remainingIndex:" + JSON.stringify(_this.checkOutAddr));
                    loading.dismiss();
                });
            }
        });
    }
    //  TODO checkout edit
    checkoutEdit(details) {
        var _this = this;
        _this.logger.info("invoking checkoutEdit");
        _this.logger.debug("checking the checkOutAddr before assinging to null" + this.checkOutAddr);
        _this.checkOutAddr = [];
        _this.logger.debug("checking the checkOutAddr after assinging to numm" + this.checkOutAddr);
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(details),
            },
        };
        _this.router.navigate(["/checkout"], navigationExtras);
        // _this.navCtrl.push(CheckoutPage, details);
        _this.logger.debug("cheking the addressObject: " + JSON.stringify(details));
    }
    //checkout function
    checkoutFn() {
        var _this = this;
        _this.logger.debug("checking the checkOutAddr before assinging to null" + this.checkOutAddr);
        _this.checkOutAddr = [];
        _this.logger.debug("checking the checkOutAddr after assinging to numm" + this.checkOutAddr);
        _this.router.navigateByUrl("/checkout");
    }
    //TODO place order
    placeOrder(details) {
        var _this = this;
        _this.logger.debug("data " + JSON.stringify(details));
        let deleveryData = {
            email: details.email,
            telephone: details.telephone,
            address_id: details.address_id,
            customer_id: details.customer_id,
            firstname: details.firstname,
            lastname: details.lastname,
            company: details.company,
            address_1: details.address_1,
            address_2: details.address_2,
            city: details.city,
            postcode: details.postcode,
            zone_id: details.zone_id,
            name: details.name,
            dataArray: this.cartArray,
            cartTotal: this.cartTotal,
            allTotal: this.allTotal,
        };
        _this.logger.debug("deleveryData" + JSON.stringify(deleveryData));
        _this.logger.debug("checking the checkOutAddr before assinging to null" + this.checkOutAddr);
        _this.checkOutAddr = [];
        _this.logger.debug("checking the checkOutAddr after assinging to numm" + this.checkOutAddr);
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(deleveryData),
            },
        };
        // _this.navCtrl.push(PlaceOrderPage, deleveryData);
        _this.router.navigate(["/place-order"], navigationExtras);
    }
    // TODO =>delete address
    deleteAddress(details) {
        var _this = this;
        _this.logger.info("invoking deleteAddress");
        _this.logger.debug("detail " + details);
        let addressId = { address_id: details.address_id };
        //Delete Address
        for (var i = 0; i <= _this.checkOutAddr.length; i++) {
            if (details == _this.checkOutAddr[i]) {
                _this.checkOutAddr.splice(i, 1);
            }
        }
        this.users.deleteAddress(addressId, function (result, data) {
            if (result == "1") {
                _this.logger.info("success");
            }
            else {
                _this.logger.info("failure of add to addAddress");
            }
        });
    }
};
AddressPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-address",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./address.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./address.page.scss */ "./src/app/pages/address/address.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], AddressPage);



/***/ })

}]);
//# sourceMappingURL=pages-address-address-module-es2015.js.map