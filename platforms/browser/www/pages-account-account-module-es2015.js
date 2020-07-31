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
/* harmony default export */ __webpack_exports__["default"] = (".account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card-content {\n  font-size: 14px;\n  float: right;\n  color: #387ef5;\n}\n.account ion-card {\n  width: 93%;\n}\n.account hr {\n  width: 97%;\n}\n.account .ion-label {\n  color: #387ef5;\n}\n.account {\n  background-color: WhiteSmoke;\n}\n.account ion-card-header {\n  font-size: 15px;\n  font-weight: normal;\n}\n.account ion-card {\n  width: 94%;\n  font-family: \"PT Serif\", serif;\n}\n.accountleft {\n  background: #d5fcf4;\n  background: linear-gradient(25deg, #f8fafa 60%, #e0f5ec 79%, #7ce6f1 100%);\n  color: #000;\n  padding: 10px;\n  text-align: center;\n  font-family: \"PT Serif\", serif;\n}\n.accountright {\n  position: relative;\n  margin-left: 50px;\n  background: #d5fcf4;\n  background: linear-gradient(25deg, #f8fafa 60%, #e0f5ec 79%, #7ce6f1 100%);\n  color: #000;\n  padding: 10px;\n  text-align: center;\n  font-family: \"PT Serif\", serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNBSjtBREdFO0VBQ0UsVUFBQTtBQ0RKO0FES0U7RUFDRSxVQUFBO0FDSEo7QURNRTtFQUNFLGNBQUE7QUNKSjtBRE9BO0VBQ0UsNEJBQUE7QUNKRjtBRE1FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDSko7QURPRTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ0xKO0FEU0E7RUFDRSxtQkFBQTtFQUNBLDBFQUFBO0VBTUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDWEY7QURhQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBFQUFBO0VBTUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDZkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuXG4gIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICBpb24tY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjMzg3ZWY1O1xuICB9XG5cbiAgaW9uLWNhcmQge1xuICAgIHdpZHRoOiA5MyU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICBociB7XG4gICAgd2lkdGg6IDk3JTtcbiAgfVxuXG4gIC5pb24tbGFiZWwge1xuICAgIGNvbG9yOiAjMzg3ZWY1O1xuICB9XG59XG4uYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIGlvbi1jYXJkIHtcbiAgICB3aWR0aDogOTQlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCIsIHNlcmlmO1xuICB9XG59XG5cbi5hY2NvdW50bGVmdCB7XG4gIGJhY2tncm91bmQ6IHJnYigyMTMsIDI1MiwgMjQ0KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDI1ZGVnLFxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1MCwgMSkgNjAlLFxuICAgIHJnYmEoMjI0LCAyNDUsIDIzNiwgMSkgNzklLFxuICAgIHJnYmEoMTI0LCAyMzAsIDI0MSwgMSkgMTAwJVxuICApO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQVCBTZXJpZlwiLCBzZXJpZjtcbn1cbi5hY2NvdW50cmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMjEzLCAyNTIsIDI0NCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAyNWRlZyxcbiAgICByZ2JhKDI0OCwgMjUwLCAyNTAsIDEpIDYwJSxcbiAgICByZ2JhKDIyNCwgMjQ1LCAyMzYsIDEpIDc5JSxcbiAgICByZ2JhKDEyNCwgMjMwLCAyNDEsIDEpIDEwMCVcbiAgKTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG59XG4iLCIuYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uYWNjb3VudCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWNjb3VudCBpb24tY2FyZC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjMzg3ZWY1O1xufVxuLmFjY291bnQgaW9uLWNhcmQge1xuICB3aWR0aDogOTMlO1xufVxuLmFjY291bnQgaHIge1xuICB3aWR0aDogOTclO1xufVxuLmFjY291bnQgLmlvbi1sYWJlbCB7XG4gIGNvbG9yOiAjMzg3ZWY1O1xufVxuXG4uYWNjb3VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uYWNjb3VudCBpb24tY2FyZC1oZWFkZXIge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uYWNjb3VudCBpb24tY2FyZCB7XG4gIHdpZHRoOiA5NCU7XG4gIGZvbnQtZmFtaWx5OiBcIlBUIFNlcmlmXCIsIHNlcmlmO1xufVxuXG4uYWNjb3VudGxlZnQge1xuICBiYWNrZ3JvdW5kOiAjZDVmY2Y0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNmOGZhZmEgNjAlLCAjZTBmNWVjIDc5JSwgIzdjZTZmMSAxMDAlKTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG59XG5cbi5hY2NvdW50cmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZDVmY2Y0O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjVkZWcsICNmOGZhZmEgNjAlLCAjZTBmNWVjIDc5JSwgIzdjZTZmMSAxMDAlKTtcbiAgY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUFQgU2VyaWZcIiwgc2VyaWY7XG59Il19 */");

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