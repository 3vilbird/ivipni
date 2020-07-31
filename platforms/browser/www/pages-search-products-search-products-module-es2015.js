(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-products-search-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-card>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"searchText()\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-input\n          type=\"search\"\n          placeholder=\"Search Products\"\n          id=\"search\"\n          formControlName=\"search\"\n          class=\"form-search\"\n        ></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-button type=\"submit\" [disabled]=\"!myForm.valid\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-card> -->\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-searchbar (search)=\"doSearch($event)\"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"products\">\n  <div class=\"borderr\" *ngFor=\" let category of catprodArray; let idx = index\">\n    <ion-card>\n      <ion-row>\n        <ion-col *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\n          <img\n            class=\"imagecategory\"\n            src=\"{{category.image}}\"\n            (click)=\"imageview(category.image)\"\n          />\n        </ion-col>\n        <ion-col width-80>\n          <h2>{{category.name}}</h2>\n          <h6>{{category.model}}</h6>\n        </ion-col>\n        <ion-col width-20>\n          <div\n            [ngClass]=\"showheartIcon[idx].wishlist_check == 1 ? 'icon_heart_red':'icon_heart'\"\n          >\n            <ion-icon\n              name=\"heart\"\n              (click)=\"setWishlist(category, $index);\"\n              class=\"heart\"\n            ></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"options_margin\">\n        <ion-col *ngIf=\"category?.option1.length > 0\">\n          <ion-label>Seller:</ion-label>\n        </ion-col>\n\n        <ion-col class=\"searchproducts\">\n          <div\n            class=\"options_selectseller\"\n            *ngIf=\"category?.option1.length > 1\"\n          >\n            <ion-item>\n              <ion-label floating></ion-label>\n              <ion-select\n                [interfaceOptions]=\"selectOptions\"\n                (ngModel)=\"place\"\n                (ionChange)=\"optionsFn($event, category.product_id);\"\n              >\n                <ion-select-option\n                  *ngFor=\" let item of category?.option1; let subidx = index \"\n                >\n                  <span>{{item.name}}</span>&nbsp;&nbsp; - &nbsp;&nbsp;\n                  <span>{{item.price | currency:'INR':true}}</span>\n                </ion-select-option>\n              </ion-select> </ion-item\n            ><small class=\"smallcount\"\n              >&nbsp;&nbsp;{{category.sellercount-1}} more seller</small\n            >\n          </div>\n\n          <div\n            class=\"options_selectseller\"\n            *ngIf=\"category?.option1.length == 1\"\n          >\n            {{prods[idx].name}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"options_margin\">\n        <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\n          <ion-label>Size:</ion-label>\n        </ion-col>\n        <ion-col class=\"options_select\">\n          <div\n            class=\"options_height\"\n            *ngIf=\"prods[idx].option2value.length > 1\"\n          >\n            <ion-item>\n              <ion-label floating></ion-label>\n\n              <ion-select\n                [interfaceOptions]=\"selectOptions\"\n                (ngModel)=\"place1\"\n                (ionChange)=\"option1Fn($event, category.product_id);\"\n              >\n                <ion-select-option\n                  *ngFor=\" let temp of prods[idx]?.option2value;let subidx = index \"\n                >\n                  <span><p>{{temp.name}}</p></span>\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div\n            class=\"options_height\"\n            *ngIf=\"prods[idx].option2value.length == 1\"\n          >\n            <div\n              class=\"options_height\"\n              *ngIf=\"category?.option1[0].option2.length > 1\"\n            >\n              <ion-item>\n                <ion-label floating></ion-label>\n\n                <ion-select\n                  [interfaceOptions]=\"selectOptions\"\n                  (ngModel)=\"place\"\n                  (ionChange)=\"option1Fn($event, category.product_id);\"\n                >\n                  <ion-select-option\n                    *ngFor=\" let temp of category?.option1[0].option2; let subidx = index \"\n                  >\n                    <p>{{temp.name}}</p>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div\n              class=\"options_height\"\n              *ngIf=\"prods[idx].option2value.length ==1\"\n            >\n              {{prods[idx].option2value[0].name}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"margin_last_row\">\n        <ion-row>\n          <ion-col>\n            <div class=\"price_main\">\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice !=0\">\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\n              </p>\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\n              <ion-input\n                type=\"number\"\n                value=\"\"\n                [(ngModel)]=\"prods[idx].requestedQty\"\n              ></ion-input>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\n              <ion-icon\n                name=\"cart\"\n                class=\"cart\"\n                (click)=\"addToCart(category, prods[idx])\"\n              ></ion-icon>\n            </div>\n\n            <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\n              <div class=\"outofStack\">out of stock</div>\n              <br />\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\n    </ion-card>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div *ngIf=\"showTextMsg\" class=\"textMsgProd\">That's All</div>\n\n  <div padding></div>\n  <div padding></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/search-products/search-products-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/search-products/search-products-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: SearchProductsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductsPageRoutingModule", function() { return SearchProductsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_products_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-products.page */ "./src/app/pages/search-products/search-products.page.ts");




const routes = [
    {
        path: '',
        component: _search_products_page__WEBPACK_IMPORTED_MODULE_3__["SearchProductsPage"]
    }
];
let SearchProductsPageRoutingModule = class SearchProductsPageRoutingModule {
};
SearchProductsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchProductsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-products/search-products.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-products/search-products.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchProductsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductsPageModule", function() { return SearchProductsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-products-routing.module */ "./src/app/pages/search-products/search-products-routing.module.ts");
/* harmony import */ var _search_products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-products.page */ "./src/app/pages/search-products/search-products.page.ts");








let SearchProductsPageModule = class SearchProductsPageModule {
};
SearchProductsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _search_products_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchProductsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_search_products_page__WEBPACK_IMPORTED_MODULE_6__["SearchProductsPage"]],
    })
], SearchProductsPageModule);



/***/ }),

/***/ "./src/app/pages/search-products/search-products.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-products/search-products.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("page-search-products .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n}\n\n.textMsgProd {\n  text-align: center;\n}\n\nion-row ion-col[width-80] .item-md {\n  padding-left: 0px;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: right;\n}\n\n.products ion-select {\n  width: 100%;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .borderr .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .borderr .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .borderr .item-label-stacked .select-ios, .products .borderr .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-label-stacked .select-md, .products .borderr .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-block {\n  min-height: 3.4rem;\n}\n\n.products .image_div {\n  width: 30%;\n  float: left;\n}\n\n.products .image_div img {\n  margin-top: 0px !important;\n}\n\n.products .detail_div {\n  width: 70%;\n  float: left;\n  margin-top: -13px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .detail_div .discount {\n  text-decoration: line-through;\n}\n\n.products .detail_div .options_margin {\n  margin-top: -7px;\n}\n\n.products .margin_last_row {\n  margin-top: -7px !important;\n}\n\n.products .options_selectseller {\n  padding-top: 15px;\n  margin-left: -171px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 15px;\n}\n\n.products .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col[width-50].first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col[width-50].second_col {\n  color: white;\n  background-color: orange;\n}\n\nion-col[width-33], ion-col[width-34] {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n\n.searchproducts {\n  margin-left: 150px;\n  margin-top: -3px;\n}\n\n.smallcount {\n  color: blue;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvc2VhcmNoLXByb2R1Y3RzL3NlYXJjaC1wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1wcm9kdWN0cy9zZWFyY2gtcHJvZHVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDREo7O0FER0U7RUFDRSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsaUJBQUE7QUNDSjs7QURFSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NOOztBRENJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENJO0VBRUUsWUFBQTtBQ0FOOztBREdJO0VBQ0UsV0FBQTtBQ0ROOztBREdJO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtBQ0ROOztBREVNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDQVI7O0FER007RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNEUjs7QURHTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURJTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNGUjs7QURLTTtFQUNFLGtCQUFBO0FDSFI7O0FET0k7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0xOOztBRE1NO0VBQ0UsMEJBQUE7QUNKUjs7QURPSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNMTjs7QURPTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0xSOztBRFFNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDTlI7O0FEUU07RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDTlI7O0FEU007RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDUFI7O0FEVU07RUFDRSxrQkFBQTtBQ1JSOztBRFdNO0VBQ0UsNkJBQUE7QUNUUjs7QURZTTtFQUNFLGdCQUFBO0FDVlI7O0FEYUk7RUFDRSwyQkFBQTtBQ1hOOztBRGNJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ1pOOztBRGVJO0VBQ0UsY0FBQTtBQ2JOOztBRGVJO0VBQ0UsY0FBQTtBQ2JOOztBRGVJO0VBQ0UsZUFBQTtBQ2JOOztBRGVJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNiTjs7QURnQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNkTjs7QURpQkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNmTjs7QURtQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURtQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ2hCSjs7QURtQkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNoQko7O0FEbUJFO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0FDaEJKOztBRG1CRTtFQUdFLG1CQUFBO1VBQUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDaEJKOztBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQko7O0FEc0JFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQko7O0FEcUJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURvQkU7RUFDQSxXQUFBO0FDakJGOztBRG1CRTtFQUNNLGtCQUFBO0VBQ0YsbUJBQUE7QUNoQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gtcHJvZHVjdHMvc2VhcmNoLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2Utc2VhcmNoLXByb2R1Y3Rze1xuICAgIC5pbWFnZWNhdGVnb3J5e1xuICAgIHdpZHRoOjQ2JTtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgIFxuICB9XG4gIH1cbiAgLnFudHlDb2xvciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIH1cbiAgLnRleHRNc2dQcm9kIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgaW9uLXJvdyBpb24tY29sW3dpZHRoLTgwXSAuaXRlbS1tZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnByb2R1Y3RzIHtcbiAgICBoMiB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAvL2ZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gIFxuICAgIGlvbi1zZWxlY3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5ib3JkZXJyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWJsb2NrIHtcbiAgICAgICAgbWluLWhlaWdodDogMy40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmltYWdlX2RpdiB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRldGFpbF9kaXYge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXRvcDogLTEzcHg7XG4gIFxuICAgICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWJsb2NrIHtcbiAgICAgICAgbWluLWhlaWdodDogMy40cmVtO1xuICAgICAgfVxuICBcbiAgICAgIC5kaXNjb3VudCB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgfVxuICBcbiAgICAgIC5vcHRpb25zX21hcmdpbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5tYXJnaW5fbGFzdF9yb3cge1xuICAgICAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgXG4gICAgLm9wdGlvbnNfc2VsZWN0c2VsbGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xNzFweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2hlYXJ0X3JlZCB7XG4gICAgICBjb2xvcjogIzUzN2ZjNTtcbiAgICB9XG4gICAgLmljb25faGVhcnQge1xuICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICAgIC5oZWFydCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5jYXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgIH1cbiAgXG4gICAgLmljb25fY2FydCB7XG4gICAgICBjb2xvcjogIzE1YTAzMztcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICBcbiAgICAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgfVxuICBcbiAgaW9uLWNvbFt3aWR0aC01MF0uZmlyc3RfY29sIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgfVxuICBcbiAgaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgfVxuICBcbiAgaW9uLWNvbFt3aWR0aC0zM10sIGlvbi1jb2xbd2lkdGgtMzRdIHtcbiAgICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgICAtbXMtZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIGZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICAgIG1heC1oZWlnaHQ6IDcwcHg7XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xuICB9XG4gIC5mb3JtLXNlYXJjaCB7XG4gICAgLy8gbWluLXdpZHRoOiA4MCU7XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5zZWFyY2hwcm9kdWN0cyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gIH1cbiAgLnNtYWxsY291bnR7XG4gIGNvbG9yOiBibHVlO1xuICB9XG4gIC5kaXZpbWFnZWZsYWd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTU3cHg7XG4gIH0iLCJwYWdlLXNlYXJjaC1wcm9kdWN0cyAuaW1hZ2VjYXRlZ29yeSB7XG4gIHdpZHRoOiA0NiU7XG4gIG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5xbnR5Q29sb3Ige1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50ZXh0TXNnUHJvZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLXJvdyBpb24tY29sW3dpZHRoLTgwXSAuaXRlbS1tZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ucHJvZHVjdHMgaDIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnByb2R1Y3RzIGg2IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBjb2xvcjogZ3JheTtcbn1cbi5wcm9kdWN0cyBpb24taWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5wcm9kdWN0cyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmNiYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDMuNHJlbTtcbn1cbi5wcm9kdWN0cyAuaW1hZ2VfZGl2IHtcbiAgd2lkdGg6IDMwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucHJvZHVjdHMgLmltYWdlX2RpdiBpbWcge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAtMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tYmxvY2sge1xuICBtaW4taGVpZ2h0OiAzLjRyZW07XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLmRpc2NvdW50IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLm9wdGlvbnNfbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogLTdweDtcbn1cbi5wcm9kdWN0cyAubWFyZ2luX2xhc3Rfcm93IHtcbiAgbWFyZ2luLXRvcDogLTdweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3RzIC5vcHRpb25zX3NlbGVjdHNlbGxlciB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogLTE3MXB4O1xufVxuLnByb2R1Y3RzIC5pY29uX2hlYXJ0X3JlZCB7XG4gIGNvbG9yOiAjNTM3ZmM1O1xufVxuLnByb2R1Y3RzIC5pY29uX2hlYXJ0IHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG4ucHJvZHVjdHMgLmhlYXJ0IHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnByb2R1Y3RzIC5jYXJ0IHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzE1YTAzMztcbn1cbi5wcm9kdWN0cyAuaWNvbl9jYXJ0IHtcbiAgY29sb3I6ICMxNWEwMzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucHJvZHVjdHMgLmljb25fY2FydF9jb2xvciB7XG4gIGNvbG9yOiAjZDQzMjgxO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24tdG9vbGJhci50b29sYmFyLnRvb2xiYXItaW9zIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xufVxuXG5pb24tY29sW3dpZHRoLTUwXS5maXJzdF9jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODdlZjU7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdLnNlY29uZF9jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuaW9uLWNvbFt3aWR0aC0zM10sIGlvbi1jb2xbd2lkdGgtMzRdIHtcbiAgLXdlYmtpdC1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gIC1tcy1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gIGZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgbWF4LXdpZHRoOiAzMy4zMzMzJTtcbiAgbWF4LWhlaWdodDogNzBweDtcbn1cblxuLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG4gIC8qIGNvbG9yOiBibGFjazsgKi9cbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNocHJvZHVjdHMge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5zbWFsbGNvdW50IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5kaXZpbWFnZWZsYWcge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi1yaWdodDogLTU3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/search-products/search-products.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/search-products/search-products.page.ts ***!
  \***************************************************************/
/*! exports provided: SearchProductsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProductsPage", function() { return SearchProductsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/holders/holders */ "./src/providers/holders/holders.ts");
// has one error at line 205








// import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";

let SearchProductsPage = class SearchProductsPage {
    constructor(navCtrl, toastCtrl, users, networkService, logger, formBuilder, holders, loadingCtrl, 
    // private photoViewer: PhotoViewer,
    alertCtrl) {
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
        this.showheartIcon = [];
        //select options variables
        this.prods = [];
        this.showinfinate = false;
        this.showTextMsg = false;
        this.page = 1;
        this.option2value = [];
        this.selectOptions = {
            title: "select",
        };
        this.myForm = formBuilder.group({
            search: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
    }
    ionViewDidLoad() {
        this.logger.info("Hello SearchProducts Page");
    }
    //FIXME:
    searchText() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: ``,
            });
            this.page = 1;
            // this.searchValue = this.myForm.value.search;
            let searchData = {
                search: this.searchValue,
            };
            this.logger.debug("invoking the searchtext value" + JSON.stringify(searchData));
            if (searchData == null) {
                alert("checking allert");
            }
            else if (this.searchValue.length >= 3) {
                this.logger.debug("checking the search value" + this.searchValue.length);
                loading.present();
                this.users.searchDetails(searchData, this.page, (result, data) => {
                    if (result == "1") {
                        var _dataObj = JSON.parse(data);
                        this.catprodArray = _dataObj.data.products;
                        this.logger.debug("checking the productsArray " + JSON.stringify(this.catprodArray));
                        this.cartCount = _dataObj.count;
                        this.nextPage = _dataObj.next_page;
                        this.logger.debug("catprodArray " + JSON.stringify(this.catprodArray));
                        this.showheartIcon = [];
                        this.prods = [];
                        var m = 0;
                        for (var i = 0; i < this.catprodArray.length; i++) {
                            var prod = {
                                prod_id: this.catprodArray[i].product_id,
                            };
                            if (this.catprodArray[i].option1[0].option2.length > 0) {
                                prod["name1"] = this.catprodArray[i].option1[0].option2[0].name;
                                prod["product_option_id1"] = this.catprodArray[i].option1[0].option2[0].product_option_id;
                                prod["product_option_value_id1"] = this.catprodArray[i].option1[0].option2[0].product_option_value_id;
                                prod["option2value"] = [];
                                for (var k = 0; k < this.catprodArray[i].option1[0].option2.length; k++) {
                                    this.dataoption = {
                                        product_option_id: this.catprodArray[i].option1[0].option2[k]
                                            .product_option_id,
                                        product_option_value_id: this.catprodArray[i].option1[0]
                                            .option2[k].product_option_value_id,
                                        seller_id: this.catprodArray[i].option1[0].option2[k]
                                            .seller_id,
                                        name: this.catprodArray[i].option1[0].option2[k].name,
                                        quantity: this.catprodArray[i].option1[0].option2[k].quantity,
                                    };
                                    if (this.dataoption) {
                                        if (this.dataoption.quantity > 0) {
                                            prod["option2value"][m] = this.dataoption;
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
                            if (this.catprodArray[i].option1.length > 0) {
                                prod["product_option_id"] = this.catprodArray[i].option1[0].product_option_id;
                                prod["product_option_value_id"] = this.catprodArray[i].option1[0].product_option_value_id;
                                prod["name"] = this.catprodArray[i].option1[0].name;
                                prod["quantity"] = this.catprodArray[i].option1[0].quantity;
                                prod["sku"] = this.catprodArray[i].option1[0].sku;
                                prod["price"] = this.catprodArray[i].option1[0].price;
                                if (Number(this.catprodArray[i].option1[0].salesprice) >
                                    this.catprodArray[i].option1[0].price) {
                                    prod["salesprice"] = this.catprodArray[i].option1[0].salesprice;
                                }
                                else {
                                    prod["salesprice"] = "";
                                }
                                prod["sellerdiscount"] = this.catprodArray[i].option1[0].sellerdiscount;
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
                                prod["requestedQty"] = 1;
                            }
                            this.prods.push(prod);
                            this.logger.debug("checking prods array " + JSON.stringify(this.prods));
                            this.showheartIcon.push({
                                wishlist_check: this.catprodArray[i].wishlist_check,
                            });
                            this.logger.debug("cheking wishlistcheck " + JSON.stringify(this.showheartIcon));
                            loading.dismiss();
                        }
                    }
                    else {
                        this.logger.info("invoking else part of search");
                        this.networkService.showSuccessAlert("No products found for the given search, please change your search.");
                        loading.dismiss();
                    }
                });
            }
            else {
                this.logger.info("checking the else ");
                this.networkService.showSuccessAlert("please enter minmum 3 charecters");
            }
        });
    }
    imageview(image) {
        // this.photoViewer.show(image);
    }
    doInfinite(infiniteScroll) {
        this.showinfinate = true;
        this.holders.setInfinateScrollObj(infiniteScroll);
        this.page++;
        this.getsearchProducts();
        setTimeout(() => {
            if (this.nextPage != 0) {
                return;
            }
            else {
                infiniteScroll.enable(false);
                this.showTextMsg = true;
            }
        }, 500);
    }
    getsearchProducts() {
        if (this.nextPage != 0) {
            //var _this = this;
            this.searchValue = this.myForm.value.search;
            let searchData = {
                search: this.searchValue,
            };
            this.logger.debug("invoking the searchtext value" + JSON.stringify(searchData));
            if (searchData == null) {
                alert("checking allert");
            }
            else if (this.searchValue.length >= 3) {
                this.logger.debug("checking the search value" + this.searchValue.length);
                this.users.searchDetails(searchData, this.page, (result, data) => {
                    if (result == "1") {
                        this.holders.getInfinateScrollObj().complete();
                        var _dataObj = JSON.parse(data);
                        for (var i = 0; i < _dataObj.data.products.length; i++) {
                            this.catprodArray.push(_dataObj.data.products[i]);
                        }
                        this.nextPage = _dataObj.next_page;
                        this.logger.debug("catprodArray " + JSON.stringify(this.catprodArray));
                        this.showheartIcon = [];
                        this.prods = [];
                        var m = 0;
                        for (var i = 0; i < this.catprodArray.length; i++) {
                            var prod = {
                                prod_id: this.catprodArray[i].product_id,
                            };
                            if (this.catprodArray[i].option1[0].option2.length > 0) {
                                // if(_this.catprodArray[i].option1[0].option.option_value_id == _this.catprodArray[i].option1[0].option2[0].seller_id){
                                prod["name1"] = this.catprodArray[i].option1[0].option2[0].name;
                                prod["product_option_id1"] = this.catprodArray[i].option1[0].option2[0].product_option_id;
                                prod["product_option_value_id1"] = this.catprodArray[i].option1[0].option2[0].product_option_value_id;
                                prod["option2value"] = [];
                                for (var k = 0; k < this.catprodArray[i].option1[0].option2.length; k++) {
                                    this.dataoption = {
                                        product_option_id: this.catprodArray[i].option1[0].option2[k].product_option_id,
                                        product_option_value_id: this.catprodArray[i].option1[0]
                                            .option2[k].product_option_value_id,
                                        seller_id: this.catprodArray[i].option1[0].option2[k]
                                            .seller_id,
                                        name: this.catprodArray[i].option1[0].option2[k].name,
                                        quantity: this.catprodArray[i].option1[0].option2[k]
                                            .quantity,
                                    };
                                    if (this.dataoption) {
                                        if (this.dataoption.quantity > 0) {
                                            prod["option2value"][m] = this.dataoption;
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
                            if (this.catprodArray[i].option1.length > 0) {
                                prod["product_option_id"] = this.catprodArray[i].option1[0].product_option_id;
                                prod["product_option_value_id"] = this.catprodArray[i].option1[0].product_option_value_id;
                                prod["name"] = this.catprodArray[i].option1[0].name;
                                prod["quantity"] = this.catprodArray[i].option1[0].quantity;
                                prod["sku"] = this.catprodArray[i].option1[0].sku;
                                prod["price"] = this.catprodArray[i].option1[0].price;
                                if (Number(this.catprodArray[i].option1[0].salesprice) >
                                    this.catprodArray[i].option1[0].price) {
                                    prod["salesprice"] = this.catprodArray[i].option1[0].salesprice;
                                }
                                else {
                                    prod["salesprice"] = "";
                                }
                                prod["sellerdiscount"] = this.catprodArray[i].option1[0].sellerdiscount;
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
                                prod["requestedQty"] = 1;
                            }
                            this.prods.push(prod);
                            this.logger.debug("checking prods array " + JSON.stringify(this.prods));
                            this.showheartIcon.push({
                                wishlist_check: this.catprodArray[i].wishlist_check,
                            });
                            this.logger.debug("cheking wishlistcheck " + JSON.stringify(this.showheartIcon));
                        }
                    }
                    else {
                        this.logger.info("invoking else part of search");
                        this.networkService.showSuccessAlert("No products found for the given search, please change your search.");
                    }
                });
            }
            else {
                this.logger.info("checking the else ");
                this.networkService.showSuccessAlert("please enter minmum 3 charecters");
            }
        }
        else {
            return;
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            // toast.onDidDismiss(() => {
            //   this.logger.info("Dismissed toast");
            // });
            toast.present();
        });
    }
    addToCart(category, products) {
        if (category.alternate_brand == "YES") {
            let alert = this.alertCtrl.create({
                header: "Ivipni",
                message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: () => {
                            category.alternate = "NO";
                            this.addToCartDataInsert(category, products);
                        },
                    },
                    {
                        text: "Yes",
                        handler: () => {
                            category.alternate = "YES";
                            this.addToCartDataInsert(category, products);
                        },
                    },
                ],
            });
            // alert.present();
        }
        else {
            category.alternate = "";
            this.addToCartDataInsert(category, products);
        }
    }
    addToCartDataInsert(category, products) {
        let addProduct;
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
                                    alternate_brand: category.alternate,
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
                                        alternate_brand: category.alternate,
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
        else {
            _this.networkService.showSuccessAlert("minmum quantity 1");
        }
    }
    setWishlist(cate, index) {
        var _this = this;
        var productId = {
            product_id: cate.product_id,
        };
        if (cate.wishlist_check == 1) {
            _this.toastMessage = "Already present in the wish list";
            _this.presentToast();
        }
        else {
            for (var i = 0; i < _this.catprodArray.length; i++) {
                if (_this.catprodArray[i].product_id == cate.product_id) {
                    if (_this.showheartIcon[i].wishlist_check == "1") {
                        _this.toastMessage = "Already present in the wish list";
                        _this.presentToast();
                    }
                    else {
                        _this.showheartIcon[i].wishlist_check = 1;
                        _this.logger.debug("invoking if condition after " +
                            _this.showheartIcon[i].wishlist_check);
                        this.users.setWishlist(productId, function (result, data) {
                            if (result == "1") {
                                _this.logger.info("success callback");
                                _this.toastMessage = data.toString();
                                _this.presentToast();
                            }
                            else {
                                _this.networkService.showErrorAlert();
                            }
                        });
                    }
                }
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
    addToCartQt() {
        this.networkService.showSuccessAlert("this product has no quantity");
    }
    doSearch(event) {
        console.log(event.target.value);
        if (event.target.value !== "") {
            this.searchValue = event.target.value;
            this.searchText();
        }
        else {
            // alert("Search field is empty");
            this.networkService.showSuccessAlert("please enter minmum 3 charecters");
        }
    }
    ngOnInit() { }
};
SearchProductsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
];
SearchProductsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-search-products",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-products.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-products.page.scss */ "./src/app/pages/search-products/search-products.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], SearchProductsPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-products-search-products-module-es2015.js.map