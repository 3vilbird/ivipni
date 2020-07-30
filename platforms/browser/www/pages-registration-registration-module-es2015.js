(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-header class=\"registertion\">\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title>\r\n        Registration\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\r\n    <ion-list>\r\n      <ion-card>\r\n        <ion-row class=\"head\">\r\n          <p>Personal Details</p>\r\n        </ion-row>\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-label floating>First Name</ion-label>\r\n            <ion-input type=\"text\" id=\"first_name\" class=\"form-control\" formControlName=\"first_name\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.first_name.valid && registrationForm.controls.first_name.touched  \">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Please enter minimum 3 characters\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Last Name</ion-label>\r\n            <ion-input type=\"text\" id=\"last_name\" class=\"form-control\" formControlName=\"last_name\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.last_name.valid && registrationForm.controls.last_name.touched  \">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Please enter minimum 3 characters\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Email</ion-label>\r\n            <ion-input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.email.valid && registrationForm.controls.email.touched \"\r\n            class=\"alert alert-danger\">\r\n            <small class=\"up\">\r\n              <strong>\r\n                <i>\r\n                  Please Enter Valid Email Address!\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Phone number</ion-label>\r\n            <ion-input type=\"number\" id=\"mobile\" class=\"form-control\" formControlName=\"mobile\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.mobile.valid && registrationForm.controls.mobile.touched  \">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Phone number must be 10 digits!\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Password</ion-label>\r\n            <ion-input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.password.valid && registrationForm.controls.password.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Password must contain atleast 6 Char\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Re-enter Password</ion-label>\r\n            <ion-input type=\"password\" id=\"reenterpassword\" class=\"form-control\" formControlName=\"reenterpassword\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p\r\n            *ngIf=\"!registrationForm.controls.reenterpassword.valid && registrationForm.controls.reenterpassword.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Renter Password must contain atleast 6 Char\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n        </ion-list>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-list>\r\n          <ion-row class=\"com\">\r\n            <p>Company Details</p>\r\n          </ion-row>\r\n          <ion-item>\r\n            <ion-label floating>Company Name</ion-label>\r\n            <ion-input type=\"text\" id=\"company_name\" class=\"form-control\" formControlName=\"company_name\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.company_name.valid && registrationForm.controls.company_name.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Company name is required\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Company Formation Day</ion-label>\r\n            <ion-datetime displayFormat=\"MMM DD, YYYY\" pickerFormat=\"DDD MMMM YYYY\" id=\"companyformationday\"\r\n              formControlName=\"companyformationday\"></ion-datetime>\r\n          </ion-item>\r\n          <p\r\n            *ngIf=\"!registrationForm.controls.companyformationday.valid && registrationForm.controls.companyformationday.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Company Formation Day is require\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n\r\n          <ion-item>\r\n            <ion-label floating>GST Number</ion-label>\r\n            <ion-input type=\"text\" id=\"company_tax_number\" class=\"form-control\" formControlName=\"company_tax_number\">\r\n            </ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Alternate Telephone</ion-label>\r\n            <ion-input type=\"number\" id=\"alternativetelephone\" class=\"form-control\"\r\n              formControlName=\"alternativetelephone\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Fax</ion-label>\r\n            <ion-input type=\"number\" id=\"fax\" class=\"form-control\" formControlName=\"fax\"></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label floating>Primary Category</ion-label>\r\n            <ion-select id=\"primarycategory\" class=\"form-control\" formControlName=\"primarycategory\">\r\n              <ion-select-option [value]=\"categorie.category_id\" *ngFor=\"let categorie of categories; let idx = index\">\r\n                {{categorie.name}}</ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n          <p\r\n            *ngIf=\"!registrationForm.controls.primarycategory.valid && registrationForm.controls.primarycategory.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Primary category is required\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n        </ion-list>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-list>\r\n          <ion-row class=\"add\">\r\n            <p>Address</p>\r\n          </ion-row>\r\n          <ion-item>\r\n            <ion-label floating>Address Line1</ion-label>\r\n            <ion-input type=\"text\" id=\"address1\" class=\"form-control\" formControlName=\"address1\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.address1.valid && registrationForm.controls.address1.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  address must have minimum 3 characters\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n          <ion-item>\r\n            <ion-label floating>Address Line2</ion-label>\r\n            <ion-input type=\"text\" id=\"address2\" class=\"form-control\" formControlName=\"address2\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.address2.valid && registrationForm.controls.address2.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  address must have minimum 3 characters\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n          <ion-row>\r\n            <ion-item>\r\n              <ion-label floating>Town/City</ion-label>\r\n              <ion-input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\"></ion-input>\r\n            </ion-item>\r\n            <p *ngIf=\"!registrationForm.controls.city.valid && registrationForm.controls.city.touched\">\r\n              <small class=\"up\">\r\n                <strong><i>\r\n                    City name is required\r\n                  </i></strong>\r\n              </small>\r\n            </p>\r\n            <ion-item>\r\n              <ion-label floating>State</ion-label>\r\n              <ion-select id=\"state\" class=\"form-control\" formControlName=\"state\" (ionChange)=\"myOptionFn();\">\r\n                <ion-select-option *ngFor=\"let item of optionsList\" [value]=\"item.name\">{{item.name}}</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <p *ngIf=\"!registrationForm.controls.state.valid && registrationForm.controls.state.touched\">\r\n              <small class=\"up\">\r\n                <strong><i>\r\n                    State is required\r\n                  </i></strong>\r\n              </small>\r\n            </p>\r\n          </ion-row>\r\n          <ion-item>\r\n            <ion-label floating>Pin Code</ion-label>\r\n            <ion-input type=\"number\" id=\"zip\" class=\"form-control\" formControlName=\"zip\"></ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!registrationForm.controls.zip.valid && registrationForm.controls.zip.touched\">\r\n            <small class=\"up\">\r\n              <strong><i>\r\n                  Pin code must have 6 digits\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n        </ion-list>\r\n      </ion-card>\r\n    </ion-list>\r\n\r\n    <ion-footer>\r\n      <ion-toolbar>\r\n        <ion-button type=\"submit\" color=\"primary\" [disabled]=\"!registrationForm.valid\" expand=\"full\" shape=\"round\">\r\n          Register</ion-button>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/registration/registration-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/registration/registration-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/pages/registration/registration.page.ts");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registration/registration.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/pages/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/pages/registration/registration.page.ts");








let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "./src/app/pages/registration/registration.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".head {\n  background-color: whitesmoke;\n}\n\n.head p {\n  margin-top: 13px;\n  margin-left: 15px;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.com {\n  background-color: whitesmoke;\n}\n\n.up {\n  float: right;\n  color: red;\n}\n\n.com p {\n  margin-top: 13px;\n  margin-left: 15px;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.add {\n  background-color: whitesmoke;\n}\n\n.add p {\n  margin-top: 13px;\n  margin-left: 15px;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\nion-label {\n  font-size: 15px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSw0QkFBQTtBQ0dKOztBREFFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUNHSjs7QURBRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QURERTtFQUNFLDRCQUFBO0FDSUo7O0FERkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEU7RUFDRSxlQUFBO0FDTUo7O0FESEU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESEU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICAuaGVhZCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgLmNvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICAvL0Vycm9yIG1lc3NhZ2VzXHJcbiAgLnVwIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb20gcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIC5hZGQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB9XHJcbiAgLmFkZCBwIHtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgLyogY29sb3I6IGJsYWNrOyAqL1xyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIC8qIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAiLCIuaGVhZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5oZWFkIHAge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jb20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4udXAge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5jb20gcCB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmFkZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5hZGQgcCB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/registration/registration.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network/rest */ "./src/providers/network/rest.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");












let RegistrationPage = class RegistrationPage {
    constructor(navCtrl, loadingCtrl, rest, user, formBuilder, toastCtrl, productServices, networkService, logger, router) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rest = rest;
        this.user = user;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.productServices = productServices;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.list = [];
        // please do insert the  name and zone id of the state
        this.optionsList = [
            {
                name: "Karnataka",
                zone_id: 1111,
            },
            {
                name: "Tamil Nadu",
                zone_id: 2222,
            },
        ];
        this.emailRegex = "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";
        var _this = this;
        var _this = this;
        // this call will fetch the categories from db
        this.productServices.getPrimaryCategories(function (data) {
            _this.logger.debug("checking Array" + JSON.stringify(data));
            _this.categories = data.data.categories;
        });
        _this.country = "India";
        _this.list.push({ value: 1, text: "TIN NO", checked: false });
        _this.list.push({ value: 2, text: "GRN NO", checked: false });
        _this.list.push({ value: 3, text: "GST NO", checked: false });
        _this.option1 = "Two Wheeler";
        _this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
            ]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15),
            ]),
            reenterpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15),
            ]),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            // prefferpayment: new FormControl(""),
            // primarycategory: new FormControl(""),
            salPer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50),
            ]),
            companyformationday: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            company_tax_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            //   Validators.required,
            //   Validators.maxLength(15),
            //   Validators.maxLength(15)
            // ]),
            alternativetelephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            primarycategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250),
            ]),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250),
            ]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("99", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6),
            ]),
        });
        this.loading = loadingCtrl.create({
            message: ``,
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: this.toastMessage,
                duration: 1000,
                position: "middle",
            });
            // toast.onDidDismiss(() => {
            //   this.logger.info("Dismissed toast");
            // });
            toast.present();
        });
    }
    myOptionFn() {
        this.logger.info("invoking the myotpins Fnuction");
        this.states = this.registrationForm.value.state;
        this.logger.debug("states " + this.states);
        for (var i = 0; i < this.optionsList.length; i++) {
            if (this.states == this.optionsList[i].name) {
                this.myZone_id = this.optionsList[i].zone_id;
                this.logger.debug("checking zone_id in myZone_id " + this.myZone_id);
                this.logger.debug("checking the value in form ctrl " +
                    this.registrationForm.value.myZone_id);
                this.registrationForm.value.myZone_id = this.myZone_id;
                this.logger.debug("checking the value in form ctrl after updating it " +
                    this.registrationForm.value.myZone_id);
            }
        }
    }
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var _this = this;
            let loading = _this.loadingCtrl.create({
                message: ``,
            });
            _this.logger.debug("change password:" + _this.registrationForm.value.password);
            _this.logger.debug("re password:" + _this.registrationForm.value.reenterpassword);
            if (!_this.registrationForm.valid) {
                _this.logger.debug("registarion " + _this.registrationForm.value);
                let toast = yield _this.toastCtrl.create({
                    message: "Enter all required feilds",
                    duration: 3000,
                });
                toast.present();
            }
            else if (_this.registrationForm.value.password ==
                _this.registrationForm.value.reenterpassword) {
                let registrationDetails = {
                    first_name: _this.registrationForm.value.first_name,
                    last_name: _this.registrationForm.value.last_name,
                    email: _this.registrationForm.value.email,
                    mobile: _this.registrationForm.value.mobile,
                    password: _this.registrationForm.value.password,
                    dob: _this.registrationForm.value.dob,
                    // prefferpayment: _this.registrationForm.value.prefferpayment,
                    primarycategory: _this.registrationForm.value.primarycategory,
                    salPer: _this.registrationForm.value.salPer,
                    company_name: _this.registrationForm.value.company_name,
                    companyformationday: _this.registrationForm.value.companyformationday,
                    gst_number: _this.registrationForm.value.company_tax_number,
                    alternativetelephone: _this.registrationForm.value.alternativetelephone,
                    fax: _this.registrationForm.value.fax,
                    address1: _this.registrationForm.value.address1,
                    address2: _this.registrationForm.value.address2,
                    city: _this.registrationForm.value.city,
                    state: _this.myZone_id,
                    country: _this.registrationForm.value.country,
                    zip: _this.registrationForm.value.zip,
                };
                // this.loading.present();
                this.user.registerNewUser(registrationDetails, function (result, data) {
                    if (result == "1") {
                        _this.logger.info("invoking success");
                        _this.logger.debug("invoking success" + JSON.parse(data));
                        var _regdata = JSON.parse(data);
                        _this.logger.debug("invoking success" + JSON.stringify(_regdata));
                        _this.logger.debug("invoking success" + _regdata.customer_id);
                        _this.networkService.showSuccessAlert("Successfully registered, Please login");
                        _this.customer1_id = _regdata.customer_id;
                        _this.presentToast();
                        // this.loading.dismiss();
                        _this.user.emailandsms(_this.customer1_id, (data) => { });
                        _this.router.navigateByUrl("/login");
                    }
                    else {
                        _this.logger.error("invoking failure" + data);
                        // this.loading.dismiss();
                        _this.networkService.showSuccessAlert(data);
                        _this.logger.error("invoking error" + data);
                    }
                });
            }
            else {
                _this.networkService.showSuccessAlert("password and re-enter password should be same");
            }
        });
    }
    ngOnInit() { }
};
RegistrationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_rest__WEBPACK_IMPORTED_MODULE_4__["Rest"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__["Products"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-registration",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.page.scss */ "./src/app/pages/registration/registration.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_rest__WEBPACK_IMPORTED_MODULE_4__["Rest"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__["Products"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], RegistrationPage);



/***/ })

}]);
//# sourceMappingURL=pages-registration-registration-module-es2015.js.map