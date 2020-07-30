(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reg-thankyou-reg-thankyou-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reg-thankyou/reg-thankyou.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reg-thankyou/reg-thankyou.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-nav padding color=\"primary\">\r\n      <ion-title>Registration Sucessful</ion-title>\r\n  </ion-nav>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"align\">\r\n    <p><b>Thank you for registering!</b> </p>\r\n</div>\r\n<div class=\"align2\">\r\n    <p>We will get back to you soon</p>\r\n    <button color=\"primary\" ion-button medium (click)=\"register1()\">login</button>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/reg-thankyou/reg-thankyou-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/reg-thankyou/reg-thankyou-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegThankyouPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegThankyouPageRoutingModule", function() { return RegThankyouPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reg_thankyou_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reg-thankyou.page */ "./src/app/pages/reg-thankyou/reg-thankyou.page.ts");




const routes = [
    {
        path: '',
        component: _reg_thankyou_page__WEBPACK_IMPORTED_MODULE_3__["RegThankyouPage"]
    }
];
let RegThankyouPageRoutingModule = class RegThankyouPageRoutingModule {
};
RegThankyouPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegThankyouPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reg-thankyou/reg-thankyou.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/reg-thankyou/reg-thankyou.module.ts ***!
  \***********************************************************/
/*! exports provided: RegThankyouPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegThankyouPageModule", function() { return RegThankyouPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reg_thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reg-thankyou-routing.module */ "./src/app/pages/reg-thankyou/reg-thankyou-routing.module.ts");
/* harmony import */ var _reg_thankyou_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reg-thankyou.page */ "./src/app/pages/reg-thankyou/reg-thankyou.page.ts");







let RegThankyouPageModule = class RegThankyouPageModule {
};
RegThankyouPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reg_thankyou_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegThankyouPageRoutingModule"]
        ],
        declarations: [_reg_thankyou_page__WEBPACK_IMPORTED_MODULE_6__["RegThankyouPage"]]
    })
], RegThankyouPageModule);



/***/ }),

/***/ "./src/app/pages/reg-thankyou/reg-thankyou.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/reg-thankyou/reg-thankyou.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".align {\n  text-align: center;\n  font-size: 20px;\n  padding-top: 40px;\n}\n\n.align2 {\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnLXRoYW5reW91L0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xccmVnLXRoYW5reW91XFxyZWctdGhhbmt5b3UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWctdGhhbmt5b3UvcmVnLXRoYW5reW91LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZy10aGFua3lvdS9yZWctdGhhbmt5b3UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsaWduIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIH1cclxuICAuYWxpZ24yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgIiwiLmFsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uYWxpZ24yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/reg-thankyou/reg-thankyou.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reg-thankyou/reg-thankyou.page.ts ***!
  \*********************************************************/
/*! exports provided: RegThankyouPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegThankyouPage", function() { return RegThankyouPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let RegThankyouPage = class RegThankyouPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    register1() {
        // this.navCtrl.push(LoginPage, {});
    }
    ngOnInit() { }
};
RegThankyouPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
RegThankyouPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reg-thankyou",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reg-thankyou.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reg-thankyou/reg-thankyou.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reg-thankyou.page.scss */ "./src/app/pages/reg-thankyou/reg-thankyou.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], RegThankyouPage);



/***/ })

}]);
//# sourceMappingURL=pages-reg-thankyou-reg-thankyou-module-es2015.js.map