(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-shoppingcart-shoppingcart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shoppingcart/shoppingcart.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Shopping Cart</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"shopping\">\r\n  <div class=\"product_details\" *ngFor=\"let item of shopingCart; let idx = index\">\r\n    <ion-row>\r\n      <div *ngIf=\"item.image_flag != 0\" class=\"divimageflag\">\r\n        <img class=\"imagecategory\"\r\n          src=\"https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg\" />\r\n        <!-- src=\"{{item.image}}\" /> -->\r\n      </div>\r\n      <ion-col>\r\n        <h5>{{item.name}}</h5>\r\n        <h6>{{item.model}}</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length > 1\">\r\n      <ion-col>\r\n        <ion-text color=\"dark\">\r\n          <h6>Seller: {{item?.option[1].value}}</h6>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length > 1\">\r\n      <ion-col>\r\n        <ion-text color=\"dark\">\r\n          <h6>Size: {{item?.option[0].value}}</h6>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"delar_name\" *ngIf=\"item?.option.length ==1\">\r\n      <ion-col>\r\n        <ion-text color=\"dark\">\r\n          <h6>Seller: {{item?.option[0].value}}</h6>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col class=\"price_list\">\r\n        <p class=\"discount_price\">{{item?.price | currency:'INR':true}}</p>\r\n      </ion-col>\r\n\r\n      <ion-col class=\"counter\">\r\n        <!--  To do\r\n<counter\r\n          [counterValue]=\"myValue[idx].quantity\"\r\n          (counterChange)=\"myValueChange($event,item,item?.option[0],myValue[idx].quantity);\"\r\n        ></counter>\r\n        -->\r\n      </ion-col>\r\n\r\n      <ion-col class=\"delete_icon\">\r\n        <ion-icon name=\"trash\" (click)=\"deletItem(item);\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"quantityDebug[idx].product_quantity_count\">\r\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\r\n      <ion-col>\r\n        <p class=\"remove_quantity\">\r\n          This product is not available, remove from cart.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"item.product_status == 0\">\r\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\r\n      <ion-col>\r\n        <p class=\"remove_quantity\">\r\n          This product is not available, remove from cart.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"quantityDebug[idx].product_quantity_available\">\r\n      <ion-icon name=\"alert\" class=\"iocon_alert\"></ion-icon>\r\n      <ion-col>\r\n        <p class=\"available_quantity\">\r\n          The quantity available is {{item?.option[0].quantity}}, change the\r\n          quantity.\r\n        </p>\r\n      </ion-col>\r\n    </ion-row>\r\n    <div class=\"shopingcartdiscount\" *ngIf=\"item?.option.length > 1\">\r\n      {{item?.option[1].sellerdiscount}}\r\n    </div>\r\n    <div class=\"shopingcartdiscount\" *ngIf=\"item?.option.length == 1\">\r\n      {{item?.option[0].sellerdiscount}}\r\n    </div>\r\n  </div>\r\n\r\n  <ion-card class=\"shopingcartaddress\" *ngIf=\"shopingCart.length > 0\">\r\n    <div *ngFor=\"let cost of allTotal\">\r\n      <ion-row class=\"addressrow\">\r\n        <ion-col>\r\n          {{cost.title}}\r\n        </ion-col>\r\n        <ion-col>\r\n          {{cost.value | currency:'INR':true}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-card>\r\n\r\n  <div *ngIf=\"shoppingCartCount\" class=\"empty_cart\">\r\n    <ion-row class=\"cart_icon\">\r\n      <ion-icon name=\"cart\"></ion-icon>\r\n    </ion-row>\r\n    <ion-label class=\"ion-text-wrap\">\r\n      Your cart is empty!\r\n    </ion-label>\r\n    <ion-button small class=\"ion-margin\" expand=\"full\" shape=\"round\" (click)=\"backToHome()\">\r\n      Start shopping\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"shopingCart.length > 0\">\r\n  <ion-toolbar>\r\n    <ion-button small class=\"ion-margin\" (click)=\"checkoutNav()\" shape=\"round\" expand=\"full\">Checkout</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-label.label-ios {\n  padding-top: 10px;\n  margin: 0px;\n}\n\nion-col {\n  padding-top: 12px;\n}\n\n.shopping {\n  background-color: WhiteSmoke;\n}\n\n.shopping ion-card {\n  background: #f3f2f2;\n  font-size: -1px;\n}\n\n.shopping p.available_quantity {\n  color: red;\n}\n\n.shopping p.remove_quantity {\n  color: red;\n}\n\n.shopping .iocon_alert {\n  color: red;\n  padding-top: 10px;\n}\n\n.shopping .image_div {\n  width: 25%;\n  float: left;\n}\n\n.shopping .image_div p {\n  font-size: 20px;\n  margin-top: 30px;\n}\n\n.shopping .image_div img {\n  padding-top: 30px;\n}\n\n.shopping .item {\n  margin-left: -180px;\n}\n\n.shopping .product_details {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n  margin-left: 5px;\n}\n\n.shopping .product_details h6 {\n  font-size: 12px;\n  margin-top: 1px;\n}\n\n.shopping .product_details ion-col.counter {\n  margin-left: 20px;\n}\n\n.shopping .product_details p.orginal_price {\n  text-decoration: line-through;\n}\n\n.shopping .product_details p.discount_price {\n  font-weight: bold;\n}\n\n.shopping .product_details ion-col.delete_icon {\n  font-size: 20px;\n  color: #bdbdbd;\n  padding-left: 10px;\n  margin-right: 35px;\n}\n\n.shopping .product_details .delar_name {\n  padding-top: -2px;\n}\n\nion-col[width-50] {\n  font-size: 17px;\n  color: white;\n  text-align: center;\n}\n\n.empty_cart {\n  text-align: center;\n  color: #5f5e5e;\n  padding-top: 15px;\n}\n\n.empty_cart .cart_icon ion-icon {\n  margin: auto;\n  display: block;\n  color: #5f5e5e;\n  font-size: 30px;\n}\n\n.empty_cart .button_home button {\n  margin: auto;\n  display: block;\n  background-color: #fe5919;\n}\n\nion-icon.icon-ios.ion-ios-trash {\n  /* padding-left: 19px; */\n  float: right;\n}\n\nion-icon.icon-md.ion-md-trash {\n  /* padding-left: 19px; */\n  float: right;\n}\n\nion-row.footer_color {\n  margin-top: -4px;\n  height: 45px;\n  color: white;\n  margin-left: 40px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.checkout {\n  margin-top: 15px;\n}\n\n.toolbar-ios-favorite .toolbar-background-ios {\n  border-color: #02bf2c;\n  background: #02bf2c;\n}\n\n.toolbar-md-favorite .toolbar-background-md {\n  border-color: #02bf2c;\n  background: #02bf2c;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n\n.shopingcartaddress {\n  max-height: 105px;\n  margin-top: 20px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.addressrow {\n  margin-top: 8px;\n}\n\n.shopingcartdiscount {\n  color: blue;\n}\n\n.imagecategory {\n  width: 47%;\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcHBpbmdjYXJ0L0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcc2hvcHBpbmdjYXJ0XFxzaG9wcGluZ2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaG9wcGluZ2NhcnQvc2hvcHBpbmdjYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFRTtFQUNFLDRCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUNDTjs7QURDSTtFQUNFLFVBQUE7QUNDTjs7QURDSTtFQUNFLFVBQUE7QUNDTjs7QURFSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0FOOztBREdJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNETjs7QURFTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdNO0VBQ0UsaUJBQUE7QUNEUjs7QURJSTtFQUVFLG1CQUFBO0FDSE47O0FES0k7RUFFRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNKTjs7QURNTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FDSlI7O0FET007RUFDRSxpQkFBQTtBQ0xSOztBRE9NO0VBQ0UsNkJBQUE7QUNMUjs7QURPTTtFQUNFLGlCQUFBO0FDTFI7O0FET007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7QUNOUjs7QURTTTtFQUNFLGlCQUFBO0FDUFI7O0FEZUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FDYko7O0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNiSjs7QURnQk07RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDZFI7O0FEa0JNO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2hCUjs7QURxQ0U7RUFDRSx3QkFBQTtFQUNBLFlBQUE7QUNsQ0o7O0FEcUNFO0VBQ0Usd0JBQUE7RUFDQSxZQUFBO0FDbENKOztBRHFDRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNsQ0o7O0FEb0NFO0VBQ0UsZ0JBQUE7QUNqQ0o7O0FEb0NFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ2pDSjs7QURvQ0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDakNKOztBRG9DRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNqQ0o7O0FEb0NFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNqQ0o7O0FEbUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2hDSjs7QURrQ0U7RUFDRSxlQUFBO0FDL0JKOztBRGlDRTtFQUNHLFdBQUE7QUM5Qkw7O0FEaUNFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUM5Qko7O0FEaUNFO0VBQ00sa0JBQUE7RUFDRixtQkFBQTtBQzlCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3BwaW5nY2FydC9zaG9wcGluZ2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsLmxhYmVsLWlvcyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY29sIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuc2hvcHBpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YzZjJmMjtcclxuICAgICAgZm9udC1zaXplOiAtMXB4O1xyXG4gICAgfVxyXG4gICAgcC5hdmFpbGFibGVfcXVhbnRpdHkge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgcC5yZW1vdmVfcXVhbnRpdHkge1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvY29uX2FsZXJ0IHtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW1hZ2VfZGl2IHtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC8vYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLml0ZW0ge1xyXG4gICAgICAvL21hcmdpbi1yaWdodDogMjVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xODBweDtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0X2RldGFpbHMge1xyXG4gICAgICAvL2Zsb2F0OmxlZnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgXHJcbiAgICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1jb2wuY291bnRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgcC5vcmdpbmFsX3ByaWNlIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgfVxyXG4gICAgICBwLmRpc2NvdW50X3ByaWNlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgICBpb24tY29sLmRlbGV0ZV9pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIC8vZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzVweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZGVsYXJfbmFtZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IC0ycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8gLmNvbHtcclxuICAvLyBcdG1hcmdpbjo0cHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIGlvbi1jb2xbd2lkdGgtNTBdIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuZW1wdHlfY2FydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzVmNWU1ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIFxyXG4gICAgLmNhcnRfaWNvbiB7XHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM1ZjVlNWU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX2hvbWUge1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1OTE5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyAgICBpb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcclxuICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAvLyAgICAgLyogZm9udC1zaXplOiAzMHB4OyAqL1xyXG4gICAgLy8gfVxyXG4gIFxyXG4gICAgLy8gaW9uLWljb24uaWNvbi1pb3MuaW9uLWlvcy10cmFzaCB7XHJcbiAgICAvLyAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgLy8gfVxyXG4gICAgLy8gICAgaW9uLWljb24uaWNvbi1tZC5pb24tbWQtdHJhc2gge1xyXG4gICAgLy8gICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIC8vIH1cclxuICBcclxuICAgIC8vIGlvbi1yb3cuZm9vdGVyX2NvbG9yIHtcclxuICAgIC8vICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OiAxOXB4OyAqL1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDE5cHg7ICovXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1yb3cuZm9vdGVyX2NvbG9yIHtcclxuICAgIG1hcmdpbi10b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY2hlY2tvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb2xiYXItaW9zLWZhdm9yaXRlIC50b29sYmFyLWJhY2tncm91bmQtaW9zIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzAyYmYyYztcclxuICAgIGJhY2tncm91bmQ6ICMwMmJmMmM7XHJcbiAgfVxyXG4gIFxyXG4gIC50b29sYmFyLW1kLWZhdm9yaXRlIC50b29sYmFyLWJhY2tncm91bmQtbWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDJiZjJjO1xyXG4gICAgYmFja2dyb3VuZDogIzAyYmYyYztcclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuc2hvcGluZ2NhcnRhZGRyZXNzIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuYWRkcmVzc3JvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgfVxyXG4gIC5zaG9waW5nY2FydGRpc2NvdW50e1xyXG4gICAgIGNvbG9yOiBibHVlO1xyXG4gIFxyXG4gIH1cclxuICAuaW1hZ2VjYXRlZ29yeXtcclxuICAgIHdpZHRoOiA0NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgLmRpdmltYWdlZmxhZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTU3cHg7XHJcbiAgfSIsImlvbi1sYWJlbC5sYWJlbC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnNob3BwaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5zaG9wcGluZyBpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmM2YyZjI7XG4gIGZvbnQtc2l6ZTogLTFweDtcbn1cbi5zaG9wcGluZyBwLmF2YWlsYWJsZV9xdWFudGl0eSB7XG4gIGNvbG9yOiByZWQ7XG59XG4uc2hvcHBpbmcgcC5yZW1vdmVfcXVhbnRpdHkge1xuICBjb2xvcjogcmVkO1xufVxuLnNob3BwaW5nIC5pb2Nvbl9hbGVydCB7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnNob3BwaW5nIC5pbWFnZV9kaXYge1xuICB3aWR0aDogMjUlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5zaG9wcGluZyAuaW1hZ2VfZGl2IHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4uc2hvcHBpbmcgLmltYWdlX2RpdiBpbWcge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5zaG9wcGluZyAuaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTgwcHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLnNob3BwaW5nIC5wcm9kdWN0X2RldGFpbHMgaW9uLWNvbC5jb3VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uc2hvcHBpbmcgLnByb2R1Y3RfZGV0YWlscyBwLm9yZ2luYWxfcHJpY2Uge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIHAuZGlzY291bnRfcHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIGlvbi1jb2wuZGVsZXRlX2ljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbi5zaG9wcGluZyAucHJvZHVjdF9kZXRhaWxzIC5kZWxhcl9uYW1lIHtcbiAgcGFkZGluZy10b3A6IC0ycHg7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVtcHR5X2NhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNWY1ZTVlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5lbXB0eV9jYXJ0IC5jYXJ0X2ljb24gaW9uLWljb24ge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzVmNWU1ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmVtcHR5X2NhcnQgLmJ1dHRvbl9ob21lIGJ1dHRvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTU5MTk7XG59XG5cbmlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICAvKiBwYWRkaW5nLWxlZnQ6IDE5cHg7ICovXG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW9uLWljb24uaWNvbi1tZC5pb24tbWQtdHJhc2gge1xuICAvKiBwYWRkaW5nLWxlZnQ6IDE5cHg7ICovXG4gIGZsb2F0OiByaWdodDtcbn1cblxuaW9uLXJvdy5mb290ZXJfY29sb3Ige1xuICBtYXJnaW4tdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jaGVja291dCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50b29sYmFyLWlvcy1mYXZvcml0ZSAudG9vbGJhci1iYWNrZ3JvdW5kLWlvcyB7XG4gIGJvcmRlci1jb2xvcjogIzAyYmYyYztcbiAgYmFja2dyb3VuZDogIzAyYmYyYztcbn1cblxuLnRvb2xiYXItbWQtZmF2b3JpdGUgLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7XG4gIGJvcmRlci1jb2xvcjogIzAyYmYyYztcbiAgYmFja2dyb3VuZDogIzAyYmYyYztcbn1cblxuLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIC8qIGNvbG9yOiBibGFjazsgKi9cbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hvcGluZ2NhcnRhZGRyZXNzIHtcbiAgbWF4LWhlaWdodDogMTA1cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGRyZXNzcm93IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uc2hvcGluZ2NhcnRkaXNjb3VudCB7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaW1hZ2VjYXRlZ29yeSB7XG4gIHdpZHRoOiA0NyU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGl2aW1hZ2VmbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xufSJdfQ== */");

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