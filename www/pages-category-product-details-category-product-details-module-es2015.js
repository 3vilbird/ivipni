(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-product-details-category-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details/category-product-details.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details/category-product-details.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-nav color=\"primary\">\n      <ion-title>{{categoryname}}</ion-title>\n      <ion-buttons end>\n        <button ion-button (click)=\"cartFn();\">\n          <ion-icon name=\"cart\"></ion-icon>\n          <div class=\"qntyColor\">{{cartCount}}</div>\n        </button>\n      </ion-buttons>\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"products\">\n  <div class=\"borderr\" *ngFor=\" let category of catprodArray; let idx = index\">\n    <ion-card>\n      <div *ngIf=\"category.product_id != 0\">\n        <ion-row>\n          <ion-col *ngIf=\"category.image_flag != 0\" class=\"divimageflag\">\n            <!--<img class =\"imagecategory\" src = {{category.image}} imageViewer=\"OTHER_IMAGE_URL\" />-->\n            <!--replace the below image with {{category.image}} -->\n            <img\n              class=\"imagecategory\"\n              src=\"{{tempimg}}\"\n              (click)=\"imageview(category.image,category.name)\"\n            />\n          </ion-col>\n\n          <ion-col>\n            <h2>{{category.name}}</h2>\n            <h6>{{category.model}}</h6>\n          </ion-col>\n          <ion-col>\n            <div\n              [ngClass]=\"showheartIcon[idx].wishlist_check == 1 ? 'icon_heart_red':'icon_heart'\"\n            >\n              <ion-icon\n                name=\"heart\"\n                (click)=\"setWishlist(category, $index);\"\n                class=\"heart\"\n              ></ion-icon>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"options_margin\">\n          <ion-col><ion-label floating>sellers</ion-label></ion-col>\n          <ion-col>\n            <div class=\"options_height\" *ngIf=\"category?.option1.length >1 \">\n              <ion-item>\n                <ion-select\n                  [interfaceOptions]=\"selectOptions\"\n                  interface=\"alert\"\n                  placeholder=\"sellers\"\n                >\n                  <ion-select-option\n                    [value]=\"item\"\n                    *ngFor=\" let item of category?.option1; let subidx = index \"\n                    >{{item.name}} -&nbsp;&nbsp;<span\n                      >{{item.price | currency:'INR':true}}</span\n                    >\n                  </ion-select-option>\n                </ion-select> </ion-item\n              ><small class=\"smallcount\"\n                >&nbsp;&nbsp;{{category.sellercount-1}} more seller</small\n              >\n            </div>\n\n            <div class=\"options_height\" *ngIf=\"category?.option1.length == 1\">\n              {{prods[idx].name}}\n            </div>\n          </ion-col>\n          <!--<div *ngIf=\"category?.option1.length > 1\"></div>-->\n        </ion-row>\n\n        <ion-row class=\"options_margin\">\n          <ion-col *ngIf=\"prods[idx].option2value.length > 0\">\n            <ion-label>Size:</ion-label>\n          </ion-col>\n          <ion-col class=\"options_select\">\n            <div\n              class=\"options_height\"\n              *ngIf=\"prods[idx].option2value.length > 1\"\n            >\n              <ion-item>\n                <ion-label floating></ion-label>\n\n                <ion-select\n                  [interfaceOptions]=\"selectOptions\"\n                  (ngModel)=\"place1\"\n                  (ionChange)=\"option1Fn($event, category.product_id);\"\n                >\n                  <ion-select-option\n                    [value]=\"temp\"\n                    *ngFor=\" let temp of prods[idx].option2value;let subidx = index \"\n                  >\n                    <span><p>{{temp.name}}</p></span>\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </div>\n\n            <div\n              class=\"options_height\"\n              *ngIf=\"prods[idx].option2value.length ==1\"\n            >\n              {{prods[idx].option2value[0].name}}\n            </div>\n            <!--</div>-->\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"margin_last_row\">\n          <ion-col>\n            <div class=\"price_main\">\n              <p class=\"discount_amt\" *ngIf=\"prods[idx].salesprice != 0\">\n                {{prods[idx].salesprice | currency:'INR':true}}&nbsp;&nbsp;\n              </p>\n              <p class=\"price\">{{prods[idx].price | currency:'INR':true}}</p>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div *ngIf=\"prods[idx].quantity > 0\" class=\"quantity1\">\n              <ion-input\n                class=\"quantityinput\"\n                type=\"number\"\n                value=\"\"\n                [(ngModel)]=\"prods[idx].requestedQty\"\n              ></ion-input>\n            </div>\n          </ion-col>\n\n          <ion-col>\n            <div class=\"icon_cart\" *ngIf=\"prods[idx].quantity > 0\">\n              <ion-icon\n                name=\"cart\"\n                class=\"cart\"\n                (click)=\"addToCart(category, prods[idx])\"\n              ></ion-icon>\n            </div>\n\n            <div *ngIf=\"prods[idx].quantity <= 0\" class=\"icon_cart_color\">\n              <div class=\"outofStack\">out of stock</div>\n              <br />\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"smallcount\">{{prods[idx].sellerdiscount}}</div>\n      </div>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"categorycount\">\n    <h4 class=\"noproductfound\">No product found</h4>\n  </div>\n  <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\"\n    >\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <div *ngIf=\"showTextMsg\" class=\"textMsgProd\">That's All</div>\n  <div padding></div>\n  <div padding></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/category-product-details/category-product-details-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/category-product-details/category-product-details-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoryProductDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsPageRoutingModule", function() { return CategoryProductDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_product_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-product-details.page */ "./src/app/pages/category-product-details/category-product-details.page.ts");




const routes = [
    {
        path: '',
        component: _category_product_details_page__WEBPACK_IMPORTED_MODULE_3__["CategoryProductDetailsPage"]
    }
];
let CategoryProductDetailsPageRoutingModule = class CategoryProductDetailsPageRoutingModule {
};
CategoryProductDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryProductDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/category-product-details/category-product-details.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/category-product-details/category-product-details.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CategoryProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsPageModule", function() { return CategoryProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category_product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-product-details-routing.module */ "./src/app/pages/category-product-details/category-product-details-routing.module.ts");
/* harmony import */ var _category_product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-product-details.page */ "./src/app/pages/category-product-details/category-product-details.page.ts");







let CategoryProductDetailsPageModule = class CategoryProductDetailsPageModule {
};
CategoryProductDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_product_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryProductDetailsPageRoutingModule"]
        ],
        declarations: [_category_product_details_page__WEBPACK_IMPORTED_MODULE_6__["CategoryProductDetailsPage"]]
    })
], CategoryProductDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/category-product-details/category-product-details.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/category-product-details/category-product-details.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("category-product-details .imagecategory {\n  width: 46%;\n  margin-top: -5px;\n  margin-left: 4px;\n}\n\n.qntyColor {\n  margin-bottom: 20px;\n  background-color: red;\n  margin-top: 5px;\n}\n\n.textMsgProd {\n  text-align: center;\n}\n\n.products h2 {\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.products h6 {\n  font-size: 12px;\n  margin-top: -8px;\n  color: gray;\n}\n\n.products ion-icon {\n  float: left;\n}\n\n.products ion-select {\n  width: 100%;\n}\n\n.products .borderr {\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .borderr .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n  margin-right: 42px;\n}\n\n.products .borderr .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n  margin-right: 42px;\n}\n\n.products .borderr .item-label-stacked .select-ios, .products .borderr .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-label-stacked .select-md, .products .borderr .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .borderr .item-block {\n  min-height: 2rem;\n}\n\n.products .borderr .options_select {\n  margin-left: -171px;\n}\n\n.products .detail_div {\n  float: left;\n  margin-top: -13px;\n  border-bottom: 1px solid #bfbcbc;\n  margin-bottom: 8px;\n}\n\n.products .detail_div .item-md.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-ios.item-block .item-inner {\n  border: 1px solid #bfbcbc;\n  font-size: 13px;\n}\n\n.products .detail_div .item-label-stacked .select-ios, .products .detail_div .item-label-floating .select-ios {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-label-stacked .select-md, .products .detail_div .item-label-floating .select-md {\n  padding-top: 0px;\n  padding-bottom: 2px;\n}\n\n.products .detail_div .item-block {\n  min-height: 3.4rem;\n}\n\n.products .margin_last_row {\n  margin-top: -7px;\n}\n\n.products .price {\n  margin-top: -11px;\n}\n\n.products .options_margin {\n  margin-top: -7px;\n}\n\n.products .metaname {\n  margin-right: 100px;\n}\n\n.products .icon_heart_red {\n  color: #537fc5;\n}\n\n.products .icon_heart {\n  color: #bdbdbd;\n}\n\n.products .heart {\n  font-size: 30px;\n}\n\n.products .cart {\n  font-size: 40px;\n  color: #15a033;\n}\n\n.products .icon_cart {\n  color: #15a033;\n  margin-top: 5px;\n}\n\n.platform-android .icon_cart_color {\n  padding-top: 17px;\n  color: #d43281;\n  padding-left: 33px;\n}\n\n.platform-ios .icon_cart_color {\n  padding-top: 21px;\n  color: #d43281;\n  padding-left: 10px;\n}\n\nion-toolbar.toolbar.toolbar-ios {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-toolbar.toolbar.toolbar-md {\n  padding: 0px;\n  min-height: 0px;\n}\n\nion-col.first_col {\n  color: white;\n  background-color: #387ef5;\n}\n\nion-col.second_col {\n  color: white;\n  background-color: orange;\n}\n\n.col {\n  padding: 0px;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  max-width: 76%;\n}\n\nion-col, ion-col {\n  -webkit-box-flex: 0;\n          flex: 0 0 33.3333%;\n  max-width: 33.3333%;\n  max-height: 70px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n.quantity1 ion-input {\n  display: inline-block;\n  max-width: 60px;\n}\n\n.quantity-ios ion-input {\n  display: inline-block;\n}\n\n.options_select {\n  margin-top: -3px;\n}\n\n.price_main {\n  padding-top: 15px;\n  padding-right: 50px;\n}\n\n.alert-md .alert-radio-label {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-overflow: ellipsis;\n  white-space: normal;\n  color: initial;\n  padding-left: 26px;\n  padding-right: 26px;\n  padding-top: 13px;\n  padding-bottom: 13px;\n}\n\n.alert-ios .alert-radio-label {\n  overflow: hidden;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-ordinal-group: 1;\n          order: 0;\n  text-overflow: ellipsis;\n  white-space: normal;\n  color: initial;\n  padding: 13px;\n}\n\n.smallcount {\n  color: blue;\n}\n\n.noproductfound {\n  color: #979797;\n}\n\n.divimageflag {\n  margin-left: -10px;\n  margin-right: -57px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzL2NhdGVnb3J5LXByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFHQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1FO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUNISjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FETUk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNITjs7QURLSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNITjs7QURLSTtFQUNFLFdBQUE7QUNITjs7QURNSTtFQUNFLFdBQUE7QUNKTjs7QURNSTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7QUNKTjs7QURLTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSFI7O0FETU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0pSOztBRE1NO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9NO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xSOztBRFFNO0VBQ0UsZ0JBQUE7QUNOUjs7QURRTTtFQUNFLG1CQUFBO0FDTlI7O0FEVUk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDUk47O0FEVU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUNSUjs7QURXTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQ1RSOztBRFdNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1RSOztBRFlNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ1ZSOztBRGFNO0VBQ0Usa0JBQUE7QUNYUjs7QURjSTtFQUNFLGdCQUFBO0FDWk47O0FEY0k7RUFDRSxpQkFBQTtBQ1pOOztBRGNJO0VBQ0UsZ0JBQUE7QUNaTjs7QURlSTtFQUNFLG1CQUFBO0FDYk47O0FEZ0JJO0VBQ0UsY0FBQTtBQ2ROOztBRGdCSTtFQUNFLGNBQUE7QUNkTjs7QURnQkk7RUFDRSxlQUFBO0FDZE47O0FEZ0JJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNkTjs7QURpQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ2ZOOztBRG9CRztFQUNHLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakJOOztBRG9CSztFQUNDLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDakJOOztBRHNCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDbkJKOztBRHNCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDbkJKOztBRHNCRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ25CSjs7QURzQkU7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7QUNuQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7QUNuQko7O0FEc0JFO0VBR0UsbUJBQUE7VUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNuQko7O0FEc0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ25CSjs7QURzQkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNuQko7O0FEc0JFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDbkJKOztBRHFCRTtFQUNFLHFCQUFBO0FDbEJKOztBRHFCRTtFQUNFLGdCQUFBO0FDbEJKOztBRHFCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNsQko7O0FEcUJHO0VBQ0csZ0JBQUE7RUFHQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDbEJOOztBRHFCRTtFQUNJLGdCQUFBO0VBR0EsbUJBQUE7VUFBQSxPQUFBO0VBR0EsNEJBQUE7VUFBQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDbEJOOztBRG9CRTtFQUNBLFdBQUE7QUNqQkY7O0FEbUJJO0VBQ0csY0FBQTtBQ2hCUDs7QURtQkU7RUFDTSxrQkFBQTtFQUNGLG1CQUFBO0FDaEJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzL2NhdGVnb3J5LXByb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYXRlZ29yeS1wcm9kdWN0LWRldGFpbHN7XG4gICAgLmltYWdlY2F0ZWdvcnl7XG4gICAgIC8vIGJvcmRlci1pbWFnZTogdXJsKGJvcmRlci5wbmcpIDMwIHJvdW5kO1xuICBcbiAgICB3aWR0aDo0NiU7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIFxuICB9XG4gIH1cbiAgLnFudHlDb2xvciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC50ZXh0TXNnUHJvZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAucHJvZHVjdHMge1xuICAgIGgyIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICBoNiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBtYXJnaW4tdG9wOiAtOHB4O1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgXG4gICAgaW9uLXNlbGVjdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJvcmRlcnIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQycHg7XG4gICAgICB9XG4gICAgIFxuICAgICAgLml0ZW0taW9zLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNDJweDtcbiAgICAgIH1cbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWJsb2NrIHtcbiAgICAgICAgbWluLWhlaWdodDogMnJlbTtcbiAgICAgIH1cbiAgICAgIC5vcHRpb25zX3NlbGVjdCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAuZGV0YWlsX2RpdiB7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi10b3A6IC0xM3B4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIFxuICAgICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICAgIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtaW9zIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgIH1cbiAgXG4gICAgICAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtbWQsIC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgfVxuICBcbiAgICAgIC5pdGVtLWJsb2NrIHtcbiAgICAgICAgbWluLWhlaWdodDogMy40cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICAubWFyZ2luX2xhc3Rfcm93IHtcbiAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgfVxuICAgIC5wcmljZSB7XG4gICAgICBtYXJnaW4tdG9wOiAtMTFweDtcbiAgICB9XG4gICAgLm9wdGlvbnNfbWFyZ2luIHtcbiAgICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgfVxuICBcbiAgICAubWV0YW5hbWUge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2hlYXJ0X3JlZCB7XG4gICAgICBjb2xvcjogIzUzN2ZjNTtcbiAgICB9XG4gICAgLmljb25faGVhcnQge1xuICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICAgIC5oZWFydCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIC5jYXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgIH1cbiAgXG4gICAgLmljb25fY2FydCB7XG4gICAgICBjb2xvcjogIzE1YTAzMztcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIFxuICAgXG4gIH1cbiAgIC5wbGF0Zm9ybS1hbmRyb2lkIC5pY29uX2NhcnRfY29sb3Ige1xuICAgICAgcGFkZGluZy10b3A6MTdweDtcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xuICAgICAgcGFkZGluZy1sZWZ0OjMzcHg7XG4gICAgXG4gICAgfVxuICAgICAucGxhdGZvcm0taW9zIC5pY29uX2NhcnRfY29sb3Ige1xuICAgICAgcGFkZGluZy10b3A6MjFweDtcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xuICAgICAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gICAgXG4gICAgfVxuICBcbiAgXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIGlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1tZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgfVxuICBcbiAgaW9uLWNvbC5maXJzdF9jb2wge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICB9XG4gIFxuICBpb24tY29sLnNlY29uZF9jb2wge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIH1cbiAgXG4gIC5jb2wge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWF4LXdpZHRoOiA3NiU7XG4gIH1cbiAgXG4gIGlvbi1jb2wsIGlvbi1jb2wge1xuICAgIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMyU7XG4gICAgZmxleDogMCAwIDMzLjMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMyU7XG4gICAgbWF4LWhlaWdodDogNzBweDtcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAucXVhbnRpdHkxIGlvbi1pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgfVxuICAucXVhbnRpdHktaW9zIGlvbi1pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIFxuICAub3B0aW9uc19zZWxlY3Qge1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gIH1cbiAgXG4gIC5wcmljZV9tYWluIHtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gICBcbiAgIC5hbGVydC1tZCAuYWxlcnQtcmFkaW8tbGFiZWwge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgZmxleDogMTtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIH1cbiAgXG4gIC5hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgIGZsZXg6IDE7XG4gICAgICAtd2Via2l0LW9yZGVyOiAwO1xuICAgICAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gICAgICBvcmRlcjogMDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgICAgcGFkZGluZzogMTNweDtcbiAgfVxuICAuc21hbGxjb3VudHtcbiAgY29sb3I6IGJsdWU7XG4gIH1cbiAgICAubm9wcm9kdWN0Zm91bmR7XG4gICAgICAgY29sb3I6ICM5Nzk3OTc7IFxuICAgIH1cbiAgXG4gIC5kaXZpbWFnZWZsYWd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTU3cHg7XG4gIH0iLCJjYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMgLmltYWdlY2F0ZWdvcnkge1xuICB3aWR0aDogNDYlO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ucW50eUNvbG9yIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50ZXh0TXNnUHJvZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2R1Y3RzIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5wcm9kdWN0cyBoNiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgY29sb3I6IGdyYXk7XG59XG4ucHJvZHVjdHMgaW9uLWljb24ge1xuICBmbG9hdDogbGVmdDtcbn1cbi5wcm9kdWN0cyBpb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYmNiYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1yaWdodDogNDJweDtcbn1cbi5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MnB4O1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1pb3MsIC5wcm9kdWN0cyAuYm9yZGVyciAuaXRlbS1sYWJlbC1mbG9hdGluZyAuc2VsZWN0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtc3RhY2tlZCAuc2VsZWN0LW1kLCAucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG4ucHJvZHVjdHMgLmJvcmRlcnIgLml0ZW0tYmxvY2sge1xuICBtaW4taGVpZ2h0OiAycmVtO1xufVxuLnByb2R1Y3RzIC5ib3JkZXJyIC5vcHRpb25zX3NlbGVjdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTcxcHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYge1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLXRvcDogLTEzcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmZiY2JjO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1pb3MuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5wcm9kdWN0cyAuZGV0YWlsX2RpdiAuaXRlbS1sYWJlbC1zdGFja2VkIC5zZWxlY3QtaW9zLCAucHJvZHVjdHMgLmRldGFpbF9kaXYgLml0ZW0tbGFiZWwtZmxvYXRpbmcgLnNlbGVjdC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLXN0YWNrZWQgLnNlbGVjdC1tZCwgLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWxhYmVsLWZsb2F0aW5nIC5zZWxlY3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xufVxuLnByb2R1Y3RzIC5kZXRhaWxfZGl2IC5pdGVtLWJsb2NrIHtcbiAgbWluLWhlaWdodDogMy40cmVtO1xufVxuLnByb2R1Y3RzIC5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAtN3B4O1xufVxuLnByb2R1Y3RzIC5wcmljZSB7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xufVxuLnByb2R1Y3RzIC5vcHRpb25zX21hcmdpbiB7XG4gIG1hcmdpbi10b3A6IC03cHg7XG59XG4ucHJvZHVjdHMgLm1ldGFuYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcbn1cbi5wcm9kdWN0cyAuaWNvbl9oZWFydF9yZWQge1xuICBjb2xvcjogIzUzN2ZjNTtcbn1cbi5wcm9kdWN0cyAuaWNvbl9oZWFydCB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuLnByb2R1Y3RzIC5oZWFydCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5wcm9kdWN0cyAuY2FydCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6ICMxNWEwMzM7XG59XG4ucHJvZHVjdHMgLmljb25fY2FydCB7XG4gIGNvbG9yOiAjMTVhMDMzO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5wbGF0Zm9ybS1hbmRyb2lkIC5pY29uX2NhcnRfY29sb3Ige1xuICBwYWRkaW5nLXRvcDogMTdweDtcbiAgY29sb3I6ICNkNDMyODE7XG4gIHBhZGRpbmctbGVmdDogMzNweDtcbn1cblxuLnBsYXRmb3JtLWlvcyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgcGFkZGluZy10b3A6IDIxcHg7XG4gIGNvbG9yOiAjZDQzMjgxO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi10b29sYmFyLnRvb2xiYXIudG9vbGJhci1pb3Mge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIudG9vbGJhci50b29sYmFyLW1kIHtcbiAgcGFkZGluZzogMHB4O1xuICBtaW4taGVpZ2h0OiAwcHg7XG59XG5cbmlvbi1jb2wuZmlyc3RfY29sIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xufVxuXG5pb24tY29sLnNlY29uZF9jb2wge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDc2JTtcbn1cblxuaW9uLWNvbCwgaW9uLWNvbCB7XG4gIC13ZWJraXQtZmxleDogMCAwIDMzLjMzMzMlO1xuICAtbXMtZmxleDogMCAwIDMzLjMzMzMlO1xuICBmbGV4OiAwIDAgMzMuMzMzMyU7XG4gIG1heC13aWR0aDogMzMuMzMzMyU7XG4gIG1heC1oZWlnaHQ6IDcwcHg7XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucXVhbnRpdHkxIGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiA2MHB4O1xufVxuXG4ucXVhbnRpdHktaW9zIGlvbi1pbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm9wdGlvbnNfc2VsZWN0IHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLnByaWNlX21haW4ge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLmFsZXJ0LW1kIC5hbGVydC1yYWRpby1sYWJlbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtZmxleDogMTtcbiAgLW1zLWZsZXg6IDE7XG4gIGZsZXg6IDE7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBjb2xvcjogaW5pdGlhbDtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG59XG5cbi5hbGVydC1pb3MgLmFsZXJ0LXJhZGlvLWxhYmVsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAtbXMtZmxleDogMTtcbiAgZmxleDogMTtcbiAgLXdlYmtpdC1vcmRlcjogMDtcbiAgLW1zLWZsZXgtb3JkZXI6IDA7XG4gIG9yZGVyOiAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgY29sb3I6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDEzcHg7XG59XG5cbi5zbWFsbGNvdW50IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbi5ub3Byb2R1Y3Rmb3VuZCB7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuXG4uZGl2aW1hZ2VmbGFnIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC01N3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/category-product-details/category-product-details.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/category-product-details/category-product-details.page.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsPage", function() { return CategoryProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/holders/holders */ "./src/providers/holders/holders.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// error at line number 555




// import { ShoppingcartPage } from "../shoppingcart/shoppingcart.page";

//import { CategoryProductDetailsInfoPage } from "../category-product-details-info/category-product-details-info.page";



// import { PhotoViewer } from '@ionic-native/photo-viewer/ngx";


let CategoryProductDetailsPage = class CategoryProductDetailsPage {
    constructor(navCtrl, productServices, users, toastCtrl, networkService, loadingCtrl, logger, holders, 
    // private photoViewer: PhotoViewer,
    alertCtrl, route, router) {
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
        this.showheartIcon = [];
        //select options variables
        this.prods = [];
        this.option2value = [];
        this.categorycount = false;
        this.page = 1;
        this.showinfinate = false;
        this.showTextMsg = false;
        this.showScroll = true;
        this.selectOptions = {
            title: "select one",
        };
        var _this = this;
        // getting the parameters from the url
        this.route.queryParams.subscribe((params) => {
            this.category_value = params["sub_category_id"];
            this.categoryname = params["sub_category_name"];
            // for the pramotional products
            _this.promotionalProducts = params["category_id"];
            _this.bestSellerProducts = params["category_id"];
        });
        let loading = loadingCtrl.create({
            message: ``,
        });
    }
    ngOnInit() {
        let _this = this;
        if (_this.category_value) {
            _this.logger.debug("category-value" + this.category_value);
            this.category_id = this.category_value;
        }
        else if (_this.promotionalProducts) {
            _this.logger.debug("promotionalProducts" + _this.promotionalProducts);
            this.category_id = _this.promotionalProducts;
        }
        else if (_this.bestSellerProducts) {
            _this.logger.debug("bestSellerProducts" + _this.bestSellerProducts);
            this.category_id = _this.bestSellerProducts;
        }
        if (_this.networkService.nullConnection()) {
            _this.logger.debug("invoking networkService rest.ts file");
            _this.networkService.showNetworkAlert();
        }
        else {
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
                                prod_id: _this.catprodArray[i].product_id,
                            };
                            if (_this.catprodArray[i].option1[0].option2.length > 0) {
                                // if(_this.catprodArray[i].option1[0].option.option_value_id == _this.catprodArray[i].option1[0].option2[0].seller_id){
                                prod["name1"] =
                                    _this.catprodArray[i].option1[0].option2[0].name;
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
                                // }
                                //console.log(prod["option2value"]);
                            }
                            else {
                                prod["option2value"] = [];
                                prod["name1"] = "";
                                prod["product_option_id1"] = "";
                                prod["product_option_value_id1"] = "";
                                prod["sellerdiscount"] = "";
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
                                prod["sellerdiscount"] =
                                    _this.catprodArray[i].option1[0].sellerdiscount;
                                if (Number(_this.catprodArray[i].option1[0].salesprice) >
                                    _this.catprodArray[i].option1[0].price) {
                                    prod["salesprice"] =
                                        _this.catprodArray[i].option1[0].salesprice;
                                }
                                else {
                                    prod["salesprice"] = "";
                                }
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
                            _this.prods.push(prod);
                            _this.logger.debug("prods " + JSON.stringify(_this.prods));
                            _this.showheartIcon.push({
                                wishlist_check: _this.catprodArray[i].wishlist_check,
                            });
                            _this.logger.debug("showheartIcon " + _this.showheartIcon);
                            // loading.dismiss();
                        }
                    }
                }
                else {
                    // loading.dismiss();
                    _this.categorycount = true;
                    _this.logger.debug("error of products");
                }
            });
        }
    }
    // functions
    doInfinite(infiniteScroll) {
        this.showinfinate = true;
        this.holders.setInfinateScrollObj(infiniteScroll);
        this.page++;
        this.getCatProducts();
        setTimeout(() => {
            if (this.nextPage != 0) {
                return;
            }
            else {
                infiniteScroll.enable(false);
                this.showTextMsg = true;
            }
        }, 100);
    }
    getCatProducts() {
        var _this = this;
        if (_this.networkService.nullConnection()) {
            _this.logger.debug("invoking networkService rest.ts file");
            _this.networkService.showNetworkAlert();
        }
        else {
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
                                prod_id: _this.catprodArray[i].product_id,
                            };
                            if (_this.catprodArray[i].option1[0].option2.length > 0) {
                                prod["name1"] =
                                    _this.catprodArray[i].option1[0].option2[0].name;
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
                                prod["sellerdiscount"] =
                                    _this.catprodArray[i].option1[0].sellerdiscount;
                                if (Number(_this.catprodArray[i].option1[0].salesprice) >
                                    _this.catprodArray[i].option1[0].price) {
                                    prod["salesprice"] =
                                        _this.catprodArray[i].option1[0].salesprice;
                                }
                                else {
                                    prod["salesprice"] = "";
                                }
                                prod["requestedQty"] = 1;
                            }
                            else {
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
                                wishlist_check: _this.catprodArray[i].wishlist_check,
                            });
                            _this.logger.debug("showheartIcon " + _this.showheartIcon);
                        }
                    }
                }
                else {
                    _this.logger.debug("error of products");
                }
            });
        }
    }
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
                yield alert.present();
            }
            else {
                category.alternate = "";
                this.addToCartDataInsert(category, products);
            }
        });
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
                            if (this.prods[i].prod_id == category.product_id) {
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
                this.users.addToCart(addProduct, function (result, data) {
                    if (result == "1") {
                        var _dataObj = JSON.parse(data);
                        _this.toastMessage = _dataObj.message;
                        _this.cartCount = _dataObj.count;
                        _this.presentToast();
                    }
                    else {
                        _this.networkService.showErrorAlert();
                    }
                });
            }
            else {
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
                                        alternate_brand: category.alternate,
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
                        }
                        else {
                            _this.networkService.showErrorAlert();
                        }
                    });
                }
                else {
                    _this.networkService.showSuccessAlert("you have maximum qnty of " + products.quantity);
                }
            }
        }
        else {
            _this.networkService.showSuccessAlert("minimum quentity 1");
        }
    }
    setWishlist(cate, index) {
        var _this = this;
        var productId = {
            product_id: cate.product_id,
        };
        _this.logger.debug("checking status " + cate.wishlist_check);
        if (cate.wishlist_check == "1") {
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
    imageview(image, name) {
        // this.photoViewer.show(image, name, { share: false });
    }
    optionsFn(ev, id) {
        var k = 0;
        var _this = this;
        _this.logger.debug("checking options item " + _this.place);
        _this.logger.debug("ev " + ev);
        _this.optionEvent = ev;
        _this.logger.debug("id " + id);
        //   for (var i = 0; i < _this.catprodArray.length; i++){
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
                                // if( _this.catprodArray[i].option1[q].option2[j].quantity > 0){
                                _this.dataoption = {
                                    product_option_id: _this.catprodArray[i].option1[q].option2[j]
                                        .product_option_id,
                                    product_option_value_id: _this.catprodArray[i].option1[q].option2[j]
                                        .product_option_value_id,
                                    seller_id: _this.catprodArray[i].option1[q].option2[j].seller_id,
                                    name: _this.catprodArray[i].option1[q].option2[j].name,
                                    quantity: _this.catprodArray[i].option1[q].option2[j].quantity,
                                };
                                // }
                            }
                            if (_this.dataoption) {
                                if (_this.dataoption.quantity > 0) {
                                    _this.prods[i].option2value[k] = _this.dataoption;
                                    k++;
                                }
                            }
                            //_this.option2value =  _this.dataoption;
                        }
                        // _this.option2value =  _this.dataoption;
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
    productDetails(category) {
        var _this = this;
        _this.logger.debug("category " + category);
        // _this.navCtrl.push(CategoryProductDetailsInfoPage, category);
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(category),
            },
        };
        _this.router.navigate(["/category-product-details-info"], navigationExtras);
    }
    homePageNav() {
        // this.navCtrl.setRoot(HomePage, {});
        this.router.navigateByUrl("/home");
    }
    cartPageNav() {
        // this.navCtrl.push(ShopingcartPage, {});
        this.router.navigateByUrl("/shoppingcart");
    }
    cartFn() {
        // this.navCtrl.push(ShopingcartPage, {});
        this.router.navigateByUrl("/shoppingcart");
    }
};
CategoryProductDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"] },
    { type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
CategoryProductDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-category-product-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details/category-product-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-product-details.page.scss */ "./src/app/pages/category-product-details/category-product-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"],
        _providers_holders_holders__WEBPACK_IMPORTED_MODULE_7__["Holders"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], CategoryProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-product-details-category-product-details-module-es2015.js.map