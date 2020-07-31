function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons end>\n      <ion-col>\n        <ion-button (click)=\"openMenu()\">\n          <ion-icon name=\"menu\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-button (click)=\"quickOrderFn()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"wishListFn()\">\n        <ion-icon name=\"heart\"></ion-icon>\n        <div class=\"qntyColor\">{{wishlistCount}}</div>\n      </ion-button>\n      <ion-button (click)=\"cartFn()\" class=\"badge-button\">\n        <ion-icon name=\"cart\"></ion-icon>\n        <ion-badge class=\"cart-badge\" color=\"danger\">{{cartCount}}</ion-badge>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!--side menu starts here-->\n<ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n  <ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>{{loginData.data.customer.company_name}}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item (click)=\"account()\" menuClose>\n        <ion-icon name=\"person-outline\" slot=\"start\"></ion-icon>\n        <ion-label>My account</ion-label>\n      </ion-item>\n      <ion-item (click)=\"wishListFn()\" menuClose>\n        <ion-icon name=\"heart-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Wish List</ion-label>\n      </ion-item>\n      <ion-item (click)=\"cartFn()\" menuClose>\n        <ion-icon name=\"cart-outline\" slot=\"start\"></ion-icon>\n        <ion-label>My cart</ion-label>\n      </ion-item>\n      <ion-item (click)=\"sellerinfo()\" menuClose>\n        <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Seller Info</ion-label>\n      </ion-item>\n      <ion-item (click)=\"call()\" menuClose>\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Contact Us</ion-label>\n      </ion-item>\n      <ion-item (click)=\"logout()\" menuClose>\n        <ion-icon name=\"log-out-outline\" slot=\"start\"></ion-icon>\n        <ion-label>Logout</ion-label>\n      </ion-item>\n      <ion-item menuClose>\n        <i>Version :{{appVersionnumber}}</i>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-content [fullscreen]=\"true\" id=\"main\">\n  <ion-card class=\"card-header\" *ngIf=\"productCategory.length != 0\">\n    <ion-card-header class=\"ion-align-items-center\">\n      <i>Promotional Products:</i>\n      <a color=\"primary\" (click)=\"allProduct()\" class=\"ion-justify-content-end\">\n        View All\n      </a>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-row class=\"topProducSlidSize\">\n    <ion-slides\n      *ngIf=\"topProducts && topProducts.length > 0\"\n      loop=\"true\"\n      speed=\"3000\"\n      autoplay=\"5000\"\n      pager=\"true\"\n      #slider\n      (ionSlidesDidLoad)=\"slidesDidLoad(slider)\"\n    >\n      <ion-slide *ngFor=\"let product of topProducts\">\n        <!--please replace the below string interpolation-->\n        <img src=\"{{product.image}}\" />\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-row class=\"prodCatindex\">\n    <ion-slides [options]=\"categories\">\n      <ion-slide\n        *ngFor=\"let prodCat of productCategory;let idx = index\"\n        class=\"product1\"\n      >\n        <ion-col *ngIf=\"idx <= 8\">\n          <ion-card class=\"productcategoryioncol\">\n            <ion-item-sliding #item>\n              <ion-item class=\"ionitemhome\"> <b>{{prodCat.name}}</b> </ion-item>\n            </ion-item-sliding>\n            <ion-item>\n              <p claas=\"valueelement\">{{prodCat.model}}</p>\n            </ion-item>\n\n            <p *ngIf=\"prodCat.option1[0].price != 0\">\n              <b>{{prodCat.option1[0].price}}</b>\n            </p>\n            <p\n              class=\"discount_amt\"\n              *ngIf=\"prodCat.option1[0].salesprice > prodCat.option1[0].price && prodCat.option1[0].salesprice != 0\"\n            >\n              {{prodCat.option1[0].salesprice}}\n            </p>\n\n            <ion-row class=\"homeclassionrow\">\n              <ion-col class=\"quantityborder\">\n                <div\n                  *ngIf=\"productCategory[idx].quantity > 0\"\n                  class=\"quantity ion-margin-start\"\n                >\n                  <ion-input\n                    class=\"quantityhome\"\n                    type=\"number\"\n                    value=\"\"\n                    [(ngModel)]=\"productCategory[idx].required\"\n                  >\n                  </ion-input>\n                </div>\n              </ion-col>\n              <ion-col class=\"cartforhome\">\n                <div *ngIf=\"productCategory[idx].quantity > 0\">\n                  <ion-button\n                    (click)=\"addToCart(productCategory[idx])\"\n                    expand=\"full\"\n                    fill=\"clear\"\n                    color=\"medium\"\n                  >\n                    <ion-icon name=\"cart\"></ion-icon>\n                  </ion-button>\n                </div>\n                <div\n                  *ngIf=\"productCategory[idx].quantity <= 0\"\n                  class=\"icon_home_color\"\n                >\n                  <div>Out of stock</div>\n                  <br />\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-card class=\"card-header\">\n    <ion-card-header>\n      <span class=\"right_textcategories\"><b>CATEGORIES:</b></span>\n    </ion-card-header>\n  </ion-card>\n  <ion-row class=\"brandNameSlideSize\">\n    <div *ngFor=\"let catName of brandName\">\n      <ion-col class=\"brandNameSlideSizeforcol\">\n        <ion-card class=\"brandNamehome\" (click)=\"infoBrandItem(catName);\">\n          <ion-item>\n            <!--please replace the temp image-->\n            <img class=\"imageCat\" src=\"{{catName.image}}\" />\n          </ion-item>\n          <ion-item>\n            <p class=\"nameinhome\">{{catName.sub_category_name}}</p>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </div>\n  </ion-row>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.cart-badge {\n  position: absolute;\n  top: 0px;\n  right: -6px;\n  font-size: 0.6em;\n  --padding-start: 3px;\n  --padding-end: 3px;\n}\n\n.price {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL0Rlc2t0b3AvaXZpcG5pL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBRUEsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJQTtFQUNFLGlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cblxuLmNhcnQtYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogLTZweDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAzcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDNweDtcbn1cbi5wcmljZSB7XG4gIHBhZGRpbmctbGVmdDo1cHg7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uY2FydC1iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAtNnB4O1xuICBmb250LXNpemU6IDAuNmVtO1xuICAtLXBhZGRpbmctc3RhcnQ6IDNweDtcbiAgLS1wYWRkaW5nLWVuZDogM3B4O1xufVxuXG4ucHJpY2Uge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/providers/holders/holders */
    "./src/providers/holders/holders.ts");
    /* harmony import */


    var src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js"); // import { AppVersion } from "@ionic-native/app-version/ngx";


    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(menu, router, toastCtrl, navCtrl, productServices, popoverCtrl, user, networkService, loadingCtrl, logger, storage, device, holders, oneSignal, // private appVersion: AppVersion,
      platform, alertCtrl) {
        _classCallCheck(this, HomePage);

        this.menu = menu;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.productServices = productServices;
        this.popoverCtrl = popoverCtrl;
        this.user = user;
        this.networkService = networkService;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
        this.storage = storage;
        this.device = device;
        this.holders = holders;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.mySlideOptions = {
          initialSlide: 2,
          loop: true,
          autoplay: 1000,
          pager: true
        };
        this.mySlideOptionsCategory = {
          slidesPerView: 4
        };
        this.mySlideOptionsProduct = {
          slidesPerView: 2
        };
        this.tempimg = "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";
        this.topProducts = [];
        this.brandName = [];
        this.productCategory = [];
        this.shopProductCategory = [];
        this.slideOptions = {
          initialSlide: 1,
          speed: 400
        };
        this.categories = {
          slidesPerView: 2.5
        };

        var _this = this; // this loads the company name


        _this.loginData = this.holders.getLoginData();

        _this.logger.info("logdata " + JSON.stringify(_this.loginData)); // _this.appVersion.getVersionNumber().then((version) => {
        //   _this.appVersionnumber = version;
        // });


        if (_this.networkService.nullConnection()) {
          _this.networkService.showNetworkAlert();
        } else {
          // loading.present();
          this.loader();
          this.productServices.getBanners(function (data) {
            _this.logger.debug("checking Array" + JSON.stringify(data));

            _this.topProducts = data.data;
            console.log("top prodicts==>", _this.topProducts);
          });
          this.productServices.getBrandName(function (data) {
            _this.logger.debug("checking procutName" + data);

            if (data.data && data.data.categories[0]) {
              _this.brandName = data.data.categories[0].sub_categories;
            }
          });
          this.productServices.getPromotionalProducts(function (data) {
            _this.logger.debug("checking productCategory" + JSON.stringify(data));

            _this.productCategory = data.data.products;
            _this.cat_id = data["cat_id"];

            _this.logger.debug("checking productCategory" + JSON.stringify(_this.productCategory)); // loading.dismiss();

          });
        }
      } // to make slider to slide


      _createClass(HomePage, [{
        key: "slidesDidLoad",
        value: function slidesDidLoad(slides) {
          slides.startAutoplay();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          var _this = this;

          _this.logger.info("invoking the Home page ionView did load ");

          if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();
          } else {
            this.productServices.getCartCount().subscribe(function (data) {
              _this.logger.debug("checking getCartCount" + JSON.stringify(data));

              _this.cartCount = data.count;

              _this.logger.debug("getCartCount " + _this.cartCount);
            });
            this.productServices.getWishlistCount().subscribe(function (data) {
              _this.logger.debug("checking getWishlistCount" + JSON.stringify(data));

              _this.wishlistCount = data.count;

              _this.logger.debug("getWishlistCount " + _this.wishlistCount);
            });
          }
        }
      }, {
        key: "loader",
        value: function loader() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: "",
                      duration: 2000
                    });

                  case 2:
                    loading = _context.sent;
                    loading.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastCtrl.create({
                      message: this.toastMessage,
                      duration: 1000,
                      position: "middle"
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // routes

      }, {
        key: "infoBrandItem",
        value: function infoBrandItem(catName) {
          this.logger.info("invoking Brand item");
          var navigationExtras = {
            queryParams: {
              sub_category_id: catName.sub_category_id,
              sub_category_name: catName.sub_category_name,
              image: catName.image,
              subSubCategories: JSON.stringify(catName.subSubCategories)
            }
          };
          this.router.navigate(["/product-sub-category"], navigationExtras);
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.menu.enable(true, "first");
          this.menu.open("first");
        }
      }, {
        key: "aboutUs",
        value: function aboutUs() {
          this.logger.info("invoking aboutus page");
          return this.router.navigateByUrl("/about-us");
        } //my account

      }, {
        key: "account",
        value: function account() {
          this.logger.info("invoking account page");
          this.router.navigateByUrl("/account");
        }
      }, {
        key: "cartFn",
        value: function cartFn() {
          this.logger.info("invoking Shopingcart page");
          this.router.navigateByUrl("/shoppingcart");
        }
      }, {
        key: "call",
        value: function call() {
          var _this = this;

          _this.toastMessage = "tel:8310914770";

          _this.presentToast();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.storage.remove("loginId");
          this.storage.remove("passwd");
          this.router.navigateByUrl("/login");
        }
      }, {
        key: "quickOrderFn",
        value: function quickOrderFn() {
          this.router.navigateByUrl("/search-products");
        }
      }, {
        key: "sellerinfo",
        value: function sellerinfo() {
          this.logger.info("invoking aboutus page");
          this.router.navigateByUrl("/seller-info");
        }
      }, {
        key: "wishListFn",
        value: function wishListFn() {
          var _this = this;

          if (_this.wishlistCount == 0) {
            _this.toastMessage = "There are no products in your wishlist";

            _this.presentToast();
          } else {
            _this.router.navigateByUrl("/wish-list");
          }
        }
      }, {
        key: "addToCart",
        value: function addToCart(productCategory) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!(productCategory.alternate_brand == "YES")) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 3;
                    return this.alertCtrl.create({
                      header: "Ivipni",
                      message: "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
                      buttons: [{
                        text: "No",
                        role: "cancel",
                        handler: function handler() {
                          productCategory.alternate = "NO";

                          _this2.addToCartDataInsert(productCategory);
                        }
                      }, {
                        text: "Yes",
                        handler: function handler() {
                          productCategory.alternate = "YES";

                          _this2.addToCartDataInsert(productCategory);
                        }
                      }]
                    });

                  case 3:
                    alert = _context3.sent;
                    alert.present();
                    _context3.next = 9;
                    break;

                  case 7:
                    productCategory.alternate = "";
                    this.addToCartDataInsert(productCategory);

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addToCartDataInsert",
        value: function addToCartDataInsert(productCategory) {
          var addProduct;
          var option;

          var _this = this;

          _this.logger.info("invoking add to cart function:-");

          _this.logger.debug("checking addtocart object" + JSON.stringify(productCategory));

          option = productCategory.option1;

          _this.logger.debug("checking addtocart object " + JSON.stringify(option));

          addProduct = {
            product_id: productCategory.product_id,
            product_option: productCategory.option1[0]["product_option_id"],
            product_option_value: productCategory.option1[0]["product_option_value_id"],
            product_quantity: productCategory["required"],
            alternate_brand: productCategory.alternate
          };

          _this.logger.debug("checking addtocart object " + JSON.stringify(addProduct));

          if (productCategory["required"] > 0) {
            if (productCategory.quantity_check == "NO") {
              _this.user.addToCart(addProduct, function (result, data) {
                if (result == "1") {
                  var _dataObj = JSON.parse(data);

                  _this.toastMessage = _dataObj.message;
                  _this.cartCount = _dataObj.count;

                  _this.presentToast();
                } else {
                  _this.networkService.showErrorAlert();
                }
              });
            } else {
              if (Number(productCategory.required) <= Number(productCategory.quantity)) {
                _this.user.addToCart(addProduct, function (result, data) {
                  if (result == "1") {
                    var _dataObj = JSON.parse(data);

                    _this.toastMessage = _dataObj.message;
                    _this.cartCount = _dataObj.count;

                    _this.presentToast();
                  } else {
                    _this.networkService.showErrorAlert();
                  }
                });
              } else {
                _this.networkService.showSuccessAlert("We have maximum qnty of " + productCategory.quantity);
              }
            }
          } else {
            _this.networkService.showSuccessAlert("minimum quantity 1");
          }
        }
      }, {
        key: "allProduct",
        value: function allProduct() {
          // this.navCtrl.push(CategoryProductDetailsPage, { category_id: this.cat_id });
          var navigationExtras = {
            queryParams: {
              category_id: this.cat_id
            }
          };
          this.router.navigate(["/category-product-details"], navigationExtras);
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_7__["Users"]
      }, {
        type: _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"]
      }, {
        type: src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__["Holders"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_commerce_products__WEBPACK_IMPORTED_MODULE_4__["Products"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_7__["Users"], _providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_5__["NetworkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_9__["Logger"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_11__["Device"], src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_8__["Holders"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_10__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map