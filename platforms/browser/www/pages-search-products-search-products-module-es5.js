function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-products-search-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchProductsSearchProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"searchText()\">\r\n    <ion-row>\r\n      <ion-col size=\"9\">\r\n        <ion-input\r\n          type=\"search\"\r\n          placeholder=\"Search Products\"\r\n          id=\"search\"\r\n          formControlName=\"search\"\r\n          class=\"form-search\"\r\n        ></ion-input>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" [disabled]=\"!myForm.valid\">\r\n          <ion-icon name=\"search\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-card>\r\n\r\n<ion-content padding class=\"products\">\r\n  <div class=\"borderr\" *ngFor=\" let category of catprodArray; let idx = index\">\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\r\n          <img\r\n            class=\"imagecategory\"\r\n            src=\"{{category.image}}\"\r\n            (click)=\"imageview(category.image)\"\r\n          />\r\n        </ion-col>\r\n        <ion-col width-80>\r\n          <h2>{{category.name}}</h2>\r\n          <h6>{{category.model}}</h6>\r\n        </ion-col>\r\n        <ion-col width-20>\r\n          <div\r\n            [ngClass]=\"showheartIcon[idx].wishlist_check == 1 ? 'icon_heart_red':'icon_heart'\"\r\n          >\r\n            <ion-icon\r\n              name=\"heart\"\r\n              (click)=\"setWishlist(category, $index);\"\r\n              class=\"heart\"\r\n            ></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row class=\"options_margin\">\r\n        <ion-col *ngIf=\"category?.option1.length > 0\">\r\n          <ion-label>Seller:</ion-label>\r\n        </ion-col>\r\n\r\n        <ion-col class=\"searchproducts\">\r\n          <div\r\n            class=\"options_selectseller\"\r\n            *ngIf=\"category?.option1.length > 1\"\r\n          >\r\n            <ion-item>\r\n              <ion-label floating></ion-label>\r\n              <ion-select\r\n                [interfaceOptions]=\"selectOptions\"\r\n                (ngModel)=\"place\"\r\n                (ionChange)=\"optionsFn($event, category.product_id);\"\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\" let item of category?.option1; let subidx = index \"\r\n                >\r\n                  <span>{{item.name}}</span>&nbsp;&nbsp; - &nbsp;&nbsp;\r\n                  <span>{{item.price | currency:'INR':true}}</span>\r\n                </ion-select-option>\r\n              </ion-select> </ion-item\r\n            ><small class=\"smallcount\"\r\n              >&nbsp;&nbsp;{{category.sellercount-1}} more seller</small\r\n            >\r\n          </div>\r\n\r\n          <div\r\n            class=\"options_selectseller\"\r\n            *ngIf=\"category?.option1.length == 1\"\r\n          >\r\n            {{prods[idx].name}}\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"options_margin\">\r\n        <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\r\n          <ion-label>Size:</ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"options_select\">\r\n          <div\r\n            class=\"options_height\"\r\n            *ngIf=\"prods[idx].option2value.length > 1\"\r\n          >\r\n            <ion-item>\r\n              <ion-label floating></ion-label>\r\n\r\n              <ion-select\r\n                [interfaceOptions]=\"selectOptions\"\r\n                (ngModel)=\"place1\"\r\n                (ionChange)=\"option1Fn($event, category.product_id);\"\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\" let temp of prods[idx]?.option2value;let subidx = index \"\r\n                >\r\n                  <span><p>{{temp.name}}</p></span>\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </div>\r\n          <div\r\n            class=\"options_height\"\r\n            *ngIf=\"prods[idx].option2value.length == 1\"\r\n          >\r\n            <div\r\n              class=\"options_height\"\r\n              *ngIf=\"category?.option1[0].option2.length > 1\"\r\n            >\r\n              <ion-item>\r\n                <ion-label floating></ion-label>\r\n\r\n                <ion-select\r\n                  [interfaceOptions]=\"selectOptions\"\r\n                  (ngModel)=\"place\"\r\n                  (ionChange)=\"option1Fn($event, category.product_id);\"\r\n                >\r\n                  <ion-select-option\r\n                    *ngFor=\" let temp of category?.option1[0].option2; let subidx = index \"\r\n                  >\r\n                    <p>{{temp.name}}</p>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div\r\n              class=\"options_height\"\r\n              *ngIf=\"prods[idx].option2value.length ==1\"\r\n            >\r\n              {{prods[idx].option2value[0].name}}\r\n            </div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <div class=\"margin_last_row\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"price_main\">\r\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice !=0\">\r\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\r\n              </p>\r\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\r\n              <ion-input\r\n                type=\"number\"\r\n                value=\"\"\r\n                [(ngModel)]=\"prods[idx].requestedQty\"\r\n              ></ion-input>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\r\n              <ion-icon\r\n                name=\"cart\"\r\n                class=\"cart\"\r\n                (click)=\"addToCart(category, prods[idx])\"\r\n              ></ion-icon>\r\n            </div>\r\n\r\n            <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\r\n              <div class=\"outofStack\">out of stock</div>\r\n              <br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n      <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\"\r\n    >\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n  <div *ngIf=\"showTextMsg\" class=\"textMsgProd\">That's All</div>\r\n\r\n  <div padding></div>\r\n  <div padding></div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/search-products/search-products-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/search-products/search-products-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: SearchProductsPageRoutingModule */

  /***/
  function srcAppPagesSearchProductsSearchProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductsPageRoutingModule", function () {
      return SearchProductsPageRoutingModule;
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


    var _search_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-products.page */
    "./src/app/pages/search-products/search-products.page.ts");

    var routes = [{
      path: '',
      component: _search_products_page__WEBPACK_IMPORTED_MODULE_3__["SearchProductsPage"]
    }];

    var SearchProductsPageRoutingModule = function SearchProductsPageRoutingModule() {
      _classCallCheck(this, SearchProductsPageRoutingModule);
    };

    SearchProductsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchProductsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/search-products/search-products.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/search-products/search-products.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchProductsPageModule */

  /***/
  function srcAppPagesSearchProductsSearchProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductsPageModule", function () {
      return SearchProductsPageModule;
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


    var _search_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-products-routing.module */
    "./src/app/pages/search-products/search-products-routing.module.ts");
    /* harmony import */


    var _search_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-products.page */
    "./src/app/pages/search-products/search-products.page.ts");

    var SearchProductsPageModule = function SearchProductsPageModule() {
      _classCallCheck(this, SearchProductsPageModule);
    };

    SearchProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchProductsPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_search_products_page__WEBPACK_IMPORTED_MODULE_6__["SearchProductsPage"]]
    })], SearchProductsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/search-products/search-products.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/search-products/search-products.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSearchProductsSearchProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "page-search-products .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n}\n\n.textMsgProd {\n  text-align: center;\n}\n\nion-row ion-col[width-80] .item-md {\n  padding-left: 0px;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: right;\n}\n\n.products ion-select {\n  width: 100%;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .borderr .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .borderr .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .borderr .item-label-stacked .select-ios, .products .borderr .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-label-stacked .select-md, .products .borderr .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-block {\n  min-height: 3.4rem;\n}\n\n.products .image_div {\n  width: 30%;\n  float: left;\n}\n\n.products .image_div img {\n  margin-top: 0px !important;\n}\n\n.products .detail_div {\n  width: 70%;\n  float: left;\n  margin-top: -13px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .detail_div .discount {\n  text-decoration: line-through;\n}\n\n.products .detail_div .options_margin {\n  margin-top: -7px;\n}\n\n.products .margin_last_row {\n  margin-top: -7px !important;\n}\n\n.products .options_selectseller {\n  padding-top: 15px;\n  margin-left: -171px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 15px;\n}\n\n.products .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col[width-50].first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col[width-50].second_col {\n  color: white;\n  background-color: orange;\n}\n\nion-col[width-33], ion-col[width-34] {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n\n.searchproducts {\n  margin-left: 150px;\n  margin-top: -3px;\n}\n\n.smallcount {\n  color: blue;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXByb2R1Y3RzL0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcc2VhcmNoLXByb2R1Y3RzXFxzZWFyY2gtcHJvZHVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gtcHJvZHVjdHMvc2VhcmNoLXByb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURFRTtFQUNFLGlCQUFBO0FDQ0o7O0FERUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDTjs7QURDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDTjs7QURDSTtFQUVFLFlBQUE7QUNBTjs7QURHSTtFQUNFLFdBQUE7QUNETjs7QURHSTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUNETjs7QURFTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREdNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FER007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDRFI7O0FESU07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDRlI7O0FES007RUFDRSxrQkFBQTtBQ0hSOztBRE9JO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNMTjs7QURNTTtFQUNFLDBCQUFBO0FDSlI7O0FET0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDTE47O0FET007RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNMUjs7QURRTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFFNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ05SOztBRFNNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1BSOztBRFVNO0VBQ0Usa0JBQUE7QUNSUjs7QURXTTtFQUNFLDZCQUFBO0FDVFI7O0FEWU07RUFDRSxnQkFBQTtBQ1ZSOztBRGFJO0VBQ0UsMkJBQUE7QUNYTjs7QURjSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNaTjs7QURlSTtFQUNFLGNBQUE7QUNiTjs7QURlSTtFQUNFLGNBQUE7QUNiTjs7QURlSTtFQUNFLGVBQUE7QUNiTjs7QURlSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDYk47O0FEZ0JJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDZE47O0FEaUJJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDZk47O0FEbUJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNoQko7O0FEbUJFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNoQko7O0FEbUJFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDaEJKOztBRG1CRTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQ2hCSjs7QURtQkU7RUFHRSxtQkFBQTtVQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRHNCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDbkJKOztBRHFCRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEb0JFO0VBQ0EsV0FBQTtBQ2pCRjs7QURtQkU7RUFDTSxrQkFBQTtFQUNGLG1CQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoLXByb2R1Y3RzL3NlYXJjaC1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXNlYXJjaC1wcm9kdWN0c3tcclxuICAgIC5pbWFnZWNhdGVnb3J5e1xyXG4gICAgd2lkdGg6NDYlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIFxyXG4gIH1cclxuICB9XHJcbiAgLnFudHlDb2xvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH1cclxuICAudGV4dE1zZ1Byb2Qge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBpb24tcm93IGlvbi1jb2xbd2lkdGgtODBdIC5pdGVtLW1kIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIH1cclxuICAucHJvZHVjdHMge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgaDYge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlcnIge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmNiYztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1ibG9jayB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMy40cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW1hZ2VfZGl2IHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXRhaWxfZGl2IHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gIFxyXG4gICAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuaXRlbS1ibG9jayB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMy40cmVtO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIC5kaXNjb3VudCB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLm9wdGlvbnNfbWFyZ2luIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWFyZ2luX2xhc3Rfcm93IHtcclxuICAgICAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm9wdGlvbnNfc2VsZWN0c2VsbGVyIHtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaWNvbl9oZWFydF9yZWQge1xyXG4gICAgICBjb2xvcjogIzUzN2ZjNTtcclxuICAgIH1cclxuICAgIC5pY29uX2hlYXJ0IHtcclxuICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICB9XHJcbiAgICAuaGVhcnQge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FydCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgY29sb3I6ICMxNWEwMzM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaWNvbl9jYXJ0IHtcclxuICAgICAgY29sb3I6ICMxNWEwMzM7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaWNvbl9jYXJ0X2NvbG9yIHtcclxuICAgICAgY29sb3I6ICNkNDMyODE7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhci50b29sYmFyLnRvb2xiYXItbWQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY29sW3dpZHRoLTUwXS5maXJzdF9jb2wge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2xbd2lkdGgtMzNdLCBpb24tY29sW3dpZHRoLTM0XSB7XHJcbiAgICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMyU7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMyU7XHJcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xyXG4gICAgbWF4LWhlaWdodDogNzBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gIH1cclxuICAuZm9ybS1zZWFyY2gge1xyXG4gICAgLy8gbWluLXdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zZWFyY2hwcm9kdWN0cyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG4gIH1cclxuICAuc21hbGxjb3VudHtcclxuICBjb2xvcjogYmx1ZTtcclxuICB9XHJcbiAgLmRpdmltYWdlZmxhZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTU3cHg7XHJcbiAgfSIsInBhZ2Utc2VhcmNoLXByb2R1Y3RzIC5pbWFnZWNhdGVnb3J5IHtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnFudHlDb2xvciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRleHRNc2dQcm9kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tcm93IGlvbi1jb2xbd2lkdGgtODBdIC5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5wcm9kdWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZHVjdHMgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLnByb2R1Y3RzIGlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3RzIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtaW9zLCAucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWJsb2NrIHtcbiAgbWluLWhlaWdodDogMy40cmVtO1xufVxuLnByb2R1Y3RzIC5pbWFnZV9kaXYge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5wcm9kdWN0cyAuaW1hZ2VfZGl2IGltZyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC0xM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDMuNHJlbTtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuZGlzY291bnQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAub3B0aW9uc19tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnByb2R1Y3RzIC5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMgLm9wdGlvbnNfc2VsZWN0c2VsbGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnRfcmVkIHtcbiAgY29sb3I6ICM1MzdmYzU7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnQge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cbi5wcm9kdWN0cyAuaGVhcnQge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucHJvZHVjdHMgLmNhcnQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMTVhMDMzO1xufVxuLnByb2R1Y3RzIC5pY29uX2NhcnQge1xuICBjb2xvcjogIzE1YTAzMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9kdWN0cyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgY29sb3I6ICNkNDMyODE7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdLmZpcnN0X2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbn1cblxuaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG5pb24tY29sW3dpZHRoLTMzXSwgaW9uLWNvbFt3aWR0aC0zNF0ge1xuICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hwcm9kdWN0cyB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLnNtYWxsY291bnQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmRpdmltYWdlZmxhZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/search-products/search-products.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/search-products/search-products.page.ts ***!
    \***************************************************************/

  /*! exports provided: SearchProductsPage */

  /***/
  function srcAppPagesSearchProductsSearchProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductsPage", function () {
      return SearchProductsPage;
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


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/holders/holders */
    "./src/providers/holders/holders.ts"); // has one error at line 205
    // import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";


    var SearchProductsPage =
    /*#__PURE__*/
    function () {
      function SearchProductsPage(navCtrl, toastCtrl, users, networkService, logger, formBuilder, holders, loadingCtrl, // private photoViewer: PhotoViewer,
      alertCtrl) {
        _classCallCheck(this, SearchProductsPage);

        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.users = users;
        this.networkService = networkService;
        this.logger = logger;
        this.formBuilder = formBuilder;
        this.holders = holders;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.catprodArray = [];
        this.showheartIcon = []; //select options variables

        this.prods = [];
        this.showinfinate = false;
        this.showTextMsg = false;
        this.page = 1;
        this.option2value = [];
        this.selectOptions = {
          title: "select"
        };
        this.myForm = formBuilder.group({
          search: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
      }

      _createClass(SearchProductsPage, [{
        key: "ionViewDidLoad",
        value: function ionViewDidLoad() {
          this.logger.info("Hello SearchProducts Page");
        }
      }, {
        key: "searchText",
        value: function searchText() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var loading, searchData;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: ""
                    });

                  case 2:
                    loading = _context.sent;
                    this.page = 1;
                    this.searchValue = this.myForm.value.search;
                    searchData = {
                      search: this.searchValue
                    };
                    this.logger.debug("invoking the searchtext value" + JSON.stringify(searchData));

                    if (searchData == null) {
                      alert("checking allert");
                    } else if (this.searchValue.length >= 3) {
                      this.logger.debug("checking the search value" + this.searchValue.length);
                      loading.present();
                      this.users.searchDetails(searchData, this.page, function (result, data) {
                        if (result == "1") {
                          var _dataObj = JSON.parse(data);

                          _this2.catprodArray = _dataObj.data.products;

                          _this2.logger.debug("checking the productsArray " + JSON.stringify(_this2.catprodArray));

                          _this2.cartCount = _dataObj.count;
                          _this2.nextPage = _dataObj.next_page;

                          _this2.logger.debug("catprodArray " + JSON.stringify(_this2.catprodArray));

                          _this2.showheartIcon = [];
                          _this2.prods = [];
                          var m = 0;

                          for (var i = 0; i < _this2.catprodArray.length; i++) {
                            var prod = {
                              prod_id: _this2.catprodArray[i].product_id
                            };

                            if (_this2.catprodArray[i].option1[0].option2.length > 0) {
                              prod["name1"] = _this2.catprodArray[i].option1[0].option2[0].name;
                              prod["product_option_id1"] = _this2.catprodArray[i].option1[0].option2[0].product_option_id;
                              prod["product_option_value_id1"] = _this2.catprodArray[i].option1[0].option2[0].product_option_value_id;
                              prod["option2value"] = [];

                              for (var k = 0; k < _this2.catprodArray[i].option1[0].option2.length; k++) {
                                _this2.dataoption = {
                                  product_option_id: _this2.catprodArray[i].option1[0].option2[k].product_option_id,
                                  product_option_value_id: _this2.catprodArray[i].option1[0].option2[k].product_option_value_id,
                                  seller_id: _this2.catprodArray[i].option1[0].option2[k].seller_id,
                                  name: _this2.catprodArray[i].option1[0].option2[k].name,
                                  quantity: _this2.catprodArray[i].option1[0].option2[k].quantity
                                };

                                if (_this2.dataoption) {
                                  if (_this2.dataoption.quantity > 0) {
                                    prod["option2value"][m] = _this2.dataoption;
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

                            if (_this2.catprodArray[i].option1.length > 0) {
                              prod["product_option_id"] = _this2.catprodArray[i].option1[0].product_option_id;
                              prod["product_option_value_id"] = _this2.catprodArray[i].option1[0].product_option_value_id;
                              prod["name"] = _this2.catprodArray[i].option1[0].name;
                              prod["quantity"] = _this2.catprodArray[i].option1[0].quantity;
                              prod["sku"] = _this2.catprodArray[i].option1[0].sku;
                              prod["price"] = _this2.catprodArray[i].option1[0].price;

                              if (Number(_this2.catprodArray[i].option1[0].salesprice) > _this2.catprodArray[i].option1[0].price) {
                                prod["salesprice"] = _this2.catprodArray[i].option1[0].salesprice;
                              } else {
                                prod["salesprice"] = "";
                              }

                              prod["sellerdiscount"] = _this2.catprodArray[i].option1[0].sellerdiscount;
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
                              prod["requestedQty"] = 1;
                            }

                            _this2.prods.push(prod);

                            _this2.logger.debug("checking prods array " + JSON.stringify(_this2.prods));

                            _this2.showheartIcon.push({
                              wishlist_check: _this2.catprodArray[i].wishlist_check
                            });

                            _this2.logger.debug("cheking wishlistcheck " + JSON.stringify(_this2.showheartIcon));

                            loading.dismiss();
                          }
                        } else {
                          _this2.logger.info("invoking else part of search");

                          _this2.networkService.showSuccessAlert("No products found for the given search, please change your search.");

                          loading.dismiss();
                        }
                      });
                    } else {
                      this.logger.info("checking the else ");
                      this.networkService.showSuccessAlert("please enter minmum 3 charecters");
                    }

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "imageview",
        value: function imageview(image) {// this.photoViewer.show(image);
        }
      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScroll) {
          var _this3 = this;

          this.showinfinate = true;
          this.holders.setInfinateScrollObj(infiniteScroll);
          this.page++;
          this.getsearchProducts();
          setTimeout(function () {
            if (_this3.nextPage != 0) {
              return;
            } else {
              infiniteScroll.enable(false);
              _this3.showTextMsg = true;
            }
          }, 500);
        }
      }, {
        key: "getsearchProducts",
        value: function getsearchProducts() {
          var _this4 = this;

          if (this.nextPage != 0) {
            //var _this = this;
            this.searchValue = this.myForm.value.search;
            var searchData = {
              search: this.searchValue
            };
            this.logger.debug("invoking the searchtext value" + JSON.stringify(searchData));

            if (searchData == null) {
              alert("checking allert");
            } else if (this.searchValue.length >= 3) {
              this.logger.debug("checking the search value" + this.searchValue.length);
              this.users.searchDetails(searchData, this.page, function (result, data) {
                if (result == "1") {
                  _this4.holders.getInfinateScrollObj().complete();

                  var _dataObj = JSON.parse(data);

                  for (var i = 0; i < _dataObj.data.products.length; i++) {
                    _this4.catprodArray.push(_dataObj.data.products[i]);
                  }

                  _this4.nextPage = _dataObj.next_page;

                  _this4.logger.debug("catprodArray " + JSON.stringify(_this4.catprodArray));

                  _this4.showheartIcon = [];
                  _this4.prods = [];
                  var m = 0;

                  for (var i = 0; i < _this4.catprodArray.length; i++) {
                    var prod = {
                      prod_id: _this4.catprodArray[i].product_id
                    };

                    if (_this4.catprodArray[i].option1[0].option2.length > 0) {
                      // if(_this.catprodArray[i].option1[0].option.option_value_id == _this.catprodArray[i].option1[0].option2[0].seller_id){
                      prod["name1"] = _this4.catprodArray[i].option1[0].option2[0].name;
                      prod["product_option_id1"] = _this4.catprodArray[i].option1[0].option2[0].product_option_id;
                      prod["product_option_value_id1"] = _this4.catprodArray[i].option1[0].option2[0].product_option_value_id;
                      prod["option2value"] = [];

                      for (var k = 0; k < _this4.catprodArray[i].option1[0].option2.length; k++) {
                        _this4.dataoption = {
                          product_option_id: _this4.catprodArray[i].option1[0].option2[k].product_option_id,
                          product_option_value_id: _this4.catprodArray[i].option1[0].option2[k].product_option_value_id,
                          seller_id: _this4.catprodArray[i].option1[0].option2[k].seller_id,
                          name: _this4.catprodArray[i].option1[0].option2[k].name,
                          quantity: _this4.catprodArray[i].option1[0].option2[k].quantity
                        };

                        if (_this4.dataoption) {
                          if (_this4.dataoption.quantity > 0) {
                            prod["option2value"][m] = _this4.dataoption;
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

                    if (_this4.catprodArray[i].option1.length > 0) {
                      prod["product_option_id"] = _this4.catprodArray[i].option1[0].product_option_id;
                      prod["product_option_value_id"] = _this4.catprodArray[i].option1[0].product_option_value_id;
                      prod["name"] = _this4.catprodArray[i].option1[0].name;
                      prod["quantity"] = _this4.catprodArray[i].option1[0].quantity;
                      prod["sku"] = _this4.catprodArray[i].option1[0].sku;
                      prod["price"] = _this4.catprodArray[i].option1[0].price;

                      if (Number(_this4.catprodArray[i].option1[0].salesprice) > _this4.catprodArray[i].option1[0].price) {
                        prod["salesprice"] = _this4.catprodArray[i].option1[0].salesprice;
                      } else {
                        prod["salesprice"] = "";
                      }

                      prod["sellerdiscount"] = _this4.catprodArray[i].option1[0].sellerdiscount;
                      prod["requestedQty"] = 1;
                    } else {
                      prod["product_option_id"] = "";
                      prod["product_option_value_id"] = "";
                      prod["name"] = "";
                      prod["quantity"] = "";
                      prod["sku"] = "";
                      prod["price"] = "";
                      prod["salesprice"] = "";
                      prod["requestedQty"] = 1;
                    }

                    _this4.prods.push(prod);

                    _this4.logger.debug("checking prods array " + JSON.stringify(_this4.prods));

                    _this4.showheartIcon.push({
                      wishlist_check: _this4.catprodArray[i].wishlist_check
                    });

                    _this4.logger.debug("cheking wishlistcheck " + JSON.stringify(_this4.showheartIcon));
                  }
                } else {
                  _this4.logger.info("invoking else part of search");

                  _this4.networkService.showSuccessAlert("No products found for the given search, please change your search.");
                }
              });
            } else {
              this.logger.info("checking the else ");
              this.networkService.showSuccessAlert("please enter minmum 3 charecters");
            }
          } else {
            return;
          }
        }
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
                    // toast.onDidDismiss(() => {
                    //   this.logger.info("Dismissed toast");
                    // });
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
        key: "addToCart",
        value: function addToCart(category, products) {
          var _this5 = this;

          if (category.alternate_brand == "YES") {
            var _alert = this.alertCtrl.create({
              header: "Ivipni",
              message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
              buttons: [{
                text: "No",
                role: "cancel",
                handler: function handler() {
                  category.alternate = "NO";

                  _this5.addToCartDataInsert(category, products);
                }
              }, {
                text: "Yes",
                handler: function handler() {
                  category.alternate = "YES";

                  _this5.addToCartDataInsert(category, products);
                }
              }]
            }); // alert.present();

          } else {
            category.alternate = "";
            this.addToCartDataInsert(category, products);
          }
        }
      }, {
        key: "addToCartDataInsert",
        value: function addToCartDataInsert(category, products) {
          var addProduct;

          var _this = this;

          _this.logger.info("invoking add to cart function:-");

          _this.logger.debug("checking addtocart object" + JSON.stringify(category));

          _this.logger.debug("checking addtocart object" + JSON.stringify(products));

          if (Number(products.requestedQty) > 0) {
            if (category.quantity_check == "NO") {
              for (var i = 0; i < _this.catprodArray.length; i++) {
                if (_this.catprodArray[i].product_id == category.product_id) {
                  _this.logger.debug("invoking if condition " + _this.catprodArray[i].product_id);

                  _this.prods[i].requestedQty = products.requestedQty;

                  for (var i = 0; i < _this.prods.length; i++) {
                    if (_this.prods[i].prod_id == category.product_id) {
                      addProduct = {
                        product_id: category.product_id,
                        product_option: _this.prods[i]["product_option_id"],
                        product_option_value: _this.prods[i]["product_option_value_id"],
                        product_option1: _this.prods[i]["product_option_id1"],
                        product_option_value1: _this.prods[i]["product_option_value_id1"],
                        product_quantity: _this.prods[i]["requestedQty"],
                        alternate_brand: category.alternate
                      };

                      _this.logger.debug("checking addtocart object " + JSON.stringify(addProduct));

                      break;
                    }
                  }
                }
              }

              if (products.requestedQty > 0) {
                this.users.addToCart(addProduct, function (result, data) {
                  if (result == "1") {
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
                    _this.logger.debug("invoking if condition " + _this.catprodArray[i].product_id);

                    _this.prods[i].requestedQty = products.requestedQty;

                    for (var i = 0; i < _this.prods.length; i++) {
                      if (_this.prods[i].prod_id == category.product_id) {
                        addProduct = {
                          product_id: category.product_id,
                          product_option: _this.prods[i]["product_option_id"],
                          product_option_value: _this.prods[i]["product_option_value_id"],
                          product_option1: _this.prods[i]["product_option_id1"],
                          product_option_value1: _this.prods[i]["product_option_value_id1"],
                          product_quantity: _this.prods[i]["requestedQty"],
                          alternate_brand: category.alternate
                        };

                        _this.logger.debug("checking addtocart object " + JSON.stringify(addProduct));

                        break;
                      }
                    }
                  }
                }

                if (products.requestedQty > 0) {
                  this.users.addToCart(addProduct, function (result, data) {
                    if (result == "1") {
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
          } else {
            _this.networkService.showSuccessAlert("minmum quantity 1");
          }
        }
      }, {
        key: "setWishlist",
        value: function setWishlist(cate, index) {
          var _this = this;

          var productId = {
            product_id: cate.product_id
          };

          if (cate.wishlist_check == 1) {
            _this.toastMessage = "Already present in the wish list";

            _this.presentToast();
          } else {
            for (var i = 0; i < _this.catprodArray.length; i++) {
              if (_this.catprodArray[i].product_id == cate.product_id) {
                if (_this.showheartIcon[i].wishlist_check == "1") {
                  _this.toastMessage = "Already present in the wish list";

                  _this.presentToast();
                } else {
                  _this.showheartIcon[i].wishlist_check = 1;

                  _this.logger.debug("invoking if condition after " + _this.showheartIcon[i].wishlist_check);

                  this.users.setWishlist(productId, function (result, data) {
                    if (result == "1") {
                      _this.logger.info("success callback");

                      _this.toastMessage = data.toString();

                      _this.presentToast();
                    } else {
                      _this.networkService.showErrorAlert();
                    }
                  });
                }
              }
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
        key: "addToCartQt",
        value: function addToCartQt() {
          this.networkService.showSuccessAlert("this product has no quantity");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchProductsPage;
    }();

    SearchProductsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    SearchProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-search-products",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-products.page.scss */
      "./src/app/pages/search-products/search-products.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], SearchProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-search-products-search-products-module-es5.js.map