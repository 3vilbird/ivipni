(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wish-list-wish-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish-list/wish-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish-list/wish-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Wishlist</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content padding class=\"products\">\r\n  <div class=\"borderr\" *ngFor=\"let category of catprodArray; let idx = index\">\r\n    <ion-card>\r\n      <ion-row>\r\n        <div *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\r\n          <!--  {{category.image}} -->\r\n          <img class=\"imagecategory\" src=\"{{tempimg}}\" />\r\n        </div>\r\n        <ion-col col-8>\r\n          <h2>{{category.name}}</h2>\r\n          <h6>{{category.model}}</h6>\r\n        </ion-col>\r\n        <ion-col col-2>\r\n          <ion-icon name=\"trash\" class=\"trash\" (click)=\"deleteWishlist(category);\"></ion-icon>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col *ngIf=\"category?.option1.length > 0\">\r\n          <ion-label>Seller:</ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"options_select\">\r\n          <div *ngIf=\"category?.option1.length > 1\">\r\n            <ion-item>\r\n              <ion-label floating></ion-label>\r\n\r\n              <ion-select [interfaceOptions]=\"selectOptions\" (ngModel)=\"place\"\r\n                (ionChange)=\"optionsFn($event, category.product_id);\">\r\n                <ion-select-option [value]=\"item\" *ngFor=\" let item of category?.option1; let subidx = index \">\r\n                  <span>{{item.name}}</span>&nbsp;&nbsp; - &nbsp;&nbsp;\r\n                  <span>{{item.price | currency:'INR':true}}</span>\r\n                </ion-select-option>\r\n              </ion-select><small class=\"smallcount\">&nbsp;&nbsp;{{category.sellercount-1}} more seller</small>\r\n            </ion-item>\r\n          </div>\r\n\r\n          <div class=\"options_height\" *ngIf=\"category?.option1.length == 1\">\r\n            {{prods[idx].name}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"options_margin\">\r\n        <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\r\n          <ion-label>Size:</ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"options_select\">\r\n          <div class=\"options_height\" *ngIf=\"prods[idx].option2value.length > 1\">\r\n            <ion-item>\r\n              <ion-label floating></ion-label>\r\n\r\n              <ion-select [interfaceOptions]=\"selectOptions\" (ngModel)=\"place1\"\r\n                (ionChange)=\"option1Fn($event, category.product_id);\">\r\n                <ion-select-option [value]=\"temp\" *ngFor=\" let temp of prods[idx]?.option2value;let subidx = index \">\r\n                  <span>\r\n                    <p>{{temp.name}}</p>\r\n                  </span>\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"options_height\" *ngIf=\"prods[idx].option2value.length == 1\">\r\n            <div class=\"options_height\" *ngIf=\"category?.option1[0].option2.length > 1\">\r\n              <ion-item>\r\n                <ion-label floating></ion-label>\r\n\r\n                <ion-select [interfaceOptions]=\"selectOptions\" (ngModel)=\"place\"\r\n                  (ionChange)=\"option1Fn($event, category.product_id);\">\r\n                  <ion-select-option [value]=\"temp\"\r\n                    *ngFor=\" let temp of category?.option1[0].option2; let subidx = index \">\r\n                    <p>{{temp.name}}</p>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div class=\"options_height\" *ngIf=\"prods[idx].option2value.length ==1\">\r\n              {{prods[idx].option2value[0].name}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div class=\"margin_last_row\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"price_main\">\r\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice != 0\">\r\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\r\n              </p>\r\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\r\n              <ion-input type=\"number\" value=\"\" [(ngModel)]=\"prods[idx].requestedQty\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div *ngIf=\"category.product_status == 1\">\r\n              <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\r\n                <ion-icon name=\"cart\" class=\"cart\" (click)=\"addToCart(category, prods[idx])\"></ion-icon>\r\n              </div>\r\n              <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\r\n                <div class=\"outofStack\">out of stock</div>\r\n                <br />\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"category.product_status == 0\" class=\"icon_cart_color\">\r\n              <div class=\"outofStack\">This product is not available</div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"wishlist\">\r\n    <h5 class=\"message\">There are no items in your Wishlist.</h5>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/wish-list/wish-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/wish-list/wish-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: WishListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPageRoutingModule", function() { return WishListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wish_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wish-list.page */ "./src/app/pages/wish-list/wish-list.page.ts");




const routes = [
    {
        path: '',
        component: _wish_list_page__WEBPACK_IMPORTED_MODULE_3__["WishListPage"]
    }
];
let WishListPageRoutingModule = class WishListPageRoutingModule {
};
WishListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WishListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/wish-list/wish-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/wish-list/wish-list.module.ts ***!
  \*****************************************************/
/*! exports provided: WishListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPageModule", function() { return WishListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _wish_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wish-list-routing.module */ "./src/app/pages/wish-list/wish-list-routing.module.ts");
/* harmony import */ var _wish_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wish-list.page */ "./src/app/pages/wish-list/wish-list.page.ts");







let WishListPageModule = class WishListPageModule {
};
WishListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wish_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishListPageRoutingModule"]
        ],
        declarations: [_wish_list_page__WEBPACK_IMPORTED_MODULE_6__["WishListPage"]]
    })
], WishListPageModule);



/***/ }),

/***/ "./src/app/pages/wish-list/wish-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/wish-list/wish-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("wish-list-products .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n}\n\nion-icon.icon-ios.ion-ios-trash {\n  font-size: 30px;\n  color: #bdbdbd;\n}\n\nion-icon.icon-md.ion-md-trash {\n  font-size: 30px;\n  color: #bdbdbd;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: right;\n}\n\n.products ion-select {\n  width: 100%;\n  max-width: 175px;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .image_div p {\n  font-size: 20px;\n  margin-top: 30px !important;\n}\n\n.products .smallcount {\n  color: blue;\n}\n\n.products .detail_div {\n  width: 70%;\n  float: left;\n  margin-top: -13px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .detail_div .options_margin {\n  margin-top: -7px;\n  margin-left: -1px;\n}\n\n.products .margin_last_row {\n  margin-top: -7px !important;\n}\n\n.products .options_select {\n  margin-left: -171px;\n}\n\n.products .options_height {\n  margin-top: 15px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 15px;\n}\n\n.products .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col[width-50].first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col[width-50].second_col {\n  color: white;\n  background-color: orange;\n}\n\nion-col[width-33], ion-col[width-34] {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n\n.message {\n  color: lightgrey;\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.price {\n  margin-top: -11px;\n}\n\n.price_main {\n  padding-right: 30px;\n  margin-top: 10px;\n}\n\n.quantity1 ion-input {\n  display: inline-block;\n  max-width: 60px;\n  padding-top: 5px;\n  font-size: 2rem;\n  height: 60px;\n}\n\n.discount_amt {\n  text-decoration: line-through;\n  color: gray;\n  margin-top: 5px;\n}\n\n.price {\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2lzaC1saXN0L0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcd2lzaC1saXN0XFx3aXNoLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93aXNoLWxpc3Qvd2lzaC1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNESjs7QURHRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0U7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQUo7O0FESUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNETjs7QURHSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNETjs7QURHSTtFQUNFLFlBQUE7QUNETjs7QURJSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0ZOOztBRElJO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBRE1NO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FDSlI7O0FET0k7RUFDRixXQUFBO0FDTEY7O0FET0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDTE47O0FET007RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNMUjs7QURRTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFFNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ05SOztBRFNNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BSOztBRFVNO0VBQ0Usa0JBQUE7QUNSUjs7QURXTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNUUjs7QURhSTtFQUNFLDJCQUFBO0FDWE47O0FEYUk7RUFDRSxtQkFBQTtBQ1hOOztBRGFJO0VBQ0UsZ0JBQUE7QUNYTjs7QURjSTtFQUNFLGNBQUE7QUNaTjs7QURjSTtFQUNFLGNBQUE7QUNaTjs7QURjSTtFQUNFLGVBQUE7QUNaTjs7QURjSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDWk47O0FEZUk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNiTjs7QURnQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNkTjs7QURrQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2ZKOztBRGtCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDZko7O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDZko7O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FDZko7O0FEa0JFO0VBR0UsbUJBQUE7VUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGlCRTtFQUNFLGdCQUFBO0FDZEo7O0FEaUJFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDZEo7O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURlRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNaSjs7QURjRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNYSjs7QURjRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNYSjs7QURjRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURhRTtFQUNNLGtCQUFBO0VBQ0YsbUJBQUE7QUNWTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpc2gtbGlzdC93aXNoLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsid2lzaC1saXN0LXByb2R1Y3Rze1xyXG4gICAgLmltYWdlY2F0ZWdvcnl7XHJcbiAgICB3aWR0aDo0NiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIH1cclxuICBpb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gIH1cclxuICBpb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogI2JkYmRiZDtcclxuICB9XHJcbiAgXHJcbiAgLnFudHlDb2xvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAucHJvZHVjdHMge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTc1cHg7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW1hZ2VfZGl2IHtcclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNtYWxsY291bnR7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsX2RpdiB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICBcclxuICAgICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tYmxvY2sge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAub3B0aW9uc19tYXJnaW4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5tYXJnaW5fbGFzdF9yb3cge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAub3B0aW9uc19zZWxlY3Qge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE3MXB4O1xyXG4gICAgfVxyXG4gICAgLm9wdGlvbnNfaGVpZ2h0IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uX2hlYXJ0X3JlZCB7XHJcbiAgICAgIGNvbG9yOiAjNTM3ZmM1O1xyXG4gICAgfVxyXG4gICAgLmljb25faGVhcnQge1xyXG4gICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgIH1cclxuICAgIC5oZWFydCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIH1cclxuICAgIC5jYXJ0IHtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBjb2xvcjogIzE1YTAzMztcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uX2NhcnQge1xyXG4gICAgICBjb2xvcjogIzE1YTAzMztcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uX2NhcnRfY29sb3Ige1xyXG4gICAgICBjb2xvcjogI2Q0MzI4MTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLWlvcyB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2xbd2lkdGgtNTBdLmZpcnN0X2NvbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xyXG4gIH1cclxuICBcclxuICBpb24tY29sW3dpZHRoLTUwXS5zZWNvbmRfY29sIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbFt3aWR0aC0zM10sIGlvbi1jb2xbd2lkdGgtMzRdIHtcclxuICAgIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xyXG4gICAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIGZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIG1heC13aWR0aDogMzMuMzMzMyU7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgfVxyXG4gIC5tZXNzYWdlIHtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAucHJpY2Uge1xyXG4gICAgbWFyZ2luLXRvcDogLTExcHg7XHJcbiAgfVxyXG4gIC5wcmljZV9tYWluIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuICAucXVhbnRpdHkxIGlvbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAyLjByZW07XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNjb3VudF9hbXQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLnByaWNlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmRpdmltYWdlZmxhZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTU3cHg7XHJcbiAgfVxyXG4gICIsIndpc2gtbGlzdC1wcm9kdWN0cyAuaW1hZ2VjYXRlZ29yeSB7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbmlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG5pb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5xbnR5Q29sb3Ige1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5wcm9kdWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZHVjdHMgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLnByb2R1Y3RzIGlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3RzIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdHMgLmltYWdlX2RpdiBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMgLnNtYWxsY291bnQge1xuICBjb2xvcjogYmx1ZTtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tYmxvY2sge1xuICBtaW4taGVpZ2h0OiAzLjRyZW07XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLm9wdGlvbnNfbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4ucHJvZHVjdHMgLm1hcmdpbl9sYXN0X3JvdyB7XG4gIG1hcmdpbi10b3A6IC03cHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0cyAub3B0aW9uc19zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogLTE3MXB4O1xufVxuLnByb2R1Y3RzIC5vcHRpb25zX2hlaWdodCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnRfcmVkIHtcbiAgY29sb3I6ICM1MzdmYzU7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnQge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cbi5wcm9kdWN0cyAuaGVhcnQge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucHJvZHVjdHMgLmNhcnQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMTVhMDMzO1xufVxuLnByb2R1Y3RzIC5pY29uX2NhcnQge1xuICBjb2xvcjogIzE1YTAzMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9kdWN0cyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgY29sb3I6ICNkNDMyODE7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdLmZpcnN0X2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbn1cblxuaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG5pb24tY29sW3dpZHRoLTMzXSwgaW9uLWNvbFt3aWR0aC0zNF0ge1xuICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbn1cblxuLm1lc3NhZ2Uge1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG59XG5cbi5wcmljZV9tYWluIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnF1YW50aXR5MSBpb24taW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5kaXNjb3VudF9hbXQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5kaXZpbWFnZWZsYWcge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTU3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/wish-list/wish-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/wish-list/wish-list.page.ts ***!
  \***************************************************/
/*! exports provided: WishListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListPage", function() { return WishListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");

// all clear







let WishListPage = class WishListPage {
    constructor(navCtrl, productServices, users, toastCtrl, loadingCtrl, networkService, logger, alertCtrl) {
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.alertCtrl = alertCtrl;
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
        this.catprodArray = [];
        this.prods = [];
        this.myValue = [];
        this.option2value = [];
        this.wishlist = false;
        this.dataarry = [];
        this.selectOptions = {
            title: "select",
        };
        var _this = this;
        if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
        }
        else {
            // this.loading.present();
            this.loder();
            this.productServices.getWishlist(function (data) {
                _this.logger.debug("checking wishListDetails" + JSON.stringify(data));
                _this.catprodArray = data.data.products;
                _this.logger.debug("checking the catprodArray " + JSON.stringify(_this.catprodArray));
                _this.prods = [];
                _this.myValue = [];
                var m = 0;
                if (_this.catprodArray.length == 0) {
                    // this.loading.dismiss();
                    alert("there is no wishlistpage");
                }
                else {
                    for (var i = 0; i < _this.catprodArray.length; i++) {
                        var prod = {
                            prod_id: _this.catprodArray[i].product_id,
                        };
                        if (_this.catprodArray[i].option1[0].option2.length > 0) {
                            prod["name1"] = _this.catprodArray[i].option1[0].option2[0].name;
                            prod["product_option_id1"] =
                                _this.catprodArray[i].option1[0].option2[0].product_option_id;
                            prod["product_option_value_id1"] =
                                _this.catprodArray[i].option1[0].option2[0].product_option_value_id;
                            prod["option2value"] = [];
                            for (var k = 0; k < _this.catprodArray[i].option1[0].option2.length; k++) {
                                _this.dataoption = {
                                    product_option_id: _this.catprodArray[i].option1[0].option2[k]
                                        .product_option_id,
                                    product_option_value_id: _this.catprodArray[i].option1[0].option2[k]
                                        .product_option_value_id,
                                    seller_id: _this.catprodArray[i].option1[0].option2[k].seller_id,
                                    name: _this.catprodArray[i].option1[0].option2[k].name,
                                    quantity: _this.catprodArray[i].option1[0].option2[k].quantity,
                                };
                                if (_this.dataoption) {
                                    if (_this.dataoption.quantity > 0) {
                                        prod["option2value"][m] = _this.dataoption;
                                        m++;
                                    }
                                }
                            }
                        }
                        else {
                            prod["option2value"] = [];
                            prod["name1"] = "";
                            prod["product_option_id1"] = "";
                            prod["product_option_value_id1"] = "";
                        }
                        if (_this.catprodArray[i].option1.length > 0) {
                            prod["product_option_id"] =
                                _this.catprodArray[i].option1[0].product_option_id;
                            prod["product_option_value_id"] =
                                _this.catprodArray[i].option1[0].product_option_value_id;
                            prod["name"] = _this.catprodArray[i].option1[0].name;
                            prod["quantity"] = _this.catprodArray[i].option1[0].quantity;
                            prod["sku"] = _this.catprodArray[i].option1[0].sku;
                            prod["price"] = _this.catprodArray[i].option1[0].price;
                            if (Number(_this.catprodArray[i].option1[0].salesprice) >
                                _this.catprodArray[i].option1[0].price) {
                                prod["salesprice"] =
                                    _this.catprodArray[i].option1[0].salesprice;
                            }
                            else {
                                prod["salesprice"] = "";
                            }
                            prod["sellerdiscount"] =
                                _this.catprodArray[i].option1[0].sellerdiscount;
                            prod["requestedQty"] = 1;
                        }
                        else {
                            prod["product_option_id"] = "";
                            prod["product_option_value_id"] = "";
                            prod["name"] = "";
                            prod["quantity"] = "";
                            prod["sku"] = "";
                            prod["price"] = "";
                            prod["salesprice"] = "";
                            prod["sellerdiscount"] = "";
                            prod["requestedQty"] = "";
                        }
                        _this.prods.push(prod);
                        _this.logger.debug("prods " + _this.prods);
                        _this.myValue.push({ quantity: "1" });
                        _this.logger.debug("myvalue " + _this.myValue);
                        // this.loading.dismiss();
                    }
                }
            });
        }
    }
    // loader
    loder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: ``,
                duration: 2000,
            });
            yield loading.present();
        });
    }
    // toast
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            toast.present();
        });
    }
    deleteWishlist(category) {
        var _this = this;
        var k = 0;
        for (var i = 0; i <= _this.catprodArray.length; i++) {
            if (category == _this.catprodArray[i]) {
                _this.catprodArray.splice(i, 1);
            }
        }
        _this.logger.debug("list" + JSON.stringify(category));
        for (var j = 0; j < _this.prods.length; j++) {
            if (_this.prods[j].prod_id != category.product_id) {
                _this.prod1 = {
                    prod_id: _this.prods[j].prod_id,
                    option2value: _this.prods[j].option2value,
                    name1: _this.prods[j].name1,
                    product_option_id1: _this.prods[j].product_option_id1,
                    product_option_value_id1: _this.prods[j].product_option_value_id1,
                    product_option_id: _this.prods[j].product_option_id,
                    product_option_value_id: _this.prods[j].product_option_value_id,
                    name: _this.prods[j].name,
                    quantity: _this.prods[j].quantity,
                    sku: _this.prods[j].sku,
                    price: _this.prods[j].price,
                    salesprice: _this.prods[j].salesprice,
                    sellerdiscount: _this.prods[j].sellerdiscount,
                    requestedQty: _this.prods[j].requestedQty,
                };
                _this.prods[k] = _this.prod1;
                k++;
            }
        }
        let wishProduct = {
            product_id: category.product_id,
        };
        this.users.deleteWishlist(wishProduct, function (result, data) {
            if (result == "1") {
                if (_this.catprodArray.length == 0) {
                    _this.wishlist = true;
                }
                _this.toastMessage = "Product removed from wishlist";
                _this.presentToast();
            }
            else {
                _this.networkService.showErrorAlert();
            }
        });
    }
    addToCart(category, products) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (category.alternate_brand == "YES") {
                let alert = yield this.alertCtrl.create({
                    header: "Ivipni",
                    message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
                    buttons: [
                        {
                            text: "No",
                            role: "cancel",
                            handler: () => {
                                category.alternate_brand = "NO";
                                this.wishlistToCart(category, products);
                            },
                        },
                        {
                            text: "Yes",
                            handler: () => {
                                category.alternate_brand = "YES";
                                this.wishlistToCart(category, products);
                            },
                        },
                    ],
                });
                alert.present();
            }
            else {
                category.alternate_brand = "";
                this.wishlistToCart(category, products);
            }
        });
    }
    wishlistToCart(category, products) {
        let addProduct;
        var _this = this;
        if (category.quantity_check == "NO") {
            for (var i = 0; i < _this.catprodArray.length; i++) {
                if (_this.catprodArray[i].product_id == category.product_id) {
                    _this.prods[i].requestedQty = products.requestedQty;
                    for (var i = 0; i < _this.prods.length; i++) {
                        if (_this.prods[i].prod_id == category.product_id) {
                            addProduct = {
                                product_id: category.product_id,
                                product_option: _this.prods[i]["product_option_id"],
                                product_option_value: _this.prods[i]["product_option_value_id"],
                                product_option1: _this.prods[i].product_option_id1,
                                product_option_value1: _this.prods[i].product_option_value_id1,
                                product_quantity: _this.prods[i]["requestedQty"],
                                alternate_brand: category.alternate_brand,
                            };
                            _this.logger.debug("checking wishlistToCart object " + JSON.stringify(addProduct));
                            break;
                        }
                    }
                }
            }
            var k = 0;
            for (var j = 0; j < _this.prods.length; j++) {
                if (_this.prods[j].prod_id != category.product_id) {
                    _this.prod1 = {
                        prod_id: _this.prods[j].prod_id,
                        option2value: _this.prods[j].option2value,
                        name1: _this.prods[j].name1,
                        product_option_id1: _this.prods[j].product_option_id1,
                        product_option_value_id1: _this.prods[j].product_option_value_id1,
                        product_option_id: _this.prods[j].product_option_id,
                        product_option_value_id: _this.prods[j].product_option_value_id,
                        name: _this.prods[j].name,
                        quantity: _this.prods[j].quantity,
                        sku: _this.prods[j].sku,
                        price: _this.prods[j].price,
                        salesprice: _this.prods[j].salesprice,
                        sellerdiscount: _this.prods[j].sellerdiscount,
                        requestedQty: _this.prods[j].requestedQty,
                    };
                    _this.prods[k] = _this.prod1;
                    k++;
                }
            }
            for (var i = 0; i <= _this.catprodArray.length; i++) {
                if (category == _this.catprodArray[i]) {
                    _this.catprodArray.splice(i, 1);
                }
            }
            if (addProduct["product_quantity"] > 0) {
                this.users.wishlistToCart(addProduct, function (result, data) {
                    if (result == "1") {
                        if (_this.catprodArray.length == 0) {
                            _this.wishlist = true;
                        }
                        var _dataObj = JSON.parse(data);
                        _this.toastMessage = _dataObj.message;
                        _this.presentToast();
                    }
                    else {
                        _this.networkService.showErrorAlert();
                    }
                });
            }
            else {
                _this.networkService.showSuccessAlert("minimum quantity 1");
            }
        }
        else {
            if (Number(products.requestedQty) <= Number(products.quantity)) {
                for (var i = 0; i < _this.catprodArray.length; i++) {
                    if (_this.catprodArray[i].product_id == category.product_id) {
                        _this.prods[i].requestedQty = products.requestedQty;
                        for (var i = 0; i < _this.prods.length; i++) {
                            if (_this.prods[i].prod_id == category.product_id) {
                                addProduct = {
                                    product_id: category.product_id,
                                    product_option: _this.prods[i]["product_option_id"],
                                    product_option_value: _this.prods[i]["product_option_value_id"],
                                    product_option1: _this.prods[i].product_option_id1,
                                    product_option_value1: _this.prods[i].product_option_value_id1,
                                    product_quantity: _this.prods[i]["requestedQty"],
                                    alternate_brand: category.alternate_brand,
                                };
                                _this.logger.debug("checking wishlistToCart object " + JSON.stringify(addProduct));
                                break;
                            }
                        }
                    }
                }
                var k = 0;
                for (var j = 0; j < _this.prods.length; j++) {
                    if (_this.prods[j].prod_id != category.product_id) {
                        _this.prod1 = {
                            prod_id: _this.prods[j].prod_id,
                            option2value: _this.prods[j].option2value,
                            name1: _this.prods[j].name1,
                            product_option_id1: _this.prods[j].product_option_id1,
                            product_option_value_id1: _this.prods[j].product_option_value_id1,
                            product_option_id: _this.prods[j].product_option_id,
                            product_option_value_id: _this.prods[j].product_option_value_id,
                            name: _this.prods[j].name,
                            quantity: _this.prods[j].quantity,
                            sku: _this.prods[j].sku,
                            price: _this.prods[j].price,
                            salesprice: _this.prods[j].salesprice,
                            sellerdiscount: _this.prods[j].sellerdiscount,
                            requestedQty: _this.prods[j].requestedQty,
                        };
                        _this.prods[k] = _this.prod1;
                        k++;
                    }
                }
                for (var i = 0; i <= _this.catprodArray.length; i++) {
                    if (category == _this.catprodArray[i]) {
                        _this.catprodArray.splice(i, 1);
                    }
                }
                if (addProduct["product_quantity"] > 0) {
                    this.users.wishlistToCart(addProduct, function (result, data) {
                        if (result == "1") {
                            if (_this.catprodArray.length == 0) {
                                _this.wishlist = true;
                            }
                            var _dataObj = JSON.parse(data);
                            _this.toastMessage = _dataObj.message;
                            _this.presentToast();
                        }
                        else {
                            _this.networkService.showErrorAlert();
                        }
                    });
                }
                else {
                    _this.networkService.showSuccessAlert("minimum quantity 1");
                }
            }
            else {
                _this.networkService.showSuccessAlert("you have maximum qnty of " + products.quantity);
            }
        }
    }
    optionsFn(ev, id) {
        var k = 0;
        var _this = this;
        _this.logger.debug("checking options item " + _this.place);
        _this.logger.debug("ev " + ev);
        _this.optionEvent = ev;
        _this.logger.debug("id " + id);
        for (var i = 0; i < _this.catprodArray.length; i++) {
            if (_this.catprodArray[i].product_id == id) {
                _this.prods[i].option2value = [];
                for (var q = 0; q < _this.catprodArray[i].option1.length; q++) {
                    if (_this.catprodArray[i].option1[q].option_value_id ==
                        ev.option_value_id) {
                        for (var j = 0; j < _this.catprodArray[i].option1[q].option2.length; j++) {
                            if (_this.catprodArray[i].option1[q].option2[j].seller_id ==
                                ev.option_value_id) {
                                _this.prods[i].name1 =
                                    _this.catprodArray[i].option1[q].option2[0].name;
                                _this.prods[i].product_option_id1 =
                                    _this.catprodArray[i].option1[q].option2[0].product_option_id;
                                _this.prods[i].product_option_value_id1 =
                                    _this.catprodArray[i].option1[q].option2[0].product_option_value_id;
                                _this.dataoption = {
                                    product_option_id: _this.catprodArray[i].option1[q].option2[j]
                                        .product_option_id,
                                    product_option_value_id: _this.catprodArray[i].option1[q].option2[j]
                                        .product_option_value_id,
                                    seller_id: _this.catprodArray[i].option1[q].option2[j].seller_id,
                                    name: _this.catprodArray[i].option1[q].option2[j].name,
                                    quantity: _this.catprodArray[i].option1[q].option2[j].quantity,
                                };
                            }
                            if (_this.dataoption) {
                                if (_this.dataoption.quantity > 0) {
                                    _this.prods[i].option2value[k] = _this.dataoption;
                                    k++;
                                }
                            }
                        }
                    }
                }
                _this.logger.debug("invoking if condition " + _this.catprodArray[i].product_id);
                this.prods[i].prod_id = _this.catprodArray[i].product_id;
                this.prods[i].product_option_value_id = ev.product_option_value_id;
                this.prods[i].name = ev.name;
                this.prods[i].quantity = ev.quantity;
                this.prods[i].sku = ev.sku;
                this.prods[i].price = ev.price;
                if (Number(ev.salesprice) > ev.price) {
                    this.prods[i].salesprice = ev.salesprice;
                }
                else {
                    this.prods[i].salesprice = "";
                }
                this.prods[i].sellerdiscount = ev.sellerdiscount;
                break;
            }
        }
    }
    option1Fn(ev, id) {
        var _this = this;
        _this.logger.debug("checking options item " + _this.place1);
        _this.logger.debug("ev " + ev);
        _this.optionEvent = ev;
        _this.logger.debug("id " + id);
        for (var i = 0; i < _this.catprodArray.length; i++) {
            if (_this.catprodArray[i].product_id == id) {
                _this.logger.debug("invoking if condition " + _this.catprodArray[i].product_id);
                this.prods[i].name1 = ev.name;
                this.prods[i].product_option_id1 = ev.product_option_id;
                this.prods[i].product_option_value_id1 = ev.product_option_value_id;
                break;
            }
        }
    }
    moveToCart() {
        this.logger.debug("checking the arrayof prods" + JSON.stringify(this.prods));
        this.logger.debug("checking myValue array " + JSON.stringify(this.myValue));
        let allAddtoCart = [];
        for (var i = 0; i < this.catprodArray.length; i++) {
            this.logger.debug("product id " + this.catprodArray[i].product_id);
            var obj = {
                product_id: this.catprodArray[i].product_id,
                product_option: this.prods[i].product_option_id,
                product_option_value: this.prods[i].product_option_value_id,
                product_option1: this.prods[i].product_option_id1,
                product_option_value1: this.prods[i].product_option_value_id1,
                product_quantity: this.myValue[i].quantity,
            };
            this.logger.debug("obj " + obj);
            allAddtoCart.push(obj);
            this.logger.debug("myarray" + JSON.stringify(allAddtoCart));
        }
        this.logger.debug("allAddtoCart" + JSON.stringify(allAddtoCart));
    }
    ngOnInit() { }
};
WishListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
WishListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-wish-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wish-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish-list/wish-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wish-list.page.scss */ "./src/app/pages/wish-list/wish-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], WishListPage);



/***/ })

}]);
//# sourceMappingURL=pages-wish-list-wish-list-module-es2015.js.map