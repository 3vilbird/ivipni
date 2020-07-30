function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shoppingcart-shoppingcart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesShoppingcartShoppingcartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Shopping Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"shopping\">\n  <div class=\"product_details\" *ngFor=\"let item of shopingCart; let idx = index\">\n    <ion-row>\n      <div *ngIf=\"item.image_flag != 0\" class=\"divimageflag\">\n        <img class=\"imagecategory\"\n          src=\"https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg\" />\n        <!-- src=\"{{item.image}}\" /> -->\n      </div>\n      <ion-col>\n        <h5>{{item.name}}</h5>\n        <h6>{{item.model}}</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length > 1\">\n      <ion-col>\n        <ion-text color=\"dark\">\n          <h6>Seller: {{item?.option[1].value}}</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length > 1\">\n      <ion-col>\n        <ion-text color=\"dark\">\n          <h6>Size: {{item?.option[0].value}}</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length ==1\">\n      <ion-col>\n        <ion-text color=\"dark\">\n          <h6>Seller: {{item?.option[0].value}}</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"price_list\">\n        <p class=\"discount_price\">{{item?.price | currency:'INR':true}}</p>\n      </ion-col>\n\n      <ion-col class=\"counter\">\n        <!--  To do\n<counter\n          [counterValue]=\"myValue[idx].quantity\"\n          (counterChange)=\"myValueChange($event,item,item?.option[0],myValue[idx].quantity);\"\n        ></counter>\n        -->\n      </ion-col>\n\n      <ion-col class=\"delete_icon\">\n        <ion-icon name=\"trash\" (click)=\"deletItem(item);\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"quantityDebug[idx].product_quantity_count\">\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\n      <ion-col>\n        <p class=\"remove_quantity\">\n          This product is not available, remove from cart.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"item.product_status == 0\">\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\n      <ion-col>\n        <p class=\"remove_quantity\">\n          This product is not available, remove from cart.\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"quantityDebug[idx].product_quantity_available\">\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\n      <ion-col>\n        <p class=\"available_quantity\">\n          The quantity available is {{item?.option[0].quantity}}, change the\n          quantity.\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class=\"shopingcartdiscount\" *ngIf=\"item?.option.length > 1\">\n      {{item?.option[1].sellerdiscount}}\n    </div>\n    <div class=\"shopingcartdiscount\" *ngIf=\"item?.option.length == 1\">\n      {{item?.option[0].sellerdiscount}}\n    </div>\n  </div>\n\n  <ion-card class=\"shopingcartaddress\" *ngIf=\"shopingCart.length > 0\">\n    <div *ngFor=\"let cost of allTotal\">\n      <ion-row class=\"addressrow\">\n        <ion-col>\n          {{cost.title}}\n        </ion-col>\n        <ion-col>\n          {{cost.value | currency:'INR':true}}\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n\n  <div *ngIf=\"shoppingCartCount\" class=\"empty_cart\">\n    <ion-row class=\"cart_icon\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-row>\n    <ion-label class=\"ion-text-wrap\">\n      Your cart is empty!\n    </ion-label>\n    <ion-button small class=\"ion-margin\" expand=\"full\" shape=\"round\" (click)=\"backToHome()\">\n      Start shopping\n    </ion-button>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"shopingCart.length > 0\">\n  <ion-toolbar>\n    <ion-button small class=\"ion-margin\" (click)=\"checkoutNav()\" shape=\"round\" expand=\"full\">Checkout</ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/shoppingcart/shoppingcart-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/shoppingcart/shoppingcart-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ShoppingcartPageRoutingModule */

  /***/
  function srcAppPagesShoppingcartShoppingcartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingcartPageRoutingModule", function () {
      return ShoppingcartPageRoutingModule;
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


    var _shoppingcart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shoppingcart.page */
    "./src/app/pages/shoppingcart/shoppingcart.page.ts");

    var routes = [{
      path: '',
      component: _shoppingcart_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartPage"]
    }];

    var ShoppingcartPageRoutingModule = function ShoppingcartPageRoutingModule() {
      _classCallCheck(this, ShoppingcartPageRoutingModule);
    };

    ShoppingcartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ShoppingcartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/shoppingcart/shoppingcart.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/shoppingcart/shoppingcart.module.ts ***!
    \***********************************************************/

  /*! exports provided: ShoppingcartPageModule */

  /***/
  function srcAppPagesShoppingcartShoppingcartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingcartPageModule", function () {
      return ShoppingcartPageModule;
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


    var _shoppingcart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shoppingcart-routing.module */
    "./src/app/pages/shoppingcart/shoppingcart-routing.module.ts");
    /* harmony import */


    var _shoppingcart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shoppingcart.page */
    "./src/app/pages/shoppingcart/shoppingcart.page.ts");

    var ShoppingcartPageModule = function ShoppingcartPageModule() {
      _classCallCheck(this, ShoppingcartPageModule);
    };

    ShoppingcartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _shoppingcart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingcartPageRoutingModule"]],
      declarations: [_shoppingcart_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingcartPage"]]
    })], ShoppingcartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/shoppingcart/shoppingcart.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/shoppingcart/shoppingcart.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesShoppingcartShoppingcartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label.label-ios {\n  padding-top: 10px;\n  margin: 0px;\n}\n\nion-col {\n  padding-top: 12px;\n}\n\n.shopping {\n  background-color: WhiteSmoke;\n}\n\n.shopping ion-card {\n  background: #f3f2f2;\n  font-size: -1px;\n}\n\n.shopping p.available_quantity {\n  color: red;\n}\n\n.shopping p.remove_quantity {\n  color: red;\n}\n\n.shopping .iocon_alert {\n  color: red;\n  padding-top: 10px;\n}\n\n.shopping .image_div {\n  width: 25%;\n  float: left;\n}\n\n.shopping .image_div p {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.shopping .image_div img {\n  padding-top: 30px;\n}\n\n.shopping .item {\n  margin-left: -180px;\n}\n\n.shopping .product_details {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n  margin-left: 5px;\n}\n\n.shopping .product_details h6 {\n  font-size: 12px;\n  margin-top: 1px;\n}\n\n.shopping .product_details ion-col.counter {\n  margin-left: 20px;\n}\n\n.shopping .product_details p.orginal_price {\n  text-decoration: line-through;\n}\n\n.shopping .product_details p.discount_price {\n  font-weight: bold;\n}\n\n.shopping .product_details ion-col.delete_icon {\n  font-size: 20px;\n  color: #bdbdbd;\n  padding-left: 10px;\n  margin-right: 35px;\n}\n\n.shopping .product_details .delar_name {\n  padding-top: -2px;\n}\n\nion-col[width-50] {\n  font-size: 17px;\n  color: white;\n  text-align: center;\n}\n\n.empty_cart {\n  text-align: center;\n  color: #5f5e5e;\n  padding-top: 15px;\n}\n\n.empty_cart .cart_icon ion-icon {\n  margin: auto;\n  display: block;\n  color: #5f5e5e;\n  font-size: 30px;\n}\n\n.empty_cart .button_home button {\n  margin: auto;\n  display: block;\n  background-color: #fe5919;\n}\n\nion-icon.icon-ios.ion-ios-trash {\n  /* padding-left: 19px; */\n  float: right;\n}\n\nion-icon.icon-md.ion-md-trash {\n  /* padding-left: 19px; */\n  float: right;\n}\n\nion-row.footer_color {\n  margin-top: -4px;\n  height: 45px;\n  color: white;\n  margin-left: 40px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.checkout {\n  margin-top: 15px;\n}\n\n.toolbar-ios-favorite .toolbar-background-ios {\n  border-color: #02bf2c;\n  background: #02bf2c;\n}\n\n.toolbar-md-favorite .toolbar-background-md {\n  border-color: #02bf2c;\n  background: #02bf2c;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n\n.shopingcartaddress {\n  max-height: 105px;\n  margin-top: 20px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.addressrow {\n  margin-top: 8px;\n}\n\n.shopingcartdiscount {\n  color: blue;\n}\n\n.imagecategory {\n  width: 47%;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSw0QkFBQTtBQ0NKOztBRENJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDQ047O0FEQ0k7RUFDRSxVQUFBO0FDQ047O0FEQ0k7RUFDRSxVQUFBO0FDQ047O0FERUk7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNBTjs7QURHSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDRE47O0FERU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURHTTtFQUNFLGlCQUFBO0FDRFI7O0FESUk7RUFFRSxtQkFBQTtBQ0hOOztBREtJO0VBRUUsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSk47O0FETU07RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQ0pSOztBRE9NO0VBQ0UsaUJBQUE7QUNMUjs7QURPTTtFQUNFLDZCQUFBO0FDTFI7O0FET007RUFDRSxpQkFBQTtBQ0xSOztBRE9NO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0FDTlI7O0FEU007RUFDRSxpQkFBQTtBQ1BSOztBRGVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ2JKOztBRGdCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDYko7O0FEZ0JNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2RSOztBRGtCTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNoQlI7O0FEcUNFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FDbENKOztBRHFDRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBQ2xDSjs7QURxQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbENKOztBRG9DRTtFQUNFLGdCQUFBO0FDakNKOztBRG9DRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNqQ0o7O0FEb0NFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRG9DRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDakNKOztBRG1DRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNoQ0o7O0FEa0NFO0VBQ0UsZUFBQTtBQy9CSjs7QURpQ0U7RUFDRyxXQUFBO0FDOUJMOztBRGlDRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDOUJKOztBRGlDRTtFQUNNLGtCQUFBO0VBQ0YsbUJBQUE7QUM5Qk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbC5sYWJlbC1pb3Mge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIFxuICBpb24tY29sIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxuICBcbiAgLnNob3BwaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICBcbiAgICBpb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmMmYyO1xuICAgICAgZm9udC1zaXplOiAtMXB4O1xuICAgIH1cbiAgICBwLmF2YWlsYWJsZV9xdWFudGl0eSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgICBwLnJlbW92ZV9xdWFudGl0eSB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgIH1cbiAgXG4gICAgLmlvY29uX2FsZXJ0IHtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB9XG4gIFxuICAgIC5pbWFnZV9kaXYge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIH1cbiAgICAgIC8vYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcbiAgICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAvL21hcmdpbi1yaWdodDogMjVweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTgwcHg7XG4gICAgfVxuICAgIC5wcm9kdWN0X2RldGFpbHMge1xuICAgICAgLy9mbG9hdDpsZWZ0O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICBcbiAgICAgIGg2IHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgICB9XG4gIFxuICAgICAgaW9uLWNvbC5jb3VudGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgICBwLm9yZ2luYWxfcHJpY2Uge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIH1cbiAgICAgIHAuZGlzY291bnRfcHJpY2Uge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIGlvbi1jb2wuZGVsZXRlX2ljb24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIC8vZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICAgICB9XG4gIFxuICAgICAgLmRlbGFyX25hbWUge1xuICAgICAgICBwYWRkaW5nLXRvcDogLTJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gLmNvbHtcbiAgLy8gXHRtYXJnaW46NHB4O1xuICAvLyB9XG4gIFxuICBpb24tY29sW3dpZHRoLTUwXSB7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvL3BhZGRpbmctbGVmdDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5lbXB0eV9jYXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICM1ZjVlNWU7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIFxuICAgIC5jYXJ0X2ljb24ge1xuICAgICAgaW9uLWljb24ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzVmNWU1ZTtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuYnV0dG9uX2hvbWUge1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlNTkxOTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vICAgIGlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gICAgLy8gICAgIC8qIGZvbnQtc2l6ZTogMzBweDsgKi9cbiAgICAvLyB9XG4gIFxuICAgIC8vIGlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgLy8gfVxuICAgIC8vICAgIGlvbi1pY29uLmljb24tbWQuaW9uLW1kLXRyYXNoIHtcbiAgICAvLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIH1cbiAgXG4gICAgLy8gaW9uLXJvdy5mb290ZXJfY29sb3Ige1xuICAgIC8vICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgLy8gfVxuICB9XG4gIFxuICBpb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE5cHg7ICovXG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICBpb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxOXB4OyAqL1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgaW9uLXJvdy5mb290ZXJfY29sb3Ige1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmNoZWNrb3V0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIFxuICAudG9vbGJhci1pb3MtZmF2b3JpdGUgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICAgIGJvcmRlci1jb2xvcjogIzAyYmYyYztcbiAgICBiYWNrZ3JvdW5kOiAjMDJiZjJjO1xuICB9XG4gIFxuICAudG9vbGJhci1tZC1mYXZvcml0ZSAudG9vbGJhci1iYWNrZ3JvdW5kLW1kIHtcbiAgICBib3JkZXItY29sb3I6ICMwMmJmMmM7XG4gICAgYmFja2dyb3VuZDogIzAyYmYyYztcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zaG9waW5nY2FydGFkZHJlc3Mge1xuICAgIG1heC1oZWlnaHQ6IDEwNXB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5hZGRyZXNzcm93IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbiAgLnNob3BpbmdjYXJ0ZGlzY291bnR7XG4gICAgIGNvbG9yOiBibHVlO1xuICBcbiAgfVxuICAuaW1hZ2VjYXRlZ29yeXtcbiAgICB3aWR0aDogNDclO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgXG4gIH1cbiAgLmRpdmltYWdlZmxhZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbiAgfSIsImlvbi1sYWJlbC5sYWJlbC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnNob3BwaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5zaG9wcGluZyBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmM2YyZjI7XG4gIGZvbnQtc2l6ZTogLTFweDtcbn1cbi5zaG9wcGluZyBwLmF2YWlsYWJsZV9xdWFudGl0eSB7XG4gIGNvbG9yOiByZWQ7XG59XG4uc2hvcHBpbmcgcC5yZW1vdmVfcXVhbnRpdHkge1xuICBjb2xvcjogcmVkO1xufVxuLnNob3BwaW5nIC5pb2Nvbl9hbGVydCB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnNob3BwaW5nIC5pbWFnZV9kaXYge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaG9wcGluZyAuaW1hZ2VfZGl2IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc2hvcHBpbmcgLmltYWdlX2RpdiBpbWcge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5zaG9wcGluZyAuaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTgwcHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLnNob3BwaW5nIC5wcm9kdWN0X2RldGFpbHMgaW9uLWNvbC5jb3VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyBwLm9yZ2luYWxfcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIHAuZGlzY291bnRfcHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIGlvbi1jb2wuZGVsZXRlX2ljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIC5kZWxhcl9uYW1lIHtcbiAgcGFkZGluZy10b3A6IC0ycHg7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVtcHR5X2NhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWY1ZTVlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5lbXB0eV9jYXJ0IC5jYXJ0X2ljb24gaW9uLWljb24ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzVmNWU1ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmVtcHR5X2NhcnQgLmJ1dHRvbl9ob21lIGJ1dHRvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTU5MTk7XG59XG5cbmlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICAvKiBwYWRkaW5nLWxlZnQ6IDE5cHg7ICovXG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW9uLWljb24uaWNvbi1tZC5pb24tbWQtdHJhc2gge1xuICAvKiBwYWRkaW5nLWxlZnQ6IDE5cHg7ICovXG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW9uLXJvdy5mb290ZXJfY29sb3Ige1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGVja291dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50b29sYmFyLWlvcy1mYXZvcml0ZSAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlci1jb2xvcjogIzAyYmYyYztcbiAgYmFja2dyb3VuZDogIzAyYmYyYztcbn1cblxuLnRvb2xiYXItbWQtZmF2b3JpdGUgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlci1jb2xvcjogIzAyYmYyYztcbiAgYmFja2dyb3VuZDogIzAyYmYyYztcbn1cblxuLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIC8qIGNvbG9yOiBibGFjazsgKi9cbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hvcGluZ2NhcnRhZGRyZXNzIHtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGRyZXNzcm93IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc2hvcGluZ2NhcnRkaXNjb3VudCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaW1hZ2VjYXRlZ29yeSB7XG4gIHdpZHRoOiA0NyU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGl2aW1hZ2VmbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/shoppingcart/shoppingcart.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/shoppingcart/shoppingcart.page.ts ***!
    \*********************************************************/

  /*! exports provided: ShoppingcartPage */

  /***/
  function srcAppPagesShoppingcartShoppingcartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingcartPage", function () {
      return ShoppingcartPage;
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


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear


    var ShoppingcartPage =
    /*#__PURE__*/
    function () {
      function ShoppingcartPage(navCtrl, productServices, users, toastCtrl, loadingCtrl, networkService, logger, router) {
        _classCallCheck(this, ShoppingcartPage);

        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.shopingCart = [];
        this.myValue = [];
        this.shoppingCartCount = false;
        this.quantityDebug = [];
        this.proceed = true;
        this.checkout = true;
        this.quantitDebug = [];

        var _this = this;

        _this.myValue = [];
        var loading = loadingCtrl.create({
          message: ""
        });

        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
          // loading.present();
          this.productServices.getCart(function (data) {
            _this.logger.debug("checking ShoppingCartDetails" + JSON.stringify(data));

            _this.shopingCart = data.data;
            _this.total = data.cart_total;
            _this.allTotal = data.totals;

            _this.logger.debug("allTotal " + JSON.stringify(_this.allTotal));

            if (_this.shopingCart.length == 0) {
              _this.shoppingCartCount = true; // loading.dismiss();
            }

            if (data.status == "1") {
              _this.cartInfo = true;
              _this.cartEmpty = false;

              for (var i = 0; i < _this.shopingCart.length; i++) {
                _this.logger.info("invoking the for loop for shopingCart");

                _this.logger.info(_this.shopingCart[i].option[0].quantity);

                if (_this.shopingCart[i].product_status == 1) {
                  if (_this.shopingCart[i].quantity_check == "NO") {
                    _this.logger.debug("invoking quantity check1 " + Number(_this.shopingCart[i].quantity));

                    _this.logger.debug("invoking quantity check2 " + _this.shopingCart[i].option[0].quantity);

                    if (_this.shopingCart[i].option[0].quantity <= 0) {
                      _this.quantityDebug.push({
                        cart_id: _this.shopingCart[i].cart_id,
                        product_quantity_count: true,
                        product_quantity_available: false
                      });

                      _this.proceed = false; // loading.dismiss();
                    } else {
                      _this.proceed = false;

                      _this.quantityDebug.push({
                        cart_id: _this.shopingCart[i].cart_id,
                        product_quantity_count: false,
                        product_quantity_available: false
                      }); // loading.dismiss();

                    }
                  } else {
                    if (Number(_this.shopingCart[i].quantity) > Number(_this.shopingCart[i].option[0].quantity)) {
                      _this.logger.debug("invoking quantity check1 " + Number(_this.shopingCart[i].quantity));

                      _this.logger.debug("invoking quantity check2 " + _this.shopingCart[i].option[0].quantity);

                      if (_this.shopingCart[i].option[0].quantity <= 0) {
                        _this.quantityDebug.push({
                          cart_id: _this.shopingCart[i].cart_id,
                          product_quantity_count: true,
                          product_quantity_available: false
                        });

                        _this.proceed = false; // loading.dismiss();
                      } else {
                        _this.proceed = false;

                        _this.quantityDebug.push({
                          cart_id: _this.shopingCart[i].cart_id,
                          product_quantity_count: false,
                          product_quantity_available: true
                        }); // loading.dismiss();

                      }
                    } else {
                      _this.quantityDebug.push({
                        cart_id: _this.shopingCart[i].cart_id,
                        product_quantity_count: false,
                        product_quantity_available: false
                      }); // loading.dismiss();

                    }
                  }
                } else {
                  _this.quantityDebug.push({
                    cart_id: _this.shopingCart[i].cart_id,
                    product_quantity_count: false,
                    product_quantity_available: false
                  });

                  _this.checkout = false; // loading.dismiss();
                }

                _this.logger.debug("checking quantityDebug" + JSON.stringify(_this.quantityDebug));

                _this.myValue.push({
                  quantity: _this.shopingCart[i].quantity
                });

                _this.logger.debug("myvalue " + _this.myValue);
              }
            } else {
              _this.cartInfo = false;
              _this.cartEmpty = true; // loading.dismiss();
            }
          });
        }
      }

      _createClass(ShoppingcartPage, [{
        key: "presentToast",
        value: function presentToast() {
          var toast = this.toastCtrl.create({
            message: this.toastMessage,
            duration: 100,
            position: "middle"
          }); // toast.onDidDismiss(() => {
          //   this.logger.info("Dismissed toast");
          // });
          // toast.present();
        }
      }, {
        key: "myValueChange",
        value: function myValueChange(ev, prod, op, qa) {
          var _this = this;

          var loading = _this.loadingCtrl.create({
            message: ""
          });

          _this.logger.info("invoking shopingcart myvaluecahnge");

          _this.logger.debug("ev " + JSON.stringify(ev));

          _this.logger.debug("prod " + JSON.stringify(prod));

          _this.logger.debug("op " + JSON.stringify(op));

          if (prod.quantity_check == "NO") {
            if (ev.value > 0) {
              if (_this.quantityDebug.length >= 1) {
                for (var i = 0; i < _this.shopingCart.length; i++) {
                  if (prod.cart_id == _this.shopingCart[i].cart_id) {
                    _this.myValue[i].quantity = ev.value;
                    _this.quantityDebug[i].cart_id = prod.cart_id;
                    _this.quantityDebug[i].product_quantity_available = false;
                    _this.quantityDebug[i].product_quantity_count = false;
                  }

                  _this.qua = ev.value;
                }
              } else {
                this.quantityDebug[0].product_quantity_count = false;
                this.quantityDebug[0].product_quantity_available = false;
              }
            } else {
              if (_this.quantityDebug.length >= 1) {
                for (var i = 0; i < _this.shopingCart.length; i++) {
                  if (prod.cart_id == _this.shopingCart[i].cart_id) {
                    _this.myValue[i].quantity = 1;
                    _this.quantityDebug[i].cart_id = prod.cart_id;
                  }

                  _this.qua = 1;

                  _this.networkService.showSuccessAlert("minimum quantity 1");

                  break;
                }
              }
            }

            var addProduct = {
              product_id: prod.product_id,
              cart_id: prod.cart_id,
              product_option: op.product_option_id,
              product_option_value: op.product_option_value_id,
              product_quantity: _this.qua
            };

            _this.logger.debug("addProduct " + JSON.stringify(addProduct)); // loading.present();


            this.users.updateCart(addProduct, function (result, data) {
              if (result == "1") {
                _this.logger.debug("data" + data);

                var _dataObj = JSON.parse(data);

                _this.toastMessage = _dataObj.message;
                _this.shopingCart = _dataObj.data;
                _this.total = _dataObj.cart_total;
                _this.allTotal = _dataObj.totals;

                _this.logger.debug("allTotal " + _this.allTotal); // loading.dismiss();


                _this.presentToast();
              } else {
                // loading.dismiss();
                _this.networkService.showErrorAlert();
              }
            });
          } else {
            if (Number(ev.value) <= Number(op.quantity)) {
              if (ev.value > 0) {
                if (_this.quantityDebug.length >= 1) {
                  for (var i = 0; i < _this.shopingCart.length; i++) {
                    if (prod.cart_id == _this.shopingCart[i].cart_id) {
                      _this.myValue[i].quantity = ev.value;
                      _this.quantityDebug[i].cart_id = prod.cart_id;
                      _this.quantityDebug[i].product_quantity_available = false;
                      _this.quantityDebug[i].product_quantity_count = false;
                    }

                    _this.qua = ev.value;
                  }
                } else {
                  this.quantityDebug[0].product_quantity_count = false;
                  this.quantityDebug[0].product_quantity_available = false;
                }
              } else {
                if (_this.quantityDebug.length >= 1) {
                  for (var i = 0; i < _this.shopingCart.length; i++) {
                    if (prod.cart_id == _this.shopingCart[i].cart_id) {
                      _this.myValue[i].quantity = 1;
                      _this.quantityDebug[i].cart_id = prod.cart_id;
                    }

                    _this.qua = 1;

                    _this.networkService.showSuccessAlert("minimum quantity 1");

                    break;
                  }
                }
              }

              var _addProduct = {
                product_id: prod.product_id,
                cart_id: prod.cart_id,
                product_option: op.product_option_id,
                product_option_value: op.product_option_value_id,
                product_quantity: _this.qua
              };

              _this.logger.debug("addProduct " + JSON.stringify(_addProduct)); // loading.present();


              this.users.updateCart(_addProduct, function (result, data) {
                if (result == "1") {
                  _this.logger.debug("data" + data);

                  var _dataObj = JSON.parse(data);

                  _this.toastMessage = _dataObj.message;
                  _this.shopingCart = _dataObj.data;
                  _this.total = _dataObj.cart_total;
                  _this.allTotal = _dataObj.totals;

                  _this.logger.debug("allTotal " + _this.allTotal); // loading.dismiss();


                  _this.presentToast();
                } else {
                  // loading.dismiss();
                  _this.networkService.showErrorAlert();
                }
              });
            } else if (op.quantity > 0) {
              _this.logger.debug("ev.valuee " + ev.value);

              _this.logger.debug("op.quantity " + op.quantity);

              if (_this.quantityDebug.length >= 1) {
                for (var i = 0; i < _this.shopingCart.length; i++) {
                  if (prod.cart_id == _this.shopingCart[i].cart_id) {
                    _this.myValue[i].quantity = op.quantity;
                    _this.quantityDebug[i].cart_id = prod.cart_id;
                    _this.quantityDebug[i].product_quantity_available = false;
                    _this.quantityDebug[i].product_quantity_count = false;
                  }

                  _this.qua = op.quantity;
                }
              }

              var _addProduct2 = {
                product_id: prod.product_id,
                cart_id: prod.cart_id,
                product_option: op.product_option_id,
                product_option_value: op.product_option_value_id,
                product_quantity: op.quantity
              };

              _this.logger.debug("addProduct " + JSON.stringify(_addProduct2)); // loading.present();


              this.users.updateCart(_addProduct2, function (result, data) {
                if (result == "1") {
                  _this.logger.debug("data" + data);

                  var _dataObj = JSON.parse(data);

                  _this.toastMessage = _dataObj.message;
                  _this.shopingCart = _dataObj.data;
                  _this.total = _dataObj.cart_total;
                  _this.allTotal = _dataObj.totals;

                  _this.logger.debug("allTotal " + _this.allTotal); // loading.dismiss();
                  //_this.presentToast();

                } else {
                  // loading.dismiss();
                  _this.networkService.showErrorAlert();
                }
              });

              _this.networkService.showSuccessAlert("Maximum quantity available " + op.quantity + " only");
            }
          }

          _this.logger.debug("checking the myvalue: " + JSON.stringify(_this.myValue)); // loading.dismiss();

        }
      }, {
        key: "checkoutNav",
        value: function checkoutNav() {
          var _this = this;

          _this.proceed = true;

          _this.logger.info("invoking proced text checkout form");

          _this.logger.debug("cartTotal" + _this.total);

          var cartDetails = {
            cartTotal: _this.total,
            cartData: _this.shopingCart,
            allTotal: _this.allTotal
          };

          _this.logger.debug("checking the quantityDebug array " + JSON.stringify(_this.quantityDebug));

          for (var i = 0; i < _this.shopingCart.length; i++) {
            if (_this.quantityDebug[i].cart_id == _this.shopingCart[i].cart_id) {
              if (_this.quantityDebug[i].product_quantity_count == true) {
                _this.proceed = false;
                break;
              }

              if (_this.quantityDebug[i].product_quantity_available == true) {
                _this.proceed = false;
                break;
              }
            }
          }

          _this.logger.debug("cartDetails " + cartDetails);

          _this.logger.debug("proceed " + _this.proceed);

          if (_this.checkout) {
            if (_this.proceed) {
              _this.logger.info("invoking true part");

              var navigationExtras = {
                queryParams: {
                  data: JSON.stringify(cartDetails)
                }
              };
              this.router.navigate(["/address"], navigationExtras); // _this.navCtrl.push(AddressPage, cartDetails);
            } else {
              _this.logger.info("invoking true part");

              _this.networkService.showSuccessAlert("Please remove error from cart");
            }
          } else {
            _this.networkService.showSuccessAlert("Please remove error from cart");
          }
        }
      }, {
        key: "deletItem",
        value: function deletItem(item) {
          var _this = this;

          var m = 0;

          _this.logger.debug("item " + JSON.stringify(item));

          for (var i = 0; i < _this.shopingCart.length; i++) {
            for (var h = 0; h < _this.shopingCart.length; h++) {
              if (item.cart_id != _this.shopingCart[h].cart_id) {
                _this.quanobj = {
                  quantity: _this.shopingCart[h].quantity
                };
                _this.myValue[m] = _this.quanobj;
                m++;
              }
            }

            if (item == _this.shopingCart[i]) {
              _this.shopingCart.splice(i, 1);
            }
          }

          var k = 0;

          if (this.quantityDebug.length > 1) {
            this.logger.debug("checking the deleteQnty " + JSON.stringify(_this.quantityDebug));

            for (var j = 0; j < _this.quantityDebug.length; j++) {
              if (item.cart_id != _this.quantityDebug[j].cart_id) {
                _this.debug = {
                  cart_id: _this.quantityDebug[j].cart_id,
                  product_quantity_count: _this.quantityDebug[j].product_quantity_count,
                  product_quantity_available: _this.quantityDebug[j].product_quantity_available
                };
                _this.quantitDebug[k] = _this.debug;
                k++;
              }
            }

            _this.quantityDebug = _this.quantitDebug;
          }

          _this.logger.debug("list" + JSON.stringify(item.cart_id));

          var cartItem = {
            cart_id: item.cart_id
          };
          this.users.removeCart(cartItem, function (result, data) {
            if (result == "1") {
              var _dataObj = JSON.parse(data);

              _this.toastMessage = _dataObj.message;
              _this.total = _dataObj.cart_total;
              _this.allTotal = _dataObj.totals;

              if (_dataObj.count == 0) {
                _this.shoppingCartCount = true;
              }

              _this.presentToast();
            } else {
              _this.networkService.showErrorAlert();
            }
          });
        }
      }, {
        key: "backToHome",
        value: function backToHome() {
          this.router.navigateByUrl("/home");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShoppingcartPage;
    }();

    ShoppingcartPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    ShoppingcartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-shoppingcart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shoppingcart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shoppingcart.page.scss */
      "./src/app/pages/shoppingcart/shoppingcart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], ShoppingcartPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-shoppingcart-shoppingcart-module-es5.js.map