function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wish-list-wish-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish-list/wish-list.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish-list/wish-list.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesWishListWishListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Wishlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"products\">\n  <div class=\"borderr\" *ngFor=\"let category of catprodArray; let idx = index\">\n    <ion-card>\n      <ion-row>\n        <div *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\n          <!--  {{category.image}} -->\n          <img class=\"imagecategory\" src=\"{{tempimg}}\" />\n        </div>\n        <ion-col col-8>\n          <h2>{{category.name}}</h2>\n          <h6>{{category.model}}</h6>\n        </ion-col>\n        <ion-col col-2>\n          <ion-icon name=\"trash\" class=\"trash\" (click)=\"deleteWishlist(category);\"></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col *ngIf=\"category?.option1.length > 0\">\n          <ion-label>Seller:</ion-label>\n        </ion-col>\n        <ion-col class=\"options_select\">\n          <div *ngIf=\"category?.option1.length > 1\">\n            <ion-item>\n              <ion-label floating></ion-label>\n\n              <ion-select [interfaceOptions]=\"selectOptions\" (ngModel)=\"place\"\n                (ionChange)=\"optionsFn($event, category.product_id);\">\n                <ion-select-option [value]=\"item\" *ngFor=\" let item of category?.option1; let subidx = index \">\n                  <span>{{item.name}}</span>&nbsp;&nbsp; - &nbsp;&nbsp;\n                  <span>{{item.price | currency:'INR':true}}</span>\n                </ion-select-option>\n              </ion-select><small class=\"smallcount\">&nbsp;&nbsp;{{category.sellercount-1}} more seller</small>\n            </ion-item>\n          </div>\n\n          <div class=\"options_height\" *ngIf=\"category?.option1.length == 1\">\n            {{prods[idx].name}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"options_margin\">\n        <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\n          <ion-label>Size:</ion-label>\n        </ion-col>\n        <ion-col class=\"options_select\">\n          <div class=\"options_height\" *ngIf=\"prods[idx].option2value.length > 1\">\n            <ion-item>\n              <ion-label floating></ion-label>\n\n              <ion-select [interfaceOptions]=\"selectOptions\" (ngModel)=\"place1\"\n                (ionChange)=\"option1Fn($event, category.product_id);\">\n                <ion-select-option [value]=\"temp\" *ngFor=\" let temp of prods[idx]?.option2value;let subidx = index \">\n                  <span>\n                    <p>{{temp.name}}</p>\n                  </span>\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div class=\"options_height\" *ngIf=\"prods[idx].option2value.length == 1\">\n            <div class=\"options_height\" *ngIf=\"category?.option1[0].option2.length > 1\">\n              <ion-item>\n                <ion-label floating></ion-label>\n\n                <ion-select [interfaceOptions]=\"selectOptions\" (ngModel)=\"place\"\n                  (ionChange)=\"option1Fn($event, category.product_id);\">\n                  <ion-select-option [value]=\"temp\"\n                    *ngFor=\" let temp of category?.option1[0].option2; let subidx = index \">\n                    <p>{{temp.name}}</p>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div class=\"options_height\" *ngIf=\"prods[idx].option2value.length ==1\">\n              {{prods[idx].option2value[0].name}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"margin_last_row\">\n        <ion-row>\n          <ion-col>\n            <div class=\"price_main\">\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice != 0\">\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\n              </p>\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\n              <ion-input type=\"number\" value=\"\" [(ngModel)]=\"prods[idx].requestedQty\"></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div *ngIf=\"category.product_status == 1\">\n              <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\n                <ion-icon name=\"cart\" class=\"cart\" (click)=\"addToCart(category, prods[idx])\"></ion-icon>\n              </div>\n              <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\n                <div class=\"outofStack\">out of stock</div>\n                <br />\n              </div>\n            </div>\n            <div *ngIf=\"category.product_status == 0\" class=\"icon_cart_color\">\n              <div class=\"outofStack\">This product is not available</div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\n      </div>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"wishlist\">\n    <h5 class=\"message\">There are no items in your Wishlist.</h5>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/wish-list/wish-list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/wish-list/wish-list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: WishListPageRoutingModule */

  /***/
  function srcAppPagesWishListWishListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListPageRoutingModule", function () {
      return WishListPageRoutingModule;
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


    var _wish_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wish-list.page */
    "./src/app/pages/wish-list/wish-list.page.ts");

    var routes = [{
      path: '',
      component: _wish_list_page__WEBPACK_IMPORTED_MODULE_3__["WishListPage"]
    }];

    var WishListPageRoutingModule = function WishListPageRoutingModule() {
      _classCallCheck(this, WishListPageRoutingModule);
    };

    WishListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WishListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/wish-list/wish-list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/wish-list/wish-list.module.ts ***!
    \*****************************************************/

  /*! exports provided: WishListPageModule */

  /***/
  function srcAppPagesWishListWishListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListPageModule", function () {
      return WishListPageModule;
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


    var _wish_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wish-list-routing.module */
    "./src/app/pages/wish-list/wish-list-routing.module.ts");
    /* harmony import */


    var _wish_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wish-list.page */
    "./src/app/pages/wish-list/wish-list.page.ts");

    var WishListPageModule = function WishListPageModule() {
      _classCallCheck(this, WishListPageModule);
    };

    WishListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wish_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["WishListPageRoutingModule"]],
      declarations: [_wish_list_page__WEBPACK_IMPORTED_MODULE_6__["WishListPage"]]
    })], WishListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/wish-list/wish-list.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/wish-list/wish-list.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesWishListWishListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "wish-list-products .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n}\n\nion-icon.icon-ios.ion-ios-trash {\n  font-size: 30px;\n  color: #bdbdbd;\n}\n\nion-icon.icon-md.ion-md-trash {\n  font-size: 30px;\n  color: #bdbdbd;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: right;\n}\n\n.products ion-select {\n  width: 100%;\n  max-width: 175px;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .image_div p {\n  font-size: 20px;\n  margin-top: 30px !important;\n}\n\n.products .smallcount {\n  color: blue;\n}\n\n.products .detail_div {\n  width: 70%;\n  float: left;\n  margin-top: -13px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .detail_div .options_margin {\n  margin-top: -7px;\n  margin-left: -1px;\n}\n\n.products .margin_last_row {\n  margin-top: -7px !important;\n}\n\n.products .options_select {\n  margin-left: -171px;\n}\n\n.products .options_height {\n  margin-top: 15px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 15px;\n}\n\n.products .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col[width-50].first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col[width-50].second_col {\n  color: white;\n  background-color: orange;\n}\n\nion-col[width-33], ion-col[width-34] {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n\n.message {\n  color: lightgrey;\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.price {\n  margin-top: -11px;\n}\n\n.price_main {\n  padding-right: 30px;\n  margin-top: 10px;\n}\n\n.quantity1 ion-input {\n  display: inline-block;\n  max-width: 60px;\n  padding-top: 5px;\n  font-size: 2rem;\n  height: 60px;\n}\n\n.discount_amt {\n  text-decoration: line-through;\n  color: gray;\n  margin-top: 5px;\n}\n\n.price {\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy93aXNoLWxpc3Qvd2lzaC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2lzaC1saXN0L3dpc2gtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDREo7O0FER0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0FKOztBRElJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDRE47O0FER0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRE47O0FER0k7RUFDRSxZQUFBO0FDRE47O0FESUk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNGTjs7QURJSTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUNGTjs7QURNTTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQ0pSOztBRE9JO0VBQ0YsV0FBQTtBQ0xGOztBRE9JO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0xOOztBRE9NO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDTFI7O0FEUU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNOUjs7QURRTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNOUjs7QURTTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNQUjs7QURVTTtFQUNFLGtCQUFBO0FDUlI7O0FEV007RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDVFI7O0FEYUk7RUFDRSwyQkFBQTtBQ1hOOztBRGFJO0VBQ0UsbUJBQUE7QUNYTjs7QURhSTtFQUNFLGdCQUFBO0FDWE47O0FEY0k7RUFDRSxjQUFBO0FDWk47O0FEY0k7RUFDRSxjQUFBO0FDWk47O0FEY0k7RUFDRSxlQUFBO0FDWk47O0FEY0k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1pOOztBRGVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDYk47O0FEZ0JJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDZE47O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNmSjs7QURrQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2ZKOztBRGtCRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ2ZKOztBRGtCRTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQ2ZKOztBRGtCRTtFQUdFLG1CQUFBO1VBQUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURpQkU7RUFDRSxnQkFBQTtBQ2RKOztBRGlCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2RKOztBRGdCRTtFQUNFLGlCQUFBO0FDYko7O0FEZUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDWko7O0FEY0U7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDWEo7O0FEY0U7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDWEo7O0FEY0U7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDWEo7O0FEYUU7RUFDTSxrQkFBQTtFQUNGLG1CQUFBO0FDVk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy93aXNoLWxpc3Qvd2lzaC1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIndpc2gtbGlzdC1wcm9kdWN0c3tcbiAgICAuaW1hZ2VjYXRlZ29yeXtcbiAgICB3aWR0aDo0NiU7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBcbiAgfVxuICB9XG4gIGlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2JkYmRiZDtcbiAgfVxuICBpb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICB9XG4gIFxuICAucW50eUNvbG9yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLnByb2R1Y3RzIHtcbiAgICBoMiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICBcbiAgICBpb24tc2VsZWN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAxNzVweDtcbiAgICB9XG4gICAgLmJvcmRlcnIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgfVxuICBcbiAgICAuaW1hZ2VfZGl2IHtcbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLnNtYWxsY291bnR7XG4gIGNvbG9yOiBibHVlO1xuICAgIH1cbiAgICAuZGV0YWlsX2RpdiB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgXG4gICAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICB9XG4gIFxuICAgICAgLml0ZW0tYmxvY2sge1xuICAgICAgICBtaW4taGVpZ2h0OiAzLjRyZW07XG4gICAgICB9XG4gIFxuICAgICAgLm9wdGlvbnNfbWFyZ2luIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAubWFyZ2luX2xhc3Rfcm93IHtcbiAgICAgIG1hcmdpbi10b3A6IC03cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm9wdGlvbnNfc2VsZWN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XG4gICAgfVxuICAgIC5vcHRpb25zX2hlaWdodCB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgXG4gICAgLmljb25faGVhcnRfcmVkIHtcbiAgICAgIGNvbG9yOiAjNTM3ZmM1O1xuICAgIH1cbiAgICAuaWNvbl9oZWFydCB7XG4gICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICB9XG4gICAgLmhlYXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgLmNhcnQge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgY29sb3I6ICMxNWEwMzM7XG4gICAgfVxuICBcbiAgICAuaWNvbl9jYXJ0IHtcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2NhcnRfY29sb3Ige1xuICAgICAgY29sb3I6ICNkNDMyODE7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLWlvcyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWluLWhlaWdodDogMHB4O1xuICB9XG4gIFxuICBpb24tY29sW3dpZHRoLTUwXS5maXJzdF9jb2wge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICB9XG4gIFxuICBpb24tY29sW3dpZHRoLTUwXS5zZWNvbmRfY29sIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIFxuICBpb24tY29sW3dpZHRoLTMzXSwgaW9uLWNvbFt3aWR0aC0zNF0ge1xuICAgIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gICAgZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMyU7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgfVxuICAubWVzc2FnZSB7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnByaWNlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgfVxuICAucHJpY2VfbWFpbiB7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5xdWFudGl0eTEgaW9uLWlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiA2MHB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgZm9udC1zaXplOiAyLjByZW07XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIFxuICAuZGlzY291bnRfYW10IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgXG4gIC5wcmljZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuICAuZGl2aW1hZ2VmbGFne1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xuICB9XG4gICIsIndpc2gtbGlzdC1wcm9kdWN0cyAuaW1hZ2VjYXRlZ29yeSB7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbmlvbi1pY29uLmljb24taW9zLmlvbi1pb3MtdHJhc2gge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG5pb24taWNvbi5pY29uLW1kLmlvbi1tZC10cmFzaCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5xbnR5Q29sb3Ige1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5wcm9kdWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZHVjdHMgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLnByb2R1Y3RzIGlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3RzIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNzVweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdHMgLmltYWdlX2RpdiBwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMgLnNtYWxsY291bnQge1xuICBjb2xvcjogYmx1ZTtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tYmxvY2sge1xuICBtaW4taGVpZ2h0OiAzLjRyZW07XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLm9wdGlvbnNfbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogLTdweDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG59XG4ucHJvZHVjdHMgLm1hcmdpbl9sYXN0X3JvdyB7XG4gIG1hcmdpbi10b3A6IC03cHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0cyAub3B0aW9uc19zZWxlY3Qge1xuICBtYXJnaW4tbGVmdDogLTE3MXB4O1xufVxuLnByb2R1Y3RzIC5vcHRpb25zX2hlaWdodCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnRfcmVkIHtcbiAgY29sb3I6ICM1MzdmYzU7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnQge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cbi5wcm9kdWN0cyAuaGVhcnQge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucHJvZHVjdHMgLmNhcnQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMTVhMDMzO1xufVxuLnByb2R1Y3RzIC5pY29uX2NhcnQge1xuICBjb2xvcjogIzE1YTAzMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9kdWN0cyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgY29sb3I6ICNkNDMyODE7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdLmZpcnN0X2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbn1cblxuaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG5pb24tY29sW3dpZHRoLTMzXSwgaW9uLWNvbFt3aWR0aC0zNF0ge1xuICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbn1cblxuLm1lc3NhZ2Uge1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByaWNlIHtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG59XG5cbi5wcmljZV9tYWluIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnF1YW50aXR5MSBpb24taW5wdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogNjBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5kaXNjb3VudF9hbXQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5kaXZpbWFnZWZsYWcge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTU3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/wish-list/wish-list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/wish-list/wish-list.page.ts ***!
    \***************************************************/

  /*! exports provided: WishListPage */

  /***/
  function srcAppPagesWishListWishListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListPage", function () {
      return WishListPage;
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


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts"); // all clear


    var WishListPage =
    /*#__PURE__*/
    function () {
      function WishListPage(navCtrl, productServices, users, toastCtrl, loadingCtrl, networkService, logger, alertCtrl) {
        _classCallCheck(this, WishListPage);

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
          title: "select"
        };

        var _this = this;

        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
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
            } else {
              for (var i = 0; i < _this.catprodArray.length; i++) {
                var prod = {
                  prod_id: _this.catprodArray[i].product_id
                };

                if (_this.catprodArray[i].option1[0].option2.length > 0) {
                  prod["name1"] = _this.catprodArray[i].option1[0].option2[0].name;
                  prod["product_option_id1"] = _this.catprodArray[i].option1[0].option2[0].product_option_id;
                  prod["product_option_value_id1"] = _this.catprodArray[i].option1[0].option2[0].product_option_value_id;
                  prod["option2value"] = [];

                  for (var k = 0; k < _this.catprodArray[i].option1[0].option2.length; k++) {
                    _this.dataoption = {
                      product_option_id: _this.catprodArray[i].option1[0].option2[k].product_option_id,
                      product_option_value_id: _this.catprodArray[i].option1[0].option2[k].product_option_value_id,
                      seller_id: _this.catprodArray[i].option1[0].option2[k].seller_id,
                      name: _this.catprodArray[i].option1[0].option2[k].name,
                      quantity: _this.catprodArray[i].option1[0].option2[k].quantity
                    };

                    if (_this.dataoption) {
                      if (_this.dataoption.quantity > 0) {
                        prod["option2value"][m] = _this.dataoption;
                        m++;
                      }
                    }
                  }
                } else {
                  prod["option2value"] = [];
                  prod["name1"] = "";
                  prod["product_option_id1"] = "";
                  prod["product_option_value_id1"] = "";
                }

                if (_this.catprodArray[i].option1.length > 0) {
                  prod["product_option_id"] = _this.catprodArray[i].option1[0].product_option_id;
                  prod["product_option_value_id"] = _this.catprodArray[i].option1[0].product_option_value_id;
                  prod["name"] = _this.catprodArray[i].option1[0].name;
                  prod["quantity"] = _this.catprodArray[i].option1[0].quantity;
                  prod["sku"] = _this.catprodArray[i].option1[0].sku;
                  prod["price"] = _this.catprodArray[i].option1[0].price;

                  if (Number(_this.catprodArray[i].option1[0].salesprice) > _this.catprodArray[i].option1[0].price) {
                    prod["salesprice"] = _this.catprodArray[i].option1[0].salesprice;
                  } else {
                    prod["salesprice"] = "";
                  }

                  prod["sellerdiscount"] = _this.catprodArray[i].option1[0].sellerdiscount;
                  prod["requestedQty"] = 1;
                } else {
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

                _this.myValue.push({
                  quantity: "1"
                });

                _this.logger.debug("myvalue " + _this.myValue); // this.loading.dismiss();

              }
            }
          });
        }
      } // loader


      _createClass(WishListPage, [{
        key: "loder",
        value: function loder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "",
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // toast

      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: this.toastMessage,
                      duration: 1000,
                      position: "middle"
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "deleteWishlist",
        value: function deleteWishlist(category) {
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
                requestedQty: _this.prods[j].requestedQty
              };
              _this.prods[k] = _this.prod1;
              k++;
            }
          }

          var wishProduct = {
            product_id: category.product_id
          };
          this.users.deleteWishlist(wishProduct, function (result, data) {
            if (result == "1") {
              if (_this.catprodArray.length == 0) {
                _this.wishlist = true;
              }

              _this.toastMessage = "Product removed from wishlist";

              _this.presentToast();
            } else {
              _this.networkService.showErrorAlert();
            }
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(category, products) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var _alert;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(category.alternate_brand == "YES")) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 3;
                    return this.alertCtrl.create({
                      header: "Ivipni",
                      message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
                      buttons: [{
                        text: "No",
                        role: "cancel",
                        handler: function handler() {
                          category.alternate_brand = "NO";

                          _this2.wishlistToCart(category, products);
                        }
                      }, {
                        text: "Yes",
                        handler: function handler() {
                          category.alternate_brand = "YES";

                          _this2.wishlistToCart(category, products);
                        }
                      }]
                    });

                  case 3:
                    _alert = _context3.sent;

                    _alert.present();

                    _context3.next = 9;
                    break;

                  case 7:
                    category.alternate_brand = "";
                    this.wishlistToCart(category, products);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "wishlistToCart",
        value: function wishlistToCart(category, products) {
          var addProduct;

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
                      alternate_brand: category.alternate_brand
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
                  requestedQty: _this.prods[j].requestedQty
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
                } else {
                  _this.networkService.showErrorAlert();
                }
              });
            } else {
              _this.networkService.showSuccessAlert("minimum quantity 1");
            }
          } else {
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
                        alternate_brand: category.alternate_brand
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
                    requestedQty: _this.prods[j].requestedQty
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
                  } else {
                    _this.networkService.showErrorAlert();
                  }
                });
              } else {
                _this.networkService.showSuccessAlert("minimum quantity 1");
              }
            } else {
              _this.networkService.showSuccessAlert("you have maximum qnty of " + products.quantity);
            }
          }
        }
      }, {
        key: "optionsFn",
        value: function optionsFn(ev, id) {
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
                if (_this.catprodArray[i].option1[q].option_value_id == ev.option_value_id) {
                  for (var j = 0; j < _this.catprodArray[i].option1[q].option2.length; j++) {
                    if (_this.catprodArray[i].option1[q].option2[j].seller_id == ev.option_value_id) {
                      _this.prods[i].name1 = _this.catprodArray[i].option1[q].option2[0].name;
                      _this.prods[i].product_option_id1 = _this.catprodArray[i].option1[q].option2[0].product_option_id;
                      _this.prods[i].product_option_value_id1 = _this.catprodArray[i].option1[q].option2[0].product_option_value_id;
                      _this.dataoption = {
                        product_option_id: _this.catprodArray[i].option1[q].option2[j].product_option_id,
                        product_option_value_id: _this.catprodArray[i].option1[q].option2[j].product_option_value_id,
                        seller_id: _this.catprodArray[i].option1[q].option2[j].seller_id,
                        name: _this.catprodArray[i].option1[q].option2[j].name,
                        quantity: _this.catprodArray[i].option1[q].option2[j].quantity
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
              } else {
                this.prods[i].salesprice = "";
              }

              this.prods[i].sellerdiscount = ev.sellerdiscount;
              break;
            }
          }
        }
      }, {
        key: "option1Fn",
        value: function option1Fn(ev, id) {
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
      }, {
        key: "moveToCart",
        value: function moveToCart() {
          this.logger.debug("checking the arrayof prods" + JSON.stringify(this.prods));
          this.logger.debug("checking myValue array " + JSON.stringify(this.myValue));
          var allAddtoCart = [];

          for (var i = 0; i < this.catprodArray.length; i++) {
            this.logger.debug("product id " + this.catprodArray[i].product_id);
            var obj = {
              product_id: this.catprodArray[i].product_id,
              product_option: this.prods[i].product_option_id,
              product_option_value: this.prods[i].product_option_value_id,
              product_option1: this.prods[i].product_option_id1,
              product_option_value1: this.prods[i].product_option_value_id1,
              product_quantity: this.myValue[i].quantity
            };
            this.logger.debug("obj " + obj);
            allAddtoCart.push(obj);
            this.logger.debug("myarray" + JSON.stringify(allAddtoCart));
          }

          this.logger.debug("allAddtoCart" + JSON.stringify(allAddtoCart));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WishListPage;
    }();

    WishListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    WishListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-wish-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wish-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wish-list/wish-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wish-list.page.scss */
      "./src/app/pages/wish-list/wish-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], WishListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-wish-list-wish-list-module-es5.js.map