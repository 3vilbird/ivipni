(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-info-seller-info-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info/seller-info.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info/seller-info.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Seller Info</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"my-order\">\r\n    <ion-card class=\"order1\" *ngFor=\"let seller of sellerinfo\" (click)=\"orderdetail(seller)\">\r\n        <ion-card-content>\r\n            <ion-row>\r\n                <ion-col class=\"col1\"><b>Seller Name:</b>\r\n                </ion-col>\r\n                <ion-col class=\"col2\"><b>{{seller.firstname}} {{seller.lastname}}</b>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Company Name:</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p>{{seller.company_name}}</p>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col class=\"col1\">\r\n                    <p>Phone Number</p>\r\n                </ion-col>\r\n                <ion-col class=\"col2\">\r\n                    <p>{{seller.phonenumber}}</p>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-card-content>\r\n    </ion-card>\r\n    <div *ngIf=\"myOrderCount\">\r\n        <ion-item class=\"myordernoproducts\">\r\n            <h1><b>No record found </b></h1>\r\n        </ion-item>\r\n    </div>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/seller-info/seller-info-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/seller-info/seller-info-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SellerInfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoPageRoutingModule", function() { return SellerInfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seller_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-info.page */ "./src/app/pages/seller-info/seller-info.page.ts");




const routes = [
    {
        path: '',
        component: _seller_info_page__WEBPACK_IMPORTED_MODULE_3__["SellerInfoPage"]
    }
];
let SellerInfoPageRoutingModule = class SellerInfoPageRoutingModule {
};
SellerInfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerInfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/seller-info/seller-info.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/seller-info/seller-info.module.ts ***!
  \*********************************************************/
/*! exports provided: SellerInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoPageModule", function() { return SellerInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _seller_info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-info-routing.module */ "./src/app/pages/seller-info/seller-info-routing.module.ts");
/* harmony import */ var _seller_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-info.page */ "./src/app/pages/seller-info/seller-info.page.ts");







let SellerInfoPageModule = class SellerInfoPageModule {
};
SellerInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_info_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerInfoPageRoutingModule"]
        ],
        declarations: [_seller_info_page__WEBPACK_IMPORTED_MODULE_6__["SellerInfoPage"]]
    })
], SellerInfoPageModule);



/***/ }),

/***/ "./src/app/pages/seller-info/seller-info.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/seller-info/seller-info.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".seller-info {\n  background-color: whiteSmoke;\n}\n.seller-info ion-row {\n  width: 100%;\n  height: 100%;\n}\n.seller-info .order1 {\n  background-color: white;\n  padding: 10px;\n}\n.seller-info .order1 .col1 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  line-height: 1.2;\n  color: #393838;\n}\n.seller-info .order1 .col2 b {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #393838;\n}\n.seller-info .order1 .col1 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  line-height: 1.2;\n  color: #393838;\n}\n.seller-info .order1 .col2 p {\n  margin: -2px 10px 1px;\n  font-size: 1.2rem;\n  font-family: arial;\n  font-weight: normal;\n  line-height: 1.2;\n  color: #979797;\n  color: #393838;\n}\n.seller-info .myordernoproducts {\n  color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8vRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxzZWxsZXItaW5mb1xcc2VsbGVyLWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby9zZWxsZXItaW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLGFBQUE7QUNDTjtBREVJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtBQ0ROO0FER0k7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNETjtBREdJO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRE47QURHSTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0ROO0FESUk7RUFDRSxnQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8vc2VsbGVyLWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGxlci1pbmZvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlU21va2U7XHJcbiAgXHJcbiAgICBpb24tcm93IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5vcmRlcjEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5vcmRlcjEgLmNvbDEgIGIge1xyXG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAvL2ZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgY29sb3I6ICMzOTM4Mzg7XHJcbiAgICB9XHJcbiAgICAub3JkZXIxIC5jb2wyICBiIHtcclxuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgY29sb3I6ICMzOTM4Mzg7XHJcbiAgICB9XHJcbiAgICAub3JkZXIxIC5jb2wxICBwIHtcclxuICAgICAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBjb2xvcjogIzM5MzgzODtcclxuICAgIH1cclxuICAgIC5vcmRlcjEgLmNvbDIgIHAge1xyXG4gICAgICBtYXJnaW46IC0ycHggMTBweCAxcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgIGNvbG9yOiAjOTc5Nzk3O1xyXG4gICAgICBjb2xvcjogIzM5MzgzODtcclxuICAgIH1cclxuICBcclxuICAgIC5teW9yZGVybm9wcm9kdWN0cyB7XHJcbiAgICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsIi5zZWxsZXItaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlU21va2U7XG59XG4uc2VsbGVyLWluZm8gaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VsbGVyLWluZm8gLm9yZGVyMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlbGxlci1pbmZvIC5vcmRlcjEgLmNvbDEgYiB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuLnNlbGxlci1pbmZvIC5vcmRlcjEgLmNvbDIgYiB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjMzkzODM4O1xufVxuLnNlbGxlci1pbmZvIC5vcmRlcjEgLmNvbDEgcCB7XG4gIG1hcmdpbjogLTJweCAxMHB4IDFweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4uc2VsbGVyLWluZm8gLm9yZGVyMSAuY29sMiBwIHtcbiAgbWFyZ2luOiAtMnB4IDEwcHggMXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzk3OTc5NztcbiAgY29sb3I6ICMzOTM4Mzg7XG59XG4uc2VsbGVyLWluZm8gLm15b3JkZXJub3Byb2R1Y3RzIHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/seller-info/seller-info.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/seller-info/seller-info.page.ts ***!
  \*******************************************************/
/*! exports provided: SellerInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoPage", function() { return SellerInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
// all clear






// import { SellerInfoDetailsPage } from "../seller-info-details/seller-info-details.page";

let SellerInfoPage = class SellerInfoPage {
    constructor(navCtrl, productServices, loadingCtrl, networkService, logger, router) {
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
        }
        else {
            // loading.present();
            this.loder();
            _this.sellerinfo = [];
            _this.productServices.getSellerDetails(function (data) {
                _this.logger.debug("checking my order Details" + data);
                if (data.status == 1) {
                    _this.sellerinfo = data.seller_details;
                    _this.logger.debug("myorder " + JSON.stringify(_this.sellerinfo));
                }
                else {
                    // loading.dismiss();
                }
            });
        }
    }
    // todo fix this loading
    loder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: ``,
                duration: 2000,
            });
            yield loading.present();
        });
    }
    orderdetail(seller) {
        var _this = this;
        _this.logger.debug("seller info " + JSON.stringify(seller));
        // _this.navCtrl.push(SellerInfoDetailsPage, seller);
        let navigationExtras = {
            queryParams: {
                data: JSON.stringify(seller),
            },
        };
        this.router.navigate(["/seller-info-details"], navigationExtras);
    }
    ngOnInit() { }
};
SellerInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
SellerInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-seller-info",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seller-info.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info/seller-info.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seller-info.page.scss */ "./src/app/pages/seller-info/seller-info.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], SellerInfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-seller-info-seller-info-module-es2015.js.map