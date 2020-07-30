import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-seller-info-details",
  templateUrl: "./seller-info-details.page.html",
  styleUrls: ["./seller-info-details.page.scss"],
})
export class SellerInfoDetailsPage implements OnInit {
  tempimg =
    "https://www.kugellager-express.de/media/image/product/6939/lg/deep-groove-ball-bearing-6412-open-60x150x35-mm.jpg";

  firstname;
  lastname;
  company_name;
  email_id;
  phonenumber;
  profile_image;
  gst_image;
  pan_image;
  firstname1;
  lastname1;
  addressline1;
  addressline2;
  city1;
  state1;
  postcode1;
  toastMessage;
  sellerinfo = true;
  gstimagefile = false;
  pancardfile = false;

  constructor(
    public navCtrl: NavController,
    public users: Users,
    public toastCtrl: ToastController,
    public networkService: NetworkService,
    public logger: Logger,
    public route: ActivatedRoute
  ) {}

  // presentToast() {
  //   let toast = this.toastCtrl.create({
  //     message: this.toastMessage,
  //     duration: 1000,
  //     position: "middle"
  //   });

  //   toast.onDidDismiss(() => {
  //     this.logger.info("Dismissed toast");
  //   });

  //   toast.present();
  // }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // console.log("=====================================the parameter data");

      const sellerdata = JSON.parse(params["data"]);
      // this.catName = JSON.parse(params["subSubCategories"]);
      var _this = this;
      _this.firstname = sellerdata.firstname;
      _this.lastname = sellerdata.lastname;
      _this.company_name = sellerdata.company_name;
      _this.email_id = sellerdata.email_id;
      _this.phonenumber = sellerdata.phonenumber;
      _this.profile_image = sellerdata.profile_image;
      _this.gst_image = sellerdata.gst_image;
      _this.pan_image = sellerdata.pan_image;
      _this.firstname1 = sellerdata.firstname1;
      _this.lastname1 = sellerdata.lastname1;
      _this.addressline1 = sellerdata.addressline1;
      _this.addressline2 = sellerdata.addressline2;
      _this.state1 = sellerdata.state1;
      _this.city1 = sellerdata.city1;
      _this.postcode1 = sellerdata.postcode1;
    });
  }
}
