(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-seller-info-details-seller-info-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seller-info-details/seller-info-details.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Seller Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background-color\">\n  <div *ngIf=\"sellerinfo\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>\n          {{company_name}}\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-avatar slot=\"end\">\n            <!--replace the below image by   {{profile_image}}-->\n            <img src=\"{{tempimg}}\">\n          </ion-avatar>\n          <ion-label>\n            <h3>Company Address</h3>\n            <p>{{firstname1}} {{lastname1}}</p>\n            <p>{{addressline1}}, {{addressline2}}</p>\n            <p>{{city1}}</p>\n            <p>{{state1}}, {{postcode1}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-padding-bottom\">Contact Person</h2>\n            <h3>{{firstname}} {{lastname}}</h3>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"mail-open\" class=\"ion-padding-end\"></ion-icon>\n              <ion-label>{{email_id}}</ion-label>\n            </ion-item>\n            <ion-item lines=\"none\">\n              <ion-icon name=\"call\" class=\"ion-padding-end\"></ion-icon>\n              <ion-label>{{phonenumber}}</ion-label>\n            </ion-item>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>Documents</h2>\n            <h3><a href=\"{{gst_image}}\">GST Information</a></h3>\n            <h3><a href=\"{{pan_image}}\">Pan Card Information</a></h3>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = (".background-color {\n  background-color: WhiteSmoke;\n}\n.background-color .platform-android .ion-card {\n  background-color: white;\n  padding: 4px 4px;\n}\n.background-color .platform-android .ion-card img {\n  max-width: 100%;\n  max-height: 15%;\n  height: 134px;\n  border: 0;\n}\n.background-color .platform-ios .ion-card {\n  background-color: white;\n  padding: 4px 4px;\n}\n.background-color .platform-ios .ion-card img {\n  max-width: 100%;\n  max-height: 50%;\n  height: 134px;\n  border: 0;\n}\n.background-color ion-card ion-card-content {\n  border-top: 1px;\n  padding-top: 0px;\n}\n.background-color ion-card h2 {\n  font-size: 18px;\n  font-weight: bold;\n  color: #655f5f;\n}\n.background-color ion-row {\n  color: #bdbdbd;\n}\n.background-color ion-card ion-card-header {\n  color: #467ed9;\n  border-bottom: 1px solid #ccc;\n}\n.background-color ion-icon.heart.ion-md-heart {\n  margin-left: 200px;\n  font-size: 30px;\n}\n.background-color .icon_heart_red {\n  color: #537fc5;\n  font-size: 25px;\n  float: right;\n}\n.background-color .icon_heart {\n  color: #bdbdbd;\n  font-size: 25px;\n  float: right;\n}\n.background-color .options_height {\n  border: 1px solid #bfbcbc;\n}\n.icon-align {\n  margin-left: auto;\n  font-size: 30px;\n}\n.margin_last_row {\n  margin-top: 10px;\n}\n.margin_last_row .text-input {\n  border: 1px solid #bfbcbc;\n}\n.margin_last_row p.discount_amt {\n  text-decoration: line-through;\n}\n.margin_last_row p.price {\n  font-weight: bold;\n}\n.margin_last_row .icon_cart_color {\n  color: #d43281;\n  margin-top: 15px;\n}\n.margin_last_row .icon_cart {\n  color: #15a033;\n  font-size: 25px;\n  margin-left: 45px;\n}\n.toast-md .toast-wrapper {\n  position: absolute;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  display: block;\n  margin: auto;\n  width: 85%;\n  max-width: 700px;\n  border-radius: 35px;\n  background: gray;\n}\n.first_info {\n  width: 50%;\n  float: left;\n}\n.second_info {\n  width: 48%;\n  float: right;\n}\n.second_info p {\n  margin-left: 6px;\n  margin-bottom: -10px;\n  margin-top: 12px;\n  font-size: 1.5rem;\n}\n.toast-md .toast-message {\n  padding: 19px 16px 17px;\n  font-size: 1.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby1kZXRhaWxzL3NlbGxlci1pbmZvLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby1kZXRhaWxzL3NlbGxlci1pbmZvLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjtBRENHO0VBQ0csdUJBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEQU07RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDRVI7QURFSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBRENNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0NSO0FERUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBREVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FERUk7RUFDRSxjQUFBO0FDQU47QURFSTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtBQ0FOO0FER0k7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRk47QURJSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZOO0FES0k7RUFDRSx5QkFBQTtBQ0hOO0FETUU7RUFDRSxpQkFBQTtFQUVBLGVBQUE7QUNKSjtBRE9FO0VBQ0UsZ0JBQUE7QUNKSjtBRE1JO0VBQ0UseUJBQUE7QUNKTjtBRE9JO0VBQ0UsNkJBQUE7QUNMTjtBRFFJO0VBQ0UsaUJBQUE7QUNOTjtBRFNJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUE47QURVSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSTjtBRFlFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlFO0VBQ0ksVUFBQTtFQUNJLFdBQUE7QUNUVjtBRFlNO0VBQ0ksVUFBQTtFQUNKLFlBQUE7QUNUTjtBRGFNO0VBQ0YsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGFFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWxsZXItaW5mby1kZXRhaWxzL3NlbGxlci1pbmZvLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY29sb3Ige1xuICAgIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG4gIFxuICAgLnBsYXRmb3JtLWFuZHJvaWQgLmlvbi1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogNHB4IDRweDtcbiAgICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogMTUlO1xuICAgICAgICBoZWlnaHQ6IDEzNHB4O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAucGxhdGZvcm0taW9zIC5pb24tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDRweCA0cHg7XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMzRweDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgIGJvcmRlci10b3A6IDFweDtcbiAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgfVxuICAgIGlvbi1jYXJkIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICM2NTVmNWY7XG4gICAgfVxuICAgIGlvbi1yb3cge1xuICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgfVxuICAgIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gICAgICBjb2xvcjogIzQ2N2VkOTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbiAgXG4gICAgaW9uLWljb24uaGVhcnQuaW9uLW1kLWhlYXJ0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2hlYXJ0X3JlZCB7XG4gICAgICBjb2xvcjogIzUzN2ZjNTtcbiAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG4gICAgLmljb25faGVhcnQge1xuICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICBcbiAgICAub3B0aW9uc19oZWlnaHQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbiAgICB9XG4gIH1cbiAgLmljb24tYWxpZ24ge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgXG4gIC5tYXJnaW5fbGFzdF9yb3cge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIFxuICAgIC50ZXh0LWlucHV0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG4gICAgfVxuICBcbiAgICBwLmRpc2NvdW50X2FtdCB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICB9XG4gIFxuICAgIHAucHJpY2Uge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICBcbiAgICAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgICAgIGNvbG9yOiAjZDQzMjgxO1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gIFxuICAgIC5pY29uX2NhcnQge1xuICAgICAgY29sb3I6ICMxNWEwMzM7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICB9XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3Qtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgIGJhY2tncm91bmQ6IGdyYXk7XG4gIH1cbiAgXG4gIC5maXJzdF9pbmZve1xuICAgICAgd2lkdGg6NTAlO1xuICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICB9XG4gICAgICAvL3NlY29uZCBjb2xvdW1uIGRpdlxuICAgICAgLnNlY29uZF9pbmZvIHtcbiAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgLy9tYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuICBcbiAgICAgIC5zZWNvbmRfaW5mbyBwIHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIC50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gICAgcGFkZGluZzogMTlweCAxNnB4IDE3cHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICIsIi5iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5wbGF0Zm9ybS1hbmRyb2lkIC5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHggNHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgLnBsYXRmb3JtLWFuZHJvaWQgLmlvbi1jYXJkIGltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTUlO1xuICBoZWlnaHQ6IDEzNHB4O1xuICBib3JkZXI6IDA7XG59XG4uYmFja2dyb3VuZC1jb2xvciAucGxhdGZvcm0taW9zIC5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA0cHggNHB4O1xufVxuLmJhY2tncm91bmQtY29sb3IgLnBsYXRmb3JtLWlvcyAuaW9uLWNhcmQgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIGhlaWdodDogMTM0cHg7XG4gIGJvcmRlcjogMDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBib3JkZXItdG9wOiAxcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG4uYmFja2dyb3VuZC1jb2xvciBpb24tY2FyZCBoMiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNjU1ZjVmO1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLXJvdyB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIHtcbiAgY29sb3I6ICM0NjdlZDk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuLmJhY2tncm91bmQtY29sb3IgaW9uLWljb24uaGVhcnQuaW9uLW1kLWhlYXJ0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uYmFja2dyb3VuZC1jb2xvciAuaWNvbl9oZWFydF9yZWQge1xuICBjb2xvcjogIzUzN2ZjNTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYmFja2dyb3VuZC1jb2xvciAuaWNvbl9oZWFydCB7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5iYWNrZ3JvdW5kLWNvbG9yIC5vcHRpb25zX2hlaWdodCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZmJjYmM7XG59XG5cbi5pY29uLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLm1hcmdpbl9sYXN0X3JvdyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFyZ2luX2xhc3Rfcm93IC50ZXh0LWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JmYmNiYztcbn1cbi5tYXJnaW5fbGFzdF9yb3cgcC5kaXNjb3VudF9hbXQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5tYXJnaW5fbGFzdF9yb3cgcC5wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1hcmdpbl9sYXN0X3JvdyAuaWNvbl9jYXJ0X2NvbG9yIHtcbiAgY29sb3I6ICNkNDMyODE7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFyZ2luX2xhc3Rfcm93IC5pY29uX2NhcnQge1xuICBjb2xvcjogIzE1YTAzMztcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogNDVweDtcbn1cblxuLnRvYXN0LW1kIC50b2FzdC13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4NSU7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIGJhY2tncm91bmQ6IGdyYXk7XG59XG5cbi5maXJzdF9pbmZvIHtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZWNvbmRfaW5mbyB7XG4gIHdpZHRoOiA0OCU7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNlY29uZF9pbmZvIHAge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi50b2FzdC1tZCAudG9hc3QtbWVzc2FnZSB7XG4gIHBhZGRpbmc6IDE5cHggMTZweCAxN3B4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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