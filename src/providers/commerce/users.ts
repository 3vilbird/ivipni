import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Rest } from "../network/rest";
import { Logger } from "../logger/logger";
import { Holders } from "../holders/holders";

/* 
  Generated class for the Users provider.
 
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Users {
  constructor(
    public restService: Rest,
    public logger: Logger,
    public holders: Holders
  ) {}

  validateUser(
    loginId: string,
    passwd: string,
    deviceToken: string,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("validating " + loginId);

    this.restService.post(
      "/validateUser",
      {
        loginId: loginId,
        password: passwd,
        device_token: deviceToken,
      },
      function (data) {
        _this.logger.debug("data " + JSON.stringify(data));
        _this.holders.setLoginData(data);
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(
              data.status,
              JSON.stringify({
                userId: data.data.customer.customer_id,
                authToken: data.data.customer.access_token,
                message: data.message,
              })
            );
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("validateUser: Error callback");
        if (callbackFn) {
          callbackFn("0", "Unknown Error encountered while validating user");
        }
      }
    );
  }

  //ForgotPasswd page post call's
  generateOTP(
    loginId: string,
    hash: string,

    callbackFn: (valid: string, msg: string, id: string) => void
  ) {
    var _this = this;
    _this.logger.debug("Generating  OTP for : " + JSON.stringify(loginId));
    this.restService.post(
      "/generateOTP",
      { loginId: loginId, hash: hash },
      function (data) {
        _this.logger.debug("generate OTP : " + JSON.stringify(data));
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message, data.customer_id);
          } else {
            callbackFn(data.status, data.message, data.customer_id);
          }
        }
      },
      function () {
        _this.logger.info("generateOTP: Error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to generate OTP", "checking");
        }
      }
    );
  }

  //validating otp
  validateOTP(
    otpNumber: any,
    loginId: any,
    callbackFn: (valid: string, msg: string, id: string) => void
  ) {
    var _this = this;
    _this.logger.debug(
      "checking validateOTP for otpNumber " + JSON.stringify(otpNumber)
    );
    _this.logger.debug(
      "checking validateOTP for loginId " + JSON.stringify(loginId)
    );

    this.restService.posts(
      "/validateOTP",
      { loginId: loginId, otp: otpNumber },
      function (data) {
        _this.logger.debug(
          "checking the validateotp data " + JSON.stringify(data)
        );
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message, data.access_token);
          } else {
            callbackFn(data.status, data.message, data.access_token);
          }
        }
      },
      function () {
        _this.logger.info("validateOTP: error call back");
        if (callbackFn) {
          callbackFn("0", "failed to validate OTP", "falied");
        }
      }
    );
  }

  //newpassword api call

  newPassword(
    newPassword: any,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("newpassword data " + JSON.stringify(newPassword));
    this.restService.posting(
      "/newPassword",
      newPassword,
      function (data) {
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message);
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("newPassword: Error callback");
        if (callbackFn) {
          callbackFn("0", "failed to newpassword");
        }
      }
    );
  }

  resetPassword(
    passwd: string,
    callbckFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("Reset Password as : " + passwd);

    this.restService.post(
      "/resetPassword",
      { passwd: passwd },
      function (data) {
        if (callbckFn) {
          if (data.status == "1") {
            callbckFn(data.status, data.message);
          } else {
            callbckFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("ResetPassword: Error callback");
        if (callbckFn) {
          callbckFn("0", "Failed to ResetPassword");
        }
      }
    );
  }

  //Registration post call's

  registerNewUser(
    registrationDetails: any,
    callbckFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug(
      "Registrating Users Details for :" + JSON.stringify(registrationDetails)
    );

    this.restService.post(
      "/registerNewUser",
      registrationDetails,
      function (data) {
        _this.logger.debug(
          "checking the data for the register : " + JSON.stringify(data)
        );
        if (callbckFn) {
          if (data.status == "1") {
            callbckFn(
              data.status,
              JSON.stringify({
                message: data.data.message,
                customer_id: data.data.customer_id,
              })
            );
          } else {
            callbckFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("RegistrationNewUser: Error Callback");
        if (callbckFn) {
          callbckFn("0", "Registration Failed");
        }
      }
    );
  }
  //gmail
  emailandsms(
    customer1_id: string,
    callbckFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.restService.post(
      "/emailandsms",
      { customer_id: customer1_id },
      function (data) {
        callbckFn("1", "email");

        _this.logger.info("email to user");
      },
      function () {
        callbckFn("0", "email");
        _this.logger.info("Error Callback");
      }
    );
  }

  //Change password post call's

  changePassword(
    passwordDetail,
    callbckFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("Udating you old passwd:" + passwordDetail);

    this.restService.post(
      "/changePassword",
      passwordDetail,
      function (data) {
        if (callbckFn) {
          if (data.status == "1") {
            callbckFn(data.status, data.message);
          } else {
            callbckFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("ChangePasswd: Error Callback");
        if (callbckFn) {
          callbckFn("0", "Change Passwd Failed");
        }
      }
    );
  }

  //contact Us post call

  contactUs(contactDetails, callbckFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug("Contacting :" + contactDetails);

    this.restService.post(
      "/contactUs",
      contactDetails,
      function (data) {
        if (callbckFn) {
          if (data.status == "1") {
            callbckFn(data.status, data.message);
          } else {
            callbckFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("ContactUs: Error Callback");
        if (callbckFn) {
          callbckFn("0", "Contactus Failed");
        }
      }
    );
  }

  setWishlist(productId, callbckFn: (valid: string, msg: string) => void) {
    var _this = this;

    _this.logger.debug("setWishlist obj check " + JSON.stringify(productId));

    this.restService.post(
      "/setWishlist",
      productId,
      function (data) {
        _this.logger.debug(
          "checking the wishlist check data" + JSON.stringify(data)
        );
        if (callbckFn) {
          if (data.status == "1") {
            callbckFn(data.status, data.message);
          } else {
            callbckFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("setWishlist: Error Callback");
        if (callbckFn) {
          callbckFn("0", "setWishlist Failed");
        }
      }
    );
  }

  //delete wishlist
  deleteWishlist(
    wishProduct,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("deleting wishlist for : " + wishProduct);

    this.restService.post(
      "/deleteWishlist",
      wishProduct,
      function (data) {
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message);
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("add to wishlist: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to add wishlist");
        }
      }
    );
  }

  addToCart(addProduct, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug(
      "addToCart users.ts file check " + JSON.stringify(addProduct)
    );

    this.restService.post(
      "/addToCart",
      addProduct,
      function (data) {
        _this.logger.debug(
          "checking the data in addTo Cart" + JSON.stringify(data)
        );
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, JSON.stringify(data));
          } else {
            callbackFn(data.status, data);
          }
        }
      },
      function () {
        _this.logger.info("add to cart: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to add to cart");
        }
      }
    );
  }
  //deviceinfo
  deviceInfo(deviceInfo, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;

    this.restService.post(
      "/deviceInfo",
      deviceInfo,
      function (data) {
        _this.logger.debug("deviceInfo" + JSON.stringify(data));
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, JSON.stringify(data));
          } else {
            callbackFn(data.status, data);
          }
        }
      },
      function () {
        _this.logger.info("add to cart: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to add to cart");
        }
      }
    );
  }
  //add to order to cart

  orderToCart(addProduct, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug(
      "ordertoCart users.ts file check " + JSON.stringify(addProduct)
    );

    this.restService.post(
      "/orderToCart",
      addProduct,
      function (data) {
        _this.logger.debug(
          "checking the data in addTo Cart" + JSON.stringify(data)
        );
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, JSON.stringify(data));
          } else {
            callbackFn(data.status, data);
          }
        }
      },
      function () {
        _this.logger.info("add  order to cart: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to add order to cart");
        }
      }
    );
  }

  //add to wishlist

  wishlistToCart(addProduct, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug(
      "wishlistToCart users.ts file check " + JSON.stringify(addProduct)
    );

    this.restService.post(
      "/wishlistToCart",
      addProduct,
      function (data) {
        _this.logger.debug(
          "checking the data in addTo Cart" + JSON.stringify(data)
        );
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, JSON.stringify(data));
          } else {
            callbackFn(data.status, data);
          }
        }
      },
      function () {
        _this.logger.info("add to cart: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to add to cart");
        }
      }
    );
  }

  //updateCart post call

  updateCart(addProduct, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug(
      "addToCart users.ts file check " + JSON.stringify(addProduct)
    );

    this.restService.post(
      "/updateCart",
      addProduct,
      function (data) {
        _this.logger.debug(
          "addToCart users.ts file check " + JSON.stringify(data)
        );
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, JSON.stringify(data));
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("updateCart: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to updateCart");
        }
      }
    );
  }

  //remove cart

  removeCart(cartItem, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug("deleting cart for : " + JSON.stringify(cartItem));

    this.restService.post(
      "/removeCart",
      cartItem,
      function (data) {
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, JSON.stringify(data));
          } else {
            callbackFn(data.status, data);
          }
        }
      },
      function () {
        _this.logger.info("removeCart: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to removeCart");
        }
      }
    );
  }

  //udateAddress on existing one

  updateAddress(
    updateAdrressObj,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug(
      "deleting updateAddress for : " + JSON.stringify(updateAdrressObj)
    );

    this.restService.post(
      "/updateAddress",
      updateAdrressObj,
      function (data) {
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message);
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("updateAddress: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to updateAddress");
        }
      }
    );
  }

  //add address

  addAddress(
    updateAdrressObj,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug(
      "deleting addAddress for : " + JSON.stringify(updateAdrressObj)
    );

    this.restService.post(
      "/addAddress",
      updateAdrressObj,
      function (data) {
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message);
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("addAddress: error callback");
        if (callbackFn) {
          callbackFn("0", "Failed to addAddress");
        }
      }
    );
  }
  //setNotification

  setNotification(
    notificationDetails,
    callbckFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("ckecking :" + JSON.stringify(notificationDetails));

    this.restService.post(
      "/setNotification",
      notificationDetails,
      function (data) {
        if (callbckFn) {
          if (data.status == "1") {
            callbckFn(data.status, data.message);
          } else {
            callbckFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("setNotification: Error Callback");
        if (callbckFn) {
          callbckFn("0", "setNotification Failed");
        }
      }
    );
  }

  moveToCart(allAddtoCart, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug("checking :" + JSON.stringify(allAddtoCart));

    this.restService.post(
      "/moveToCart",
      allAddtoCart,
      function (data) {
        _this.logger.debug("data " + JSON.stringify(data));
        if (callbackFn) {
          if (data.status == "1") {
            callbackFn(data.status, data.message);
          } else {
            callbackFn(data.status, data.message);
          }
        }
      },
      function () {
        _this.logger.info("moveToCart: Error Callback");
        if (callbackFn) {
          callbackFn("0", "moveToCart Failed");
        }
      }
    );
  }

  placeOrder(payDetailsObj, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug("checking placeOrder" + JSON.stringify(payDetailsObj));

    this.restService.post(
      "/placeOrder",
      payDetailsObj,
      function (data) {
        _this.logger.debug("checking placeOrder result" + JSON.stringify(data));

        if (callbackFn) {
          callbackFn(data.status, JSON.stringify(data));
        } else {
          callbackFn(data.status, JSON.stringify(data));
        }
      },
      function () {
        _this.logger.info("placeorder failure");
        if (callbackFn) {
          callbackFn("0", "placeorderFailuer");
        }
      }
    );
  }
  CODplaceOrder(
    payDetailsObj,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("checking placeOrder" + JSON.stringify(payDetailsObj));

    this.restService.post(
      "/CODplaceOrder",
      payDetailsObj,
      function (data) {
        _this.logger.debug("checking placeOrder result" + JSON.stringify(data));

        if (callbackFn) {
          callbackFn(data.status, JSON.stringify(data));
        } else {
          callbackFn(data.status, JSON.stringify(data));
        }
      },
      function () {
        _this.logger.info("placeorder failure");
        if (callbackFn) {
          callbackFn("0", "placeorderFailuer");
        }
      }
    );
  }
  SeventyfiveplaceOrder(
    payDetailsObj,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("checking placeOrder" + JSON.stringify(payDetailsObj));

    this.restService.post(
      "/SeventyfiveplaceOrder",
      payDetailsObj,
      function (data) {
        _this.logger.debug("checking placeOrder result" + JSON.stringify(data));

        if (callbackFn) {
          callbackFn(data.status, JSON.stringify(data));
        } else {
          callbackFn(data.status, JSON.stringify(data));
        }
      },
      function () {
        _this.logger.info("placeorder failure");
        if (callbackFn) {
          callbackFn("0", "placeorderFailuer");
        }
      }
    );
  }

  //deleteAddress

  deleteAddress(addressId, callbackFn: (valid: string, msg: string) => void) {
    var _this = this;
    _this.logger.debug("checking deleteAddress" + JSON.stringify(addressId));

    this.restService.post(
      "/deleteAddress",
      addressId,
      function (data) {
        if (callbackFn) {
          callbackFn(data.status, data.message);
        } else {
          callbackFn(data.status, data.message);
        }
      },
      function () {
        _this.logger.info("deleteAddress failure");
        if (callbackFn) {
          callbackFn("0", "deleteAddress Failuer");
        }
      }
    );
  }
  //searchDetails post

  searchDetails(
    searchData,
    page,
    callbackFn: (valid: string, msg: string) => void
  ) {
    var _this = this;
    _this.logger.debug("checking searchDetails" + JSON.stringify(searchData));

    this.restService.post(
      "/searchDetails&page=" + page,
      searchData,
      function (data) {
        if (callbackFn) {
          callbackFn(data.status, JSON.stringify(data));
        } else {
          callbackFn(data.status, data.message);
        }
      },
      function () {
        _this.logger.info("searchDetails failure");
        if (callbackFn) {
          callbackFn("0", "searchDetails Failuer");
        }
      }
    );
  }
}
