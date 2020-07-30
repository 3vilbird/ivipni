function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-password-my-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-password/my-password.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-password/my-password.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyPasswordMyPasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>My Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"my-password\">\r\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"submit()\">\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-list>\r\n          <ion-item>\r\n            <ion-label floating>Old Password</ion-label>\r\n            <ion-input type=\"password\" class=\"form-control\" value=\"\" formControlName=\"oldpassword\" id=\"oldpassword\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label floating>New Password</ion-label>\r\n            <ion-input type=\"password\" class=\"form-control\" value=\"\" formControlName=\"newpassword\" id=\"newpassword\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <p *ngIf=\"!passwordForm.controls.newpassword.valid && passwordForm.controls.newpassword.touched \">\r\n            <small class=\"up\">\r\n              <strong>\r\n                <i>\r\n                  Password Must Contain atleast 6 Char\r\n                </i></strong>\r\n            </small>\r\n          </p>\r\n          <ion-item>\r\n            <ion-label floating>Re-Enter Password</ion-label>\r\n            <ion-input type=\"password\" class=\"form-control\" value=\"\" formControlName=\"repassword\" id=\"repassword\">\r\n            </ion-input>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </form>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button type=\"submit\" [disabled]=\"!passwordForm.valid\" shape=\"round\" expand=\"full\">Change Password</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/my-password/my-password-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/my-password/my-password-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MyPasswordPageRoutingModule */

  /***/
  function srcAppPagesMyPasswordMyPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPasswordPageRoutingModule", function () {
      return MyPasswordPageRoutingModule;
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


    var _my_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-password.page */
    "./src/app/pages/my-password/my-password.page.ts");

    var routes = [{
      path: '',
      component: _my_password_page__WEBPACK_IMPORTED_MODULE_3__["MyPasswordPage"]
    }];

    var MyPasswordPageRoutingModule = function MyPasswordPageRoutingModule() {
      _classCallCheck(this, MyPasswordPageRoutingModule);
    };

    MyPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyPasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-password/my-password.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/my-password/my-password.module.ts ***!
    \*********************************************************/

  /*! exports provided: MyPasswordPageModule */

  /***/
  function srcAppPagesMyPasswordMyPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPasswordPageModule", function () {
      return MyPasswordPageModule;
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


    var _my_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-password-routing.module */
    "./src/app/pages/my-password/my-password-routing.module.ts");
    /* harmony import */


    var _my_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-password.page */
    "./src/app/pages/my-password/my-password.page.ts");

    var MyPasswordPageModule = function MyPasswordPageModule() {
      _classCallCheck(this, MyPasswordPageModule);
    };

    MyPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyPasswordPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_my_password_page__WEBPACK_IMPORTED_MODULE_6__["MyPasswordPage"]]
    })], MyPasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-password/my-password.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/my-password/my-password.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyPasswordMyPasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-password button {\n  float: right;\n  font-size: 15px;\n}\n.my-password .up {\n  float: right;\n  color: red;\n}\n.my-password ion-label {\n  font-size: 15px;\n}\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n  /* color: black; */\n}\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  /* color: #fff; */\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktcGFzc3dvcmQvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxteS1wYXNzd29yZFxcbXktcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1wYXNzd29yZC9teS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FOO0FER0k7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0FDRk47QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNISjtBRE1FO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXBhc3N3b3JkL215LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYXNzd29yZCB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgLnVwIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJhY2tncm91bmQ6IGdyYXk7XHJcbiAgICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICIsIi5teS1wYXNzd29yZCBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5teS1wYXNzd29yZCAudXAge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG59XG4ubXktcGFzc3dvcmQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbiAgLyogY29sb3I6IGJsYWNrOyAqL1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIC8qIGNvbG9yOiAjZmZmOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/my-password/my-password.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-password/my-password.page.ts ***!
    \*******************************************************/

  /*! exports provided: MyPasswordPage */

  /***/
  function srcAppPagesMyPasswordMyPasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyPasswordPage", function () {
      return MyPasswordPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear
    // import { Storage } from "@ionic/storage";


    var MyPasswordPage =
    /*#__PURE__*/
    function () {
      function MyPasswordPage(navCtrl, users, formBuilder, toastCtrl, networkService, logger, // public storage: Storage,
      router) {
        _classCallCheck(this, MyPasswordPage);

        this.navCtrl = navCtrl;
        this.users = users;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.passwordForm = formBuilder.group({
          oldpassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          newpassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)])],
          repassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
      }

      _createClass(MyPasswordPage, [{
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this, toast, changeDetails, passwordDetail;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this = this;

                    if (this.passwordForm.valid) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 4;
                    return this.toastCtrl.create({
                      message: "Enter all required feilds"
                    });

                  case 4:
                    toast = _context.sent;
                    toast.present();
                    _context.next = 11;
                    break;

                  case 8:
                    changeDetails = _this.passwordForm.value;
                    passwordDetail = {
                      oldpassword: changeDetails.oldpassword,
                      password: changeDetails.newpassword
                    };

                    if (changeDetails.newpassword == changeDetails.repassword) {
                      if (changeDetails.oldpassword != changeDetails.newpassword) {
                        this.users.changePassword(passwordDetail, function (result, data) {
                          if (result == "1") {
                            // _this.storage.set("passwd", changeDetails.repassword);
                            _this.networkService.showSuccessAlert("sucess " + data.toString());

                            _this.router.navigateByUrl("/account");
                          } else {
                            _this.networkService.showSuccessAlert(" Old password is wrong");
                          }
                        });
                      } else {
                        _this.networkService.showSuccessAlert("failure call for old and new ");
                      }
                    } else {
                      changeDetails.repassword;

                      _this.networkService.showSuccessAlert("password mismatch please check");
                    }

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyPasswordPage;
    }();

    MyPasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    MyPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-my-password",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-password/my-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-password.page.scss */
      "./src/app/pages/my-password/my-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], MyPasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-my-password-my-password-module-es5.js.map