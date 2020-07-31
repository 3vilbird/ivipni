import { Component, OnInit } from "@angular/core";
import { NavController, LoadingController } from "@ionic/angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Users } from "../../../providers/commerce/users";
import { Rest } from "../../../providers/network/rest";
import { HomePage } from "../../home/home.page";
import { ForgotPasswordPage } from "../forgot-password/forgot-password.page";
import { RegistrationPage } from "../registration/registration.page";
import { Holders } from "../../../providers/holders/holders";
import { Logger } from "../../../providers/logger/logger";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public loginForm: any;
  public loginMsg = "";
  public loginId = "";
  public passwd = "";
  deviceToken: string;
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public rest: Rest,
    public holders: Holders,
    public loadingCtrl: LoadingController,
    public user: Users,
    public formBuilder: FormBuilder,
    public logger: Logger,
    public router: Router,
    public storage: Storage
  ) {
    this.deviceToken = this.holders.getDeviceToken();

    this.myForm = formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  async submit() {
    this.logger.info("invoking submit");
    this.logger.debug("myform" + this.myForm);
    this.loginId = this.myForm.value.username;
    this.passwd = this.myForm.value.password;
    this.logger.debug("loginId " + this.loginId);
    this.logger.debug("passwd " + this.passwd);
    this.loginMsg = "Validating User <" + this.loginId + ">. Please wait...";
    let loading = await this.loadingCtrl.create({
      message: ``,
    });
    loading.present();
    this.user.validateUser(
      this.loginId,
      this.passwd,
      this.deviceToken,
      (result, data) => {
        if (result == "1") {
          var _dataObj = JSON.parse(data);
          this.logger.info("log in data object" + JSON.stringify(_dataObj));
          this.loginMsg = _dataObj.message;
          this.storage.set("loginId", this.myForm.value.username);
          this.storage.set("passwd", this.myForm.value.password);
          this.rest.setAuthToken(_dataObj.userId, _dataObj.authToken);
          loading.dismiss();
          this.myForm.reset();
          this.loginMsg = "";
          this.router.navigateByUrl("/home");
        } else {
          loading.dismiss();
          this.myForm.reset();
          this.loginMsg = data;
        }
      }
    );
  }
  forgotPasswd() {
    this.router.navigateByUrl("/forgot-password");
  }

  registration() {
    this.router.navigateByUrl("/registration");
  }

  ngOnInit() {}
}
