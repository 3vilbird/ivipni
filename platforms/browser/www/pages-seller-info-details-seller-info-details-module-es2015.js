(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-info-details-seller-info-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Seller Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background-color\">\n  <div *ngIf=\"sellerinfo\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          {{company_name}}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-avatar slot=\"end\">\n            <!--replace the below image by   {{profile_image}}-->\n            <img src=\"{{profile_image}}\" />\n          </ion-avatar>\n          <ion-label>\n            <h3>Company Address</h3>\n            <p>{{firstname1}} {{lastname1}}</p>\n            <p>{{addressline1}}, {{addressline2}}</p>\n            <p>{{city1}}</p>\n            <p>{{state1}}, {{postcode1}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-padding-bottom\">Contact Person</h2>\n            <h3>{{firstname}} {{lastname}}</h3>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n              <ion-label>{{email_id}}</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n              <ion-label>{{phonenumber}}</ion-label>\n            </ion-item>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>Documents</h2>\n            <h3><a href=\"{{gst_image}}\">GST Information</a></h3>\n            <h3><a href=\"{{pan_image}}\">Pan Card Information</a></h3>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/seller-info-details/seller-info-details-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/seller-info-details/seller-info-details-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SellerInfoDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoDetailsPageRoutingModule", function() { return SellerInfoDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _seller_info_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./seller-info-details.page */ "./src/app/pages/seller-info-details/seller-info-details.page.ts");




const routes = [
    {
        path: '',
        component: _seller_info_details_page__WEBPACK_IMPORTED_MODULE_3__["SellerInfoDetailsPage"]
    }
];
let SellerInfoDetailsPageRoutingModule = class SellerInfoDetailsPageRoutingModule {
};
SellerInfoDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SellerInfoDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/seller-info-details/seller-info-details.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-info-details/seller-info-details.module.ts ***!
  \*************************************************************************/
/*! exports provided: SellerInfoDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoDetailsPageModule", function() { return SellerInfoDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _seller_info_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./seller-info-details-routing.module */ "./src/app/pages/seller-info-details/seller-info-details-routing.module.ts");
/* harmony import */ var _seller_info_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./seller-info-details.page */ "./src/app/pages/seller-info-details/seller-info-details.page.ts");







let SellerInfoDetailsPageModule = class SellerInfoDetailsPageModule {
};
SellerInfoDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _seller_info_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["SellerInfoDetailsPageRoutingModule"]
        ],
        declarations: [_seller_info_details_page__WEBPACK_IMPORTED_MODULE_6__["SellerInfoDetailsPage"]]
    })
], SellerInfoDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/seller-info-details/seller-info-details.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/seller-info-details/seller-info-details.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-color {\n  background-color: WhiteSmoke;\n}\n.background-color .platform-android .ion-card {\n  background-color: white;\n  padding: 4px 4px;\n}\n.background-color .platform-android .ion-card img {\n  max-width: 100%;\n  max-height: 15%;\n  height: 134px;\n  border: 0;\n}\n.background-color .platform-ios .ion-card {\n  background-color: white;\n  padding: 4px 4px;\n}\n.background-color .platform-ios .ion-card img {\n  max-width: 100%;\n  max-height: 50%;\n  height: 134px;\n  border: 0;\n}\n.background-color ion-card ion-card-content {\n  border-top: 1px;\n  padding-top: 0px;\n}\n.background-color ion-card h2 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #655f5f;\n}\n.background-color ion-row {\n  color: #bdbdbd;\n}\n.background-color ion-card ion-card-header {\n  color: #467ed9;\n  border-bottom: 1px solid #ccc;\n}\n.background-color ion-icon.heart.ion-md-heart {\n  margin-left: 200px;\n  font-size: 30px;\n}\n.background-color .icon_heart_red {\n  color: #537fc5;\n  font-size: 25px;\n  float: right;\n}\n.background-color .icon_heart {\n  color: #bdbdbd;\n  font-size: 25px;\n  float: right;\n}\n.background-color .options_height {\n  border: 1px solid #bfbcbc;\n}\n.icon-align {\n  margin-left: auto;\n  font-size: 30px;\n}\n.margin_last_row {\n  margin-top: 10px;\n}\n.margin_last_row .text-input {\n  border: 1px solid #bfbcbc;\n}\n.margin_last_row p.discount_amt {\n  text-decoration: line-through;\n}\n.margin_last_row p.price {\n  font-weight: bold;\n}\n.margin_last_row .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n.margin_last_row .icon_cart {\n  color: #15a033;\n  font-size: 25px;\n  margin-left: 45px;\n}\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n.first_info {\n  width: 50%;\n  float: left;\n}\n.second_info {\n  width: 48%;\n  float: right;\n}\n.second_info p {\n  margin-left: 6px;\n  margin-bottom: -10px;\n  margin-top: 12px;\n  font-size: 1.5rem;\n}\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8tZGV0YWlscy9zZWxsZXItaW5mby1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8tZGV0YWlscy9zZWxsZXItaW5mby1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7QURDRztFQUNHLHVCQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0VSO0FERUk7RUFDRSx1QkFBQTtFQUNBLGdCQUFBO0FDQU47QURDTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNDUjtBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNBTjtBREVJO0VBQ0UsY0FBQTtBQ0FOO0FERUk7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUNBTjtBREdJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FESUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNGTjtBREtJO0VBQ0UseUJBQUE7QUNITjtBRE1FO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0FDSko7QURPRTtFQUNFLGdCQUFBO0FDSko7QURNSTtFQUNFLHlCQUFBO0FDSk47QURPSTtFQUNFLDZCQUFBO0FDTE47QURRSTtFQUNFLGlCQUFBO0FDTk47QURTSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ1BOO0FEVUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUk47QURZRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVEo7QURZRTtFQUNJLFVBQUE7RUFDSSxXQUFBO0FDVFY7QURZTTtFQUNJLFVBQUE7RUFDSixZQUFBO0FDVE47QURhTTtFQUNGLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVko7QURhRTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8tZGV0YWlscy9zZWxsZXItaW5mby1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xuICBcbiAgIC5wbGF0Zm9ybS1hbmRyb2lkIC5pb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDRweCA0cHg7XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDE1JTtcbiAgICAgICAgaGVpZ2h0OiAxMzRweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnBsYXRmb3JtLWlvcyAuaW9uLWNhcmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiA0cHggNHB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MCU7XG4gICAgICAgIGhlaWdodDogMTM0cHg7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBib3JkZXItdG9wOiAxcHg7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbiAgICBpb24tY2FyZCBoMiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjNjU1ZjVmO1xuICAgIH1cbiAgICBpb24tcm93IHtcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIH1cbiAgICBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgY29sb3I6ICM0NjdlZDk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB9XG4gIFxuICAgIGlvbi1pY29uLmhlYXJ0Lmlvbi1tZC1oZWFydCB7XG4gICAgICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICBcbiAgICAuaWNvbl9oZWFydF9yZWQge1xuICAgICAgY29sb3I6ICM1MzdmYzU7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICAgIC5pY29uX2hlYXJ0IHtcbiAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgXG4gICAgLm9wdGlvbnNfaGVpZ2h0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgfVxuICB9XG4gIC5pY29uLWFsaWduIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgXG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG4gIFxuICAubWFyZ2luX2xhc3Rfcm93IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICBcbiAgICAudGV4dC1pbnB1dCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xuICAgIH1cbiAgXG4gICAgcC5kaXNjb3VudF9hbXQge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICBcbiAgICBwLnByaWNlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgXG4gICAgLmljb25fY2FydF9jb2xvciB7XG4gICAgICBjb2xvcjogI2Q0MzI4MTtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICBcbiAgICAuaWNvbl9jYXJ0IHtcbiAgICAgIGNvbG9yOiAjMTVhMDMzO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgfVxuICB9XG4gIFxuICAudG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogODUlO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICB9XG4gIFxuICAuZmlyc3RfaW5mb3tcbiAgICAgIHdpZHRoOjUwJTtcbiAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgfVxuICAgICAgLy9zZWNvbmQgY29sb3VtbiBkaXZcbiAgICAgIC5zZWNvbmRfaW5mbyB7XG4gICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIC8vbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cbiAgXG4gICAgICAuc2Vjb25kX2luZm8gcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIFxuICAudG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAiLCIuYmFja2dyb3VuZC1jb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4uYmFja2dyb3VuZC1jb2xvciAucGxhdGZvcm0tYW5kcm9pZCAuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4IDRweDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5wbGF0Zm9ybS1hbmRyb2lkIC5pb24tY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDE1JTtcbiAgaGVpZ2h0OiAxMzRweDtcbiAgYm9yZGVyOiAwO1xufVxuLmJhY2tncm91bmQtY29sb3IgLnBsYXRmb3JtLWlvcyAuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNHB4IDRweDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5wbGF0Zm9ybS1pb3MgLmlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBoZWlnaHQ6IDEzNHB4O1xuICBib3JkZXI6IDA7XG59XG4uYmFja2dyb3VuZC1jb2xvciBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgYm9yZGVyLXRvcDogMXB4O1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLWNhcmQgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzY1NWY1Zjtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1yb3cge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjNDY3ZWQ5O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1pY29uLmhlYXJ0Lmlvbi1tZC1oZWFydCB7XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgLmljb25faGVhcnRfcmVkIHtcbiAgY29sb3I6ICM1MzdmYzU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJhY2tncm91bmQtY29sb3IgLmljb25faGVhcnQge1xuICBjb2xvcjogI2JkYmRiZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYmFja2dyb3VuZC1jb2xvciAub3B0aW9uc19oZWlnaHQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xufVxuXG4uaWNvbi1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5tYXJnaW5fbGFzdF9yb3cge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1hcmdpbl9sYXN0X3JvdyAudGV4dC1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG59XG4ubWFyZ2luX2xhc3Rfcm93IHAuZGlzY291bnRfYW10IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4ubWFyZ2luX2xhc3Rfcm93IHAucHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYXJnaW5fbGFzdF9yb3cgLmljb25fY2FydF9jb2xvciB7XG4gIGNvbG9yOiAjZDQzMjgxO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1hcmdpbl9sYXN0X3JvdyAuaWNvbl9jYXJ0IHtcbiAgY29sb3I6ICMxNWEwMzM7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG59XG5cbi50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogODUlO1xuICBtYXgtd2lkdGg6IDcwMHB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBiYWNrZ3JvdW5kOiBncmF5O1xufVxuXG4uZmlyc3RfaW5mbyB7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uc2Vjb25kX2luZm8ge1xuICB3aWR0aDogNDglO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zZWNvbmRfaW5mbyBwIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxOXB4IDE2cHggMTdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/seller-info-details/seller-info-details.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/seller-info-details/seller-info-details.page.ts ***!
  \***********************************************************************/
/*! exports provided: SellerInfoDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerInfoDetailsPage", function() { return SellerInfoDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/commerce/users */ "./src/providers/commerce/users.ts");
/* harmony import */ var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/network-service/network-service */ "./src/providers/network-service/network-service.ts");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let SellerInfoDetailsPage = class SellerInfoDetailsPage {
    constructor(navCtrl, users, toastCtrl, networkService, logger, route) {
        this.navCtrl = navCtrl;
        this.users = users;
        this.toastCtrl = toastCtrl;
        this.networkService = networkService;
        this.logger = logger;
        this.route = route;
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
        this.sellerinfo = true;
        this.gstimagefile = false;
        this.pancardfile = false;
    }
    // presentToast() {
    //   let toast = this.toastCtrl.create({
    //     message: this.toastMessage,
    //     duration: 1000,
    //     position: "middle"
    //   });
    //   toast.onDidDismiss(() => {
    //     this.logger.info("Dismissed toast");
    //   });
    //   toast.present();
    // }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            // console.log("=====================================the parameter data");
            const sellerdata = JSON.parse(params["data"]);
            // this.catName = JSON.parse(params["subSubCategories"]);
            var _this = this;
            _this.firstname = sellerdata.firstname;
            _this.lastname = sellerdata.lastname;
            _this.company_name = sellerdata.company_name;
            _this.email_id = sellerdata.email_id;
            _this.phonenumber = sellerdata.phonenumber;
            _this.profile_image = sellerdata.profile_image;
            _this.gst_image = sellerdata.gst_image;
            _this.pan_image = sellerdata.pan_image;
            _this.firstname1 = sellerdata.firstname1;
            _this.lastname1 = sellerdata.lastname1;
            _this.addressline1 = sellerdata.addressline1;
            _this.addressline2 = sellerdata.addressline2;
            _this.state1 = sellerdata.state1;
            _this.city1 = sellerdata.city1;
            _this.postcode1 = sellerdata.postcode1;
        });
    }
};
SellerInfoDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"] },
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
SellerInfoDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-seller-info-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seller-info-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seller-info-details.page.scss */ "./src/app/pages/seller-info-details/seller-info-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_commerce_users__WEBPACK_IMPORTED_MODULE_3__["Users"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_4__["NetworkService"],
        _providers_logger_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], SellerInfoDetailsPage);



/***/ })

}]);
//# sourceMappingURL=pages-seller-info-details-seller-info-details-module-es2015.js.map