// all clear

import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  LoadingController,
} from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { Products } from "../../../providers/commerce/products";
import { NetworkService } from "../../../providers/network-service/network-service";
import { AddressPage } from "../address/address.page";
import { HomePage } from "../../home/home.page";
import { Logger } from "../../../providers/logger/logger";
import { Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-shoppingcart",
  templateUrl: "./shoppingcart.page.html",
  styleUrls: ["./shoppingcart.page.scss"],
})
export class ShoppingcartPage implements OnInit {
  toastMessage;
  public cartEmpty: boolean;
  public cartInfo: boolean;
  shopingCart = [];
  myValue = [];
  quanobj;
  total;
  allTotal: Array<string>;
  shoppingCartCount = false;
  quantityDebug = [];
  proceed = true;
  checkout = true;
  debug;
  quantitDebug = [];
  qua;
  constructor(
    public navCtrl: NavController,
    public productServices: Products,
    public users: Users,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger,
    private router: Router
  ) {
    var _this = this;

    _this.myValue = [];

    let loading = loadingCtrl.create({
      message: ``,
    });

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      // loading.present();
      this.productServices.getCart(function (data) {
        _this.logger.debug(
          "checking ShoppingCartDetails" + JSON.stringify(data)
        );
        _this.shopingCart = data.data;
        _this.total = data.cart_total;
        _this.allTotal = data.totals;
        _this.logger.debug("allTotal " + JSON.stringify(_this.allTotal));
        if (_this.shopingCart.length == 0) {
          _this.shoppingCartCount = true;
          // loading.dismiss();
        }

        if (data.status == "1") {
          _this.cartInfo = true;
          _this.cartEmpty = false;

          for (var i = 0; i < _this.shopingCart.length; i++) {
            _this.logger.info("invoking the for loop for shopingCart");

            _this.logger.info(_this.shopingCart[i].option[0].quantity);
            if (_this.shopingCart[i].product_status == 1) {
              if (_this.shopingCart[i].quantity_check == "NO") {
                _this.logger.debug(
                  "invoking quantity check1 " +
                    Number(_this.shopingCart[i].quantity)
                );
                _this.logger.debug(
                  "invoking quantity check2 " +
                    _this.shopingCart[i].option[0].quantity
                );

                if (_this.shopingCart[i].option[0].quantity <= 0) {
                  _this.quantityDebug.push({
                    cart_id: _this.shopingCart[i].cart_id,
                    product_quantity_count: true,
                    product_quantity_available: false,
                  });
                  _this.proceed = false;
                  // loading.dismiss();
                } else {
                  _this.proceed = false;
                  _this.quantityDebug.push({
                    cart_id: _this.shopingCart[i].cart_id,
                    product_quantity_count: false,
                    product_quantity_available: false,
                  });
                  // loading.dismiss();
                }
              } else {
                if (
                  Number(_this.shopingCart[i].quantity) >
                  Number(_this.shopingCart[i].option[0].quantity)
                ) {
                  _this.logger.debug(
                    "invoking quantity check1 " +
                      Number(_this.shopingCart[i].quantity)
                  );
                  _this.logger.debug(
                    "invoking quantity check2 " +
                      _this.shopingCart[i].option[0].quantity
                  );

                  if (_this.shopingCart[i].option[0].quantity <= 0) {
                    _this.quantityDebug.push({
                      cart_id: _this.shopingCart[i].cart_id,
                      product_quantity_count: true,
                      product_quantity_available: false,
                    });
                    _this.proceed = false;
                    // loading.dismiss();
                  } else {
                    _this.proceed = false;
                    _this.quantityDebug.push({
                      cart_id: _this.shopingCart[i].cart_id,
                      product_quantity_count: false,
                      product_quantity_available: true,
                    });
                    // loading.dismiss();
                  }
                } else {
                  _this.quantityDebug.push({
                    cart_id: _this.shopingCart[i].cart_id,
                    product_quantity_count: false,
                    product_quantity_available: false,
                  });
                  // loading.dismiss();
                }
              }
            } else {
              _this.quantityDebug.push({
                cart_id: _this.shopingCart[i].cart_id,
                product_quantity_count: false,
                product_quantity_available: false,
              });
              _this.checkout = false;

              // loading.dismiss();
            }

            _this.logger.debug(
              "checking quantityDebug" + JSON.stringify(_this.quantityDebug)
            );
            _this.myValue.push({ quantity: _this.shopingCart[i].quantity });
            _this.logger.debug("myvalue " + _this.myValue);
          }
        } else {
          _this.cartInfo = false;
          _this.cartEmpty = true;
          // loading.dismiss();
        }
      });
    }
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: this.toastMessage,
      duration: 100,
      position: "middle",
    });

    // toast.onDidDismiss(() => {
    //   this.logger.info("Dismissed toast");
    // });

    // toast.present();
  }

  myValueChange(ev, prod, op, qa) {
    var _this = this;

    let loading = _this.loadingCtrl.create({
      message: ``,
    });

    _this.logger.info("invoking shopingcart myvaluecahnge");
    _this.logger.debug("ev " + JSON.stringify(ev));
    _this.logger.debug("prod " + JSON.stringify(prod));
    _this.logger.debug("op " + JSON.stringify(op));
    
    if (prod.quantity_check == "NO") {
      if (ev.value > 0) {
        if (_this.quantityDebug.length >= 1) {
          for (var i = 0; i < _this.shopingCart.length; i++) {
            if (prod.cart_id == _this.shopingCart[i].cart_id) {
              _this.myValue[i].quantity = ev.value;
              _this.quantityDebug[i].cart_id = prod.cart_id;

              _this.quantityDebug[i].product_quantity_available = false;
              _this.quantityDebug[i].product_quantity_count = false;
            }
            _this.qua = ev.value;
          }
        } else {
          this.quantityDebug[0].product_quantity_count = false;
          this.quantityDebug[0].product_quantity_available = false;
        }
      } else {
        if (_this.quantityDebug.length >= 1) {
          for (var i = 0; i < _this.shopingCart.length; i++) {
            if (prod.cart_id == _this.shopingCart[i].cart_id) {
              _this.myValue[i].quantity = 1;
              _this.quantityDebug[i].cart_id = prod.cart_id;
            }
            _this.qua = 1;
            _this.networkService.showSuccessAlert("minimum quantity 1");
            break;
          }
        }
      }

      let addProduct = {
        product_id: prod.product_id,
        cart_id: prod.cart_id,
        product_option: op.product_option_id,
        product_option_value: op.product_option_value_id,

        product_quantity: _this.qua,
      };

      _this.logger.debug("addProduct " + JSON.stringify(addProduct));
      // loading.present();

      this.users.updateCart(addProduct, function (result, data) {
        if (result == "1") {
          _this.logger.debug("data" + data);

          var _dataObj = JSON.parse(data);
          _this.toastMessage = _dataObj.message;
          _this.shopingCart = _dataObj.data;
          _this.total = _dataObj.cart_total;
          _this.allTotal = _dataObj.totals;
          _this.logger.debug("allTotal " + _this.allTotal);
          // loading.dismiss();
          _this.presentToast();
        } else {
          // loading.dismiss();
          _this.networkService.showErrorAlert();
        }
      });
    } else {
      if (Number(ev.value) <= Number(op.quantity)) {
        if (ev.value > 0) {
          if (_this.quantityDebug.length >= 1) {
            for (var i = 0; i < _this.shopingCart.length; i++) {
              if (prod.cart_id == _this.shopingCart[i].cart_id) {
                _this.myValue[i].quantity = ev.value;
                _this.quantityDebug[i].cart_id = prod.cart_id;

                _this.quantityDebug[i].product_quantity_available = false;
                _this.quantityDebug[i].product_quantity_count = false;
              }
              _this.qua = ev.value;
            }
          } else {
            this.quantityDebug[0].product_quantity_count = false;
            this.quantityDebug[0].product_quantity_available = false;
          }
        } else {
          if (_this.quantityDebug.length >= 1) {
            for (var i = 0; i < _this.shopingCart.length; i++) {
              if (prod.cart_id == _this.shopingCart[i].cart_id) {
                _this.myValue[i].quantity = 1;
                _this.quantityDebug[i].cart_id = prod.cart_id;
              }
              _this.qua = 1;
              _this.networkService.showSuccessAlert("minimum quantity 1");
              break;
            }
          }
        }

        let addProduct = {
          product_id: prod.product_id,
          cart_id: prod.cart_id,
          product_option: op.product_option_id,
          product_option_value: op.product_option_value_id,

          product_quantity: _this.qua,
        };

        _this.logger.debug("addProduct " + JSON.stringify(addProduct));
        // loading.present();

        this.users.updateCart(addProduct, function (result, data) {
          if (result == "1") {
            _this.logger.debug("data" + data);

            var _dataObj = JSON.parse(data);
            _this.toastMessage = _dataObj.message;
            _this.shopingCart = _dataObj.data;
            _this.total = _dataObj.cart_total;
            _this.allTotal = _dataObj.totals;
            _this.logger.debug("allTotal " + _this.allTotal);
            // loading.dismiss();
            _this.presentToast();
          } else {
            // loading.dismiss();
            _this.networkService.showErrorAlert();
          }
        });
      } else if (op.quantity > 0) {
        _this.logger.debug("ev.valuee " + ev.value);
        _this.logger.debug("op.quantity " + op.quantity);

        if (_this.quantityDebug.length >= 1) {
          for (var i = 0; i < _this.shopingCart.length; i++) {
            if (prod.cart_id == _this.shopingCart[i].cart_id) {
              _this.myValue[i].quantity = op.quantity;
              _this.quantityDebug[i].cart_id = prod.cart_id;

              _this.quantityDebug[i].product_quantity_available = false;
              _this.quantityDebug[i].product_quantity_count = false;
            }
            _this.qua = op.quantity;
          }
        }

        let addProduct = {
          product_id: prod.product_id,
          cart_id: prod.cart_id,
          product_option: op.product_option_id,
          product_option_value: op.product_option_value_id,

          product_quantity: op.quantity,
        };

        _this.logger.debug("addProduct " + JSON.stringify(addProduct));
        // loading.present();

        this.users.updateCart(addProduct, function (result, data) {
          if (result == "1") {
            _this.logger.debug("data" + data);

            var _dataObj = JSON.parse(data);
            _this.toastMessage = _dataObj.message;
            _this.shopingCart = _dataObj.data;
            _this.total = _dataObj.cart_total;
            _this.allTotal = _dataObj.totals;
            _this.logger.debug("allTotal " + _this.allTotal);
            // loading.dismiss();
            //_this.presentToast();
          } else {
            // loading.dismiss();
            _this.networkService.showErrorAlert();
          }
        });

        _this.networkService.showSuccessAlert(
          "Maximum quantity available " + op.quantity + " only"
        );
      }
    }

    _this.logger.debug(
      "checking the myvalue: " + JSON.stringify(_this.myValue)
    );
    // loading.dismiss();
  }

  checkoutNav() {
    var _this = this;
    _this.proceed = true;

    _this.logger.info("invoking proced text checkout form");
    _this.logger.debug("cartTotal" + _this.total);

    let cartDetails = {
      cartTotal: _this.total,
      cartData: _this.shopingCart,
      allTotal: _this.allTotal,
    };
    _this.logger.debug(
      "checking the quantityDebug array " + JSON.stringify(_this.quantityDebug)
    );
    for (var i = 0; i < _this.shopingCart.length; i++) {
      if (_this.quantityDebug[i].cart_id == _this.shopingCart[i].cart_id) {
        if (_this.quantityDebug[i].product_quantity_count == true) {
          _this.proceed = false;
          break;
        }
        if (_this.quantityDebug[i].product_quantity_available == true) {
          _this.proceed = false;
          break;
        }
      }
    }
    _this.logger.debug("cartDetails " + cartDetails);
    _this.logger.debug("proceed " + _this.proceed);
    if (_this.checkout) {
      if (_this.proceed) {
        _this.logger.info("invoking true part");

        let navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(cartDetails),
          },
        };
        this.router.navigate(["/address"], navigationExtras);

        // _this.navCtrl.push(AddressPage, cartDetails);
      } else {
        _this.logger.info("invoking true part");

        _this.networkService.showSuccessAlert("Please remove error from cart");
      }
    } else {
      _this.networkService.showSuccessAlert("Please remove error from cart");
    }
  }

  deletItem(item) {
    var _this = this;
    var m = 0;
    _this.logger.debug("item " + JSON.stringify(item));

    for (var i = 0; i < _this.shopingCart.length; i++) {
      for (var h = 0; h < _this.shopingCart.length; h++) {
        if (item.cart_id != _this.shopingCart[h].cart_id) {
          _this.quanobj = { quantity: _this.shopingCart[h].quantity };

          _this.myValue[m] = _this.quanobj;
          m++;
        }
      }

      if (item == _this.shopingCart[i]) {
        _this.shopingCart.splice(i, 1);
      }
    }
    var k = 0;
    if (this.quantityDebug.length > 1) {
      this.logger.debug(
        "checking the deleteQnty " + JSON.stringify(_this.quantityDebug)
      );
      for (var j = 0; j < _this.quantityDebug.length; j++) {
        if (item.cart_id != _this.quantityDebug[j].cart_id) {
          _this.debug = {
            cart_id: _this.quantityDebug[j].cart_id,
            product_quantity_count:
              _this.quantityDebug[j].product_quantity_count,
            product_quantity_available:
              _this.quantityDebug[j].product_quantity_available,
          };
          _this.quantitDebug[k] = _this.debug;
          k++;
        }
      }
      _this.quantityDebug = _this.quantitDebug;
    }

    _this.logger.debug("list" + JSON.stringify(item.cart_id));

    let cartItem = {
      cart_id: item.cart_id,
    };
    this.users.removeCart(cartItem, function (result, data) {
      if (result == "1") {
        var _dataObj = JSON.parse(data);
        _this.toastMessage = _dataObj.message;
        _this.total = _dataObj.cart_total;

        _this.allTotal = _dataObj.totals;
        if (_dataObj.count == 0) {
          _this.shoppingCartCount = true;
        }
        _this.presentToast();
      } else {
        _this.networkService.showErrorAlert();
      }
    });
  }

  backToHome() {
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {}
}
