// all clear
import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Products } from "../../../providers/commerce/products";
import { PlaceOrderPage } from "../place-order/place-order.page";
import { CheckoutPage } from "../checkout/checkout.page";
import { Users } from "../../../providers/commerce/users";
import { Logger } from "../../../providers/logger/logger";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";

@Component({
  selector: "app-address",
  templateUrl: "./address.page.html",
  styleUrls: ["./address.page.scss"],
})
export class AddressPage implements OnInit {
  public checkOutAddr = [];
  checkOutAddrss = [];

  cartArray = [];
  cartTotal;
  allTotal;

  firstIndex = [];

  constructor(
    public navCtrl: NavController,

    public productServices: Products,
    public users: Users,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger,
    private route: ActivatedRoute,
    private router: Router
  ) {
    var _this = this;

    _this.logger.debug("cartArray data " + _this.cartArray);
  }

  ngOnInit() {
    var _this = this;
    this.route.queryParams.subscribe((params) => {
      const mydata = JSON.parse(params["data"]);

      _this.cartArray = mydata.cartData;
      _this.cartTotal = mydata.cartTotal;
      _this.allTotal = mydata.allTotal;
    });
  }

  async ionViewDidEnter() {
    var _this = this;
    _this.logger.info("invoking ionviewDidEnter for address");

    let loading = await _this.loadingCtrl.create({
      message: ``,
    });

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      loading.present();
      this.productServices.getAddress(function (data) {
        _this.logger.debug(
          "checking Array in check out address details" + JSON.stringify(data)
        );
        _this.checkOutAddrss = data.orders;

        if (_this.firstIndex.length == 0) {
          _this.firstIndex.push(data.orders[0]);
        }

        _this.logger.debug("firstIndex" + JSON.stringify(_this.firstIndex));

        if (_this.checkOutAddrss.length > 1) {
          for (var i = 1; i < _this.checkOutAddrss.length; i++) {
            _this.checkOutAddr.push(_this.checkOutAddrss[i]);
          }
        }

        _this.logger.debug(
          "remainingIndex:" + JSON.stringify(_this.checkOutAddr)
        );
        loading.dismiss();
      });
    }
  }

  //  TODO checkout edit
  checkoutEdit(details) {
    var _this = this;
    _this.logger.info("invoking checkoutEdit");
    _this.logger.debug(
      "checking the checkOutAddr before assinging to null" + this.checkOutAddr
    );

    _this.checkOutAddr = [];
    _this.logger.debug(
      "checking the checkOutAddr after assinging to numm" + this.checkOutAddr
    );
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(details),
      },
    };
    _this.router.navigate(["/checkout"], navigationExtras);

    // _this.navCtrl.push(CheckoutPage, details);

    _this.logger.debug("cheking the addressObject: " + JSON.stringify(details));
  }
  //checkout function
  checkoutFn() {
    var _this = this;

    _this.logger.debug(
      "checking the checkOutAddr before assinging to null" + this.checkOutAddr
    );
    _this.checkOutAddr = [];
    _this.logger.debug(
      "checking the checkOutAddr after assinging to numm" + this.checkOutAddr
    );

    _this.router.navigateByUrl("/checkout");
  }

  //TODO place order
  placeOrder(details) {
    var _this = this;
    _this.logger.debug("data " + JSON.stringify(details));

    let deleveryData = {
      email: details.email,
      telephone: details.telephone,
      address_id: details.address_id,
      customer_id: details.customer_id,
      firstname: details.firstname,
      lastname: details.lastname,
      company: details.company,
      address_1: details.address_1,
      address_2: details.address_2,
      city: details.city,
      postcode: details.postcode,
      zone_id: details.zone_id,
      name: details.name,
      dataArray: this.cartArray,
      cartTotal: this.cartTotal,
      allTotal: this.allTotal,
    };
    _this.logger.debug("deleveryData" + JSON.stringify(deleveryData));
    _this.logger.debug(
      "checking the checkOutAddr before assinging to null" + this.checkOutAddr
    );

    _this.checkOutAddr = [];
    _this.logger.debug(
      "checking the checkOutAddr after assinging to numm" + this.checkOutAddr
    );
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(deleveryData),
      },
    };

    // _this.navCtrl.push(PlaceOrderPage, deleveryData);
    _this.router.navigate(["/place-order"], navigationExtras);
  }

  // TODO =>delete address
  deleteAddress(details) {
    var _this = this;
    _this.logger.info("invoking deleteAddress");
    _this.logger.debug("detail " + details);
    let addressId = { address_id: details.address_id };

    //Delete Address
    for (var i = 0; i <= _this.checkOutAddr.length; i++) {
      if (details == _this.checkOutAddr[i]) {
        _this.checkOutAddr.splice(i, 1);
      }
    }

    this.users.deleteAddress(addressId, function (result, data) {
      if (result == "1") {
        _this.logger.info("success");
      } else {
        _this.logger.info("failure of add to addAddress");
      }
    });
  }
}
