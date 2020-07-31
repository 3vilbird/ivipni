(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shoppingcart-shoppingcart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Shopping Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"shopping\">\n  <div\n    class=\"product_details\"\n    *ngFor=\"let item of shopingCart; let idx = index\"\n  >\n    <ion-row>\n      <div *ngIf=\"item.image_flag != 0\" class=\"divimageflag\">\n        <img class=\"imagecategory\" src=\"{{item.image}}\" />\n        <!-- src=\"{{item.image}}\" /> -->\n      </div>\n      <ion-col>\n        <h5>{{item.name}}</h5>\n        <h6>{{item.model}}</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length > 1\">\n      <ion-col>\n        <ion-text color=\"dark\">\n          <h6>Seller: {{item?.option[1].value}}</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length > 1\">\n      <ion-col>\n        <ion-text color=\"dark\">\n          <h6>Size: {{item?.option[0].value}}</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length ==1\">\n      <ion-col>\n        <ion-text color=\"dark\">\n          <h6>Seller: {{item?.option[0].value}}</h6>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"price_list\">\n        <p class=\"discount_price\">{{item?.price | currency:'INR':true}}</p>\n      </ion-col>\n\n      <ion-col class=\"counter\">\n        <!--  To do\n<counter\n          [counterValue]=\"myValue[idx].quantity\"\n          (counterChange)=\"myValueChange($event,item,item?.option[0],myValue[idx].quantity);\"\n        ></counter>\n        -->\n        {{myValue[idx].quantity}}\n      </ion-col>\n\n      <ion-col class=\"delete_icon\">\n        <ion-icon\n          color=\"danger\"\n          name=\"trash\"\n          (click)=\"deletItem(item);\"\n        ></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"quantityDebug[idx].product_quantity_count\">\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\n      <ion-col>\n        <p class=\"remove_quantity\">\n          This product is not available, remove from cart.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"item.product_status == 0\">\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\n      <ion-col>\n        <p class=\"remove_quantity\">\n          This product is not available, remove from cart.\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf=\"quantityDebug[idx].product_quantity_available\">\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\n      <ion-col>\n        <p class=\"available_quantity\">\n          The quantity available is {{item?.option[0].quantity}}, change the\n          quantity.\n        </p>\n      </ion-col>\n    </ion-row>\n    <div class=\"shopingcartdiscount\" *ngIf=\"item?.option.length > 1\">\n      {{item?.option[1].sellerdiscount}}\n    </div>\n    <div class=\"shopingcartdiscount\" *ngIf=\"item?.option.length == 1\">\n      {{item?.option[0].sellerdiscount}}\n    </div>\n  </div>\n\n  <ion-card class=\"shopingcartaddress\" *ngIf=\"shopingCart.length > 0\">\n    <div *ngFor=\"let cost of allTotal\">\n      <ion-row class=\"addressrow\">\n        <ion-col>\n          {{cost.title}}\n        </ion-col>\n        <ion-col>\n          {{cost.value | currency:'INR':true}}\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n\n  <div *ngIf=\"shoppingCartCount\" class=\"empty_cart\">\n    <ion-row class=\"cart_icon\">\n      <ion-icon name=\"cart\"></ion-icon>\n    </ion-row>\n    <ion-label class=\"ion-text-wrap\">\n      Your cart is empty!\n    </ion-label>\n    <ion-button\n      small\n      class=\"ion-margin\"\n      expand=\"full\"\n      shape=\"round\"\n      (click)=\"backToHome()\"\n    >\n      Start shopping\n    </ion-button>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf=\"shopingCart.length > 0\">\n  <ion-toolbar>\n    <ion-button\n      small\n      class=\"ion-margin\"\n      (click)=\"checkoutNav()\"\n      shape=\"round\"\n      expand=\"full\"\n      >Checkout</ion-button\n    >\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/shoppingcart/shoppingcart-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/shoppingcart/shoppingcart-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingcartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartPageRoutingModule", function() { return ShoppingcartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shoppingcart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shoppingcart.page */ "./src/app/pages/shoppingcart/shoppingcart.page.ts");




const routes = [
    {
        path: '',
        component: _shoppingcart_page__WEBPACK_IMPORTED_MODULE_3__["ShoppingcartPage"]
    }
];
let ShoppingcartPageRoutingModule = class ShoppingcartPageRoutingModule {
};
ShoppingcartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShoppingcartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/shoppingcart/shoppingcart.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/shoppingcart/shoppingcart.module.ts ***!
  \***********************************************************/
/*! exports provided: ShoppingcartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartPageModule", function() { return ShoppingcartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shoppingcart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shoppingcart-routing.module */ "./src/app/pages/shoppingcart/shoppingcart-routing.module.ts");
/* harmony import */ var _shoppingcart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shoppingcart.page */ "./src/app/pages/shoppingcart/shoppingcart.page.ts");







let ShoppingcartPageModule = class ShoppingcartPageModule {
};
ShoppingcartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _shoppingcart_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShoppingcartPageRoutingModule"]
        ],
        declarations: [_shoppingcart_page__WEBPACK_IMPORTED_MODULE_6__["ShoppingcartPage"]]
    })
], ShoppingcartPageModule);



/***/ }),

/***/ "./src/app/pages/shoppingcart/shoppingcart.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/shoppingcart/shoppingcart.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label.label-ios {\n  padding-top: 10px;\n  margin: 0px;\n}\n\nion-col {\n  padding-top: 12px;\n}\n\n.shopping {\n  background-color: WhiteSmoke;\n}\n\n.shopping ion-card {\n  background: #f3f2f2;\n  font-size: -1px;\n}\n\n.shopping p.available_quantity {\n  color: red;\n}\n\n.shopping p.remove_quantity {\n  color: red;\n}\n\n.shopping .iocon_alert {\n  color: red;\n  padding-top: 10px;\n}\n\n.shopping .image_div {\n  width: 25%;\n  float: left;\n}\n\n.shopping .image_div p {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.shopping .image_div img {\n  padding-top: 30px;\n}\n\n.shopping .item {\n  margin-left: -180px;\n}\n\n.shopping .product_details {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n  margin-left: 5px;\n}\n\n.shopping .product_details h6 {\n  font-size: 12px;\n  margin-top: 1px;\n}\n\n.shopping .product_details ion-col.counter {\n  margin-left: 20px;\n}\n\n.shopping .product_details p.orginal_price {\n  text-decoration: line-through;\n}\n\n.shopping .product_details p.discount_price {\n  font-weight: bold;\n}\n\n.shopping .product_details ion-col.delete_icon {\n  font-size: 20px;\n  color: #bdbdbd;\n  padding-left: 10px;\n  margin-right: 35px;\n}\n\n.shopping .product_details .delar_name {\n  padding-top: -2px;\n}\n\nion-col[width-50] {\n  font-size: 17px;\n  color: white;\n  text-align: center;\n}\n\n.empty_cart {\n  text-align: center;\n  color: #5f5e5e;\n  padding-top: 15px;\n}\n\n.empty_cart .cart_icon ion-icon {\n  margin: auto;\n  display: block;\n  color: #5f5e5e;\n  font-size: 30px;\n}\n\n.empty_cart .button_home button {\n  margin: auto;\n  display: block;\n  background-color: #fe5919;\n}\n\nion-icon.icon-ios.ion-ios-trash {\n  /* padding-left: 19px; */\n  float: right;\n}\n\nion-icon.icon-md.ion-md-trash {\n  /* padding-left: 19px; */\n  float: right;\n}\n\nion-row.footer_color {\n  margin-top: -4px;\n  height: 45px;\n  color: white;\n  margin-left: 40px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.checkout {\n  margin-top: 15px;\n}\n\n.toolbar-ios-favorite .toolbar-background-ios {\n  border-color: #02bf2c;\n  background: #02bf2c;\n}\n\n.toolbar-md-favorite .toolbar-background-md {\n  border-color: #02bf2c;\n  background: #02bf2c;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n\n.shopingcartaddress {\n  max-height: 105px;\n  margin-top: 20px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.addressrow {\n  margin-top: 8px;\n}\n\n.shopingcartdiscount {\n  color: blue;\n}\n\n.imagecategory {\n  width: 47%;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nY2FydC9zaG9wcGluZ2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsNEJBQUE7QUNDSjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NOOztBRENJO0VBQ0UsVUFBQTtBQ0NOOztBRENJO0VBQ0UsVUFBQTtBQ0NOOztBREVJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDQU47O0FER0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0ROOztBREVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER007RUFDRSxpQkFBQTtBQ0RSOztBRElJO0VBRUUsbUJBQUE7QUNITjs7QURLSTtFQUVFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pOOztBRE1NO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNKUjs7QURPTTtFQUNFLGlCQUFBO0FDTFI7O0FET007RUFDRSw2QkFBQTtBQ0xSOztBRE9NO0VBQ0UsaUJBQUE7QUNMUjs7QURPTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxrQkFBQTtBQ05SOztBRFNNO0VBQ0UsaUJBQUE7QUNQUjs7QURlRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2JKOztBRGdCTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNkUjs7QURrQk07RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDaEJSOztBRHFDRTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBQ2xDSjs7QURxQ0U7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUNsQ0o7O0FEcUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2xDSjs7QURvQ0U7RUFDRSxnQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDakNKOztBRG9DRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNqQ0o7O0FEb0NFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2pDSjs7QURtQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDaENKOztBRGtDRTtFQUNFLGVBQUE7QUMvQko7O0FEaUNFO0VBQ0csV0FBQTtBQzlCTDs7QURpQ0U7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQzlCSjs7QURpQ0U7RUFDTSxrQkFBQTtFQUNGLG1CQUFBO0FDOUJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2hvcHBpbmdjYXJ0L3Nob3BwaW5nY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwubGFiZWwtaW9zIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICBcbiAgaW9uLWNvbCB7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gIH1cbiAgXG4gIC5zaG9wcGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbiAgXG4gICAgaW9uLWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjJmMjtcbiAgICAgIGZvbnQtc2l6ZTogLTFweDtcbiAgICB9XG4gICAgcC5hdmFpbGFibGVfcXVhbnRpdHkge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgcC5yZW1vdmVfcXVhbnRpdHkge1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIFxuICAgIC5pb2Nvbl9hbGVydCB7XG4gICAgICBjb2xvcjogcmVkO1xuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICBcbiAgICAuaW1hZ2VfZGl2IHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICB9XG4gICAgICAvL2JvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gICAgICBpbWcge1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLml0ZW0ge1xuICAgICAgLy9tYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTE4MHB4O1xuICAgIH1cbiAgICAucHJvZHVjdF9kZXRhaWxzIHtcbiAgICAgIC8vZmxvYXQ6bGVmdDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgXG4gICAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgfVxuICBcbiAgICAgIGlvbi1jb2wuY291bnRlciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgfVxuICAgICAgcC5vcmdpbmFsX3ByaWNlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB9XG4gICAgICBwLmRpc2NvdW50X3ByaWNlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgICBpb24tY29sLmRlbGV0ZV9pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAvL2Zsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICAgICAgfVxuICBcbiAgICAgIC5kZWxhcl9uYW1lIHtcbiAgICAgICAgcGFkZGluZy10b3A6IC0ycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIC5jb2x7XG4gIC8vIFx0bWFyZ2luOjRweDtcbiAgLy8gfVxuICBcbiAgaW9uLWNvbFt3aWR0aC01MF0ge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy9wYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuZW1wdHlfY2FydCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjNWY1ZTVlO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICBcbiAgICAuY2FydF9pY29uIHtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICM1ZjVlNWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ1dHRvbl9ob21lIHtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTU5MTk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyAgICBpb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcbiAgICAvLyAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xuICAgIC8vICAgICAvKiBmb250LXNpemU6IDMwcHg7ICovXG4gICAgLy8gfVxuICBcbiAgICAvLyBpb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcbiAgICAvLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIH1cbiAgICAvLyAgICBpb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XG4gICAgLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAvLyB9XG4gIFxuICAgIC8vIGlvbi1yb3cuZm9vdGVyX2NvbG9yIHtcbiAgICAvLyAgICAgaGVpZ2h0OiA0NXB4O1xuICAgIC8vIH1cbiAgfVxuICBcbiAgaW9uLWljb24uaWNvbi1pb3MuaW9uLWlvcy10cmFzaCB7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxOXB4OyAqL1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgaW9uLWljb24uaWNvbi1tZC5pb24tbWQtdHJhc2gge1xuICAgIC8qIHBhZGRpbmctbGVmdDogMTlweDsgKi9cbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIGlvbi1yb3cuZm9vdGVyX2NvbG9yIHtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5jaGVja291dCB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICBcbiAgLnRvb2xiYXItaW9zLWZhdm9yaXRlIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcbiAgICBib3JkZXItY29sb3I6ICMwMmJmMmM7XG4gICAgYmFja2dyb3VuZDogIzAyYmYyYztcbiAgfVxuICBcbiAgLnRvb2xiYXItbWQtZmF2b3JpdGUgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDJiZjJjO1xuICAgIGJhY2tncm91bmQ6ICMwMmJmMmM7XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xuICB9XG4gIFxuICAudG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc2hvcGluZ2NhcnRhZGRyZXNzIHtcbiAgICBtYXgtaGVpZ2h0OiAxMDVweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuYWRkcmVzc3JvdyB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIC5zaG9waW5nY2FydGRpc2NvdW50e1xuICAgICBjb2xvcjogYmx1ZTtcbiAgXG4gIH1cbiAgLmltYWdlY2F0ZWdvcnl7XG4gICAgd2lkdGg6IDQ3JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIFxuICB9XG4gIC5kaXZpbWFnZWZsYWd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTU3cHg7XG4gIH0iLCJpb24tbGFiZWwubGFiZWwtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5zaG9wcGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uc2hvcHBpbmcgaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZjNmMmYyO1xuICBmb250LXNpemU6IC0xcHg7XG59XG4uc2hvcHBpbmcgcC5hdmFpbGFibGVfcXVhbnRpdHkge1xuICBjb2xvcjogcmVkO1xufVxuLnNob3BwaW5nIHAucmVtb3ZlX3F1YW50aXR5IHtcbiAgY29sb3I6IHJlZDtcbn1cbi5zaG9wcGluZyAuaW9jb25fYWxlcnQge1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5zaG9wcGluZyAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDI1JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2hvcHBpbmcgLmltYWdlX2RpdiBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNob3BwaW5nIC5pbWFnZV9kaXYgaW1nIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG4uc2hvcHBpbmcgLml0ZW0ge1xuICBtYXJnaW4tbGVmdDogLTE4MHB4O1xufVxuLnNob3BwaW5nIC5wcm9kdWN0X2RldGFpbHMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmNiYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnNob3BwaW5nIC5wcm9kdWN0X2RldGFpbHMgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIGlvbi1jb2wuY291bnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnNob3BwaW5nIC5wcm9kdWN0X2RldGFpbHMgcC5vcmdpbmFsX3ByaWNlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyBwLmRpc2NvdW50X3ByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyBpb24tY29sLmRlbGV0ZV9pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI2JkYmRiZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyAuZGVsYXJfbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAtMnB4O1xufVxuXG5pb24tY29sW3dpZHRoLTUwXSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lbXB0eV9jYXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzVmNWU1ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uZW1wdHlfY2FydCAuY2FydF9pY29uIGlvbi1pY29uIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM1ZjVlNWU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5lbXB0eV9jYXJ0IC5idXR0b25faG9tZSBidXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1OTE5O1xufVxuXG5pb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcbiAgLyogcGFkZGluZy1sZWZ0OiAxOXB4OyAqL1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1pY29uLmljb24tbWQuaW9uLW1kLXRyYXNoIHtcbiAgLyogcGFkZGluZy1sZWZ0OiAxOXB4OyAqL1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmlvbi1yb3cuZm9vdGVyX2NvbG9yIHtcbiAgbWFyZ2luLXRvcDogLTRweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hlY2tvdXQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udG9vbGJhci1pb3MtZmF2b3JpdGUgLnRvb2xiYXItYmFja2dyb3VuZC1pb3Mge1xuICBib3JkZXItY29sb3I6ICMwMmJmMmM7XG4gIGJhY2tncm91bmQ6ICMwMmJmMmM7XG59XG5cbi50b29sYmFyLW1kLWZhdm9yaXRlIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xuICBib3JkZXItY29sb3I6ICMwMmJmMmM7XG4gIGJhY2tncm91bmQ6ICMwMmJmMmM7XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNob3BpbmdjYXJ0YWRkcmVzcyB7XG4gIG1heC1oZWlnaHQ6IDEwNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWRkcmVzc3JvdyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnNob3BpbmdjYXJ0ZGlzY291bnQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmltYWdlY2F0ZWdvcnkge1xuICB3aWR0aDogNDclO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRpdmltYWdlZmxhZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/shoppingcart/shoppingcart.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/shoppingcart/shoppingcart.page.ts ***!
  \*********************************************************/
/*! exports provided: ShoppingcartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingcartPage", function() { return ShoppingcartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// all clear








let ShoppingcartPage = class ShoppingcartPage {
    constructor(navCtrl, productServices, users, toastCtrl, loadingCtrl, networkService, logger, router) {
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
        let loading = loadingCtrl.create({
            message: ``,
        });
        if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
        }
        else {
            // loading.present();
            this.productServices.getCart(function (data) {
                _this.logger.debug("checking ShoppingCartDetails" + JSON.stringify(data));
                _this.shopingCart = data.data;
                _this.total = data.cart_total;
                _this.allTotal = data.totals;
                _this.logger.debug("allTotal " + JSON.stringify(_this.allTotal));
                if (_this.shopingCart.length == 0) {
                    _this.shoppingCartCount = true;
                    // loading.dismiss();
                }
                if (data.status == "1") {
                    _this.cartInfo = true;
                    _this.cartEmpty = false;
                    for (var i = 0; i < _this.shopingCart.length; i++) {
                        _this.logger.info("invoking the for loop for shopingCart");
                        _this.logger.info(_this.shopingCart[i].option[0].quantity);
                        if (_this.shopingCart[i].product_status == 1) {
                            if (_this.shopingCart[i].quantity_check == "NO") {
                                _this.logger.debug("invoking quantity check1 " +
                                    Number(_this.shopingCart[i].quantity));
                                _this.logger.debug("invoking quantity check2 " +
                                    _this.shopingCart[i].option[0].quantity);
                                if (_this.shopingCart[i].option[0].quantity <= 0) {
                                    _this.quantityDebug.push({
                                        cart_id: _this.shopingCart[i].cart_id,
                                        product_quantity_count: true,
                                        product_quantity_available: false,
                                    });
                                    _this.proceed = false;
                                    // loading.dismiss();
                                }
                                else {
                                    _this.proceed = false;
                                    _this.quantityDebug.push({
                                        cart_id: _this.shopingCart[i].cart_id,
                                        product_quantity_count: false,
                                        product_quantity_available: false,
                                    });
                                    // loading.dismiss();
                                }
                            }
                            else {
                                if (Number(_this.shopingCart[i].quantity) >
                                    Number(_this.shopingCart[i].option[0].quantity)) {
                                    _this.logger.debug("invoking quantity check1 " +
                                        Number(_this.shopingCart[i].quantity));
                                    _this.logger.debug("invoking quantity check2 " +
                                        _this.shopingCart[i].option[0].quantity);
                                    if (_this.shopingCart[i].option[0].quantity <= 0) {
                                        _this.quantityDebug.push({
                                            cart_id: _this.shopingCart[i].cart_id,
                                            product_quantity_count: true,
                                            product_quantity_available: false,
                                        });
                                        _this.proceed = false;
                                        // loading.dismiss();
                                    }
                                    else {
                                        _this.proceed = false;
                                        _this.quantityDebug.push({
                                            cart_id: _this.shopingCart[i].cart_id,
                                            product_quantity_count: false,
                                            product_quantity_available: true,
                                        });
                                        // loading.dismiss();
                                    }
                                }
                                else {
                                    _this.quantityDebug.push({
                                        cart_id: _this.shopingCart[i].cart_id,
                                        product_quantity_count: false,
                                        product_quantity_available: false,
                                    });
                                    // loading.dismiss();
                                }
                            }
                        }
                        else {
                            _this.quantityDebug.push({
                                cart_id: _this.shopingCart[i].cart_id,
                                product_quantity_count: false,
                                product_quantity_available: false,
                            });
                            _this.checkout = false;
                            // loading.dismiss();
                        }
                        _this.logger.debug("checking quantityDebug" + JSON.stringify(_this.quantityDebug));
                        _this.myValue.push({ quantity: _this.shopingCart[i].quantity });
                        _this.logger.debug("myvalue " + _this.myValue);
                    }
                }
                else {
                    _this.cartInfo = false;
                    _this.cartEmpty = true;
                    // loading.dismiss();
                }
            });
        }
    }
    presentToast() {
        let toast = this.toastCtrl.create({
            message: this.toastMessage,
            duration: 100,
            position: "middle",
        });
        // toast.onDidDismiss(() => {
        //   this.logger.info("Dismissed toast");
        // });
        // toast.present();
    }
    myValueChange(ev, prod, op, qa) {
        var _this = this;
        let loading = _this.loadingCtrl.create({
            message: ``,
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
                }
                else {
                    this.quantityDebug[0].product_quantity_count = false;
                    this.quantityDebug[0].product_quantity_available = false;
                }
            }
            else {
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
            let addProduct = {
                product_id: prod.product_id,
                cart_id: prod.cart_id,
                product_option: op.product_option_id,
                product_option_value: op.product_option_value_id,
                product_quantity: _this.qua,
            };
            _this.logger.debug("addProduct " + JSON.stringify(addProduct));
            // loading.present();
            this.users.updateCart(addProduct, function (result, data) {
                if (result == "1") {
                    _this.logger.debug("data" + data);
                    var _dataObj = JSON.parse(data);
                    _this.toastMessage = _dataObj.message;
                    _this.shopingCart = _dataObj.data;
                    _this.total = _dataObj.cart_total;
                    _this.allTotal = _dataObj.totals;
                    _this.logger.debug("allTotal " + _this.allTotal);
                    // loading.dismiss();
                    _this.presentToast();
                }
                else {
                    // loading.dismiss();
                    _this.networkService.showErrorAlert();
                }
            });
        }
        else {
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
                    }
                    else {
                        this.quantityDebug[0].product_quantity_count = false;
                        this.quantityDebug[0].product_quantity_available = false;
                    }
                }
                else {
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
                let addProduct = {
                    product_id: prod.product_id,
                    cart_id: prod.cart_id,
                    product_option: op.product_option_id,
                    product_option_value: op.product_option_value_id,
                    product_quantity: _this.qua,
                };
                _this.logger.debug("addProduct " + JSON.stringify(addProduct));
                // loading.present();
                this.users.updateCart(addProduct, function (result, data) {
                    if (result == "1") {
                        _this.logger.debug("data" + data);
                        var _dataObj = JSON.parse(data);
                        _this.toastMessage = _dataObj.message;
                        _this.shopingCart = _dataObj.data;
                        _this.total = _dataObj.cart_total;
                        _this.allTotal = _dataObj.totals;
                        _this.logger.debug("allTotal " + _this.allTotal);
                        // loading.dismiss();
                        _this.presentToast();
                    }
                    else {
                        // loading.dismiss();
                        _this.networkService.showErrorAlert();
                    }
                });
            }
            else if (op.quantity > 0) {
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
                let addProduct = {
                    product_id: prod.product_id,
                    cart_id: prod.cart_id,
                    product_option: op.product_option_id,
                    product_option_value: op.product_option_value_id,
                    product_quantity: op.quantity,
                };
                _this.logger.debug("addProduct " + JSON.stringify(addProduct));
                // loading.present();
                this.users.updateCart(addProduct, function (result, data) {
                    if (result == "1") {
                        _this.logger.debug("data" + data);
                        var _dataObj = JSON.parse(data);
                        _this.toastMessage = _dataObj.message;
                        _this.shopingCart = _dataObj.data;
                        _this.total = _dataObj.cart_total;
                        _this.allTotal = _dataObj.totals;
                        _this.logger.debug("allTotal " + _this.allTotal);
                        // loading.dismiss();
                        //_this.presentToast();
                    }
                    else {
                        // loading.dismiss();
                        _this.networkService.showErrorAlert();
                    }
                });
                _this.networkService.showSuccessAlert("Maximum quantity available " + op.quantity + " only");
            }
        }
        _this.logger.debug("checking the myvalue: " + JSON.stringify(_this.myValue));
        // loading.dismiss();
    }
    checkoutNav() {
        var _this = this;
        _this.proceed = true;
        _this.logger.info("invoking proced text checkout form");
        _this.logger.debug("cartTotal" + _this.total);
        let cartDetails = {
            cartTotal: _this.total,
            cartData: _this.shopingCart,
            allTotal: _this.allTotal,
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
                let navigationExtras = {
                    queryParams: {
                        data: JSON.stringify(cartDetails),
                    },
                };
                this.router.navigate(["/address"], navigationExtras);
                // _this.navCtrl.push(AddressPage, cartDetails);
            }
            else {
                _this.logger.info("invoking true part");
                _this.networkService.showSuccessAlert("Please remove error from cart");
            }
        }
        else {
            _this.networkService.showSuccessAlert("Please remove error from cart");
        }
    }
    deletItem(item) {
        var _this = this;
        var m = 0;
        _this.logger.debug("item " + JSON.stringify(item));
        for (var i = 0; i < _this.shopingCart.length; i++) {
            for (var h = 0; h < _this.shopingCart.length; h++) {
                if (item.cart_id != _this.shopingCart[h].cart_id) {
                    _this.quanobj = { quantity: _this.shopingCart[h].quantity };
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
                        product_quantity_available: _this.quantityDebug[j].product_quantity_available,
                    };
                    _this.quantitDebug[k] = _this.debug;
                    k++;
                }
            }
            _this.quantityDebug = _this.quantitDebug;
        }
        _this.logger.debug("list" + JSON.stringify(item.cart_id));
        let cartItem = {
            cart_id: item.cart_id,
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
            }
            else {
                _this.networkService.showErrorAlert();
            }
        });
    }
    backToHome() {
        this.router.navigateByUrl("/home");
    }
    ngOnInit() { }
};
ShoppingcartPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
ShoppingcartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-shoppingcart",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./shoppingcart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./shoppingcart.page.scss */ "./src/app/pages/shoppingcart/shoppingcart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], ShoppingcartPage);



/***/ })

}]);
//# sourceMappingURL=pages-shoppingcart-shoppingcart-module-es2015.js.map