// all clear
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from "@ionic/angular";
import { Products } from "../../../providers/commerce/products";
import { Users } from "../../../providers/commerce/users";
import { NetworkService } from "../../../providers/network-service/network-service";
import { Logger } from "../../../providers/logger/logger";


@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  public noteValue;
  public notify: boolean;

  constructor(
    public navCtrl: NavController,
    public user: Users,
    public productServices: Products,
    public loadingCtrl: LoadingController,
    public networkService: NetworkService,
    public logger: Logger
  ) {
    var _this = this;
    // let loading = loadingCtrl.create({
    //  message: ``
    // });

    // if (_this.networkService.nullConnection()) {
    //   _this.networkService.showNetworkAlert();
    // } else {
    //   loading.present();
    //   this.productServices.getNotification(function(data) {
    //     _this.logger.debug(
    //       "checking my notification Details" + JSON.stringify(data)
    //     );
    //     _this.logger.debug("notification " + data.notification);

    //     _this.noteValue = data["notification"][0]["newsletter"];
    //     _this.logger.debug("notevalue " + _this.noteValue);
    //     if (_this.noteValue == 1) {
    //       _this.notify = true;
    //     } else {
    //       _this.notify = false;
    //     }
    //     _this.logger.debug("notify " + _this.notify);
    //     loading.dismiss();
    //   });
    // }
  }

  updateValue() {
    var _this = this;

    _this.notify = _this.notify; // If _this.noteValue is equal to true, now it will be set to false. If it's false, it will be set to true.

    let notificationDetails = {
      notification: _this.notify
    };
    _this.logger.debug(
      "notificationDetails " + JSON.stringify(notificationDetails)
    );

    this.user.setNotification(notificationDetails, function(result, data) {
      _this.logger.debug("checking my notification Details" + data);

      if (result == "1") {
        _this.logger.debug("checking my notification Details" + data);
      } else {
        _this.networkService.showErrorAlert();
      }
    });
  }

  ngOnInit() {
  }

}
