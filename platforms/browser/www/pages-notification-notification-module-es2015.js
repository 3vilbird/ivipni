(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Notifications</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item>\r\n        Manage your push notification from this section &stay update with latest\r\n        products & offer on Auto Parts.\r\n      </ion-item>\r\n      <ion-item (click)=\"updateValue()\">\r\n        <ion-label> Notification</ion-label>\r\n        <ion-toggle [(ngModel)]=\"notify\" (ngModelChange)=\"updateValue()\"></ion-toggle>\r\n      </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/notification/notification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/notification/notification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function() { return NotificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");




const routes = [
    {
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }
];
let NotificationPageRoutingModule = class NotificationPageRoutingModule {
};
NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/notification/notification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.module.ts ***!
  \***********************************************************/
/*! exports provided: NotificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification-routing.module */ "./src/app/pages/notification/notification-routing.module.ts");
/* harmony import */ var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notification.page */ "./src/app/pages/notification/notification.page.ts");







let NotificationPageModule = class NotificationPageModule {
};
NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]
        ],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })
], NotificationPageModule);



/***/ }),

/***/ "./src/app/pages/notification/notification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/notification/notification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/notification/notification.page.ts ***!
  \*********************************************************/
/*! exports provided: NotificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPage", function() { return NotificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/products */ "./src/providers/commerce/products.ts");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");

// all clear






let NotificationPage = class NotificationPage {
    constructor(navCtrl, user, productServices, loadingCtrl, networkService, logger) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.productServices = productServices;
        this.loadingCtrl = loadingCtrl;
        this.networkService = networkService;
        this.logger = logger;
        var _this = this;
        // let loading = loadingCtrl.create({
        //  message: ``
        // });
        // if (_this.networkService.nullConnection()) {
        //   _this.networkService.showNetworkAlert();
        // } else {
        //   loading.present();
        //   this.productServices.getNotification(function(data) {
        //     _this.logger.debug(
        //       "checking my notification Details" + JSON.stringify(data)
        //     );
        //     _this.logger.debug("notification " + data.notification);
        //     _this.noteValue = data["notification"][0]["newsletter"];
        //     _this.logger.debug("notevalue " + _this.noteValue);
        //     if (_this.noteValue == 1) {
        //       _this.notify = true;
        //     } else {
        //       _this.notify = false;
        //     }
        //     _this.logger.debug("notify " + _this.notify);
        //     loading.dismiss();
        //   });
        // }
    }
    updateValue() {
        var _this = this;
        _this.notify = _this.notify; // If _this.noteValue is equal to true, now it will be set to false. If it's false, it will be set to true.
        let notificationDetails = {
            notification: _this.notify
        };
        _this.logger.debug("notificationDetails " + JSON.stringify(notificationDetails));
        this.user.setNotification(notificationDetails, function (result, data) {
            _this.logger.debug("checking my notification Details" + data);
            if (result == "1") {
                _this.logger.debug("checking my notification Details" + data);
            }
            else {
                _this.networkService.showErrorAlert();
            }
        });
    }
    ngOnInit() {
    }
};
NotificationPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"] },
    { type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"] }
];
NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification.page.scss */ "./src/app/pages/notification/notification.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_4__["Users"],
        _providers_commerce_products__WEBPACK_IMPORTED_MODULE_3__["Products"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_6__["Logger"]])
], NotificationPage);



/***/ })

}]);
//# sourceMappingURL=pages-notification-notification-module-es2015.js.map