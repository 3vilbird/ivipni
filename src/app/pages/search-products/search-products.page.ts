// has one error at line 205

import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  LoadingController,
} from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Holders } from "../../../providers/holders/holders";
// import { PhotoViewer } from "@ionic-native/photo-viewer/ngx";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-search-products",
  templateUrl: "./search-products.page.html",
  styleUrls: ["./search-products.page.scss"],
})
export class SearchProductsPage implements OnInit {
  catprodArray = [];
  searchValue;
  showheartIcon = [];
  //select options variables
  public prods = [];
  nextPage: number;
  place;
  showinfinate: Boolean = false;
  showTextMsg: Boolean = false;
  toastMessage;
  optionEvent;
  cartCount;

  page: number = 1;
  myForm: FormGroup;
  place1;
  dataoption;
  option2value = [];
  selectOptions: any = {
    title: "select",
  };

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public users: Users,
    public networkService: NetworkService,
    public logger: Logger,
    public formBuilder: FormBuilder,
    public holders: Holders,
    public loadingCtrl: LoadingController,
    // private photoViewer: PhotoViewer,
    public alertCtrl: AlertController
  ) {
    this.myForm = formBuilder.group({
      search: ["", Validators.required],
    });
  }

  ionViewDidLoad() {
    this.logger.info("Hello SearchProducts Page");
  }




 async searchText() {
    let loading = await this.loadingCtrl.create({
      message: ``,
    });
    this.page = 1;
    this.searchValue = this.myForm.value.search;
    let searchData = {
      search: this.searchValue,
    };
    this.logger.debug(
      "invoking the searchtext value" + JSON.stringify(searchData)
    );
    if (searchData == null) {
      alert("checking allert");
    } else if (this.searchValue.length >= 3) {
      this.logger.debug("checking the search value" + this.searchValue.length);
      loading.present();
      this.users.searchDetails(searchData, this.page, (result, data) => {
        if (result == "1") {
          var _dataObj = JSON.parse(data);

          this.catprodArray = _dataObj.data.products;
          this.logger.debug(
            "checking the productsArray " + JSON.stringify(this.catprodArray)
          );

          this.cartCount = _dataObj.count;
          this.nextPage = _dataObj.next_page;

          this.logger.debug(
            "catprodArray " + JSON.stringify(this.catprodArray)
          );

          this.showheartIcon = [];
          this.prods = [];

          var m = 0;

          for (var i = 0; i < this.catprodArray.length; i++) {
            var prod = {
              prod_id: this.catprodArray[i].product_id,
            };
            if (this.catprodArray[i].option1[0].option2.length > 0) {
              prod["name1"] = this.catprodArray[i].option1[0].option2[0].name;
              prod["product_option_id1"] = this.catprodArray[
                i
              ].option1[0].option2[0].product_option_id;
              prod["product_option_value_id1"] = this.catprodArray[
                i
              ].option1[0].option2[0].product_option_value_id;
              prod["option2value"] = [];
              for (
                var k = 0;
                k < this.catprodArray[i].option1[0].option2.length;
                k++
              ) {
                this.dataoption = {
                  product_option_id: this.catprodArray[i].option1[0].option2[k]
                    .product_option_id,
                  product_option_value_id: this.catprodArray[i].option1[0]
                    .option2[k].product_option_value_id,
                  seller_id: this.catprodArray[i].option1[0].option2[k]
                    .seller_id,
                  name: this.catprodArray[i].option1[0].option2[k].name,
                  quantity: this.catprodArray[i].option1[0].option2[k].quantity,
                };
                if (this.dataoption) {
                  if (this.dataoption.quantity > 0) {
                    prod["option2value"][m] = this.dataoption;
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
            if (this.catprodArray[i].option1.length > 0) {
              prod["product_option_id"] = this.catprodArray[
                i
              ].option1[0].product_option_id;
              prod["product_option_value_id"] = this.catprodArray[
                i
              ].option1[0].product_option_value_id;
              prod["name"] = this.catprodArray[i].option1[0].name;
              prod["quantity"] = this.catprodArray[i].option1[0].quantity;
              prod["sku"] = this.catprodArray[i].option1[0].sku;
              prod["price"] = this.catprodArray[i].option1[0].price;

              if (
                Number(this.catprodArray[i].option1[0].salesprice) >
                this.catprodArray[i].option1[0].price
              ) {
                prod["salesprice"] = this.catprodArray[i].option1[0].salesprice;
              } else {
                prod["salesprice"] = "";
              }
              prod["sellerdiscount"] = this.catprodArray[
                i
              ].option1[0].sellerdiscount;
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
              prod["requestedQty"] = 1;
            }
            this.prods.push(prod);
            this.logger.debug(
              "checking prods array " + JSON.stringify(this.prods)
            );

            this.showheartIcon.push({
              wishlist_check: this.catprodArray[i].wishlist_check,
            });
            this.logger.debug(
              "cheking wishlistcheck " + JSON.stringify(this.showheartIcon)
            );
            loading.dismiss();
          }
        } else {
          this.logger.info("invoking else part of search");
          this.networkService.showSuccessAlert(
            "No products found for the given search, please change your search."
          );
          loading.dismiss();
        }
      });
    } else {
      this.logger.info("checking the else ");
      this.networkService.showSuccessAlert("please enter minmum 3 charecters");
    }
  }

  imageview(image) {
    // this.photoViewer.show(image);
  }

  doInfinite(infiniteScroll) {
    this.showinfinate = true;
    this.holders.setInfinateScrollObj(infiniteScroll);
    this.page++;
    this.getsearchProducts();

    setTimeout(() => {
      if (this.nextPage != 0) {
        return;
      } else {
        infiniteScroll.enable(false);
        this.showTextMsg = true;
      }
    }, 500);
  }
  getsearchProducts() {
    if (this.nextPage != 0) {
      //var _this = this;
      this.searchValue = this.myForm.value.search;
      let searchData = {
        search: this.searchValue,
      };
      this.logger.debug(
        "invoking the searchtext value" + JSON.stringify(searchData)
      );
      if (searchData == null) {
        alert("checking allert");
      } else if (this.searchValue.length >= 3) {
        this.logger.debug(
          "checking the search value" + this.searchValue.length
        );

        this.users.searchDetails(searchData, this.page, (result, data) => {
          if (result == "1") {
            this.holders.getInfinateScrollObj().complete();
            var _dataObj = JSON.parse(data);
            for (var i = 0; i < _dataObj.data.products.length; i++) {
              this.catprodArray.push(_dataObj.data.products[i]);
            }

            this.nextPage = _dataObj.next_page;

            this.logger.debug(
              "catprodArray " + JSON.stringify(this.catprodArray)
            );

            this.showheartIcon = [];
            this.prods = [];

            var m = 0;

            for (var i = 0; i < this.catprodArray.length; i++) {
              var prod = {
                prod_id: this.catprodArray[i].product_id,
              };
              if (this.catprodArray[i].option1[0].option2.length > 0) {
                // if(_this.catprodArray[i].option1[0].option.option_value_id == _this.catprodArray[i].option1[0].option2[0].seller_id){
                prod["name1"] = this.catprodArray[i].option1[0].option2[0].name;
                prod["product_option_id1"] = this.catprodArray[
                  i
                ].option1[0].option2[0].product_option_id;
                prod["product_option_value_id1"] = this.catprodArray[
                  i
                ].option1[0].option2[0].product_option_value_id;
                prod["option2value"] = [];
                for (
                  var k = 0;
                  k < this.catprodArray[i].option1[0].option2.length;
                  k++
                ) {
                  this.dataoption = {
                    product_option_id: this.catprodArray[i].option1[0].option2[
                      k
                    ].product_option_id,
                    product_option_value_id: this.catprodArray[i].option1[0]
                      .option2[k].product_option_value_id,
                    seller_id: this.catprodArray[i].option1[0].option2[k]
                      .seller_id,
                    name: this.catprodArray[i].option1[0].option2[k].name,
                    quantity: this.catprodArray[i].option1[0].option2[k]
                      .quantity,
                  };
                  if (this.dataoption) {
                    if (this.dataoption.quantity > 0) {
                      prod["option2value"][m] = this.dataoption;
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

              if (this.catprodArray[i].option1.length > 0) {
                prod["product_option_id"] = this.catprodArray[
                  i
                ].option1[0].product_option_id;
                prod["product_option_value_id"] = this.catprodArray[
                  i
                ].option1[0].product_option_value_id;
                prod["name"] = this.catprodArray[i].option1[0].name;
                prod["quantity"] = this.catprodArray[i].option1[0].quantity;
                prod["sku"] = this.catprodArray[i].option1[0].sku;
                prod["price"] = this.catprodArray[i].option1[0].price;

                if (
                  Number(this.catprodArray[i].option1[0].salesprice) >
                  this.catprodArray[i].option1[0].price
                ) {
                  prod["salesprice"] = this.catprodArray[
                    i
                  ].option1[0].salesprice;
                } else {
                  prod["salesprice"] = "";
                }
                prod["sellerdiscount"] = this.catprodArray[
                  i
                ].option1[0].sellerdiscount;
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
              this.prods.push(prod);
              this.logger.debug(
                "checking prods array " + JSON.stringify(this.prods)
              );

              this.showheartIcon.push({
                wishlist_check: this.catprodArray[i].wishlist_check,
              });
              this.logger.debug(
                "cheking wishlistcheck " + JSON.stringify(this.showheartIcon)
              );
            }
          } else {
            this.logger.info("invoking else part of search");
            this.networkService.showSuccessAlert(
              "No products found for the given search, please change your search."
            );
          }
        });
      } else {
        this.logger.info("checking the else ");
        this.networkService.showSuccessAlert(
          "please enter minmum 3 charecters"
        );
      }
    } else {
      return;
    }
  }

 async presentToast() {
    let toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 1000,
      position: "middle",
    });

    // toast.onDidDismiss(() => {
    //   this.logger.info("Dismissed toast");
    // });

     toast.present();
  }

  addToCart(category, products) {
    if (category.alternate_brand == "YES") {
      let alert = this.alertCtrl.create({
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
      // alert.present();
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
              if (_this.prods[i].prod_id == category.product_id) {
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
        if (products.requestedQty > 0) {
          this.users.addToCart(addProduct, function (result, data) {
            if (result == "1") {
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
              _this.logger.debug(
                "invoking if condition " + _this.catprodArray[i].product_id
              );
              _this.prods[i].requestedQty = products.requestedQty;

              for (var i = 0; i < _this.prods.length; i++) {
                if (_this.prods[i].prod_id == category.product_id) {
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
          if (products.requestedQty > 0) {
            this.users.addToCart(addProduct, function (result, data) {
              if (result == "1") {
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
    } else {
      _this.networkService.showSuccessAlert("minmum quantity 1");
    }
  }

  setWishlist(cate, index) {
    var _this = this;
    var productId = {
      product_id: cate.product_id,
    };

    if (cate.wishlist_check == 1) {
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

  addToCartQt() {
    this.networkService.showSuccessAlert("this product has no quantity");
  }

  ngOnInit() {}
}
