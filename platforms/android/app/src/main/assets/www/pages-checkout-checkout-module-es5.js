function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-nav color=\"primary\">\n      <ion-title>Edit Address</ion-title>\n    </ion-nav>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"checkout\">\n  <form [formGroup]=\"checkForm\">\n    <ion-list formGroupName=\"name\">\n      <ion-item no-lines>\n        Delivery Address\n      </ion-item>\n      <ion-row>\n        <ion-item width-30>\n          <ion-label floating>First Name</ion-label>\n          <ion-input\n            type=\"text\"\n            formControlName=\"first_name\"\n            [(ngModel)]=\"firstname\"\n            required\n          ></ion-input>\n        </ion-item>\n        <ion-item width-30>\n          <ion-label floating>Last Name</ion-label>\n          <ion-input\n            type=\"text\"\n            formControlName=\"last_name\"\n            [(ngModel)]=\"lastname\"\n            required\n          ></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-item width-30>\n        <ion-label floating> Company Name</ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"company\"\n          [(ngModel)]=\"company\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item width-30>\n        <ion-label floating> Address Line1</ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"address1\"\n          [(ngModel)]=\"address_1\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item width-30>\n        <ion-label floating>Address Line2</ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"address2\"\n          [(ngModel)]=\"address_2\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item width-30>\n        <ion-label floating>Town/City</ion-label>\n        <ion-input\n          type=\"text\"\n          formControlName=\"city\"\n          [(ngModel)]=\"city\"\n          required\n        ></ion-input>\n      </ion-item>\n      <ion-item width-50>\n        <ion-label floating>State</ion-label>\n        <ion-select\n          formControlName=\"zone_id\"\n          (ionChange)=\"myOptionFn();\"\n          [(ngModel)]=\"name\"\n        >\n          <ion-select-option\n            *ngFor=\"let item of optionsList\"\n            value=\"{{item.name}}\"\n            >{{item.name}}</ion-select-option\n          >\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Pin Code</ion-label>\n        <ion-input\n          type=\"number\"\n          formControlName=\"postcode\"\n          [(ngModel)]=\"postcode\"\n          required\n        ></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"danger\" (click)=\"back();\">\n          CANCLE\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button\n          color=\"primary\"\n          (click)=\"checkOutAddress()\"\n          [disabled]=\"!checkForm.valid\"\n        >\n          UPDATE\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CheckoutPageRoutingModule */

  /***/
  function srcAppPagesCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
      return CheckoutPageRoutingModule;
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


    var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/pages/checkout/checkout.page.ts");

    var routes = [{
      path: '',
      component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }];

    var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
      _classCallCheck(this, CheckoutPageRoutingModule);
    };

    CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/checkout/checkout.module.ts ***!
    \***************************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppPagesCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
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


    var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkout-routing.module */
    "./src/app/pages/checkout/checkout-routing.module.ts");
    /* harmony import */


    var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/pages/checkout/checkout.page.ts");

    var CheckoutPageModule = function CheckoutPageModule() {
      _classCallCheck(this, CheckoutPageModule);
    };

    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/checkout/checkout.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".checkout ion-item {\n  color: blue;\n  font-size: 16px;\n}\n.checkout h6 {\n  color: gray;\n  font-size: 10px;\n}\n.checkout h3 {\n  color: black;\n  font-size: 14px;\n}\n.checkout ion-icon {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0FOO0FER0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0ROO0FESUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FES0k7RUFDRSxZQUFBO0FDSE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbiAgXG4gICAgaDYge1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICBcbiAgICBoMyB7XG4gICAgICBjb2xvcjogYmxhY2s7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICBcbiAgICBpb24taWNvbiB7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG4gICIsIi5jaGVja291dCBpb24taXRlbSB7XG4gIGNvbG9yOiBibHVlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY2hlY2tvdXQgaDYge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmNoZWNrb3V0IGgzIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2tvdXQgaW9uLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/checkout/checkout.page.ts ***!
    \*************************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppPagesCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // has 4 errors line no 50, 120, 122,125


    var CheckoutPage =
    /*#__PURE__*/
    function () {
      function CheckoutPage(users, _form, productServices, loadingCtrl, networkService, logger, location, route) {
        _classCallCheck(this, CheckoutPage);

        this.users = users;
        this._form = _form;
        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.location = location;
        this.route = route;
        this.optionsList = [];

        var _this = this;

        _this.checkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32)]),
            company: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32)]),
            address1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(250)]),
            address2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(250)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(250)]),
            zone_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)])
          })
        });

        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
          this.loader();
          this.productServices.getStates(function (data) {
            _this.logger.debug("checking Array" + JSON.stringify(data));

            _this.optionsList = data.data; // loading.dismiss();
          });
        } //here goes our navParams.
        // _this.email = _this.navParams.get("email");
        // _this.telephone = _this.navParams.get("telephone");
        // _this.address_id = _this.navParams.get("address_id");
        // _this.customer_id = _this.navParams.get("customer_id");
        // _this.firstname = _this.navParams.get("firstname");
        // _this.lastname = _this.navParams.get("lastname");
        // _this.company = _this.navParams.get("company");
        // _this.address_1 = _this.navParams.get("address_1");
        // _this.address_2 = _this.navParams.get("address_2");
        // _this.city = _this.navParams.get("city");
        // _this.myZone_id = _this.navParams.get("zone_id");
        // _this.name = _this.navParams.get("name");
        // _this.postcode = _this.navParams.get("postcode");

      } // loader function


      _createClass(CheckoutPage, [{
        key: "loader",
        value: function loader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "",
                      duration: 1000
                    });

                  case 2:
                    this.loading = _context.sent;
                    this.loading.present();

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
          this.logger.debug("name " + this.name);

          for (var i = 0; i < this.optionsList.length; i++) {
            if (this.name == this.optionsList[i].name) {
              this.myZone_id = this.optionsList[i].zone_id;
              this.logger.debug("checking zone_id in myZone_id " + this.myZone_id);
              this.logger.debug("checking the value in form ctrl " + this.checkForm.value.name.myZone_id);
              this.checkForm.value.name.myZone_id = this.myZone_id;
              this.logger.debug("checking the value in form ctrl after updating it " + this.checkForm.value.name.myZone_id);
            }
          }
        }
      }, {
        key: "checkOutAddress",
        value: function checkOutAddress() {
          var _this = this;

          var updateAdrressObj = {
            firstname: _this.firstname,
            lastname: _this.lastname,
            company: _this.company,
            address_1: _this.address_1,
            address_2: _this.address_2,
            city: _this.city,
            postcode: _this.postcode,
            zone_id: _this.myZone_id,
            address_id: _this.address_id
          };

          _this.logger.debug("updateAdrressObj " + JSON.stringify(updateAdrressObj));

          if (updateAdrressObj.address_id) {
            // code...
            _this.logger.info("invoking updateAddressobj");

            this.users.updateAddress(updateAdrressObj, function (result, data) {
              if (result == "1") {
                _this.logger.info("success"); // on success go back to the page


                _this.location.back();
              } else {
                _this.networkService.showErrorAlert();
              }
            });
          } else {
            _this.logger.info("invoking addAddressobj");

            this.users.addAddress(updateAdrressObj, function (result, data) {
              if (result == "1") {
                _this.logger.info("success");

                _this.location.back();
              } else {
                _this.networkService.showErrorAlert();
              }
            });
          }
        }
      }, {
        key: "back",
        value: function back() {
          this.location.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.route.queryParams.subscribe(function (param) {
            var data = param["data"];
          });
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__["Products"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-checkout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/pages/checkout/checkout.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_6__["Products"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]])], CheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-checkout-checkout-module-es5.js.map