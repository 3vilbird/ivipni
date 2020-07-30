(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-of-use-terms-of-use-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-of-use/terms-of-use.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-of-use/terms-of-use.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-nav color=\"primary\">\r\n      <ion-title>Terms Of Use</ion-title>\r\n  </ion-nav>  \r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding class=\"terms-of-use\">\r\n\r\n  <ion-list>\r\n      <p>Auto Parts Terms Of Use:-</p>\r\n\r\n      <ion-item no-lines text-wrap>\r\n          \"Except as Otherwise expression stated with respect to our products all contents of the site are offered on an as is basis without any warranty whatsever either express or implied.\"\r\n      </ion-item>\r\n\r\n      <p>Copyright and Trademark:-</p>\r\n\r\n      <ion-item no-lines text-wrap>\r\n          \"Unless otherwise noted, all materials on this site are protected as the copyrights,trade dress,trademarks and/or other intellectual properties owned by Auto Parts.\"\r\n      </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermsOfUsePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePageRoutingModule", function() { return TermsOfUsePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _terms_of_use_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-of-use.page */ "./src/app/pages/terms-of-use/terms-of-use.page.ts");




const routes = [
    {
        path: '',
        component: _terms_of_use_page__WEBPACK_IMPORTED_MODULE_3__["TermsOfUsePage"]
    }
];
let TermsOfUsePageRoutingModule = class TermsOfUsePageRoutingModule {
};
TermsOfUsePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsOfUsePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use.module.ts ***!
  \***********************************************************/
/*! exports provided: TermsOfUsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePageModule", function() { return TermsOfUsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _terms_of_use_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-of-use-routing.module */ "./src/app/pages/terms-of-use/terms-of-use-routing.module.ts");
/* harmony import */ var _terms_of_use_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-of-use.page */ "./src/app/pages/terms-of-use/terms-of-use.page.ts");







let TermsOfUsePageModule = class TermsOfUsePageModule {
};
TermsOfUsePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _terms_of_use_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsOfUsePageRoutingModule"]
        ],
        declarations: [_terms_of_use_page__WEBPACK_IMPORTED_MODULE_6__["TermsOfUsePage"]]
    })
], TermsOfUsePageModule);



/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".terms-of-use {\n  background-color: WhiteSmoke;\n}\n.terms-of-use p {\n  color: #387ef5;\n  font-weight: normal;\n}\n.terms-of-use ion-item {\n  background-color: WhiteSmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybXMtb2YtdXNlL0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xcdGVybXMtb2YtdXNlXFx0ZXJtcy1vZi11c2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90ZXJtcy1vZi11c2UvdGVybXMtb2YtdXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURDSTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUk7RUFDRSw0QkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVybXMtb2YtdXNlL3Rlcm1zLW9mLXVzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtb2YtdXNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6ICMzODdlZjU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi50ZXJtcy1vZi11c2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnRlcm1zLW9mLXVzZSBwIHtcbiAgY29sb3I6ICMzODdlZjU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4udGVybXMtb2YtdXNlIGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/terms-of-use/terms-of-use.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/terms-of-use/terms-of-use.page.ts ***!
  \*********************************************************/
/*! exports provided: TermsOfUsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePage", function() { return TermsOfUsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

// all clear


let TermsOfUsePage = class TermsOfUsePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
};
TermsOfUsePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
TermsOfUsePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-terms-of-use",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./terms-of-use.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-of-use/terms-of-use.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./terms-of-use.page.scss */ "./src/app/pages/terms-of-use/terms-of-use.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], TermsOfUsePage);



/***/ })

}]);
//# sourceMappingURL=pages-terms-of-use-terms-of-use-module-es2015.js.map