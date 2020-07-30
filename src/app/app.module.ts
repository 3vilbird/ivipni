import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { Products } from "src/providers/commerce/products";
import { Users } from "src/providers/commerce/users";
import { Configurator } from "src/providers/configurator/configurator";
import { Holders } from "src/providers/holders/holders";
import { Logger } from "src/providers/logger/logger";
import { Rest } from "src/providers/network/rest";
import { NetworkService } from "src/providers/network-service/network-service";
import { HttpClientModule } from "@angular/common/http";
import { Network } from "@ionic-native/network/ngx";
import { IonicStorageModule } from "@ionic/storage";
import { Device } from "@ionic-native/device/ngx";
import { OneSignal } from "@ionic-native/onesignal/ngx";
// import { AppVersion } from "@ionic-native/app-version/ngx";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SmsRetriever } from "@ionic-native/sms-retriever/ngx";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    Products,
    Users,
    Configurator,
    Holders,
    Logger,
    Rest,
    NetworkService,
    Network,
    Device,
    OneSignal,
    // AppVersion,
    InAppBrowser,
    SmsRetriever,
    PhotoViewer,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
