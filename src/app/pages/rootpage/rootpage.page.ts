// all clear
import { Component, OnInit } from "@angular/core";
import { NavController, Platform } from "@ionic/angular";

@Component({
  selector: "app-rootpage",
  templateUrl: "./rootpage.page.html",
  styleUrls: ["./rootpage.page.scss"],
})
export class RootpagePage implements OnInit {
  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {});
  }

  ngOnInit() {}
}
