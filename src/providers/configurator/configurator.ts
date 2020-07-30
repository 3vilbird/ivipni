import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

/*
  Generated class for the Configurator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Configurator {
  constructor() {}

  public logLevel = 1; // 1 - Errors, 2- Errors/Info , 3 - Error/Info/Debug
  // public restServerBaseUrl = "http://34.87.43.10/ivipni/index.php?";
  public restServerBaseUrl = "http://localhost:8080/ivipni/index.php?";
  public restServerControllerUrl = "route=restapi/restapi";
}
