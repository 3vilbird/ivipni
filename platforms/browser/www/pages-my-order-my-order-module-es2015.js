(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-order-my-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n          </ion-buttons>\n        <ion-title>My Orders</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"my-order\">\n    <ion-card class=\"order1\" *ngFor=\"let order of myOrder\" (click)=\"orderdetail(order)\">\n        <ion-row>\n            <ion-col class=\"col1\"><p>Order Id:</p>\n            </ion-col>\n            <ion-col class=\"col2\"><p>{{order.order_id}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"col1\">\n                <p>Status:</p>\n            </ion-col>\n            <ion-col class=\"col2\">\n                <p>{{order.name}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"col1\">\n                <p>Amount:</p>\n            </ion-col>\n            <ion-col class=\"col2\">\n                <p>{{order.total | currency:'INR':true}}</p>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col class=\"col1\">\n                <p>Date:</p>\n            </ion-col>\n            <ion-col class=\"col2\">\n                <p>{{order.date_added}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-card>\n\n    <div *ngIf=\"myOrderCount\">\n        <ion-item class=\"myordernoproducts\">\n            <h1><b>No record found </b></h1>\n        </ion-item>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/my-order/my-order-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/my-order/my-order-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MyOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPageRoutingModule", function() { return MyOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-order.page */ "./src/app/pages/my-order/my-order.page.ts");




const routes = [
    {
        path: '',
        component: _my_order_page__WEBPACK_IMPORTED_MODULE_3__["MyOrderPage"]
    }
];
let MyOrderPageRoutingModule = class MyOrderPageRoutingModule {
};
MyOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-order/my-order.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-order/my-order.module.ts ***!
  \***************************************************/
/*! exports provided: MyOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPageModule", function() { return MyOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-order-routing.module */ "./src/app/pages/my-order/my-order-routing.module.ts");
/* harmony import */ var _my_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-order.page */ "./src/app/pages/my-order/my-order.page.ts");







let MyOrderPageModule = class MyOrderPageModule {
};
MyOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrderPageRoutingModule"]
        ],
        declarations: [_my_order_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderPage"]]
    })
], MyOrderPageModule);



/***/ }),

/***/ "./src/app/pages/my-order/my-order.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/my-order/my-order.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-order {\n  background-color: whiteSmoke;\n}\n.my-order ion-row {\n  width: 100%;\n  height: 100%;\n}\n.my-order .order1 {\n  background-color: white;\n  padding: 10px;\n}\n.my-order .order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n.my-order .order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n.my-order .order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.my-order .order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #979797;\n  color: #393838;\n}\n.my-order .myordernoproducts {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvbXktb3JkZXIvbXktb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1vcmRlci9teS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNDTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQU47QURFSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQU47QURHSTtFQUNFLGdCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1vcmRlci9teS1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktb3JkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlU21va2U7XG4gIFxuICAgIGlvbi1yb3cge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5vcmRlcjEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgXG4gICAgLm9yZGVyMSAuY29sMSAgYiB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XG4gICAgICBjb2xvcjogIzM5MzgzODtcbiAgICB9XG4gICAgLm9yZGVyMSAuY29sMiAgYiB7XG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICAgIC5vcmRlcjEgLmNvbDEgIHAge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICAgIC5vcmRlcjEgLmNvbDIgIHAge1xuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgICAgY29sb3I6ICMzOTM4Mzg7XG4gICAgfVxuICBcbiAgICAubXlvcmRlcm5vcHJvZHVjdHMge1xuICAgICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB9XG4gIH1cbiAgIiwiLm15LW9yZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVTbW9rZTtcbn1cbi5teS1vcmRlciBpb24tcm93IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5teS1vcmRlciAub3JkZXIxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubXktb3JkZXIgLm9yZGVyMSAuY29sMSBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuLm15LW9yZGVyIC5vcmRlcjEgLmNvbDIgYiB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuLm15LW9yZGVyIC5vcmRlcjEgLmNvbDEgcCB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ubXktb3JkZXIgLm9yZGVyMSAuY29sMiBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzk3OTc5NztcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ubXktb3JkZXIgLm15b3JkZXJub3Byb2R1Y3RzIHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/my-order/my-order.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-order/my-order.page.ts ***!
  \*************************************************/
/*! exports provided: MyOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPage", function() { return MyOrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let MyOrderPage = class MyOrderPage {
    constructor(navCtrl, productServices, loadingCtrl, networkService, logger, router) {
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
        }
        else {
            this.loader();
            _this.myOrder = [];
            this.productServices.getOrders(function (data) {
                _this.logger.debug("checking my order Details" + data);
                if (data.status == 1) {
                    _this.myOrder = data.data.orders;
                    _this.logger.debug("myorder " + JSON.stringify(_this.myOrder));
                }
                else {
                    _this.myOrderCount = true;
                }
            });
        }
    }
    orderdetail(order) {
        // var _this = this;
        // _this.logger.debug("order " + JSON.stringify(order));
        // console.log("orderdata"+ JSON.stringify(order));
        let navigationExatras = {
            queryParams: {
                data: JSON.stringify(order),
            },
        };
        this.router.navigate(["/order-details"], navigationExatras);
    }
    // loader
    loader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: ``,
                duration: 1000,
            });
            this.loading.present();
        });
    }
    ngOnInit() { }
};
MyOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
MyOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-order",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-order.page.scss */ "./src/app/pages/my-order/my-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], MyOrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-order-my-order-module-es2015.js.map