(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding class=\"welcome\">\n   <div>Lodding...</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/welcome/welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome {\n  background-color: blue;\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dlbGNvbWUvd2VsY29tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZSB7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLndlbGNvbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
// all clear



let WelcomePage = class WelcomePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() { }
};
WelcomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-welcome",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map