function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-info-seller-info-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info/seller-info.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info/seller-info.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSellerInfoSellerInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Seller Info</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content class=\"my-order\">\n    <ion-card class=\"order1\" *ngFor=\"let seller of sellerinfo\" (click)=\"orderdetail(seller)\">\n        <ion-card-content>\n            <ion-row>\n                <ion-col class=\"col1\"><b>Seller Name:</b>\n                </ion-col>\n                <ion-col class=\"col2\"><b>{{seller.firstname}} {{seller.lastname}}</b>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Company Name:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p>{{seller.company_name}}</p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Phone Number</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p>{{seller.phonenumber}}</p>\n                </ion-col>\n            </ion-row>\n        </ion-card-content>\n    </ion-card>\n    <div *ngIf=\"myOrderCount\">\n        <ion-item class=\"myordernoproducts\">\n            <h1><b>No record found </b></h1>\n        </ion-item>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/seller-info/seller-info-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/seller-info/seller-info-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SellerInfoPageRoutingModule */

  /***/
  function srcAppPagesSellerInfoSellerInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerInfoPageRoutingModule", function () {
      return SellerInfoPageRoutingModule;
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


    var _seller_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seller-info.page */
    "./src/app/pages/seller-info/seller-info.page.ts");

    var routes = [{
      path: '',
      component: _seller_info_page__WEBPACK_IMPORTED_MODULE_3__["SellerInfoPage"]
    }];

    var SellerInfoPageRoutingModule = function SellerInfoPageRoutingModule() {
      _classCallCheck(this, SellerInfoPageRoutingModule);
    };

    SellerInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SellerInfoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/seller-info/seller-info.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/seller-info/seller-info.module.ts ***!
    \*********************************************************/

  /*! exports provided: SellerInfoPageModule */

  /***/
  function srcAppPagesSellerInfoSellerInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerInfoPageModule", function () {
      return SellerInfoPageModule;
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


    var _seller_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./seller-info-routing.module */
    "./src/app/pages/seller-info/seller-info-routing.module.ts");
    /* harmony import */


    var _seller_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./seller-info.page */
    "./src/app/pages/seller-info/seller-info.page.ts");

    var SellerInfoPageModule = function SellerInfoPageModule() {
      _classCallCheck(this, SellerInfoPageModule);
    };

    SellerInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _seller_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerInfoPageRoutingModule"]],
      declarations: [_seller_info_page__WEBPACK_IMPORTED_MODULE_6__["SellerInfoPage"]]
    })], SellerInfoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/seller-info/seller-info.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/seller-info/seller-info.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSellerInfoSellerInfoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".seller-info {\n  background-color: whiteSmoke;\n}\n.seller-info ion-row {\n  width: 100%;\n  height: 100%;\n}\n.seller-info .order1 {\n  background-color: white;\n  padding: 10px;\n}\n.seller-info .order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  line-height: 1.2;\n  color: #393838;\n}\n.seller-info .order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #393838;\n}\n.seller-info .order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.seller-info .order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #979797;\n  color: #393838;\n}\n.seller-info .myordernoproducts {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8vc2VsbGVyLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby9zZWxsZXItaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNDTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FER0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNETjtBREdJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRE47QURHSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ROO0FESUk7RUFDRSxnQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8vc2VsbGVyLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGxlci1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVNtb2tlO1xuICBcbiAgICBpb24tcm93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAub3JkZXIxIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gIFxuICAgIC5vcmRlcjEgLmNvbDEgIGIge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAvL2ZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBjb2xvcjogIzM5MzgzODtcbiAgICB9XG4gICAgLm9yZGVyMSAuY29sMiAgYiB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICAgIC5vcmRlcjEgLmNvbDEgIHAge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICAgIC5vcmRlcjEgLmNvbDIgIHAge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICBcbiAgICAubXlvcmRlcm5vcHJvZHVjdHMge1xuICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB9XG4gIH1cbiAgIiwiLnNlbGxlci1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVTbW9rZTtcbn1cbi5zZWxsZXItaW5mbyBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zZWxsZXItaW5mbyAub3JkZXIxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc2VsbGVyLWluZm8gLm9yZGVyMSAuY29sMSBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4uc2VsbGVyLWluZm8gLm9yZGVyMSAuY29sMiBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4uc2VsbGVyLWluZm8gLm9yZGVyMSAuY29sMSBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzM5MzgzODtcbn1cbi5zZWxsZXItaW5mbyAub3JkZXIxIC5jb2wyIHAge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBjb2xvcjogIzM5MzgzODtcbn1cbi5zZWxsZXItaW5mbyAubXlvcmRlcm5vcHJvZHVjdHMge1xuICBjb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/seller-info/seller-info.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/seller-info/seller-info.page.ts ***!
    \*******************************************************/

  /*! exports provided: SellerInfoPage */

  /***/
  function srcAppPagesSellerInfoSellerInfoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SellerInfoPage", function () {
      return SellerInfoPage;
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


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear
    // import { SellerInfoDetailsPage } from "../seller-info-details/seller-info-details.page";


    var SellerInfoPage =
    /*#__PURE__*/
    function () {
      function SellerInfoPage(navCtrl, productServices, loadingCtrl, networkService, logger, router) {
        _classCallCheck(this, SellerInfoPage);

        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.sellerinfo = [];

        var _this = this;

        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
          // loading.present();
          this.loder();
          _this.sellerinfo = [];

          _this.productServices.getSellerDetails(function (data) {
            _this.logger.debug("checking my order Details" + data);

            if (data.status == 1) {
              _this.sellerinfo = data.seller_details;

              _this.logger.debug("myorder " + JSON.stringify(_this.sellerinfo));
            } else {// loading.dismiss();
            }
          });
        }
      } // todo fix this loading


      _createClass(SellerInfoPage, [{
        key: "loder",
        value: function loder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "",
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "orderdetail",
        value: function orderdetail(seller) {
          var _this = this;

          _this.logger.debug("seller info " + JSON.stringify(seller)); // _this.navCtrl.push(SellerInfoDetailsPage, seller);


          var navigationExtras = {
            queryParams: {
              data: JSON.stringify(seller)
            }
          };
          this.router.navigate(["/seller-info-details"], navigationExtras);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SellerInfoPage;
    }();

    SellerInfoPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }, {
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    SellerInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-seller-info",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./seller-info.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info/seller-info.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seller-info.page.scss */
      "./src/app/pages/seller-info/seller-info.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], SellerInfoPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-seller-info-seller-info-module-es5.js.map