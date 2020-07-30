// error at line number 555

import { Component, OnInit } from "@angular/core";
import {
  NavController,
  // NavParams,
  ToastController,
  LoadingController,
} from "@ionic/angular";
import { Products } from "../../../providers/commerce/products";
import { HomePage } from "../../home/home.page";
// import { ShoppingcartPage } from "../shoppingcart/shoppingcart.page";
import { Users } from "../../../providers/commerce/users";
//import { CategoryProductDetailsInfoPage } from "../category-product-details-info/category-product-details-info.page";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";
import { Holders } from "../../../providers/holders/holders";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-category-product-details",
  templateUrl: "./category-product-details.page.html",
  styleUrls: ["./category-product-details.page.scss"],
})
export class CategoryProductDetailsPage implements OnInit {
  tempimg =
    "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";

  public catprodArray = [];

  showheartIcon = [];

  //select options variables
  public prods = [];

  place;

  toastMessage;

  optionEvent;

  promotionalProducts;

  bestSellerProducts;
  category_value;

  option2value = [];
  dataoption;
  cartCount;
  categorycount = false;
  page: number = 1;
  nextPage: number;
  showinfinate: Boolean = false;
  showTextMsg: Boolean = false;
  showScroll: Boolean = true;
  osVersion;
  place1;
  category_id;
  total_page;
  current_page;
  categoryname;

  selectOptions: any = {
    title: "select one",
  };

  constructor(
    public navCtrl: NavController,
    public productServices: Products,
    public users: Users,
    
    public toastCtrl: ToastController,
    public networkService: NetworkService,
    public loadingCtrl: LoadingController,
    public logger: Logger,
    public holders: Holders,
    private photoViewer: PhotoViewer,
    public alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    var _this = this;

    // getting the parameters from the url

    this.route.queryParams.subscribe((params) => {
      this.category_value = params["sub_category_id"];
      this.categoryname = params["sub_category_name"];

      // for the pramotional products
      _this.promotionalProducts = params["category_id"];
      _this.bestSellerProducts = params["category_id"];
    });

    let loading = loadingCtrl.create({
      message: ``,
    });
  }

  ngOnInit() {
    let _this = this;
    if (_this.category_value) {
      _this.logger.debug("category-value" + this.category_value);
      this.category_id = this.category_value;
    } else if (_this.promotionalProducts) {
      _this.logger.debug("promotionalProducts" + _this.promotionalProducts);
      this.category_id = _this.promotionalProducts;
    } else if (_this.bestSellerProducts) {
      _this.logger.debug("bestSellerProducts" + _this.bestSellerProducts);
      this.category_id = _this.bestSellerProducts;
    }
    if (_this.networkService.nullConnection()) {
      _this.logger.debug("invoking networkService rest.ts file");
      _this.networkService.showNetworkAlert();
    } else {
      // loading.present();

      this.productServices.getCatProdDetails(
        this.category_id,
        this.page,
        function (data) {
          
          if (data.status == "1") {
            // _this.logger.debug(
            //   "checking Array in category in details" + JSON.stringify(data)
            // );
            _this.catprodArray = data.data.products;
            _this.cartCount = data.count;
            _this.total_page = data.total_page;
            _this.current_page = data.current_page;
            _this.nextPage = data.next_page;
            _this.showheartIcon = [];

            _this.prods = [];
            var m = 0;
            for (var i = 0; i < _this.catprodArray.length; i++) {
              if (_this.catprodArray[i].product_id != 0) {
                var prod = {
                  prod_id: _this.catprodArray[i].product_id,
                };
                if (_this.catprodArray[i].option1[0].option2.length > 0) {
                  // if(_this.catprodArray[i].option1[0].option.option_value_id == _this.catprodArray[i].option1[0].option2[0].seller_id){
                  prod["name1"] =
                    _this.catprodArray[i].option1[0].option2[0].name;
                  prod["product_option_id1"] =
                    _this.catprodArray[
                      i
                    ].option1[0].option2[0].product_option_id;
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
                  // }
                  //console.log(prod["option2value"]);
                } else {
                  prod["option2value"] = [];
                  prod["name1"] = "";
                  prod["product_option_id1"] = "";
                  prod["product_option_value_id1"] = "";
                  prod["sellerdiscount"] = "";
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
                  prod["sellerdiscount"] =
                    _this.catprodArray[i].option1[0].sellerdiscount;
                  if (
                    Number(_this.catprodArray[i].option1[0].salesprice) >
                    _this.catprodArray[i].option1[0].price
                  ) {
                    prod["salesprice"] =
                      _this.catprodArray[i].option1[0].salesprice;
                  } else {
                    prod["salesprice"] = "";
                  }
                  prod["requestedQty"] = 1;
                } else {
                  prod["product_option_id"] = "";
                  prod["product_option_value_id"] = "";
                  prod["name"] = "";
                  prod["quantity"] = "";
                  prod["sku"] = "";
                  prod["price"] = "";
                  prod["salesprice"] = "";
                  prod["requestedQty"] = 1;
                }
                _this.prods.push(prod);
                _this.logger.debug("prods " + JSON.stringify(_this.prods));

                _this.showheartIcon.push({
                  wishlist_check: _this.catprodArray[i].wishlist_check,
                });
                _this.logger.debug("showheartIcon " + _this.showheartIcon);

                // loading.dismiss();
              }
            }
          } else {
            // loading.dismiss();
            _this.categorycount = true;
            _this.logger.debug("error of products");
          }
        }
      );
    }
  }

  // functions

  doInfinite(infiniteScroll) {
    this.showinfinate = true;
    this.holders.setInfinateScrollObj(infiniteScroll);
    this.page++;
    this.getCatProducts();

    setTimeout(() => {
      if (this.nextPage != 0) {
        return;
      } else {
        infiniteScroll.enable(false);
        this.showTextMsg = true;
      }
    }, 100);
  }

  getCatProducts() {
    var _this = this;

    if (_this.networkService.nullConnection()) {
      _this.logger.debug("invoking networkService rest.ts file");
      _this.networkService.showNetworkAlert();
    } else {
      _this.productServices.getCatProdDetails(
        this.category_id,
        this.page,
        function (data) {
          if (data.status == "1") {
            _this.holders.getInfinateScrollObj().complete();
            _this.logger.debug(
              "checking Array in category in details" + JSON.stringify(data)
            );
            for (var i = 0; i < data.data.products.length; i++) {
              if (data.data.products[i].product_id != 0) {
                _this.catprodArray.push(data.data.products[i]);
              }
            }

            _this.cartCount = data.count;
            _this.nextPage = data.next_page;
            _this.showheartIcon = [];
            _this.prods = [];
            var m = 0;
            for (var i = 0; i < _this.catprodArray.length; i++) {
              if (_this.catprodArray[i].product_id != 0) {
                var prod = {
                  prod_id: _this.catprodArray[i].product_id,
                };
                if (_this.catprodArray[i].option1[0].option2.length > 0) {
                  prod["name1"] =
                    _this.catprodArray[i].option1[0].option2[0].name;
                  prod["product_option_id1"] =
                    _this.catprodArray[
                      i
                    ].option1[0].option2[0].product_option_id;
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
                  prod["sellerdiscount"] =
                    _this.catprodArray[i].option1[0].sellerdiscount;
                  if (
                    Number(_this.catprodArray[i].option1[0].salesprice) >
                    _this.catprodArray[i].option1[0].price
                  ) {
                    prod["salesprice"] =
                      _this.catprodArray[i].option1[0].salesprice;
                  } else {
                    prod["salesprice"] = "";
                  }
                  prod["requestedQty"] = 1;
                } else {
                  prod["option2value"] = [];
                  prod["product_option_id"] = "";
                  prod["product_option_value_id"] = "";
                  prod["name"] = "";
                  prod["quantity"] = "";
                  prod["sku"] = "";
                  prod["price"] = "";
                  prod["salesprice"] = "";
                  prod["requestedQty"] = 1;
                }
                _this.prods.push(prod);
                _this.logger.debug("prods " + JSON.stringify(_this.prods));

                _this.showheartIcon.push({
                  wishlist_check: _this.catprodArray[i].wishlist_check,
                });
                _this.logger.debug("showheartIcon " + _this.showheartIcon);
              }
            }
          } else {
            _this.logger.debug("error of products");
          }
        }
      );
    }
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 1000,
      position: "middle",
    });

   

    toast.present();
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
              category.alternate = "NO";
              this.addToCartDataInsert(category, products);
            },
          },
          {
            text: "Yes",
            handler: () => {
              category.alternate = "YES";
              this.addToCartDataInsert(category, products);
            },
          },
        ],
      });
      await alert.present();
    } else {
      category.alternate = "";
      this.addToCartDataInsert(category, products);
    }
  }

  addToCartDataInsert(category, products) {
    let addProduct;

    var _this = this;
    _this.logger.info("invoking add to cart function:-");
    _this.logger.debug("checking addtocart object" + JSON.stringify(category));
    _this.logger.debug("checking addtocart object" + JSON.stringify(products));
    if (Number(products.requestedQty) > 0) {
      if (category.quantity_check == "NO") {
        for (var i = 0; i < _this.catprodArray.length; i++) {
          if (_this.catprodArray[i].product_id == category.product_id) {
            _this.logger.debug(
              "invoking if condition " + _this.catprodArray[i].product_id
            );
            _this.prods[i].requestedQty = products.requestedQty;

            for (var i = 0; i < _this.prods.length; i++) {
              if (this.prods[i].prod_id == category.product_id) {
                addProduct = {
                  product_id: category.product_id,
                  product_option: _this.prods[i]["product_option_id"],
                  product_option_value:
                    _this.prods[i]["product_option_value_id"],
                  product_option1: _this.prods[i]["product_option_id1"],
                  product_option_value1:
                    _this.prods[i]["product_option_value_id1"],
                  product_quantity: _this.prods[i]["requestedQty"],
                  alternate_brand: category.alternate,
                };

                _this.logger.debug(
                  "checking addtocart object " + JSON.stringify(addProduct)
                );

                break;
              }
            }
          }
        }
        this.users.addToCart(addProduct, function (result, data) {
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
        if (Number(products.requestedQty) <= Number(products.quantity)) {
          for (var i = 0; i < _this.catprodArray.length; i++) {
            if (_this.catprodArray[i].product_id == category.product_id) {
              _this.logger.debug(
                "invoking if condition " + _this.catprodArray[i].product_id
              );
              _this.prods[i].requestedQty = products.requestedQty;

              for (var i = 0; i < _this.prods.length; i++) {
                if (this.prods[i].prod_id == category.product_id) {
                  addProduct = {
                    product_id: category.product_id,
                    product_option: _this.prods[i]["product_option_id"],
                    product_option_value:
                      _this.prods[i]["product_option_value_id"],
                    product_option1: _this.prods[i]["product_option_id1"],
                    product_option_value1:
                      _this.prods[i]["product_option_value_id1"],
                    product_quantity: _this.prods[i]["requestedQty"],
                    alternate_brand: category.alternate,
                  };

                  _this.logger.debug(
                    "checking addtocart object " + JSON.stringify(addProduct)
                  );

                  break;
                }
              }
            }
          }
          this.users.addToCart(addProduct, function (result, data) {
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
            "you have maximum qnty of " + products.quantity
          );
        }
      }
    } else {
      _this.networkService.showSuccessAlert("minimum quentity 1");
    }
  }

  setWishlist(cate, index) {
    var _this = this;
    var productId = {
      product_id: cate.product_id,
    };

    _this.logger.debug("checking status " + cate.wishlist_check);

    if (cate.wishlist_check == "1") {
      _this.toastMessage = "Already present in the wish list";
      _this.presentToast();
    } else {
      for (var i = 0; i < _this.catprodArray.length; i++) {
        if (_this.catprodArray[i].product_id == cate.product_id) {
          if (_this.showheartIcon[i].wishlist_check == "1") {
            _this.toastMessage = "Already present in the wish list";
            _this.presentToast();
          } else {
            _this.showheartIcon[i].wishlist_check = 1;
            _this.logger.debug(
              "invoking if condition after " +
                _this.showheartIcon[i].wishlist_check
            );

            this.users.setWishlist(productId, function (result, data) {
              if (result == "1") {
                _this.logger.info("success callback");
                _this.toastMessage = data.toString();
                _this.presentToast();
              } else {
                _this.networkService.showErrorAlert();
              }
            });
          }
        }
      }
    }
  }

  imageview(image, name) {
    this.photoViewer.show(image, name, { share: false });
  }
  optionsFn(ev, id) {
    var k = 0;
    var _this = this;
    _this.logger.debug("checking options item " + _this.place);
    _this.logger.debug("ev " + ev);
    _this.optionEvent = ev;
    _this.logger.debug("id " + id);
    //   for (var i = 0; i < _this.catprodArray.length; i++){
    //     console.log("i"+_this.catprodArray.length);
    //     console.log("product_id"+_this.catprodArray[i].product_id);
    //     console.log("id" + id);
    //    if (_this.catprodArray[i].product_id == id) {

    //  }
    //   }

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
                // if( _this.catprodArray[i].option1[q].option2[j].quantity > 0){
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
                // }
              }
              if (_this.dataoption) {
                if (_this.dataoption.quantity > 0) {
                  _this.prods[i].option2value[k] = _this.dataoption;
                  k++;
                }
              }

              //_this.option2value =  _this.dataoption;
            }

            // _this.option2value =  _this.dataoption;
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
        this.prods[i].salesprice = ev.salesprice;
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

  addToCartQt() {
    this.networkService.showSuccessAlert("this product has no quantity");
  }

  productDetails(category) {
    var _this = this;
    _this.logger.debug("category " + category);

    // _this.navCtrl.push(CategoryProductDetailsInfoPage, category);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(category),
      },
    };

    _this.router.navigate(["/category-product-details-info"], navigationExtras);
  }

  homePageNav() {
    // this.navCtrl.setRoot(HomePage, {});
    this.router.navigateByUrl("/home");
  }

  cartPageNav() {
    // this.navCtrl.push(ShopingcartPage, {});
    this.router.navigateByUrl("/shoppingcart");
  }

  cartFn() {
    // this.navCtrl.push(ShopingcartPage, {});
    this.router.navigateByUrl("/shoppingcart");
  }
}
