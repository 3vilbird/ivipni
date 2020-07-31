(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-sub-category-product-sub-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-sub-category/product-sub-category.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-sub-category/product-sub-category.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{headerName}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"quickOrderFn()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"product-sub-category\">\n  <ion-item\n    *ngFor=\"let catNames of catName \"\n    (click)=\"subcategoryName(catNames);\"\n  >\n    <ion-card>\n      <ion-row>\n        <ion-col> <img src=\"{{catNames.image}}\" /> </ion-col>\n        <ion-col class=\"text-align\">{{catNames.sub_category_name}}</ion-col>\n      </ion-row>\n    </ion-card>\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/product-sub-category/product-sub-category-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/product-sub-category/product-sub-category-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductSubCategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPageRoutingModule", function() { return ProductSubCategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_sub_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-sub-category.page */ "./src/app/pages/product-sub-category/product-sub-category.page.ts");




const routes = [
    {
        path: '',
        component: _product_sub_category_page__WEBPACK_IMPORTED_MODULE_3__["ProductSubCategoryPage"]
    }
];
let ProductSubCategoryPageRoutingModule = class ProductSubCategoryPageRoutingModule {
};
ProductSubCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductSubCategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product-sub-category/product-sub-category.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-sub-category/product-sub-category.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProductSubCategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPageModule", function() { return ProductSubCategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-sub-category-routing.module */ "./src/app/pages/product-sub-category/product-sub-category-routing.module.ts");
/* harmony import */ var _product_sub_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-sub-category.page */ "./src/app/pages/product-sub-category/product-sub-category.page.ts");







let ProductSubCategoryPageModule = class ProductSubCategoryPageModule {
};
ProductSubCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductSubCategoryPageRoutingModule"]
        ],
        declarations: [_product_sub_category_page__WEBPACK_IMPORTED_MODULE_6__["ProductSubCategoryPage"]]
    })
], ProductSubCategoryPageModule);



/***/ }),

/***/ "./src/app/pages/product-sub-category/product-sub-category.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/product-sub-category/product-sub-category.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".product-sub-category {\n  background-color: WhiteSmoke;\n}\n.product-sub-category img {\n  height: 50px;\n  width: 50px;\n}\n.product-sub-category ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1zdWItY2F0ZWdvcnkvcHJvZHVjdC1zdWItY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LXN1Yi1jYXRlZ29yeS9wcm9kdWN0LXN1Yi1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEbUJFO0VBQ0UsV0FBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Qtc3ViLWNhdGVnb3J5L3Byb2R1Y3Qtc3ViLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXN1Yi1jYXRlZ29yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgLy8gd2lkdGg6IGF1dG87XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuICAvLyAudGV4dC1hbGlnbiB7XG4gIC8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XG4gIC8vICAgdGV4dC1pbmRlbnQ6IC02NXB4O1xuICAvLyAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAvLyAgIGNvbG9yOiBibGFjaztcbiAgLy8gfVxuXG4gIC8vIGlvbi1pdGVtIHtcbiAgLy8gICBtYXJnaW46IDIuNXB4O1xuICAvLyAgIHBhZGRpbmc6IDBweDtcbiAgLy8gICBib3JkZXI6IHNvbGlkIHdoaXRlIDBweDtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLy8gfVxuICBpb24tY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi5wcm9kdWN0LXN1Yi1jYXRlZ29yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IFdoaXRlU21va2U7XG59XG4ucHJvZHVjdC1zdWItY2F0ZWdvcnkgaW1nIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5wcm9kdWN0LXN1Yi1jYXRlZ29yeSBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/product-sub-category/product-sub-category.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/product-sub-category/product-sub-category.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProductSubCategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPage", function() { return ProductSubCategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/logger/logger */ "./src/providers/logger/logger.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

// all clear



let ProductSubCategoryPage = class ProductSubCategoryPage {
    constructor(logger, route, router) {
        this.logger = logger;
        this.route = route;
        this.router = router;
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
    }
    subcategoryName(catNames) {
        // this.logger.info("invoking subcategoryName ");
        let navigationExtras = {
            queryParams: {
                sub_category_id: catNames.sub_category_id,
                sub_category_name: catNames.sub_category_name,
                image: catNames.image,
            },
        };
        this.router.navigate(["/category-product-details"], navigationExtras);
    }
    quickOrderFn() {
        this.router.navigateByUrl("/search-products");
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            // console.log("=====================================the parameter data");
            this.headerName = params["sub_category_name"];
            this.catName = JSON.parse(params["subSubCategories"]);
        });
    }
};
ProductSubCategoryPage.ctorParameters = () => [
    { type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductSubCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-product-sub-category",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-sub-category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-sub-category/product-sub-category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-sub-category.page.scss */ "./src/app/pages/product-sub-category/product-sub-category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProductSubCategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-sub-category-product-sub-category-module-es2015.js.map