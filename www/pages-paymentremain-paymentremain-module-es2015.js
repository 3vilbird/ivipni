(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-paymentremain-paymentremain-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentremain/paymentremain.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentremain/paymentremain.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n  Generated template for the MyOrderPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-nav color=\"primary\">\n      <ion-title>Payments</ion-title>\n  </ion-nav>\n</ion-header>\n\n<ion-content class=\"my-order\">\n  <ion-card class=\"order1\" *ngFor=\"let amounts of amount \" (click)=\"paymentdetail(amounts)\">\n      <ion-row>\n          <ion-col class=\"col1\"><b>Order Id:</b>\n          </ion-col>\n          <ion-col class=\"col2\"><b>{{amounts.order_id}}</b>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col1\">\n              <p>Amount Paid:</p>\n          </ion-col>\n          <ion-col class=\"col2\">\n              <p>{{amounts.twentyfiveamount|currency:'INR':true}}</p>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col1\">\n              <p>Amount Due:</p>\n          </ion-col>\n          <ion-col class=\"col2\">\n              <p>{{amounts.amount-amounts.twentyfiveamount|currency:'INR':true}}</p>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col class=\"col1\">\n              <p>Order Date:</p>\n          </ion-col>\n          <ion-col class=\"col2\">\n              <p>{{amounts.date_added}}</p>\n          </ion-col>\n      </ion-row>\n  </ion-card>\n\n  <div *ngIf=\"amountRemainCount\">\n      <h1 class=\"paymentremain\"><b>No record found</b></h1>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/paymentremain/paymentremain-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/paymentremain/paymentremain-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: PaymentremainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentremainPageRoutingModule", function() { return PaymentremainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _paymentremain_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentremain.page */ "./src/app/pages/paymentremain/paymentremain.page.ts");




const routes = [
    {
        path: '',
        component: _paymentremain_page__WEBPACK_IMPORTED_MODULE_3__["PaymentremainPage"]
    }
];
let PaymentremainPageRoutingModule = class PaymentremainPageRoutingModule {
};
PaymentremainPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentremainPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/paymentremain/paymentremain.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/paymentremain/paymentremain.module.ts ***!
  \*************************************************************/
/*! exports provided: PaymentremainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentremainPageModule", function() { return PaymentremainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _paymentremain_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paymentremain-routing.module */ "./src/app/pages/paymentremain/paymentremain-routing.module.ts");
/* harmony import */ var _paymentremain_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentremain.page */ "./src/app/pages/paymentremain/paymentremain.page.ts");







let PaymentremainPageModule = class PaymentremainPageModule {
};
PaymentremainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _paymentremain_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentremainPageRoutingModule"]
        ],
        declarations: [_paymentremain_page__WEBPACK_IMPORTED_MODULE_6__["PaymentremainPage"]]
    })
], PaymentremainPageModule);



/***/ }),

/***/ "./src/app/pages/paymentremain/paymentremain.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/paymentremain/paymentremain.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".paymentremain {\n  background-color: whiteSmoke;\n}\n.paymentremain ion-row {\n  width: 100%;\n  height: 100%;\n}\n.paymentremain .order1 {\n  background-color: white;\n  padding: 3px;\n}\n.paymentremain .order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.3rem;\n  font-family: arial;\n  line-height: 1;\n  color: #393838;\n}\n.paymentremain .order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.3rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #979797;\n}\n.paymentremain .order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.3rem;\n  line-height: 1;\n  color: #393838;\n}\n.paymentremain .order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.3rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n.paymentremain {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9wYXltZW50cmVtYWluL3BheW1lbnRyZW1haW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50cmVtYWluL3BheW1lbnRyZW1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBRENJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDTjtBRENJO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDQ047QURFSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQU47QURFSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQU47QURFSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0U7RUFDRSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudHJlbWFpbi9wYXltZW50cmVtYWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXltZW50cmVtYWluIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVNtb2tlO1xuICBcbiAgICBpb24tcm93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICAub3JkZXIxIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cbiAgXG4gICAgLm9yZGVyMSAuY29sMSAgcCB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XG4gICAgICBjb2xvcjogIzM5MzgzODtcbiAgICB9XG4gICAgLm9yZGVyMSAuY29sMiAgcCB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgfVxuICAgIC5vcmRlcjEgLmNvbDEgIGIge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4wO1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICAgIC5vcmRlcjEgLmNvbDIgIGIge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGNvbG9yOiAjMzkzODM4O1xuICAgIH1cbiAgfVxuICAucGF5bWVudHJlbWFpbiB7XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgfVxuICAiLCIucGF5bWVudHJlbWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlU21va2U7XG59XG4ucGF5bWVudHJlbWFpbiBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wYXltZW50cmVtYWluIC5vcmRlcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4O1xufVxuLnBheW1lbnRyZW1haW4gLm9yZGVyMSAuY29sMSBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ucGF5bWVudHJlbWFpbiAub3JkZXIxIC5jb2wyIHAge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjOTc5Nzk3O1xufVxuLnBheW1lbnRyZW1haW4gLm9yZGVyMSAuY29sMSBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuLnBheW1lbnRyZW1haW4gLm9yZGVyMSAuY29sMiBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzM5MzgzODtcbn1cblxuLnBheW1lbnRyZW1haW4ge1xuICBjb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/paymentremain/paymentremain.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/paymentremain/paymentremain.page.ts ***!
  \***********************************************************/
/*! exports provided: PaymentremainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentremainPage", function() { return PaymentremainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear






let PaymentremainPage = class PaymentremainPage {
    constructor(navCtrl, productServices, loadingCtrl, networkService, logger, router) {
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.router = router;
        this.amount = [];
        this.amountRemainCount = false;
        var _this = this;
        if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
        }
        else {
            // loading.present();
            this.loader();
            _this.amount = [];
            this.productServices.getamountremain(function (data) {
                _this.logger.debug("checking  Details" + JSON.stringify(data));
                if (data.status == 1) {
                    _this.logger.debug("checking  Details" + JSON.stringify(data));
                    _this.amount = data.remain_amount;
                    _this.amountremain =
                        data.remain_amount.amount - data.remain_amount.twentyfiveamount;
                    _this.logger.debug("payment " + JSON.stringify(_this.amount));
                    // loading.dismiss();
                }
                else {
                    _this.amountRemainCount = true;
                    _this.amount = [];
                    // loading.dismiss();
                }
            });
        }
    }
    loader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: ``,
                duration: 1000,
            });
            this.loading.present();
        });
    }
    paymentdetail(amounts) {
        var _this = this;
        _this.logger.debug("paymentremain " + JSON.stringify(amounts));
        let navagatoinExtars = {
            queryParams: {
                data: JSON.stringify(this.amount),
            },
        };
        // _this.navCtrl.push(PaymentremaindetailsPage, amounts);
        _this.router.navigate(["/paymentremaindetails"], navagatoinExtars);
    }
    ngOnInit() { }
};
PaymentremainPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
PaymentremainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-paymentremain",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paymentremain.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/paymentremain/paymentremain.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paymentremain.page.scss */ "./src/app/pages/paymentremain/paymentremain.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], PaymentremainPage);



/***/ })

}]);
//# sourceMappingURL=pages-paymentremain-paymentremain-module-es2015.js.map