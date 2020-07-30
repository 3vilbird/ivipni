(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-products-search-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-products/search-products.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"searchText()\">\n    <ion-row>\n      <ion-col size=\"9\">\n        <ion-input\n          type=\"search\"\n          placeholder=\"Search Products\"\n          id=\"search\"\n          formControlName=\"search\"\n          class=\"form-search\"\n        ></ion-input>\n      </ion-col>\n      <ion-col>\n        <ion-button type=\"submit\" [disabled]=\"!myForm.valid\">\n          <ion-icon name=\"search\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-card>\n\n<ion-content padding class=\"products\">\n  <div class=\"borderr\" *ngFor=\" let category of catprodArray; let idx = index\">\n    <ion-card>\n      <ion-row>\n        <ion-col *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\n          <img\n            class=\"imagecategory\"\n            src=\"{{category.image}}\"\n            (click)=\"imageview(category.image)\"\n          />\n        </ion-col>\n        <ion-col width-80>\n          <h2>{{category.name}}</h2>\n          <h6>{{category.model}}</h6>\n        </ion-col>\n        <ion-col width-20>\n          <div\n            [ngClass]=\"showheartIcon[idx].wishlist_check == 1 ? 'icon_heart_red':'icon_heart'\"\n          >\n            <ion-icon\n              name=\"heart\"\n              (click)=\"setWishlist(category, $index);\"\n              class=\"heart\"\n            ></ion-icon>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"options_margin\">\n        <ion-col *ngIf=\"category?.option1.length > 0\">\n          <ion-label>Seller:</ion-label>\n        </ion-col>\n\n        <ion-col class=\"searchproducts\">\n          <div\n            class=\"options_selectseller\"\n            *ngIf=\"category?.option1.length > 1\"\n          >\n            <ion-item>\n              <ion-label floating></ion-label>\n              <ion-select\n                [interfaceOptions]=\"selectOptions\"\n                (ngModel)=\"place\"\n                (ionChange)=\"optionsFn($event, category.product_id);\"\n              >\n                <ion-select-option\n                  *ngFor=\" let item of category?.option1; let subidx = index \"\n                >\n                  <span>{{item.name}}</span>&nbsp;&nbsp; - &nbsp;&nbsp;\n                  <span>{{item.price | currency:'INR':true}}</span>\n                </ion-select-option>\n              </ion-select> </ion-item\n            ><small class=\"smallcount\"\n              >&nbsp;&nbsp;{{category.sellercount-1}} more seller</small\n            >\n          </div>\n\n          <div\n            class=\"options_selectseller\"\n            *ngIf=\"category?.option1.length == 1\"\n          >\n            {{prods[idx].name}}\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"options_margin\">\n        <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\n          <ion-label>Size:</ion-label>\n        </ion-col>\n        <ion-col class=\"options_select\">\n          <div\n            class=\"options_height\"\n            *ngIf=\"prods[idx].option2value.length > 1\"\n          >\n            <ion-item>\n              <ion-label floating></ion-label>\n\n              <ion-select\n                [interfaceOptions]=\"selectOptions\"\n                (ngModel)=\"place1\"\n                (ionChange)=\"option1Fn($event, category.product_id);\"\n              >\n                <ion-select-option\n                  *ngFor=\" let temp of prods[idx]?.option2value;let subidx = index \"\n                >\n                  <span><p>{{temp.name}}</p></span>\n                </ion-select-option>\n              </ion-select>\n            </ion-item>\n          </div>\n          <div\n            class=\"options_height\"\n            *ngIf=\"prods[idx].option2value.length == 1\"\n          >\n            <div\n              class=\"options_height\"\n              *ngIf=\"category?.option1[0].option2.length > 1\"\n            >\n              <ion-item>\n                <ion-label floating></ion-label>\n\n                <ion-select\n                  [interfaceOptions]=\"selectOptions\"\n                  (ngModel)=\"place\"\n                  (ionChange)=\"option1Fn($event, category.product_id);\"\n                >\n                  <ion-select-option\n                    *ngFor=\" let temp of category?.option1[0].option2; let subidx = index \"\n                  >\n                    <p>{{temp.name}}</p>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div\n              class=\"options_height\"\n              *ngIf=\"prods[idx].option2value.length ==1\"\n            >\n              {{prods[idx].option2value[0].name}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <div class=\"margin_last_row\">\n        <ion-row>\n          <ion-col>\n            <div class=\"price_main\">\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice !=0\">\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\n              </p>\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\n              <ion-input\n                type=\"number\"\n                value=\"\"\n                [(ngModel)]=\"prods[idx].requestedQty\"\n              ></ion-input>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\n              <ion-icon\n                name=\"cart\"\n                class=\"cart\"\n                (click)=\"addToCart(category, prods[idx])\"\n              ></ion-icon>\n            </div>\n\n            <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\n              <div class=\"outofStack\">out of stock</div>\n              <br />\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\n    </ion-card>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div *ngIf=\"showTextMsg\" class=\"textMsgProd\">That's All</div>\n\n  <div padding></div>\n  <div padding></div>\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("page-search-products .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n}\n\n.textMsgProd {\n  text-align: center;\n}\n\nion-row ion-col[width-80] .item-md {\n  padding-left: 0px;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: right;\n}\n\n.products ion-select {\n  width: 100%;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .borderr .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .borderr .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .borderr .item-label-stacked .select-ios, .products .borderr .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-label-stacked .select-md, .products .borderr .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-block {\n  min-height: 3.4rem;\n}\n\n.products .image_div {\n  width: 30%;\n  float: left;\n}\n\n.products .image_div img {\n  margin-top: 0px !important;\n}\n\n.products .detail_div {\n  width: 70%;\n  float: left;\n  margin-top: -13px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .detail_div .discount {\n  text-decoration: line-through;\n}\n\n.products .detail_div .options_margin {\n  margin-top: -7px;\n}\n\n.products .margin_last_row {\n  margin-top: -7px !important;\n}\n\n.products .options_selectseller {\n  padding-top: 15px;\n  margin-left: -171px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 15px;\n}\n\n.products .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col[width-50].first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col[width-50].second_col {\n  color: white;\n  background-color: orange;\n}\n\nion-col[width-33], ion-col[width-34] {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n\n.searchproducts {\n  margin-left: 150px;\n  margin-top: -3px;\n}\n\n.smallcount {\n  color: blue;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9zZWFyY2gtcHJvZHVjdHMvc2VhcmNoLXByb2R1Y3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoLXByb2R1Y3RzL3NlYXJjaC1wcm9kdWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0FDQUo7O0FERUU7RUFDRSxpQkFBQTtBQ0NKOztBREVJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ047O0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ047O0FEQ0k7RUFFRSxZQUFBO0FDQU47O0FER0k7RUFDRSxXQUFBO0FDRE47O0FER0k7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0FDRE47O0FERU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNBUjs7QURHTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREdNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RSOztBRElNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZSOztBREtNO0VBQ0Usa0JBQUE7QUNIUjs7QURPSTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDTE47O0FETU07RUFDRSwwQkFBQTtBQ0pSOztBRE9JO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0xOOztBRE9NO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDTFI7O0FEUU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNOUjs7QURRTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNOUjs7QURTTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNQUjs7QURVTTtFQUNFLGtCQUFBO0FDUlI7O0FEV007RUFDRSw2QkFBQTtBQ1RSOztBRFlNO0VBQ0UsZ0JBQUE7QUNWUjs7QURhSTtFQUNFLDJCQUFBO0FDWE47O0FEY0k7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDWk47O0FEZUk7RUFDRSxjQUFBO0FDYk47O0FEZUk7RUFDRSxjQUFBO0FDYk47O0FEZUk7RUFDRSxlQUFBO0FDYk47O0FEZUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2JOOztBRGdCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2ROOztBRGlCSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ2ZOOztBRG1CRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDaEJKOztBRG1CRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDaEJKOztBRG1CRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ2hCSjs7QURtQkU7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUNoQko7O0FEbUJFO0VBR0UsbUJBQUE7VUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNoQko7O0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2hCSjs7QURzQkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ25CSjs7QURxQkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDbEJKOztBRG9CRTtFQUNBLFdBQUE7QUNqQkY7O0FEbUJFO0VBQ00sa0JBQUE7RUFDRixtQkFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1wcm9kdWN0cy9zZWFyY2gtcHJvZHVjdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicGFnZS1zZWFyY2gtcHJvZHVjdHN7XG4gICAgLmltYWdlY2F0ZWdvcnl7XG4gICAgd2lkdGg6NDYlO1xuICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgXG4gIH1cbiAgfVxuICAucW50eUNvbG9yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuICAudGV4dE1zZ1Byb2Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBpb24tcm93IGlvbi1jb2xbd2lkdGgtODBdIC5pdGVtLW1kIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxuICAucHJvZHVjdHMge1xuICAgIGgyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIC8vZm9udC1zaXplOiA0MHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJvcmRlcnIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICB9XG4gIFxuICAgICAgLml0ZW0tYmxvY2sge1xuICAgICAgICBtaW4taGVpZ2h0OiAzLjRyZW07XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuaW1hZ2VfZGl2IHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgICAuZGV0YWlsX2RpdiB7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBtYXJnaW4tdG9wOiAtMTNweDtcbiAgXG4gICAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWlvcy5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgfVxuICAgICAgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICB9XG4gIFxuICAgICAgLml0ZW0tYmxvY2sge1xuICAgICAgICBtaW4taGVpZ2h0OiAzLjRyZW07XG4gICAgICB9XG4gIFxuICAgICAgLmRpc2NvdW50IHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICB9XG4gIFxuICAgICAgLm9wdGlvbnNfbWFyZ2luIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1hcmdpbl9sYXN0X3JvdyB7XG4gICAgICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICBcbiAgICAub3B0aW9uc19zZWxlY3RzZWxsZXIge1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogLTE3MXB4O1xuICAgIH1cbiAgXG4gICAgLmljb25faGVhcnRfcmVkIHtcbiAgICAgIGNvbG9yOiAjNTM3ZmM1O1xuICAgIH1cbiAgICAuaWNvbl9oZWFydCB7XG4gICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICB9XG4gICAgLmhlYXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gICAgLmNhcnQge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgY29sb3I6ICMxNWEwMzM7XG4gICAgfVxuICBcbiAgICAuaWNvbl9jYXJ0IHtcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2NhcnRfY29sb3Ige1xuICAgICAgY29sb3I6ICNkNDMyODE7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLWlvcyB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWluLWhlaWdodDogMHB4O1xuICB9XG4gIFxuICBpb24tY29sW3dpZHRoLTUwXS5maXJzdF9jb2wge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICB9XG4gIFxuICBpb24tY29sW3dpZHRoLTUwXS5zZWNvbmRfY29sIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIFxuICBpb24tY29sW3dpZHRoLTMzXSwgaW9uLWNvbFt3aWR0aC0zNF0ge1xuICAgIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gICAgZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMyU7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIH1cbiAgLmZvcm0tc2VhcmNoIHtcbiAgICAvLyBtaW4td2lkdGg6IDgwJTtcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAvKiBjb2xvcjogI2ZmZjsgKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnNlYXJjaHByb2R1Y3RzIHtcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcbiAgfVxuICAuc21hbGxjb3VudHtcbiAgY29sb3I6IGJsdWU7XG4gIH1cbiAgLmRpdmltYWdlZmxhZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbiAgfSIsInBhZ2Utc2VhcmNoLXByb2R1Y3RzIC5pbWFnZWNhdGVnb3J5IHtcbiAgd2lkdGg6IDQ2JTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLnFudHlDb2xvciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnRleHRNc2dQcm9kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tcm93IGlvbi1jb2xbd2lkdGgtODBdIC5pdGVtLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5wcm9kdWN0cyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ucHJvZHVjdHMgaDYge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIGNvbG9yOiBncmF5O1xufVxuLnByb2R1Y3RzIGlvbi1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnByb2R1Y3RzIGlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtaW9zLCAucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWJsb2NrIHtcbiAgbWluLWhlaWdodDogMy40cmVtO1xufVxuLnByb2R1Y3RzIC5pbWFnZV9kaXYge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5wcm9kdWN0cyAuaW1hZ2VfZGl2IGltZyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi10b3A6IC0xM3B4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LWlvcywgLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LW1kIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDMuNHJlbTtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuZGlzY291bnQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAub3B0aW9uc19tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnByb2R1Y3RzIC5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAtN3B4ICFpbXBvcnRhbnQ7XG59XG4ucHJvZHVjdHMgLm9wdGlvbnNfc2VsZWN0c2VsbGVyIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnRfcmVkIHtcbiAgY29sb3I6ICM1MzdmYzU7XG59XG4ucHJvZHVjdHMgLmljb25faGVhcnQge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cbi5wcm9kdWN0cyAuaGVhcnQge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4ucHJvZHVjdHMgLmNhcnQge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjMTVhMDMzO1xufVxuLnByb2R1Y3RzIC5pY29uX2NhcnQge1xuICBjb2xvcjogIzE1YTAzMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5wcm9kdWN0cyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgY29sb3I6ICNkNDMyODE7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi1jb2xbd2lkdGgtNTBdLmZpcnN0X2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbn1cblxuaW9uLWNvbFt3aWR0aC01MF0uc2Vjb25kX2NvbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG5pb24tY29sW3dpZHRoLTMzXSwgaW9uLWNvbFt3aWR0aC0zNF0ge1xuICAtd2Via2l0LWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgLW1zLWZsZXg6IDAgMCAzMy4zMzMzJTtcbiAgZmxleDogMCAwIDMzLjMzMzMlO1xuICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICBtYXgtaGVpZ2h0OiA3MHB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hwcm9kdWN0cyB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLnNtYWxsY291bnQge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmRpdmltYWdlZmxhZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNTdweDtcbn0iXX0= */");

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
    searchText() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: ``,
            });
            this.page = 1;
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