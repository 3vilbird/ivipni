function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: "",
      redirectTo: "login",
      pathMatch: "full"
    }, {
      path: "home",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: "about-us",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-about-us-about-us-module */
        "pages-about-us-about-us-module").then(__webpack_require__.bind(null,
        /*! ./pages/about-us/about-us.module */
        "./src/app/pages/about-us/about-us.module.ts")).then(function (m) {
          return m.AboutUsPageModule;
        });
      }
    }, {
      path: "login",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: "forgot-password",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-forgot-password-forgot-password-module */
        "pages-forgot-password-forgot-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/forgot-password/forgot-password.module */
        "./src/app/pages/forgot-password/forgot-password.module.ts")).then(function (m) {
          return m.ForgotPasswordPageModule;
        });
      }
    }, {
      path: "account",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-account-account-module */
        "pages-account-account-module").then(__webpack_require__.bind(null,
        /*! ./pages/account/account.module */
        "./src/app/pages/account/account.module.ts")).then(function (m) {
          return m.AccountPageModule;
        });
      }
    }, {
      path: "address",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-address-address-module */
        "pages-address-address-module").then(__webpack_require__.bind(null,
        /*! ./pages/address/address.module */
        "./src/app/pages/address/address.module.ts")).then(function (m) {
          return m.AddressPageModule;
        });
      }
    }, {
      path: "category-product-details",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-product-details-category-product-details-module */
        "pages-category-product-details-category-product-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/category-product-details/category-product-details.module */
        "./src/app/pages/category-product-details/category-product-details.module.ts")).then(function (m) {
          return m.CategoryProductDetailsPageModule;
        });
      }
    }, {
      path: "category-product-details-info",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-category-product-details-info-category-product-details-info-module */
        "pages-category-product-details-info-category-product-details-info-module").then(__webpack_require__.bind(null,
        /*! ./pages/category-product-details-info/category-product-details-info.module */
        "./src/app/pages/category-product-details-info/category-product-details-info.module.ts")).then(function (m) {
          return m.CategoryProductDetailsInfoPageModule;
        });
      }
    }, {
      path: "chart",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-chart-chart-module */
        "pages-chart-chart-module").then(__webpack_require__.bind(null,
        /*! ./pages/chart/chart.module */
        "./src/app/pages/chart/chart.module.ts")).then(function (m) {
          return m.ChartPageModule;
        });
      }
    }, {
      path: "checkout",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-checkout-checkout-module */
        "pages-checkout-checkout-module").then(__webpack_require__.bind(null,
        /*! ./pages/checkout/checkout.module */
        "./src/app/pages/checkout/checkout.module.ts")).then(function (m) {
          return m.CheckoutPageModule;
        });
      }
    }, {
      path: "my-order",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-my-order-my-order-module */
        "pages-my-order-my-order-module").then(__webpack_require__.bind(null,
        /*! ./pages/my-order/my-order.module */
        "./src/app/pages/my-order/my-order.module.ts")).then(function (m) {
          return m.MyOrderPageModule;
        });
      }
    }, {
      path: "my-password",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-my-password-my-password-module */
        "pages-my-password-my-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/my-password/my-password.module */
        "./src/app/pages/my-password/my-password.module.ts")).then(function (m) {
          return m.MyPasswordPageModule;
        });
      }
    }, {
      path: "my-profile",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-my-profile-my-profile-module */
        "pages-my-profile-my-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/my-profile/my-profile.module */
        "./src/app/pages/my-profile/my-profile.module.ts")).then(function (m) {
          return m.MyProfilePageModule;
        });
      }
    }, {
      path: "no-internet",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-no-internet-no-internet-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-no-internet-no-internet-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/no-internet/no-internet.module */
        "./src/app/pages/no-internet/no-internet.module.ts")).then(function (m) {
          return m.NoInternetPageModule;
        });
      }
    }, {
      path: "notification",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-notification-notification-module */
        "pages-notification-notification-module").then(__webpack_require__.bind(null,
        /*! ./pages/notification/notification.module */
        "./src/app/pages/notification/notification.module.ts")).then(function (m) {
          return m.NotificationPageModule;
        });
      }
    }, {
      path: "order-details",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-order-details-order-details-module */
        "pages-order-details-order-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/order-details/order-details.module */
        "./src/app/pages/order-details/order-details.module.ts")).then(function (m) {
          return m.OrderDetailsPageModule;
        });
      }
    }, {
      path: "payment",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-payment-module */
        "pages-payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment/payment.module */
        "./src/app/pages/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: "payment-details",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-details-payment-details-module */
        "pages-payment-details-payment-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment-details/payment-details.module */
        "./src/app/pages/payment-details/payment-details.module.ts")).then(function (m) {
          return m.PaymentDetailsPageModule;
        });
      }
    }, {
      path: "paymentremain",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-paymentremain-paymentremain-module */
        "pages-paymentremain-paymentremain-module").then(__webpack_require__.bind(null,
        /*! ./pages/paymentremain/paymentremain.module */
        "./src/app/pages/paymentremain/paymentremain.module.ts")).then(function (m) {
          return m.PaymentremainPageModule;
        });
      }
    }, {
      path: "paymentremaindetails",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-paymentremaindetails-paymentremaindetails-module */
        "pages-paymentremaindetails-paymentremaindetails-module").then(__webpack_require__.bind(null,
        /*! ./pages/paymentremaindetails/paymentremaindetails.module */
        "./src/app/pages/paymentremaindetails/paymentremaindetails.module.ts")).then(function (m) {
          return m.PaymentremaindetailsPageModule;
        });
      }
    }, {
      path: "payment-success-failure",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-payment-success-failure-payment-success-failure-module */
        "pages-payment-success-failure-payment-success-failure-module").then(__webpack_require__.bind(null,
        /*! ./pages/payment-success-failure/payment-success-failure.module */
        "./src/app/pages/payment-success-failure/payment-success-failure.module.ts")).then(function (m) {
          return m.PaymentSuccessFailurePageModule;
        });
      }
    }, {
      path: "paythank-you",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-paythank-you-paythank-you-module */
        "pages-paythank-you-paythank-you-module").then(__webpack_require__.bind(null,
        /*! ./pages/paythank-you/paythank-you.module */
        "./src/app/pages/paythank-you/paythank-you.module.ts")).then(function (m) {
          return m.PaythankYouPageModule;
        });
      }
    }, {
      path: "place-order",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-place-order-place-order-module */
        "pages-place-order-place-order-module").then(__webpack_require__.bind(null,
        /*! ./pages/place-order/place-order.module */
        "./src/app/pages/place-order/place-order.module.ts")).then(function (m) {
          return m.PlaceOrderPageModule;
        });
      }
    }, {
      path: "privacy-policy",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-privacy-policy-privacy-policy-module */
        "pages-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null,
        /*! ./pages/privacy-policy/privacy-policy.module */
        "./src/app/pages/privacy-policy/privacy-policy.module.ts")).then(function (m) {
          return m.PrivacyPolicyPageModule;
        });
      }
    }, {
      path: "product-sub-category",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-product-sub-category-product-sub-category-module */
        "pages-product-sub-category-product-sub-category-module").then(__webpack_require__.bind(null,
        /*! ./pages/product-sub-category/product-sub-category.module */
        "./src/app/pages/product-sub-category/product-sub-category.module.ts")).then(function (m) {
          return m.ProductSubCategoryPageModule;
        });
      }
    }, {
      path: "registration",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-registration-registration-module */
        "pages-registration-registration-module").then(__webpack_require__.bind(null,
        /*! ./pages/registration/registration.module */
        "./src/app/pages/registration/registration.module.ts")).then(function (m) {
          return m.RegistrationPageModule;
        });
      }
    }, {
      path: "reg-thankyou",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-reg-thankyou-reg-thankyou-module */
        "pages-reg-thankyou-reg-thankyou-module").then(__webpack_require__.bind(null,
        /*! ./pages/reg-thankyou/reg-thankyou.module */
        "./src/app/pages/reg-thankyou/reg-thankyou.module.ts")).then(function (m) {
          return m.RegThankyouPageModule;
        });
      }
    }, {
      path: "rootpage",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-rootpage-rootpage-module */
        "pages-rootpage-rootpage-module").then(__webpack_require__.bind(null,
        /*! ./pages/rootpage/rootpage.module */
        "./src/app/pages/rootpage/rootpage.module.ts")).then(function (m) {
          return m.RootpagePageModule;
        });
      }
    }, {
      path: "search-products",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-search-products-search-products-module */
        "pages-search-products-search-products-module").then(__webpack_require__.bind(null,
        /*! ./pages/search-products/search-products.module */
        "./src/app/pages/search-products/search-products.module.ts")).then(function (m) {
          return m.SearchProductsPageModule;
        });
      }
    }, {
      path: "seller-info",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-seller-info-seller-info-module */
        "pages-seller-info-seller-info-module").then(__webpack_require__.bind(null,
        /*! ./pages/seller-info/seller-info.module */
        "./src/app/pages/seller-info/seller-info.module.ts")).then(function (m) {
          return m.SellerInfoPageModule;
        });
      }
    }, {
      path: "seller-info-details",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-seller-info-details-seller-info-details-module */
        "pages-seller-info-details-seller-info-details-module").then(__webpack_require__.bind(null,
        /*! ./pages/seller-info-details/seller-info-details.module */
        "./src/app/pages/seller-info-details/seller-info-details.module.ts")).then(function (m) {
          return m.SellerInfoDetailsPageModule;
        });
      }
    }, {
      path: "shoppingcart",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-shoppingcart-shoppingcart-module */
        "pages-shoppingcart-shoppingcart-module").then(__webpack_require__.bind(null,
        /*! ./pages/shoppingcart/shoppingcart.module */
        "./src/app/pages/shoppingcart/shoppingcart.module.ts")).then(function (m) {
          return m.ShoppingcartPageModule;
        });
      }
    }, {
      path: "terms-of-use",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-terms-of-use-terms-of-use-module */
        "pages-terms-of-use-terms-of-use-module").then(__webpack_require__.bind(null,
        /*! ./pages/terms-of-use/terms-of-use.module */
        "./src/app/pages/terms-of-use/terms-of-use.module.ts")).then(function (m) {
          return m.TermsOfUsePageModule;
        });
      }
    }, {
      path: "thank-you",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-thank-you-thank-you-module */
        "pages-thank-you-thank-you-module").then(__webpack_require__.bind(null,
        /*! ./pages/thank-you/thank-you.module */
        "./src/app/pages/thank-you/thank-you.module.ts")).then(function (m) {
          return m.ThankYouPageModule;
        });
      }
    }, {
      path: "welcome",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-welcome-welcome-module */
        "pages-welcome-welcome-module").then(__webpack_require__.bind(null,
        /*! ./pages/welcome/welcome.module */
        "./src/app/pages/welcome/welcome.module.ts")).then(function (m) {
          return m.WelcomePageModule;
        });
      }
    }, {
      path: "wish-list",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-wish-list-wish-list-module */
        "pages-wish-list-wish-list-module").then(__webpack_require__.bind(null,
        /*! ./pages/wish-list/wish-list.module */
        "./src/app/pages/wish-list/wish-list.module.ts")).then(function (m) {
          return m.WishListPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-spinner * {\n  width: 28px;\n  height: 28px;\n  stroke: #444;\n  fill: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RldmlsL3ZvbHVtZS9wcm9qZWN0cy9mcmVlbGFuY2luZ3dvcmsvbmV3X3dvcmsvaXZpcG5pLTEvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXNwaW5uZXIgKiB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHN0cm9rZTogIzQ0NDtcbiAgICBmaWxsOiAjMjIyO1xuICB9XG4gICIsImlvbi1zcGlubmVyICoge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBzdHJva2U6ICM0NDQ7XG4gIGZpbGw6ICMyMjI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.styleDefault();

            _this2.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var src_providers_commerce_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/providers/commerce/products */
    "./src/providers/commerce/products.ts");
    /* harmony import */


    var src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/providers/commerce/users */
    "./src/providers/commerce/users.ts");
    /* harmony import */


    var src_providers_configurator_configurator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/providers/configurator/configurator */
    "./src/providers/configurator/configurator.ts");
    /* harmony import */


    var src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/providers/holders/holders */
    "./src/providers/holders/holders.ts");
    /* harmony import */


    var src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/providers/logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var src_providers_network_rest__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! src/providers/network/rest */
    "./src/providers/network/rest.ts");
    /* harmony import */


    var src_providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/providers/network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
    /* harmony import */


    var _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @ionic-native/sms-retriever/ngx */
    "./node_modules/@ionic-native/sms-retriever/ngx/index.js"); // import { AppVersion } from "@ionic-native/app-version/ngx";


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_18__["IonicStorageModule"].forRoot()],
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], src_providers_commerce_products__WEBPACK_IMPORTED_MODULE_9__["Products"], src_providers_commerce_users__WEBPACK_IMPORTED_MODULE_10__["Users"], src_providers_configurator_configurator__WEBPACK_IMPORTED_MODULE_11__["Configurator"], src_providers_holders_holders__WEBPACK_IMPORTED_MODULE_12__["Holders"], src_providers_logger_logger__WEBPACK_IMPORTED_MODULE_13__["Logger"], src_providers_network_rest__WEBPACK_IMPORTED_MODULE_14__["Rest"], src_providers_network_service_network_service__WEBPACK_IMPORTED_MODULE_15__["NetworkService"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_17__["Network"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_19__["Device"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_20__["OneSignal"], // AppVersion,
      _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_21__["InAppBrowser"], _ionic_native_sms_retriever_ngx__WEBPACK_IMPORTED_MODULE_22__["SmsRetriever"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  "./src/providers/commerce/products.ts":
  /*!********************************************!*\
    !*** ./src/providers/commerce/products.ts ***!
    \********************************************/

  /*! exports provided: Products */

  /***/
  function srcProvidersCommerceProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Products", function () {
      return Products;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _network_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../network/rest */
    "./src/providers/network/rest.ts");
    /* harmony import */


    var _logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../logger/logger */
    "./src/providers/logger/logger.ts");
    /*
      Generated class for the Products provider.
    
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var Products =
    /*#__PURE__*/
    function () {
      function Products(restService, logger) {
        _classCallCheck(this, Products);

        this.restService = restService;
        this.logger = logger;
      }

      _createClass(Products, [{
        key: "getPromotionalProducts",
        value: function getPromotionalProducts(callbackFn) {
          this.restService.get("/getPromotionalProducts", function (data) {
            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getBanners",
        value: function getBanners(callbackFn) {
          var _this = this;

          this.restService.get("/getBanners", function (data) {
            _this.logger.info("invoking getBanners function");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getPrimaryCategories",
        value: function getPrimaryCategories(callbackFn) {
          var _this = this;

          this.restService.get("/getPrimaryCategories", function (data) {
            _this.logger.info("invoking getBanners function");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getBanks",
        value: function getBanks(callbackFn) {
          var _this = this;

          this.restService.get("/getBanks", function (data) {
            _this.logger.info("invoking getBanks function");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getBrandName",
        value: function getBrandName(callbackFn) {
          var _this = this;

          this.restService.get("/getBrandName", function (data) {
            _this.logger.info("invoking getBrandName");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getBestSellerProducts",
        value: function getBestSellerProducts(callbackFn) {
          var _this = this;

          this.restService.get("/getBestSellerProducts", function (data) {
            _this.logger.info("invokingget getBestSellerProducts");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getWishlist",
        value: function getWishlist(callbackFn) {
          var _this = this;

          this.restService.get("/getWishlist", function (data) {
            _this.logger.info("invoking wishList Details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getamountremain",
        value: function getamountremain(callbackFn) {
          var _this = this;

          this.restService.get("/getamountremain", function (data) {
            _this.logger.info("invoking wishList Details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        } //category page get request

      }, {
        key: "getProductTypeCate",
        value: function getProductTypeCate(callbackFn) {
          var _this = this;

          this.restService.get("/getProdutTypeCate", function (data) {
            _this.logger.info("invoking getProductTypeCat");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        } //address for chekoutpage

      }, {
        key: "getAddress",
        value: function getAddress(callbackFn) {
          var _this = this;

          this.restService.get("/getAddress", function (data) {
            _this.logger.info("invoking get checkOut address details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getContactUsDetails",
        value: function getContactUsDetails(callbackFn) {
          var _this = this;

          this.restService.get("/getContact", function (data) {
            _this.logger.info("invoking get contact details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getCatProdDetails",
        value: function getCatProdDetails(category_id, page, callbackFn) {
          var _this = this;

          this.restService.get("/getCatProdDetails?&category_id=" + category_id + "&page=" + page, function (data) {
            _this.logger.info("invoking category product details ");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getCart",
        value: function getCart(callbackFn) {
          var _this = this;

          this.restService.get("/getCart", function (data) {
            _this.logger.info("invoking shoppingCart Details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getSearchBarDetails",
        value: function getSearchBarDetails(callbackFn) {
          var _this = this;

          this.restService.get("/getSearchDetails", function (data) {
            _this.logger.info("invoking getSearchBarDetails");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        } // AccountPage including profile,order,order delivery,password and notification pages

      }, {
        key: "getOrders",
        value: function getOrders(callbackFn) {
          var _this = this;

          this.restService.get("/getOrders", function (data) {
            _this.logger.info("invoking get myorder details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getSellerDetails",
        value: function getSellerDetails(callbackFn) {
          var _this = this;

          this.restService.get("/getSellerDetails", function (data) {
            _this.logger.info("invoking get myorder details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getMyOrderDeliverDetails",
        value: function getMyOrderDeliverDetails(callbackFn) {
          var _this = this;

          this.restService.get("/getOrderDelivery", function (data) {
            _this.logger.info("invoking get my order deliver details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(callbackFn) {
          var _this = this;

          this.restService.get("/getUserDetails", function (data) {
            _this.logger.info("invoking get myprofile details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getNotification",
        value: function getNotification(callbackFn) {
          var _this = this;

          this.restService.get("/getNotification", function (data) {
            _this.logger.info("invoking get my notification details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getCartTotalDetails",
        value: function getCartTotalDetails(callbackFn) {
          var _this = this;

          this.restService.get("/getCartTotal", function (data) {
            _this.logger.info("invoking cartTotal Details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getPayment",
        value: function getPayment(callbackFn) {
          var _this = this;

          this.restService.get("/getPayment", function (data) {
            _this.logger.info("invoking get payment success or failure details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        } //checkout pay page

      }, {
        key: "getCheckOutPay",
        value: function getCheckOutPay(callbackFn) {
          var _this = this;

          this.restService.get("/getCheckPay", function (data) {
            _this.logger.info("invoking get checkout pay details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }, {
        key: "getCartCount",
        value: function getCartCount() {
          this.logger.info("invoking get CartCount details");
          return this.restService.gets("/getCartCount");
        }
      }, {
        key: "getWishlistCount",
        value: function getWishlistCount() {
          this.logger.info("invoking get WishlistCount details");
          return this.restService.gets("/getWishlistCount");
        } //get states for registration and check out

      }, {
        key: "getStates",
        value: function getStates(callbackFn) {
          var _this = this;

          this.restService.get("/getStates", function (data) {
            _this.logger.info("invoking state Details");

            callbackFn(data);
          }, function () {
            callbackFn([]);
          });
        }
      }]);

      return Products;
    }();

    Products.ctorParameters = function () {
      return [{
        type: _network_rest__WEBPACK_IMPORTED_MODULE_3__["Rest"]
      }, {
        type: _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]
      }];
    };

    Products = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_rest__WEBPACK_IMPORTED_MODULE_3__["Rest"], _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]])], Products);
    /***/
  },

  /***/
  "./src/providers/commerce/users.ts":
  /*!*****************************************!*\
    !*** ./src/providers/commerce/users.ts ***!
    \*****************************************/

  /*! exports provided: Users */

  /***/
  function srcProvidersCommerceUsersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Users", function () {
      return Users;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _network_rest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../network/rest */
    "./src/providers/network/rest.ts");
    /* harmony import */


    var _logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var _holders_holders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../holders/holders */
    "./src/providers/holders/holders.ts");
    /*
      Generated class for the Users provider.
     
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var Users =
    /*#__PURE__*/
    function () {
      function Users(restService, logger, holders) {
        _classCallCheck(this, Users);

        this.restService = restService;
        this.logger = logger;
        this.holders = holders;
      }

      _createClass(Users, [{
        key: "validateUser",
        value: function validateUser(loginId, passwd, deviceToken, callbackFn) {
          var _this = this;

          _this.logger.debug("validating " + loginId);

          this.restService.post("/validateUser", {
            loginId: loginId,
            password: passwd,
            device_token: deviceToken
          }, function (data) {
            _this.logger.debug("data " + JSON.stringify(data));

            _this.holders.setLoginData(data);

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify({
                  userId: data.data.customer.customer_id,
                  authToken: data.data.customer.access_token,
                  message: data.message
                }));
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("validateUser: Error callback");

            if (callbackFn) {
              callbackFn("0", "Unknown Error encountered while validating user");
            }
          });
        } //ForgotPasswd page post call's

      }, {
        key: "generateOTP",
        value: function generateOTP(loginId, hash, callbackFn) {
          var _this = this;

          _this.logger.debug("Generating  OTP for : " + JSON.stringify(loginId));

          this.restService.post("/generateOTP", {
            loginId: loginId,
            hash: hash
          }, function (data) {
            _this.logger.debug("generate OTP : " + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message, data.customer_id);
              } else {
                callbackFn(data.status, data.message, data.customer_id);
              }
            }
          }, function () {
            _this.logger.info("generateOTP: Error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to generate OTP", "checking");
            }
          });
        } //validating otp

      }, {
        key: "validateOTP",
        value: function validateOTP(otpNumber, loginId, callbackFn) {
          var _this = this;

          _this.logger.debug("checking validateOTP for otpNumber " + JSON.stringify(otpNumber));

          _this.logger.debug("checking validateOTP for loginId " + JSON.stringify(loginId));

          this.restService.posts("/validateOTP", {
            loginId: loginId,
            otp: otpNumber
          }, function (data) {
            _this.logger.debug("checking the validateotp data " + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message, data.access_token);
              } else {
                callbackFn(data.status, data.message, data.access_token);
              }
            }
          }, function () {
            _this.logger.info("validateOTP: error call back");

            if (callbackFn) {
              callbackFn("0", "failed to validate OTP", "falied");
            }
          });
        } //newpassword api call

      }, {
        key: "newPassword",
        value: function newPassword(_newPassword, callbackFn) {
          var _this = this;

          _this.logger.debug("newpassword data " + JSON.stringify(_newPassword));

          this.restService.posting("/newPassword", _newPassword, function (data) {
            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message);
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("newPassword: Error callback");

            if (callbackFn) {
              callbackFn("0", "failed to newpassword");
            }
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(passwd, callbckFn) {
          var _this = this;

          _this.logger.debug("Reset Password as : " + passwd);

          this.restService.post("/resetPassword", {
            passwd: passwd
          }, function (data) {
            if (callbckFn) {
              if (data.status == "1") {
                callbckFn(data.status, data.message);
              } else {
                callbckFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("ResetPassword: Error callback");

            if (callbckFn) {
              callbckFn("0", "Failed to ResetPassword");
            }
          });
        } //Registration post call's

      }, {
        key: "registerNewUser",
        value: function registerNewUser(registrationDetails, callbckFn) {
          var _this = this;

          _this.logger.debug("Registrating Users Details for :" + JSON.stringify(registrationDetails));

          this.restService.post("/registerNewUser", registrationDetails, function (data) {
            _this.logger.debug("checking the data for the register : " + JSON.stringify(data));

            if (callbckFn) {
              if (data.status == "1") {
                callbckFn(data.status, JSON.stringify({
                  message: data.data.message,
                  customer_id: data.data.customer_id
                }));
              } else {
                callbckFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("RegistrationNewUser: Error Callback");

            if (callbckFn) {
              callbckFn("0", "Registration Failed");
            }
          });
        } //gmail

      }, {
        key: "emailandsms",
        value: function emailandsms(customer1_id, callbckFn) {
          var _this = this;

          _this.restService.post("/emailandsms", {
            customer_id: customer1_id
          }, function (data) {
            callbckFn("1", "email");

            _this.logger.info("email to user");
          }, function () {
            callbckFn("0", "email");

            _this.logger.info("Error Callback");
          });
        } //Change password post call's

      }, {
        key: "changePassword",
        value: function changePassword(passwordDetail, callbckFn) {
          var _this = this;

          _this.logger.debug("Udating you old passwd:" + passwordDetail);

          this.restService.post("/changePassword", passwordDetail, function (data) {
            if (callbckFn) {
              if (data.status == "1") {
                callbckFn(data.status, data.message);
              } else {
                callbckFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("ChangePasswd: Error Callback");

            if (callbckFn) {
              callbckFn("0", "Change Passwd Failed");
            }
          });
        } //contact Us post call

      }, {
        key: "contactUs",
        value: function contactUs(contactDetails, callbckFn) {
          var _this = this;

          _this.logger.debug("Contacting :" + contactDetails);

          this.restService.post("/contactUs", contactDetails, function (data) {
            if (callbckFn) {
              if (data.status == "1") {
                callbckFn(data.status, data.message);
              } else {
                callbckFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("ContactUs: Error Callback");

            if (callbckFn) {
              callbckFn("0", "Contactus Failed");
            }
          });
        }
      }, {
        key: "setWishlist",
        value: function setWishlist(productId, callbckFn) {
          var _this = this;

          _this.logger.debug("setWishlist obj check " + JSON.stringify(productId));

          this.restService.post("/setWishlist", productId, function (data) {
            _this.logger.debug("checking the wishlist check data" + JSON.stringify(data));

            if (callbckFn) {
              if (data.status == "1") {
                callbckFn(data.status, data.message);
              } else {
                callbckFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("setWishlist: Error Callback");

            if (callbckFn) {
              callbckFn("0", "setWishlist Failed");
            }
          });
        } //delete wishlist

      }, {
        key: "deleteWishlist",
        value: function deleteWishlist(wishProduct, callbackFn) {
          var _this = this;

          _this.logger.debug("deleting wishlist for : " + wishProduct);

          this.restService.post("/deleteWishlist", wishProduct, function (data) {
            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message);
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("add to wishlist: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to add wishlist");
            }
          });
        }
      }, {
        key: "addToCart",
        value: function addToCart(addProduct, callbackFn) {
          var _this = this;

          _this.logger.debug("addToCart users.ts file check " + JSON.stringify(addProduct));

          this.restService.post("/addToCart", addProduct, function (data) {
            _this.logger.debug("checking the data in addTo Cart" + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify(data));
              } else {
                callbackFn(data.status, data);
              }
            }
          }, function () {
            _this.logger.info("add to cart: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to add to cart");
            }
          });
        } //deviceinfo

      }, {
        key: "deviceInfo",
        value: function deviceInfo(_deviceInfo, callbackFn) {
          var _this = this;

          this.restService.post("/deviceInfo", _deviceInfo, function (data) {
            _this.logger.debug("deviceInfo" + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify(data));
              } else {
                callbackFn(data.status, data);
              }
            }
          }, function () {
            _this.logger.info("add to cart: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to add to cart");
            }
          });
        } //add to order to cart

      }, {
        key: "orderToCart",
        value: function orderToCart(addProduct, callbackFn) {
          var _this = this;

          _this.logger.debug("ordertoCart users.ts file check " + JSON.stringify(addProduct));

          this.restService.post("/orderToCart", addProduct, function (data) {
            _this.logger.debug("checking the data in addTo Cart" + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify(data));
              } else {
                callbackFn(data.status, data);
              }
            }
          }, function () {
            _this.logger.info("add  order to cart: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to add order to cart");
            }
          });
        } //add to wishlist

      }, {
        key: "wishlistToCart",
        value: function wishlistToCart(addProduct, callbackFn) {
          var _this = this;

          _this.logger.debug("wishlistToCart users.ts file check " + JSON.stringify(addProduct));

          this.restService.post("/wishlistToCart", addProduct, function (data) {
            _this.logger.debug("checking the data in addTo Cart" + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify(data));
              } else {
                callbackFn(data.status, data);
              }
            }
          }, function () {
            _this.logger.info("add to cart: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to add to cart");
            }
          });
        } //updateCart post call

      }, {
        key: "updateCart",
        value: function updateCart(addProduct, callbackFn) {
          var _this = this;

          _this.logger.debug("addToCart users.ts file check " + JSON.stringify(addProduct));

          this.restService.post("/updateCart", addProduct, function (data) {
            _this.logger.debug("addToCart users.ts file check " + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify(data));
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("updateCart: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to updateCart");
            }
          });
        } //remove cart

      }, {
        key: "removeCart",
        value: function removeCart(cartItem, callbackFn) {
          var _this = this;

          _this.logger.debug("deleting cart for : " + JSON.stringify(cartItem));

          this.restService.post("/removeCart", cartItem, function (data) {
            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, JSON.stringify(data));
              } else {
                callbackFn(data.status, data);
              }
            }
          }, function () {
            _this.logger.info("removeCart: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to removeCart");
            }
          });
        } //udateAddress on existing one

      }, {
        key: "updateAddress",
        value: function updateAddress(updateAdrressObj, callbackFn) {
          var _this = this;

          _this.logger.debug("deleting updateAddress for : " + JSON.stringify(updateAdrressObj));

          this.restService.post("/updateAddress", updateAdrressObj, function (data) {
            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message);
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("updateAddress: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to updateAddress");
            }
          });
        } //add address

      }, {
        key: "addAddress",
        value: function addAddress(updateAdrressObj, callbackFn) {
          var _this = this;

          _this.logger.debug("deleting addAddress for : " + JSON.stringify(updateAdrressObj));

          this.restService.post("/addAddress", updateAdrressObj, function (data) {
            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message);
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("addAddress: error callback");

            if (callbackFn) {
              callbackFn("0", "Failed to addAddress");
            }
          });
        } //setNotification

      }, {
        key: "setNotification",
        value: function setNotification(notificationDetails, callbckFn) {
          var _this = this;

          _this.logger.debug("ckecking :" + JSON.stringify(notificationDetails));

          this.restService.post("/setNotification", notificationDetails, function (data) {
            if (callbckFn) {
              if (data.status == "1") {
                callbckFn(data.status, data.message);
              } else {
                callbckFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("setNotification: Error Callback");

            if (callbckFn) {
              callbckFn("0", "setNotification Failed");
            }
          });
        }
      }, {
        key: "moveToCart",
        value: function moveToCart(allAddtoCart, callbackFn) {
          var _this = this;

          _this.logger.debug("checking :" + JSON.stringify(allAddtoCart));

          this.restService.post("/moveToCart", allAddtoCart, function (data) {
            _this.logger.debug("data " + JSON.stringify(data));

            if (callbackFn) {
              if (data.status == "1") {
                callbackFn(data.status, data.message);
              } else {
                callbackFn(data.status, data.message);
              }
            }
          }, function () {
            _this.logger.info("moveToCart: Error Callback");

            if (callbackFn) {
              callbackFn("0", "moveToCart Failed");
            }
          });
        }
      }, {
        key: "placeOrder",
        value: function placeOrder(payDetailsObj, callbackFn) {
          var _this = this;

          _this.logger.debug("checking placeOrder" + JSON.stringify(payDetailsObj));

          this.restService.post("/placeOrder", payDetailsObj, function (data) {
            _this.logger.debug("checking placeOrder result" + JSON.stringify(data));

            if (callbackFn) {
              callbackFn(data.status, JSON.stringify(data));
            } else {
              callbackFn(data.status, JSON.stringify(data));
            }
          }, function () {
            _this.logger.info("placeorder failure");

            if (callbackFn) {
              callbackFn("0", "placeorderFailuer");
            }
          });
        }
      }, {
        key: "CODplaceOrder",
        value: function CODplaceOrder(payDetailsObj, callbackFn) {
          var _this = this;

          _this.logger.debug("checking placeOrder" + JSON.stringify(payDetailsObj));

          this.restService.post("/CODplaceOrder", payDetailsObj, function (data) {
            _this.logger.debug("checking placeOrder result" + JSON.stringify(data));

            if (callbackFn) {
              callbackFn(data.status, JSON.stringify(data));
            } else {
              callbackFn(data.status, JSON.stringify(data));
            }
          }, function () {
            _this.logger.info("placeorder failure");

            if (callbackFn) {
              callbackFn("0", "placeorderFailuer");
            }
          });
        }
      }, {
        key: "SeventyfiveplaceOrder",
        value: function SeventyfiveplaceOrder(payDetailsObj, callbackFn) {
          var _this = this;

          _this.logger.debug("checking placeOrder" + JSON.stringify(payDetailsObj));

          this.restService.post("/SeventyfiveplaceOrder", payDetailsObj, function (data) {
            _this.logger.debug("checking placeOrder result" + JSON.stringify(data));

            if (callbackFn) {
              callbackFn(data.status, JSON.stringify(data));
            } else {
              callbackFn(data.status, JSON.stringify(data));
            }
          }, function () {
            _this.logger.info("placeorder failure");

            if (callbackFn) {
              callbackFn("0", "placeorderFailuer");
            }
          });
        } //deleteAddress

      }, {
        key: "deleteAddress",
        value: function deleteAddress(addressId, callbackFn) {
          var _this = this;

          _this.logger.debug("checking deleteAddress" + JSON.stringify(addressId));

          this.restService.post("/deleteAddress", addressId, function (data) {
            if (callbackFn) {
              callbackFn(data.status, data.message);
            } else {
              callbackFn(data.status, data.message);
            }
          }, function () {
            _this.logger.info("deleteAddress failure");

            if (callbackFn) {
              callbackFn("0", "deleteAddress Failuer");
            }
          });
        } //searchDetails post

      }, {
        key: "searchDetails",
        value: function searchDetails(searchData, page, callbackFn) {
          var _this = this;

          _this.logger.debug("checking searchDetails" + JSON.stringify(searchData));

          this.restService.post("/searchDetails&page=" + page, searchData, function (data) {
            if (callbackFn) {
              callbackFn(data.status, JSON.stringify(data));
            } else {
              callbackFn(data.status, data.message);
            }
          }, function () {
            _this.logger.info("searchDetails failure");

            if (callbackFn) {
              callbackFn("0", "searchDetails Failuer");
            }
          });
        }
      }]);

      return Users;
    }();

    Users.ctorParameters = function () {
      return [{
        type: _network_rest__WEBPACK_IMPORTED_MODULE_3__["Rest"]
      }, {
        type: _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]
      }, {
        type: _holders_holders__WEBPACK_IMPORTED_MODULE_5__["Holders"]
      }];
    };

    Users = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_network_rest__WEBPACK_IMPORTED_MODULE_3__["Rest"], _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"], _holders_holders__WEBPACK_IMPORTED_MODULE_5__["Holders"]])], Users);
    /***/
  },

  /***/
  "./src/providers/configurator/configurator.ts":
  /*!****************************************************!*\
    !*** ./src/providers/configurator/configurator.ts ***!
    \****************************************************/

  /*! exports provided: Configurator */

  /***/
  function srcProvidersConfiguratorConfiguratorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Configurator", function () {
      return Configurator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /*
      Generated class for the Configurator provider.
    
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var Configurator = function Configurator() {
      _classCallCheck(this, Configurator);

      this.logLevel = 1; // 1 - Errors, 2- Errors/Info , 3 - Error/Info/Debug
      // public restServerBaseUrl = "http://34.87.43.10/ivipni/index.php?";

      this.restServerBaseUrl = "http://192.168.43.209:8080/ivipni/index.php?"; // public restServerBaseUrl = "http://localhost:8080/ivipni/index.php?";

      this.restServerControllerUrl = "route=restapi/restapi";
    };

    Configurator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], Configurator);
    /***/
  },

  /***/
  "./src/providers/holders/holders.ts":
  /*!******************************************!*\
    !*** ./src/providers/holders/holders.ts ***!
    \******************************************/

  /*! exports provided: Holders */

  /***/
  function srcProvidersHoldersHoldersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Holders", function () {
      return Holders;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../logger/logger */
    "./src/providers/logger/logger.ts"); // one error at line no 25

    /*
      Generated class for the Holders provider.
    
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var Holders =
    /*#__PURE__*/
    function () {
      function Holders(alertCtrl, loadingCtrl, toastCtrl, network, logger) {
        _classCallCheck(this, Holders);

        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.network = network;
        this.logger = logger;
      }

      _createClass(Holders, [{
        key: "showNetworkAlert",
        value: function showNetworkAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this, networkAlert;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _this = this;
                    _context.next = 3;
                    return _this.alertCtrl.create({
                      header: "No Internet Connection",
                      message: "Cannot proceed with this operation. No network connection!. Please check your internet connection",
                      buttons: [{
                        text: "Ok",
                        handler: function handler() {
                          _this.logger.info("clicked cancel button");
                        }
                      }]
                    });

                  case 3:
                    networkAlert = _context.sent;
                    _context.next = 6;
                    return networkAlert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showErrorAlert",
        value: function showErrorAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this, networkAlert;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _this = this;
                    _context2.next = 3;
                    return _this.alertCtrl.create({
                      header: "Error",
                      message: "There seems to be system error. We are not able to proceed.",
                      buttons: [{
                        text: "Ok",
                        handler: function handler() {
                          _this.logger.info("clicked showErrorAlert cancel button");
                        }
                      }]
                    });

                  case 3:
                    networkAlert = _context2.sent;
                    _context2.next = 6;
                    return networkAlert.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // presentLoadingCustom() {
        //   this.loading = this.loadingCtrl.create({
        //     spinner: "crescent"
        //   });
        //   this.loading.present();
        // }

      }, {
        key: "presentLoadingCustom",
        value: function presentLoadingCustom() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var loading;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      message: "",
                      duration: 2000
                    });

                  case 2:
                    loading = _context3.sent;
                    loading.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "setLoginData",
        value: function setLoginData(data) {
          this.loginData = data;
          this.logger.debug("checking the login data" + data);
        }
      }, {
        key: "getLoginData",
        value: function getLoginData() {
          this.logger.debug("checking the login data" + JSON.stringify(this.loginData));
          return this.loginData;
        }
      }, {
        key: "dissmissLoadingCustom",
        value: function dissmissLoadingCustom() {
          this.loading.dismiss();
        }
      }, {
        key: "nullConnection",
        value: function nullConnection() {
          return this.network.type === "none";
        }
      }, {
        key: "setDeviceToken",
        value: function setDeviceToken(token) {
          this.deviceToken = token;
        }
      }, {
        key: "getDeviceToken",
        value: function getDeviceToken() {
          return this.deviceToken;
        }
      }, {
        key: "showSuccessAlert",
        value: function showSuccessAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this, networkAlert;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.logger.debug("msg " + msg);
                    _this = this;
                    _context4.next = 4;
                    return _this.alertCtrl.create({
                      header: "Ivipni",
                      message: msg,
                      buttons: [{
                        text: "Ok",
                        handler: function handler() {
                          _this.logger.info("clicked showErrorAlert cancel button");
                        }
                      }]
                    });

                  case 4:
                    networkAlert = _context4.sent;
                    _context4.next = 7;
                    return networkAlert.present();

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "setInfinateScrollObj",
        value: function setInfinateScrollObj(infinate) {
          this.infinate = infinate;
        }
      }, {
        key: "getInfinateScrollObj",
        value: function getInfinateScrollObj() {
          return this.infinate;
        }
      }]);

      return Holders;
    }();

    Holders.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
      }, {
        type: _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]
      }];
    };

    Holders = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"], _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]])], Holders);
    /***/
  },

  /***/
  "./src/providers/logger/logger.ts":
  /*!****************************************!*\
    !*** ./src/providers/logger/logger.ts ***!
    \****************************************/

  /*! exports provided: Logger */

  /***/
  function srcProvidersLoggerLoggerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logger", function () {
      return Logger;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _configurator_configurator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../configurator/configurator */
    "./src/providers/configurator/configurator.ts");
    /*
      Generated class for the Logger provider.
    
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var Logger =
    /*#__PURE__*/
    function () {
      function Logger(configurator) {
        _classCallCheck(this, Logger);

        this.showDebug = true;
        this.showInfo = true;
        this.showError = true;
        this.showDebug = configurator.logLevel > 2;
        this.showInfo = configurator.logLevel > 1;
        this.showError = configurator.logLevel > 0;
      }

      _createClass(Logger, [{
        key: "show",
        value: function show(msg) {
          console.log(msg);
        }
      }, {
        key: "debug",
        value: function debug(msg) {
          if (this.showDebug) {
            this.show("DEBUG: " + msg);
          }
        }
      }, {
        key: "info",
        value: function info(msg) {
          if (this.showDebug) {
            this.show("INFO: " + msg);
          }
        }
      }, {
        key: "error",
        value: function error(msg) {
          if (this.showDebug) {
            this.show("ERROR: " + msg);
          }
        }
      }]);

      return Logger;
    }();

    Logger.ctorParameters = function () {
      return [{
        type: _configurator_configurator__WEBPACK_IMPORTED_MODULE_3__["Configurator"]
      }];
    };

    Logger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_configurator_configurator__WEBPACK_IMPORTED_MODULE_3__["Configurator"]])], Logger);
    /***/
  },

  /***/
  "./src/providers/network-service/network-service.ts":
  /*!**********************************************************!*\
    !*** ./src/providers/network-service/network-service.ts ***!
    \**********************************************************/

  /*! exports provided: NetworkService */

  /***/
  function srcProvidersNetworkServiceNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/ngx/index.js");
    /* harmony import */


    var _logger_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../logger/logger */
    "./src/providers/logger/logger.ts"); // error line no 17

    /*
      Generated class for the NetworkService provider.
    
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var NetworkService =
    /*#__PURE__*/
    function () {
      function NetworkService(alertCtrl, logger, Network) {
        _classCallCheck(this, NetworkService);

        this.alertCtrl = alertCtrl;
        this.logger = logger;
        this.Network = Network;
        this.logger.info("Hello NetworkService Provider");
        this.logger.debug("checking in network " + this.nullConnection());
        this.logger.debug("connection type " + Network.type);
      }

      _createClass(NetworkService, [{
        key: "showNetworkAlert",
        value: function showNetworkAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this, networkAlert;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _this = this;
                    _context5.next = 3;
                    return _this.alertCtrl.create({
                      header: "No Internet Connection",
                      message: "Cannot proceed with this operation. No network connection!. Please check your internet connection",
                      buttons: [{
                        text: "Ok",
                        handler: function handler() {
                          _this.logger.info("clicked cancel button");
                        }
                      }]
                    });

                  case 3:
                    networkAlert = _context5.sent;
                    networkAlert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "nullConnection",
        value: function nullConnection() {
          return this.Network.type === "none";
        }
      }, {
        key: "showErrorAlert",
        value: function showErrorAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this, networkAlert;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _this = this;
                    _context6.next = 3;
                    return _this.alertCtrl.create({
                      header: "Error",
                      message: "There seems to be system error. We are not able to proceed.",
                      buttons: [{
                        text: "Ok",
                        handler: function handler() {
                          _this.logger.info("clicked showErrorAlert cancel button");
                        }
                      }]
                    });

                  case 3:
                    networkAlert = _context6.sent;
                    networkAlert.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "showSuccessAlert",
        value: function showSuccessAlert(msg) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this, networkAlert;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.logger.debug("msg " + msg);
                    _this = this;
                    _context7.next = 4;
                    return _this.alertCtrl.create({
                      header: "Alert",
                      message: msg,
                      buttons: [{
                        text: "Ok",
                        handler: function handler() {
                          _this.logger.info("clicked showErrorAlert cancel button");
                        }
                      }]
                    });

                  case 4:
                    networkAlert = _context7.sent;
                    networkAlert.present();

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"]
      }, {
        type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
      }];
    };

    NetworkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _logger_logger__WEBPACK_IMPORTED_MODULE_4__["Logger"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]])], NetworkService);
    /***/
  },

  /***/
  "./src/providers/network/rest.ts":
  /*!***************************************!*\
    !*** ./src/providers/network/rest.ts ***!
    \***************************************/

  /*! exports provided: Rest */

  /***/
  function srcProvidersNetworkRestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rest", function () {
      return Rest;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _configurator_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../configurator/configurator */
    "./src/providers/configurator/configurator.ts");
    /* harmony import */


    var _network_service_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../network-service/network-service */
    "./src/providers/network-service/network-service.ts");
    /* harmony import */


    var _logger_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../logger/logger */
    "./src/providers/logger/logger.ts");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js"); // error at line no 223

    /*
      Generated class for the Rest provider.
    
      See https://angular.io/docs/ts/latest/guide/dependency-injection.html
      for more info on providers and Angular 2 DI.
    */


    var Rest =
    /*#__PURE__*/
    function () {
      function Rest(http, configurator, networkService, loadingCtrl, logger) {
        _classCallCheck(this, Rest);

        this.http = http;
        this.configurator = configurator;
        this.networkService = networkService;
        this.loadingCtrl = loadingCtrl;
        this.logger = logger;
      }

      _createClass(Rest, [{
        key: "handleSuccess",
        value: function handleSuccess(result, callback, loader, url) {
          callback(result);
        }
      }, {
        key: "handleError",
        value: function handleError(err, callback, loader, url) {
          callback();
        }
      }, {
        key: "postHandleSuccess",
        value: function postHandleSuccess(result, callback, url) {
          callback(result);
        }
      }, {
        key: "postHandleError",
        value: function postHandleError(err, callback, url) {
          callback();
        }
      }, {
        key: "postsHandleSuccess",
        value: function postsHandleSuccess(result, callback) {
          callback(result);
        }
      }, {
        key: "postsHandleError",
        value: function postsHandleError(err, callback) {
          callback();
        }
      }, {
        key: "handleSuccessObserver",
        value: function handleSuccessObserver(result, observer, loader, url) {
          observer.next(result);
        }
      }, {
        key: "handleErrorObserver",
        value: function handleErrorObserver(err, observer, loader, url) {
          observer.error();
        }
      }, {
        key: "post",
        value: function post(url, data, successCallbackFn, errorcallbackFn) {
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
            this.http.post(_this.configurator.restServerBaseUrl + _this.configurator.restServerControllerUrl + url, data).subscribe(function (result) {
              return _this.postHandleSuccess(result, successCallbackFn, url);
            }, function (error) {
              return _this.postHandleError(error, errorcallbackFn, url);
            });
          }
        }
      }, {
        key: "posting",
        value: function posting(url, data, successCallbackFn, errorcallbackFn) {
          var _this = this; // let loading = _this.loadingCtrl.create({
          // header: ``
          // });


          _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);

          if (_this.networkService.nullConnection()) {
            _this.networkService.showNetworkAlert();

            errorcallbackFn();
          } else {
            // loading.present();
            this.http.post(_this.configurator.restServerBaseUrl + _this.configurator.restServerControllerUrl + url, data).subscribe(function (result) {
              return _this.postHandleSuccess(result, successCallbackFn, url);
            }, function (error) {
              return _this.postHandleError(error, errorcallbackFn, url);
            });
          }
        }
      }, {
        key: "posts",
        value: function posts(url, data, successCallbackFn, errorcallbackFn) {
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
            this.http.post(_this.configurator.restServerBaseUrl + _this.configurator.restServerControllerUrl + url, data).subscribe(function (result) {
              return _this.postsHandleSuccess(result, successCallbackFn);
            }, function (error) {
              return _this.postsHandleError(error, errorcallbackFn);
            });
          }
        }
      }, {
        key: "get",
        value: function get(url, successCallbackFn, errorcallbackFn) {
          var _this = this;

          _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);

          var authdetails = "";

          if (_this.tokenNeeded(url)) {
            authdetails += "&user_id=" + _this.userId;
            authdetails += "&access_token=" + _this.authToken;
            authdetails += "&";
          }

          var loading = _this.loadingCtrl.create({
            message: ""
          });

          if (_this.networkService.nullConnection()) {
            _this.logger.debug("invoking networkService rest.ts file");

            errorcallbackFn();

            _this.networkService.showNetworkAlert();
          } else {
            this.http.get(_this.configurator.restServerBaseUrl + authdetails + _this.configurator.restServerControllerUrl + url).subscribe(function (result) {
              return _this.handleSuccess(result, successCallbackFn, loading, url);
            }, function (error) {
              return _this.handleError(error, errorcallbackFn, loading, url);
            });
          }
        }
      }, {
        key: "gets",
        value: function gets(url) {
          var _this = this;

          var loading = _this.loadingCtrl.create({
            message: ""
          });

          _this.logger.debug("Calling " + _this.configurator.restServerBaseUrl + url);

          var authdetails = "";

          if (_this.tokenNeeded(url)) {
            authdetails += "&user_id=" + _this.userId;
            authdetails += "&access_token=" + _this.authToken;
            authdetails += "&";
          }

          var fullUrl = _this.configurator.restServerBaseUrl + authdetails + _this.configurator.restServerControllerUrl + url;
          var obs = rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
            if (_this.networkService.nullConnection()) {
              _this.logger.info("invoking networkService rest.ts file");

              observer.error();

              _this.networkService.showNetworkAlert();
            } else {
              _this.http.get(fullUrl).subscribe(function (result) {
                return _this.handleSuccessObserver(function (result) {
                  return result.json();
                }, observer, loading, url);
              }, function (error) {
                return _this.handleErrorObserver(error, observer, loading, url);
              });
            }
          });
          return obs;
        }
      }, {
        key: "tokenNeeded",
        value: function tokenNeeded(url) {
          var needed = true;
          var exclude = ["/validateUser", "/logout"];

          for (var index = 0; index < exclude.length; index++) {
            if (exclude[index] == url) {
              return false;
            }
          }

          return needed;
        }
      }, {
        key: "setAuthentication",
        value: function setAuthentication(userId, authToken) {
          this.userId = userId;
          this.authToken = authToken;
        }
      }, {
        key: "setAuthToken",
        value: function setAuthToken(userId, authToken) {
          this.userId = userId;
          this.authToken = authToken;
        }
      }]);

      return Rest;
    }();

    Rest.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _configurator_configurator__WEBPACK_IMPORTED_MODULE_5__["Configurator"]
      }, {
        type: _network_service_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"]
      }];
    };

    Rest = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _configurator_configurator__WEBPACK_IMPORTED_MODULE_5__["Configurator"], _network_service_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _logger_logger__WEBPACK_IMPORTED_MODULE_7__["Logger"]])], Rest);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/devil/volume/projects/freelancingwork/new_work/ivipni-1/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map