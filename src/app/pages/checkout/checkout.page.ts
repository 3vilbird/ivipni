// has 4 errors line no 50, 120, 122,125

import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { FormBuilder, Validators } from "@angular/forms";
import { FormControl, FormGroup } from "@angular/forms";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Products } from "../../../providers/commerce/products";
import { Logger } from "../../../providers/logger/logger";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.page.html",
  styleUrls: ["./checkout.page.scss"],
})
export class CheckoutPage implements OnInit {
  states: string;
  public optionsList = [];

  myZone_id;

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
  checkForm: FormGroup;
  loading;

  constructor(
    public users: Users,
    public _form: FormBuilder,
    public productServices: Products,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger,
    private location: Location,
    private route: ActivatedRoute
  ) {
    var _this = this;

    _this.checkForm = new FormGroup({
      name: new FormGroup({
        first_name: new FormControl("", Validators.required),
        last_name: new FormControl("", [
          Validators.required,
          Validators.maxLength(32),
        ]),
        company: new FormControl("", [
          Validators.required,
          Validators.maxLength(32),
        ]),
        address1: new FormControl("", [
          Validators.required,
          Validators.maxLength(250),
        ]),
        address2: new FormControl("", [Validators.maxLength(250)]),
        city: new FormControl("", [
          Validators.required,
          Validators.maxLength(250),
        ]),
        zone_id: new FormControl("", [Validators.required]),
        postcode: new FormControl("", [
          Validators.required,
          Validators.maxLength(8),
        ]),
      }),
    });

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
    } else {
      this.loader();
      this.productServices.getStates(function (data) {
        _this.logger.debug("checking Array" + JSON.stringify(data));
        _this.optionsList = data.data;
        // loading.dismiss();
      });
    }

    //here goes our navParams.

    // _this.email = _this.navParams.get("email");
    // _this.telephone = _this.navParams.get("telephone");
    // _this.address_id = _this.navParams.get("address_id");
    // _this.customer_id = _this.navParams.get("customer_id");
    // _this.firstname = _this.navParams.get("firstname");
    // _this.lastname = _this.navParams.get("lastname");
    // _this.company = _this.navParams.get("company");
    // _this.address_1 = _this.navParams.get("address_1");
    // _this.address_2 = _this.navParams.get("address_2");
    // _this.city = _this.navParams.get("city");
    // _this.myZone_id = _this.navParams.get("zone_id");
    // _this.name = _this.navParams.get("name");
    // _this.postcode = _this.navParams.get("postcode");
  }

  // loader function
  async loader() {
    this.loading = await this.loadingCtrl.create({
      message: ``,
      duration: 1000,
    });
    this.loading.present();
  }

  myOptionFn() {
    this.logger.info("invoking the myotpins Fnuction");
    this.logger.debug("name " + this.name);

    for (var i = 0; i < this.optionsList.length; i++) {
      if (this.name == this.optionsList[i].name) {
        this.myZone_id = this.optionsList[i].zone_id;
        this.logger.debug("checking zone_id in myZone_id " + this.myZone_id);
        this.logger.debug(
          "checking the value in form ctrl " +
            this.checkForm.value.name.myZone_id
        );
        this.checkForm.value.name.myZone_id = this.myZone_id;
        this.logger.debug(
          "checking the value in form ctrl after updating it " +
            this.checkForm.value.name.myZone_id
        );
      }
    }
  }

  checkOutAddress() {
    var _this = this;

    let updateAdrressObj = {
      firstname: _this.firstname,
      lastname: _this.lastname,
      company: _this.company,
      address_1: _this.address_1,
      address_2: _this.address_2,
      city: _this.city,
      postcode: _this.postcode,
      zone_id: _this.myZone_id,
      address_id: _this.address_id,
    };

    _this.logger.debug("updateAdrressObj " + JSON.stringify(updateAdrressObj));

    if (updateAdrressObj.address_id) {
      // code...
      _this.logger.info("invoking updateAddressobj");

      this.users.updateAddress(updateAdrressObj, function (result, data) {
        if (result == "1") {
          _this.logger.info("success");
          // on success go back to the page
          _this.location.back();
        } else {
          _this.networkService.showErrorAlert();
        }
      });
    } else {
      _this.logger.info("invoking addAddressobj");

      this.users.addAddress(updateAdrressObj, function (result, data) {
        if (result == "1") {
          _this.logger.info("success");
          _this.location.back();
        } else {
          _this.networkService.showErrorAlert();
        }
      });
    }
  }

  back() {
    this.location.back();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((param) => {
      let data = param["data"]
    });
  }
}
