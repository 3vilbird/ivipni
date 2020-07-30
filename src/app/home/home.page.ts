import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  PopoverController,
  LoadingController,
  ToastController,
  Platform,
  AlertController,
} from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Products } from "../../providers/commerce/products";
import { NetworkService } from "../../providers/network-service/network-service";
import { Router, NavigationExtras } from "@angular/router";
import { Users } from "src/providers/commerce/users";
import { Holders } from "src/providers/holders/holders";
import { Logger } from "src/providers/logger/logger";
import { OneSignal } from "@ionic-native/onesignal/ngx";
// import { AppVersion } from "@ionic-native/app-version/ngx";
import { Device } from "@ionic-native/device/ngx";
import { JsonPipe } from "@angular/common";

import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  mySlideOptions = {
    initialSlide: 2,
    loop: true,
    autoplay: 1000,
    pager: true,
  };

  mySlideOptionsCategory = {
    slidesPerView: 4,
  };

  mySlideOptionsProduct = {
    slidesPerView: 2,
  };

  tempimg =
    "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";

  public topProducts = [];
  public brandName = [];
  public productCategory = [];
  public shopProductCategory = [];

  public subBrandItem: any;
  cartCount;
  wishlistCount;
  appVersionnumber;
  toastMessage;
  loginData;
  manufacturer;
  model;
  platforms;
  osVersion;
  cordova;
  vernumber;
  cat_id;
  device_token;
  public player_id: any;

  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  categories = {
    slidesPerView: 2.5,
  };

  constructor(
    private menu: MenuController,
    private router: Router,
    public toastCtrl: ToastController,
    public navCtrl: NavController,
    public productServices: Products,
    public popoverCtrl: PopoverController,
    public user: Users,
    public networkService: NetworkService,
    public loadingCtrl: LoadingController,
    public logger: Logger,
    public storage: Storage,
    public device: Device,
    public holders: Holders,
    public oneSignal: OneSignal,
    // private appVersion: AppVersion,
    platform: Platform,
    public alertCtrl: AlertController
  ) {
    var _this = this;

    // this loads the company name
    _this.loginData = this.holders.getLoginData();
    _this.logger.info("logdata " + JSON.stringify(_this.loginData));

    // _this.appVersion.getVersionNumber().then((version) => {
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
        _this.logger.debug(
          "checking productCategory" + JSON.stringify(_this.productCategory)
        );

        // loading.dismiss();
      });
    }
  }
  // to make slider to slide
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  ionViewDidEnter() {
    var _this = this;
    _this.logger.info("invoking the Home page ionView did load ");

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      this.productServices.getCartCount().subscribe((data) => {
        _this.logger.debug("checking getCartCount" + JSON.stringify(data));
        _this.cartCount = data.count;
        _this.logger.debug("getCartCount " + _this.cartCount);
      });

      this.productServices.getWishlistCount().subscribe((data) => {
        _this.logger.debug("checking getWishlistCount" + JSON.stringify(data));
        _this.wishlistCount = data.count;
        _this.logger.debug("getWishlistCount " + _this.wishlistCount);
      });
    }
  }

  async loader() {
    let loading = await this.loadingCtrl.create({
      message: ``,
      duration: 2000,
    });
    loading.present();
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 1000,
      position: "middle",
    });
    toast.present();
  }

  // routes
  infoBrandItem(catName) {
    this.logger.info("invoking Brand item");
    let navigationExtras: NavigationExtras = {
      queryParams: {
        sub_category_id: catName.sub_category_id,
        sub_category_name: catName.sub_category_name,
        image: catName.image,
        subSubCategories: JSON.stringify(catName.subSubCategories),
      },
    };

    this.router.navigate(["/product-sub-category"], navigationExtras);
  }
  openMenu() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  aboutUs() {
    this.logger.info("invoking aboutus page");
    return this.router.navigateByUrl("/about-us");
  }

  //my account
  account() {
    this.logger.info("invoking account page");
    this.router.navigateByUrl("/account");
  }

  cartFn() {
    this.logger.info("invoking Shopingcart page");
    this.router.navigateByUrl("/shoppingcart");
  }
  call() {
    var _this = this;
    _this.toastMessage = "tel:8310914770";
    _this.presentToast();
  }

  logout() {
    this.storage.remove("loginId");
    this.storage.remove("passwd");
    this.router.navigateByUrl("/login");
  }

  quickOrderFn() {
    this.router.navigateByUrl("/search-products");
  }

  sellerinfo() {
    this.logger.info("invoking aboutus page");
    this.router.navigateByUrl("/seller-info");
  }

  wishListFn() {
    var _this = this;
    if (_this.wishlistCount == 0) {
      _this.toastMessage = "There are no products in your wishlist";
      _this.presentToast();
    } else {
      _this.router.navigateByUrl("/wish-list");
    }
  }

  async addToCart(productCategory) {
    if (productCategory.alternate_brand == "YES") {
      let alert = await this.alertCtrl.create({
        header: "Ivipni",
        message:
          "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
        buttons: [
          {
            text: "No",
            role: "cancel",
            handler: () => {
              productCategory.alternate = "NO";
              this.addToCartDataInsert(productCategory);
            },
          },
          {
            text: "Yes",
            handler: () => {
              productCategory.alternate = "YES";
              this.addToCartDataInsert(productCategory);
            },
          },
        ],
      });
      alert.present();
    } else {
      productCategory.alternate = "";
      this.addToCartDataInsert(productCategory);
    }
  }

  addToCartDataInsert(productCategory) {
    let addProduct;
    let option;
    var _this = this;
    _this.logger.info("invoking add to cart function:-");
    _this.logger.debug(
      "checking addtocart object" + JSON.stringify(productCategory)
    );
    option = productCategory.option1;
    _this.logger.debug("checking addtocart object " + JSON.stringify(option));

    addProduct = {
      product_id: productCategory.product_id,
      product_option: productCategory.option1[0]["product_option_id"],
      product_option_value:
        productCategory.option1[0]["product_option_value_id"],
      product_quantity: productCategory["required"],
      alternate_brand: productCategory.alternate,
    };

    _this.logger.debug(
      "checking addtocart object " + JSON.stringify(addProduct)
    );
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
        if (
          Number(productCategory.required) <= Number(productCategory.quantity)
        ) {
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
          _this.networkService.showSuccessAlert(
            "We have maximum qnty of " + productCategory.quantity
          );
        }
      }
    } else {
      _this.networkService.showSuccessAlert("minimum quantity 1");
    }
  }

  allProduct() {
    // this.navCtrl.push(CategoryProductDetailsPage, { category_id: this.cat_id });
    let navigationExtras: NavigationExtras = {
      queryParams: {
        category_id: this.cat_id,
      },
    };
    this.router.navigate(["/category-product-details"], navigationExtras);
  }
}
