function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddressAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Select delivery address\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"address\">\n  <ion-item lines=\"none\">\n    <ion-label><b>Delivery Address</b></ion-label>\n    <ion-icon name=\"add-circle-outline\" class=\"color\" slot=\"end\" (click)=\"checkoutFn()\"></ion-icon>\n  </ion-item>\n\n  <ion-card *ngFor=\"let details of firstIndex\">\n    <ion-card-header class=\"ion-margin\">\n      <ion-card-title>{{details.firstname}} {{details.lastname}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content (click)=\"placeOrder(details)\">\n      <h2>{{details.company}}</h2>\n      <h2>{{details.address_1}}</h2>\n      <h2>{{details.address_2}}</h2>\n      <h2>{{details.city}}, {{details.name}}, {{details.postcode}}</h2>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n        <ion-label>{{details.email}}</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n        <ion-label>{{details.telephone}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let details of checkOutAddr\">\n    <ion-card-header>\n      <ion-item lines=\"none\">\n        <ion-card-title>{{details.firstname}} {{details.lastname}}</ion-card-title>\n        <ion-icon name=\"pencil-outline\" (click)=\"checkoutEdit(details)\" slot=\"end\"></ion-icon>\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content (click)=\"placeOrder(details)\">\n      <h2>{{details.company}}</h2>\n      <h2>{{details.address_1}}</h2>\n      <h2>{{details.address_2}}</h2>\n      <h2>{{details.city}}, {{details.name}}, {{details.postcode}}</h2>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n        <ion-label>{{details.email}}</ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n        <ion-label>{{details.telephone}}</ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button shape=\"round\" class=\"ion-margin\" expand=\"full\" color=\"medium\" (click)=\"deleteAddress(details)\">\n    Remove\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/address/address-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/address/address-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddressPageRoutingModule */

  /***/
  function srcAppPagesAddressAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageRoutingModule", function () {
      return AddressPageRoutingModule;
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


    var _address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./address.page */
    "./src/app/pages/address/address.page.ts");

    var routes = [{
      path: '',
      component: _address_page__WEBPACK_IMPORTED_MODULE_3__["AddressPage"]
    }];

    var AddressPageRoutingModule = function AddressPageRoutingModule() {
      _classCallCheck(this, AddressPageRoutingModule);
    };

    AddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/address/address.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/address/address.module.ts ***!
    \*************************************************/

  /*! exports provided: AddressPageModule */

  /***/
  function srcAppPagesAddressAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPageModule", function () {
      return AddressPageModule;
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


    var _address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./address-routing.module */
    "./src/app/pages/address/address-routing.module.ts");
    /* harmony import */


    var _address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./address.page */
    "./src/app/pages/address/address.page.ts");

    var AddressPageModule = function AddressPageModule() {
      _classCallCheck(this, AddressPageModule);
    };

    AddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressPageRoutingModule"]],
      declarations: [_address_page__WEBPACK_IMPORTED_MODULE_6__["AddressPage"]]
    })], AddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/address/address.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/address/address.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddressAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".address {\n  background-color: WhiteSmoke;\n}\n.address ion-card {\n  background-color: white;\n}\n.address .color {\n  color: green;\n}\n.address .card-ios {\n  margin: 12px 12px 12px 0px;\n}\n.address .card-md {\n  margin: 12px 12px 12px 0px;\n}\n.address .color1 {\n  color: gray;\n  font-size: 20px;\n  float: right;\n  padding-right: 10px;\n}\n.address .color2 {\n  color: gray;\n}\n.address ion-card-header {\n  padding: 0px;\n}\n.address .first b {\n  margin-left: 11px;\n  margin-top: 3px;\n  color: blue;\n}\n.address .last b {\n  margin-left: -20px;\n  color: blue;\n}\n.address .card-content-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 4px;\n  padding-bottom: 13px;\n  font-size: 1.4rem;\n  line-height: 2.3;\n}\n.address .card-content-ios {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 1px;\n  padding-bottom: 1px;\n  font-size: 1.4rem;\n  line-height: 2.3;\n}\n.address ion-card-content ion-row p {\n  color: black;\n  margin-bottom: -5px;\n}\n.address ion-card-content ion-row ion-col {\n  margin-bottom: -14px;\n  margin-left: -5px;\n  margin-top: -5px;\n}\n.address .addressshow {\n  margin-top: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkcmVzcy9hZGRyZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURBSTtFQUNFLHVCQUFBO0FDRU47QURDSTtFQUNFLFlBQUE7QUNDTjtBREVJO0VBQ0UsMEJBQUE7QUNBTjtBREVJO0VBQ0UsMEJBQUE7QUNBTjtBREdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNETjtBRElJO0VBQ0UsV0FBQTtBQ0ZOO0FEU0k7RUFDRSxZQUFBO0FDUE47QURVSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSTjtBRFdJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDVE47QURZSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZOO0FEWUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWTjtBRGNNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDWlI7QURlUTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2JWO0FEaUJJO0VBQ0UsZ0JBQUE7QUNmTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MvYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkcmVzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgICBpb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIFxuICAgIC5jb2xvciB7XG4gICAgICBjb2xvcjogZ3JlZW47XG4gICAgfVxuICBcbiAgICAuY2FyZC1pb3Mge1xuICAgICAgbWFyZ2luOiAxMnB4IDEycHggMTJweCAwcHg7XG4gICAgfVxuICAgIC5jYXJkLW1kIHtcbiAgICAgIG1hcmdpbjogMTJweCAxMnB4IDEycHggMHB4O1xuICAgIH1cbiAgXG4gICAgLmNvbG9yMSB7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICBcbiAgICAuY29sb3IyIHtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgXG4gICAgLy8gaW9uLWNhcmQge1xuICAgIC8vICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gfVxuICBcbiAgICBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgXG4gICAgLmZpcnN0IGIge1xuICAgICAgbWFyZ2luLWxlZnQ6IDExcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gIFxuICAgIC5sYXN0IGIge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgfVxuICBcbiAgICAuY2FyZC1jb250ZW50LW1kIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjM7XG4gICAgfVxuICAgIC5jYXJkLWNvbnRlbnQtaW9zIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDIuMztcbiAgICB9XG4gIFxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgaW9uLXJvdyBwIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xuICAgICAgfVxuICAgICAgaW9uLXJvdyB7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFkZHJlc3NzaG93IHtcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgIC8vIGhlaWdodDozNXB4O1xuICAgIH1cbiAgICBcbiAgIFxuICB9XG4gICIsIi5hZGRyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5hZGRyZXNzIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYWRkcmVzcyAuY29sb3Ige1xuICBjb2xvcjogZ3JlZW47XG59XG4uYWRkcmVzcyAuY2FyZC1pb3Mge1xuICBtYXJnaW46IDEycHggMTJweCAxMnB4IDBweDtcbn1cbi5hZGRyZXNzIC5jYXJkLW1kIHtcbiAgbWFyZ2luOiAxMnB4IDEycHggMTJweCAwcHg7XG59XG4uYWRkcmVzcyAuY29sb3IxIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLmFkZHJlc3MgLmNvbG9yMiB7XG4gIGNvbG9yOiBncmF5O1xufVxuLmFkZHJlc3MgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmFkZHJlc3MgLmZpcnN0IGIge1xuICBtYXJnaW4tbGVmdDogMTFweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBjb2xvcjogYmx1ZTtcbn1cbi5hZGRyZXNzIC5sYXN0IGIge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIGNvbG9yOiBibHVlO1xufVxuLmFkZHJlc3MgLmNhcmQtY29udGVudC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMi4zO1xufVxuLmFkZHJlc3MgLmNhcmQtY29udGVudC1pb3Mge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBsaW5lLWhlaWdodDogMi4zO1xufVxuLmFkZHJlc3MgaW9uLWNhcmQtY29udGVudCBpb24tcm93IHAge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IC01cHg7XG59XG4uYWRkcmVzcyBpb24tY2FyZC1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCB7XG4gIG1hcmdpbi1ib3R0b206IC0xNHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbi5hZGRyZXNzIC5hZGRyZXNzc2hvdyB7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/address/address.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/address/address.page.ts ***!
    \***********************************************/

  /*! exports provided: AddressPage */

  /***/
  function srcAppPagesAddressAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressPage", function () {
      return AddressPage;
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


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear


    var AddressPage =
    /*#__PURE__*/
    function () {
      function AddressPage(navCtrl, productServices, users, loadingCtrl, networkService, logger, route, router) {
        _classCallCheck(this, AddressPage);

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

      _createClass(AddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            var mydata = JSON.parse(params["data"]);
            _this.cartArray = mydata.cartData;
            _this.cartTotal = mydata.cartTotal;
            _this.allTotal = mydata.allTotal;
          });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this, loading;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this = this;

                    _this.logger.info("invoking ionviewDidEnter for address");

                    _context.next = 4;
                    return _this.loadingCtrl.create({
                      message: ""
                    });

                  case 4:
                    loading = _context.sent;

                    if (_this.networkService.nullConnection()) {
                      _this.networkService.showNetworkAlert();
                    } else {
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

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //  TODO checkout edit

      }, {
        key: "checkoutEdit",
        value: function checkoutEdit(details) {
          var _this = this;

          _this.logger.info("invoking checkoutEdit");

          _this.logger.debug("checking the checkOutAddr before assinging to null" + this.checkOutAddr);

          _this.checkOutAddr = [];

          _this.logger.debug("checking the checkOutAddr after assinging to numm" + this.checkOutAddr);

          var navigationExtras = {
            queryParams: {
              data: JSON.stringify(details)
            }
          };

          _this.router.navigate(["/checkout"], navigationExtras); // _this.navCtrl.push(CheckoutPage, details);


          _this.logger.debug("cheking the addressObject: " + JSON.stringify(details));
        } //checkout function

      }, {
        key: "checkoutFn",
        value: function checkoutFn() {
          var _this = this;

          _this.logger.debug("checking the checkOutAddr before assinging to null" + this.checkOutAddr);

          _this.checkOutAddr = [];

          _this.logger.debug("checking the checkOutAddr after assinging to numm" + this.checkOutAddr);

          _this.router.navigateByUrl("/checkout");
        } //TODO place order

      }, {
        key: "placeOrder",
        value: function placeOrder(details) {
          var _this = this;

          _this.logger.debug("data " + JSON.stringify(details));

          var deleveryData = {
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
            allTotal: this.allTotal
          };

          _this.logger.debug("deleveryData" + JSON.stringify(deleveryData));

          _this.logger.debug("checking the checkOutAddr before assinging to null" + this.checkOutAddr);

          _this.checkOutAddr = [];

          _this.logger.debug("checking the checkOutAddr after assinging to numm" + this.checkOutAddr);

          var navigationExtras = {
            queryParams: {
              data: JSON.stringify(deleveryData)
            }
          }; // _this.navCtrl.push(PlaceOrderPage, deleveryData);

          _this.router.navigate(["/place-order"], navigationExtras);
        } // TODO =>delete address

      }, {
        key: "deleteAddress",
        value: function deleteAddress(details) {
          var _this = this;

          _this.logger.info("invoking deleteAddress");

          _this.logger.debug("detail " + details);

          var addressId = {
            address_id: details.address_id
          }; //Delete Address

          for (var i = 0; i <= _this.checkOutAddr.length; i++) {
            if (details == _this.checkOutAddr[i]) {
              _this.checkOutAddr.splice(i, 1);
            }
          }

          this.users.deleteAddress(addressId, function (result, data) {
            if (result == "1") {
              _this.logger.info("success");
            } else {
              _this.logger.info("failure of add to addAddress");
            }
          });
        }
      }]);

      return AddressPage;
    }();

    AddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    AddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-address",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address/address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.page.scss */
      "./src/app/pages/address/address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], AddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-address-address-module-es5.js.map