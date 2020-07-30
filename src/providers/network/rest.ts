// error at line no 223
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Configurator } from "../configurator/configurator";
import { NetworkService } from "../network-service/network-service";
import { Logger } from "../logger/logger";
import "rxjs/add/operator/map";

/* 
  Generated class for the Rest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {
  public userId: string;
  public authToken: string;
  constructor(
    public http: HttpClient,
    public configurator: Configurator,
    public networkService: NetworkService,
    public loadingCtrl: LoadingController,
    public logger: Logger
  ) {}

  handleSuccess(result, callback, loader, url) {
    callback(result);
  }

  handleError(err, callback, loader, url) {
    callback();
  }

  postHandleSuccess(result, callback, url) {
    callback(result);
  }

  postHandleError(err, callback, url) {
    callback();
  }

  postsHandleSuccess(result, callback) {
    callback(result);
  }

  postsHandleError(err, callback) {
    callback();
  }

  handleSuccessObserver(result, observer, loader, url) {
    observer.next(result);
  }

  handleErrorObserver(err, observer, loader, url) {
    observer.error();
  }

  post(
    url: string,
    data: any,
    successCallbackFn: (data: any) => void,
    errorcallbackFn: () => void
  ) {
    var _this = this;

    _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);
    if (_this.tokenNeeded(url)) {
      data["user_id"] = _this.userId;
      data["access_token"] = _this.authToken;
    }

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
      errorcallbackFn();
    } else {
      this.http
        .post(
          _this.configurator.restServerBaseUrl +
            _this.configurator.restServerControllerUrl +
            url,
          data
        )
        .subscribe(
          (result) => _this.postHandleSuccess(result, successCallbackFn, url),
          (error) => _this.postHandleError(error, errorcallbackFn, url)
        );
    }
  }

  posting(
    url: string,
    data: any,
    successCallbackFn: (data: any) => void,
    errorcallbackFn: () => void
  ) {
    var _this = this;
    // let loading = _this.loadingCtrl.create({
    // header: ``
    // });

    _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
      errorcallbackFn();
    } else {
      // loading.present();
      this.http
        .post(
          _this.configurator.restServerBaseUrl +
            _this.configurator.restServerControllerUrl +
            url,
          data
        )
        .subscribe(
          (result) => _this.postHandleSuccess(result, successCallbackFn, url),
          (error) => _this.postHandleError(error, errorcallbackFn, url)
        );
    }
  }

  posts(
    url: string,
    data: any,
    successCallbackFn: (data: any) => void,
    errorcallbackFn: () => void
  ) {
    var _this = this;

    _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);
    if (_this.tokenNeeded(url)) {
      data["user_id"] = _this.userId;
      data["access_token"] = _this.authToken;
    }

    if (_this.networkService.nullConnection()) {
      _this.networkService.showNetworkAlert();
      errorcallbackFn();
    } else {
      this.http
        .post(
          _this.configurator.restServerBaseUrl +
            _this.configurator.restServerControllerUrl +
            url,
          data
        )
        .subscribe(
          (result) => _this.postsHandleSuccess(result, successCallbackFn),
          (error) => _this.postsHandleError(error, errorcallbackFn)
        );
    }
  }

  get(
    url: string,
    successCallbackFn: (data: any) => void,
    errorcallbackFn: () => void
  ) {
    var _this = this;
    _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);
    var authdetails = "";
    if (_this.tokenNeeded(url)) {
      authdetails += "&user_id=" + _this.userId;
      authdetails += "&access_token=" + _this.authToken;
      authdetails += "&";
    }
    let loading = _this.loadingCtrl.create({
      message: ``,
    });

    if (_this.networkService.nullConnection()) {
      _this.logger.debug("invoking networkService rest.ts file");
      errorcallbackFn();
      _this.networkService.showNetworkAlert();
    } else {
      this.http
        .get(
          _this.configurator.restServerBaseUrl +
            authdetails +
            _this.configurator.restServerControllerUrl +
            url
        )
        .subscribe(
          (result) =>
            _this.handleSuccess(result, successCallbackFn, loading, url),
          (error) => _this.handleError(error, errorcallbackFn, loading, url)
        );
    }
  }

  public gets(url: string): Observable<any> {
    var _this = this;
    let loading = _this.loadingCtrl.create({
      message: ``,
    });

    _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);
    var authdetails = "";
    if (_this.tokenNeeded(url)) {
      authdetails += "&user_id=" + _this.userId;
      authdetails += "&access_token=" + _this.authToken;
      authdetails += "&";
    }

    let fullUrl =
      _this.configurator.restServerBaseUrl +
      authdetails +
      _this.configurator.restServerControllerUrl +
      url;
    var obs = Observable.create(function (observer) {
      if (_this.networkService.nullConnection()) {
        _this.logger.info("invoking networkService rest.ts file");
        observer.error();
        _this.networkService.showNetworkAlert();
      } else {
        _this.http.get(fullUrl).subscribe(
          (result) =>
            _this.handleSuccessObserver(
              (result) => result.json(),
              observer,
              loading,
              url
            ),
          (error) => _this.handleErrorObserver(error, observer, loading, url)
        );
      }
    });
    return obs;
  }

  tokenNeeded(url: string) {
    var needed = true;
    var exclude = ["/validateUser", "/logout"];

    for (var index = 0; index < exclude.length; index++) {
      if (exclude[index] == url) {
        return false;
      }
    }

    return needed;
  }
  setAuthentication(userId: string, authToken: string) {
    this.userId = userId;
    this.authToken = authToken;
  }

  setAuthToken(userId: string, authToken: string) {
    this.userId = userId;
    this.authToken = authToken;
  }
}
