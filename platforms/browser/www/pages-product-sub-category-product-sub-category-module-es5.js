function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-sub-category-product-sub-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-sub-category/product-sub-category.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-sub-category/product-sub-category.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductSubCategoryProductSubCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-nav color=\"primary\" padding>\r\n      <ion-title>{{headerName}}</ion-title>\r\n      <ion-button (click)=\"quickOrderFn();\" end>\r\n        <ion-icon name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-nav>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"product-sub-category\">\r\n  <ion-item\r\n    *ngFor=\"let catNames of catName \"\r\n    (click)=\"subcategoryName(catNames);\"\r\n  >\r\n    <ion-card>\r\n      <ion-row>\r\n        <ion-col> <img src=\"{{tempimg}}\" /> </ion-col>\r\n        <ion-col class=\"text-align\">{{catNames.sub_category_name}}</ion-col>\r\n      </ion-row>\r\n    </ion-card>\r\n  </ion-item>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/product-sub-category/product-sub-category-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/product-sub-category/product-sub-category-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ProductSubCategoryPageRoutingModule */

  /***/
  function srcAppPagesProductSubCategoryProductSubCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPageRoutingModule", function () {
      return ProductSubCategoryPageRoutingModule;
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


    var _product_sub_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-sub-category.page */
    "./src/app/pages/product-sub-category/product-sub-category.page.ts");

    var routes = [{
      path: '',
      component: _product_sub_category_page__WEBPACK_IMPORTED_MODULE_3__["ProductSubCategoryPage"]
    }];

    var ProductSubCategoryPageRoutingModule = function ProductSubCategoryPageRoutingModule() {
      _classCallCheck(this, ProductSubCategoryPageRoutingModule);
    };

    ProductSubCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductSubCategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product-sub-category/product-sub-category.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/product-sub-category/product-sub-category.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ProductSubCategoryPageModule */

  /***/
  function srcAppPagesProductSubCategoryProductSubCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPageModule", function () {
      return ProductSubCategoryPageModule;
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


    var _product_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-sub-category-routing.module */
    "./src/app/pages/product-sub-category/product-sub-category-routing.module.ts");
    /* harmony import */


    var _product_sub_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-sub-category.page */
    "./src/app/pages/product-sub-category/product-sub-category.page.ts");

    var ProductSubCategoryPageModule = function ProductSubCategoryPageModule() {
      _classCallCheck(this, ProductSubCategoryPageModule);
    };

    ProductSubCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_sub_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductSubCategoryPageRoutingModule"]],
      declarations: [_product_sub_category_page__WEBPACK_IMPORTED_MODULE_6__["ProductSubCategoryPage"]]
    })], ProductSubCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product-sub-category/product-sub-category.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/product-sub-category/product-sub-category.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductSubCategoryProductSubCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-sub-category {\n  background-color: WhiteSmoke;\n}\n.product-sub-category img {\n  height: 50px;\n  width: 50px;\n}\n.product-sub-category ion-card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1zdWItY2F0ZWdvcnkvRDpcXFNlZW1hXFxQcm9qZWN0XFxpdmlwbmkvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LXN1Yi1jYXRlZ29yeVxccHJvZHVjdC1zdWItY2F0ZWdvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9kdWN0LXN1Yi1jYXRlZ29yeS9wcm9kdWN0LXN1Yi1jYXRlZ29yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQ0NGO0FEQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEbUJFO0VBQ0UsV0FBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Qtc3ViLWNhdGVnb3J5L3Byb2R1Y3Qtc3ViLWNhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LXN1Yi1jYXRlZ29yeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogV2hpdGVTbW9rZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgLy8gd2lkdGg6IGF1dG87XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC8vIC50ZXh0LWFsaWduIHtcclxuICAvLyAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgLy8gICBmb250LXNpemU6IDE0cHg7XHJcbiAgLy8gICB0ZXh0LWluZGVudDogLTY1cHg7XHJcbiAgLy8gICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAvLyAgIGNvbG9yOiBibGFjaztcclxuICAvLyB9XHJcblxyXG4gIC8vIGlvbi1pdGVtIHtcclxuICAvLyAgIG1hcmdpbjogMi41cHg7XHJcbiAgLy8gICBwYWRkaW5nOiAwcHg7XHJcbiAgLy8gICBib3JkZXI6IHNvbGlkIHdoaXRlIDBweDtcclxuICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gfVxyXG4gIGlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucHJvZHVjdC1zdWItY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBXaGl0ZVNtb2tlO1xufVxuLnByb2R1Y3Qtc3ViLWNhdGVnb3J5IGltZyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ucHJvZHVjdC1zdWItY2F0ZWdvcnkgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/product-sub-category/product-sub-category.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/product-sub-category/product-sub-category.page.ts ***!
    \*************************************************************************/

  /*! exports provided: ProductSubCategoryPage */

  /***/
  function srcAppPagesProductSubCategoryProductSubCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductSubCategoryPage", function () {
      return ProductSubCategoryPage;
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


    var _providers_logger_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // all clear


    var ProductSubCategoryPage =
    /*#__PURE__*/
    function () {
      function ProductSubCategoryPage(logger, route, router) {
        _classCallCheck(this, ProductSubCategoryPage);

        this.logger = logger;
        this.route = route;
        this.router = router;
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
      }

      _createClass(ProductSubCategoryPage, [{
        key: "subcategoryName",
        value: function subcategoryName(catNames) {
          // this.logger.info("invoking subcategoryName ");
          var navigationExtras = {
            queryParams: {
              sub_category_id: catNames.sub_category_id,
              sub_category_name: catNames.sub_category_name,
              image: catNames.image
            }
          };
          this.router.navigate(["/category-product-details"], navigationExtras);
        }
      }, {
        key: "quickOrderFn",
        value: function quickOrderFn() {
          this.router.navigateByUrl("/search-products");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.queryParams.subscribe(function (params) {
            // console.log("=====================================the parameter data");
            _this.headerName = params["sub_category_name"];
            _this.catName = JSON.parse(params["subSubCategories"]);
          });
        }
      }]);

      return ProductSubCategoryPage;
    }();

    ProductSubCategoryPage.ctorParameters = function () {
      return [{
        type: _providers_logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProductSubCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-product-sub-category",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-sub-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-sub-category/product-sub-category.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-sub-category.page.scss */
      "./src/app/pages/product-sub-category/product-sub-category.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_logger_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ProductSubCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-product-sub-category-product-sub-category-module-es5.js.map