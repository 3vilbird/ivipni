import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { LoginPage } from "../login/login.page";

@Component({
  selector: "app-reg-thankyou",
  templateUrl: "./reg-thankyou.page.html",
  styleUrls: ["./reg-thankyou.page.scss"],
})
export class RegThankyouPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  register1() {
    // this.navCtrl.push(LoginPage, {});
  }

  ngOnInit() {}
}
