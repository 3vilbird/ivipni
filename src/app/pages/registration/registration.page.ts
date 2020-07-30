import { Component, OnInit } from "@angular/core";

import { NavController, LoadingController } from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { Rest } from "../../../providers/network/rest";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { LoginPage } from "../login/login.page";
import { FormControl, FormGroup } from "@angular/forms";
import { Products } from "../../../providers/commerce/products";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.page.html",
  styleUrls: ["./registration.page.scss"],
})
export class RegistrationPage implements OnInit {
  public country;
  states: string;
  //customer;
  num: string;
  list: Array<{ value: number; text: string; checked: boolean }> = [];
  loading;
  public registrationForm: any;
  public option1;
  // please do insert the  name and zone id of the state
  public optionsList = [
    {
      name: "Karnataka",
      zone_id: 1111,
    },
    {
      name: "Tamil Nadu",
      zone_id: 2222,
    },
  ];

  customer;
  emailRegex: any =
    "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";
  toastMessage: string;
  myZone_id;
  customer1_id;
  categories;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public rest: Rest,
    public user: Users,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public productServices: Products,
    public networkService: NetworkService,
    public logger: Logger,
    public router: Router
  ) {
    var _this = this;
    var _this = this;
    // this call will fetch the categories from db

    this.productServices.getPrimaryCategories(function (data) {
      _this.logger.debug("checking Array" + JSON.stringify(data));
      _this.categories = data.data.categories;
    });

    _this.country = "India";

    _this.list.push({ value: 1, text: "TIN NO", checked: false });
    _this.list.push({ value: 2, text: "GRN NO", checked: false });
    _this.list.push({ value: 3, text: "GST NO", checked: false });
    _this.option1 = "Two Wheeler";

    _this.registrationForm = new FormGroup({
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("", [
        Validators.required,
        Validators.maxLength(32),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      reenterpassword: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      dob: new FormControl(""),
      // prefferpayment: new FormControl(""),
      // primarycategory: new FormControl(""),
      salPer: new FormControl(""),
      company_name: new FormControl("", [
        Validators.required,
        Validators.maxLength(50),
      ]),
      companyformationday: new FormControl(""),
      company_tax_number: new FormControl(""),
      //   Validators.required,
      //   Validators.maxLength(15),
      //   Validators.maxLength(15)
      // ]),
      alternativetelephone: new FormControl(""),
      fax: new FormControl(""),
      primarycategory: new FormControl(""),
      address1: new FormControl("", [
        Validators.required,
        Validators.maxLength(250),
      ]),
      address2: new FormControl("", [Validators.maxLength(250)]),
      city: new FormControl("", [
        Validators.required,
        Validators.maxLength(250),
      ]),
      state: new FormControl("", Validators.required),
      country: new FormControl("99", Validators.required),
      zip: new FormControl("", [
        Validators.required,
        Validators.maxLength(6),
        Validators.minLength(6),
      ]),
    });

    this.loading = loadingCtrl.create({
      message: ``,
    });
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

  myOptionFn() {
    this.logger.info("invoking the myotpins Fnuction");
    this.states = this.registrationForm.value.state;
    this.logger.debug("states " + this.states);

    for (var i = 0; i < this.optionsList.length; i++) {
      if (this.states == this.optionsList[i].name) {
        this.myZone_id = this.optionsList[i].zone_id;
        this.logger.debug("checking zone_id in myZone_id " + this.myZone_id);
        this.logger.debug(
          "checking the value in form ctrl " +
            this.registrationForm.value.myZone_id
        );
        this.registrationForm.value.myZone_id = this.myZone_id;
        this.logger.debug(
          "checking the value in form ctrl after updating it " +
            this.registrationForm.value.myZone_id
        );
      }
    }
  }

  async submit() {
    var _this = this;
    let loading = _this.loadingCtrl.create({
      message: ``,
    });
    _this.logger.debug(
      "change password:" + _this.registrationForm.value.password
    );
    _this.logger.debug(
      "re password:" + _this.registrationForm.value.reenterpassword
    );

    if (!_this.registrationForm.valid) {
      _this.logger.debug("registarion " + _this.registrationForm.value);
      let toast = await _this.toastCtrl.create({
        message: "Enter all required feilds",
        duration: 3000,
      });
      toast.present();
    } else if (
      _this.registrationForm.value.password ==
      _this.registrationForm.value.reenterpassword
    ) {
      let registrationDetails = {
        first_name: _this.registrationForm.value.first_name,
        last_name: _this.registrationForm.value.last_name,
        email: _this.registrationForm.value.email,
        mobile: _this.registrationForm.value.mobile,
        password: _this.registrationForm.value.password,
        dob: _this.registrationForm.value.dob,
        // prefferpayment: _this.registrationForm.value.prefferpayment,
        primarycategory: _this.registrationForm.value.primarycategory,
        salPer: _this.registrationForm.value.salPer,
        company_name: _this.registrationForm.value.company_name,
        companyformationday: _this.registrationForm.value.companyformationday,
        gst_number: _this.registrationForm.value.company_tax_number,
        alternativetelephone: _this.registrationForm.value.alternativetelephone,
        fax: _this.registrationForm.value.fax,
        address1: _this.registrationForm.value.address1,
        address2: _this.registrationForm.value.address2,
        city: _this.registrationForm.value.city,
        state: _this.myZone_id,
        country: _this.registrationForm.value.country,
        zip: _this.registrationForm.value.zip,
      };
      // this.loading.present();
      this.user.registerNewUser(registrationDetails, function (result, data) {
        if (result == "1") {
          _this.logger.info("invoking success");

          _this.logger.debug("invoking success" + JSON.parse(data));
          var _regdata = JSON.parse(data);

          _this.logger.debug("invoking success" + JSON.stringify(_regdata));
          _this.logger.debug("invoking success" + _regdata.customer_id);
          _this.networkService.showSuccessAlert(
            "Successfully registered, Please login"
          );
          _this.customer1_id = _regdata.customer_id;
          _this.presentToast();

          // this.loading.dismiss();
          _this.user.emailandsms(_this.customer1_id, (data) => {});

          _this.router.navigateByUrl("/login");
        } else {
          _this.logger.error("invoking failure" + data);
          // this.loading.dismiss();

          _this.networkService.showSuccessAlert(data);

          _this.logger.error("invoking error" + data);
        }
      });
    } else {
      _this.networkService.showSuccessAlert(
        "password and re-enter password should be same"
      );
    }
  }

  ngOnInit() {}
}
