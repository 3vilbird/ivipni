// all clear
import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.page.html",
  styleUrls: ["./order-details.page.scss"],
})
export class OrderDetailsPage implements OnInit {
  public myOrderDeliver = [];
  productsArray = [];
  order_id;
  total;
  date_added;
  name;
  model;
  firstname;
  lastname;
  payment_address_2;
  payment_city;
  payment_country;
  payment_zone;
  payment_method;
  payment_address_1;
  payment_postcode;
  payment_company;
  email;
  telephone;
  toastMessage;
  postcode;
  orderTotals = [];
  constructor(
    public navCtrl: NavController,
    public users: Users,
    public toastCtrl: ToastController,
    private route: ActivatedRoute
  ) {
    var _this = this;
  }

  addToCart(order_id) {
    var _this = this;
    let addProduct;

    addProduct = {
      order_id: this.order_id,
    };

    _this.users.orderToCart(addProduct, function (result, data) {
      if (result == "1") {
        _this.toastMessage = "Products added to cart";
        _this.presentToast();
      } else {
        this.networkService.showErrorAlert();
      }
    });
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 1000,
      position: "middle",
    });

    // toast.onDidDismiss(() => {
    // });

    toast.present();
  }

  ngOnInit() {
    var _this = this;
    this.route.queryParams.subscribe((param) => {
      let orderDetails = JSON.parse(param["data"]);

      _this.order_id = orderDetails.order_id;
      _this.date_added = orderDetails.date_added;
      _this.total = orderDetails.total;
      _this.payment_method = orderDetails.payment_method;
      _this.productsArray = orderDetails.products;
      _this.firstname = orderDetails.firstname;
      _this.lastname = orderDetails.lastname;
      _this.payment_address_2 = orderDetails.payment_address_2;
      _this.payment_city = orderDetails.payment_city;
      _this.payment_zone = orderDetails.payment_zone;
      _this.payment_country = orderDetails.payment_country;
      _this.payment_method = orderDetails.payment_method;
      _this.payment_address_1 = orderDetails.payment_address_1;
      _this.payment_company = orderDetails.payment_company;
      _this.email = orderDetails.email;
      _this.telephone = orderDetails.telephone;
      _this.payment_postcode = orderDetails.payment_postcode;
      _this.name = orderDetails.name;
      _this.postcode = orderDetails.postcode;
      _this.orderTotals = orderDetails.totals;
    });
  }
}
