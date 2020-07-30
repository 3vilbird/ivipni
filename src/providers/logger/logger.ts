import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Configurator } from "../configurator/configurator";

/*
  Generated class for the Logger provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Logger {
  public showDebug = true;
  public showInfo = true;
  public showError = true;

  constructor(configurator: Configurator) {
    this.showDebug = configurator.logLevel > 2;
    this.showInfo = configurator.logLevel > 1;
    this.showError = configurator.logLevel > 0;
  }

  public show(msg: string) {
    console.log(msg);
  }

  public debug(msg: string) {
    if (this.showDebug) {
      this.show("DEBUG: " + msg);
    }
  }

  public info(msg: string) {
    if (this.showDebug) {
      this.show("INFO: " + msg);
    }
  }

  public error(msg: string) {
    if (this.showDebug) {
      this.show("ERROR: " + msg);
    }
  }
}
