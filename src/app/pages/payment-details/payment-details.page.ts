// all clear
import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { Users } from "../../../providers/commerce/users";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-payment-details",
  templateUrl: "./payment-details.page.html",
  styleUrls: ["./payment-details.page.scss"],
})
export class PaymentDetailsPage implements OnInit {
  public myOrderDeliver = [];
  order_id;
  total;
  date_added;
  status;
  payment_method;
  twentyfiveamount;
  twentyfivetransaction_id;
  seventyfiveamount;
  seventyfivetransaction_id;
  seventyfivepayment_method;
  date;
  date_twentyfive;
  constructor(
    public navCtrl: NavController,
    public users: Users,
    public toastCtrl: ToastController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    var _this = this;
    this.route.queryParams.subscribe((param) => {
      let paymentDetails = JSON.parse(param["data"]);

      _this.order_id = paymentDetails.order_id;
      _this.date_added = paymentDetails.date_added;
      _this.total = paymentDetails.total;
      _this.status = paymentDetails.status;
      _this.twentyfiveamount = paymentDetails.twentyfiveamount;
      _this.payment_method = paymentDetails.payment_method;
      _this.twentyfivetransaction_id = paymentDetails.twentyfivetransaction_id;

      _this.seventyfiveamount = paymentDetails.seventyfiveamount;
      _this.seventyfivetransaction_id =
        paymentDetails.seventyfivetransaction_id;

      _this.seventyfivepayment_method =
        paymentDetails.seventyfivepayment_method;

      _this.date_twentyfive = paymentDetails.date_twentyfive;
      _this.date = paymentDetails.date;
    });
  }
}
