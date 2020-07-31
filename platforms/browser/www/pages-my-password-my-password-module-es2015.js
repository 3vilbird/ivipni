(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-password-my-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-password/my-password.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-password/my-password.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"my-password\">\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"submit()\">\n    <ion-card>\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>Old Password</ion-label>\n            <ion-input type=\"password\" class=\"form-control\" value=\"\" formControlName=\"oldpassword\" id=\"oldpassword\">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>New Password</ion-label>\n            <ion-input type=\"password\" class=\"form-control\" value=\"\" formControlName=\"newpassword\" id=\"newpassword\">\n            </ion-input>\n          </ion-item>\n          <p *ngIf=\"!passwordForm.controls.newpassword.valid && passwordForm.controls.newpassword.touched \">\n            <small class=\"up\">\n              <strong>\n                <i>\n                  Password Must Contain atleast 6 Char\n                </i></strong>\n            </small>\n          </p>\n          <ion-item>\n            <ion-label floating>Re-Enter Password</ion-label>\n            <ion-input type=\"password\" class=\"form-control\" value=\"\" formControlName=\"repassword\" id=\"repassword\">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button type=\"submit\" [disabled]=\"!passwordForm.valid\" shape=\"round\" expand=\"full\">Change Password</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/my-password/my-password-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/my-password/my-password-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPasswordPageRoutingModule", function() { return MyPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-password.page */ "./src/app/pages/my-password/my-password.page.ts");




const routes = [
    {
        path: '',
        component: _my_password_page__WEBPACK_IMPORTED_MODULE_3__["MyPasswordPage"]
    }
];
let MyPasswordPageRoutingModule = class MyPasswordPageRoutingModule {
};
MyPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-password/my-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-password/my-password.module.ts ***!
  \*********************************************************/
/*! exports provided: MyPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPasswordPageModule", function() { return MyPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-password-routing.module */ "./src/app/pages/my-password/my-password-routing.module.ts");
/* harmony import */ var _my_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-password.page */ "./src/app/pages/my-password/my-password.page.ts");








let MyPasswordPageModule = class MyPasswordPageModule {
};
MyPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyPasswordPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_my_password_page__WEBPACK_IMPORTED_MODULE_6__["MyPasswordPage"]],
    })
], MyPasswordPageModule);



/***/ }),

/***/ "./src/app/pages/my-password/my-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/my-password/my-password.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-password button {\n  float: right;\n  font-size: 15px;\n}\n.my-password .up {\n  float: right;\n  color: red;\n}\n.my-password ion-label {\n  font-size: 15px;\n}\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvbXktcGFzc3dvcmQvbXktcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1wYXNzd29yZC9teS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0FDRk47QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1FO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXBhc3N3b3JkL215LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYXNzd29yZCB7XG4gICAgYnV0dG9uIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICB9XG4gICAgLnVwIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuICBcbiAgICBpb24tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICIsIi5teS1wYXNzd29yZCBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5teS1wYXNzd29yZCAudXAge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG59XG4ubXktcGFzc3dvcmQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/my-password/my-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/my-password/my-password.page.ts ***!
  \*******************************************************/
/*! exports provided: MyPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPasswordPage", function() { return MyPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear







// import { Storage } from "@ionic/storage";

let MyPasswordPage = class MyPasswordPage {
    constructor(navCtrl, users, formBuilder, toastCtrl, networkService, logger, 
    // public storage: Storage,
    router) {
        this.navCtrl = navCtrl;
        this.users = users;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.passwordForm = formBuilder.group({
            oldpassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            newpassword: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]),
            ],
            repassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let _this = this;
            if (!this.passwordForm.valid) {
                let toast = yield this.toastCtrl.create({
                    message: "Enter all required feilds",
                });
                toast.present();
            }
            else {
                let changeDetails = _this.passwordForm.value;
                let passwordDetail = {
                    oldpassword: changeDetails.oldpassword,
                    password: changeDetails.newpassword,
                };
                if (changeDetails.newpassword == changeDetails.repassword) {
                    if (changeDetails.oldpassword != changeDetails.newpassword) {
                        this.users.changePassword(passwordDetail, function (result, data) {
                            if (result == "1") {
                                // _this.storage.set("passwd", changeDetails.repassword);
                                _this.networkService.showSuccessAlert("sucess " + data.toString());
                                _this.router.navigateByUrl("/account");
                            }
                            else {
                                _this.networkService.showSuccessAlert(" Old password is wrong");
                            }
                        });
                    }
                    else {
                        _this.networkService.showSuccessAlert("failure call for old and new ");
                    }
                }
                else {
                    changeDetails.repassword;
                    _this.networkService.showSuccessAlert("password mismatch please check");
                }
            }
        });
    }
    ngOnInit() { }
};
MyPasswordPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
MyPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-password",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-password/my-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-password.page.scss */ "./src/app/pages/my-password/my-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], MyPasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-password-my-password-module-es2015.js.map