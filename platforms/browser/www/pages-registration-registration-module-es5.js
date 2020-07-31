function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegistrationRegistrationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <ion-header class=\"registertion\">\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        Registration\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <form [formGroup]=\"registrationForm\" (ngSubmit)=\"submit()\">\n    <ion-list>\n      <ion-card>\n        <ion-row class=\"head\">\n          <p>Personal Details</p>\n        </ion-row>\n        <ion-list>\n          <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input type=\"text\" id=\"first_name\" class=\"form-control\" formControlName=\"first_name\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.first_name.valid && registrationForm.controls.first_name.touched  \">\n            <small class=\"up\">\n              <strong><i>\n                  Please enter minimum 3 characters\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input type=\"text\" id=\"last_name\" class=\"form-control\" formControlName=\"last_name\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.last_name.valid && registrationForm.controls.last_name.touched  \">\n            <small class=\"up\">\n              <strong><i>\n                  Please enter minimum 3 characters\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.email.valid && registrationForm.controls.email.touched \"\n            class=\"alert alert-danger\">\n            <small class=\"up\">\n              <strong>\n                <i>\n                  Please Enter Valid Email Address!\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>Phone number</ion-label>\n            <ion-input type=\"number\" id=\"mobile\" class=\"form-control\" formControlName=\"mobile\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.mobile.valid && registrationForm.controls.mobile.touched  \">\n            <small class=\"up\">\n              <strong><i>\n                  Phone number must be 10 digits!\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>Password</ion-label>\n            <ion-input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.password.valid && registrationForm.controls.password.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  Password must contain atleast 6 Char\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>Re-enter Password</ion-label>\n            <ion-input type=\"password\" id=\"reenterpassword\" class=\"form-control\" formControlName=\"reenterpassword\">\n            </ion-input>\n          </ion-item>\n          <p\n            *ngIf=\"!registrationForm.controls.reenterpassword.valid && registrationForm.controls.reenterpassword.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  Renter Password must contain atleast 6 Char\n                </i></strong>\n            </small>\n          </p>\n        </ion-list>\n      </ion-card>\n      <ion-card>\n        <ion-list>\n          <ion-row class=\"com\">\n            <p>Company Details</p>\n          </ion-row>\n          <ion-item>\n            <ion-label floating>Company Name</ion-label>\n            <ion-input type=\"text\" id=\"company_name\" class=\"form-control\" formControlName=\"company_name\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.company_name.valid && registrationForm.controls.company_name.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  Company name is required\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>Company Formation Day</ion-label>\n            <ion-datetime displayFormat=\"MMM DD, YYYY\" pickerFormat=\"DDD MMMM YYYY\" id=\"companyformationday\"\n              formControlName=\"companyformationday\"></ion-datetime>\n          </ion-item>\n          <p\n            *ngIf=\"!registrationForm.controls.companyformationday.valid && registrationForm.controls.companyformationday.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  Company Formation Day is require\n                </i></strong>\n            </small>\n          </p>\n\n          <ion-item>\n            <ion-label floating>GST Number</ion-label>\n            <ion-input type=\"text\" id=\"company_tax_number\" class=\"form-control\" formControlName=\"company_tax_number\">\n            </ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Alternate Telephone</ion-label>\n            <ion-input type=\"number\" id=\"alternativetelephone\" class=\"form-control\"\n              formControlName=\"alternativetelephone\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Fax</ion-label>\n            <ion-input type=\"number\" id=\"fax\" class=\"form-control\" formControlName=\"fax\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Primary Category</ion-label>\n            <ion-select id=\"primarycategory\" class=\"form-control\" formControlName=\"primarycategory\">\n              <ion-select-option [value]=\"categorie.category_id\" *ngFor=\"let categorie of categories; let idx = index\">\n                {{categorie.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <p\n            *ngIf=\"!registrationForm.controls.primarycategory.valid && registrationForm.controls.primarycategory.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  Primary category is required\n                </i></strong>\n            </small>\n          </p>\n        </ion-list>\n      </ion-card>\n      <ion-card>\n        <ion-list>\n          <ion-row class=\"add\">\n            <p>Address</p>\n          </ion-row>\n          <ion-item>\n            <ion-label floating>Address Line1</ion-label>\n            <ion-input type=\"text\" id=\"address1\" class=\"form-control\" formControlName=\"address1\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.address1.valid && registrationForm.controls.address1.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  address must have minimum 3 characters\n                </i></strong>\n            </small>\n          </p>\n          <ion-item>\n            <ion-label floating>Address Line2</ion-label>\n            <ion-input type=\"text\" id=\"address2\" class=\"form-control\" formControlName=\"address2\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.address2.valid && registrationForm.controls.address2.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  address must have minimum 3 characters\n                </i></strong>\n            </small>\n          </p>\n          <ion-row>\n            <ion-item>\n              <ion-label floating>Town/City</ion-label>\n              <ion-input type=\"text\" id=\"city\" class=\"form-control\" formControlName=\"city\"></ion-input>\n            </ion-item>\n            <p *ngIf=\"!registrationForm.controls.city.valid && registrationForm.controls.city.touched\">\n              <small class=\"up\">\n                <strong><i>\n                    City name is required\n                  </i></strong>\n              </small>\n            </p>\n            <ion-item>\n              <ion-label floating>State</ion-label>\n              <ion-select id=\"state\" class=\"form-control\" formControlName=\"state\" (ionChange)=\"myOptionFn();\">\n                <ion-select-option *ngFor=\"let item of optionsList\" [value]=\"item.name\">{{item.name}}</ion-select-option>\n              </ion-select>\n            </ion-item>\n            <p *ngIf=\"!registrationForm.controls.state.valid && registrationForm.controls.state.touched\">\n              <small class=\"up\">\n                <strong><i>\n                    State is required\n                  </i></strong>\n              </small>\n            </p>\n          </ion-row>\n          <ion-item>\n            <ion-label floating>Pin Code</ion-label>\n            <ion-input type=\"number\" id=\"zip\" class=\"form-control\" formControlName=\"zip\"></ion-input>\n          </ion-item>\n          <p *ngIf=\"!registrationForm.controls.zip.valid && registrationForm.controls.zip.touched\">\n            <small class=\"up\">\n              <strong><i>\n                  Pin code must have 6 digits\n                </i></strong>\n            </small>\n          </p>\n        </ion-list>\n      </ion-card>\n    </ion-list>\n\n    <ion-footer>\n      <ion-toolbar>\n        <ion-button type=\"submit\" color=\"primary\" [disabled]=\"!registrationForm.valid\" expand=\"full\" shape=\"round\">\n          Register</ion-button>\n      </ion-toolbar>\n    </ion-footer>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/registration/registration-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/registration/registration-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RegistrationPageRoutingModule */

  /***/
  function srcAppPagesRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function () {
      return RegistrationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/pages/registration/registration.page.ts");

    var routes = [{
      path: '',
      component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }];

    var RegistrationPageRoutingModule = function RegistrationPageRoutingModule() {
      _classCallCheck(this, RegistrationPageRoutingModule);
    };

    RegistrationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registration/registration.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegistrationPageModule */

  /***/
  function srcAppPagesRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function () {
      return RegistrationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/pages/registration/registration-routing.module.ts");
    /* harmony import */


    var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.page */
    "./src/app/pages/registration/registration.page.ts");

    var RegistrationPageModule = function RegistrationPageModule() {
      _classCallCheck(this, RegistrationPageModule);
    };

    RegistrationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })], RegistrationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/registration/registration.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegistrationRegistrationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".head {\n  background-color: whitesmoke;\n}\n\n.head p {\n  margin-top: 13px;\n  margin-left: 15px;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.com {\n  background-color: whitesmoke;\n}\n\n.up {\n  float: right;\n  color: red;\n}\n\n.com p {\n  margin-top: 13px;\n  margin-left: 15px;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\n.add {\n  background-color: whitesmoke;\n}\n\n.add p {\n  margin-top: 13px;\n  margin-left: 15px;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n\nion-label {\n  font-size: 15px;\n}\n\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBRTtFQUNFLDRCQUFBO0FDR0o7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0dKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERFO0VBQ0UsNEJBQUE7QUNJSjs7QURGRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIRTtFQUNFLGVBQUE7QUNNSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURIRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4gIC5oZWFkIHAge1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICAuY29tIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB9XG4gIC8vRXJyb3IgbWVzc2FnZXNcbiAgLnVwIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICBcbiAgLmNvbSBwIHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgLmFkZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgfVxuICAuYWRkIHAge1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICBcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDg1JTtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogZ3JheTtcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgLyogY29sb3I6ICNmZmY7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICIsIi5oZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmhlYWQgcCB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi51cCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmNvbSBwIHtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYWRkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLmFkZCBwIHtcbiAgbWFyZ2luLXRvcDogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xuICAvKiBjb2xvcjogYmxhY2s7ICovXG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgLyogY29sb3I6ICNmZmY7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/registration/registration.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/registration/registration.page.ts ***!
    \*********************************************************/

  /*! exports provided: RegistrationPage */

  /***/
  function srcAppPagesRegistrationRegistrationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPage", function () {
      return RegistrationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var _providers_network_rest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/network/rest */
    "./src/providers/network/rest.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var RegistrationPage =
    /*#__PURE__*/
    function () {
      function RegistrationPage(navCtrl, loadingCtrl, rest, user, formBuilder, toastCtrl, productServices, networkService, logger, router) {
        _classCallCheck(this, RegistrationPage);

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
        this.list = []; // please do insert the  name and zone id of the state

        this.optionsList = [{
          name: "Karnataka",
          zone_id: 1111
        }, {
          name: "Tamil Nadu",
          zone_id: 2222
        }];
        this.emailRegex = "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";

        var _this = this;

        var _this = this; // this call will fetch the categories from db


        this.productServices.getPrimaryCategories(function (data) {
          _this.logger.debug("checking Array" + JSON.stringify(data));

          _this.categories = data.data.categories;
        });
        _this.country = "India";

        _this.list.push({
          value: 1,
          text: "TIN NO",
          checked: false
        });

        _this.list.push({
          value: 2,
          text: "GRN NO",
          checked: false
        });

        _this.list.push({
          value: 3,
          text: "GST NO",
          checked: false
        });

        _this.option1 = "Two Wheeler";
        _this.registrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
          first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(32)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")]),
          mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
          reenterpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(15)]),
          dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          // prefferpayment: new FormControl(""),
          // primarycategory: new FormControl(""),
          salPer: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(50)]),
          companyformationday: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          company_tax_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          //   Validators.required,
          //   Validators.maxLength(15),
          //   Validators.maxLength(15)
          // ]),
          alternativetelephone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          fax: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          primarycategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](""),
          address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)]),
          address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)]),
          city: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(250)]),
          state: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("99", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
          zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)])
        });
        this.loading = loadingCtrl.create({
          message: ""
        });
      }

      _createClass(RegistrationPage, [{
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastCtrl.create({
                      message: this.toastMessage,
                      duration: 1000,
                      position: "middle"
                    });

                  case 2:
                    toast = _context.sent;
                    // toast.onDidDismiss(() => {
                    //   this.logger.info("Dismissed toast");
                    // });
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "myOptionFn",
        value: function myOptionFn() {
          this.logger.info("invoking the myotpins Fnuction");
          this.states = this.registrationForm.value.state;
          this.logger.debug("states " + this.states);

          for (var i = 0; i < this.optionsList.length; i++) {
            if (this.states == this.optionsList[i].name) {
              this.myZone_id = this.optionsList[i].zone_id;
              this.logger.debug("checking zone_id in myZone_id " + this.myZone_id);
              this.logger.debug("checking the value in form ctrl " + this.registrationForm.value.myZone_id);
              this.registrationForm.value.myZone_id = this.myZone_id;
              this.logger.debug("checking the value in form ctrl after updating it " + this.registrationForm.value.myZone_id);
            }
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this, loading, toast, registrationDetails;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this = this;
                    loading = _this.loadingCtrl.create({
                      message: ""
                    });

                    _this.logger.debug("change password:" + _this.registrationForm.value.password);

                    _this.logger.debug("re password:" + _this.registrationForm.value.reenterpassword);

                    if (_this.registrationForm.valid) {
                      _context2.next = 12;
                      break;
                    }

                    _this.logger.debug("registarion " + _this.registrationForm.value);

                    _context2.next = 8;
                    return _this.toastCtrl.create({
                      message: "Enter all required feilds",
                      duration: 3000
                    });

                  case 8:
                    toast = _context2.sent;
                    toast.present();
                    _context2.next = 13;
                    break;

                  case 12:
                    if (_this.registrationForm.value.password == _this.registrationForm.value.reenterpassword) {
                      registrationDetails = {
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
                        zip: _this.registrationForm.value.zip
                      }; // this.loading.present();

                      this.user.registerNewUser(registrationDetails, function (result, data) {
                        if (result == "1") {
                          _this.logger.info("invoking success");

                          _this.logger.debug("invoking success" + JSON.parse(data));

                          var _regdata = JSON.parse(data);

                          _this.logger.debug("invoking success" + JSON.stringify(_regdata));

                          _this.logger.debug("invoking success" + _regdata.customer_id);

                          _this.networkService.showSuccessAlert("Successfully registered, Please login");

                          _this.customer1_id = _regdata.customer_id;

                          _this.presentToast(); // this.loading.dismiss();


                          _this.user.emailandsms(_this.customer1_id, function (data) {});

                          _this.router.navigateByUrl("/login");
                        } else {
                          _this.logger.error("invoking failure" + data); // this.loading.dismiss();


                          _this.networkService.showSuccessAlert(data);

                          _this.logger.error("invoking error" + data);
                        }
                      });
                    } else {
                      _this.networkService.showSuccessAlert("password and re-enter password should be same");
                    }

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RegistrationPage;
    }();

    RegistrationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_rest__WEBPACK_IMPORTED_MODULE_4__["Rest"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__["Products"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    RegistrationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-registration",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.page.scss */
      "./src/app/pages/registration/registration.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_rest__WEBPACK_IMPORTED_MODULE_4__["Rest"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__["Products"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_8__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], RegistrationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-registration-registration-module-es5.js.map