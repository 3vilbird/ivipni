(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-us-about-us-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        About-us\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n</ion-card>\r\n\r\n<ion-content padding class=\"about-us\">\r\n  <ion-list>\r\n    <ion-card color=\"light\">\r\n      <ion-card-header>\r\n        <ion-card-title>About Auto Parts</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        \"It is one of the leading online car and truck parts and accessories\r\n        stores. We have a complete selection of high-q parts for a wide range of\r\n        vehicle makes and modules - offered at the lowest prices.We also take\r\n        the lead when it comes to hassle-free online with customer service\r\n        availability 24 hrs a day,seven days a week.\"\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card color=\"light\">\r\n      <ion-card-header>\r\n        <ion-card-title>Large Inventory Of Parts</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        Than one million parts and accessories for different vehicles.These are\r\n        available in stock in our warehouses,which are strategically located\r\n        across the United States.All parts are ready to ship straight from the\r\n        warehouses right to your garge,so you don't have to wait long after you\r\n        place your order.\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card color=\"light\">\r\n      <ion-card-header>\r\n        <ion-card-title>Low Prices On All Parts</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        Because we conduct our business online and because we ship direct from\r\n        our warehouses,we don't have to charge you for expenses on office\r\n        maintainance and store personnel.This way,we pass the savings on to\r\n        you.Our rates are among the lowest online,so much so that we are\r\n        confident enough to offer a low price guarantee on all our products.If\r\n        you find a similar product that's priced.\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/about-us/about-us-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-us/about-us-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AboutUsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageRoutingModule", function() { return AboutUsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");




const routes = [
    {
        path: '',
        component: _about_us_page__WEBPACK_IMPORTED_MODULE_3__["AboutUsPage"]
    }
];
let AboutUsPageRoutingModule = class AboutUsPageRoutingModule {
};
AboutUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutUsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.module.ts ***!
  \***************************************************/
/*! exports provided: AboutUsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageModule", function() { return AboutUsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/pages/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us.page */ "./src/app/pages/about-us/about-us.page.ts");







let AboutUsPageModule = class AboutUsPageModule {
};
AboutUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutUsPageRoutingModule"]
        ],
        declarations: [_about_us_page__WEBPACK_IMPORTED_MODULE_6__["AboutUsPage"]]
    })
], AboutUsPageModule);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-us {\n  background-color: WhiteSmoke;\n}\n.about-us p {\n  color: #387ef5;\n  font-weight: bold;\n}\n.about-us ion-item {\n  background-color: WhiteSmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxhYm91dC11c1xcYWJvdXQtdXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hYm91dC11cy9hYm91dC11cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREVJO0VBQ0UsNEJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC11cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xyXG4gIFxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiAjMzg3ZWY1O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmFib3V0LXVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5hYm91dC11cyBwIHtcbiAgY29sb3I6ICMzODdlZjU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmFib3V0LXVzIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/about-us/about-us.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/about-us/about-us.page.ts ***!
  \*************************************************/
/*! exports provided: AboutUsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPage", function() { return AboutUsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let AboutUsPage = class AboutUsPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
};
AboutUsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
AboutUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-us.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about-us/about-us.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-us.page.scss */ "./src/app/pages/about-us/about-us.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], AboutUsPage);



/***/ })

}]);
//# sourceMappingURL=pages-about-us-about-us-module-es2015.js.map