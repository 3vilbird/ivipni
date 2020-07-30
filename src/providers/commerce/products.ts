import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";
import { Rest } from "../network/rest";
import { Logger } from "../logger/logger";

/*
  Generated class for the Products provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Products {
  constructor(public restService: Rest, public logger: Logger) {}

  getPromotionalProducts(callbackFn: (productArray: any) => void) {
    this.restService.get(
      "/getPromotionalProducts",
      function (data) {
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }

  getBanners(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getBanners",
      function (data) {
        _this.logger.info("invoking getBanners function");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }
  getPrimaryCategories(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getPrimaryCategories",
      function (data) {
        _this.logger.info("invoking getBanners function");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }
  getBanks(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getBanks",
      function (data) {
        _this.logger.info("invoking getBanks function");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }

  getBrandName(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getBrandName",
      (data) => {
        _this.logger.info("invoking getBrandName");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getBestSellerProducts(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getBestSellerProducts",
      (data) => {
        _this.logger.info("invokingget getBestSellerProducts");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getWishlist(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getWishlist",
      function (data) {
        _this.logger.info("invoking wishList Details");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }
  getamountremain(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getamountremain",
      function (data) {
        _this.logger.info("invoking wishList Details");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }

  //category page get request
  getProductTypeCate(callbackFn: (productCate: any) => void) {
    var _this = this;

    this.restService.get(
      "/getProdutTypeCate",
      (data) => {
        _this.logger.info("invoking getProductTypeCat");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  //address for chekoutpage
  getAddress(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getAddress",
      (data) => {
        _this.logger.info("invoking get checkOut address details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getContactUsDetails(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getContact",
      (data) => {
        _this.logger.info("invoking get contact details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getCatProdDetails(
    category_id,
    page,
    callbackFn: (productsArray: any) => void
  ) {
    var _this = this;
    this.restService.get(
      "/getCatProdDetails?&category_id=" + category_id + "&page=" + page,
      (data) => {
        _this.logger.info("invoking category product details ");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getCart(callbackFn: (productsArray: any) => void) {
    var _this = this;

    this.restService.get(
      "/getCart",
      function (data) {
        _this.logger.info("invoking shoppingCart Details");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }

  getSearchBarDetails(callbackFn: (productsArray: any) => void) {
    var _this = this;

    this.restService.get(
      "/getSearchDetails",
      (data) => {
        _this.logger.info("invoking getSearchBarDetails");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  // AccountPage including profile,order,order delivery,password and notification pages

  getOrders(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getOrders",
      (data) => {
        _this.logger.info("invoking get myorder details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }
  getSellerDetails(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getSellerDetails",
      (data) => {
        _this.logger.info("invoking get myorder details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getMyOrderDeliverDetails(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getOrderDelivery",
      (data) => {
        _this.logger.info("invoking get my order deliver details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getUserDetails(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getUserDetails",
      (data) => {
        _this.logger.info("invoking get myprofile details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getNotification(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getNotification",
      (data) => {
        _this.logger.info("invoking get my notification details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getCartTotalDetails(callbackFn: (productsArray: any) => void) {
    var _this = this;

    this.restService.get(
      "/getCartTotal",
      function (data) {
        _this.logger.info("invoking cartTotal Details");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }

  getPayment(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getPayment",
      (data) => {
        _this.logger.info("invoking get payment success or failure details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  //checkout pay page

  getCheckOutPay(callbackFn: (productsArray: any) => void) {
    var _this = this;
    this.restService.get(
      "/getCheckPay",
      (data) => {
        _this.logger.info("invoking get checkout pay details");
        callbackFn(data);
      },
      () => {
        callbackFn([]);
      }
    );
  }

  getCartCount(): Observable<any> {
    this.logger.info("invoking get CartCount details");
    return this.restService.gets("/getCartCount");
  }

  getWishlistCount(): Observable<any> {
    this.logger.info("invoking get WishlistCount details");
    return this.restService.gets("/getWishlistCount");
  }

  //get states for registration and check out

  getStates(callbackFn: (productsArray: any) => void) {
    var _this = this;

    this.restService.get(
      "/getStates",
      function (data) {
        _this.logger.info("invoking state Details");
        callbackFn(data);
      },
      function () {
        callbackFn([]);
      }
    );
  }
}
