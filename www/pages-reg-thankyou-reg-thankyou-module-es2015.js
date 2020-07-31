(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reg-thankyou-reg-thankyou-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reg-thankyou/reg-thankyou.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reg-thankyou/reg-thankyou.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-nav padding color=\"primary\">\n      <ion-title>Registration Sucessful</ion-title>\n  </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"align\">\n    <p><b>Thank you for registering!</b> </p>\n</div>\n<div class=\"align2\">\n    <p>We will get back to you soon</p>\n    <button color=\"primary\" ion-button medium (click)=\"register1()\">login</button>\n</div>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".align {\n  text-align: center;\n  font-size: 20px;\n  padding-top: 40px;\n}\n\n.align2 {\n  text-align: center;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcmVnLXRoYW5reW91L3JlZy10aGFua3lvdS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZy10aGFua3lvdS9yZWctdGhhbmt5b3UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnLXRoYW5reW91L3JlZy10aGFua3lvdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gIH1cbiAgLmFsaWduMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuICAiLCIuYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5hbGlnbjIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

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