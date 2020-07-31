(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-no-internet-no-internet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/no-internet/no-internet.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/no-internet/no-internet.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"internet\">\n  <div>\n      <div class=\"item-avatar\">\n          <img class=\"img-circle\" src=\"../../../assets/images/auto2.jpg\" />\n      </div>\n      <div class=\"wifi\">\n          <ion-icon name=\"ios-wifi-outline\"></ion-icon>\n          <p>No Internet Connection</p>\n      </div>\n      <div class=\"nocon\">\n          <button ion-button large color=\"primary\" class=\"btn\" (click)=\"phoneOrder()\"><b>Order On Phone</b>\n          </button>\n          <button ion-button large color=\"light\" class=\"btn1\" outline (click)=\"internetCheck()\"><b>Refresh</b>\n          </button>\n      </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/no-internet/no-internet-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NoInternetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternetPageRoutingModule", function() { return NoInternetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _no_internet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-internet.page */ "./src/app/pages/no-internet/no-internet.page.ts");




const routes = [
    {
        path: '',
        component: _no_internet_page__WEBPACK_IMPORTED_MODULE_3__["NoInternetPage"]
    }
];
let NoInternetPageRoutingModule = class NoInternetPageRoutingModule {
};
NoInternetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoInternetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/no-internet/no-internet.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.module.ts ***!
  \*********************************************************/
/*! exports provided: NoInternetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternetPageModule", function() { return NoInternetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _no_internet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-internet-routing.module */ "./src/app/pages/no-internet/no-internet-routing.module.ts");
/* harmony import */ var _no_internet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-internet.page */ "./src/app/pages/no-internet/no-internet.page.ts");







let NoInternetPageModule = class NoInternetPageModule {
};
NoInternetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _no_internet_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoInternetPageRoutingModule"]
        ],
        declarations: [_no_internet_page__WEBPACK_IMPORTED_MODULE_6__["NoInternetPage"]]
    })
], NoInternetPageModule);



/***/ }),

/***/ "./src/app/pages/no-internet/no-internet.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wifi {\n  text-align: center;\n  margin-top: 10%;\n  color: white;\n}\n\n.wifi ion-icon {\n  font-size: 3.5em;\n}\n\n.nocon {\n  width: 100%;\n  margin-top: 25px;\n  text-align: center;\n}\n\n.internet {\n  background-color: #387ef5;\n}\n\n.nocon .btn1 {\n  color: #0651d0;\n  background-color: white;\n  margin-left: 25px;\n  border: 3px solid white;\n  font-size: 15px;\n  padding: 22px;\n}\n\n.img-circle {\n  border-radius: 50%;\n  border: 1px solid #84af9c;\n}\n\n.internet img {\n  width: 40%;\n}\n\n.item-avatar {\n  text-align: center;\n  margin-top: 60%;\n}\n\n.nocon .btn {\n  color: #fff;\n  background-color: #387ef5;\n  border: 3px solid white;\n  font-size: 15px;\n  padding: 22px;\n}\n\n.wifi p {\n  font-size: 1.2em;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvbm8taW50ZXJuZXQvbm8taW50ZXJuZXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uby1pbnRlcm5ldC9uby1pbnRlcm5ldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLHlCQUFBO0FDSUo7O0FERkU7RUFDRSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNLSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUNNSjs7QURKRTtFQUNFLFVBQUE7QUNPSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5FO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ1NKOztBRFBFO0VBQ0UsZ0JBQUE7QUNVSjs7QURQRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUEU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vLWludGVybmV0L25vLWludGVybmV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWZpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAud2lmaSBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzLjVlbTtcbiAgfVxuICAubm9jb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5pbnRlcm5ldCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgfVxuICAubm9jb24gLmJ0bjEge1xuICAgIGNvbG9yOiAjMDY1MWQwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAyMnB4O1xuICB9XG4gIC5pbWctY2lyY2xlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg0YWY5YztcbiAgfVxuICAuaW50ZXJuZXQgaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIC5pdGVtLWF2YXRhciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDYwJTtcbiAgfVxuICAubm9jb24gLmJ0biB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZzogMjJweDtcbiAgfVxuICAud2lmaSBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG4gIFxuICAudG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODUlO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICB9XG4gIFxuICAudG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAiLCIud2lmaSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53aWZpIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzLjVlbTtcbn1cblxuLm5vY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmludGVybmV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbn1cblxuLm5vY29uIC5idG4xIHtcbiAgY29sb3I6ICMwNjUxZDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NGFmOWM7XG59XG5cbi5pbnRlcm5ldCBpbWcge1xuICB3aWR0aDogNDAlO1xufVxuXG4uaXRlbS1hdmF0YXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwJTtcbn1cblxuLm5vY29uIC5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4N2VmNTtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLndpZmkgcCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/no-internet/no-internet.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/no-internet/no-internet.page.ts ***!
  \*******************************************************/
/*! exports provided: NoInternetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternetPage", function() { return NoInternetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_rest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/network/rest */ "./src/providers/network/rest.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/holders/holders */ "./src/providers/holders/holders.ts");

var NoInternetPage_1;
// all clear








// import { Storage } from "@ionic/storage";
let NoInternetPage = NoInternetPage_1 = class NoInternetPage {
    constructor(navCtrl, networkService, toastCtrl, loadingCtrl, user, holders, storage, rest, logger) {
        this.navCtrl = navCtrl;
        this.networkService = networkService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user = user;
        this.holders = holders;
        this.storage = storage;
        this.rest = rest;
        this.logger = logger;
        this.rootPage = _login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"];
        //var self = this;
        this.deviceToken = this.holders.getDeviceToken();
    }
    ionViewDidLoad() {
        this.logger.info("Hello NoInternet Page");
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = this.toastCtrl.create({
                message: "No internet connection, check your internet connection",
                duration: 1000,
                position: "middle"
            });
            // toast.onDidDismiss(() => {
            //   this.logger.info("Dismissed toast");
            // });
            // toast.present();
        });
    }
    internetCheck() {
        var self = this;
        if (self.holders.nullConnection()) {
            self.holders.showNetworkAlert();
            self.rootPage = NoInternetPage_1;
        }
        else {
            var loginId;
            var passwd;
            self.storage.get("loginId").then(val => {
                loginId = val;
                self.storage.get("passwd").then(val => {
                    passwd = val;
                    if (loginId || passwd) {
                        let validateUserObj = {
                            loginId: loginId,
                            password: passwd,
                            device_token: self.deviceToken
                        };
                        self.holders.presentLoadingCustom();
                        if (validateUserObj) {
                            self.user.validateUser(validateUserObj.loginId, validateUserObj.password, this.deviceToken, function (status, data) {
                                if (status) {
                                    self.holders.dissmissLoadingCustom();
                                    var _dataObj = JSON.parse(data);
                                    self.rest.setAuthToken(_dataObj.userId, _dataObj.authToken);
                                    // self.navCtrl.setRoot(HomePage, {});
                                }
                                else {
                                    self.holders.dissmissLoadingCustom();
                                    this.navCtrl.setRoot(_login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]);
                                }
                            });
                        }
                    }
                    else {
                        // this.navCtrl.setRoot(LoginPage);
                    }
                });
            });
        }
    }
    ngOnInit() {
    }
};
NoInternetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__["Users"] },
    { type: _providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__["Holders"] },
    { type: Storage },
    { type: _providers_network_rest__WEBPACK_IMPORTED_MODULE_6__["Rest"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"] }
];
NoInternetPage = NoInternetPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-internet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./no-internet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/no-internet/no-internet.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./no-internet.page.scss */ "./src/app/pages/no-internet/no-internet.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_5__["Users"],
        _providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__["Holders"],
        Storage,
        _providers_network_rest__WEBPACK_IMPORTED_MODULE_6__["Rest"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"]])
], NoInternetPage);



/***/ })

}]);
//# sourceMappingURL=pages-no-internet-no-internet-module-es2015.js.map