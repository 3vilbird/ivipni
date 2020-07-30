(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"account\">\n  <ion-grid class=\"padding\">\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-card class=\"accountleft\" color=\"primary\" (click)=\"myprofile()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"person\"></ion-icon\n            ></ion-card-title>\n            <ion-card-subtitle>My profile</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card class=\"accountright\" color=\"secondary\" (click)=\"myOrder()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"list-outline\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>my Orders</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"padding\">\n    <ion-row>\n      <ion-col size=\"5\">\n        <ion-card\n          class=\"accountleft\"\n          color=\"dark\"\n          (click)=\"paymentSuccessFailure()\"\n        >\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"wallet-outline\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>\n              Payment\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-card class=\"accountright\" color=\"danger\" (click)=\"changePasswd()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"key-outline\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>Password</ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid class=\"padding\">\n    <ion-row>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-card class=\"accountleft\" color=\"dark\" (click)=\"notification()\">\n          <ion-card-header class=\"ion-text-center\">\n            <ion-card-title>\n              <ion-icon name=\"notifications-circle-outline\"></ion-icon>\n            </ion-card-title>\n            <ion-card-subtitle>\n              Notification\n            </ion-card-subtitle>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/account/account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/account/account.page.ts");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/account/account.page.ts");







let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/pages/account/account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card-content {\n  font-size: 14px;\n  float: right;\n  color: #387ef5;\n}\n.account ion-card {\n  width: 93%;\n}\n.account hr {\n  width: 97%;\n}\n.account .ion-label {\n  color: #387ef5;\n}\n.account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card {\n  width: 94%;\n  font-family: \"PT Serif\", serif;\n}\n.accountleft {\n  background: #d5fcf4;\n  background: linear-gradient(25deg, #f8fafa 60%, #e0f5ec 79%, #7ce6f1 100%);\n  color: #000;\n  padding: 10px;\n  text-align: center;\n  font-family: \"PT Serif\", serif;\n}\n.accountright {\n  position: relative;\n  margin-left: 50px;\n  background: #d5fcf4;\n  background: linear-gradient(25deg, #f8fafa 60%, #e0f5ec 79%, #7ce6f1 100%);\n  color: #000;\n  padding: 10px;\n  text-align: center;\n  font-family: \"PT Serif\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0FKO0FER0U7RUFDRSxVQUFBO0FDREo7QURLRTtFQUNFLFVBQUE7QUNISjtBRE1FO0VBQ0UsY0FBQTtBQ0pKO0FET0E7RUFDRSw0QkFBQTtBQ0pGO0FETUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9FO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDTEo7QURTQTtFQUNFLG1CQUFBO0VBQ0EsMEVBQUE7RUFNQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNYRjtBRGFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEVBQUE7RUFNQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNmRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICMzODdlZjU7XG4gIH1cblxuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDkzJTtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGhyIHtcbiAgICB3aWR0aDogOTclO1xuICB9XG5cbiAgLmlvbi1sYWJlbCB7XG4gICAgY29sb3I6ICMzODdlZjU7XG4gIH1cbn1cbi5hY2NvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG4gIH1cbn1cblxuLmFjY291bnRsZWZ0IHtcbiAgYmFja2dyb3VuZDogcmdiKDIxMywgMjUyLCAyNDQpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgMjVkZWcsXG4gICAgcmdiYSgyNDgsIDI1MCwgMjUwLCAxKSA2MCUsXG4gICAgcmdiYSgyMjQsIDI0NSwgMjM2LCAxKSA3OSUsXG4gICAgcmdiYSgxMjQsIDIzMCwgMjQxLCAxKSAxMDAlXG4gICk7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCIsIHNlcmlmO1xufVxuLmFjY291bnRyaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyMTMsIDI1MiwgMjQ0KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDI1ZGVnLFxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1MCwgMSkgNjAlLFxuICAgIHJnYmEoMjI0LCAyNDUsIDIzNiwgMSkgNzklLFxuICAgIHJnYmEoMTI0LCAyMzAsIDI0MSwgMSkgMTAwJVxuICApO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiLCBzZXJpZjtcbn1cbiIsIi5hY2NvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5hY2NvdW50IGlvbi1jYXJkLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5hY2NvdW50IGlvbi1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICMzODdlZjU7XG59XG4uYWNjb3VudCBpb24tY2FyZCB7XG4gIHdpZHRoOiA5MyU7XG59XG4uYWNjb3VudCBociB7XG4gIHdpZHRoOiA5NyU7XG59XG4uYWNjb3VudCAuaW9uLWxhYmVsIHtcbiAgY29sb3I6ICMzODdlZjU7XG59XG5cbi5hY2NvdW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5hY2NvdW50IGlvbi1jYXJkLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5hY2NvdW50IGlvbi1jYXJkIHtcbiAgd2lkdGg6IDk0JTtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG59XG5cbi5hY2NvdW50bGVmdCB7XG4gIGJhY2tncm91bmQ6ICNkNWZjZjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgI2Y4ZmFmYSA2MCUsICNlMGY1ZWMgNzklLCAjN2NlNmYxIDEwMCUpO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiLCBzZXJpZjtcbn1cblxuLmFjY291bnRyaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNkNWZjZjQ7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNWRlZywgI2Y4ZmFmYSA2MCUsICNlMGY1ZWMgNzklLCAjN2NlNmYxIDEwMCUpO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiLCBzZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear




let AccountPage = class AccountPage {
    constructor(navCtrl, logger, router) {
        this.navCtrl = navCtrl;
        this.logger = logger;
        this.router = router;
    }
    ngOnInit() { }
    myprofile() {
        this.logger.info("invoking MyProfilePage page");
        this.router.navigateByUrl("/my-profile");
    }
    myOrder() {
        this.logger.info("invoking myOrder page");
        this.router.navigateByUrl("/my-order");
    }
    paymentSuccessFailure() {
        this.logger.info("invoking paymentSuccessFailure page");
        this.router.navigateByUrl("/payment-success-failure");
    }
    changePasswd() {
        this.logger.info("invoking changePasswd page");
        this.router.navigateByUrl("/my-password");
    }
    notification() {
        this.router.navigateByUrl("/notification");
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-account",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.page.scss */ "./src/app/pages/account/account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map