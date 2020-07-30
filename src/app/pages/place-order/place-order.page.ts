import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";


@Component({
  selector: "app-place-order",
  templateUrl: "./place-order.page.html",
  styleUrls: ["./place-order.page.scss"],
})
export class PlaceOrderPage implements OnInit {
  dataArray = [];
  email;
  telephone;
  address_id;
  customer_id;
  firstname;
  lastname;
  company;
  address_1;
  address_2;
  city;
  postcode;
  zone_id;
  name;
  cartTotal;
  allTotal = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  pay() {
    let placeObj = {
      dataArray: this.dataArray,
      email: this.email,
      telephone: this.telephone,
      address_id: this.address_id,
      customer_id: this.customer_id,
      firstname: this.firstname,
      lastname: this.lastname,
      company: this.company,
      address_1: this.address_1,
      address_2: this.address_2,
      city: this.city,
      postcode: this.postcode,
      zone_id: this.zone_id,
      name: this.name,
      cartTotal: this.cartTotal,
      allTotal: this.allTotal,
    };

    // this.navCtrl.push(PaymentPage, placeObj);
    // navigate to payment page
    let navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(placeObj),
      },
    };

    this.router.navigate(["/payment"], navigationExtras);
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      let cheakoutDetails = JSON.parse(param["data"]);

      // loading the data from the url
      this.email = cheakoutDetails.email;
      this.telephone = cheakoutDetails.telephone;
      this.address_id = cheakoutDetails.address_id;
      this.customer_id = cheakoutDetails.customer_id;
      this.firstname = cheakoutDetails.firstname;
      this.lastname = cheakoutDetails.lastname;
      this.company = cheakoutDetails.company;
      this.address_1 = cheakoutDetails.address_1;
      this.address_2 = cheakoutDetails.address_2;
      this.city = cheakoutDetails.city;
      this.postcode = cheakoutDetails.postcode;
      this.zone_id = cheakoutDetails.zone_id;
      this.name = cheakoutDetails.name;
      this.dataArray = cheakoutDetails.dataArray;
      this.cartTotal = cheakoutDetails.cartTotal;
      this.allTotal = cheakoutDetails.allTotal;
    });
  }
}
