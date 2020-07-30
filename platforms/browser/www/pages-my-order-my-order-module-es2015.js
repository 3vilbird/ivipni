(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-order-my-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n          </ion-buttons>\r\n        <ion-title>My Orders</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"my-order\">\r\n    <ion-card class=\"order1\" *ngFor=\"let order of myOrder\" (click)=\"orderdetail(order)\">\r\n        <ion-row>\r\n            <ion-col class=\"col1\"><p>Order Id:</p>\r\n            </ion-col>\r\n            <ion-col class=\"col2\"><p>{{order.order_id}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"col1\">\r\n                <p>Status:</p>\r\n            </ion-col>\r\n            <ion-col class=\"col2\">\r\n                <p>{{order.name}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"col1\">\r\n                <p>Amount:</p>\r\n            </ion-col>\r\n            <ion-col class=\"col2\">\r\n                <p>{{order.total | currency:'INR':true}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n            <ion-col class=\"col1\">\r\n                <p>Date:</p>\r\n            </ion-col>\r\n            <ion-col class=\"col2\">\r\n                <p>{{order.date_added}}</p>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-card>\r\n\r\n    <div *ngIf=\"myOrderCount\">\r\n        <ion-item class=\"myordernoproducts\">\r\n            <h1><b>No record found </b></h1>\r\n        </ion-item>\r\n    </div>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".my-order {\n  background-color: whiteSmoke;\n}\n.my-order ion-row {\n  width: 100%;\n  height: 100%;\n}\n.my-order .order1 {\n  background-color: white;\n  padding: 10px;\n}\n.my-order .order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.6rem;\n  line-height: 1;\n  color: #393838;\n}\n.my-order .order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #393838;\n}\n.my-order .order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.my-order .order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #979797;\n  color: #393838;\n}\n.my-order .myordernoproducts {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktb3JkZXIvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxteS1vcmRlclxcbXktb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1vcmRlci9teS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNDTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQU47QURFSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERUk7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDQU47QURHSTtFQUNFLGdCQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9teS1vcmRlci9teS1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktb3JkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVTbW9rZTtcclxuICBcclxuICAgIGlvbi1yb3cge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm9yZGVyMSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm9yZGVyMSAuY29sMSAgYiB7XHJcbiAgICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgICAgIGNvbG9yOiAjMzkzODM4O1xyXG4gICAgfVxyXG4gICAgLm9yZGVyMSAuY29sMiAgYiB7XHJcbiAgICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGNvbG9yOiAjMzkzODM4O1xyXG4gICAgfVxyXG4gICAgLm9yZGVyMSAuY29sMSAgcCB7XHJcbiAgICAgIG1hcmdpbjogLTJweCAxMHB4IDFweDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgY29sb3I6ICMzOTM4Mzg7XHJcbiAgICB9XHJcbiAgICAub3JkZXIxIC5jb2wyICBwIHtcclxuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBjb2xvcjogIzk3OTc5NztcclxuICAgICAgY29sb3I6ICMzOTM4Mzg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAubXlvcmRlcm5vcHJvZHVjdHMge1xyXG4gICAgICBjb2xvcjogbGlnaHRncmV5O1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIubXktb3JkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVNtb2tlO1xufVxuLm15LW9yZGVyIGlvbi1yb3cge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm15LW9yZGVyIC5vcmRlcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5teS1vcmRlciAub3JkZXIxIC5jb2wxIGIge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ubXktb3JkZXIgLm9yZGVyMSAuY29sMiBiIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4ubXktb3JkZXIgLm9yZGVyMSAuY29sMSBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzM5MzgzODtcbn1cbi5teS1vcmRlciAub3JkZXIxIC5jb2wyIHAge1xuICBtYXJnaW46IC0ycHggMTBweCAxcHg7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LWZhbWlseTogYXJpYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICBjb2xvcjogIzM5MzgzODtcbn1cbi5teS1vcmRlciAubXlvcmRlcm5vcHJvZHVjdHMge1xuICBjb2xvcjogbGlnaHRncmV5O1xufSJdfQ== */");

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