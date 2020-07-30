(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-product-details-info-category-product-details-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details-info/category-product-details-info.page.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details-info/category-product-details-info.page.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-nav color=\"primary\">\r\n      <ion-title>ProductDetails</ion-title>\r\n    </ion-nav>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background-color\">\r\n  <ion-card>\r\n    <img src=\"{{image}}\" />\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col width-80>\r\n          <h2>{{name}}</h2>\r\n          <h5>{{model}}</h5>\r\n        </ion-col>\r\n        <ion-col width-20>\r\n          <div [ngClass]=\"wishlist_check == 1 ? 'icon_heart_red':'icon_heart'\">\r\n            <ion-icon\r\n              name=\"heart\"\r\n              (click)=\"setWishlist();\"\r\n              class=\"heart\"\r\n            ></ion-icon>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <div class=\"options_height\" *ngIf=\"options.length > 1\">\r\n          <ion-item>\r\n            <ion-label floating></ion-label>\r\n\r\n            <ion-select\r\n              [interfaceOptions]=\"selectOptions\"\r\n              (ngModel)=\"place\"\r\n              (ionChange)=\"optionsFn($event);\"\r\n            >\r\n              <ion-select-option\r\n                [value]=\"item\"\r\n                *ngFor=\" let item of options; let idx = index\"\r\n                >{{item.name}}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n        </div>\r\n        <div class=\"options_height\" *ngIf=\"options.length == 1\">\r\n          {{optionEvent.name}}\r\n        </div>\r\n        <div *ngIf=\"options.length == 0\">\r\n          <span>No Delar Available</span>\r\n        </div>\r\n      </ion-row>\r\n      <div class=\"margin_last_row\">\r\n        <ion-row>\r\n          <ion-col width-33>\r\n            <div class=\"price_main\">\r\n              <p class=\"price\">{{optionEvent.price}}</p>\r\n              <p class=\"discount_amt\">{{optionEvent.salesprice}}&nbsp;&nbsp;</p>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col width-33>\r\n            <div *ngIf=\"optionEvent.quantity > 0\">\r\n              <ion-input\r\n                type=\"number\"\r\n                value=\"\"\r\n                [(ngModel)]=\"requestedQty\"\r\n              ></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col width-33>\r\n            <div class=\"icon_cart\" *ngIf=\"optionEvent.quantity > 0\">\r\n              <ion-icon\r\n                name=\"cart\"\r\n                class=\"cart\"\r\n                (click)=\"addToCart(optionEvent)\"\r\n              ></ion-icon>\r\n            </div>\r\n            <div *ngIf=\"optionEvent.quantity == 0\" class=\"icon_cart_color\">\r\n              <div class=\"outofStack\">out of stock</div>\r\n              <br />\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </div>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      Details\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <b>Specification</b>\r\n      <ion-row>{{meta_description}}</ion-row>\r\n      <b>Description</b>\r\n      <ion-row>{{description}}</ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color=\"primary\" full (click)=\"addToCart()\">\r\n      Add To Cart\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/category-product-details-info/category-product-details-info-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/category-product-details-info/category-product-details-info-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CategoryProductDetailsInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsInfoPageRoutingModule", function() { return CategoryProductDetailsInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_product_details_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-product-details-info.page */ "./src/app/pages/category-product-details-info/category-product-details-info.page.ts");




const routes = [
    {
        path: '',
        component: _category_product_details_info_page__WEBPACK_IMPORTED_MODULE_3__["CategoryProductDetailsInfoPage"]
    }
];
let CategoryProductDetailsInfoPageRoutingModule = class CategoryProductDetailsInfoPageRoutingModule {
};
CategoryProductDetailsInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryProductDetailsInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/category-product-details-info/category-product-details-info.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/category-product-details-info/category-product-details-info.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: CategoryProductDetailsInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsInfoPageModule", function() { return CategoryProductDetailsInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category_product_details_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-product-details-info-routing.module */ "./src/app/pages/category-product-details-info/category-product-details-info-routing.module.ts");
/* harmony import */ var _category_product_details_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-product-details-info.page */ "./src/app/pages/category-product-details-info/category-product-details-info.page.ts");







let CategoryProductDetailsInfoPageModule = class CategoryProductDetailsInfoPageModule {
};
CategoryProductDetailsInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_product_details_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryProductDetailsInfoPageRoutingModule"]
        ],
        declarations: [_category_product_details_info_page__WEBPACK_IMPORTED_MODULE_6__["CategoryProductDetailsInfoPage"]]
    })
], CategoryProductDetailsInfoPageModule);



/***/ }),

/***/ "./src/app/pages/category-product-details-info/category-product-details-info.page.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/category-product-details-info/category-product-details-info.page.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-color {\n  background-color: WhiteSmoke;\n}\n.background-color ion-card {\n  background-color: white;\n  padding: 0px 10px;\n}\n.background-color ion-card ion-card-content {\n  border-top: 1px solid #ccc;\n  padding-top: 0px;\n}\n.background-color ion-card h2 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #655f5f;\n}\n.background-color ion-row {\n  color: #bdbdbd;\n}\n.background-color ion-card ion-card-header {\n  color: #467ed9;\n  border-bottom: 1px solid #ccc;\n}\n.background-color ion-icon.heart.ion-md-heart {\n  margin-left: 200px;\n  font-size: 30px;\n}\n.background-color .icon_heart_red {\n  color: #537fc5;\n  font-size: 25px;\n  float: right;\n}\n.background-color .icon_heart {\n  color: #bdbdbd;\n  font-size: 25px;\n  float: right;\n}\n.background-color .options_height {\n  border: 1px solid #bfbcbc;\n}\n.icon-align {\n  margin-left: auto;\n  font-size: 30px;\n}\n.margin_last_row {\n  margin-top: 10px;\n}\n.margin_last_row .text-input {\n  border: 1px solid #bfbcbc;\n}\n.margin_last_row p.discount_amt {\n  text-decoration: line-through;\n}\n.margin_last_row p.price {\n  font-weight: bold;\n}\n.margin_last_row .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n.margin_last_row .icon_cart {\n  color: #15a033;\n  font-size: 25px;\n  margin-left: 45px;\n}\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzLWluZm8vRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxjYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMtaW5mb1xcY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMtaW5mby9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMtaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSw0QkFBQTtBQ0hKO0FES0k7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0FDSE47QURLSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBREtJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0hOO0FES0k7RUFFRSxjQUFBO0FDSk47QURNSTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0pOO0FET0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNMTjtBRFFJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDTk47QURRSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ05OO0FEU0k7RUFDRSx5QkFBQTtBQ1BOO0FEVUU7RUFDRSxpQkFBQTtFQUVBLGVBQUE7QUNSSjtBRFdFO0VBQ0UsZ0JBQUE7QUNSSjtBRFVJO0VBQ0UseUJBQUE7QUNSTjtBRFdJO0VBQ0UsNkJBQUE7QUNUTjtBRFlJO0VBQ0UsaUJBQUE7QUNWTjtBRGFJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDWE47QURjSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNaTjtBRGdCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNiSjtBRGdCRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMtaW5mby9jYXRlZ29yeS1wcm9kdWN0LWRldGFpbHMtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2F0ZWdvcnktcHJvZHVjdC1kZXRhaWxzLWluZm8ge1xyXG5cclxuLy8gfVxyXG5cclxuLmJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuICBcclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzY1NWY1ZjtcclxuICAgIH1cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICAvL3BhZGRpbmc6MTBweCAwcHg7XHJcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgICAgY29sb3I6ICM0NjdlZDk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWljb24uaGVhcnQuaW9uLW1kLWhlYXJ0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaWNvbl9oZWFydF9yZWQge1xyXG4gICAgICBjb2xvcjogIzUzN2ZjNTtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuaWNvbl9oZWFydCB7XHJcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICBcclxuICAgIC5vcHRpb25zX2hlaWdodCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pY29uLWFsaWduIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAubWFyZ2luX2xhc3Rfcm93IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgICAudGV4dC1pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwLmRpc2NvdW50X2FtdCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcC5wcmljZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25fY2FydF9jb2xvciB7XHJcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25fY2FydCB7XHJcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICIsIi5iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY1NWY1Zjtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1yb3cge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjNDY3ZWQ5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1pY29uLmhlYXJ0Lmlvbi1tZC1oZWFydCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgLmljb25faGVhcnRfcmVkIHtcbiAgY29sb3I6ICM1MzdmYzU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJhY2tncm91bmQtY29sb3IgLmljb25faGVhcnQge1xuICBjb2xvcjogI2JkYmRiZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYmFja2dyb3VuZC1jb2xvciAub3B0aW9uc19oZWlnaHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xufVxuXG4uaWNvbi1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1hcmdpbl9sYXN0X3JvdyAudGV4dC1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG59XG4ubWFyZ2luX2xhc3Rfcm93IHAuZGlzY291bnRfYW10IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ubWFyZ2luX2xhc3Rfcm93IHAucHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYXJnaW5fbGFzdF9yb3cgLmljb25fY2FydF9jb2xvciB7XG4gIGNvbG9yOiAjZDQzMjgxO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1hcmdpbl9sYXN0X3JvdyAuaWNvbl9jYXJ0IHtcbiAgY29sb3I6ICMxNWEwMzM7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/category-product-details-info/category-product-details-info.page.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/category-product-details-info/category-product-details-info.page.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoryProductDetailsInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryProductDetailsInfoPage", function() { return CategoryProductDetailsInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// all clear







let CategoryProductDetailsInfoPage = class CategoryProductDetailsInfoPage {
    constructor(navCtrl, users, toastCtrl, networkService, logger, route) {
        this.navCtrl = navCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.route = route;
        this.options = [];
        this.requestedQty = 1;
    }
    ngOnInit() {
        var _this = this;
        this.route.queryParams.subscribe((param) => {
            let catData = param["data"];
            _this.product_id = catData.product_id;
            _this.name = catData.name;
            _this.description = catData.description;
            _this.meta_description = catData.meta_description;
            _this.wishlist_check = catData.wishlist_check;
            _this.price = catData.price;
            _this.model = catData.model;
            _this.image = catData.image;
            _this.options = catData.options;
            _this.quantity = catData.quantity;
            _this.optionEvent = _this.options[0];
        });
    }
    optionsFn(ev) {
        var _this = this;
        _this.place = ev.name;
        _this.logger.debug("checking options item " + _this.place);
        _this.logger.debug("ev " + ev);
        _this.optionEvent = ev;
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
    addToCart() {
        var _this = this;
        _this.logger.info("invoking add to cart function:-");
        let addProduct = {
            product_id: _this.product_id,
            product_option: _this.optionEvent.product_option_id,
            product_option_value: _this.optionEvent.product_option_value_id,
            product_quantity: _this.requestedQty,
        };
        _this.logger.debug("requestedQty " + JSON.stringify(_this.requestedQty));
        _this.logger.debug("addProduct " + addProduct);
        if (_this.requestedQty > 0) {
            if (_this.requestedQty <= _this.optionEvent.quantity) {
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
                _this.networkService.showSuccessAlert("There is no qnty");
            }
        }
        else {
            _this.networkService.showSuccessAlert("minimum quantity 1");
        }
    }
    setWishlist() {
        var _this = this;
        var productId = {
            product_id: _this.product_id,
        };
        if (_this.wishlist_check == 1) {
            _this.networkService.showSuccessAlert("already add to wish list");
        }
        else {
            this.users.setWishlist(productId, function (result, data) {
                if (result == "1") {
                    _this.wishlist_check = 0;
                    _this.networkService.showSuccessAlert("sucess " + data.toString());
                }
                else {
                    _this.networkService.showErrorAlert();
                }
            });
        }
    }
};
CategoryProductDetailsInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
CategoryProductDetailsInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-category-product-details-info",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-product-details-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category-product-details-info/category-product-details-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-product-details-info.page.scss */ "./src/app/pages/category-product-details-info/category-product-details-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], CategoryProductDetailsInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-product-details-info-category-product-details-info-module-es2015.js.map