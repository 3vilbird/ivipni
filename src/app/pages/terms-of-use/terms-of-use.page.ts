// all clear
import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-terms-of-use",
  templateUrl: "./terms-of-use.page.html",
  styleUrls: ["./terms-of-use.page.scss"],
})
export class TermsOfUsePage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
}
