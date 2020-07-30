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


    __webpack_exports__["default"] = "<!--\r\n  Generated template for the OrderDetailsPage page.\r\n\r\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\r\n  Ionic pages and navigation.\r\n-->\r\n<ion-header>\r\n  <ion-nav color=\"primary\">\r\n      <ion-title>Payment Details</ion-title>\r\n  </ion-nav>\r\n</ion-header>\r\n\r\n<ion-content class=\"order-details\">\r\n\r\n    <div class=\"order\">\r\n        <ion-card class=\"order1\">\r\n            <ion-row>\r\n                <ion-col class=\"col1\"><b>Order Id:</b>\r\n                </ion-col>\r\n\r\n                <ion-col class=\"col2\">\r\n                    <b> {{order_id}} </b>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Status:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{status}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Amount:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{twentyfiveamount | currency:'INR':true}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Order Date:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{date_added}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"payment_method == 'COD'\">\r\n                <ion-col class=\"col1\">\r\n                    <p>Payment Type:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{payment_method}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card>\r\n    </div>\r\n    <div class=\"paymentdetails\">\r\n        <ion-card class=\"order1\" *ngIf=\"twentyfiveamount != 0\">\r\n            <ion-label>\r\n                <h2><b> Payment Detail:</b></h2>\r\n            </ion-label>\r\n            <ion-row>\r\n                <ion-col class=\"col1\"><b>TransactionID:</b>\r\n                </ion-col>\r\n\r\n                <ion-col class=\"col2\">\r\n                    <b> {{twentyfivetransaction_id}} </b>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"payment_method != 'COD'\">\r\n                <ion-col class=\"col1\">\r\n                    <p>Payment Date:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{date_twentyfive}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Amount:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{twentyfiveamount | currency:'INR':true}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Payment Method:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{payment_method}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card>\r\n    </div>\r\n    <div>\r\n        <ion-card class=\"order1\" *ngIf=\"seventyfiveamount != 0\">\r\n            <ion-label>\r\n                <h2><b>75% Payment Detail:</b></h2>\r\n            </ion-label>\r\n            <ion-row>\r\n                <ion-col class=\"col1\"><b>Transaction ID:</b>\r\n                </ion-col>\r\n\r\n                <ion-col class=\"col2\">\r\n                    <b> {{seventyfivetransaction_id}} </b>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Payment Date:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{date}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Amount:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{seventyfiveamount | currency:'INR':true}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Payment Method:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p> {{seventyfivepayment_method}} </p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card>\r\n    </div>\r\n\r\n</ion-content>";
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


    __webpack_exports__["default"] = ".order1 {\n  background-color: white;\n}\n\n.order ion-row ion-col {\n  border: 1px solid #edebeb !important;\n}\n\n.order {\n  padding-bottom: 1px;\n}\n\n.order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  line-height: 1;\n  color: #393838;\n}\n\n.order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n\n.order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n\n.order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n\n.order1 ion-label {\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC1kZXRhaWxzL0Q6XFxTZWVtYVxcUHJvamVjdFxcaXZpcG5pL3NyY1xcYXBwXFxwYWdlc1xccGF5bWVudC1kZXRhaWxzXFxwYXltZW50LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50LWRldGFpbHMvcGF5bWVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxvQ0FBQTtBQ0VKOztBREFFO0VBQ0UsbUJBQUE7QUNHSjs7QURERTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREZFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpFO0VBQ0UsaUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtZGV0YWlscy9wYXltZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVyMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLm9yZGVyIGlvbi1yb3cgaW9uLWNvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5vcmRlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gIH1cclxuICAub3JkZXIxIC5jb2wxICBwIHtcclxuICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgIGNvbG9yOiAjMzkzODM4O1xyXG4gIH1cclxuICAub3JkZXIxIC5jb2wyICBwIHtcclxuICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzM5MzgzODtcclxuICB9XHJcbiAgXHJcbiAgLm9yZGVyMSAuY29sMSAgYiB7XHJcbiAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgICBjb2xvcjogIzM5MzgzODtcclxuICB9XHJcbiAgLm9yZGVyMSAuY29sMiAgYiB7XHJcbiAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMzOTM4Mzg7XHJcbiAgfVxyXG4gIC5vcmRlcjEgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIH1cclxuICAiLCIub3JkZXIxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5vcmRlciBpb24tcm93IGlvbi1jb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlYmViICFpbXBvcnRhbnQ7XG59XG5cbi5vcmRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi5vcmRlcjEgLmNvbDEgcCB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuXG4ub3JkZXIxIC5jb2wyIHAge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuXG4ub3JkZXIxIC5jb2wxIGIge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG5cbi5vcmRlcjEgLmNvbDIgYiB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG5cbi5vcmRlcjEgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59Il19 */";
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