function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-order-my-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyOrderMyOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n          </ion-buttons>\n        <ion-title>My Orders</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"my-order\">\n    <ion-card class=\"order1\" *ngFor=\"let order of myOrder\" (click)=\"orderdetail(order)\">\n        <ion-row>\n            <ion-col class=\"col1\"><p>Order Id:</p>\n            </ion-col>\n            <ion-col class=\"col2\"><p>{{order.order_id}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"col1\">\n                <p>Status:</p>\n            </ion-col>\n            <ion-col class=\"col2\">\n                <p>{{order.name}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"col1\">\n                <p>Amount:</p>\n            </ion-col>\n            <ion-col class=\"col2\">\n                <p>{{order.total | currency:'INR':true}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"col1\">\n                <p>Date:</p>\n            </ion-col>\n            <ion-col class=\"col2\">\n                <p>{{order.date_added}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <div *ngIf=\"myOrderCount\">\n        <ion-item class=\"myordernoproducts\">\n            <h1><b>No record found </b></h1>\n        </ion-item>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/my-order/my-order-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/my-order/my-order-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: MyOrderPageRoutingModule */

  /***/
  function srcAppPagesMyOrderMyOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrderPageRoutingModule", function () {
      return MyOrderPageRoutingModule;
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


    var _my_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-order.page */
    "./src/app/pages/my-order/my-order.page.ts");

    var routes = [{
      path: '',
      component: _my_order_page__WEBPACK_IMPORTED_MODULE_3__["MyOrderPage"]
    }];

    var MyOrderPageRoutingModule = function MyOrderPageRoutingModule() {
      _classCallCheck(this, MyOrderPageRoutingModule);
    };

    MyOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyOrderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-order/my-order.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/my-order/my-order.module.ts ***!
    \***************************************************/

  /*! exports provided: MyOrderPageModule */

  /***/
  function srcAppPagesMyOrderMyOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrderPageModule", function () {
      return MyOrderPageModule;
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


    var _my_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-order-routing.module */
    "./src/app/pages/my-order/my-order-routing.module.ts");
    /* harmony import */


    var _my_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-order.page */
    "./src/app/pages/my-order/my-order.page.ts");

    var MyOrderPageModule = function MyOrderPageModule() {
      _classCallCheck(this, MyOrderPageModule);
    };

    MyOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrderPageRoutingModule"]],
      declarations: [_my_order_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderPage"]]
    })], MyOrderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-order/my-order.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/my-order/my-order.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyOrderMyOrderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-order {\n  background-color: whiteSmoke;\n}\n.my-order ion-row {\n  width: 100%;\n  height: 100%;\n}\n.my-order .order1 {\n  background-color: white;\n  padding: 10px;\n}\n.my-order .order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n.my-order .order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n.my-order .order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.my-order .order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #979797;\n  color: #393838;\n}\n.my-order .myordernoproducts {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9teS1vcmRlci9teS1vcmRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL215LW9yZGVyL215LW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ047QURDSTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtBQ0NOO0FERUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQU47QURFSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNBTjtBREdJO0VBQ0UsZ0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LW9yZGVyL215LW9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1vcmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVTbW9rZTtcbiAgXG4gICAgaW9uLXJvdyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgLm9yZGVyMSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICBcbiAgICAub3JkZXIxIC5jb2wxICBiIHtcbiAgICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMDtcbiAgICAgIGNvbG9yOiAjMzkzODM4O1xuICAgIH1cbiAgICAub3JkZXIxIC5jb2wyICBiIHtcbiAgICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBjb2xvcjogIzM5MzgzODtcbiAgICB9XG4gICAgLm9yZGVyMSAuY29sMSAgcCB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBjb2xvcjogIzM5MzgzODtcbiAgICB9XG4gICAgLm9yZGVyMSAuY29sMiAgcCB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgICBjb2xvcjogIzM5MzgzODtcbiAgICB9XG4gIFxuICAgIC5teW9yZGVybm9wcm9kdWN0cyB7XG4gICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgIH1cbiAgfVxuICAiLCIubXktb3JkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVNtb2tlO1xufVxuLm15LW9yZGVyIGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm15LW9yZGVyIC5vcmRlcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5teS1vcmRlciAub3JkZXIxIC5jb2wxIGIge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ubXktb3JkZXIgLm9yZGVyMSAuY29sMiBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ubXktb3JkZXIgLm9yZGVyMSAuY29sMSBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzM5MzgzODtcbn1cbi5teS1vcmRlciAub3JkZXIxIC5jb2wyIHAge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBjb2xvcjogIzM5MzgzODtcbn1cbi5teS1vcmRlciAubXlvcmRlcm5vcHJvZHVjdHMge1xuICBjb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/my-order/my-order.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/my-order/my-order.page.ts ***!
    \*************************************************/

  /*! exports provided: MyOrderPage */

  /***/
  function srcAppPagesMyOrderMyOrderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyOrderPage", function () {
      return MyOrderPage;
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
    "./node_modules/@angular/router/fesm2015/router.js");

    var MyOrderPage =
    /*#__PURE__*/
    function () {
      function MyOrderPage(navCtrl, productServices, loadingCtrl, networkService, logger, router) {
        _classCallCheck(this, MyOrderPage);

        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.myOrder = [];
        this.myOrderCount = false;

        var _this = this;

        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
          this.loader();
          _this.myOrder = [];
          this.productServices.getOrders(function (data) {
            _this.logger.debug("checking my order Details" + data);

            if (data.status == 1) {
              _this.myOrder = data.data.orders;

              _this.logger.debug("myorder " + JSON.stringify(_this.myOrder));
            } else {
              _this.myOrderCount = true;
            }
          });
        }
      }

      _createClass(MyOrderPage, [{
        key: "orderdetail",
        value: function orderdetail(order) {
          // var _this = this;
          // _this.logger.debug("order " + JSON.stringify(order));
          // console.log("orderdata"+ JSON.stringify(order));
          var navigationExatras = {
            queryParams: {
              data: JSON.stringify(order)
            }
          };
          this.router.navigate(["/order-details"], navigationExatras);
        } // loader

      }, {
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

      return MyOrderPage;
    }();

    MyOrderPage.ctorParameters = function () {
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

    MyOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-my-order",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-order.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-order.page.scss */
      "./src/app/pages/my-order/my-order.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"], _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], MyOrderPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-my-order-my-order-module-es5.js.map