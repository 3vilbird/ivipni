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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Wishlist</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding class=\"products\">\n  <div class=\"borderr\" *ngFor=\"let category of catprodArray; let idx = index\">\n    <ion-card>\n      <ion-row>\n        <div *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\n          <!--  {{category.image}} -->\n          <img class=\"imagecategory\" src=\"{{tempimg}}\" />\n        </div>\n        <ion-col col-8>\n          <h2>{{category.name}}</h2>\n          <h6>{{category.model}}</h6>\n        </ion-col>\n        <ion-col col-2>\n          <ion-icon\n            color=\"danger\"\n            name=\"trash\"\n            class=\"trash\"\n            (click)=\"deleteWishlist(category);\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col *ngIf=\"category?.option1.length > 0\">\n          <ion-label>Seller:</ion-label>\n        </ion-col>\n        <ion-col class=\"options_select\">\n          <div *ngIf=\"category?.option1.length > 1\">\n            <ion-item>\n              <ion-label floating></ion-label>\n\n              <ion-select\n                [interfaceOptions]=\"selectOptions\"\n                (ngModel)=\"place\"\n                (ionChange)=\"optionsFn($event, category.product_id);\"\n              >\n                <ion-select-option\n                  [value]=\"item\"\n                  *ngFor=\" let item of category?.option1; let subidx = index \"\n                >\n                  <span>{{item.name}}</span>&nbsp;&nbsp; - &nbsp;&nbsp;\n                  <span>{{item.price | currency:'INR':true}}</span>\n                </ion-select-option> </ion-select\n              ><small class=\"smallcount\"\n                >&nbsp;&nbsp;{{category.sellercount-1}} more seller</small\n              >\n            </ion-item>\n          </div>\n\n          <div class=\"options_height\" *ngIf=\"category?.option1.length == 1\">\n            {{prods[idx].name}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"options_margin\">\n        <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\n          <ion-label>Size:</ion-label>\n        </ion-col>\n        <ion-col class=\"options_select\">\n          <div\n            class=\"options_height\"\n            *ngIf=\"prods[idx].option2value.length > 1\"\n          >\n            <ion-item>\n              <ion-label floating></ion-label>\n\n              <ion-select\n                [interfaceOptions]=\"selectOptions\"\n                (ngModel)=\"place1\"\n                (ionChange)=\"option1Fn($event, category.product_id);\"\n              >\n                <ion-select-option\n                  [value]=\"temp\"\n                  *ngFor=\" let temp of prods[idx]?.option2value;let subidx = index \"\n                >\n                  <span>\n                    <p>{{temp.name}}</p>\n                  </span>\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div\n            class=\"options_height\"\n            *ngIf=\"prods[idx].option2value.length == 1\"\n          >\n            <div\n              class=\"options_height\"\n              *ngIf=\"category?.option1[0].option2.length > 1\"\n            >\n              <ion-item>\n                <ion-label floating></ion-label>\n\n                <ion-select\n                  [interfaceOptions]=\"selectOptions\"\n                  (ngModel)=\"place\"\n                  (ionChange)=\"option1Fn($event, category.product_id);\"\n                >\n                  <ion-select-option\n                    [value]=\"temp\"\n                    *ngFor=\" let temp of category?.option1[0].option2; let subidx = index \"\n                  >\n                    <p>{{temp.name}}</p>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div\n              class=\"options_height\"\n              *ngIf=\"prods[idx].option2value.length ==1\"\n            >\n              {{prods[idx].option2value[0].name}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"margin_last_row\">\n        <ion-row>\n          <ion-col>\n            <div class=\"price_main\">\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice != 0\">\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\n              </p>\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\n              <ion-input\n                type=\"number\"\n                value=\"\"\n                [(ngModel)]=\"prods[idx].requestedQty\"\n              ></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div *ngIf=\"category.product_status == 1\">\n              <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\n                <ion-icon\n                  name=\"cart\"\n                  class=\"cart\"\n                  (click)=\"addToCart(category, prods[idx])\"\n                ></ion-icon>\n              </div>\n              <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\n                <div class=\"outofStack\">out of stock</div>\n                <br />\n              </div>\n            </div>\n            <div *ngIf=\"category.product_status == 0\" class=\"icon_cart_color\">\n              <div class=\"outofStack\">This product is not available</div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\n      </div>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"wishlist\">\n    <h5 class=\"message\">There are no items in your Wishlist.</h5>\n  </div>\n</ion-content>\n";
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


    __webpack_exports__["default"] = "wish-list-products .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n}\n\nion-icon.icon-ios.ion-ios-trash {\n  font-size: 30px;\n  color: #bdbdbd;\n}\n\nion-icon.icon-md.ion-md-trash {\n  font-size: 30px;\n  color: #bdbdbd;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: right;\n}\n\n.products ion-select {\n  width: 100%;\n  max-width: 175px;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .image_div p {\n  font-size: 20px;\n  margin-top: 30px !important;\n}\n\n.products .smallcount {\n  color: blue;\n}\n\n.products .detail_div {\n  width: 70%;\n  float: left;\n  margin-top: -13px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .detail_div .options_margin {\n  margin-top: -7px;\n  margin-left: -1px;\n}\n\n.products .margin_last_row {\n  margin-top: -7px !important;\n}\n\n.products .options_select {\n  margin-left: -171px;\n}\n\n.products .options_height {\n  margin-top: 15px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 15px;\n}\n\n.products .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col[width-50].first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col[width-50].second_col {\n  color: white;\n  background-color: orange;\n}\n\nion-col[width-33], ion-col[width-34] {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n\n.message {\n  color: lightgrey;\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.price {\n  margin-top: -11px;\n}\n\n.price_main {\n  padding-right: 30px;\n  margin-top: 10px;\n}\n\n.quantity1 ion-input {\n  display: inline-block;\n  max-width: 60px;\n  padding-top: 5px;\n  font-size: 2rem;\n  height: 60px;\n}\n\n.discount_amt {\n  text-decoration: line-through;\n  color: gray;\n  margin-top: 5px;\n}\n\n.price {\n  font-weight: bold;\n  padding-bottom: 5px;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvd2lzaC1saXN0L3dpc2gtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3dpc2gtbGlzdC93aXNoLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURJSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ROOztBREdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0ROOztBREdJO0VBQ0UsWUFBQTtBQ0ROOztBRElJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRk47O0FESUk7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FDRk47O0FETU07RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUNKUjs7QURPSTtFQUNGLFdBQUE7QUNMRjs7QURPSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMTjs7QURPTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0xSOztBRFFNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDTlI7O0FEUU07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTlI7O0FEU007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDUFI7O0FEVU07RUFDRSxrQkFBQTtBQ1JSOztBRFdNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RSOztBRGFJO0VBQ0UsMkJBQUE7QUNYTjs7QURhSTtFQUNFLG1CQUFBO0FDWE47O0FEYUk7RUFDRSxnQkFBQTtBQ1hOOztBRGNJO0VBQ0UsY0FBQTtBQ1pOOztBRGNJO0VBQ0UsY0FBQTtBQ1pOOztBRGNJO0VBQ0UsZUFBQTtBQ1pOOztBRGNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNaTjs7QURlSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2JOOztBRGdCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2ROOztBRGtCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDZko7O0FEa0JFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNmSjs7QURrQkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNmSjs7QURrQkU7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUNmSjs7QURrQkU7RUFHRSxtQkFBQTtVQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2ZKOztBRGtCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDZko7O0FEaUJFO0VBQ0UsZ0JBQUE7QUNkSjs7QURpQkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNkSjs7QURnQkU7RUFDRSxpQkFBQTtBQ2JKOztBRGVFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ1pKOztBRGNFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1hKOztBRGNFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRGNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ1hKOztBRGFFO0VBQ00sa0JBQUE7RUFDRixtQkFBQTtBQ1ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2lzaC1saXN0L3dpc2gtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ3aXNoLWxpc3QtcHJvZHVjdHN7XG4gICAgLmltYWdlY2F0ZWdvcnl7XG4gICAgd2lkdGg6NDYlO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgXG4gIH1cbiAgfVxuICBpb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG4gIH1cbiAgaW9uLWljb24uaWNvbi1tZC5pb24tbWQtdHJhc2gge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogI2JkYmRiZDtcbiAgfVxuICBcbiAgLnFudHlDb2xvciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgXG4gIC5wcm9kdWN0cyB7XG4gICAgaDIge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIGg2IHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICBjb2xvcjogZ3JheTtcbiAgICB9XG4gICAgaW9uLWljb24ge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTc1cHg7XG4gICAgfVxuICAgIC5ib3JkZXJyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgXG4gICAgLmltYWdlX2RpdiB7XG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIC5zbWFsbGNvdW50e1xuICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgLmRldGFpbF9kaXYge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXRvcDogLTEzcHg7XG4gIFxuICAgICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWJsb2NrIHtcbiAgICAgICAgbWluLWhlaWdodDogMy40cmVtO1xuICAgICAgfVxuICBcbiAgICAgIC5vcHRpb25zX21hcmdpbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLm1hcmdpbl9sYXN0X3JvdyB7XG4gICAgICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5vcHRpb25zX3NlbGVjdCB7XG4gICAgICBtYXJnaW4tbGVmdDogLTE3MXB4O1xuICAgIH1cbiAgICAub3B0aW9uc19oZWlnaHQge1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2hlYXJ0X3JlZCB7XG4gICAgICBjb2xvcjogIzUzN2ZjNTtcbiAgICB9XG4gICAgLmljb25faGVhcnQge1xuICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICAgIC5oZWFydCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5jYXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgIH1cbiAgXG4gICAgLmljb25fY2FydCB7XG4gICAgICBjb2xvcjogIzE1YTAzMztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICBcbiAgICAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgfVxuICBcbiAgaW9uLWNvbFt3aWR0aC01MF0uZmlyc3RfY29sIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgfVxuICBcbiAgaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICBcbiAgaW9uLWNvbFt3aWR0aC0zM10sIGlvbi1jb2xbd2lkdGgtMzRdIHtcbiAgICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgICAtbXMtZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gIH1cbiAgLm1lc3NhZ2Uge1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5wcmljZSB7XG4gICAgbWFyZ2luLXRvcDogLTExcHg7XG4gIH1cbiAgLnByaWNlX21haW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAucXVhbnRpdHkxIGlvbi1pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuICBcbiAgLmRpc2NvdW50X2FtdCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIFxuICAucHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgLmRpdmltYWdlZmxhZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbiAgfVxuICAiLCJ3aXNoLWxpc3QtcHJvZHVjdHMgLmltYWdlY2F0ZWdvcnkge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG5pb24taWNvbi5pY29uLWlvcy5pb24taW9zLXRyYXNoIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuaW9uLWljb24uaWNvbi1tZC5pb24tbWQtdHJhc2gge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG4ucW50eUNvbG9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucHJvZHVjdHMgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnByb2R1Y3RzIGg2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5wcm9kdWN0cyBpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wcm9kdWN0cyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTc1cHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmNiYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnByb2R1Y3RzIC5pbWFnZV9kaXYgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3RzIC5zbWFsbGNvdW50IHtcbiAgY29sb3I6IGJsdWU7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogLTEzcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtaW9zLCAucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWJsb2NrIHtcbiAgbWluLWhlaWdodDogMy40cmVtO1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5vcHRpb25zX21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xufVxuLnByb2R1Y3RzIC5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMgLm9wdGlvbnNfc2VsZWN0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNzFweDtcbn1cbi5wcm9kdWN0cyAub3B0aW9uc19oZWlnaHQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnByb2R1Y3RzIC5pY29uX2hlYXJ0X3JlZCB7XG4gIGNvbG9yOiAjNTM3ZmM1O1xufVxuLnByb2R1Y3RzIC5pY29uX2hlYXJ0IHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG4ucHJvZHVjdHMgLmhlYXJ0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnByb2R1Y3RzIC5jYXJ0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzE1YTAzMztcbn1cbi5wcm9kdWN0cyAuaWNvbl9jYXJ0IHtcbiAgY29sb3I6ICMxNWEwMzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvZHVjdHMgLmljb25fY2FydF9jb2xvciB7XG4gIGNvbG9yOiAjZDQzMjgxO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tdG9vbGJhci50b29sYmFyLnRvb2xiYXItaW9zIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xufVxuXG5pb24tY29sW3dpZHRoLTUwXS5maXJzdF9jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjU7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdLnNlY29uZF9jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuaW9uLWNvbFt3aWR0aC0zM10sIGlvbi1jb2xbd2lkdGgtMzRdIHtcbiAgLXdlYmtpdC1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gIC1tcy1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gIGZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgbWF4LXdpZHRoOiAzMy4zMzMzJTtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG59XG5cbi5tZXNzYWdlIHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wcmljZSB7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xufVxuXG4ucHJpY2VfbWFpbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5xdWFudGl0eTEgaW9uLWlucHV0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZGlzY291bnRfYW10IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZGl2aW1hZ2VmbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xufSJdfQ== */";
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