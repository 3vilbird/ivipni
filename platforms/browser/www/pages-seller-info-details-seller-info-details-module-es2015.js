(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-info-details-seller-info-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Seller Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background-color\">\r\n  <div *ngIf=\"sellerinfo\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-card-title>\r\n          {{company_name}}\r\n        </ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-item>\r\n          <ion-avatar slot=\"end\">\r\n            <!--replace the below image by   {{profile_image}}-->\r\n            <img src=\"{{tempimg}}\">\r\n          </ion-avatar>\r\n          <ion-label>\r\n            <h3>Company Address</h3>\r\n            <p>{{firstname1}} {{lastname1}}</p>\r\n            <p>{{addressline1}}, {{addressline2}}</p>\r\n            <p>{{city1}}</p>\r\n            <p>{{state1}}, {{postcode1}}</p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2 class=\"ion-padding-bottom\">Contact Person</h2>\r\n            <h3>{{firstname}} {{lastname}}</h3>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\r\n              <ion-label>{{email_id}}</ion-label>\r\n            </ion-item>\r\n            <ion-item lines=\"none\">\r\n              <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\r\n              <ion-label>{{phonenumber}}</ion-label>\r\n            </ion-item>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label>\r\n            <h2>Documents</h2>\r\n            <h3><a href=\"{{gst_image}}\">GST Information</a></h3>\r\n            <h3><a href=\"{{pan_image}}\">Pan Card Information</a></h3>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".background-color {\n  background-color: WhiteSmoke;\n}\n.background-color .platform-android .ion-card {\n  background-color: white;\n  padding: 4px 4px;\n}\n.background-color .platform-android .ion-card img {\n  max-width: 100%;\n  max-height: 15%;\n  height: 134px;\n  border: 0;\n}\n.background-color .platform-ios .ion-card {\n  background-color: white;\n  padding: 4px 4px;\n}\n.background-color .platform-ios .ion-card img {\n  max-width: 100%;\n  max-height: 50%;\n  height: 134px;\n  border: 0;\n}\n.background-color ion-card ion-card-content {\n  border-top: 1px;\n  padding-top: 0px;\n}\n.background-color ion-card h2 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #655f5f;\n}\n.background-color ion-row {\n  color: #bdbdbd;\n}\n.background-color ion-card ion-card-header {\n  color: #467ed9;\n  border-bottom: 1px solid #ccc;\n}\n.background-color ion-icon.heart.ion-md-heart {\n  margin-left: 200px;\n  font-size: 30px;\n}\n.background-color .icon_heart_red {\n  color: #537fc5;\n  font-size: 25px;\n  float: right;\n}\n.background-color .icon_heart {\n  color: #bdbdbd;\n  font-size: 25px;\n  float: right;\n}\n.background-color .options_height {\n  border: 1px solid #bfbcbc;\n}\n.icon-align {\n  margin-left: auto;\n  font-size: 30px;\n}\n.margin_last_row {\n  margin-top: 10px;\n}\n.margin_last_row .text-input {\n  border: 1px solid #bfbcbc;\n}\n.margin_last_row p.discount_amt {\n  text-decoration: line-through;\n}\n.margin_last_row p.price {\n  font-weight: bold;\n}\n.margin_last_row .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n.margin_last_row .icon_cart {\n  color: #15a033;\n  font-size: 25px;\n  margin-left: 45px;\n}\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n.first_info {\n  width: 50%;\n  float: left;\n}\n.second_info {\n  width: 48%;\n  float: right;\n}\n.second_info p {\n  margin-left: 6px;\n  margin-bottom: -10px;\n  margin-top: 12px;\n  font-size: 1.5rem;\n}\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsbGVyLWluZm8tZGV0YWlscy9EOlxcU2VlbWFcXFByb2plY3RcXGl2aXBuaS9zcmNcXGFwcFxccGFnZXNcXHNlbGxlci1pbmZvLWRldGFpbHNcXHNlbGxlci1pbmZvLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby1kZXRhaWxzL3NlbGxlci1pbmZvLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBRENHO0VBQ0csdUJBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEQU07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDRVI7QURFSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBRENNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0NSO0FERUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERUk7RUFDRSxjQUFBO0FDQU47QURFSTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRk47QURJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FETUU7RUFDRSxpQkFBQTtFQUVBLGVBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UseUJBQUE7QUNKTjtBRE9JO0VBQ0UsNkJBQUE7QUNMTjtBRFFJO0VBQ0UsaUJBQUE7QUNOTjtBRFNJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUE47QURVSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSTjtBRFlFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlFO0VBQ0ksVUFBQTtFQUNJLFdBQUE7QUNUVjtBRFlNO0VBQ0ksVUFBQTtFQUNKLFlBQUE7QUNUTjtBRGFNO0VBQ0YsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGFFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby1kZXRhaWxzL3NlbGxlci1pbmZvLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuICBcclxuICAgLnBsYXRmb3JtLWFuZHJvaWQgLmlvbi1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDRweCA0cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDE1JTtcclxuICAgICAgICBoZWlnaHQ6IDEzNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLnBsYXRmb3JtLWlvcyAuaW9uLWNhcmQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogNHB4IDRweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTM0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgaW9uLWNhcmQgaDIge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzY1NWY1ZjtcclxuICAgIH1cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgIH1cclxuICAgIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XHJcbiAgICAgIGNvbG9yOiAjNDY3ZWQ5O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1pY29uLmhlYXJ0Lmlvbi1tZC1oZWFydCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmljb25faGVhcnRfcmVkIHtcclxuICAgICAgY29sb3I6ICM1MzdmYzU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmljb25faGVhcnQge1xyXG4gICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAub3B0aW9uc19oZWlnaHQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgfVxyXG4gIH1cclxuICAuaWNvbi1hbGlnbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLm1hcmdpbl9sYXN0X3JvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIFxyXG4gICAgLnRleHQtaW5wdXQge1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcC5kaXNjb3VudF9hbXQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIH1cclxuICBcclxuICAgIHAucHJpY2Uge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uX2NhcnRfY29sb3Ige1xyXG4gICAgICBjb2xvcjogI2Q0MzI4MTtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICBcclxuICAgIC5pY29uX2NhcnQge1xyXG4gICAgICBjb2xvcjogIzE1YTAzMztcclxuICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gIH1cclxuICBcclxuICAuZmlyc3RfaW5mb3tcclxuICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgfVxyXG4gICAgICAvL3NlY29uZCBjb2xvdW1uIGRpdlxyXG4gICAgICAuc2Vjb25kX2luZm8ge1xyXG4gICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAvL21hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLnNlY29uZF9pbmZvIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAudG9hc3QtbWQgLnRvYXN0LW1lc3NhZ2Uge1xyXG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgIiwiLmJhY2tncm91bmQtY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLmJhY2tncm91bmQtY29sb3IgLnBsYXRmb3JtLWFuZHJvaWQgLmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCA0cHg7XG59XG4uYmFja2dyb3VuZC1jb2xvciAucGxhdGZvcm0tYW5kcm9pZCAuaW9uLWNhcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxNSU7XG4gIGhlaWdodDogMTM0cHg7XG4gIGJvcmRlcjogMDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5wbGF0Zm9ybS1pb3MgLmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCA0cHg7XG59XG4uYmFja2dyb3VuZC1jb2xvciAucGxhdGZvcm0taW9zIC5pb24tY2FyZCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgaGVpZ2h0OiAxMzRweDtcbiAgYm9yZGVyOiAwO1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIGJvcmRlci10b3A6IDFweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1jYXJkIGgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2NTVmNWY7XG59XG4uYmFja2dyb3VuZC1jb2xvciBpb24tcm93IHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG4uYmFja2dyb3VuZC1jb2xvciBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzQ2N2VkOTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4uYmFja2dyb3VuZC1jb2xvciBpb24taWNvbi5oZWFydC5pb24tbWQtaGVhcnQge1xuICBtYXJnaW4tbGVmdDogMjAwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5pY29uX2hlYXJ0X3JlZCB7XG4gIGNvbG9yOiAjNTM3ZmM1O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5pY29uX2hlYXJ0IHtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJhY2tncm91bmQtY29sb3IgLm9wdGlvbnNfaGVpZ2h0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbn1cblxuLmljb24tYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubWFyZ2luX2xhc3Rfcm93IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYXJnaW5fbGFzdF9yb3cgLnRleHQtaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmZiY2JjO1xufVxuLm1hcmdpbl9sYXN0X3JvdyBwLmRpc2NvdW50X2FtdCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLm1hcmdpbl9sYXN0X3JvdyBwLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFyZ2luX2xhc3Rfcm93IC5pY29uX2NhcnRfY29sb3Ige1xuICBjb2xvcjogI2Q0MzI4MTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5tYXJnaW5fbGFzdF9yb3cgLmljb25fY2FydCB7XG4gIGNvbG9yOiAjMTVhMDMzO1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xufVxuXG4udG9hc3QtbWQgLnRvYXN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgYmFja2dyb3VuZDogZ3JheTtcbn1cblxuLmZpcnN0X2luZm8ge1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNlY29uZF9pbmZvIHtcbiAgd2lkdGg6IDQ4JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2Vjb25kX2luZm8gcCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnRvYXN0LW1kIC50b2FzdC1tZXNzYWdlIHtcbiAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

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