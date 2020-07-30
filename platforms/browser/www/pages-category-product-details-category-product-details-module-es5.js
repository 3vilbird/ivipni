function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-product-details-category-product-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details/category-product-details.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details/category-product-details.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryProductDetailsCategoryProductDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-nav color=\"primary\">\r\n      <ion-title>{{categoryname}}</ion-title>\r\n      <ion-buttons end>\r\n        <button ion-button (click)=\"cartFn();\">\r\n          <ion-icon name=\"cart\"></ion-icon>\r\n          <div class=\"qntyColor\">{{cartCount}}</div>\r\n        </button>\r\n      </ion-buttons>\r\n    </ion-nav>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding class=\"products\">\r\n  <div class=\"borderr\" *ngFor=\" let category of catprodArray; let idx = index\">\r\n    <ion-card>\r\n      <div *ngIf=\"category.product_id != 0\">\r\n        <ion-row>\r\n          <ion-col *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\r\n            <!--<img class =\"imagecategory\" src = {{category.image}} imageViewer=\"OTHER_IMAGE_URL\" />-->\r\n            <!--replace the below image with {{category.image}} -->\r\n            <img\r\n              class=\"imagecategory\"\r\n              src=\"{{tempimg}}\"\r\n              (click)=\"imageview(category.image,category.name)\"\r\n            />\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <h2>{{category.name}}</h2>\r\n            <h6>{{category.model}}</h6>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div\r\n              [ngClass]=\"showheartIcon[idx].wishlist_check == 1 ? 'icon_heart_red':'icon_heart'\"\r\n            >\r\n              <ion-icon\r\n                name=\"heart\"\r\n                (click)=\"setWishlist(category, $index);\"\r\n                class=\"heart\"\r\n              ></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"options_margin\">\r\n          <ion-col><ion-label floating>sellers</ion-label></ion-col>\r\n          <ion-col>\r\n            <div class=\"options_height\" *ngIf=\"category?.option1.length >1 \">\r\n              <ion-item>\r\n                <ion-select\r\n                  [interfaceOptions]=\"selectOptions\"\r\n                  interface=\"alert\"\r\n                  placeholder=\"sellers\"\r\n                >\r\n                  <ion-select-option\r\n                    [value]=\"item\"\r\n                    *ngFor=\" let item of category?.option1; let subidx = index \"\r\n                    >{{item.name}} -&nbsp;&nbsp;<span\r\n                      >{{item.price | currency:'INR':true}}</span\r\n                    >\r\n                  </ion-select-option>\r\n                </ion-select> </ion-item\r\n              ><small class=\"smallcount\"\r\n                >&nbsp;&nbsp;{{category.sellercount-1}} more seller</small\r\n              >\r\n            </div>\r\n\r\n            <div class=\"options_height\" *ngIf=\"category?.option1.length == 1\">\r\n              {{prods[idx].name}}\r\n            </div>\r\n          </ion-col>\r\n          <!--<div *ngIf=\"category?.option1.length > 1\"></div>-->\r\n        </ion-row>\r\n\r\n        <ion-row class=\"options_margin\">\r\n          <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\r\n            <ion-label>Size:</ion-label>\r\n          </ion-col>\r\n          <ion-col class=\"options_select\">\r\n            <div\r\n              class=\"options_height\"\r\n              *ngIf=\"prods[idx].option2value.length > 1\"\r\n            >\r\n              <ion-item>\r\n                <ion-label floating></ion-label>\r\n\r\n                <ion-select\r\n                  [interfaceOptions]=\"selectOptions\"\r\n                  (ngModel)=\"place1\"\r\n                  (ionChange)=\"option1Fn($event, category.product_id);\"\r\n                >\r\n                  <ion-select-option\r\n                    [value]=\"temp\"\r\n                    *ngFor=\" let temp of prods[idx].option2value;let subidx = index \"\r\n                  >\r\n                    <span><p>{{temp.name}}</p></span>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n\r\n            <div\r\n              class=\"options_height\"\r\n              *ngIf=\"prods[idx].option2value.length ==1\"\r\n            >\r\n              {{prods[idx].option2value[0].name}}\r\n            </div>\r\n            <!--</div>-->\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row class=\"margin_last_row\">\r\n          <ion-col>\r\n            <div class=\"price_main\">\r\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice != 0\">\r\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\r\n              </p>\r\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\r\n              <ion-input\r\n                class=\"quantityinput\"\r\n                type=\"number\"\r\n                value=\"\"\r\n                [(ngModel)]=\"prods[idx].requestedQty\"\r\n              ></ion-input>\r\n            </div>\r\n          </ion-col>\r\n\r\n          <ion-col>\r\n            <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\r\n              <ion-icon\r\n                name=\"cart\"\r\n                class=\"cart\"\r\n                (click)=\"addToCart(category, prods[idx])\"\r\n              ></ion-icon>\r\n            </div>\r\n\r\n            <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\r\n              <div class=\"outofStack\">out of stock</div>\r\n              <br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n\r\n  <div *ngIf=\"categorycount\">\r\n    <h4 class=\"noproductfound\">No product found</h4>\r\n  </div>\r\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\"\r\n    >\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n  <div *ngIf=\"showTextMsg\" class=\"textMsgProd\">That's All</div>\r\n  <div padding></div>\r\n  <div padding></div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/category-product-details/category-product-details-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/category-product-details/category-product-details-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CategoryProductDetailsPageRoutingModule */

  /***/
  function srcAppPagesCategoryProductDetailsCategoryProductDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsPageRoutingModule", function () {
      return CategoryProductDetailsPageRoutingModule;
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


    var _category_product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category-product-details.page */
    "./src/app/pages/category-product-details/category-product-details.page.ts");

    var routes = [{
      path: '',
      component: _category_product_details_page__WEBPACK_IMPORTED_MODULE_3__["CategoryProductDetailsPage"]
    }];

    var CategoryProductDetailsPageRoutingModule = function CategoryProductDetailsPageRoutingModule() {
      _classCallCheck(this, CategoryProductDetailsPageRoutingModule);
    };

    CategoryProductDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryProductDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/category-product-details/category-product-details.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/category-product-details/category-product-details.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: CategoryProductDetailsPageModule */

  /***/
  function srcAppPagesCategoryProductDetailsCategoryProductDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsPageModule", function () {
      return CategoryProductDetailsPageModule;
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


    var _category_product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-product-details-routing.module */
    "./src/app/pages/category-product-details/category-product-details-routing.module.ts");
    /* harmony import */


    var _category_product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category-product-details.page */
    "./src/app/pages/category-product-details/category-product-details.page.ts");

    var CategoryProductDetailsPageModule = function CategoryProductDetailsPageModule() {
      _classCallCheck(this, CategoryProductDetailsPageModule);
    };

    CategoryProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _category_product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryProductDetailsPageRoutingModule"]],
      declarations: [_category_product_details_page__WEBPACK_IMPORTED_MODULE_6__["CategoryProductDetailsPage"]]
    })], CategoryProductDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/category-product-details/category-product-details.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/category-product-details/category-product-details.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoryProductDetailsCategoryProductDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "category-product-details .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n  margin-left: 4px;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n  margin-top: 5px;\n}\n\n.textMsgProd {\n  text-align: center;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: left;\n}\n\n.products ion-select {\n  width: 100%;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .borderr .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n  margin-right: 42px;\n}\n\n.products .borderr .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n  margin-right: 42px;\n}\n\n.products .borderr .item-label-stacked .select-ios, .products .borderr .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-label-stacked .select-md, .products .borderr .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-block {\n  min-height: 2rem;\n}\n\n.products .borderr .options_select {\n  margin-left: -171px;\n}\n\n.products .detail_div {\n  float: left;\n  margin-top: -13px;\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .margin_last_row {\n  margin-top: -7px;\n}\n\n.products .price {\n  margin-top: -11px;\n}\n\n.products .options_margin {\n  margin-top: -7px;\n}\n\n.products .metaname {\n  margin-right: 100px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 5px;\n}\n\n.platform-android .icon_cart_color {\n  padding-top: 17px;\n  color: #d43281;\n  padding-left: 33px;\n}\n\n.platform-ios .icon_cart_color {\n  padding-top: 21px;\n  color: #d43281;\n  padding-left: 10px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col.first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col.second_col {\n  color: white;\n  background-color: orange;\n}\n\n.col {\n  padding: 0px;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  max-width: 76%;\n}\n\nion-col, ion-col {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.quantity1 ion-input {\n  display: inline-block;\n  max-width: 60px;\n}\n\n.quantity-ios ion-input {\n  display: inline-block;\n}\n\n.options_select {\n  margin-top: -3px;\n}\n\n.price_main {\n  padding-top: 15px;\n  padding-right: 50px;\n}\n\n.alert-md .alert-radio-label {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-overflow: ellipsis;\n  white-space: normal;\n  color: initial;\n  padding-left: 26px;\n  padding-right: 26px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n}\n\n.alert-ios .alert-radio-label {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n  text-overflow: ellipsis;\n  white-space: normal;\n  color: initial;\n  padding: 13px;\n}\n\n.smallcount {\n  color: blue;\n}\n\n.noproductfound {\n  color: #979797;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzL0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzXFxjYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUdBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRko7O0FETUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURNSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0hOOztBREtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0hOOztBREtJO0VBQ0UsV0FBQTtBQ0hOOztBRE1JO0VBQ0UsV0FBQTtBQ0pOOztBRE1JO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQ0pOOztBREtNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNIUjs7QURNTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSlI7O0FETU07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDSlI7O0FET007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTFI7O0FEUU07RUFDRSxnQkFBQTtBQ05SOztBRFFNO0VBQ0UsbUJBQUE7QUNOUjs7QURVSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNSTjs7QURVTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1JSOztBRFdNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDVFI7O0FEV007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDVFI7O0FEWU07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDVlI7O0FEYU07RUFDRSxrQkFBQTtBQ1hSOztBRGNJO0VBQ0UsZ0JBQUE7QUNaTjs7QURjSTtFQUNFLGlCQUFBO0FDWk47O0FEY0k7RUFDRSxnQkFBQTtBQ1pOOztBRGVJO0VBQ0UsbUJBQUE7QUNiTjs7QURnQkk7RUFDRSxjQUFBO0FDZE47O0FEZ0JJO0VBQ0UsY0FBQTtBQ2ROOztBRGdCSTtFQUNFLGVBQUE7QUNkTjs7QURnQkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2ROOztBRGlCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDZk47O0FEb0JHO0VBQ0csaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNqQk47O0FEb0JLO0VBQ0MsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNqQk47O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNuQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNuQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDbkJKOztBRHNCRTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQ25CSjs7QURzQkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFHQSxhQUFBO0VBR0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtBQ25CSjs7QURzQkU7RUFHRSxtQkFBQTtVQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ25CSjs7QURzQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJKOztBRHNCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ25CSjs7QURzQkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUNuQko7O0FEcUJFO0VBQ0UscUJBQUE7QUNsQko7O0FEcUJFO0VBQ0UsZ0JBQUE7QUNsQko7O0FEcUJFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ2xCSjs7QURxQkc7RUFDRyxnQkFBQTtFQUdBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNsQk47O0FEcUJFO0VBQ0ksZ0JBQUE7RUFHQSxtQkFBQTtVQUFBLE9BQUE7RUFHQSw0QkFBQTtVQUFBLFFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNsQk47O0FEb0JFO0VBQ0EsV0FBQTtBQ2pCRjs7QURtQkk7RUFDRyxjQUFBO0FDaEJQOztBRG1CRTtFQUNNLGtCQUFBO0VBQ0YsbUJBQUE7QUNoQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNhdGVnb3J5LXByb2R1Y3QtZGV0YWlsc3tcclxuICAgIC5pbWFnZWNhdGVnb3J5e1xyXG4gICAgIC8vIGJvcmRlci1pbWFnZTogdXJsKGJvcmRlci5wbmcpIDMwIHJvdW5kO1xyXG4gIFxyXG4gICAgd2lkdGg6NDYlO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBcclxuICB9XHJcbiAgfVxyXG4gIC5xbnR5Q29sb3Ige1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICB9XHJcbiAgLnRleHRNc2dQcm9kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnByb2R1Y3RzIHtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIH1cclxuICAgIGg2IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24tc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDJweDtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tYmxvY2sge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgLm9wdGlvbnNfc2VsZWN0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE3MXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGV0YWlsX2RpdiB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTNweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJjYmM7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBcclxuICAgICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLml0ZW0tYmxvY2sge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1hcmdpbl9sYXN0X3JvdyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICB9XHJcbiAgICAucHJpY2Uge1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMTFweDtcclxuICAgIH1cclxuICAgIC5vcHRpb25zX21hcmdpbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IC03cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWV0YW5hbWUge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25faGVhcnRfcmVkIHtcclxuICAgICAgY29sb3I6ICM1MzdmYzU7XHJcbiAgICB9XHJcbiAgICAuaWNvbl9oZWFydCB7XHJcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgfVxyXG4gICAgLmhlYXJ0IHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcnQge1xyXG4gICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25fY2FydCB7XHJcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgIFxyXG4gIH1cclxuICAgLnBsYXRmb3JtLWFuZHJvaWQgLmljb25fY2FydF9jb2xvciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOjE3cHg7XHJcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MzNweDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgIC5wbGF0Zm9ybS1pb3MgLmljb25fY2FydF9jb2xvciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOjIxcHg7XHJcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tdG9vbGJhci50b29sYmFyLnRvb2xiYXItbWQge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tY29sLmZpcnN0X2NvbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xyXG4gIH1cclxuICBcclxuICBpb24tY29sLnNlY29uZF9jb2wge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICAuY29sIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xyXG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XHJcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1heC13aWR0aDogNzYlO1xyXG4gIH1cclxuICBcclxuICBpb24tY29sLCBpb24tY29sIHtcclxuICAgIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xyXG4gICAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIGZsZXg6IDAgMCAzMy4zMzMzJTtcclxuICAgIG1heC13aWR0aDogMzMuMzMzMyU7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucXVhbnRpdHkxIGlvbi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIC5xdWFudGl0eS1pb3MgaW9uLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLm9wdGlvbnNfc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcmljZV9tYWluIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICB9XHJcbiAgIFxyXG4gICAuYWxlcnQtbWQgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLXdlYmtpdC1mbGV4OiAxO1xyXG4gICAgICAtbXMtZmxleDogMTtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI2cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LWlvcyAuYWxlcnQtcmFkaW8tbGFiZWwge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAtd2Via2l0LWZsZXg6IDE7XHJcbiAgICAgIC1tcy1mbGV4OiAxO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICAtd2Via2l0LW9yZGVyOiAwO1xyXG4gICAgICAtbXMtZmxleC1vcmRlcjogMDtcclxuICAgICAgb3JkZXI6IDA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICBjb2xvcjogaW5pdGlhbDtcclxuICAgICAgcGFkZGluZzogMTNweDtcclxuICB9XHJcbiAgLnNtYWxsY291bnR7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgfVxyXG4gICAgLm5vcHJvZHVjdGZvdW5ke1xyXG4gICAgICAgY29sb3I6ICM5Nzk3OTc7IFxyXG4gICAgfVxyXG4gIFxyXG4gIC5kaXZpbWFnZWZsYWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xyXG4gIH0iLCJjYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMgLmltYWdlY2F0ZWdvcnkge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ucW50eUNvbG9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50ZXh0TXNnUHJvZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3RzIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wcm9kdWN0cyBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ucHJvZHVjdHMgaW9uLWljb24ge1xuICBmbG9hdDogbGVmdDtcbn1cbi5wcm9kdWN0cyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmNiYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogNDJweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tYmxvY2sge1xuICBtaW4taGVpZ2h0OiAycmVtO1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5vcHRpb25zX3NlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogLTEzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtaW9zLCAucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWJsb2NrIHtcbiAgbWluLWhlaWdodDogMy40cmVtO1xufVxuLnByb2R1Y3RzIC5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnByb2R1Y3RzIC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xufVxuLnByb2R1Y3RzIC5vcHRpb25zX21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG4ucHJvZHVjdHMgLm1ldGFuYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cbi5wcm9kdWN0cyAuaWNvbl9oZWFydF9yZWQge1xuICBjb2xvcjogIzUzN2ZjNTtcbn1cbi5wcm9kdWN0cyAuaWNvbl9oZWFydCB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuLnByb2R1Y3RzIC5oZWFydCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wcm9kdWN0cyAuY2FydCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMxNWEwMzM7XG59XG4ucHJvZHVjdHMgLmljb25fY2FydCB7XG4gIGNvbG9yOiAjMTVhMDMzO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wbGF0Zm9ybS1hbmRyb2lkIC5pY29uX2NhcnRfY29sb3Ige1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgY29sb3I6ICNkNDMyODE7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLnBsYXRmb3JtLWlvcyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG4gIGNvbG9yOiAjZDQzMjgxO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi1jb2wuZmlyc3RfY29sIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xufVxuXG5pb24tY29sLnNlY29uZF9jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDc2JTtcbn1cblxuaW9uLWNvbCwgaW9uLWNvbCB7XG4gIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xuICAtbXMtZmxleDogMCAwIDMzLjMzMzMlO1xuICBmbGV4OiAwIDAgMzMuMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMyU7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVhbnRpdHkxIGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiA2MHB4O1xufVxuXG4ucXVhbnRpdHktaW9zIGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9wdGlvbnNfc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLnByaWNlX21haW4ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmFsZXJ0LW1kIC5hbGVydC1yYWRpby1sYWJlbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtZmxleDogMTtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBjb2xvcjogaW5pdGlhbDtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59XG5cbi5hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAtbXMtZmxleDogMTtcbiAgZmxleDogMTtcbiAgLXdlYmtpdC1vcmRlcjogMDtcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gIG9yZGVyOiAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDEzcHg7XG59XG5cbi5zbWFsbGNvdW50IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ub3Byb2R1Y3Rmb3VuZCB7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuXG4uZGl2aW1hZ2VmbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/category-product-details/category-product-details.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/category-product-details/category-product-details.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: CategoryProductDetailsPage */

  /***/
  function srcAppPagesCategoryProductDetailsCategoryProductDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsPage", function () {
      return CategoryProductDetailsPage;
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


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/holders/holders */
    "./src/providers/holders/holders.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // error at line number 555
    // import { ShoppingcartPage } from "../shoppingcart/shoppingcart.page";
    //import { CategoryProductDetailsInfoPage } from "../category-product-details-info/category-product-details-info.page";
    // import { PhotoViewer } from '@ionic-native/photo-viewer/ngx";


    var CategoryProductDetailsPage =
    /*#__PURE__*/
    function () {
      function CategoryProductDetailsPage(navCtrl, productServices, users, toastCtrl, networkService, loadingCtrl, logger, holders, // private photoViewer: PhotoViewer,
      alertCtrl, route, router) {
        var _this2 = this;

        _classCallCheck(this, CategoryProductDetailsPage);

        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.networkService = networkService;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.holders = holders;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
        this.catprodArray = [];
        this.showheartIcon = []; //select options variables

        this.prods = [];
        this.option2value = [];
        this.categorycount = false;
        this.page = 1;
        this.showinfinate = false;
        this.showTextMsg = false;
        this.showScroll = true;
        this.selectOptions = {
          title: "select one"
        };

        var _this = this; // getting the parameters from the url


        this.route.queryParams.subscribe(function (params) {
          _this2.category_value = params["sub_category_id"];
          _this2.categoryname = params["sub_category_name"]; // for the pramotional products

          _this.promotionalProducts = params["category_id"];
          _this.bestSellerProducts = params["category_id"];
        });
        var loading = loadingCtrl.create({
          message: ""
        });
      }

      _createClass(CategoryProductDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (_this.category_value) {
            _this.logger.debug("category-value" + this.category_value);

            this.category_id = this.category_value;
          } else if (_this.promotionalProducts) {
            _this.logger.debug("promotionalProducts" + _this.promotionalProducts);

            this.category_id = _this.promotionalProducts;
          } else if (_this.bestSellerProducts) {
            _this.logger.debug("bestSellerProducts" + _this.bestSellerProducts);

            this.category_id = _this.bestSellerProducts;
          }

          if (_this.networkService.nullConnection()) {
            _this.logger.debug("invoking networkService rest.ts file");

            _this.networkService.showNetworkAlert();
          } else {
            // loading.present();
            this.productServices.getCatProdDetails(this.category_id, this.page, function (data) {
              if (data.status == "1") {
                // _this.logger.debug(
                //   "checking Array in category in details" + JSON.stringify(data)
                // );
                _this.catprodArray = data.data.products;
                _this.cartCount = data.count;
                _this.total_page = data.total_page;
                _this.current_page = data.current_page;
                _this.nextPage = data.next_page;
                _this.showheartIcon = [];
                _this.prods = [];
                var m = 0;

                for (var i = 0; i < _this.catprodArray.length; i++) {
                  if (_this.catprodArray[i].product_id != 0) {
                    var prod = {
                      prod_id: _this.catprodArray[i].product_id
                    };

                    if (_this.catprodArray[i].option1[0].option2.length > 0) {
                      // if(_this.catprodArray[i].option1[0].option.option_value_id == _this.catprodArray[i].option1[0].option2[0].seller_id){
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
                      } // }
                      //console.log(prod["option2value"]);

                    } else {
                      prod["option2value"] = [];
                      prod["name1"] = "";
                      prod["product_option_id1"] = "";
                      prod["product_option_value_id1"] = "";
                      prod["sellerdiscount"] = "";
                    }

                    if (_this.catprodArray[i].option1.length > 0) {
                      prod["product_option_id"] = _this.catprodArray[i].option1[0].product_option_id;
                      prod["product_option_value_id"] = _this.catprodArray[i].option1[0].product_option_value_id;
                      prod["name"] = _this.catprodArray[i].option1[0].name;
                      prod["quantity"] = _this.catprodArray[i].option1[0].quantity;
                      prod["sku"] = _this.catprodArray[i].option1[0].sku;
                      prod["price"] = _this.catprodArray[i].option1[0].price;
                      prod["sellerdiscount"] = _this.catprodArray[i].option1[0].sellerdiscount;

                      if (Number(_this.catprodArray[i].option1[0].salesprice) > _this.catprodArray[i].option1[0].price) {
                        prod["salesprice"] = _this.catprodArray[i].option1[0].salesprice;
                      } else {
                        prod["salesprice"] = "";
                      }

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

                    _this.prods.push(prod);

                    _this.logger.debug("prods " + JSON.stringify(_this.prods));

                    _this.showheartIcon.push({
                      wishlist_check: _this.catprodArray[i].wishlist_check
                    });

                    _this.logger.debug("showheartIcon " + _this.showheartIcon); // loading.dismiss();

                  }
                }
              } else {
                // loading.dismiss();
                _this.categorycount = true;

                _this.logger.debug("error of products");
              }
            });
          }
        } // functions

      }, {
        key: "doInfinite",
        value: function doInfinite(infiniteScroll) {
          var _this3 = this;

          this.showinfinate = true;
          this.holders.setInfinateScrollObj(infiniteScroll);
          this.page++;
          this.getCatProducts();
          setTimeout(function () {
            if (_this3.nextPage != 0) {
              return;
            } else {
              infiniteScroll.enable(false);
              _this3.showTextMsg = true;
            }
          }, 100);
        }
      }, {
        key: "getCatProducts",
        value: function getCatProducts() {
          var _this = this;

          if (_this.networkService.nullConnection()) {
            _this.logger.debug("invoking networkService rest.ts file");

            _this.networkService.showNetworkAlert();
          } else {
            _this.productServices.getCatProdDetails(this.category_id, this.page, function (data) {
              if (data.status == "1") {
                _this.holders.getInfinateScrollObj().complete();

                _this.logger.debug("checking Array in category in details" + JSON.stringify(data));

                for (var i = 0; i < data.data.products.length; i++) {
                  if (data.data.products[i].product_id != 0) {
                    _this.catprodArray.push(data.data.products[i]);
                  }
                }

                _this.cartCount = data.count;
                _this.nextPage = data.next_page;
                _this.showheartIcon = [];
                _this.prods = [];
                var m = 0;

                for (var i = 0; i < _this.catprodArray.length; i++) {
                  if (_this.catprodArray[i].product_id != 0) {
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
                      prod["sellerdiscount"] = _this.catprodArray[i].option1[0].sellerdiscount;

                      if (Number(_this.catprodArray[i].option1[0].salesprice) > _this.catprodArray[i].option1[0].price) {
                        prod["salesprice"] = _this.catprodArray[i].option1[0].salesprice;
                      } else {
                        prod["salesprice"] = "";
                      }

                      prod["requestedQty"] = 1;
                    } else {
                      prod["option2value"] = [];
                      prod["product_option_id"] = "";
                      prod["product_option_value_id"] = "";
                      prod["name"] = "";
                      prod["quantity"] = "";
                      prod["sku"] = "";
                      prod["price"] = "";
                      prod["salesprice"] = "";
                      prod["requestedQty"] = 1;
                    }

                    _this.prods.push(prod);

                    _this.logger.debug("prods " + JSON.stringify(_this.prods));

                    _this.showheartIcon.push({
                      wishlist_check: _this.catprodArray[i].wishlist_check
                    });

                    _this.logger.debug("showheartIcon " + _this.showheartIcon);
                  }
                }
              } else {
                _this.logger.debug("error of products");
              }
            });
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: this.toastMessage,
                      duration: 1000,
                      position: "middle"
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addToCart",
        value: function addToCart(category, products) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(category.alternate_brand == "YES")) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 3;
                    return this.alertCtrl.create({
                      header: "Ivipni",
                      message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
                      buttons: [{
                        text: "No",
                        role: "cancel",
                        handler: function handler() {
                          category.alternate = "NO";

                          _this4.addToCartDataInsert(category, products);
                        }
                      }, {
                        text: "Yes",
                        handler: function handler() {
                          category.alternate = "YES";

                          _this4.addToCartDataInsert(category, products);
                        }
                      }]
                    });

                  case 3:
                    alert = _context2.sent;
                    _context2.next = 6;
                    return alert.present();

                  case 6:
                    _context2.next = 10;
                    break;

                  case 8:
                    category.alternate = "";
                    this.addToCartDataInsert(category, products);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
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
                    if (this.prods[i].prod_id == category.product_id) {
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

              this.users.addToCart(addProduct, function (result, data) {
                if (result == "1") {
                  var _dataObj = JSON.parse(data);

                  _this.toastMessage = _dataObj.message;
                  _this.cartCount = _dataObj.count;

                  _this.presentToast();
                } else {
                  _this.networkService.showErrorAlert();
                }
              });
            } else {
              if (Number(products.requestedQty) <= Number(products.quantity)) {
                for (var i = 0; i < _this.catprodArray.length; i++) {
                  if (_this.catprodArray[i].product_id == category.product_id) {
                    _this.logger.debug("invoking if condition " + _this.catprodArray[i].product_id);

                    _this.prods[i].requestedQty = products.requestedQty;

                    for (var i = 0; i < _this.prods.length; i++) {
                      if (this.prods[i].prod_id == category.product_id) {
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

                this.users.addToCart(addProduct, function (result, data) {
                  if (result == "1") {
                    var _dataObj = JSON.parse(data);

                    _this.toastMessage = _dataObj.message;
                    _this.cartCount = _dataObj.count;

                    _this.presentToast();
                  } else {
                    _this.networkService.showErrorAlert();
                  }
                });
              } else {
                _this.networkService.showSuccessAlert("you have maximum qnty of " + products.quantity);
              }
            }
          } else {
            _this.networkService.showSuccessAlert("minimum quentity 1");
          }
        }
      }, {
        key: "setWishlist",
        value: function setWishlist(cate, index) {
          var _this = this;

          var productId = {
            product_id: cate.product_id
          };

          _this.logger.debug("checking status " + cate.wishlist_check);

          if (cate.wishlist_check == "1") {
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
        key: "imageview",
        value: function imageview(image, name) {// this.photoViewer.show(image, name, { share: false });
        }
      }, {
        key: "optionsFn",
        value: function optionsFn(ev, id) {
          var k = 0;

          var _this = this;

          _this.logger.debug("checking options item " + _this.place);

          _this.logger.debug("ev " + ev);

          _this.optionEvent = ev;

          _this.logger.debug("id " + id); //   for (var i = 0; i < _this.catprodArray.length; i++){
          //     console.log("i"+_this.catprodArray.length);
          //     console.log("product_id"+_this.catprodArray[i].product_id);
          //     console.log("id" + id);
          //    if (_this.catprodArray[i].product_id == id) {
          //  }
          //   }


          for (var i = 0; i < _this.catprodArray.length; i++) {
            if (_this.catprodArray[i].product_id == id) {
              _this.prods[i].option2value = [];

              for (var q = 0; q < _this.catprodArray[i].option1.length; q++) {
                if (_this.catprodArray[i].option1[q].option_value_id == ev.option_value_id) {
                  for (var j = 0; j < _this.catprodArray[i].option1[q].option2.length; j++) {
                    if (_this.catprodArray[i].option1[q].option2[j].seller_id == ev.option_value_id) {
                      _this.prods[i].name1 = _this.catprodArray[i].option1[q].option2[0].name;
                      _this.prods[i].product_option_id1 = _this.catprodArray[i].option1[q].option2[0].product_option_id;
                      _this.prods[i].product_option_value_id1 = _this.catprodArray[i].option1[q].option2[0].product_option_value_id; // if( _this.catprodArray[i].option1[q].option2[j].quantity > 0){

                      _this.dataoption = {
                        product_option_id: _this.catprodArray[i].option1[q].option2[j].product_option_id,
                        product_option_value_id: _this.catprodArray[i].option1[q].option2[j].product_option_value_id,
                        seller_id: _this.catprodArray[i].option1[q].option2[j].seller_id,
                        name: _this.catprodArray[i].option1[q].option2[j].name,
                        quantity: _this.catprodArray[i].option1[q].option2[j].quantity
                      }; // }
                    }

                    if (_this.dataoption) {
                      if (_this.dataoption.quantity > 0) {
                        _this.prods[i].option2value[k] = _this.dataoption;
                        k++;
                      }
                    } //_this.option2value =  _this.dataoption;

                  } // _this.option2value =  _this.dataoption;

                }
              }

              _this.logger.debug("invoking if condition " + _this.catprodArray[i].product_id);

              this.prods[i].prod_id = _this.catprodArray[i].product_id;
              this.prods[i].product_option_value_id = ev.product_option_value_id;
              this.prods[i].name = ev.name;
              this.prods[i].quantity = ev.quantity;
              this.prods[i].sku = ev.sku;
              this.prods[i].price = ev.price;
              this.prods[i].salesprice = ev.salesprice;
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
        key: "productDetails",
        value: function productDetails(category) {
          var _this = this;

          _this.logger.debug("category " + category); // _this.navCtrl.push(CategoryProductDetailsInfoPage, category);


          var navigationExtras = {
            queryParams: {
              data: JSON.stringify(category)
            }
          };

          _this.router.navigate(["/category-product-details-info"], navigationExtras);
        }
      }, {
        key: "homePageNav",
        value: function homePageNav() {
          // this.navCtrl.setRoot(HomePage, {});
          this.router.navigateByUrl("/home");
        }
      }, {
        key: "cartPageNav",
        value: function cartPageNav() {
          // this.navCtrl.push(ShopingcartPage, {});
          this.router.navigateByUrl("/shoppingcart");
        }
      }, {
        key: "cartFn",
        value: function cartFn() {
          // this.navCtrl.push(ShopingcartPage, {});
          this.router.navigateByUrl("/shoppingcart");
        }
      }]);

      return CategoryProductDetailsPage;
    }();

    CategoryProductDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]
      }, {
        type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }];
    };

    CategoryProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-category-product-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-product-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details/category-product-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-product-details.page.scss */
      "./src/app/pages/category-product-details/category-product-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"], _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], CategoryProductDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-category-product-details-category-product-details-module-es5.js.map