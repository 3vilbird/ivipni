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
/* harmony default export */ __webpack_exports__["default"] = (".wifi {\n  text-align: center;\n  margin-top: 10%;\n  color: white;\n}\n\n.wifi ion-icon {\n  font-size: 3.5em;\n}\n\n.nocon {\n  width: 100%;\n  margin-top: 25px;\n  text-align: center;\n}\n\n.internet {\n  background-color: #387ef5;\n}\n\n.nocon .btn1 {\n  color: #0651d0;\n  background-color: white;\n  margin-left: 25px;\n  border: 3px solid white;\n  font-size: 15px;\n  padding: 22px;\n}\n\n.img-circle {\n  border-radius: 50%;\n  border: 1px solid #84af9c;\n}\n\n.internet img {\n  width: 40%;\n}\n\n.item-avatar {\n  text-align: center;\n  margin-top: 60%;\n}\n\n.nocon .btn {\n  color: #fff;\n  background-color: #387ef5;\n  border: 3px solid white;\n  font-size: 15px;\n  padding: 22px;\n}\n\n.wifi p {\n  font-size: 1.2em;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9uby1pbnRlcm5ldC9uby1pbnRlcm5ldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL25vLWludGVybmV0L25vLWludGVybmV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UseUJBQUE7QUNJSjs7QURGRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0tKOztBREhFO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQ01KOztBREpFO0VBQ0UsVUFBQTtBQ09KOztBRExFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDU0o7O0FEUEU7RUFDRSxnQkFBQTtBQ1VKOztBRFBFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURQRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm8taW50ZXJuZXQvbm8taW50ZXJuZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpZmkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC53aWZpIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMuNWVtO1xuICB9XG4gIC5ub2NvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmludGVybmV0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICB9XG4gIC5ub2NvbiAuYnRuMSB7XG4gICAgY29sb3I6ICMwNjUxZDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHBhZGRpbmc6IDIycHg7XG4gIH1cbiAgLmltZy1jaXJjbGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODRhZjljO1xuICB9XG4gIC5pbnRlcm5ldCBpbWcge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cbiAgLml0ZW0tYXZhdGFyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNjAlO1xuICB9XG4gIC5ub2NvbiAuYnRuIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nOiAyMnB4O1xuICB9XG4gIC53aWZpIHAge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICIsIi53aWZpIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndpZmkgaW9uLWljb24ge1xuICBmb250LXNpemU6IDMuNWVtO1xufVxuXG4ubm9jb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW50ZXJuZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xufVxuXG4ubm9jb24gLmJ0bjEge1xuICBjb2xvcjogIzA2NTFkMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4uaW1nLWNpcmNsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzg0YWY5Yztcbn1cblxuLmludGVybmV0IGltZyB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5pdGVtLWF2YXRhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjAlO1xufVxuXG4ubm9jb24gLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg3ZWY1O1xuICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMnB4O1xufVxuXG4ud2lmaSBwIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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