function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-details-payment-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-details/payment-details.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-details/payment-details.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentDetailsPaymentDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--\n  Generated template for the OrderDetailsPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-nav color=\"primary\">\n      <ion-title>Payment Details</ion-title>\n  </ion-nav>\n</ion-header>\n\n<ion-content class=\"order-details\">\n\n    <div class=\"order\">\n        <ion-card class=\"order1\">\n            <ion-row>\n                <ion-col class=\"col1\"><b>Order Id:</b>\n                </ion-col>\n\n                <ion-col class=\"col2\">\n                    <b> {{order_id}} </b>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Status:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{status}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Amount:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{twentyfiveamount | currency:'INR':true}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Order Date:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{date_added}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"payment_method == 'COD'\">\n                <ion-col class=\"col1\">\n                    <p>Payment Type:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{payment_method}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n    <div class=\"paymentdetails\">\n        <ion-card class=\"order1\" *ngIf=\"twentyfiveamount != 0\">\n            <ion-label>\n                <h2><b> Payment Detail:</b></h2>\n            </ion-label>\n            <ion-row>\n                <ion-col class=\"col1\"><b>TransactionID:</b>\n                </ion-col>\n\n                <ion-col class=\"col2\">\n                    <b> {{twentyfivetransaction_id}} </b>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"payment_method != 'COD'\">\n                <ion-col class=\"col1\">\n                    <p>Payment Date:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{date_twentyfive}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Amount:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{twentyfiveamount | currency:'INR':true}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Payment Method:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{payment_method}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n    <div>\n        <ion-card class=\"order1\" *ngIf=\"seventyfiveamount != 0\">\n            <ion-label>\n                <h2><b>75% Payment Detail:</b></h2>\n            </ion-label>\n            <ion-row>\n                <ion-col class=\"col1\"><b>Transaction ID:</b>\n                </ion-col>\n\n                <ion-col class=\"col2\">\n                    <b> {{seventyfivetransaction_id}} </b>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Payment Date:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{date}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Amount:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{seventyfiveamount | currency:'INR':true}} </p>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col class=\"col1\">\n                    <p>Payment Method:</p>\n                </ion-col>\n                <ion-col class=\"col2\">\n                    <p> {{seventyfivepayment_method}} </p>\n                </ion-col>\n            </ion-row>\n        </ion-card>\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/payment-details/payment-details-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/payment-details/payment-details-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: PaymentDetailsPageRoutingModule */

  /***/
  function srcAppPagesPaymentDetailsPaymentDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageRoutingModule", function () {
      return PaymentDetailsPageRoutingModule;
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


    var _payment_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment-details.page */
    "./src/app/pages/payment-details/payment-details.page.ts");

    var routes = [{
      path: '',
      component: _payment_details_page__WEBPACK_IMPORTED_MODULE_3__["PaymentDetailsPage"]
    }];

    var PaymentDetailsPageRoutingModule = function PaymentDetailsPageRoutingModule() {
      _classCallCheck(this, PaymentDetailsPageRoutingModule);
    };

    PaymentDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payment-details/payment-details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/payment-details/payment-details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: PaymentDetailsPageModule */

  /***/
  function srcAppPagesPaymentDetailsPaymentDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDetailsPageModule", function () {
      return PaymentDetailsPageModule;
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


    var _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-details-routing.module */
    "./src/app/pages/payment-details/payment-details-routing.module.ts");
    /* harmony import */


    var _payment_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment-details.page */
    "./src/app/pages/payment-details/payment-details.page.ts");

    var PaymentDetailsPageModule = function PaymentDetailsPageModule() {
      _classCallCheck(this, PaymentDetailsPageModule);
    };

    PaymentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentDetailsPageRoutingModule"]],
      declarations: [_payment_details_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailsPage"]]
    })], PaymentDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payment-details/payment-details.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/payment-details/payment-details.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentDetailsPaymentDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".order1 {\n  background-color: white;\n}\n\n.order ion-row ion-col {\n  border: 1px solid #edebeb !important;\n}\n\n.order {\n  padding-bottom: 1px;\n}\n\n.order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  line-height: 1;\n  color: #393838;\n}\n\n.order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n\n.order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n\n.order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n\n.order1 ion-label {\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC1kZXRhaWxzL3BheW1lbnQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBRENFO0VBQ0Usb0NBQUE7QUNFSjs7QURBRTtFQUNFLG1CQUFBO0FDR0o7O0FEREU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNLSjs7QURGRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNSjs7QURKRTtFQUNFLGlCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcmRlcjEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIC5vcmRlciBpb24tcm93IGlvbi1jb2wge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGViZWIgIWltcG9ydGFudDtcbiAgfVxuICAub3JkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIH1cbiAgLm9yZGVyMSAuY29sMSAgcCB7XG4gICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICBsaW5lLWhlaWdodDogMS4wO1xuICAgIGNvbG9yOiAjMzkzODM4O1xuICB9XG4gIC5vcmRlcjEgLmNvbDIgIHAge1xuICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjMzkzODM4O1xuICB9XG4gIFxuICAub3JkZXIxIC5jb2wxICBiIHtcbiAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcbiAgICBjb2xvcjogIzM5MzgzODtcbiAgfVxuICAub3JkZXIxIC5jb2wyICBiIHtcbiAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzM5MzgzODtcbiAgfVxuICAub3JkZXIxIGlvbi1sYWJlbCB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cbiAgIiwiLm9yZGVyMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ub3JkZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VkZWJlYiAhaW1wb3J0YW50O1xufVxuXG4ub3JkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMXB4O1xufVxuXG4ub3JkZXIxIC5jb2wxIHAge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzM5MzgzODtcbn1cblxuLm9yZGVyMSAuY29sMiBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzM5MzgzODtcbn1cblxuLm9yZGVyMSAuY29sMSBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuXG4ub3JkZXIxIC5jb2wyIGIge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuXG4ub3JkZXIxIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/payment-details/payment-details.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/payment-details/payment-details.page.ts ***!
    \***************************************************************/

  /*! exports provided: PaymentDetailsPage */

  /***/
  function srcAppPagesPaymentDetailsPaymentDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentDetailsPage", function () {
      return PaymentDetailsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear


    var PaymentDetailsPage =
    /*#__PURE__*/
    function () {
      function PaymentDetailsPage(navCtrl, users, toastCtrl, route) {
        _classCallCheck(this, PaymentDetailsPage);

        this.navCtrl = navCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.myOrderDeliver = [];
      }

      _createClass(PaymentDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (param) {
            var paymentDetails = param["data"];
            _this.order_id = paymentDetails.order_id;
            _this.date_added = paymentDetails.date_added;
            _this.total = paymentDetails.total;
            _this.status = paymentDetails.status;
            _this.twentyfiveamount = paymentDetails.twentyfiveamount;
            _this.payment_method = paymentDetails.payment_method;
            _this.twentyfivetransaction_id = paymentDetails.twentyfivetransaction_id;
            _this.seventyfiveamount = paymentDetails.seventyfiveamount;
            _this.seventyfivetransaction_id = paymentDetails.seventyfivetransaction_id;
            _this.seventyfivepayment_method = paymentDetails.seventyfivepayment_method;
            _this.date_twentyfive = paymentDetails.date_twentyfive;
            _this.date = paymentDetails.date;
          });
        }
      }]);

      return PaymentDetailsPage;
    }();

    PaymentDetailsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    PaymentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-payment-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-details/payment-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment-details.page.scss */
      "./src/app/pages/payment-details/payment-details.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], PaymentDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payment-details-payment-details-module-es5.js.map