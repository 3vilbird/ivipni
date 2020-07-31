function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rootpage-rootpage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rootpage/rootpage.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rootpage/rootpage.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRootpageRootpagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div padding></div>\n  <div padding></div>\n  <div padding></div>\n\n  <div padding>\n      <img src=\"../../../assets/images/rootpage/rootpage.png\" />\n  </div>\n  <br>\n\n  <div padding></div>\n  <div padding></div>\n  <div padding></div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/rootpage/rootpage-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/rootpage/rootpage-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RootpagePageRoutingModule */

  /***/
  function srcAppPagesRootpageRootpageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootpagePageRoutingModule", function () {
      return RootpagePageRoutingModule;
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


    var _rootpage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rootpage.page */
    "./src/app/pages/rootpage/rootpage.page.ts");

    var routes = [{
      path: '',
      component: _rootpage_page__WEBPACK_IMPORTED_MODULE_3__["RootpagePage"]
    }];

    var RootpagePageRoutingModule = function RootpagePageRoutingModule() {
      _classCallCheck(this, RootpagePageRoutingModule);
    };

    RootpagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RootpagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rootpage/rootpage.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/rootpage/rootpage.module.ts ***!
    \***************************************************/

  /*! exports provided: RootpagePageModule */

  /***/
  function srcAppPagesRootpageRootpageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootpagePageModule", function () {
      return RootpagePageModule;
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


    var _rootpage_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rootpage-routing.module */
    "./src/app/pages/rootpage/rootpage-routing.module.ts");
    /* harmony import */


    var _rootpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rootpage.page */
    "./src/app/pages/rootpage/rootpage.page.ts");

    var RootpagePageModule = function RootpagePageModule() {
      _classCallCheck(this, RootpagePageModule);
    };

    RootpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rootpage_routing_module__WEBPACK_IMPORTED_MODULE_5__["RootpagePageRoutingModule"]],
      declarations: [_rootpage_page__WEBPACK_IMPORTED_MODULE_6__["RootpagePage"]]
    })], RootpagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/rootpage/rootpage.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/rootpage/rootpage.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRootpageRootpagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "page-rootpage div img {\n  max-height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvcGFnZXMvcm9vdHBhZ2Uvcm9vdHBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yb290cGFnZS9yb290cGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yb290cGFnZS9yb290cGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwYWdlLXJvb3RwYWdlIHtcbiAgICBkaXYgaW1nIHtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIFxuICAgIC5jb250ZW50LWlvcyB7XG4gICAgIFxuICAgIH1cbiAgICAuY29udGVudC1tZCB7XG4gICAgIFxuICAgIH1cbiAgfVxuICAiLCJwYWdlLXJvb3RwYWdlIGRpdiBpbWcge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/rootpage/rootpage.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/rootpage/rootpage.page.ts ***!
    \*************************************************/

  /*! exports provided: RootpagePage */

  /***/
  function srcAppPagesRootpageRootpagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RootpagePage", function () {
      return RootpagePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // all clear


    var RootpagePage =
    /*#__PURE__*/
    function () {
      function RootpagePage(navCtrl, platform) {
        _classCallCheck(this, RootpagePage);

        this.navCtrl = navCtrl;
        this.platform = platform;
        this.platform.ready().then(function () {});
      }

      _createClass(RootpagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RootpagePage;
    }();

    RootpagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    RootpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-rootpage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rootpage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rootpage/rootpage.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rootpage.page.scss */
      "./src/app/pages/rootpage/rootpage.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], RootpagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-rootpage-rootpage-module-es5.js.map