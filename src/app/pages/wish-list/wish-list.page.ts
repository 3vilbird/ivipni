// all clear
import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  LoadingController,
} from "@ionic/angular";
import { Products } from "../../../providers/commerce/products";
import { Users } from "../../../providers/commerce/users";
import { Logger } from "../../../providers/logger/logger";
import { NetworkService } from "../../../providers/network-service/network-service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.page.html",
  styleUrls: ["./wish-list.page.scss"],
})
export class WishListPage implements OnInit {
  tempimg =
    "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";

  public catprodArray = [];
  public prods = [];
  toastMessage;
  prod1;
  place;
  myValue = [];
  optionEvent;
  place1;
  dataoption;
  option2value = [];
  wishlist = false;
  dataarry = [];

  selectOptions: any = {
    title: "select",
  };

  constructor(
    public navCtrl: NavController,
    public productServices: Products,
    public users: Users,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger,
    public alertCtrl: AlertController
  ) {
    var _this = this;

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      // this.loading.present();
      this.loder();

      this.productServices.getWishlist(function (data) {
        _this.logger.debug("checking wishListDetails" + JSON.stringify(data));
        _this.catprodArray = data.data.products;

        _this.logger.debug(
          "checking the catprodArray " + JSON.stringify(_this.catprodArray)
        );
        _this.prods = [];
        _this.myValue = [];
        var m = 0;
        if (_this.catprodArray.length == 0) {
          // this.loading.dismiss();

          alert("there is no wishlistpage");
        } else {
          for (var i = 0; i < _this.catprodArray.length; i++) {
            var prod = {
              prod_id: _this.catprodArray[i].product_id,
            };
            if (_this.catprodArray[i].option1[0].option2.length > 0) {
              prod["name1"] = _this.catprodArray[i].option1[0].option2[0].name;
              prod["product_option_id1"] =
                _this.catprodArray[i].option1[0].option2[0].product_option_id;
              prod["product_option_value_id1"] =
                _this.catprodArray[
                  i
                ].option1[0].option2[0].product_option_value_id;
              prod["option2value"] = [];

              for (
                var k = 0;
                k < _this.catprodArray[i].option1[0].option2.length;
                k++
              ) {
                _this.dataoption = {
                  product_option_id:
                    _this.catprodArray[i].option1[0].option2[k]
                      .product_option_id,
                  product_option_value_id:
                    _this.catprodArray[i].option1[0].option2[k]
                      .product_option_value_id,
                  seller_id:
                    _this.catprodArray[i].option1[0].option2[k].seller_id,
                  name: _this.catprodArray[i].option1[0].option2[k].name,
                  quantity:
                    _this.catprodArray[i].option1[0].option2[k].quantity,
                };
                if (_this.dataoption) {
                  if (_this.dataoption.quantity > 0) {
                    prod["option2value"][m] = _this.dataoption;
                    m++;
                  }
                }
              }
            } else {
              prod["option2value"] = [];
              prod["name1"] = "";
              prod["product_option_id1"] = "";
              prod["product_option_value_id1"] = "";
            }

            if (_this.catprodArray[i].option1.length > 0) {
              prod["product_option_id"] =
                _this.catprodArray[i].option1[0].product_option_id;
              prod["product_option_value_id"] =
                _this.catprodArray[i].option1[0].product_option_value_id;
              prod["name"] = _this.catprodArray[i].option1[0].name;
              prod["quantity"] = _this.catprodArray[i].option1[0].quantity;
              prod["sku"] = _this.catprodArray[i].option1[0].sku;
              prod["price"] = _this.catprodArray[i].option1[0].price;
              if (
                Number(_this.catprodArray[i].option1[0].salesprice) >
                _this.catprodArray[i].option1[0].price
              ) {
                prod["salesprice"] =
                  _this.catprodArray[i].option1[0].salesprice;
              } else {
                prod["salesprice"] = "";
              }
              prod["sellerdiscount"] =
                _this.catprodArray[i].option1[0].sellerdiscount;
              prod["requestedQty"] = 1;
            } else {
              prod["product_option_id"] = "";
              prod["product_option_value_id"] = "";
              prod["name"] = "";
              prod["quantity"] = "";
              prod["sku"] = "";
              prod["price"] = "";
              prod["salesprice"] = "";
              prod["sellerdiscount"] = "";
              prod["requestedQty"] = "";
            }
            _this.prods.push(prod);
            _this.logger.debug("prods " + _this.prods);

            _this.myValue.push({ quantity: "1" });
            _this.logger.debug("myvalue " + _this.myValue);
            // this.loading.dismiss();
          }
        }
      });
    }
  }

  // loader
  async loder() {
    const loading = await this.loadingCtrl.create({
      message: ``,
      duration: 2000,
    });
    await loading.present();
  }
  // toast
  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 1000,
      position: "middle",
    });

    toast.present();
  }

  deleteWishlist(category) {
    var _this = this;
    var k = 0;
    for (var i = 0; i <= _this.catprodArray.length; i++) {
      if (category == _this.catprodArray[i]) {
        _this.catprodArray.splice(i, 1);
      }
    }
    _this.logger.debug("list" + JSON.stringify(category));
    for (var j = 0; j < _this.prods.length; j++) {
      if (_this.prods[j].prod_id != category.product_id) {
        _this.prod1 = {
          prod_id: _this.prods[j].prod_id,
          option2value: _this.prods[j].option2value,
          name1: _this.prods[j].name1,
          product_option_id1: _this.prods[j].product_option_id1,
          product_option_value_id1: _this.prods[j].product_option_value_id1,
          product_option_id: _this.prods[j].product_option_id,
          product_option_value_id: _this.prods[j].product_option_value_id,
          name: _this.prods[j].name,
          quantity: _this.prods[j].quantity,
          sku: _this.prods[j].sku,
          price: _this.prods[j].price,
          salesprice: _this.prods[j].salesprice,
          sellerdiscount: _this.prods[j].sellerdiscount,
          requestedQty: _this.prods[j].requestedQty,
        };
        _this.prods[k] = _this.prod1;
        k++;
      }
    }

    let wishProduct = {
      product_id: category.product_id,
    };
    this.users.deleteWishlist(wishProduct, function (result, data) {
      if (result == "1") {
        if (_this.catprodArray.length == 0) {
          _this.wishlist = true;
        }
        _this.toastMessage = "Product removed from wishlist";
        _this.presentToast();
      } else {
        _this.networkService.showErrorAlert();
      }
    });
  }
  async addToCart(category, products) {
    if (category.alternate_brand == "YES") {
      let alert = await this.alertCtrl.create({
        header: "Ivipni",
        message:
          "Are you fine with same product from other manufacturers (ex: Tata, SKF, FAG, etc)?",
        buttons: [
          {
            text: "No",
            role: "cancel",
            handler: () => {
              category.alternate_brand = "NO";
              this.wishlistToCart(category, products);
            },
          },
          {
            text: "Yes",
            handler: () => {
              category.alternate_brand = "YES";
              this.wishlistToCart(category, products);
            },
          },
        ],
      });
      alert.present();
    } else {
      category.alternate_brand = "";
      this.wishlistToCart(category, products);
    }
  }
  wishlistToCart(category, products) {
    let addProduct;
    var _this = this;
    if (category.quantity_check == "NO") {
      for (var i = 0; i < _this.catprodArray.length; i++) {
        if (_this.catprodArray[i].product_id == category.product_id) {
          _this.prods[i].requestedQty = products.requestedQty;

          for (var i = 0; i < _this.prods.length; i++) {
            if (_this.prods[i].prod_id == category.product_id) {
              addProduct = {
                product_id: category.product_id,
                product_option: _this.prods[i]["product_option_id"],
                product_option_value: _this.prods[i]["product_option_value_id"],
                product_option1: _this.prods[i].product_option_id1,
                product_option_value1: _this.prods[i].product_option_value_id1,
                product_quantity: _this.prods[i]["requestedQty"],
                alternate_brand: category.alternate_brand,
              };

              _this.logger.debug(
                "checking wishlistToCart object " + JSON.stringify(addProduct)
              );
              break;
            }
          }
        }
      }
      var k = 0;
      for (var j = 0; j < _this.prods.length; j++) {
        if (_this.prods[j].prod_id != category.product_id) {
          _this.prod1 = {
            prod_id: _this.prods[j].prod_id,
            option2value: _this.prods[j].option2value,
            name1: _this.prods[j].name1,
            product_option_id1: _this.prods[j].product_option_id1,
            product_option_value_id1: _this.prods[j].product_option_value_id1,
            product_option_id: _this.prods[j].product_option_id,
            product_option_value_id: _this.prods[j].product_option_value_id,
            name: _this.prods[j].name,
            quantity: _this.prods[j].quantity,
            sku: _this.prods[j].sku,
            price: _this.prods[j].price,
            salesprice: _this.prods[j].salesprice,
            sellerdiscount: _this.prods[j].sellerdiscount,
            requestedQty: _this.prods[j].requestedQty,
          };
          _this.prods[k] = _this.prod1;
          k++;
        }
      }

      for (var i = 0; i <= _this.catprodArray.length; i++) {
        if (category == _this.catprodArray[i]) {
          _this.catprodArray.splice(i, 1);
        }
      }
      if (addProduct["product_quantity"] > 0) {
        this.users.wishlistToCart(addProduct, function (result, data) {
          if (result == "1") {
            if (_this.catprodArray.length == 0) {
              _this.wishlist = true;
            }
            var _dataObj = JSON.parse(data);
            _this.toastMessage = _dataObj.message;
            _this.presentToast();
          } else {
            _this.networkService.showErrorAlert();
          }
        });
      } else {
        _this.networkService.showSuccessAlert("minimum quantity 1");
      }
    } else {
      if (Number(products.requestedQty) <= Number(products.quantity)) {
        for (var i = 0; i < _this.catprodArray.length; i++) {
          if (_this.catprodArray[i].product_id == category.product_id) {
            _this.prods[i].requestedQty = products.requestedQty;

            for (var i = 0; i < _this.prods.length; i++) {
              if (_this.prods[i].prod_id == category.product_id) {
                addProduct = {
                  product_id: category.product_id,
                  product_option: _this.prods[i]["product_option_id"],
                  product_option_value:
                    _this.prods[i]["product_option_value_id"],
                  product_option1: _this.prods[i].product_option_id1,
                  product_option_value1:
                    _this.prods[i].product_option_value_id1,
                  product_quantity: _this.prods[i]["requestedQty"],
                  alternate_brand: category.alternate_brand,
                };

                _this.logger.debug(
                  "checking wishlistToCart object " + JSON.stringify(addProduct)
                );
                break;
              }
            }
          }
        }
        var k = 0;
        for (var j = 0; j < _this.prods.length; j++) {
          if (_this.prods[j].prod_id != category.product_id) {
            _this.prod1 = {
              prod_id: _this.prods[j].prod_id,
              option2value: _this.prods[j].option2value,
              name1: _this.prods[j].name1,
              product_option_id1: _this.prods[j].product_option_id1,
              product_option_value_id1: _this.prods[j].product_option_value_id1,
              product_option_id: _this.prods[j].product_option_id,
              product_option_value_id: _this.prods[j].product_option_value_id,
              name: _this.prods[j].name,
              quantity: _this.prods[j].quantity,
              sku: _this.prods[j].sku,
              price: _this.prods[j].price,
              salesprice: _this.prods[j].salesprice,
              sellerdiscount: _this.prods[j].sellerdiscount,
              requestedQty: _this.prods[j].requestedQty,
            };
            _this.prods[k] = _this.prod1;
            k++;
          }
        }

        for (var i = 0; i <= _this.catprodArray.length; i++) {
          if (category == _this.catprodArray[i]) {
            _this.catprodArray.splice(i, 1);
          }
        }
        if (addProduct["product_quantity"] > 0) {
          this.users.wishlistToCart(addProduct, function (result, data) {
            if (result == "1") {
              if (_this.catprodArray.length == 0) {
                _this.wishlist = true;
              }
              var _dataObj = JSON.parse(data);
              _this.toastMessage = _dataObj.message;
              _this.presentToast();
            } else {
              _this.networkService.showErrorAlert();
            }
          });
        } else {
          _this.networkService.showSuccessAlert("minimum quantity 1");
        }
      } else {
        _this.networkService.showSuccessAlert(
          "you have maximum qnty of " + products.quantity
        );
      }
    }
  }

  optionsFn(ev, id) {
    var k = 0;
    var _this = this;
    _this.logger.debug("checking options item " + _this.place);
    _this.logger.debug("ev " + ev);
    _this.optionEvent = ev;
    _this.logger.debug("id " + id);

    for (var i = 0; i < _this.catprodArray.length; i++) {
      if (_this.catprodArray[i].product_id == id) {
        _this.prods[i].option2value = [];
        for (var q = 0; q < _this.catprodArray[i].option1.length; q++) {
          if (
            _this.catprodArray[i].option1[q].option_value_id ==
            ev.option_value_id
          ) {
            for (
              var j = 0;
              j < _this.catprodArray[i].option1[q].option2.length;
              j++
            ) {
              if (
                _this.catprodArray[i].option1[q].option2[j].seller_id ==
                ev.option_value_id
              ) {
                _this.prods[i].name1 =
                  _this.catprodArray[i].option1[q].option2[0].name;
                _this.prods[i].product_option_id1 =
                  _this.catprodArray[i].option1[q].option2[0].product_option_id;
                _this.prods[i].product_option_value_id1 =
                  _this.catprodArray[i].option1[
                    q
                  ].option2[0].product_option_value_id;

                _this.dataoption = {
                  product_option_id:
                    _this.catprodArray[i].option1[q].option2[j]
                      .product_option_id,
                  product_option_value_id:
                    _this.catprodArray[i].option1[q].option2[j]
                      .product_option_value_id,
                  seller_id:
                    _this.catprodArray[i].option1[q].option2[j].seller_id,
                  name: _this.catprodArray[i].option1[q].option2[j].name,
                  quantity:
                    _this.catprodArray[i].option1[q].option2[j].quantity,
                };
              }
              if (_this.dataoption) {
                if (_this.dataoption.quantity > 0) {
                  _this.prods[i].option2value[k] = _this.dataoption;
                  k++;
                }
              }
            }
          }
        }
        _this.logger.debug(
          "invoking if condition " + _this.catprodArray[i].product_id
        );
        this.prods[i].prod_id = _this.catprodArray[i].product_id;
        this.prods[i].product_option_value_id = ev.product_option_value_id;
        this.prods[i].name = ev.name;
        this.prods[i].quantity = ev.quantity;
        this.prods[i].sku = ev.sku;
        this.prods[i].price = ev.price;
        if (Number(ev.salesprice) > ev.price) {
          this.prods[i].salesprice = ev.salesprice;
        } else {
          this.prods[i].salesprice = "";
        }
        this.prods[i].sellerdiscount = ev.sellerdiscount;
        break;
      }
    }
  }
  option1Fn(ev, id) {
    var _this = this;
    _this.logger.debug("checking options item " + _this.place1);
    _this.logger.debug("ev " + ev);
    _this.optionEvent = ev;
    _this.logger.debug("id " + id);

    for (var i = 0; i < _this.catprodArray.length; i++) {
      if (_this.catprodArray[i].product_id == id) {
        _this.logger.debug(
          "invoking if condition " + _this.catprodArray[i].product_id
        );

        this.prods[i].name1 = ev.name;
        this.prods[i].product_option_id1 = ev.product_option_id;
        this.prods[i].product_option_value_id1 = ev.product_option_value_id;

        break;
      }
    }
  }

  moveToCart() {
    this.logger.debug(
      "checking the arrayof prods" + JSON.stringify(this.prods)
    );
    this.logger.debug("checking myValue array " + JSON.stringify(this.myValue));

    let allAddtoCart = [];

    for (var i = 0; i < this.catprodArray.length; i++) {
      this.logger.debug("product id " + this.catprodArray[i].product_id);

      var obj = {
        product_id: this.catprodArray[i].product_id,
        product_option: this.prods[i].product_option_id,
        product_option_value: this.prods[i].product_option_value_id,
        product_option1: this.prods[i].product_option_id1,
        product_option_value1: this.prods[i].product_option_value_id1,
        product_quantity: this.myValue[i].quantity,
      };
      this.logger.debug("obj " + obj);
      allAddtoCart.push(obj);
      this.logger.debug("myarray" + JSON.stringify(allAddtoCart));
    }
    this.logger.debug("allAddtoCart" + JSON.stringify(allAddtoCart));
  }

  ngOnInit() {}
}
