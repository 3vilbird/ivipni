function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-profile-my-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyProfileMyProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"my-profile\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Personal Details</ion-card-title>\n    </ion-card-header>\n    <ion-list *ngFor=\"let user of userDetails\">\n      <ion-item>\n        <ion-note slot=\"start\">First Name</ion-note>\n        <ion-text>{{user.firstname}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Last Name</ion-note>\n        <ion-text>{{user.lastname}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">DOB</ion-note>\n        <ion-text>{{user.dob}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Email</ion-note>\n        <ion-text>{{user.email}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Phone Number</ion-note>\n        <ion-text>{{user.telephone}}</ion-text>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Company Details</ion-card-title>\n    </ion-card-header>\n    <ion-list *ngFor=\"let user of userDetails\">\n      <ion-item>\n        <ion-note slot=\"start\">Company Name</ion-note>\n        <ion-text>{{user.company_name}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Incorporation Date</ion-note>\n        <ion-text>{{user.companyformationday}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">GST Number</ion-note>\n        <ion-text>{{user.gst_number}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Address Line1</ion-note>\n        <ion-text>{{user.address_1}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Address Line2</ion-note>\n        <ion-text>{{user.address_2}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">City</ion-note>\n        <ion-text>{{user.city}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">State</ion-note>\n        <ion-text>{{user.name}}</ion-text>\n      </ion-item>\n      <ion-item>\n        <ion-note slot=\"start\">Pincode</ion-note>\n        <ion-text>{{user.postcode}}</ion-text>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/my-profile/my-profile-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/my-profile/my-profile-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MyProfilePageRoutingModule */

  /***/
  function srcAppPagesMyProfileMyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageRoutingModule", function () {
      return MyProfilePageRoutingModule;
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


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/pages/my-profile/my-profile.page.ts");

    var routes = [{
      path: '',
      component: _my_profile_page__WEBPACK_IMPORTED_MODULE_3__["MyProfilePage"]
    }];

    var MyProfilePageRoutingModule = function MyProfilePageRoutingModule() {
      _classCallCheck(this, MyProfilePageRoutingModule);
    };

    MyProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-profile/my-profile.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-profile/my-profile.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyProfilePageModule */

  /***/
  function srcAppPagesMyProfileMyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePageModule", function () {
      return MyProfilePageModule;
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


    var _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-profile-routing.module */
    "./src/app/pages/my-profile/my-profile-routing.module.ts");
    /* harmony import */


    var _my_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-profile.page */
    "./src/app/pages/my-profile/my-profile.page.ts");

    var MyProfilePageModule = function MyProfilePageModule() {
      _classCallCheck(this, MyProfilePageModule);
    };

    MyProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyProfilePageRoutingModule"]],
      declarations: [_my_profile_page__WEBPACK_IMPORTED_MODULE_6__["MyProfilePage"]]
    })], MyProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-profile/my-profile.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-profile/my-profile.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyProfileMyProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-profile {\n  background-color: WhiteSmoke;\n}\n.my-profile ion-list {\n  padding: 8px;\n}\n.my-profile ion-row {\n  border: 1px solid whitesmoke;\n  padding: 3px;\n  font-size: 1.4rem;\n}\n.my-profile ion-col[width-40] {\n  float: left;\n  padding: 5px;\n  color: #85888a;\n}\n.my-profile ion-col[width-60] {\n  float: left;\n  padding: 5px;\n}\n.my-profile ion-col[width-60] p {\n  white-space: normal;\n  word-break: break-all;\n}\n.my-profile .item-color {\n  background-color: WhiteSmoke;\n  color: black;\n  text-align: center;\n  height: 5px;\n  font-size: 1.7rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9teS1wcm9maWxlL215LXByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1wcm9maWxlL215LXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBd0JJLDRCQUFBO0FDdEJKO0FEREk7RUFDRSxZQUFBO0FDR047QURESTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDR047QURBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VOO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VOO0FEQ0k7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FDQ047QURHSTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LXByb2ZpbGUvbXktcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcHJvZmlsZSB7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlc21va2U7XG4gICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICB9XG4gIFxuICAgIGlvbi1jb2xbd2lkdGgtNDBdIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgY29sb3I6ICM4NTg4OGE7XG4gICAgfVxuICAgIGlvbi1jb2xbd2lkdGgtNjBdIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgXG4gICAgaW9uLWNvbFt3aWR0aC02MF0gcCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICBcbiAgICAuaXRlbS1jb2xvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICAiLCIubXktcHJvZmlsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4ubXktcHJvZmlsZSBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5teS1wcm9maWxlIGlvbi1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLm15LXByb2ZpbGUgaW9uLWNvbFt3aWR0aC00MF0ge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzg1ODg4YTtcbn1cbi5teS1wcm9maWxlIGlvbi1jb2xbd2lkdGgtNjBdIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5teS1wcm9maWxlIGlvbi1jb2xbd2lkdGgtNjBdIHAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4ubXktcHJvZmlsZSAuaXRlbS1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/my-profile/my-profile.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/my-profile/my-profile.page.ts ***!
    \*****************************************************/

  /*! exports provided: MyProfilePage */

  /***/
  function srcAppPagesMyProfileMyProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfilePage", function () {
      return MyProfilePage;
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


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");

    var MyProfilePage =
    /*#__PURE__*/
    function () {
      function MyProfilePage(productServices, loadingCtrl, networkService, logger) {
        _classCallCheck(this, MyProfilePage);

        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.userDetails = [];

        var _this = this;

        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
          this.loader();
          _this.userDetails = [];
          this.productServices.getUserDetails(function (data) {
            _this.logger.debug("checking my user Details" + data);

            _this.userDetails.push(data.data);

            _this.logger.debug("userDetails " + _this.userDetails);
          });
        }
      }

      _createClass(MyProfilePage, [{
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
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MyProfilePage;
    }();

    MyProfilePage.ctorParameters = function () {
      return [{
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }];
    };

    MyProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-my-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-profile/my-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-profile.page.scss */
      "./src/app/pages/my-profile/my-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]])], MyProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-my-profile-my-profile-module-es5.js.map