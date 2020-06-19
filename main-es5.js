function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../../environments/environment.ts":
  /*!*************************************************************************!*\
    !*** D:/yuklemeden once/BitirmeProjesi/src/environments/environment.ts ***!
    \*************************************************************************/

  /*! exports provided: environment */

  /***/
  function environmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../../node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: 'AIzaSyDv6oP6GBjEM2Fxe31vqRO5QGjV4Y9m8VI',
        authDomain: 'ogrencisistemi-f1d5f.firebaseapp.com',
        databaseURL: 'https://ogrencisistemi-f1d5f.firebaseio.com',
        projectId: 'ogrencisistemi-f1d5f',
        storageBucket: 'ogrencisistemi-f1d5f.appspot.com',
        messagingSenderId: '438600159656',
        appId: '1:438600159656:web:1cfe916f7d998194298d9d',
        measurementId: 'G-Y8XK8KNXZC'
      }
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
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademic.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademic.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAkademikkismiAkademicHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <title>Bootstrap Example</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n<div id=\"rcorners2\">\r\n    <h1 id=\"ab\">akademik</h1>\r\n    <img src=\"../../../assets/images/akademic.jpg\" height=\"90px\" width=\"90px\" style=\"margin-left: 50%\">\r\n<div class=\"container\">\r\n    <form action=\"/action_page.php\" class=\"was-validated\">\r\n        <div class=\"form-group\">\r\n            <input type=\"text\" class=\"form-control\" id=\"uname\"\r\n             placeholder=\"Enter username\" name=\"uname\"\r\n                   required style=\"height: 40px;font-size: 40px;margin-top: 20px\"\r\n                    [(ngModel)]=\"id\"\r\n                    matInput\r\n                    [formControl]=\"myControl\"\r\n                    [matAutocomplete]=\"auto\"\r\n                    >\r\n                    <mat-autocomplete #auto=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let option of filteredOptions | async\"\r\n                         [value]=\"option\" (mouseover)=\"fcall(option)\">\r\n                         <img src=\"../../../assets/images/akademic.jpg\" \r\n                         height=\"20px\" width=\"20px\" style=\"margin-left: 0\">   {{option}}\r\n                        </mat-option>\r\n                      </mat-autocomplete>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" id=\"pwd\"\r\n             placeholder=\"Enter password\" name=\"pswd\"\r\n                   required style=\"height: 40px;font-size: 40px;margin-top: 40px\"\r\n                    [(ngModel)]=\"pass\" [formControl]=\"pswfc\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" \r\n        style=\"height: 60px;width: 140px;margin-top: 3px\" (click)=\"ctrl()\"><h1>Giriş</h1></button>\r\n    </form>\r\n</div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAkademikkismiAkademikGirisAkademikGirisComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Raised Buttons</h3>\n<div class=\"example-button-row\" style=\"width: 500px;height:300px; margin: 50px auto;\">\n  \n  <button mat-raised-button color=\"primary\"\n   style=\"width: 90%;height:45%; margin-bottom: 40px;\"  id=\"I\" (click)=\"get_Ogretim('IOgretim')\">\n  <h1>IOgretim</h1>  </button>\n \n  <button mat-raised-button color=\"primary\" style=\"width: 90%;height:45%;\" \n  (click)=\"get_Ogretim('IIOgretim')\" >\n    <h1>IIOgretim</h1></button>\n \n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariChartChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    #divChart\n    {\n        display: block;\n        width: 400px;\n        height: 400px;\n        margin: 50px auto;\n    }\n</style>\n\n<div id=\"divChart\">\n<canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariDersAlanlariComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<style>\n    .mat-form-field + .mat-form-field {\n    margin-left: 8px;\n  }\n\n  </style>\n  <body style=\"height: 4000px;\">\n<div >\n\n\n\n    <img (click)=\"imgclick()\" style=\"cursor: pointer;position: relative;left: 50%;\"\n    matTooltip=\"Google Sheet Şeklinde\" \n        aria-label=\"Button that displays a tooltip when focused or hovered over\"\n    src=\"https://img.icons8.com/color/48/000000/google-sheets.png\"/>\n\n    <span  matTooltip=\"İstatistikler\" \n    style=\"display: inline-block;position: relative; left:60%;top: 15px;\">\n    <i class=\"fa fa-bar-chart\" \n  \n    style=\"font-size:50px;\n    cursor:pointer;width: 40px;height: 40px;\" (click)=\"chart()\"></i>\n  </span>\n</div>\n<div style=\"height: 15px;\"></div>\n<hr>\n  <mat-accordion>\n    <div *ngFor=\"let i of items|async;let j=index\" id=\"tr\">\n    <span >\n      <mat-expansion-panel>\n\n      <mat-expansion-panel-header (click)=\"get_Puan(i,j,i.id)\">\n\n        <mat-panel-title>\n         {{i.id}}\n        </mat-panel-title>\n\n        <mat-panel-description>\n          {{i.name}}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n\n      <mat-form-field>\n        <mat-label>Vize</mat-label>\n        <input class=\"dd\" matInput type=\"number\"  autocomplete=\"off\" #Vize readonly=\"{{But}}\">\n      </mat-form-field>\n\n      <mat-form-field>\n        <mat-label>Final</mat-label>\n        <input class=\"dd\" matInput type=\"number\" min=\"1\"   #Final readonly=\"{{But}}\">\n      </mat-form-field>\n      <mat-form-field class=\"Temp\">\n        <mat-label  >Proje</mat-label>\n        <input class=\"dd\" matInput type=\"number\" min=\"1\"   #Proje readonly=\"{{But}}\">\n\n      </mat-form-field>\n      <mat-form-field class=\"bute\" *ngIf=\"But\">\n        <mat-label  >But Pauni</mat-label>\n        <input  matInput type=\"number\" min=\"1\"   [formControl] = \"bute\">\n\n      </mat-form-field>\n      <br>\n      <div *ngFor=\"let r of Odevler;let ir=index\">\n      <mat-form-field  *ngIf=\"r!=='Yok'\">\n        <mat-label>Odev{{ir+1}}</mat-label>\n        <input class=\"odevval\"  matInput type=\"number\" min=\"1\"\n        placeholder=\"{{r}} %\" readonly=\"{{But}}\">\n\n      </mat-form-field>\n    </div>\n      <br>\n\n\n       <button mat-button\n       (click)=\"get_ID(i,Vize.value,Proje.value,Final.value,j)\"\n       class=\"btn btn-danger\">Gir</button>\n\n    </mat-expansion-panel>\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                         (closed)=\"panelOpenState = false\" >\n\n    </mat-expansion-panel>\n  </span>\n  </div>\n\n  </mat-accordion>\n\n\n\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariSheetstudentsSheetstudentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\" integrity=\"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\" crossorigin=\"anonymous\">\n<script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js\" integrity=\"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI\" crossorigin=\"anonymous\"></script>\n\n<style>\n  td,th,button,.Ain,.AFinal,.AVize,.AProje,.ABut\n  {\n    text-align: center;\n    width: 70px;\n    height: 40px;\n   \n  }\n  .Ain,.AFinal,.AVize,.AProje,.ABut{\n    border-radius: 20%;\n  }\n</style>\n<body>\n \n<table class=\"table\" >\n  <thead>\n    <tr>\n      <th scope=\"col\" (click)=\"f()\">#Numara</th>\n      <th scope=\"col\" (click)=\"f()\">Vize</th>\n      <th scope=\"col\" (click)=\"f()\" *ngIf=\"proje_not==='true'\">Proje</th>\n      <th scope=\"col\" (click)=\"f()\" *ngIf=\"Odev_not==='true'\">Ödevler</th>\n      <th scope=\"col\" (click)=\"f()\">Final</th>\n      <th scope=\"col\" (click)=\"f()\" *ngIf=\"But==='true'\">Bütünleme</th>\n      <th scope=\"col\" (click)=\"f()\">Kaydı Et</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let i of students_sinavlar;let j=index\">\n\n      <th scope=\"row\">{{i.id}}</th>\n      <td *ngIf=\"satir===i.id\">\n        <input type=\"text\" value=\"{{i.vize}}\" class=\"AVize\"></td>\n      <td (click)=\"tableCliked(i.id,1,i.vize)\" #vize *ngIf=\"satir!==i.id&&suntun!==1\">{{i.vize}}</td>\n      <td *ngIf=\"satir===i.id&&proje_not==='true'\"  >\n        <input type=\"text\" value=\"{{i.proje}}\" class=\"AProje\" ></td>\n      <td (click)=\"tableCliked(i.id,2,i.proje)\" #proje\n       *ngIf=\"satir!==i.id&&proje_not==='true'\">\n       {{i.proje}}</td>\n    \n       <td *ngIf=\"Odev_not==='true'\" >\n    <!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-info\"  (click)=\"Odevf(i)\"\ndata-toggle=\"modal\" data-target=\"#exampleModalScrollable\">\n  Odev\n</button>\n\n    </td>\n    \n    <td *ngIf=\"satir===i.id\">\n        <input type=\"text\" value=\"{{i.Final}}\" class=\"AFinal\"></td>\n      <td (click)=\"tableCliked(i.id,4,i.Final)\"  *ngIf=\"satir!==i.id&&suntun!==4\" >{{i.Final}}</td>\n      \n      \n      <td *ngIf=\"satir===i.id&&But==='true'\">\n        <input type=\"text\" value=\"{{i.Bute}}\" class=\"ABut\"></td>\n    \n      <td (click)=\"tableCliked(i.id,5,i.Bute)\" *ngIf=\"satir!==i.id&&suntun!==5&&But==='true'\">{{i.Bute}}</td>\n      <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"Update(i,j)\" \n         matTooltip=\"Kaydet!!!\" >\n\n\n        <svg class=\"bi bi-pencil\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" d=\"M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z\"/>\n          <path fill-rule=\"evenodd\" d=\"M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z\"/>\n        </svg>\n\n        </button></td>\n    </tr>\n\n  </tbody>\n  \n</table>\n\n\n\n\n\n\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalScrollable\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalScrollableTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-scrollable\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalScrollableTitle\">Modal title</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n     {{odev_icin_secilen_ogrenci_id}}\n    </div>\n          <div class=\"form-group\" *ngFor=\"let i of Odevler_Puani;let j=index\">\n            <label for=\"exampleInputEmail1\">Etkisi ({{Odevler_Etkisi[j]}} %) </label>\n            <input type=\"email\" class=\"form-control ABC\" \n             aria-describedby=\"emailHelp\" placeholder=\"Enter email\" maxlength=\"3\"\n             value=\"{{i}}\" placeholder=\"{{Odevler_Etkisi[j]}}\">\n          </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" \n        (click)=\"degistirme_Odev()\" style=\"width: auto;\" data-dismiss=\"modal\">Değiştirme Yap</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAkademikkismiAkademikGirisDerslerDerslerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"example-button-row\"\nstyle=\"width: 500px;height:300px; margin: 10px auto;\">\n<span *ngFor=\"let y of items|async\" >\n   \n    \n      \n      <button mat-raised-button color=\"primary\"\n       style=\"width: 90%;height:45%; margin-bottom: 40px;\"  id=\"I\" (click)=\"get_Ders(y)\">\n      <h1>{{y}}</h1>  </button>\n     \n     \n       \n     \n</span>\n</div> \n      \n   \n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/app.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/app.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n<body class=\"back_ground\" style=\"text-align: center\">\r\n   \r\n\r\n<div id=\"carouselExampleCaptions\" class=\"carousel slide center\" data-ride=\"carousel\"\r\n     style=\"text-align: center; z-index: 1;\">\r\n    <ol class=\"carousel-indicators\">\r\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>\r\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>\r\n        <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li>\r\n    </ol>\r\n    <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n            <img style=\"height: 300px\" src=\"../../assets/images/carousel1.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n                <h2>Bitirme projesi</h2>\r\n                <h1>Öğrenci bilgi sistemi.</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img style=\"height: 300px\" src=\"../../assets/images/carousel2.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n                <h2>Director</h2>\r\n                <h1>Prof. Dr. Yaşar Becerikli.</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n            <img style=\"height: 300px\"  src=\"../../assets/images/c3.jpg\" class=\"d-block w-100\" alt=\"...\">\r\n            <div class=\"carousel-caption d-none d-md-block\">\r\n                <h1 style=\"color: brown\">Öğrenciler</h1>\r\n                <h1 style=\"color: blue\">Ahmad damr<br>Aydın Demir<br>Mahmmat saleh Yossouf</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>\r\n<!------------------------------------------------------------------------------------>\r\n\r\n<div style=\"width: 800px; height: 200px\" class=\"grid\">\r\n<mat-grid-list cols=\"2\" rowHeight=\"175px\">\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\"><a [routerLink]=\"['student']\" style=\"display: inline-block\">\r\n        <mat-card class=\"example-card\" id=\"c1\">\r\n            <mat-card-header>\r\n                <div mat-card-avatar class=\"student\" ></div>\r\n                <mat-card-title>Öğrenci</mat-card-title>\r\n                <mat-card-subtitle>Student</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"../../assets/images/student.png\" alt=\"Photo of a Shiba Inu\" >\r\n        </mat-card>\r\n    </a></mat-grid-tile>\r\n\r\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n        <a [routerLink]=\"['akademikkismi']\" style=\"display: inline-block\">\r\n        <mat-card class=\"example-card\" id=\"c2\">\r\n            <mat-card-header>\r\n                <div mat-card-avatar class=\"academic\"></div>\r\n                <mat-card-title>Akademik Kısmı</mat-card-title>\r\n                <mat-card-subtitle>Öğretim görevliler</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"../../assets/images/teacher.png\" alt=\"Photo of a Shiba Inu\">\r\n        </mat-card>\r\n    </a></mat-grid-tile></mat-grid-list>\r\n</div>\r\n\r\n\r\n<div style=\"width: 800px; height: 200px\" class=\"grid\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"175px\">\r\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\r\n            <a [routerLink]=\"['idarikismi']\" style=\"display: inline-block\">\r\n            <mat-card class=\"example-card\"  id=\"c3\" >\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"idari\"></div>\r\n                    <mat-card-title>Idari kısmı</mat-card-title>\r\n                    <mat-card-subtitle>Idari İşlemler</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"../../assets/images/idaric.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n            </mat-card>\r\n        </a></mat-grid-tile>\r\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\"><a [routerLink]=\"['isler']\" style=\"display: inline-block\">\r\n            <mat-card class=\"example-card\" id=\"c4\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"ogrenciisleri\"></div>\r\n                    <mat-card-title>Öğrenci İşleri</mat-card-title>\r\n                    <mat-card-subtitle>Kısımı</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"../../assets/images/ogrenciisleris.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            </mat-card>\r\n        </a></mat-grid-tile>\r\n        <button mat-button (click)=\"openDialog()\" style=\"visibility: hidden\" id=\"h\">Open dialog</button>\r\n\r\n    </mat-grid-list>\r\n</div>\r\n<div style=\"width: 800px; height: 200px\" class=\"grid\" id=\"hakkimda\" mat-button>\r\n    <mat-grid-list cols=\"2\" rowHeight=\"175px\">\r\n        <mat-grid-tile [colspan]=\"2\" [rowspan]=\"1\"><a [routerLink]=\"['']\" style=\"display: inline-block\">\r\n            <mat-card class=\"example-card\" id=\"c5\">\r\n                <mat-card-header>\r\n                    <div mat-card-avatar class=\"damascus\"></div>\r\n                    <mat-card-title>Hakkımda</mat-card-title>\r\n                    <mat-card-subtitle>About Me</mat-card-subtitle>\r\n                </mat-card-header>\r\n                <img mat-card-image src=\"../../assets/images/damascus.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n            </mat-card>\r\n        </a></mat-grid-tile>\r\n\r\n    </mat-grid-list>\r\n</div>\r\n\r\n\r\n</body>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/hakkimda/hakiimda.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/hakkimda/hakiimda.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemHakkimdaHakiimdaHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\r\n    .fa {\r\n        font-size: 30px;\r\n        width: 50px;\r\n        text-decoration: none;\r\n    }\r\n    </style>\r\n\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<h2 mat-dialog-title id=\"about\">About Me</h2>\r\n<mat-dialog-content class=\"mat-typography\">\r\n    <h3>I am Ahmed Deep Damer software engineering from syria i am in the 4'th class and this is my graduate project.\r\n    </h3>\r\n<h3>I have enjoyed to Acm Icpc programming copetition when i was in Damascus University to solve complex algoritms it was so exciting\r\n    for me and i have learnt alot of things from students in other countries i hope to trying this once a time ... etc . </h3>\r\n<h1>Adress</h1>\r\n    <div></div>\r\n    <span class=\"glyphicon glyphicon-home\"></span> Turkey/Kocaeli/Izmit <br><br>\r\n    <div class=\"glyphicon glyphicon-earphone\">  0090 (536) 271 46 12</div>\r\n <br><br>\r\n    <a href=\"https://www.facebook.com/\" class=\"fa fa-facebook\" style=\"color: blue\" target=\"_blank\"></a>\r\n    <a href=\"https://www.youtube.com/channel/UCF9-9I1s1-d2WLBJK8_WeEQ?view_as=subscriber\"\r\n       class=\"fa fa-youtube\" aria-hidden=\"true\" style=\"color: crimson\" target=\"_blank\"></a>\r\n\r\n</mat-dialog-content>\r\n<mat-dialog-actions align=\"end\">\r\n    <button mat-button mat-dialog-close style=\"color: crimson\">Cancel</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/idari.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/idari.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemIdarikismiIdariHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <title>Bootstrap Example</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n\r\n   \r\n<div id=\"rcorners2\">\r\n    <h1 id=\"ab\">IdariKismi</h1>\r\n    <img src=\"../../../assets/images/idari.png\" height=\"90px\" width=\"90px\" style=\"margin-left: 50%\">\r\n    <div class=\"container\">\r\n        <form action=\"/action_page.php\" class=\"was-validated\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"uname\" placeholder=\"Enter username\" name=\"uname\"\r\n                       required style=\"height: 40px;font-size: 40px;margin-top: 20px\"\r\n                        [formControl]=\"name\" [matAutocomplete]=\"auto\"\r\n                        aria-label=\"name\"\r\n                        matInput>\r\n\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\"\r\n                             (mouseover)=\"fcall(option)\">\r\n                             <img src=\"../../../assets/images/idari.png\" \r\n                             height=\"20px\" width=\"20px\" style=\"margin-left: 0\">  \r\n                            \r\n                              {{option}}\r\n                            </mat-option>\r\n                          </mat-autocomplete>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\"\r\n                       required style=\"height: 40px;font-size: 40px;margin-top: 40px\" [formControl]=\"password\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"height: 60px;width: 140px;\" (click)=\"submitb()\">\r\n                <h1>Giriş</h1></button>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemIdarikismiMenuIdariAcilacakDerslerAcilacakDerslerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.9.0/css/bootstrap.min.css\"> -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js\" integrity=\"sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==\" crossorigin=\"anonymous\"></script>\n\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n<script src=\"https://code.jquery.com/jquery-3.4.1.slim.min.js\" integrity=\"sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js\" integrity=\"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo\" crossorigin=\"anonymous\"></script>\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js\" integrity=\"sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6\" crossorigin=\"anonymous\"></script>\n\n\n\n<div style=\"margin: 100px;\">\n<mat-grid-list cols=\"4\" rowHeight=\"2:1\">\n\n  <mat-grid-tile >\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\"\n                     placeholder=\"HOCA ADI\"\n                     aria-label=\"Number\"\n                     matInput\n                     [formControl]=\"myControl\"\n                     [matAutocomplete]=\"auto\" id=\"one\">\n              <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n        \n           \n        \n        </form>\n        \n        \n\n\n    </mat-grid-tile>\n\n\n\n\n    <mat-grid-tile >\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\"\n                     placeholder=\"DERS\"\n                     aria-label=\"Number\"\n                     matInput\n                     [formControl]=\"myControl\" \n                     [matAutocomplete]=\"auto2\" id=\"one2\">\n              <mat-autocomplete #auto2=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of options2\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n        \n            \n        \n        </form>\n        \n        \n\n\n    </mat-grid-tile>\n\n\n\n    <mat-grid-tile >\n        <form class=\"example-form\">\n            <mat-form-field class=\"example-full-width\">\n              <input type=\"text\"\n                     placeholder=\"DERS SAATİ\"\n                     aria-label=\"Number\"\n                     matInput\n                     [formControl]=\"myControl\"\n                     [matAutocomplete]=\"auto3\" id=\"one3\">\n              <mat-autocomplete #auto3=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of options3\" [value]=\"option\">\n                  {{option}}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n        \n            \n        \n        </form>\n        \n        \n\n\n    </mat-grid-tile>\n\n\n\n\n    <mat-grid-tile >\n      <form class=\"example-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\"\n                   placeholder=\"YIL\"\n                   aria-label=\"Number\"\n                   matInput\n                   [formControl]=\"myControl\"\n                   [matAutocomplete]=\"auto4\" id=\"one4\">\n            <mat-autocomplete #auto4=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of options4\" [value]=\"option\">\n                {{option}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n      \n          \n      \n\n          <!--                  -->\n\n\n      </form>\n      \n      \n\n\n  </mat-grid-tile>\n\n\n\n\n  <!-- <mat-grid-tile >\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <input type=\"text\"\n                 placeholder=\"Kredi\"\n                 aria-label=\"Number\"\n                 matInput\n                 [formControl]=\"myControl\"\n                 [matAutocomplete]=\"auto5\" id=\"one5\">\n          <mat-autocomplete #auto5=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of options5\" [(value)]= \"mykredi\">\n              {{option}}\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field> -->\n    \n        \n    \n\n        <!--                  -->\n\n\n  <!--  </form>\n    \n    \n\n\n</mat-grid-tile>\n-->\n\n<mat-grid-tile >\n  <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\"\n               placeholder=\"sınıf kapasite\"\n               aria-label=\"Number\"\n               matInput\n               [formControl]=\"myControl\"\n               [matAutocomplete]=\"auto6\" id=\"one6\">\n        <mat-autocomplete #auto6=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of options6\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n  \n      \n  \n\n      <!--                  -->\n\n\n  </form>\n  \n  \n\n\n</mat-grid-tile>\n\n\n\n\n\n\n</mat-grid-list>\n\n<div id=\"containerf\" style=\"background-color: blanchedalmond; height:300px;overflow: auto;\">\n  <div style=\"margin-bottom: 20px; font-weight: bolder;\">\n    Ders Detayları</div>\n    <label>Final :</label>\n<input placeholder=\"Finale Etkisi\" id=\"final\" #final/>\n<label>Vize : </label>\n<input placeholder=\"Vize Etkisi\" #vize id=\"vize\"/>\n<label>Proje : </label>\n<input placeholder=\"Proje Etkisi\" #proje id=\"proje\"/>\n<br>\n<label>Kredi : </label>\n<input placeholder=\"Kredi\" id=\"kredi\">\n<!-- <input placeholder=\"odev\" (keyup)=\"odevler(valim.value)\" #valim type=\"number\"/>   -->\n<div [formGroup]=\"orderForm\" >\n <label>Ödev Ekleme</label>\n  <span class=\"material-icons matclass\" (click)=\"addItem()\" value=\"Odev Ekle\"   matTooltip=\"Odev Ekle\"\n  style=\"margin: 5px;\" >\n    add_circle\n    </span>\n  <!-- <input type=\"button\" (click) = \"getOdevler()\" value=\"Get\"> -->\n<div formArrayName=\"itemsf\" \n  *ngFor=\"let item of orderForm.get('itemsf').controls; let i = index;\">\n  <span [formGroupName]=\"i\">\n    <input formControlName=\"name\" placeholder=\"Ödev Etkisi\" class=\"getting\" >\n    \n   \n     <span class=\"material-icons matclass\" matTooltip=\"Odev Sil\"\n      (click)=\"remove(i)\" \n     \n    >\n      delete_forever\n      </span>\n    \n   \n  </span>\n\n  <!-- Chosen name: {{ orderForm.controls.itemsf.controls[i].controls.name.value }} -->\n</div>\n\n</div>\n</div>\n\n\n<br><br>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"add()\">ADD</button>\n    \n</div>    \n\n\n\n\n   \n  <table border=\"4\" style=\"width: 100%;\">\n    <tr style=\"width: 100%;\">\n      \n      <th style=\"text-align: center;\">Dersler</th> \n      <th style=\"text-align: center;\">Dr.Adı</th>\n      <th style=\"text-align: center;\">Saat</th>\n      <th style=\"text-align: center;\">YIL</th>\n      <th style=\"text-align: center;\">Kredi</th>\n      <th style=\"text-align: center;\">OgrenciSayisi</th>\n      <th style=\"text-align: center;\">Ders Detayları</th>\n      <th style=\"text-align: center;\">Silme/Güncelleme</th>\n    </tr> \n    <tr style=\"width: 100%;\" *ngFor=\"let item of items | async; let i=index\">\n      <td style=\"text-align: center;\"> {{ item.Ders}}</td>\n      <td style=\"text-align: center;\">{{item.Dr}}</td>\n      <td style=\"text-align: center;\">{{item.saat}}</td>\n      <td style=\"text-align: center;\">{{item.yil}}</td>\n      <td style=\"text-align: center;\">{{item.kredi}}</td>\n      <td style=\"text-align: center;\">{{item.OgrenciSayisi}}</td>\n      <!-- ders detaylari -->\n      <td> <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" \n      data-target=\"#exampleModal2\" style=\"width: 100%;\" (click)=\"dersDetay(item.Ders)\">\n      <svg class=\"bi bi-book-half\" width=\"2em\" height=\"2em\" viewBox=\"0 0 16 16\" \n      fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" >\n        <path fill-rule=\"evenodd\" d=\"M12.786 1.072C11.188.752 9.084.71 7.646 2.146A.5.5 0 0 0 7.5 2.5v11a.5.5 0 0 0 .854.354c.843-.844 2.115-1.059 3.47-.92 1.344.14 2.66.617 3.452 1.013A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.276-.447L15.5 2.5l.224-.447-.002-.001-.004-.002-.013-.006-.047-.023a12.582 12.582 0 0 0-.799-.34 12.96 12.96 0 0 0-2.073-.609zM15 2.82v9.908c-.846-.343-1.944-.672-3.074-.788-1.143-.118-2.387-.023-3.426.56V2.718c1.063-.929 2.631-.956 4.09-.664A11.956 11.956 0 0 1 15 2.82z\"/>\n        <path fill-rule=\"evenodd\" d=\"M3.214 1.072C4.813.752 6.916.71 8.354 2.146A.5.5 0 0 1 8.5 2.5v11a.5.5 0 0 1-.854.354c-.843-.844-2.115-1.059-3.47-.92-1.344.14-2.66.617-3.452 1.013A.5.5 0 0 1 0 13.5v-11a.5.5 0 0 1 .276-.447L.5 2.5l-.224-.447.002-.001.004-.002.013-.006a5.017 5.017 0 0 1 .22-.103 12.958 12.958 0 0 1 2.7-.869z\"/>\n      </svg>\n      </button>\n      </td>\n\n\n      <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"get_id(i)\" style=\"width: 50%;\">\n        <i class=\"material-icons\">\n          restore_from_trash\n          </i>\n          </button>\n      \n<button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\"\n data-target=\"#exampleModalLong\" (click)=\"get_id_u(i)\" style=\"width: 50%;\">\n <i class=\"material-icons\">\n  refresh\n  </i>\n</button>\n\n          \n      </td>\n      \n    </tr>\n  </table>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalLong\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Güncelleme</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n       <div class='Ac'>\n        <input id='Mone' type=\"text\" placeholder=\"hoca Adi\" class=\"form-control\"/>\n      </div>\n      <div class='Ac'>\n       <input id='Mtwo' type=\"text\" placeholder=\"Ders Adi\" class=\"form-control\"/>\n      </div>\n      <div class='Ac'>\n       <input id='Mthree' type=\"text\" placeholder=\"Ders saatleri\" class=\"form-control\"/>\n      </div>\n      <div class='Ac'>\n       <input id='Mfour' type=\"text\" placeholder=\"Sinif\" class=\"form-control\"/>\n      </div>\n      <div class='Ac'>\n        <input id='Mfive' type=\"text\" placeholder=\"kredi\" class=\"form-control\"/>\n       </div>\n       <div class='Ac'>\n        <input id='Msix' type=\"text\" placeholder=\"Öğrenci Sayısı\" class=\"form-control\"/>\n       </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" \n        >Çıkış</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='print_id()' \n        data-dismiss=\"modal\">Yap!!</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ders Detayları</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div>\n          <div class=\"Ac2\">\n        <label>Final :</label>   \n         <input id='ufinal' type=\"text\" placeholder=\"Final\" class=\"form-control\"\n             value=\"{{DersDetaylar.Final}}\"/>\n          </div>\n          <div class=\"Ac2\">\n            <label>Vize :</label> \n                   <input id='uvize' type=\"text\" placeholder=\"Vize\" class=\"form-control\"\n             value=\"{{DersDetaylar.Vize}}\"/>\n          </div>\n          <div class=\"Ac2\" > \n            <label >Proje :</label> \n               <input *ngIf=\"DersDetaylar.Proje!=='Yok'\" id='uproje' type=\"text\" placeholder=\"Proje\" class=\"form-control\" \n            value=\"{{DersDetaylar.Proje}}\"/>\n\n            <input *ngIf=\"DersDetaylar.Proje==='Yok'\" id='uproje' type=\"text\" placeholder=\"Proje\" class=\"form-control\" \n            value=\"{{DersDetaylar.Proje}}\" readonly/>\n          </div>\n          <div *ngIf=\"conf()\">\n          <div >Odevler</div>\n          <div *ngFor=\"let i of DersDetaylar.Odevler;let y=index\">\n<!--loop Odevler icin-->\n<div class=\"Ac2\"> \n  <input  type=\"text\" placeholder=\"Odev {{y+1}}\" class=\"form-control Odevler\" \n  value=\"{{i}}\"/>\n</div>\n</div >\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">çıkış</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"DersdetayUpdate()\" \n        data-dismiss=\"modal\">Yap!!</button>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemIdarikismiMenuIdariMenuIdariComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n  button\n  {\n    width: 200px;\n    height: 100px;\n    margin: 20px;\n    margin-left: 300px;\n\n  }\n</style>\n<body style=\"background-color: antiquewhite;\">\n  <div style=\"width: 50%; position: relative; left: 300px; top: 70px;\">\n  <div style=\"background-color: cadetblue;\">\n<button class=\"btn btn-primary\" type=\"button\" [routerLink]=\"['Ogretim']\">acilacakdersler</button>\n</div>\n<div style=\"background-color:aliceblue;\">\n<button class=\"btn btn-secondary\" type=\"button\" id=\"sec\" (click)=\"secimacma()\"></button>\n\n<!--   ------------------------------                -->\n<span style=\"display: inline;position: relative; left: 100px; top: -90px;\">\n<mat-form-field>\n  <mat-label>Hangi Dönem ?</mat-label>\n  <mat-select>\n    <mat-option *ngFor=\"let d of Donem\" [value]=\"d.value\" (click)=\"get_Donem(d.value)\">\n\n      {{d.value}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n</span>\n<!--          --------------  -------- -->\n</div>\n\n    <div style=\"background-color: cadetblue;width: 50%;display: inline-block;\">\n      <button class=\"btn btn-danger\" type=\"button\"\n       (click)=\"Hesap()\" style=\"margin-left: 3px;\">Ortalamalar Hesaplama</button>\n\n    </div>\n    <div style=\"background-color: blueviolet;width:\n    50%;display: inline-block;\">\n\n    <button class=\"btn btn-primary\" type=\"button\"\n    (click)=\"But()\" id=\"But\" style=\"margin-left: 135px;\" >Bütünleme Başlat</button>\n\n  </div>\n  </div>\n\n</body>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemIdarikismiMenuIdariOgretimOgretimComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<body style=\"background-color: cadetblue;\">\n<div style=\"position: relative; left: 25%;top: 150px;\">\n<div class=\"example-button-row\" style=\"height: 40%;\">\n \n  <button mat-fab color=\"primary\" \n  style=\"display: block; width: 50%; margin-bottom: 75px; height: 100px;\"\n  (click)=\"fn('IOgretim')\"><h1>IOgretim</h1></button>\n</div>\n\n\n\n<div class=\"example-button-row\">\n \n  <button mat-fab color=\"primary\" \n  style=\"display: block; width: 50%;height: 100px\"   (click)=\"fn('IIOgretim')\">\n    <h1>IIOgretim</h1></button>\n</div>\n\n\n</div>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/isler.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/isler.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriIslerHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <title>Bootstrap Example</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n<div id=\"rcorners2\">\r\n    <h1 id=\"ab\">Öğrenciİşleri</h1>\r\n    <img src=\"../../../assets/images/ogrenciisleris.jpg\" height=\"90px\" width=\"90px\" style=\"margin-left: 50%\">\r\n    <div class=\"container\">\r\n        <form action=\"/action_page.php\" class=\"was-validated\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"uname\" \r\n                 placeholder=\"Enter username\" name=\"uname\"  [matAutocomplete]=\"auto\"\r\n                 aria-label=\"name\"\r\n                 matInput\r\n                       required style=\"height: 40px;font-size: 40px;margin-top: 20px\"\r\n                        [formControl]=\"name\">\r\n\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\"\r\n                             (mouseover)=\"fcall(option)\">\r\n                             <img src=\"../../../assets/images/ogrenciisleris.jpg\" \r\n                             height=\"20px\" width=\"20px\" style=\"margin-left: 0\">  \r\n                            \r\n                              {{option}}\r\n                            </mat-option>\r\n                          </mat-autocomplete>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pswd\"\r\n                       required style=\"height: 40px;font-size: 40px;margin-top: 40px\" \r\n                       [formControl]=\"password\" >\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"height: 60px;width: 140px;\" (click)=\"controlletme()\"><h1>Giriş</h1></button>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriOgrenciislerimenueOgrenciislerimenueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body >\n<div class=\"example-container\" [class.example-is-mobile]=\"mobileQuery.matches\"\n     style=\"background-color: whitesmoke\">\n    <mat-toolbar color=\"primary\" class=\"example-toolbar\" style=\"background-color: black\">\n        <button mat-icon-button (click)=\"snav.toggle()\" style=\"background-color: black\">\n            <mat-icon>menu</mat-icon></button>\n        <h1 class=\"example-app-name\">Öğrenci işleri İşlemleri</h1>\n    </mat-toolbar>\n\n    <mat-sidenav-container class=\"example-sidenav-container\"\n                           [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\" >\n        <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\"\n                     [fixedInViewport]=\"mobileQuery.matches\"\n                     fixedTopGap=\"56\" style=\"width: 90%; background-color: burlywood\">\n<div style=\"margin-top: 20px; height: 100px\" >\n\n    <a [routerLink]= \"['yenikayit']\" style=\" text-decoration: none; \">\n\n        <button mat-button style=\"width: 100%; height: 100%; \" class=\"yenikayit\">\n\n\n<h1>Yeni Öğrenci Kayıt</h1>\n            </button>\n\n    </a>\n</div>\n\n            <div style=\"margin-top: 20px; height: 100px\" >\n\n                <a [routerLink]= \"['ogrencinumarasi']\" style=\" text-decoration: none; \">\n\n                    <button mat-button style=\"width: 100%; height: 100%; \" class=\"belgevermek\">\n\n\n                        <h1>Belge Vermek</h1>\n                    </button>\n\n                </a>\n            </div>\n\n\n        </mat-sidenav>\n\n        <mat-sidenav-content>\n            <p *ngFor=\"let content of fillerContent\">{{content}}</p>\n        </mat-sidenav-content>\n    </mat-sidenav-container>\n</div>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n\n</body>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriBorcBorcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.html":
  /*!*******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.html ***!
    \*******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriOgrencibilgileriComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Öğrenci Bilgileri</a>\n    <button class=\"navbar-toggler collapsed\"\n            type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarsExample01\"\n            aria-controls=\"navbarsExample01\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExample01\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\"\n                   href=\"anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri/\">\n                    Ana Sayfa <span class=\"sr-only\">(current)\n                </span></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\"\n                   id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                   aria-expanded=\"false\">Tıklayınız</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown-item\" (click)=\"sonucular()\">Dönem sonuçları</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['borc']\">Borç Durumu</a>\n                    <a class=\"dropdown-item\" (click)=\"extra()\" style=\"cursor: pointer\">Diğerler</a>\n                    <a class=\"dropdown-item\" (click)=\"geri()\" style=\"cursor: pointer\"\n                    >çıkış</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<div style=\"background-color: antiquewhite; height: 400px;width:100%; padding-top: 50px\n;padding-left: 100px\">\nBitirme Projesi 2019-2020 Kocaeli Üniversitesi\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriSonuclarSonuclarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n\n<body>\n<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Öğrenci Bilgileri</a>\n    <button class=\"navbar-toggler collapsed\"\n            type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarsExample01\"\n            aria-controls=\"navbarsExample01\"\n            aria-expanded=\"true\"\n            aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExample01\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\"\n                   href=\"anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri/\">\n                    Ana Sayfa\n                    <span class=\"sr-only\">\n                        (current)\n                </span></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\"\n                   id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                   aria-expanded=\"true\">Tıklayınız</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown-item\" [routerLink]=\"['sonuclar']\">Dönem sonuçları</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['../borc']\">Borç Durumu</a>\n                    <a class=\"dropdown-item\" (click)=\"extra()\" style=\"cursor: pointer\">Diğerler</a>\n                    <a class=\"dropdown-item\" (click)=\"geri()\" style=\"cursor: pointer\"\n                    >çıkış</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav> \n\n\n\n\n<button class=\"material-icons\" (click)=\"printf()\">\n    print\n</button>\n\n\n <mat-grid-list cols=\"2\" rowHeight=\"1:1\" [gutterSize]=\"'10px'\">\n   \n\n <div *ngFor=\"let i of T\" style=\"margin-left: 20px;\">\n    <mat-grid-tile style=\"margin: 0;padding:0\">\n    <table border=\"4\"  style=\"text-align: center;\" class=\"tb\">\n        <h3 style=\"text-align: center;\">GÜZ ({{i}})</h3> \n  <hr>\n   <table  style=\"text-align: center;\" >\n    <tr style=\"width: 100%;\">\n      \n        <th style=\"text-align: center;\">Ders</th> \n        <th style=\"text-align: center;\">HARF</th> \n        <th style=\"text-align: center;\">KREDI</th> \n        </tr>\n        *ngIf=\"i===i1.tarih\"\n    <tr  style=\"width: 100%;\" *ngFor=\"let i1 of L|async\">\n<ng-container *ngIf=\"i===i1.tarih\">\n    \n<td style=\" direction: ltr;\" > {{i1.ders_adi}}</td>\n  <td style=\"text-align: center;\">  {{i1.a_node.Harf}} </td> \n  <td style=\" direction: rtl;\">  {{i1.a_node.Kredi}}</td>\n</ng-container>\n    </tr>        \n\n    \n    </table>\n</table>\n</mat-grid-tile>\n\n    \n   \n    \n    \n    \n    \n\n\n<mat-grid-tile>\n    <table border=\"4\"  style=\"text-align: center;\" class=\"tb\">\n        <h3 style=\"text-align: center;\">BAHAR ({{i}})</h3> \n  <hr>\n   <table  style=\"text-align: center;\" >\n    <tr style=\"width: 100%;\">\n      \n        <th style=\"text-align: center;\">Ders</th> \n        <th style=\"text-align: center;\">HARF</th> \n        <th style=\"text-align: center;\">KREDI</th> \n        </tr>\n        *ngIf=\"i===i1.tarih\"\n    <tr  style=\"width: 100%;\" *ngFor=\"let i1 of L2|async\">\n<ng-container *ngIf=\"i===i1.tarih\">\n    \n<td style=\"text-align: center;\" > {{i1.ders_adi}} </td>\n  <td style=\"text-align: center;\">  {{i1.a_node.Harf}} </td> \n  <td style=\"text-align: center;\">  {{i1.a_node.Kredi}}</td>\n</ng-container>\n    </tr>        \n\n    \n    </table>\n</table>\n</mat-grid-tile>\n\n</div>\n    \n   \n\n</mat-grid-list>\n\n\n</body> -->\n\n<style>\n    td{\n        font-weight: bold;\n        font-size: 15px;\n    }\n    th{\n        font-weight: bolder;\n        font-size: 20px;\n    }\n</style>\n    \n    <body style=\"overflow: scroll;\">\n<div style=\"color: red; font-family: Arial, Helvetica, sans-serif; font-weight: bolder;\">\n Genel Ortalama:   {{TpOrtalam}} \n</div>\n<div style=\"color: red; font-family: Arial, Helvetica, sans-serif; font-weight: bolder;\">\nToplam Kredi: {{TpKredi}}\n</div>\n<hr>\n<div style=\"height: 200px;width: 100%;\"></div>\n\n<br>\n        <mat-grid-list cols=\"2\" rowHeight=\"1:1\" style=\"overflow: visible;\"  [gutterSize]=\"'5px'\">\n          \n<span *ngFor=\"let y of years\" style=\"margin: 0;\">\n\n<span *ngFor = \"let d of donemler;let ind = index\">\n    <mat-grid-tile style=\"overflow: visible;\">\n<table border=\"4\" style=\" \nborder-radius: 10%;border-collapse: separate;  \">\n <span style=\"font-weight: bolder;text-align: center;\"><u>{{y}}</u></span>\n <div style=\"font-weight: bold;text-align: center;\"><u>{{d}}</u></div>\n <br>\n <hr>\n <br>\n    <table  style=\"margin:auto 50px;\" >\n   \n   <tr>\n    <th style=\"text-align: center;\">Ders</th>\n   <th style=\"text-align: center;\">Kredi</th>\n   <th style=\"text-align: center;\">Harf</th>\n</tr>\n<br>\n   <hr>\n   <br>\n   <tr *ngFor=\"let i of sc\">\n   <td style=\"text-align: center;\" *ngIf = \"i.donem===d\"> {{i.ders}}</td>\n<td style=\"text-align: center;\"  *ngIf = \"i.donem===d\"> {{i.kredi}}</td>\n<td style=\"text-align: center;\"  *ngIf = \"i.donem===d\"><span style=\"width: 7px;\"></span>  {{i.harf}}</td>\n   </tr>\n   <br>\n   <hr>\n   <span style=\"color: brown;font-family: fantasy;font-weight: bold;\"> Donem Ortalaması: {{Dortala[ind]}}\n\n   </span> <span style=\"position: relative; left:20px; color: brown;font-family: fantasy;font-weight: bold;\">Kredi : {{Dkredi[ind]}}</span>\n</table>\n</table>\n</mat-grid-tile>\n</span>\n</span>\n</mat-grid-list>\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencinumarasiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form style=\"margin: 200px\">\r\n    <img src=\"../../../../../assets/images/student.jpg\" width=\"300px\" height=\"300px\">\r\n    <div class=\"form-group\" style=\"width: 70%\">\r\n        <label for=\"exampleInputEmail1\">Öğrenci numarası</label>\r\n        <input type=\"number\" class=\"form-control\" id=\"exampleInputEmail1\" (keyup)  =\"kontrol()\"\r\n               aria-describedby=\"emailHelp\" placeholder=\"Öğrenci Numarası\" autocomplete=\"off\">\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">Öğrenci numarası yaznınız</small>\r\n        <div  id=\"danger\"  style=\"opacity: 90%;\">\r\n           </div>\r\n    </div>\r\n    <button  class=\"btn btn-primary\" (click)=\"database_mi();controlStudentId()\" routerLinkActive=\"active\">bilgilere girişi</button>\r\n</form>\r\nng\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemOgrenciisleriOgrenciislerimenueYeniogrencikayitYeniogrencikayitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <title>Bootstrap Example</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.min.js\"></script>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\r\n    <script src=\"https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js\" type=\"text/javascript\"></script>\r\n    <link href=\"https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n\r\n\r\n</head>\r\n<body style=\"background-color: blanchedalmond\">\r\n<div id=\"rcorners2\">\r\n    <h1 id=\"ab\">Öğrenci Yeni Kayıt</h1>\r\n    <img src=\"../../../assets/images/ogrenciisleris.jpg\" height=\"90px\" width=\"90px\"\r\n         style=\"margin-left: 50%\">\r\n    <div class=\"container\">\r\n        <form action=\"/action_page.php\" class=\"was-validated\">\r\n            <div class=\"form-group\" >\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"AD\" name=\"uname\"\r\n                       required >\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" id=\"surename\" placeholder=\"Soyad\" name=\"uname\"\r\n                       required >\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"number\" class=\"form-control\" id=\"num\"\r\n                       placeholder=\"ogrenci numarasi\" name=\"pswd\"\r\n                       required >\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"password\" name=\"pswd\"\r\n                       required >\r\n            </div>\r\n<h1>Kayıt Tarihi</h1>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Doğum Tarihi\"\r\n                        id=\"birthdate\">\r\n                <mat-datepicker #picker ></mat-datepicker>\r\n            </mat-form-field>\r\n            <button mat-raised-button (click)=\"picker.open()\">Doğum Tarihi</button>\r\n\r\n\r\n\r\n            <mat-grid-list cols=\"3\" rowHeight=\"5:1\">\r\n                <mat-grid-tile> <h3>Cinsiyet :</h3>\r\n                    <mat-form-field style=\"width: 70%; \">\r\n                        <mat-label>Cinsiyet</mat-label>\r\n                        <mat-select >\r\n                            <mat-option *ngFor=\"let c of cinsiyet\" [value]=\"c.value.toString()\"\r\n                                       \r\n                                        (click)=\"get_g(c.value)\">\r\n                                {{c.value}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field></mat-grid-tile>\r\n              \r\n              \r\n              \r\n                    <mat-grid-tile>\r\n                        <h3>Yıl :     </h3>\r\n                        <mat-form-field style=\"width: 70%; \">\r\n                            <mat-label>Yıl</mat-label>\r\n                            <mat-select >\r\n                                <mat-option *ngFor=\"let c of yil\" [value]=\"c.value.toString()\"\r\n                                            \r\n                                            (click)=\"y=c.value\">\r\n                                    {{c.value}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n\r\n                    </mat-grid-tile>\r\n\r\n                    \r\n                    <mat-grid-tile>\r\n                        <h4>Ogretim Turu :     </h4>\r\n                        <mat-form-field >\r\n                            <mat-label>Ogretim Turu</mat-label>\r\n                            <mat-select >\r\n                                <mat-option *ngFor=\"let c of sinif\" \r\n                                           \r\n                                            (click)=\"ogretim=c.value\"  [value]=\"c.value.toString()\" >\r\n                                     {{c.value}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n\r\n                    </mat-grid-tile>\r\n\r\n\r\n              </mat-grid-list>\r\n\r\n           \r\n\r\n\r\n\r\n\r\n\r\n\r\n            \r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n                <textarea type=\"text\" class=\"form-control\" id=\"address\"\r\n                          placeholder=\"Adress\" name=\"uname\"\r\n                          required ></textarea>\r\n            </div>\r\n\r\n            <button type=\"submit\" class=\"btn btn-primary\"  id=\"kaydet\" (click)=\"kaydet()\"><h1>Kaydet</h1></button>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n</body>\r\n</html>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/pagenotfound/pagenotfound.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/pagenotfound/pagenotfound.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemPagenotfoundPagenotfoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n    .AA {\n \n  color: red;\n  animation-name: example;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes example {\n  0% {color: red;}\n  25% {color: yellow;}\n  50%{color:blueviolet}\n  75% {color: brown;}\n  100%{color:darkslategray}\n}\n</style>\n<body  >\n\n\n  <iframe width=\"0\" height=\"0\" src=\"https://www.youtube.com/embed/abo2CpG7ov4?rel=0;&autoplay=1\" \n  frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n   allowfullscreen></iframe>\n  \n  <!-- <audio id=\"myAudio\"> -->\n    \n    <!-- <source src=\"../../../assets/sounds/evil.mp3\" type=\"audio/mpeg\">\n    \n  </audio> -->\n \n  <!-- <iframe  src=\"../../../assets/sounds/evil.mp3?autoplay=1\"\n   \n  ></iframe> -->\n  \n<img src=\"../../../assets/images/pagenotfound.png\"\n style=\" background-size: cover; background-repeat: no-repeat;\" \n width=\"100%\" height=\"100%\" alt=\"...\">\n <div style=\"position: absolute; top: 170px; color: red; left: 48%;\">\n    \n<h1>Sayfayı Bulunmadı</h1>\n<h2 id=\"konu\" class=\"AA\">Ana Sayfaya yönlendirlenyorsunuz!!!!!!</h2>\n <p id=\"counter\" style=\"color: blue; font-size: 120px; font-weight: bolder;\" class=\"AA\">{{counter}}</p>\n</div>\n\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentOgrencisayfasiAlinanDerslerAlinanDerslerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<style>\n  table {\nwidth: 100%;\n}\n\n.mat-form-field {\nfont-size: 14px;\nwidth: 50%;\n}\n.pointer\n{\n  cursor: pointer;\n}\n</style>\n\n<div class=\"mat-elevation-z8\" >\n  <mat-form-field>\n      <mat-label>Filter</mat-label>\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ders Yazınız\" \n      autocomplete=\"off\">\n    </mat-form-field>\n\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <th mat-header-cell *matHeaderCellDef> No. </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Ders\" >\n      <th mat-header-cell *matHeaderCellDef> Ders </th>\n      <td mat-cell *matCellDef=\"let element\"  matTooltip=\"{{element.Ders}} detaylarına görmek için Tıklayın\" >\n         <a  (click)=\"openDialog(element)\" \n        class=\"pointer\">{{element.Ders}}</a>  </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"Kredi\">\n      <th mat-header-cell *matHeaderCellDef> Kredi </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.Kredi}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"Harf\">\n      <th mat-header-cell *matHeaderCellDef> Harf </th>\n      <td mat-cell *matCellDef=\"let element\" style=\"font-weight: bolder;\"> \n        {{element.Harf}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"Note\">\n      <th mat-header-cell *matHeaderCellDef> Note </th>\n      <td mat-cell *matCellDef=\"let element\"> {{yaklasim(element.Note)}} </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-form-field>\n      <mat-label>Donmler</mat-label>\n      <mat-select [(ngModel)]=\"selectedValue\" name=\"donem\" >\n        <mat-option *ngFor=\"let donem of Donemler\" [value]=\"donem.viewValue\" \n        (click)='fp(donem.viewValue)'>\n          {{donem.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <p style=\"display: inline;\"><b style=\"position: relative; left: 25px;\">Ort: </b> \n      <span \n      style=\"color:rgb(129, 70, 70); font-weight: bold; position: relative; left:40px\">\n          {{D_Avg}}</span>\n\n          <b style=\"position: relative; left: 50px;\">Kredi: </b> \n      <span \n      style=\"color:rgb(129, 70, 70); font-weight: bold; position: relative; left:75px\">\n          {{T_Kredi}}</span>\n      </p>\n\n<br>\n      <p style=\"display: inline-block; \n      font-size: larger;font-weight: bolder; color: red;\">Genel Ortalama :\n       {{Genel_ortalama}}</p>\n      <span style=\"position: relative; left: 40px;font-size: \n      larger;font-weight: bolder;color: red;\">Toplam Kredi: {{Toplam_kredi}}</span>\n</div>\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentOgrencisayfasiAlinanDerslerDersdetayDersdetayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<style>\n  td,th{\n    text-align: center;\n    width: 200px;\n  }\n</style>\n\n\n\n\n\n<div >\n\n<h1 mat-dialog-title>{{Ders}} Detayları</h1>\n<div mat-dialog-content style=\"width: auto;\">\n    <table style=\"width: 80%;\" border=\"1\">\n        <tr>\n\n            <th>Vize</th>\n            <th *ngIf=\"projeorisnot===true\">Proje</th>\n            <th>Final</th>\n            <th>Büt</th>\n\n        </tr>\n        <tr>\n          <td > {{vize}}\n             <span style=\"margin-left: 5px;\">({{vizeEtkisi}} %)</span></td>\n\n  <td *ngIf=\"projeorisnot===true\" >{{proje}}\n     <span style=\"margin-left: 5px;\">({{projeEtkisi}} %)</span></td>\n  <td > {{final}} <span style=\"margin-left: 5px;\">\n    ({{finalEtkisi}} %)</span></td>\n    <td > {{But}} <span style=\"margin-left: 5px;\">\n      ({{finalEtkisi}} %)</span></td>\n\n\n\n</tr>\n</table>\n<div *ngIf=\"IsthereOdev==='true'\" style=\"height: 40px;\"></div>\n<hr *ngIf=\"IsthereOdev==='true'\">\n\n<table *ngIf=\"IsthereOdev==='true'\"  border=\"2\">\n\n       <!-- <th>OdevPuan</th> -->\n<th>Odev Etkisi</th>\n<th>Odev Puanı</th>\n<tr *ngFor=\"let o of Odevler;let j=index\">\n<td >\n{{Odevler[j]}}\n\n</td>\n<td >\n  {{ OdevPuani[j]}}\n\n  </td>\n</tr>\n        </table>\n\n\n</div>\n<br><br>\n<hr>\n<br><br>\n<h1>Ders İçereği : </h1>\n<br>\n<br>\n<hr>\n<br>\n<div style=\"height: 60%;width: 100%;\"></div>\n<div>\n    1. Hafta:\nDersin içeriği, giriş, kaynaklar\n2. Hafta:\nYapay Sinir Ağlarına (YSA) Giriş Sinir Ağları (SA)Nedir YSA’nın Genel Özellikleri\n3. Hafta:\nYSA Model Yapısı YSA ‘da Katman Yapısı\n4. Hafta:\nYSA ‘nın Bağlanış Biçimleri YSA ile İlgili Bazı Problemler ve Çözümleri\n5. Hafta:\nYSA’da Öğrenme Stratejileri Eğiticisiz Öğrenme Pekiştirmeli Öğrenme Eğiticili Öğrenme Geriye Yayınım (GY) Eğitim Yöntemi\n6. Hafta:\nTranspoze Ağ Yapısı Momentumlu BP Yöntemi\n7. Hafta:\nEğitme Yönteminde Farklı Modlar Ardışıl Mod Yığın Mod\n8. Hafta:\nAra sınav/Değerlendirme\n9. Hafta:\nARA SINAV\n10. Hafta:\nGeri-Beslemeli (FB) SA BP Metodunun FBNN’a Uygulanması\n11. Hafta:\nAyrık-Dinamik SA Uygulamalar Sistem tanıma Problemi\n12. Hafta:\nKontrol Problemi İşaret İşleme Uygulamaları\n13. Hafta:\nMatlab Yazılımıyla YSA Uygulamaları\n14. Hafta:\nYSA ile Sınıflama\n15. Hafta:\nÖzel uygulamalar\n16. Hafta:\nYarıyıl sonu sınavı\n1. Hafta:\nDersin içeriği, giriş, kaynaklar\n2. Hafta:\nYapay Sinir Ağlarına (YSA) Giriş Sinir Ağları (SA)Nedir YSA’nın Genel Özellikleri\n3. Hafta:\nYSA Model Yapısı YSA ‘da Katman Yapısı\n4. Hafta:\nYSA ‘nın Bağlanış Biçimleri YSA ile İlgili Bazı Problemler ve Çözümleri\n5. Hafta:\nYSA’da Öğrenme Stratejileri Eğiticisiz Öğrenme Pekiştirmeli Öğrenme Eğiticili Öğrenme Geriye Yayınım (GY) Eğitim Yöntemi\n6. Hafta:\nTranspoze Ağ Yapısı Momentumlu BP Yöntemi\n7. Hafta:\nEğitme Yönteminde Farklı Modlar Ardışıl Mod Yığın Mod\n8. Hafta:\nAra sınav/Değerlendirme\n9. Hafta:\nARA SINAV\n10. Hafta:\nGeri-Beslemeli (FB) SA BP Metodunun FBNN’a Uygulanması\n11. Hafta:\nAyrık-Dinamik SA Uygulamalar Sistem tanıma Problemi\n12. Hafta:\nKontrol Problemi İşaret İşleme Uygulamaları\n13. Hafta:\nMatlab Yazılımıyla YSA Uygulamaları\n14. Hafta:\nYSA ile Sınıflama\n15. Hafta:\nÖzel uygulamalar\n16. Hafta:\nYarıyıl sonu sınavı\n1. Hafta:\nDersin içeriği, giriş, kaynaklar\n2. Hafta:\nYapay Sinir Ağlarına (YSA) Giriş Sinir Ağları (SA)Nedir YSA’nın Genel Özellikleri\n3. Hafta:\nYSA Model Yapısı YSA ‘da Katman Yapısı\n4. Hafta:\nYSA ‘nın Bağlanış Biçimleri YSA ile İlgili Bazı Problemler ve Çözümleri\n5. Hafta:\nYSA’da Öğrenme Stratejileri Eğiticisiz Öğrenme Pekiştirmeli Öğrenme Eğiticili Öğrenme Geriye Yayınım (GY) Eğitim Yöntemi\n6. Hafta:\nTranspoze Ağ Yapısı Momentumlu BP Yöntemi\n7. Hafta:\nEğitme Yönteminde Farklı Modlar Ardışıl Mod Yığın Mod\n8. Hafta:\nAra sınav/Değerlendirme\n9. Hafta:\nARA SINAV\n10. Hafta:\nGeri-Beslemeli (FB) SA BP Metodunun FBNN’a Uygulanması\n11. Hafta:\nAyrık-Dinamik SA Uygulamalar Sistem tanıma Problemi\n12. Hafta:\nKontrol Problemi İşaret İşleme Uygulamaları\n13. Hafta:\nMatlab Yazılımıyla YSA Uygulamaları\n14. Hafta:\nYSA ile Sınıflama\n15. Hafta:\nÖzel uygulamalar\n16. Hafta:\nYarıyıl sonu sınavı\n1. Hafta:\nDersin içeriği, giriş, kaynaklar\n2. Hafta:\nYapay Sinir Ağlarına (YSA) Giriş Sinir Ağları (SA)Nedir YSA’nın Genel Özellikleri\n3. Hafta:\nYSA Model Yapısı YSA ‘da Katman Yapısı\n4. Hafta:\nYSA ‘nın Bağlanış Biçimleri YSA ile İlgili Bazı Problemler ve Çözümleri\n5. Hafta:\nYSA’da Öğrenme Stratejileri Eğiticisiz Öğrenme Pekiştirmeli Öğrenme Eğiticili Öğrenme Geriye Yayınım (GY) Eğitim Yöntemi\n6. Hafta:\nTranspoze Ağ Yapısı Momentumlu BP Yöntemi\n7. Hafta:\nEğitme Yönteminde Farklı Modlar Ardışıl Mod Yığın Mod\n8. Hafta:\nAra sınav/Değerlendirme\n9. Hafta:\nARA SINAV\n10. Hafta:\nGeri-Beslemeli (FB) SA BP Metodunun FBNN’a Uygulanması\n11. Hafta:\nAyrık-Dinamik SA Uygulamalar Sistem tanıma Problemi\n12. Hafta:\nKontrol Problemi İşaret İşleme Uygulamaları\n13. Hafta:\nMatlab Yazılımıyla YSA Uygulamaları\n14. Hafta:\nYSA ile Sınıflama\n15. Hafta:\nÖzel uygulamalar\n16. Hafta:\nYarıyıl sonu sınavı\n</div>\n<!-- <div *ngFor=\"let o of Odevler;let jo = index\">\n<div><span>Odev{{jo+1}}</span>{{o}}</div>\n</div> -->\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close] cdkFocusInitial>Çıkış</button>\n</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentOgrencisayfasiDersSecimDersSecimComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"margin-top:5px;width: 100%; height: 100px; background-color: aquamarine;  display: flex;justify-content: space-around;\">\n\n<button type=\"button\"  class=\"btn btn-warning\" style=\"width: 200px;\" (click)=\"cikis()\">Çıkış</button>\n<button type=\"button\"   style=\"width:200px\" (click)=\"onay()\" id=\"onay\">Onay</button>\n</div>\n\n<!------------------------------------------------------------------------------------------------------------\n--------------------------------------------------->\n<!--secim dersleri Body-->\n<!--Start=--------->\n\n<table class=\"table table-dark\">\n  <thead>\n    <tr style=\"text-align: center;\">\n      <th scope=\"col\" style=\"text-align: center;\">#</th>\n      <th scope=\"col\" style=\"text-align: center;\">Ders</th>\n      <th scope=\"col\" style=\"text-align: center;\">Dr</th>\n      <th scope=\"col\" style=\"text-align: center;\">kredi</th>\n      <th scope=\"col\" style=\"text-align: center;\">saat</th>\n      <th scope=\"col\" style=\"text-align: center;\">yil</th>\n      <th scope=\"col\" style=\"text-align: center;\">Kapasite / Alan sayisi</th>\n      <th scope=\"col\" style=\"text-align: center;\">Secme/Silme</th>\n    </tr>\n  </thead>\n  <tbody>\n    \n    <tr *ngFor=\"let item of items | async; let i=index\" style=\"text-align: center;\">\n     \n      <th scope=\"row\" style=\"text-align: center;\" *ngIf =\"item.yil<=(get_yil|async)\">{{i+1}}</th>\n      <td style=\"text-align: center;\" *ngIf =\"item.yil<=(get_yil|async)\" >{{item.Ders}}</td>\n     \n      <td style=\"text-align: center;\" *ngIf =\"item.yil<=(get_yil|async)\">{{item.Dr}}</td>\n      <td style=\"text-align: center;\" *ngIf =\"item.yil<=(get_yil|async)\">{{item.kredi}}</td>\n      <td style=\"text-align: center;\" *ngIf =\"item.yil<=(get_yil|async)\">{{item.saat}}</td>\n      <td style=\"text-align: center;\" *ngIf =\"item.yil<=(get_yil|async)\">{{item.yil}}</td>\n      \n   \n      <td style=\"text-align: center;color: white;display: inline-flex;\" *ngIf =\"item.yil<=(get_yil|async)\">\n    <h5 style=\"color:crimson;font-weight: bolder;\"> {{fullOgrenciSayisi[item.Ders]}}</h5>  /    <span> {{item.OgrenciSayisi}}</span> </td>\n     \n    <td  *ngIf =\"item.yil<=(get_yil|async)\"  >   \n    <span *ngIf=\"btnlar[item.Ders]!==true\"> \n      <button *ngIf =\"item.yil<=(get_yil|async)\"  type=\"button\" class=\"btn btn-primary\"\n      (click)=\"b_func(i)\" style=\"width: 100px;\" >\n      \n      Ekleme</button>\n    </span> \n\n    <span *ngIf=\"btnlar[item.Ders]===true\"> \n      <button *ngIf =\"item.yil<=(get_yil|async)\"  type=\"button\" class=\"btn btn-primary\"\n      (click)=\"b_func(i)\" style=\"width: 100px;\" class=\"btn btn-danger\" >\n      \n      Silme</button>\n    </span> \n\n    </td> \n    <!-- {{control(item.Ders,i)}} -->\n    </tr>\n    \n    \n  </tbody>\n \n</table>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentOgrencisayfasiMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<html>\n<style>\n    .example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n</style>\n<title>\n    Message\n</title>\n<body style=\"background-color: darkgray; margin: 0;\">\n\n  <form class=\"example-form\" style=\"position: relative ; left: 200px; top: 50px;\">\n  \n    <mat-form-field class=\"example-full-width\">\n      <input matInput\n             placeholder=\"Konu\"\n             aria-label=\"State\"\n            \n              id=\"konu\">\n</mat-form-field>\n  </form>\n\n\n  <form class=\"example-form\" style=\"position: relative ; left: 200px; top: 50px;\">\n  \n  \n\n  <mat-form-field class=\"example-full-width\">\n      <input matInput\n             placeholder=\"Email\"\n             aria-label=\"State\"\n             [matAutocomplete]=\"auto\"\n             [formControl]=\"stateCtrl\" id=\"Email\">\n\n            \n\n\n           \n          \n      <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.mail\" style=\"height: auto; width: 100%;\" >\n         <div>\n            <img class=\"example-option-img\" aria-hidden [src]=\"state.resim\" height=\"45\">\n          <span style=\"font-size: 30px;\">{{state.name}}</span>\n        </div>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  \n    <br>\n  \n  </form>\n  \n\n  <form style=\"width: 70%; position: relative; top: 100px;left: 200px;\">\n  <div class=\"form-group\">\n  <textarea class=\"form-control\"  rows=\"10\" \n  placeholder=\"Yaz Burada\"  id=\"msg\" ></textarea>\n</div>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"send_message()\">Gonder</button>\n\n</form>\n\n</body>\n</html>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentOgrencisayfasiOgrencisayfasiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Öğrenci Ana Sayfa</a>\n    <button class=\"navbar-toggler collapsed\"\n            type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarsExample01\"\n            aria-controls=\"navbarsExample01\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExample01\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\"\n                   href=\"anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri/\">\n                    Ana Sayfa <span class=\"sr-only\">(current)\n                </span></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\"\n                   id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                   aria-expanded=\"false\">Tıklayınız</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown-item\" \n                    (click)=\"nav()\" id='DS' style=\"cursor: pointer\"></a>\n                    <a class=\"dropdown-item\" (click)=\"dersler()\">Dönem sonuçları</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['borc']\">Borç Durumu</a>\n                    <a class=\"dropdown-item\" (click)=\"message()\">Mesaj Gönderme</a>\n                    <a class=\"dropdown-item\" (click)=\"extra()\" style=\"cursor: pointer\">Diğerler</a>\n                    <a class=\"dropdown-item\" (click)=\"geri()\" style=\"cursor: pointer\"\n                    >çıkış</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<div style=\"background-color: antiquewhite; height: 400px; width:100%; padding-top: 50px\n;padding-left: 100px\">\nBitirme Projesi 2019-2020 Kocaeli Üniversitesi\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentOgrencisayfasiSicilSicilSicilComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "{{donem}}";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/student.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/student.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAnasistemStudentStudentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<head>\r\n    <title>Bootstrap Example</title>\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n</head>\r\n<body>\r\n \r\n<div id=\"rcorners2\">\r\n    <h1 id=\"ab\">Öğrenciler</h1>\r\n    <img src=\"../../../assets/images/student.jpg\" height=\"90px\" width=\"90px\" style=\"margin-left: 50%\">\r\n    <div class=\"container\">\r\n\r\n        \r\n          \r\n\r\n        <form action=\"/action_page.php\" class=\"was-validated\">\r\n            <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" \r\n                id=\"uid\" placeholder=\"Enter username\" name=\"uname\"\r\n                       required style=\"height: 40px;font-size: 40px;margin-top: 20px\"\r\n                       matInput\r\n                     [formControl]=\"myControl\"\r\n                     [matAutocomplete]=\"auto\">\r\n                     <mat-autocomplete #auto=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let option of filteredOptions | async\" \r\n                        [value]=\"option\" (mouseover)=\"fcall(option)\" >\r\n                        <img src=\"../../../assets/images/student.jpg\" \r\n                        height=\"20px\" width=\"20px\" style=\"margin-left: 0\">\r\n                        {{option}}\r\n                        </mat-option>\r\n                      </mat-autocomplete>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" \r\n                placeholder=\"Enter password\" name=\"pswd\"\r\n                       required style=\"height: 40px;font-size: 40px;margin-top: 40px\"\r\n                       [formControl]=\"pswfc\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\" \r\n            style=\"height: 60px;width: 140px;\" (click)='func()'><h1>Giriş</h1></button>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "<style>.example-card {\n    max-width: 350px;\n    max-height: 200px;\n    text-align: center;\n}\n.example-header-image {\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n    background-size: cover;\n    text-align: center;\n}\nimg\n{\n    height:100px\n}\nmat-grid-tile {\n    margin-right: 200px;\n    display: inline;\n}\ndiv.grid\n{\nmargin-left: 300px;\n    margin-top: 40px;\n}\na:link{\n    text-decoration: none;\n\n}\nmat-card.example-card\n{\n    border-radius: 15%;\n    background-size: cover;\n}\n.back_ground\n{\n    background: url('../../assets/images/background.jpg');\n    height: 1000px; /* You must set a specified height */\n    background-position: center; /* Center the image */\n    background-repeat: no-repeat; /* Do not repeat the image */\n    background-size: cover;\n}\n.academic\n{\n    background: url('../../assets/images/akademic.jpg');\n    background-size: cover;\n    text-align: center;\n}\n.student\n{\n    background: url('../../assets/images/student.jpg');\n    background-size: cover;\n    text-align: center;\n}\n.idari\n{\n    background: url('../../assets/images/idari.png');\n    background-size: cover;\n    text-align: center;\n}\n.ogrenciisleri\n{\n    background: url('../../assets/images/ogrenciler.png');\n    background-size: cover;\n    text-align: center;\n}\n.damascus\n{\n    background: url('../../assets/images/dmlogo.png');\n    background-size: cover;\n    text-align: center;\n}\nbody {\n    margin:0px;\n    font-family:\"Open Sans\",sans-serif;\n  }\n  #context-menu {\n    position:absolute;\n    z-index:10000;\n    width:200px;\n    background:#1b1a1a;\n    border-radius:5px;\n    transform:scale(0);\n    /* transform-origin:top left; */\n  }\n  #context-menu.active {\n    transform:scale(1);\n    transition:transform 300ms ease-in-out;\n  }\n  #context-menu .item {\n    padding:8px 10px;\n    font-size:15px;\n    color:#eee;\n  }\n  #context-menu .item:hover {\n    background:#555;\n    \n  }\n  #context-menu .item span {\n    display:inline-block;\n    margin-right:5px;\n  }\n  #context-menu hr {\n    margin:2px 0px;\n    border-color:#555;\n  \n  }\n  .pointer\n  {\n      cursor: pointer;\n  }\n  .timage,.simage,.iimage,.oislerimage,.anasayfa{\n      background-image: url('../../assets/images/akademic.jpg');\n      width: 30px;\n      height:100%;\n      background-repeat: no-repeat;\n      background-size: contain, cover;\n     \n  }\n  .simage{\n      background-image: url('../../assets/images/student.jpg');\n    \n  }\n  .iimage{\n      background-image: url('../../assets/images/idaric.jpg');\n  }\n  .oislerimage{\n      background-image: url('../../assets/images/ogrenciisleris.jpg');\n  }\n\n  .anasayfa{\n    background-image: url('../../assets/images/background.jpg');\n  height: 200px;\n    \n  }\n  </style>\n\n<router-outlet>\n\n    <div id=\"context-menu\"  style=\"position: absolute;text-align: center;\">\n        <div class=\"item pointer\" (click)=\"student()\" >\n           \n            <div class=\"simage\" style=\"position: absolute;left: 1px ;\">\n               \n             \n            </div>\n           Öğrenci Kısımı\n             \n        \n    </div>\n    <hr>\n    <div class=\"item pointer\" (click)='akademikkismi()' >\n           \n        <div class=\"timage\" style=\"position: absolute;left:+1px ;\">\n           \n         \n        </div> Akademik kısmı\n        \n         \n    \n    </div>\n    <hr>\n    <div class=\"item pointer\" (click)='idarikismi()' >\n           \n    <div class=\"iimage\" style=\"position: absolute;left:+1px ;\">\n       \n     \n    </div> İdari Kısmı\n    \n     \n    \n    </div>\n    <hr>\n    <div class=\"item pointer\" (click)='isler()' >\n           \n    <div class=\"oislerimage\" style=\"position: absolute;left:+1px ;\">\n       \n     \n    </div> Öğrenci İşleri\n    </div>\n        <hr>\n\n\n        <div class=\"item pointer\" (click)='AnaSayfa()' >\n           \n            <div class=\"anasayfa\" style=\"position: absolute;left:+1px ; height: 100px;\">\n               \n             \n            </div> Ana Sayfa\n            </div>\n                <hr>\n\n\n       \n      </div>\n\n\n</router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBarBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"#\">Öğrenci Ana Sayfa</a>\n    <button class=\"navbar-toggler collapsed\"\n            type=\"button\" data-toggle=\"collapse\"\n            data-target=\"#navbarsExample01\"\n            aria-controls=\"navbarsExample01\"\n            aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarsExample01\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\"\n                   href=\"anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri/\">\n                    Ana Sayfa <span class=\"sr-only\">(current)\n                </span></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\"\n                   id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                   aria-expanded=\"false\">Tıklayınız</a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                    <a class=\"dropdown-item\" \n                    (click)=\"nav()\" id='DS' style=\"cursor: pointer\"></a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['sonuclar']\">Dönem sonuçları</a>\n                    <a class=\"dropdown-item\" [routerLink]=\"['borc']\">Borç Durumu</a>\n                    <a class=\"dropdown-item\" (click)=\"extra()\" style=\"cursor: pointer\">Diğerler</a>\n                    <a class=\"dropdown-item\" (click)=\"geri()\" style=\"cursor: pointer\"\n                    >çıkış</a>\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
    /***/

  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisAkademikGirisComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9ha2FkZW1pa2tpc21pL2FrYWRlbWlrLWdpcmlzL2FrYWRlbWlrLWdpcmlzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AkademikGirisComponent */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisAkademikGirisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AkademikGirisComponent", function () {
      return AkademikGirisComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");

    var AkademikGirisComponent = /*#__PURE__*/function () {
      function AkademikGirisComponent(db, Tc, route, router, zone) {
        _classCallCheck(this, AkademikGirisComponent);

        this.db = db;
        this.Tc = Tc;
        this.route = route;
        this.router = router;
        this.zone = zone;
      }

      _createClass(AkademikGirisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "get_Ogretim",
        value: function get_Ogretim(s) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.Ogretim = s;
                    this.Tc.set_ogretim(this.Ogretim);
                    _context.next = 4;
                    return this.db.database.ref('Donem').once('value', function (sp) {
                      _this.Tc.set_donem(sp.val());
                    });

                  case 4:
                    this.zone.run(function () {
                      _this.router.navigate(['dersler'], {
                        relativeTo: _this.route
                      });
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AkademikGirisComponent;
    }();

    AkademikGirisComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_4__["TeachersecService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AkademikGirisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-akademik-giris',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./akademik-giris.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./akademik-giris.component.scss */
      "./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.scss")).default]
    })], AkademikGirisComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariChartChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9ha2FkZW1pa2tpc21pL2FrYWRlbWlrLWdpcmlzL2RlcnNsZXIvZGVycy1hbGFubGFyaS9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ChartComponent */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariChartChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartComponent", function () {
      return ChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! node_modules/chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");

    var ChartComponent = /*#__PURE__*/function () {
      function ChartComponent(db, Tc) {
        _classCallCheck(this, ChartComponent);

        this.db = db;
        this.Tc = Tc;
      }

      _createClass(ChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var AA, BA, BB, CB, CC, DC, DD, FD, FF, sum, ctx, myChart;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    AA = 0;
                    BA = 0;
                    BB = 0;
                    CB = 0;
                    CC = 0;
                    DC = 0;
                    DD = 0;
                    FD = 0;
                    FF = 0;
                    sum = 0;
                    _context2.next = 12;
                    return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi())).once('value', function (s) {
                      s.forEach(function (e) {
                        if (e.val().Harf_Notu === 'AA') AA++;
                        if (e.val().Harf_Notu === 'BA') BA++;
                        if (e.val().Harf_Notu === 'BB') BB++;
                        if (e.val().Harf_Notu === 'CB') CB++;
                        if (e.val().Harf_Notu === 'CC') CC++;
                        if (e.val().Harf_Notu === 'DC') DC++;
                        if (e.val().Harf_Notu === 'DD') DD++;
                        if (e.val().Harf_Notu === 'FD') FD++;
                        if (e.val().Harf_Notu === 'FF') FF++;
                      });
                    });

                  case 12:
                    sum = AA + BA + BB + CB + CC + DC + DD + FD + FF;
                    ctx = $('#myChart');
                    myChart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](ctx, {
                      type: 'bar',
                      data: {
                        labels: ['AA', 'BA', 'BB', 'CB', 'CC', 'DC', 'DD', 'FD', 'FF'],
                        datasets: [{
                          label: 'Harf Notu ...',
                          data: [AA, BA, BB, CB, CC, DC, DD, FD, FF, sum],
                          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 305, 64, 0.2)', 'rgba(255, 305, 255, 0.2)', 'rgba(100, 200, 64, 0.2)'],
                          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 307, 64, 1)', 'rgba(255, 305, 255, 1)', 'rgba(100, 200, 64, 1)'],
                          borderWidth: 1
                        }]
                      },
                      options: {
                        scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true
                            }
                          }]
                        }
                      }
                    });

                  case 15:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ChartComponent;
    }();

    ChartComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_4__["TeachersecService"]
      }];
    };

    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chart.component.scss */
      "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.scss")).default]
    })], ChartComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariDersAlanlariComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9ha2FkZW1pa2tpc21pL2FrYWRlbWlrLWdpcmlzL2RlcnNsZXIvZGVycy1hbGFubGFyaS9kZXJzLWFsYW5sYXJpLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: DersAlanlariComponent */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariDersAlanlariComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DersAlanlariComponent", function () {
      return DersAlanlariComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");

    var A = function A(id, name) {
      _classCallCheck(this, A);

      this.id = id;
      this.name = name;
    };

    var yobj = function yobj(tkredi, ttoplam, id) {
      _classCallCheck(this, yobj);

      this.tkredi = tkredi;
      this.tyoplam = ttoplam;
      this.id = id;
    };

    var DersAlanlariComponent = /*#__PURE__*/function () {
      function DersAlanlariComponent(db, st, Tc, Zone, router, Route) {
        var _this2 = this;

        _classCallCheck(this, DersAlanlariComponent);

        ///////////////////////////////////////////////////////
        this.db = db;
        this.st = st;
        this.Tc = Tc;
        this.Zone = Zone;
        this.router = router;
        this.Route = Route;
        this.idarray = [];
        this.t = [];
        this.panelOpenState = false;
        this.arr_name = new Array();
        this.Odevler = [];
        this.But = false; // get tarih
        // console.log(this.get_date());
        ////////////////////////////////////////////////////////

        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
          _this2.db.database.ref("AlinmisDersler/".concat(_this2.get_date(), "/") + _this2.Tc.get_ogretim() + '/' + _this2.Tc.get_Ders_adi()).once('value', function (snap) {
            snap.forEach(function (a) {
              console.log('items ' + a.key + ' ' + a.val());

              _this2.t.push(new A(a.key, a.val()));
            });
            obs.next(_this2.t);
          });
        });
      }

      _createClass(DersAlanlariComponent, [{
        key: "get_date",
        value: function get_date() {
          var d = new Date();
          var n = d.getFullYear();
          return n - 1 + '-' + n;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.Tc.ButDegeri = undefined;
                    this.bute = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
                    _context3.next = 4;
                    return this.db.database.ref("table/".concat(this.get_date(), "/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_donem())).once('value', function (sp) {
                      // console.log(sp.val());
                      _this3.Tc.myObj = sp.val();
                    });

                  case 4:
                    console.log('every thing');
                    console.log(this.Tc.myObj);
                    console.log('------------------');
                    console.log('our kredi'); // console.log(this.Tc.myObj[`${this.Tc.get_Ders_adi()}`]['kredi']);

                    console.log('-------------------------');
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context3.prev = 12;
                    _iterator = this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Odevler'][Symbol.iterator]();

                  case 14:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                      _context3.next = 25;
                      break;
                    }

                    i = _step.value;

                    if (!(i === 'Y')) {
                      _context3.next = 21;
                      break;
                    }

                    this.Odevler.push('Yok');
                    return _context3.abrupt("break", 25);

                  case 21:
                    this.Odevler.push(i);

                  case 22:
                    _iteratorNormalCompletion = true;
                    _context3.next = 14;
                    break;

                  case 25:
                    _context3.next = 31;
                    break;

                  case 27:
                    _context3.prev = 27;
                    _context3.t0 = _context3["catch"](12);
                    _didIteratorError = true;
                    _iteratorError = _context3.t0;

                  case 31:
                    _context3.prev = 31;
                    _context3.prev = 32;

                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                      _iterator.return();
                    }

                  case 34:
                    _context3.prev = 34;

                    if (!_didIteratorError) {
                      _context3.next = 37;
                      break;
                    }

                    throw _iteratorError;

                  case 37:
                    return _context3.finish(34);

                  case 38:
                    return _context3.finish(31);

                  case 39:
                    _context3.next = 41;
                    return this.db.database.ref("But").once('value', function (sp) {
                      if (sp.val() === 'true') {
                        _this3.But = true;
                      }
                    });

                  case 41:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[12, 27, 31, 39], [32,, 34, 38]]);
          }));
        }
      }, {
        key: "get_But_Ortalama",
        value: function get_But_Ortalama(x, But, j) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this4 = this,
                _ref;

            var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, i, odevlerpuani, vize, proje, odevlerveEtkisi, _i, Final_But_Orani, Vize_Orani, Proje_Orani, yeniOrtalamaDersi, Harf, Harf_etkisi, eski_Avg, tp_kredi, eski_Harf_note_etkisi, Ders_Kredisi, yeni_ortalama;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!(this.Odevler.length === 0)) {
                      _context5.next = 38;
                      break;
                    }

                    _context5.next = 3;
                    return this.db.database.ref("table/".concat(this.get_date(), "/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_donem())).once('value', function (sp) {
                      // console.log(sp.val());
                      _this4.Tc.myObj = sp.val();
                    });

                  case 3:
                    console.log('every thing');
                    console.log(this.Tc.myObj);
                    console.log('------------------');
                    console.log('our kredi'); // console.log(this.Tc.myObj[`${this.Tc.get_Ders_adi()}`]['kredi']);

                    console.log('-------------------------');
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context5.prev = 11;
                    _iterator2 = this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Odevler'][Symbol.iterator]();

                  case 13:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                      _context5.next = 24;
                      break;
                    }

                    i = _step2.value;

                    if (!(i === 'Y')) {
                      _context5.next = 20;
                      break;
                    }

                    this.Odevler.push('Yok');
                    return _context5.abrupt("break", 24);

                  case 20:
                    this.Odevler.push(i);

                  case 21:
                    _iteratorNormalCompletion2 = true;
                    _context5.next = 13;
                    break;

                  case 24:
                    _context5.next = 30;
                    break;

                  case 26:
                    _context5.prev = 26;
                    _context5.t0 = _context5["catch"](11);
                    _didIteratorError2 = true;
                    _iteratorError2 = _context5.t0;

                  case 30:
                    _context5.prev = 30;
                    _context5.prev = 31;

                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }

                  case 33:
                    _context5.prev = 33;

                    if (!_didIteratorError2) {
                      _context5.next = 36;
                      break;
                    }

                    throw _iteratorError2;

                  case 36:
                    return _context5.finish(33);

                  case 37:
                    return _context5.finish(30);

                  case 38:
                    odevlerpuani = (_ref = [], _ref); // butun odevler puanlari depolanacak

                    vize = 0;
                    proje = 0;
                    console.log('But puani ' + But);
                    _context5.next = 44;
                    return this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/OdevPuani")).once('value', function (sp) {
                      if (sp.exists()) {
                        sp.forEach(function (e) {
                          odevlerpuani.push(e.val());
                        });
                      } else {
                        odevlerpuani.push('Yok');
                      }
                    });

                  case 44:
                    _context5.next = 46;
                    return this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/vize")).once('value', function (sp) {
                      vize = sp.val();
                    });

                  case 46:
                    _context5.next = 48;
                    return this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/proje")).once('value', function (sp) {
                      if (sp.exists()) proje = sp.val();else proje = 0;
                    });

                  case 48:
                    odevlerveEtkisi = 0;

                    if (this.Odevler[0] !== 'Yok') {
                      for (_i = 0; _i < this.Odevler.length; _i++) {
                        odevlerveEtkisi += this.Odevler[_i] * odevlerpuani[_i];
                      }
                    }

                    Final_But_Orani = Number(But) * this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Final'];
                    Vize_Orani = Number(vize) * this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Vize'];
                    Proje_Orani = Number(proje) * this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'];
                    if (this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'] === 'Yok') Proje_Orani = 0;
                    yeniOrtalamaDersi = (odevlerveEtkisi + Proje_Orani + Vize_Orani + Final_But_Orani) / 100;
                    console.log('yeni ortalama ders icin ' + yeniOrtalamaDersi);
                    _context5.next = 58;
                    return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/Ders_Ortalamasi")).set(yeniOrtalamaDersi);

                  case 58:
                    _context5.next = 60;
                    return this.db.database.ref("Siciller/".concat(this.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/But")).set(yeniOrtalamaDersi);

                  case 60:
                    Harf = '';
                    Harf_etkisi = 0;

                    if (But < 39.5) {
                      Harf = 'FF';
                      Harf_etkisi = 0;
                    } else {
                      if (yeniOrtalamaDersi >= 89.5) {
                        Harf = 'AA';
                        Harf_etkisi = 4;
                      }

                      if (yeniOrtalamaDersi >= 79.5 && yeniOrtalamaDersi < 89.5) {
                        Harf = 'BA';
                        Harf_etkisi = 3.5;
                      }

                      if (yeniOrtalamaDersi >= 74.5 && yeniOrtalamaDersi < 79.5) {
                        Harf = 'BB';
                        Harf_etkisi = 3;
                      }

                      if (yeniOrtalamaDersi >= 69.5 && yeniOrtalamaDersi < 74.5) {
                        Harf = 'CB';
                        Harf_etkisi = 2.5;
                      }

                      if (yeniOrtalamaDersi >= 59.5 && yeniOrtalamaDersi < 69.5) {
                        Harf = 'CC';
                        Harf_etkisi = 2;
                      }

                      if (yeniOrtalamaDersi >= 49.5 && yeniOrtalamaDersi < 59.5) {
                        Harf = 'DC';
                        Harf_etkisi = 1.5;
                      }

                      if (yeniOrtalamaDersi >= 39.5 && yeniOrtalamaDersi < 49.5) {
                        Harf = 'DD';
                        Harf_etkisi = 1;
                      }

                      if (yeniOrtalamaDersi >= 29.5 && yeniOrtalamaDersi < 39.5) {
                        Harf = 'FD';
                        Harf_etkisi = 0.5;
                      }

                      if (yeniOrtalamaDersi >= 0 && yeniOrtalamaDersi < 29.5) {
                        Harf = 'FF';
                        Harf_etkisi = 0;
                      }
                    }

                    _context5.next = 65;
                    return this.db.database.ref("Siciller/".concat(this.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf")).set(Harf);

                  case 65:
                    _context5.next = 67;
                    return this.db.database.ref("Siciller/".concat(this.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf_etkisi")).set(Harf_etkisi);

                  case 67:
                    eski_Avg = 0;
                    tp_kredi = 0;
                    eski_Harf_note_etkisi = 0; ///////////////////

                    _context5.next = 72;
                    return this.db.database.ref("Averages/".concat(this.Tc.get_date(), "/").concat(x.id, "/Average/Genel_Ortalama")).once('value', function (sp) {
                      eski_Avg = sp.val();
                    });

                  case 72:
                    _context5.next = 74;
                    return this.db.database.ref("Averages/".concat(this.Tc.get_date(), "/").concat(x.id, "/Average/Toplam_Kredi")).once('value', function (sp) {
                      tp_kredi = sp.val();
                    });

                  case 74:
                    _context5.next = 76;
                    return this.db.database.ref("Averages/".concat(this.get_date(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf_etkisi")).once('value', function (sp) {
                      eski_Harf_note_etkisi = sp.val();
                    });

                  case 76:
                    Ders_Kredisi = 0; ///get ders kredisi

                    Ders_Kredisi = this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['kredi'];
                    console.log('Eski Avg ' + eski_Avg + ' Harf ' + Harf_etkisi + '  eski_Harf_note_etkisi' + eski_Harf_note_etkisi);
                    console.log('eski genel ortalama ' + eski_Avg + 'Eski Harf Etkisi ' + eski_Harf_note_etkisi + ' yeni Harf' + Harf + ' yetkisi' + Harf_etkisi + ' toplam kredi ' + tp_kredi);
                    yeni_ortalama = 0;
                    new Promise(function (res, rej) {
                      yeni_ortalama = eski_Avg * tp_kredi - Ders_Kredisi * eski_Harf_note_etkisi;
                      console.log('yeni ortalama 1st + ' + yeni_ortalama);
                      yeni_ortalama += Ders_Kredisi * Harf_etkisi;
                      console.log('yeni ortalama 2nd + ' + yeni_ortalama);
                      yeni_ortalama /= tp_kredi;
                      res('okey');
                    }).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return this.db.database.ref("Averages/".concat(this.Tc.get_date(), "/").concat(x.id, "/Average/Genel_Ortalama")).set(yeni_ortalama);

                              case 2:
                                console.log('yeni ortalama 3rd + ' + yeni_ortalama);
                                _context4.next = 5;
                                return this.db.database.ref("Siciller/".concat(this.Tc.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/Average/Genel_Ortalama")).set(yeni_ortalama);

                              case 5:
                                _context4.next = 7;
                                return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/Harf_Notu")).set(Harf);

                              case 7:
                                _context4.next = 9;
                                return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/But")).set(yeniOrtalamaDersi);

                              case 9:
                                _context4.next = 11;
                                return this.db.database.ref("Averages/".concat(this.get_date(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf")).set(Harf);

                              case 11:
                                _context4.next = 13;
                                return this.db.database.ref("Averages/".concat(this.get_date(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf_etkisi")).set(Harf_etkisi);

                              case 13:
                                _context4.next = 15;
                                return this.db.database.ref("Siciller/".concat(this.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf_etkisi")).set(Harf_etkisi);

                              case 15:
                                _context4.next = 17;
                                return this.db.database.ref("Siciller/".concat(this.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/Harf")).set(Harf);

                              case 17:
                                _context4.next = 19;
                                return this.db.database.ref("Siciller/".concat(this.Tc.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/Average/Toplam_Kredi")).set(tp_kredi);

                              case 19:
                                _context4.next = 21;
                                return this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/ButPuani")).set(Number(But));

                              case 21:
                                _context4.next = 23;
                                return this.db.database.ref("Siciller/".concat(this.get_date(), "/").concat(this.Tc.get_donem(), "/").concat(this.Tc.get_ogretim(), "/").concat(x.id, "/").concat(this.Tc.get_Ders_adi(), "/ButPuani")).set(Number(But));

                              case 23:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 82:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[11, 26, 30, 38], [31,, 33, 37]]);
          }));
        }
      }, {
        key: "get_ID",
        value: function get_ID(x, vize, proje, final, j) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this5 = this;

            var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, i, Donem_ort, ot, odevpuani, yic, odevval, _i2, Vize_Orani, Final_Orani, Proje_Orani, vz, Fn, Proj, _i3, _yobj, Ders_Ortalamasi, Ogrenci_sayisi, Standart_sapma, T_Standart;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.db.database.ref("table/".concat(this.Tc.get_date(), "/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_donem())).once('value', function (sp) {
                      // console.log(sp.val());
                      _this5.Tc.myObj = sp.val();
                    });

                  case 2:
                    if (!(this.Odevler.length === 0)) {
                      _context6.next = 33;
                      break;
                    }

                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context6.prev = 6;
                    _iterator3 = this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Odevler'][Symbol.iterator]();

                  case 8:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                      _context6.next = 19;
                      break;
                    }

                    i = _step3.value;

                    if (!(i === 'Y')) {
                      _context6.next = 15;
                      break;
                    }

                    this.Odevler.push('Yok');
                    return _context6.abrupt("break", 19);

                  case 15:
                    this.Odevler.push(i);

                  case 16:
                    _iteratorNormalCompletion3 = true;
                    _context6.next = 8;
                    break;

                  case 19:
                    _context6.next = 25;
                    break;

                  case 21:
                    _context6.prev = 21;
                    _context6.t0 = _context6["catch"](6);
                    _didIteratorError3 = true;
                    _iteratorError3 = _context6.t0;

                  case 25:
                    _context6.prev = 25;
                    _context6.prev = 26;

                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                      _iterator3.return();
                    }

                  case 28:
                    _context6.prev = 28;

                    if (!_didIteratorError3) {
                      _context6.next = 31;
                      break;
                    }

                    throw _iteratorError3;

                  case 31:
                    return _context6.finish(28);

                  case 32:
                    return _context6.finish(25);

                  case 33:
                    _context6.next = 35;
                    return this.db.database.ref('But').once('value', function (sp) {
                      if (sp.val() === 'false') _this5.But = false;else _this5.But = true;
                    });

                  case 35:
                    if (this.Odevler.length === 0) {}

                    if (!this.But) {
                      _context6.next = 40;
                      break;
                    }

                    if (this.Tc.ButDegeri !== undefined) {
                      console.log('from another page Bute ' + this.Tc.ButDegeri);
                      this.get_But_Ortalama(x, this.Tc.ButDegeri, j); // this.Tc.ButDegeri =undefined;
                    } else this.get_But_Ortalama(x, this.bute.value, j);

                    _context6.next = 70;
                    break;

                  case 40:
                    this.sinavdetay = final;
                    Donem_ort = 0;
                    ot = 0;
                    odevpuani = [];
                    yic = 0;
                    odevval = $('.odevval');
                    if (this.Odevler[0] !== 'Yok') for (_i2 = j * this.Odevler.length; _i2 < j * this.Odevler.length + this.Odevler.length; _i2++) {
                      console.log('indexes ' + _i2 + ' ' + (j * this.Odevler.length + this.Odevler.length));
                      ot += Number(odevval.eq(_i2).val()) * Number(this.Odevler[yic++]) / 100;
                      odevpuani.push(odevval.eq(_i2).val());
                      console.log(' tek tek ' + odevval.eq(_i2).val() + '  ot' + ot);
                    } else {
                      ot = 0;
                      odevpuani.push('Yok');
                    }
                    console.log('odev values ' + ot);

                    if (!(odevpuani[0] === undefined)) {
                      _context6.next = 52;
                      break;
                    }

                    odevpuani = [];
                    _context6.next = 52;
                    return this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/OdevPuani")).once('value', function (sp) {
                      sp.forEach(function (e) {
                        odevpuani.push(e.val());
                        console.log('from loop ' + e.val());
                      });
                    });

                  case 52:
                    Vize_Orani = Number(vize) * this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Vize'] / 100;
                    Final_Orani = Number(final) * this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Final'] / 100; //  console.log('Finaaaal plast '+ Vize_Orani +'   FF '+ Final_Orani);

                    Proje_Orani = 0;

                    if (this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'] !== 'Yok') {
                      console.log('proje ' + this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje']);
                      Proje_Orani = Number(proje) * this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'] / 100;
                    } else Proje_Orani = 0;

                    Donem_ort = Vize_Orani + Final_Orani + Proje_Orani + ot;
                    console.log('Vize Blassssssssst ==' + Vize_Orani + '  Final==' + Final_Orani + '   Proje==' + Proje_Orani);
                    vz = 0;
                    Fn = 0;
                    Proj = 0;

                    if (Donem_ort.toString() === 'NaN') {
                      Donem_ort = 0;
                      ot = 0;

                      for (_i3 = 0; _i3 < this.Odevler.length; _i3++) {
                        ot += Number(this.Odevler[_i3]) * Number(odevpuani[_i3]);
                      }

                      ot = ot / 100;
                      Donem_ort = Vize_Orani + Final_Orani + Proje_Orani + ot;
                    }

                    _yobj = {
                      'id': x.id,
                      'name': x.name,
                      'vize': vize,
                      'proje': proje,
                      'Final': final,
                      'Donem_ort': Donem_ort,
                      'OdevEtkisi': this.Odevler,
                      'OdevPuani': odevpuani
                    };
                    console.log('yobj amk ' + JSON.stringify(_yobj)); // Ders Ortalmasi ve Sinif Genel Ortalmasi hesaplamasi

                    Ders_Ortalamasi = 0;
                    Ogrenci_sayisi = 0;
                    Standart_sapma = 0;
                    T_Standart = 0;
                    this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id)).set(_yobj);
                    this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi())).once('value', function (snap) {
                      snap.forEach(function (a) {
                        if (a.val().Donem_ort !== undefined) {
                          // console.log(a.val().Donem_ort);
                          Ders_Ortalamasi += a.val().Donem_ort;
                          Ogrenci_sayisi++;
                        }
                      });

                      _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi(), "/Ders_Ortalamasi")).set(Ders_Ortalamasi / Ogrenci_sayisi); //sinif standart sapma hesaplamasi

                    }).then(function () {
                      _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi())).once('value', function (snap) {
                        snap.forEach(function (e) {
                          if (e.val().Donem_ort !== undefined) {
                            //  console.log(Ogrenci_sayisi);
                            Standart_sapma += Math.pow(e.val().Donem_ort - snap.val().Ders_Ortalamasi, 2);
                          }
                        });

                        if (Ogrenci_sayisi > 24) {
                          Standart_sapma /= Ogrenci_sayisi - 1;
                          Standart_sapma = Math.sqrt(Standart_sapma);

                          _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi(), "/Standart_Sapma")).set(Standart_sapma);
                        }
                      });
                    }).then(function () {
                      _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi())).once('value', function (snap) {
                        snap.forEach(function (e) {
                          if (e.val().Donem_ort !== undefined) {
                            T_Standart = e.val().Donem_ort - snap.val().Ders_Ortalamasi; // console.log(T_Standart);

                            var t = T_Standart;
                            if (snap.val().Standart_Sapma > 0) T_Standart /= snap.val().Standart_Sapma; // console.log(t+'/'+snap.val().Standart_Sapma+' =='+T_Standart);

                            T_Standart = T_Standart * 10; //  console.log(T_Standart);

                            _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi(), "/").concat(e.key, "/T_standart")).set(T_Standart + 50);
                          }
                        });
                      }).then(function () {
                        _this5.Harf_Notu_Hesaplama(x.id);
                      });
                    }).then(function () {
                      _this5.db.database.ref('Donem').once('value', function (sp) {
                        // copy basarilibasarsiz node completly with added some details
                        // this.db.database.ref(`AlinmisDersler/2019-2020/basariliBasarsiz`).once('value',snapshotChanges=>{
                        // this.db.database.ref(`AlinmisDersler/${this.get_date()}/basariliBasarsiz/${this.Tc.get_ogretim()}/${this.Tc.get_Ders_adi()}/${x.id}`).set(yobj);
                        _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi())).set(_yobj);

                        _this5.db.database.ref("Teachers/".concat(_this5.Tc.get_id())).once('value', function (drname) {
                          _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Dr")).set(drname.val().name);
                        });

                        _this5.db.database.ref("Averages/".concat(_this5.get_date(), "/").concat(x.id, "/Average")).once('value', function (sp2) {
                          // console.log(`Siciller/${this.get_date()}/${sp.val()}/${this.Tc.get_ogretim()}/${x.id}/Average`);
                          _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/Average")).set(sp2.val());

                          _this5.db.database.ref("Siciller/".concat(_this5.Tc.get_ogretim(), "/").concat(x.id)).once('value', function (sp2) {
                            if (sp2.exists()) {}
                          });
                        }); // })


                        _this5.db.database.ref("Averages/".concat(_this5.get_date(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi())).once('value', function (p) {
                          _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Harf")).set(p.val().Harf);

                          _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Harf_etkisi")).set(p.val().Harf_etkisi);

                          _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Kredi")).set(p.val().kredi);

                          _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi(), "/").concat(x.id, "/T_standart")).once('value', function (vp) {
                            _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Ogrenci_standart_sapma")).set(vp.val());
                          });

                          _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi(), "/Ders_Ortalamasi")).once('value', function (vp2) {
                            _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Sinif_Ders_Ortalamasi")).set(vp2.val());
                          });

                          _this5.db.database.ref("AlinmisDersler/".concat(_this5.get_date(), "/basariliBasarsiz/").concat(_this5.Tc.get_ogretim(), "/").concat(_this5.Tc.get_Ders_adi(), "/Standart_Sapma")).once('value', function (vp2) {
                            _this5.db.database.ref("Siciller/".concat(_this5.get_date(), "/").concat(sp.val(), "/").concat(_this5.Tc.get_ogretim(), "/").concat(x.id, "/").concat(_this5.Tc.get_Ders_adi(), "/Sinif_Standart_Sapma")).set(vp2.val());
                          });
                        });
                      });
                    });

                  case 70:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[6, 21, 25, 33], [26,, 28, 32]]);
          }));
        }
      }, {
        key: "get_Puan",
        value: function get_Puan(x, index, idstudent) {
          var _this6 = this;

          var odevval = $('.odevval');
          var ic = index * this.Odevler.length;
          this.idstudent = idstudent;
          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(x.id, "/OdevPuani")).once('value', function (sp) {
            if (sp.exists()) {
              sp.forEach(function (e) {
                odevval.eq(ic++).val(e.val());
              });
            }
          });
          var xy = 3;

          if (this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'] === 'Yok') {
            $('.Temp').hide(); // Temp class Just A signal to element which we want to remove it .
          } //  alert(index);


          var start = $('.dd');
          index = index * 3;
          console.log('from get puan ' + index); ////////////////////////////////////

          start.eq(index).prop('placeholder', this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Vize'] + '%');
          start.eq(index + 1).prop('placeholder', this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Final'] + '%');

          if (this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'] != 'Yok') {
            start.eq(index + 2).prop('placeholder', this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje'] + '%');
            console.log(this.Tc.myObj["".concat(this.Tc.get_Ders_adi())]['Proje']);
          } //////////////////////////////////////////


          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/") + this.Tc.get_ogretim() + '/' + this.Tc.get_Ders_adi() + '/' + x.id).once('value', function (snap) {
            if (snap.exists()) {
              $('mat-expansion-panel-header').eq(index).css({
                "background-color": "paleturquoise"
              });
              start.eq(index).val(snap.val().vize);
              start.eq(index + 1).val(snap.val().Final);
              console.log(_this6.Tc.myObj["".concat(_this6.Tc.get_Ders_adi())]['Proje']);

              if (_this6.Tc.myObj["".concat(_this6.Tc.get_Ders_adi())]['Proje'] != 'Yok') {
                start.eq(index + 2).val(snap.val().proje);
                start.eq(index + 2).prop('placeholder', _this6.Tc.myObj["".concat(_this6.Tc.get_Ders_adi())]['Proje'] + '%');
                console.log(_this6.Tc.myObj["".concat(_this6.Tc.get_Ders_adi())]['Proje']);
              } else if (_this6.Tc.myObj["".concat(_this6.Tc.get_Ders_adi())]['Proje'] === 'Yok') {
                $('.Temp').hide(); // Temp class Just A signal to element which we want to remove it .
              }
            }
          });
        }
      }, {
        key: "Harf_Notu_Hesaplama",
        value: function Harf_Notu_Hesaplama(id) {
          var _this7 = this;

          var ogrencisayisi = 0;
          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi())).once('value', function (sp) {
            sp.forEach(function (e) {
              if (e.key !== 'Ders_Ortalamasi' && e.key !== 'Standart_Sapma') {
                ogrencisayisi++;
              }
            });
          });
          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(id)).once('value', function (s) {
            var yakdonemort = Math.round(s.val().Donem_ort * 100) / 100;
            console.log('haydi ' + yakdonemort);

            if (_this7.sinavdetay < 39.5) {
              // final puani<40 kucuk ise ogrenci  direkt kalir
              _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('FF');

              var yv = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


              var tobj = {
                'kredi': yv,
                'Puan': s.val().Donem_ort,
                'Harf': 'FF',
                'Harf_etkisi': 0
              };

              _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(tobj);

              return;
            }
          });

          if (ogrencisayisi < 25) {
            //ogrencisayisi<25
            console.log('id=>>>>>>>>>>>>>>>>>> ' + this.idstudent);
            this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(id)).once('value', function (s) {
              var yakdonemort = Math.round(s.val().Donem_ort * 100) / 100;
              console.log('haydi ' + yakdonemort);

              if (Number(_this7.sinavdetay) < 39.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('FF');

                var yv = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi'];

                console.log('buraya....................');
                var tobj = {
                  'kredi': yv,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'FF',
                  'Harf_etkisi': 0
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(tobj);

                return;
              }

              if (Number(yakdonemort) >= 89.5) {
                console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('AA');

                var _yv = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj = {
                  'kredi': _yv,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'AA',
                  'Harf_etkisi': 4
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj);

                return;
              }

              if (yakdonemort >= 79.5 && yakdonemort < 89.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('BA');

                var _yv2 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj2 = {
                  'kredi': _yv2,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'BA',
                  'Harf_etkisi': 3.5
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj2);

                return;
              }

              if (yakdonemort >= 74.5 && yakdonemort < 79.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('BB');

                var _yv3 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj3 = {
                  'kredi': _yv3,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'BB',
                  'Harf_etkisi': 3
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj3);

                return;
              }

              if (yakdonemort >= 69.5 && yakdonemort < 74.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('CB');

                var _yv4 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj4 = {
                  'kredi': _yv4,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'CB',
                  'Harf_etkisi': 2.5
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj4);

                return;
              }

              if (yakdonemort >= 59.5 && yakdonemort < 69.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('CC');

                var _yv5 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj5 = {
                  'kredi': _yv5,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'CC',
                  'Harf_etkisi': 2
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj5);

                return;
              }

              if (yakdonemort >= 49.5 && yakdonemort < 59.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('DC');

                var _yv6 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj6 = {
                  'kredi': _yv6,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'DC',
                  'Harf_etkisi': 1.5
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj6);

                return;
              }

              if (yakdonemort >= 39.5 && yakdonemort < 49.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('DD');

                var _yv7 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj7 = {
                  'kredi': _yv7,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'DD',
                  'Harf_etkisi': 1
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj7);

                return;
              }

              if (yakdonemort >= 29.5 && yakdonemort < 39.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('FD');

                var _yv8 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj8 = {
                  'kredi': _yv8,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'FD',
                  'Harf_etkisi': 0.5
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj8);

                return;
              }

              if (yakdonemort >= 19.5 && yakdonemort < 29.5) {
                _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(id, "/Harf_Notu")).set('FF');

                var _yv9 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                var _tobj9 = {
                  'kredi': _yv9,
                  'Puan': s.val().Donem_ort,
                  'Harf': 'FF',
                  'Harf_etkisi': 0
                };

                _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(id, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj9);

                return;
              }
            });
          } //put return after every condition
          else // eger ogrenci sayisi 25 ten fazla ise can sistem uygulancaktir
            this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi())).once('value', function (s) {
              s.forEach(function (e) {
                if (e.key !== 'Ders_Ortalamasi' && e.key !== 'Standart_Sapma') {
                  if (_this7.sinavdetay < 39.5) {
                    console.log('girdiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');

                    _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                    var yv = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                    var tobj = {
                      'kredi': yv,
                      'Puan': e.val().Donem_ort,
                      'Harf': 'FF',
                      'Harf_etkisi': 0
                    };

                    _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(tobj);
                  } else if (_this7.sinavdetay >= 39.5) {
                    if (s.val().Ders_Ortalamasi >= 80) {
                      if (e.val().Donem_ort >= 89.5) {
                        //  console.log(e.val().Donem_ort);
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv10 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj10 = {
                          'kredi': _yv10,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj10);
                      }

                      if (e.val().Donem_ort >= 79.5 && e.val().Donem_ort < 89.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv11 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj11 = {
                          'kredi': _yv11,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj11);
                      }

                      if (e.val().Donem_ort >= 75 && e.val().Donem_ort <= 79) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv12 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj12 = {
                          'kredi': _yv12,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj12);
                      }

                      if (e.val().Donem_ort >= 69.5 && e.val().Donem_ort < 74.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv13 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj13 = {
                          'kredi': _yv13,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj13);
                      }

                      if (e.val().Donem_ort >= 60 && e.val().Donem_ort < 69.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv14 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj14 = {
                          'kredi': _yv14,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj14);
                      }

                      if (e.val().Donem_ort >= 49.5 && e.val().Donem_ort < 59.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv15 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj15 = {
                          'kredi': _yv15,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj15);
                      }

                      if (e.val().Donem_ort >= 39.5 && e.val().Donem_ort < 49.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv16 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj16 = {
                          'kredi': _yv16,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj16);
                      }

                      if (e.val().Donem_ort >= 29.5 && e.val().Donem_ort < 39.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv17 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj17 = {
                          'kredi': _yv17,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj17);
                      }

                      if (e.val().Donem_ort >= 0 && e.val().Donem_ort < 29.5) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv18 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj18 = {
                          'kredi': _yv18,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj18);
                      }
                    }

                    if (s.val().Ders_Ortalamasi >= 69.5 && s.val().Ders_Ortalamasi < 79.5) {
                      if (e.val().T_standart < 24) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv19 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj19 = {
                          'kredi': _yv19,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj19);
                      }

                      if (e.val().T_standart >= 24 && e.val().T_standart <= 28.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv20 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj20 = {
                          'kredi': _yv20,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj20);
                      }

                      if (e.val().T_standart >= 29 && e.val().T_standart <= 33.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv21 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj21 = {
                          'kredi': _yv21,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj21);
                      }

                      if (e.val().T_standart >= 34 && e.val().T_standart <= 38.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv22 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj22 = {
                          'kredi': _yv22,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj22);
                      }

                      if (e.val().T_standart >= 39 && e.val().T_standart <= 43.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv23 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj23 = {
                          'kredi': _yv23,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj23);
                      }

                      if (e.val().T_standart >= 44 && e.val().T_standart <= 48.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv24 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj24 = {
                          'kredi': _yv24,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj24);
                      }

                      if (e.val().T_standart >= 49 && e.val().T_standart <= 53.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv25 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj25 = {
                          'kredi': _yv25,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj25);
                      }

                      if (e.val().T_standart >= 54 && e.val().T_standart <= 58.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv26 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj26 = {
                          'kredi': _yv26,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj26);
                      }

                      if (e.val().T_standart >= 59) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv27 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj27 = {
                          'kredi': _yv27,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj27);
                      }
                    } ///////////////////////////////////////////////////////////


                    if (s.val().Ders_Ortalamasi > 62.5 && s.val().Ders_Ortalamasi <= 70) {
                      if (e.val().T_standart < 26) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv28 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj28 = {
                          'kredi': _yv28,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj28);
                      }

                      if (e.val().T_standart >= 26 && e.val().T_standart <= 30.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv29 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj29 = {
                          'kredi': _yv29,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj29);
                      }

                      if (e.val().T_standart >= 31 && e.val().T_standart <= 35.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv30 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj30 = {
                          'kredi': _yv30,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj30);
                      }

                      if (e.val().T_standart >= 36 && e.val().T_standart <= 40.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv31 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj31 = {
                          'kredi': _yv31,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj31);
                      }

                      if (e.val().T_standart >= 41 && e.val().T_standart <= 45.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv32 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj32 = {
                          'kredi': _yv32,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj32);
                      }

                      if (e.val().T_standart >= 46 && e.val().T_standart <= 50.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv33 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj33 = {
                          'kredi': _yv33,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj33);
                      }

                      if (e.val().T_standart >= 51 && e.val().T_standart <= 55.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv34 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj34 = {
                          'kredi': _yv34,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj34);
                      }

                      if (e.val().T_standart >= 56 && e.val().T_standart <= 60.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv35 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj35 = {
                          'kredi': _yv35,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj35);
                      }

                      if (e.val().T_standart >= 61) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv36 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj36 = {
                          'kredi': _yv36,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj36);
                      }
                    } ////////////////////////////////////////////////////////////////////////////


                    if (s.val().Ders_Ortalamasi > 57.5 && s.val().Ders_Ortalamasi <= 62.5) {
                      if (e.val().T_standart < 28) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv37 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj37 = {
                          'kredi': _yv37,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj37);
                      }

                      if (e.val().T_standart >= 28 && e.val().T_standart <= 32.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv38 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj38 = {
                          'kredi': _yv38,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj38);
                      }

                      if (e.val().T_standart >= 33 && e.val().T_standart <= 37.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv39 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj39 = {
                          'kredi': _yv39,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj39);
                      }

                      if (e.val().T_standart >= 38 && e.val().T_standart <= 42.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv40 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj40 = {
                          'kredi': _yv40,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj40);
                      }

                      if (e.val().T_standart >= 43 && e.val().T_standart <= 47.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv41 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj41 = {
                          'kredi': _yv41,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj41);
                      }

                      if (e.val().T_standart >= 48 && e.val().T_standart <= 52.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv42 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi'];

                        console.log(_yv42);
                        var _tobj42 = {
                          'kredi': _yv42,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj42);
                      }

                      if (e.val().T_standart >= 53 && e.val().T_standart <= 57.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv43 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj43 = {
                          'kredi': _yv43,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj43);
                      }

                      if (e.val().T_standart >= 58 && e.val().T_standart <= 62.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv44 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj44 = {
                          'kredi': _yv44,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj44);
                      }

                      if (e.val().T_standart >= 63) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv45 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj45 = {
                          'kredi': _yv45,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj45);
                      }
                    } ////////////////////////////////////////////////////////////////////////////////////////////////////////


                    if (s.val().Ders_Ortalamasi > 52.5 && s.val().Ders_Ortalamasi <= 57.5) {
                      if (e.val().T_standart < 30) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv46 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj46 = {
                          'kredi': _yv46,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj46);
                      }

                      if (e.val().T_standart >= 30 && e.val().T_standart <= 34.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv47 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj47 = {
                          'kredi': _yv47,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj47);
                      }

                      if (e.val().T_standart >= 35 && e.val().T_standart <= 39.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv48 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj48 = {
                          'kredi': _yv48,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj48);
                      }

                      if (e.val().T_standart >= 40 && e.val().T_standart <= 44.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv49 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj49 = {
                          'kredi': _yv49,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj49);
                      }

                      if (e.val().T_standart >= 45 && e.val().T_standart <= 49.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv50 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj50 = {
                          'kredi': _yv50,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj50);
                      }

                      if (e.val().T_standart >= 50 && e.val().T_standart <= 54.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv51 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj51 = {
                          'kredi': _yv51,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj51);
                      }

                      if (e.val().T_standart >= 55 && e.val().T_standart <= 59.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv52 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj52 = {
                          'kredi': _yv52,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj52);
                      }

                      if (e.val().T_standart >= 60 && e.val().T_standart <= 64.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv53 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj53 = {
                          'kredi': _yv53,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj53);
                      }

                      if (e.val().T_standart >= 65) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv54 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj54 = {
                          'kredi': _yv54,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj54);
                      }
                    } ///////////////////////////////////////////////


                    if (s.val().Ders_Ortalamasi > 47.5 && s.val().Ders_Ortalamasi <= 52.5) {
                      if (e.val().T_standart < 32) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv55 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj55 = {
                          'kredi': _yv55,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj55);
                      }

                      if (e.val().T_standart >= 32 && e.val().T_standart <= 36.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv56 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj56 = {
                          'kredi': _yv56,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj56);
                      }

                      if (e.val().T_standart >= 37 && e.val().T_standart <= 41.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv57 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj57 = {
                          'kredi': _yv57,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj57);
                      }

                      if (e.val().T_standart >= 42 && e.val().T_standart <= 46.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv58 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj58 = {
                          'kredi': _yv58,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj58);
                      }

                      if (e.val().T_standart >= 47 && e.val().T_standart <= 51.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv59 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj59 = {
                          'kredi': _yv59,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj59);
                      }

                      if (e.val().T_standart >= 52 && e.val().T_standart <= 56.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv60 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj60 = {
                          'kredi': _yv60,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj60);
                      }

                      if (e.val().T_standart >= 57 && e.val().T_standart <= 61.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv61 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj61 = {
                          'kredi': _yv61,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj61);
                      }

                      if (e.val().T_standart >= 62 && e.val().T_standart <= 66.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv62 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj62 = {
                          'kredi': _yv62,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj62);
                      }

                      if (e.val().T_standart >= 67) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv63 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj63 = {
                          'kredi': _yv63,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj63);
                      }
                    } ////////////////////////////////////////////////////////////////////////////////////////////////


                    if (s.val().Ders_Ortalamasi > 42.5 && s.val().Ders_Ortalamasi <= 47.5) {
                      if (e.val().T_standart < 34) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv64 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj64 = {
                          'kredi': _yv64,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj64);
                      }

                      if (e.val().T_standart >= 34 && e.val().T_standart <= 38.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv65 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj65 = {
                          'kredi': _yv65,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj65);
                      }

                      if (e.val().T_standart >= 39 && e.val().T_standart <= 43.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv66 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj66 = {
                          'kredi': _yv66,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj66);
                      }

                      if (e.val().T_standart >= 44 && e.val().T_standart <= 48.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv67 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj67 = {
                          'kredi': _yv67,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj67);
                      }

                      if (e.val().T_standart >= 49 && e.val().T_standart <= 53.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv68 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj68 = {
                          'kredi': _yv68,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj68);
                      }

                      if (e.val().T_standart >= 54 && e.val().T_standart <= 58.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv69 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj69 = {
                          'kredi': _yv69,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj69);
                      }

                      if (e.val().T_standart >= 59 && e.val().T_standart <= 63.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv70 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj70 = {
                          'kredi': _yv70,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj70);
                      }

                      if (e.val().T_standart >= 64 && e.val().T_standart <= 68.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv71 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj71 = {
                          'kredi': _yv71,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj71);
                      }

                      if (e.val().T_standart >= 69) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv72 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj72 = {
                          'kredi': _yv72,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj72);
                      }
                    } ///////////////////////////////////////////////////////////////////////////////////////////////////


                    if (s.val().Ders_Ortalamasi <= 42.5) {
                      if (e.val().T_standart < 36) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FF');

                        var _yv73 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj73 = {
                          'kredi': _yv73,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FF',
                          'Harf_etkisi': 0
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj73);
                      }

                      if (e.val().T_standart >= 36 && e.val().T_standart <= 40.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('FD');

                        var _yv74 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj74 = {
                          'kredi': _yv74,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'FD',
                          'Harf_etkisi': 0.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj74);
                      }

                      if (e.val().T_standart >= 41 && e.val().T_standart <= 45.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DD');

                        var _yv75 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj75 = {
                          'kredi': _yv75,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DD',
                          'Harf_etkisi': 1
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj75);
                      }

                      if (e.val().T_standart >= 46 && e.val().T_standart <= 50.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('DC');

                        var _yv76 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj76 = {
                          'kredi': _yv76,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'DC',
                          'Harf_etkisi': 1.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj76);
                      }

                      if (e.val().T_standart >= 51 && e.val().T_standart <= 55.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CC');

                        var _yv77 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj77 = {
                          'kredi': _yv77,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CC',
                          'Harf_etkisi': 2
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj77);
                      }

                      if (e.val().T_standart >= 56 && e.val().T_standart <= 60.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('CB');

                        var _yv78 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj78 = {
                          'kredi': _yv78,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'CB',
                          'Harf_etkisi': 2.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj78);
                      }

                      if (e.val().T_standart >= 61 && e.val().T_standart <= 65.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BB');

                        var _yv79 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj79 = {
                          'kredi': _yv79,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BB',
                          'Harf_etkisi': 3
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj79);
                      }

                      if (e.val().T_standart >= 66 && e.val().T_standart <= 70.99) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('BA');

                        var _yv80 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj80 = {
                          'kredi': _yv80,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'BA',
                          'Harf_etkisi': 3.5
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj80);
                      }

                      if (e.val().T_standart >= 71) {
                        _this7.db.database.ref("AlinmisDersler/".concat(_this7.get_date(), "/basariliBasarsiz/").concat(_this7.Tc.get_ogretim(), "/").concat(_this7.Tc.get_Ders_adi(), "/").concat(e.key, "/Harf_Notu")).set('AA');

                        var _yv81 = _this7.Tc.myObj["".concat(_this7.Tc.get_Ders_adi())]['kredi']; // console.log(yv);


                        var _tobj81 = {
                          'kredi': _yv81,
                          'Puan': e.val().Donem_ort,
                          'Harf': 'AA',
                          'Harf_etkisi': 4
                        };

                        _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(e.key, "/").concat(_this7.Tc.get_Ders_adi())).set(_tobj81);
                      }
                    }
                  }
                }
              });
            }); ///////////////////////////////Ortalama Hesaplamasi ///////////////////////////////////////////
          // console.log('Averages');


          var sum_kredi = 0;
          var kredicarpietkisi = 0;
          this.db.database.ref("Averages/".concat(this.get_date())).once('value', function (snap) {
            snap.forEach(function (a) {
              // console.log(a.key); 160201099 ...
              var ic = 0;
              _this7.t_obj = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
                a.forEach(function (e) {
                  if (e.key === 'Average') ic++;

                  if (e.key != 'Average') {
                    // console.log(e.key); // average , algo , algo22 ,algo33
                    ic++; //console.log(e.val().Harf_etkisi);
                    // console.log('child '+ a.numChildren());

                    sum_kredi += Number(e.val().kredi);
                    kredicarpietkisi += e.val().kredi * e.val().Harf_etkisi;

                    if (a.numChildren() === ic) {
                      var t = kredicarpietkisi / sum_kredi; // obs.next(new yobj(sum_kredi,Math.round(t*100)/100 , a.key));

                      obs.next(new yobj(sum_kredi, t, a.key));
                      sum_kredi = 0;
                      kredicarpietkisi = 0;
                    }
                  }
                });
              });

              _this7.t_obj.subscribe(function (k) {
                var y = 0;

                if (k.tyoplam.toString() != 'NaN') {
                  console.log('after observer ' + k.tyoplam + ' ' + k.tkredi);
                  var objson = {
                    'Genel_Ortalama': k.tyoplam,
                    'Toplam_Kredi': k.tkredi // butun alindi krediler butun donemlerde

                  }; // console.log('bitkiiiiiiiiiiiiiiiiiiiiim     artik '+k.tkredi+' '+k.tyoplam+' '+k.id);

                  _this7.db.database.ref("Averages/".concat(_this7.get_date(), "/").concat(k.id, "/Average")).set(objson);

                  console.log("Averages/".concat(_this7.get_date(), "/").concat(k.id, "/Average"));
                }
              });
            });
          });
        }
      }, {
        key: "imgclick",
        value: function imgclick() {
          var _this8 = this;

          this.Zone.run(function () {
            _this8.router.navigate(['sheet'], {
              relativeTo: _this8.Route
            });
          });
        }
      }, {
        key: "chart",
        value: function chart() {
          var _this9 = this;

          this.Zone.run(function () {
            _this9.router.navigate(['chart'], {
              relativeTo: _this9.Route
            });
          });
        }
      }]);

      return DersAlanlariComponent;
    }();

    DersAlanlariComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_6__["StudentsecService"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_7__["TeachersecService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    DersAlanlariComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-ders-alanlari',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ders-alanlari.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ders-alanlari.component.scss */
      "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.scss")).default]
    })], DersAlanlariComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.scss":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.scss ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariSheetstudentsSheetstudentsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9ha2FkZW1pa2tpc21pL2FrYWRlbWlrLWdpcmlzL2RlcnNsZXIvZGVycy1hbGFubGFyaS9zaGVldHN0dWRlbnRzL3NoZWV0c3R1ZGVudHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: SheetstudentsComponent */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDersAlanlariSheetstudentsSheetstudentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SheetstudentsComponent", function () {
      return SheetstudentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _ders_alanlari_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../ders-alanlari.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");

    var A = function A(id, name) {
      _classCallCheck(this, A);

      this.id = id;
      this.name = name;
    };

    var Sinav = function Sinav(id, vize, proje, Final, Bute) {
      _classCallCheck(this, Sinav);

      this.Bute = 'false';
      this.id = id;
      this.vize = vize;
      this.proje = proje;
      this.Final = Final;
      this.Bute = Bute;
    };

    var SheetstudentsComponent = /*#__PURE__*/function () {
      function SheetstudentsComponent(db, Tc, zone, router, route, stt) {
        _classCallCheck(this, SheetstudentsComponent);

        this.db = db;
        this.Tc = Tc;
        this.zone = zone;
        this.router = router;
        this.route = route;
        this.stt = stt;
        this.students_id = [];
        this.students_sinavlar = [];
        this.Odevler_Puani = [];
        this.Odevler_Etkisi = [];
        this.Aelements = [];
      }

      _createClass(SheetstudentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.db.database.ref('But').once('value', function (sp) {
                      _this10.But = sp.val();
                    });

                  case 2:
                    console.log('But = ' + this.But);
                    this.Tc.set_Ders_adi(this.Tc.get_Ders_adi());
                    this.Tc.set_donem(this.Tc.get_donem());
                    this.Tc.set_id(this.Tc.get_id());
                    this.Tc.set_ogretim(this.Tc.get_ogretim()); ///////////////

                    this.Al = new _ders_alanlari_component__WEBPACK_IMPORTED_MODULE_3__["DersAlanlariComponent"](this.db, this.stt, this.Tc, this.zone, this.router, this.route);
                    this.proje_not = 'true';
                    this.Odev_not = 'true';
                    this.Odevler_Puani.length = 0;
                    _context7.next = 13;
                    return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi())).once('value', function (snap) {
                      snap.forEach(function (a) {
                        if (a.key !== 'Ders_Ortalamasi' && a.key !== 'Standart_Sapma') {
                          console.log(a.key);
                          console.log(a.val().vize + ' ' + a.val().proje + ' ' + a.val().Final);

                          _this10.students_id.push(a.key);

                          var vize = a.val().vize;
                          var proje = a.val().proje;
                          var final = a.val().Final;
                          var Bute = a.val().But;
                          console.log('Odevler here ' + a.val().OdevPuani);

                          if (a.val().OdevPuani[0] === 'Yok') {
                            _this10.Odev_not = 'false';
                          }

                          if (a.val().vize === undefined || a.val().vize === null) vize = '-';

                          if (a.val().proje === undefined || a.val().proje === null || a.val().proje === '') {
                            proje = '';
                          }

                          if (a.val().Final === undefined || a.val().Final === null) final = '-';
                          if (a.val().Bute === undefined || a.val().Bute === null) Bute = '-';

                          _this10.students_sinavlar.push(new Sinav(a.key, vize, proje, final, Bute));
                        }
                      });
                    });

                  case 13:
                    if (this.students_sinavlar[0].proje === '') this.proje_not = 'false';

                  case 14:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "tableCliked",
        value: function tableCliked(i, j, contain) {
          this.satir = i;
          this.st = contain;
          this.sutun = j;
          console.log('satir ' + i + ' sutun' + j + ' metin' + contain);
        }
      }, {
        key: "f",
        value: function f() {
          this.satir = undefined;
          console.log('bastini');
        }
      }, {
        key: "Update",
        value: function Update(i, index) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this11 = this;

            var Final, Vize, Proje, full_name, x;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.Tc.set_Ders_adi(this.Tc.get_Ders_adi());
                    this.Tc.set_donem(this.Tc.get_donem());
                    this.Tc.set_id(this.Tc.get_id());
                    this.Tc.set_ogretim(this.Tc.get_ogretim());
                    _context8.next = 6;
                    return this.db.database.ref("table/".concat(this.Tc.get_date(), "/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_donem())).once('value', function (sp) {
                      // console.log(sp.val());
                      _this11.Tc.myObj = sp.val();
                    });

                  case 6:
                    this.Al = new _ders_alanlari_component__WEBPACK_IMPORTED_MODULE_3__["DersAlanlariComponent"](this.db, this.stt, this.Tc, this.zone, this.router, this.route);
                    if (this.But === 'false') Final = $('.AFinal').eq(index).val();else {
                      Final = $('.ABut').eq(index).val();
                      this.Tc.ButDegeri = Final;
                    }
                    Vize = $('.AVize').eq(index).val();
                    Proje = $('.AProje').eq(index).val();
                    if (Final === undefined) Final = i.Final;
                    if (Vize === undefined) Vize = i.vize;
                    if (Proje === undefined) Proje = i.proje;
                    console.log('Final ' + Final + ' Vize ' + Vize + ' Proje ' + Proje);
                    full_name = '';
                    _context8.next = 17;
                    return this.db.database.ref("Ogrenciler/".concat(i.id)).once('value', function (sp) {
                      full_name = sp.val().name + ' ' + sp.val().surename;
                    });

                  case 17:
                    x = new A(i.id, full_name);
                    _context8.next = 20;
                    return this.Odevf(i);

                  case 20:
                    _context8.next = 22;
                    return this.Al.get_ID(x, Vize, Proje, Final, index);

                  case 22:
                    _context8.next = 24;
                    return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(i.id, "/OdevPuani")).set(this.Odevler_Puani);

                  case 24:
                    _context8.next = 26;
                    return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(i.id, "/OdevEtkisi")).set(this.Odevler_Etkisi);

                  case 26:
                    this.Tc.ButDegeri = undefined;

                  case 27:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "Odevf",
        value: function Odevf(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            var _this12 = this;

            var _i4;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.Odevler_Puani.length = 0;
                    this.Odevler_Etkisi.length = 0;
                    this.odev_icin_secilen_ogrenci_id = i.id;
                    _context9.next = 5;
                    return this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(i.id)).once('value', function (snap) {
                      snap.forEach(function (a) {
                        if (a.key === 'OdevPuani') {
                          console.log('keys ' + a.key);
                          a.val().forEach(function (element) {
                            _this12.Odevler_Puani.push(element);
                          });
                        }

                        if (a.key === 'OdevEtkisi') {
                          a.val().forEach(function (element) {
                            _this12.Odevler_Etkisi.push(element);
                          });
                        }
                      });
                    });

                  case 5:
                    for (_i4 = 0; _i4 < this.Odevler_Puani.length; _i4++) {
                      this.sumOdevler += this.Odevler_Puani[_i4] * this.Odevler_Etkisi[_i4];
                    }

                    this.sumOdevler /= 100;

                  case 7:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "degistirme_Odev",
        value: function degistirme_Odev() {
          // console.log(this.odev_icin_secilen_ogrenci_id);
          this.Aelements.length = 0;
          var elements = $('.ABC');

          for (var i = 0; i < elements.length; i++) {
            this.Aelements.push(elements.eq(i).val());
          }

          this.db.database.ref("AlinmisDersler/".concat(this.Tc.get_date(), "/basariliBasarsiz/").concat(this.Tc.get_ogretim(), "/").concat(this.Tc.get_Ders_adi(), "/").concat(this.odev_icin_secilen_ogrenci_id, "/OdevPuani")).set(this.Aelements);
        } /////////////////////

      }, {
        key: "geri_don",
        value: function geri_don() {
          var _this13 = this;

          this.zone.run(function () {
            _this13.router.navigate(['../'], {
              relativeTo: _this13.route
            });
          });
        }
      }]);

      return SheetstudentsComponent;
    }();

    SheetstudentsComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_1__["TeachersecService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_6__["StudentsecService"]
      }];
    };

    SheetstudentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
      selector: 'app-sheetstudents',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sheetstudents.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sheetstudents.component.scss */
      "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.scss")).default]
    })], SheetstudentsComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDerslerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9ha2FkZW1pa2tpc21pL2FrYWRlbWlrLWdpcmlzL2RlcnNsZXIvZGVyc2xlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DerslerComponent */

  /***/
  function srcAppAnasistemAkademikkismiAkademikGirisDerslerDerslerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DerslerComponent", function () {
      return DerslerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DerslerComponent = /*#__PURE__*/function () {
      function DerslerComponent(Tc, db, route, router, zone) {
        _classCallCheck(this, DerslerComponent);

        this.Tc = Tc;
        this.db = db;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.t_dersleri = [];
        this.show_mat = [];
      }

      _createClass(DerslerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.db.database.ref('Teachers/' + this.Tc.get_id()).once('value', function (snap) {
            // console.log(this.Tc.get_ogretim());
            _this14.items = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (obs) {
              _this14.db.database.ref("table/".concat(_this14.Tc.get_date(), "/").concat(_this14.Tc.get_ogretim(), "/").concat(_this14.Tc.get_donem())).once('value', function (snap2) {
                snap2.forEach(function (a) {
                  if (snap.val().name === a.val().Dr) {
                    // console.log(a.val().Ders);
                    _this14.t_dersleri.push(a.val().Ders);
                  }
                });
                obs.next(_this14.t_dersleri);
              });
            });
          });
        }
      }, {
        key: "get_Ders",
        value: function get_Ders(x) {
          var _this15 = this;

          this.zone.run(function () {
            //console.log('ahmed');
            _this15.Tc.set_Ders_adi(x);

            return _this15.router.navigate(['DersAlanlari'], {
              relativeTo: _this15.route
            });
          });
        }
      }]);

      return DerslerComponent;
    }();

    DerslerComponent.ctorParameters = function () {
      return [{
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_2__["TeachersecService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    DerslerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dersler',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dersler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dersler.component.scss */
      "./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.scss")).default]
    })], DerslerComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/akademikkismi.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/akademikkismi.component.ts ***!
    \********************************************************************/

  /*! exports provided: AkademikkismiComponent */

  /***/
  function srcAppAnasistemAkademikkismiAkademikkismiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AkademikkismiComponent", function () {
      return AkademikkismiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    var AkademikkismiComponent = /*#__PURE__*/function () {
      function AkademikkismiComponent(Tc, route, router, db, cookiess) {
        _classCallCheck(this, AkademikkismiComponent);

        this.Tc = Tc;
        this.route = route;
        this.router = router;
        this.db = db;
        this.cookiess = cookiess;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.options = [];
        this.pswfc = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('');
      }

      _createClass(AkademikkismiComponent, [{
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.cookies = this.cookiess.getAll();

          for (var key in this.cookies) {
            if (key[0] === 't') {
              this.options.push(key.substring(1, key.length).toString());
            }
          }

          this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
            return _this16._filter(value);
          }));
        }
      }, {
        key: "ctrl",
        value: function ctrl() {
          this.Tc.set_id(this.id);
          this.Tc.set_pass(this.pass);
          return this.router.navigate(['giris'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "fcall",
        value: function fcall(op) {
          this.pswfc.setValue(this.cookies['t' + op.toString()]);
        }
      }]);

      return AkademikkismiComponent;
    }();

    AkademikkismiComponent.ctorParameters = function () {
      return [{
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_2__["TeachersecService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    AkademikkismiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-akademikkismi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./akademic.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/akademikkismi/akademic.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style.css */
      "./src/app/anasistem/akademikkismi/style.css")).default]
    })], AkademikkismiComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/akademikkismi/style.css":
  /*!***************************************************!*\
    !*** ./src/app/anasistem/akademikkismi/style.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAkademikkismiStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table\r\n{\r\n    border: 1px solid red;\r\n    border-radius: 20%;\r\n}\r\n#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px;\r\n    width: 80%;\r\n    height: 307px;\r\n    margin: 100px;\r\n}\r\n#ab\r\n{\r\n    margin-top: -50px;\r\n    background: white;\r\n    width: 190px;\r\n}\r\n#academic\r\n{\r\n    background: url('akademic.jpg');\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL2FrYWRlbWlra2lzbWkvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLCtCQUFzRDtJQUN0RCxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9ha2FkZW1pa2tpc21pL3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxufVxyXG4jcmNvcm5lcnMyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzNBRDIxO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDMwN3B4O1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufVxyXG4jYWJcclxue1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxOTBweDtcclxufVxyXG4jYWNhZGVtaWNcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2FrYWRlbWljLmpwZycpO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/anasistem/anasistem.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/anasistem/anasistem.component.ts ***!
    \**************************************************/

  /*! exports provided: AnasistemComponent */

  /***/
  function srcAppAnasistemAnasistemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnasistemComponent", function () {
      return AnasistemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _hakkimda_hakkimda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hakkimda/hakkimda.component */
    "./src/app/anasistem/hakkimda/hakkimda.component.ts");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! zone.js/dist/zone-error */
    "./node_modules/zone.js/dist/zone-error.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/auth */
    "./src/app/anasistem/node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/firestore */
    "./src/app/anasistem/node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var A = function A(name, id) {
      _classCallCheck(this, A);

      this.name = name;
      this.id = id;
    };

    var AnasistemComponent = /*#__PURE__*/function () {
      function AnasistemComponent(dialog, db, router, route) {
        _classCallCheck(this, AnasistemComponent);

        this.dialog = dialog;
        this.db = db;
        this.router = router;
        this.route = route;
      }

      _createClass(AnasistemComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.router.resetConfig;
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          this.dialog.open(_hakkimda_hakkimda_component__WEBPACK_IMPORTED_MODULE_4__["HakkimdaComponent"], {
            data: {
              animal: 'panda'
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            var xx, yy;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    //window.oncontextmenu= (ev)=>{
                    //var x = ev.offsetX;     // Get the horizontal coordinate
                    //var y = ev.offsetY;     // Get the vertical coordinate
                    // var coor = "X coords: " + x + ", Y coords: " + y;
                    // document.getElementById("context-menu").style.left = x+"px";
                    // document.getElementById("context-menu").style.top = y+"px";
                    // console.log(x+' '+y);
                    // document.getElementById("context-menu").classList.add("active");
                    // ev.preventDefault();
                    // }
                    // window.onclick = (e)=>{
                    //   document.getElementById("context-menu").classList.remove("active");
                    // }
                    jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
                      jquery__WEBPACK_IMPORTED_MODULE_2__(window).contextmenu(function (e) {
                        var x = e.offsetX;
                        var y = e.offsetY;
                        var c1 = 10;
                        var c2 = 13;
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#context-menu').css({
                          left: x + "px",
                          top: y + "px"
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#context-menu').addClass('active');
                        e.preventDefault();
                      });
                      jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('click', function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#context-menu').removeClass('active');
                      });
                      jquery__WEBPACK_IMPORTED_MODULE_2__('#c1').on('mouseover', function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#c1').animate({
                          opacity: 0.8,
                          height: '+=3%',
                          width: '+=4%'
                        }, 500).animate({
                          opacity: 1,
                          height: '-=3%',
                          width: '-=4%'
                        }, 500);
                      }); //////////////////////

                      jquery__WEBPACK_IMPORTED_MODULE_2__('#c2').on('mouseover', function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#c2').animate({
                          opacity: 0.8,
                          height: '+=3%',
                          width: '+=4%'
                        }, 500).animate({
                          opacity: 1,
                          height: '-=3%',
                          width: '-=4%'
                        }, 500);
                      }); ///////////////////////////////

                      jquery__WEBPACK_IMPORTED_MODULE_2__('#c3').on('mouseover', function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#c3').animate({
                          opacity: 0.8,
                          height: '+=3%',
                          width: '+=4%'
                        }, 500).animate({
                          opacity: 1,
                          height: '-=3%',
                          width: '-=4%'
                        }, 500);
                      }); ////////////////////////

                      jquery__WEBPACK_IMPORTED_MODULE_2__('#c4').on('mouseover', function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#c4').animate({
                          opacity: 0.8,
                          height: '+=3%',
                          width: '+=4%'
                        }, 500).animate({
                          opacity: 1,
                          height: '-=3%',
                          width: '-=4%'
                        }, 500);
                      }); ///////////////////

                      jquery__WEBPACK_IMPORTED_MODULE_2__('#c5').on('mouseover', function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#c5').animate({
                          opacity: 0.8,
                          height: '+=3%',
                          width: '+=4%'
                        }, 500).animate({
                          opacity: 1,
                          height: '-=3%',
                          width: '-=4%'
                        }, 500);
                      });
                      jquery__WEBPACK_IMPORTED_MODULE_2__('#hakkimda').click(function () {
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#h').click();
                      });
                    });

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
        }
      }]);

      return AnasistemComponent;
    }();

    AnasistemComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
      }];
    };

    AnasistemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-anasistem',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/anasistem/app.component.css")).default]
    })], AnasistemComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/app.component.css":
  /*!*********************************************!*\
    !*** ./src/app/anasistem/app.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-card {\r\n    max-width: 350px;\r\n    max-height: 200px;\r\n    text-align: center;\r\n}\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\nimg\r\n{\r\n    height:100px\r\n}\r\nmat-grid-tile {\r\n    margin-right: 30%;\r\n    display: inline;\r\n}\r\ndiv.grid\r\n{\r\nmargin-left: 30%;\r\n    margin-top: 2%;\r\n}\r\na:link{\r\n    text-decoration: none;\r\n\r\n}\r\nmat-card.example-card\r\n{\r\n    border-radius: 15%;\r\n    background-size: cover;\r\n}\r\n.back_ground\r\n{\r\n    background: url('background.jpg');\r\n    height: 1000px; /* You must set a specified height */\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat; /* Do not repeat the image */\r\n    background-size: cover;\r\n}\r\n.academic\r\n{\r\n    background: url('akademic.jpg');\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n.student\r\n{\r\n    background: url('student.jpg');\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n.idari\r\n{\r\n    background: url('idari.png');\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n.ogrenciisleri\r\n{\r\n    background: url('ogrenciler.png');\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n.damascus\r\n{\r\n    background: url('dmlogo.png');\r\n    background-size: cover;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1GQUFtRjtJQUNuRixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUk7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTs7QUFFQSxnQkFBZ0I7SUFDWixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxxQkFBcUI7O0FBRXpCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjtBQUNBOztJQUVJLGlDQUFxRDtJQUNyRCxjQUFjLEVBQUUsb0NBQW9DO0lBQ3BELDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEIsRUFBRSw0QkFBNEI7SUFDMUQsc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksK0JBQW1EO0lBQ25ELHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSw4QkFBa0Q7SUFDbEQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLDRCQUFnRDtJQUNoRCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksaUNBQXFEO0lBQ3JELHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSw2QkFBaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW1nXHJcbntcclxuICAgIGhlaWdodDoxMDBweFxyXG59XHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuZGl2LmdyaWRcclxue1xyXG5tYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuYTpsaW5re1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG5tYXQtY2FyZC5leGFtcGxlLWNhcmRcclxue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYmFja19ncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDsgLyogWW91IG11c3Qgc2V0IGEgc3BlY2lmaWVkIGhlaWdodCAqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyAvKiBDZW50ZXIgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiBEbyBub3QgcmVwZWF0IHRoZSBpbWFnZSAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4uYWNhZGVtaWNcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2FrYWRlbWljLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3R1ZGVudFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3R1ZGVudC5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmlkYXJpXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9pZGFyaS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm9ncmVuY2lpc2xlcmlcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL29ncmVuY2lsZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kYW1hc2N1c1xyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG1sb2dvLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/hakkimda/hakkimda.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/anasistem/hakkimda/hakkimda.component.ts ***!
    \**********************************************************/

  /*! exports provided: HakkimdaComponent */

  /***/
  function srcAppAnasistemHakkimdaHakkimdaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HakkimdaComponent", function () {
      return HakkimdaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    var HakkimdaComponent = /*#__PURE__*/function () {
      function HakkimdaComponent(data) {
        _classCallCheck(this, HakkimdaComponent);

        this.data = data;
      }

      _createClass(HakkimdaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HakkimdaComponent;
    }();

    HakkimdaComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    HakkimdaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hakkimda',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hakiimda.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/hakkimda/hakiimda.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], HakkimdaComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/idarikismi.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/idarikismi.component.ts ***!
    \**************************************************************/

  /*! exports provided: IdarikismiComponent */

  /***/
  function srcAppAnasistemIdarikismiIdarikismiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IdarikismiComponent", function () {
      return IdarikismiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var IdarikismiComponent_1;

    var IdarikismiComponent = IdarikismiComponent_1 = /*#__PURE__*/function () {
      function IdarikismiComponent(db, router, route, zone, cookiess) {
        var _this17 = this;

        _classCallCheck(this, IdarikismiComponent);

        this.db = db;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.cookiess = cookiess;
        this.options = [];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
        this.filteredOptions = this.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (value) {
          return _this17._filter(value);
        }));
      }

      _createClass(IdarikismiComponent, [{
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          IdarikismiComponent_1.id = undefined;
          this.cookies = this.cookiess.getAll();

          for (var key in this.cookies) {
            if (key[0] === 'o') {
              this.options.push(key.substring(1, key.length).toString());
            }
          }
        }
      }, {
        key: "fcall",
        value: function fcall(op) {
          this.password.setValue(this.cookies['o' + op]);
        }
      }, {
        key: "submitb",
        value: function submitb() {
          var _this18 = this;

          this.db.database.ref("idarikismi/".concat(this.name.value)).once('value', function (sp) {
            if (sp.exists()) {
              if (_this18.password.value === sp.val().password) {
                if (_this18.cookiess.check(_this18.name.value) === false) {
                  _this18.cookiess.set('o' + _this18.name.value, _this18.password.value, 100000, '/');
                }

                _this18.zone.run(function () {
                  IdarikismiComponent_1.id = _this18.name.value;

                  _this18.router.navigate(['idari_menu'], {
                    relativeTo: _this18.route
                  });
                });
              }
            }
          }).then(function () {}).catch(function (e) {
            console.log('Bulumadi');
          });
        }
      }]);

      return IdarikismiComponent;
    }();

    IdarikismiComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    IdarikismiComponent = IdarikismiComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-idarikismi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./idari.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/idari.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style.css */
      "./src/app/anasistem/idarikismi/style.css")).default]
    })], IdarikismiComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: AcilacakDerslerComponent */

  /***/
  function srcAppAnasistemIdarikismiMenuIdariAcilacakDerslerAcilacakDerslerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcilacakDerslerComponent", function () {
      return AcilacakDerslerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");

    var DersDet = function DersDet() {
      _classCallCheck(this, DersDet);
    };

    var secim = function secim(dr, ders, saat, yil, kredi, O, fO, vize, proje, final) {
      _classCallCheck(this, secim);

      this.Ders = ders;
      this.Dr = dr;
      this.saat = saat;
      this.yil = yil;
      this.kredi = kredi;
      this.OgrenciSayisi = O;
      this.fullOgrenciSayisi = fO;
      this.Final = final;
      this.Vize = vize;
      this.Proje = proje;
    };

    var AcilacakDerslerComponent = /*#__PURE__*/function () {
      function AcilacakDerslerComponent(fb, st, Tc, formBuilder) {
        _classCallCheck(this, AcilacakDerslerComponent);

        this.fb = fb;
        this.st = st;
        this.Tc = Tc;
        this.formBuilder = formBuilder; ///////////////////////////

        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ['Yaşar Becerekli', 'Onur Gök', 'ADNAN KAVAK', 'ALEV MUTLU', 'BURAK INNER'];
        this.myControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options2 = ["algoritma", "YazlabI", "YazlabII", "ProgramalamaI", "ProgramalamaII", "BilLabI", "BilLabII", "NoronAglari", "BulanikMantik", "Biyonformatic", "ProlabI", "ProlabII", "VeriYapilari", "VeriTabani"];
        this.options3 = ['1-3', '3-5', '5-8', '10-1', '9:30-12', '6:00-8:30'];
        this.options4 = ['1', '2', '3', '4'];
        this.options5 = ['2', '3', '4', '5', '6'];
        this.options6 = ['30', '35', '40', '45', '50', '55', '60', '75'];
        this.objm = [];
        this.Ls = [];
        var y = 'BilLabI'; // console.log(Tc.Dersler_Kredi[`${y}`].kredi);

        this.DersDetaylar = new DersDet();
        this.DersDetaylar.Final = '';
        this.DersDetaylar.Vize = '';
        this.DersDetaylar.Proje = '';
        this.DersDetaylar.Odevler = [];
      }

      _createClass(AcilacakDerslerComponent, [{
        key: "createItem",
        value: function createItem() {
          return this.formBuilder.group({
            name: ''
          });
        }
      }, {
        key: "addItem",
        value: function addItem(i) {
          this.itemsf = this.orderForm.get('itemsf');
          this.itemsf.push(this.createItem());
          this.Ls.push(i);
        }
      }, {
        key: "remove",
        value: function remove(i) {
          this.itemsf.removeAt(i);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.orderForm = this.formBuilder.group({
            name: '',
            itemsf: this.formBuilder.array([this.createItem()])
          }); ///////////////////////////

          console.log("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem()));
          this.items = this.fb.list("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem())).valueChanges();
          this.itemsRef = this.fb.list("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem()));
        }
      }, {
        key: "getOdevler",
        value: function getOdevler(s) {
          var getting = jquery__WEBPACK_IMPORTED_MODULE_3__(".getting");
          console.log('deney length ' + getting.length);

          if (getting.eq(0).val().toString().length === 0) {
            this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(s, "/Odevler")).set('Yok');
          } else for (var i = 0; i < getting.length; i++) {
            //save homeworks and (final,) in database
            this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(s, "/Odevler/").concat(i)).set(getting.eq(i).val());
          }
        }
      }, {
        key: "add",
        value: function add() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            var t1, t2, t3, t4, t5, t6, t7, t8, t9, ob;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    t1 = jquery__WEBPACK_IMPORTED_MODULE_3__('#one').val().toString();
                    t2 = jquery__WEBPACK_IMPORTED_MODULE_3__('#one2').val().toString();
                    t3 = jquery__WEBPACK_IMPORTED_MODULE_3__('#one3').val().toString();
                    t4 = jquery__WEBPACK_IMPORTED_MODULE_3__('#one4').val().toString();
                    t5 = jquery__WEBPACK_IMPORTED_MODULE_3__('#kredi').val().toString();
                    t6 = jquery__WEBPACK_IMPORTED_MODULE_3__('#one6').val().toString();
                    t7 = jquery__WEBPACK_IMPORTED_MODULE_3__('#final').val().toString();
                    t8 = jquery__WEBPACK_IMPORTED_MODULE_3__('#vize').val().toString();
                    t9 = jquery__WEBPACK_IMPORTED_MODULE_3__('#proje').val().toString();

                    if (t9 === '') {
                      t9 = 'Yok';
                    }

                    if (!(t1 !== "" && t2 !== "" && t3 !== "" && t4 !== "" && t5 !== "" && t6 !== "")) {
                      _context11.next = 15;
                      break;
                    }

                    ob = new secim(t1, t2, t3, t4, t5, t6, t6, t8, t9, t7);
                    _context11.next = 14;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2)).set(ob);

                  case 14:
                    this.getOdevler(t2);

                  case 15:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "get_id",
        value: function get_id(i) {
          var _this19 = this;

          this.t = 0;
          this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem())).on('value', function (snapshot) {
            snapshot.forEach(function (a) {
              if (_this19.t === i) {
                _this19.fb.database.ref('idDelete').set(a.key);
              }

              _this19.t++;
            });
          });
          this.fb.database.ref('idDelete').once('value', function (snapshot) {
            _this19.itemsRef.remove(snapshot.val());

            console.log("table/".concat(_this19.st.get_date(), "/").concat(_this19.st.get_Ogretim_Turu(), "/").concat(_this19.st.get_Donem()) + snapshot.val());
          });
        }
      }, {
        key: "get_id_u",
        value: function get_id_u(i) {
          this.id = i;
          var c = 0;
          this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem())).once('value', function (snapshot) {
            snapshot.forEach(function (a) {
              if (c === i) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#Mtwo').val(a.val().Ders);
                jquery__WEBPACK_IMPORTED_MODULE_3__('#Mone').val(a.val().Dr);
                jquery__WEBPACK_IMPORTED_MODULE_3__('#Mthree').val(a.val().saat);
                jquery__WEBPACK_IMPORTED_MODULE_3__('#Mfour').val(a.val().yil);
                jquery__WEBPACK_IMPORTED_MODULE_3__('#Mfive').val(a.val().kredi);
                jquery__WEBPACK_IMPORTED_MODULE_3__('#Msix').val(a.val().OgrenciSayisi);
              }

              c++;
            });
          });
        }
      }, {
        key: "get_v",
        value: function get_v() {
          console.log(this.myControl.value);
        }
      }, {
        key: "print_id",
        value: function print_id() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            var _this20 = this;

            var t1, t2, t3, t4, t5, t6, yodevler, final, vize, proje, t7, t8, t9;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    t1 = jquery__WEBPACK_IMPORTED_MODULE_3__('#Mone').val().toString();
                    t2 = jquery__WEBPACK_IMPORTED_MODULE_3__('#Mtwo').val().toString();
                    t3 = jquery__WEBPACK_IMPORTED_MODULE_3__('#Mthree').val().toString();
                    t4 = jquery__WEBPACK_IMPORTED_MODULE_3__('#Mfour').val().toString();
                    t5 = jquery__WEBPACK_IMPORTED_MODULE_3__('#Mfive').val().toString();
                    t6 = jquery__WEBPACK_IMPORTED_MODULE_3__('#Msix').val().toString();
                    yodevler = [];
                    final = '';
                    vize = '';
                    proje = '';
                    _context12.next = 12;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Final")).once('value', function (sp) {
                      final = sp.val();
                    });

                  case 12:
                    _context12.next = 14;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Vize")).once('value', function (sp) {
                      vize = sp.val();
                    });

                  case 14:
                    _context12.next = 16;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Proje")).once('value', function (sp) {
                      proje = sp.val();
                    });

                  case 16:
                    _context12.next = 18;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Odevler")).once('value', function (sp) {
                      console.log(sp.val());
                      yodevler.push(sp.val());
                    });

                  case 18:
                    this.t2 = 0;
                    this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem())).on('value', function (snapshot) {
                      snapshot.forEach(function (a) {
                        if (_this20.t2 === _this20.id) {
                          _this20.fb.database.ref('idUpdate').set(a.key);
                        }

                        _this20.t2++;
                      });
                    });
                    t7 = jquery__WEBPACK_IMPORTED_MODULE_3__('#vize').val().toString();
                    t8 = jquery__WEBPACK_IMPORTED_MODULE_3__('#proje').val().toString();
                    t9 = jquery__WEBPACK_IMPORTED_MODULE_3__('#final').val().toString();
                    if (t8 === '') t8 = 'Yok';
                    _context12.next = 26;
                    return this.fb.database.ref('idUpdate').once('value', function (snapshot) {
                      _this20.fb.database.ref("table/".concat(_this20.st.get_date(), "/").concat(_this20.st.get_Ogretim_Turu(), "/").concat(_this20.st.get_Donem(), "/") + snapshot.val()).set(new secim(t1, t2, t3, t4, t5, t6, t6, t7, t8, t9));

                      console.log("table/".concat(_this20.st.get_date(), "/").concat(_this20.st.get_Ogretim_Turu(), "/").concat(_this20.st.get_Donem(), "/") + snapshot.val());
                    });

                  case 26:
                    _context12.next = 28;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Odevler")).set(yodevler[0]);

                  case 28:
                    _context12.next = 30;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Vize")).set(vize);

                  case 30:
                    _context12.next = 32;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Proje")).set(proje);

                  case 32:
                    _context12.next = 34;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(t2, "/Final")).set(final);

                  case 34:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        } ////////////////
        /////

      }, {
        key: "conf",
        value: function conf() {
          if (this.DersDetaylar.Odevler[0]) return true;else return false;
        }
      }, {
        key: "dersDetay",
        value: function dersDetay(Ders) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
            var _this21 = this;

            var proje;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    proje = jquery__WEBPACK_IMPORTED_MODULE_3__('#uproje').val().toString();
                    console.log('fomr detay' + proje);
                    this.dersname = Ders;
                    this.DersDetaylar.Odevler = [];
                    _context13.next = 6;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(Ders)).once('value', function (sp) {
                      _this21.DersDetaylar.Final = sp.val().Final;
                      _this21.DersDetaylar.Vize = sp.val().Vize;
                      _this21.DersDetaylar.Proje = sp.val().Proje;
                    });

                  case 6:
                    _context13.next = 8;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(Ders, "/Odevler")).once('value', function (sp) {
                      if (sp.exists()) {
                        sp.forEach(function (e) {
                          _this21.DersDetaylar.Odevler.push(e.val());
                        });
                      }
                    });

                  case 8:
                    this.DersDetaylar.Odevler.forEach(function (e) {
                      console.log('odevler son ' + e);
                    });

                  case 9:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        } //////////
        /////////////////
        // dersname

      }, {
        key: "DersdetayUpdate",
        value: function DersdetayUpdate() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
            var final, vize, proje, formodevler, i, _i5;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    final = jquery__WEBPACK_IMPORTED_MODULE_3__('#ufinal').val().toString();
                    vize = jquery__WEBPACK_IMPORTED_MODULE_3__('#uvize').val().toString();
                    proje = jquery__WEBPACK_IMPORTED_MODULE_3__('#uproje').val().toString();

                    if (proje == '0' || proje == '') {
                      jquery__WEBPACK_IMPORTED_MODULE_3__('#uproje').hide();
                    }

                    formodevler = jquery__WEBPACK_IMPORTED_MODULE_3__('.Odevler');
                    console.log('Ders name' + this.dersname);
                    console.log('final' + final);
                    console.log('vize' + vize);
                    console.log('proje ' + proje);
                    console.log('odevler');

                    for (i = 0; i < formodevler.length; i++) {
                      console.log(formodevler.eq(i).val());
                    } /////////////////////database update/////////


                    this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(this.dersname, "/Final")).set(final);
                    _context14.next = 14;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(this.dersname, "/Vize")).set(vize);

                  case 14:
                    _context14.next = 16;
                    return this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(this.dersname, "/Proje")).set(proje);

                  case 16:
                    for (_i5 = 0; _i5 < formodevler.length; _i5++) {
                      this.fb.database.ref("table/".concat(this.st.get_date(), "/").concat(this.st.get_Ogretim_Turu(), "/").concat(this.st.get_Donem(), "/").concat(this.dersname, "/Odevler/").concat(_i5)).set(formodevler.eq(_i5).val());
                    }

                  case 17:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }]);

      return AcilacakDerslerComponent;
    }();

    AcilacakDerslerComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
      }, {
        type: src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_5__["StudentsecService"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_6__["TeachersecService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    AcilacakDerslerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acilacak-dersler',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acilacak-dersler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style.css */
      "./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/style.css")).default]
    })], AcilacakDerslerComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/style.css":
  /*!****************************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/style.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemIdarikismiMenuIdariAcilacakDerslerStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-grid-tile {\r\n    background: lightblue;\r\n  }\r\n  \r\n  .Ac\r\n  {\r\nmargin: 20px;\r\n  }\r\n  \r\n  .scclass{\r\n    overflow: scroll;\r\n  }\r\n  \r\n  #containerf>*\r\n  {\r\n    margin: 20px;\r\n   \r\n  }\r\n  \r\n  .matclass{\r\ncursor: pointer;\r\nposition: relative;\r\ntop: 5px;\r\n  }\r\n  \r\n  .Ac2\r\n  {\r\nmargin: 20px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL2lkYXJpa2lzbWkvbWVudS1pZGFyaS9hY2lsYWNhay1kZXJzbGVyL3N0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBOztBQUVGLFlBQVk7RUFDVjs7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFDQTs7SUFFRSxZQUFZOztFQUVkOztFQUNBO0FBQ0YsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixRQUFRO0VBQ047O0VBR0E7O0FBRUYsWUFBWTtFQUNWIiwiZmlsZSI6InNyYy9hcHAvYW5hc2lzdGVtL2lkYXJpa2lzbWkvbWVudS1pZGFyaS9hY2lsYWNhay1kZXJzbGVyL3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgbWF0LWdyaWQtdGlsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbiAgfVxyXG5cclxuICAuQWNcclxuICB7XHJcbm1hcmdpbjogMjBweDtcclxuICB9XHJcbiAgLnNjY2xhc3N7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIH1cclxuICAjY29udGFpbmVyZj4qXHJcbiAge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgLm1hdGNsYXNze1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxudG9wOiA1cHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLkFjMlxyXG4gIHtcclxubWFyZ2luOiAyMHB4O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemIdarikismiMenuIdariMenuIdariComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9pZGFyaWtpc21pL21lbnUtaWRhcmkvbWVudS1pZGFyaS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.ts ***!
    \*************************************************************************/

  /*! exports provided: MenuIdariComponent */

  /***/
  function srcAppAnasistemIdarikismiMenuIdariMenuIdariComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuIdariComponent", function () {
      return MenuIdariComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _idarikismi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../idarikismi.component */
    "./src/app/anasistem/idarikismi/idarikismi.component.ts");

    var A = function A(id, Avg, kredi, O) {
      _classCallCheck(this, A);

      this.id = id;
      this.kredi = kredi;
      this.Avg = Avg;
      this.Ogretim = O;
    }; /////////////


    var genel_hesap = function genel_hesap() {
      _classCallCheck(this, genel_hesap);
    };

    var MenuIdariComponent = /*#__PURE__*/function () {
      function MenuIdariComponent(db, std, router, route, zone, http) {
        _classCallCheck(this, MenuIdariComponent);

        this.db = db;
        this.std = std;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.http = http;
        this.Donem = [{
          value: 'GUZ'
        }, {
          value: 'BAHAR'
        }];
        this.s3 = [];
        this.s2 = [];
        this.s = [];
        this.kt = [];
        this.s33 = [];
        this.kb = 0;
        this.sem = [];
        this.List = [];
      }

      _createClass(MenuIdariComponent, [{
        key: "f1",
        value: function f1() {
          var _this22 = this;

          var c = 0;
          var yilc = 0;
          var donemc = 0;
          var ogretimc = 0;
          var numarac = 0;
          return new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (obs) {
            _this22.P = _this22.db.database.ref('Siciller').once('value', function (sc) {
              c++;
              sc.forEach(function (yil) {
                yilc++;
                console.log('yil ' + yil.key); //yil

                yil.forEach(function (donem) {
                  console.log('Donem ' + donem.key); // Donem

                  donem.forEach(function (Ogretim) {
                    donemc++;
                    console.log('Ogretim ' + Ogretim.key); // Ogretim

                    Ogretim.forEach(function (numara) {
                      ogretimc++;
                      console.log('numara ' + numara.key); // numara

                      _this22.s3.push(numara.key);

                      _this22.db.database.ref("Siciller/".concat(yil.key, "/").concat(donem.key, "/").concat(Ogretim.key, "/").concat(numara.key, "/Average")).once('value', function (sp2) {
                        if (sp2.exists()) obs.next(new A(numara.key, sp2.val().Genel_Ortalama, sp2.val().Toplam_Kredi, Ogretim.key));
                      });
                    });
                  });
                });
              });
            }).catch(function (e) {});
          });
        }
      }, {
        key: "fs33",
        value: function fs33(u) {
          if (this.kb === 0 && u[0] !== undefined) {
            this.s33.push(u);
            console.log('from func ' + u['160201099']);
            this.kb++;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
            var _this23 = this;

            var yb;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    yb = jquery__WEBPACK_IMPORTED_MODULE_2__('#But');
                    this.db.database.ref('But').once('value', function (sp) {
                      if (sp.exists()) {
                        if (sp.val() === 'true') {
                          yb.text('Bütünleme Kapat');
                        } else {
                          yb.text('Bütünleme Başlat');
                        }

                        ;
                      } else {
                        yb.text('Bütünleme Başlat');
                      }

                      ;
                    });
                    console.log('static from ' + _idarikismi_component__WEBPACK_IMPORTED_MODULE_8__["IdarikismiComponent"].id);

                    if (_idarikismi_component__WEBPACK_IMPORTED_MODULE_8__["IdarikismiComponent"].id === undefined) {
                      this.router.navigate(['../'], {
                        relativeTo: this.route
                      });
                    } //////////////////////////////////////


                    this.db.database.ref('secim').once('value', function (p) {
                      if (!p.exists()) {
                        _this23.db.database.ref('secim').set(false);

                        jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').text('Ders Secim Acma');
                      } else {
                        if (p.val() === false) {
                          jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').text('Ders Secim Acma');
                        } else {
                          jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').text('Ders Secim Kapatma');
                        }
                      }
                    });

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "get_Donem",
        value: function get_Donem(i) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    console.log('aloooooo' + i);
                    _context16.next = 3;
                    return this.db.database.ref('AlinmisDersler').remove();

                  case 3:
                    _context16.next = 5;
                    return this.db.database.ref('Averages').remove();

                  case 5:
                    _context16.next = 7;
                    return this.db.database.ref('Donem').set(i);

                  case 7:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "secimacma",
        value: function secimacma() {
          var _this24 = this;

          this.zone.run(function () {
            var t = jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').text();
            console.log(t);

            if (t === 'Ders Secim Acma') {
              console.log('girdi');
              jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').text('Ders Secim Kapatma');

              _this24.db.database.ref('secim').set(true);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').text('Ders Secim Acma');

              _this24.db.database.ref('secim').set(false);
            }
          });
        }
      }, {
        key: "Hesap",
        value: function Hesap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.get_semesters();

                  case 2:
                    _context17.next = 4;
                    return this.sonhesap('BAHAR', 'IOgretim');

                  case 4:
                    _context17.next = 6;
                    return this.sonhesap('GUZ', 'IOgretim');

                  case 6:
                    _context17.next = 8;
                    return this.sonhesap('BAHAR', 'IIOgretim');

                  case 8:
                    _context17.next = 10;
                    return this.sonhesap('GUZ', 'IIOgretim');

                  case 10:
                    _context17.next = 12;
                    return this.Genel_Ortalama_donem_Ortalamalardan_getirme('GUZ', 'IOgretim');

                  case 12:
                    _context17.next = 14;
                    return this.Genel_Ortalama_donem_Ortalamalardan_getirme('BAHAR', 'IOgretim');

                  case 14:
                    _context17.next = 16;
                    return this.Genel_Ortalama_donem_Ortalamalardan_getirme('GUZ', 'IIOgretim');

                  case 16:
                    _context17.next = 18;
                    return this.Genel_Ortalama_donem_Ortalamalardan_getirme('BAHAR', 'IIOgretim');

                  case 18:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "get_semesters",
        value: function get_semesters() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
            var _this25 = this;

            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    this.sem.length = 0; ////////////////////get all semisters

                    _context18.next = 3;
                    return this.db.database.ref('Siciller').once('value', function (sp) {
                      sp.forEach(function (e) {
                        if (e.key !== 'Avgsler') {
                          // console.log(e.key);
                          _this25.sem.push(e.key); //2019-2020 ...

                        }
                      });
                    });

                  case 3:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "sonhesap",
        value: function sonhesap(donem, ogretim) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
            var _this26 = this;

            var tpkredi, Genel_Ortalamam;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    tpkredi = 0;
                    Genel_Ortalamam = 0;
                    this.sem.forEach(function (r) {
                      /////////
                      _this26.db.database.ref("Siciller/".concat(r, "/").concat(donem, "/").concat(ogretim)).once('value', function (sp) {
                        sp.forEach(function (e) {
                          var id = e.key; //console.log('id= '+id);

                          var c = 0;
                          e.forEach(function (e2) {
                            // console.log('numchild '+e.numChildren());
                            c++;

                            if (e2.key !== 'Average' && e2.val().Harf !== "" || e2.val().Harf !== undefined) {
                              // console.log(e2.val().Kredi);
                              tpkredi += Number(e2.val().Kredi);
                              Genel_Ortalamam += Number(e2.val().Kredi * e2.val().Harf_etkisi); //console.log('kredies  '+tpkredi);
                            }

                            if (c == e.numChildren()) {
                              var ojson = {
                                'Genel_Ortalama': Genel_Ortalamam,
                                'Toplam_Kredi': tpkredi
                              };

                              _this26.db.database.ref("Siciller/".concat(r, "/").concat(donem, "/").concat(ogretim, "/").concat(id, "/Average")).set(ojson); //console.log(tpkredi+'  '+Genel_Ortalamam);


                              tpkredi = 0;
                              Genel_Ortalamam = 0;
                            }
                          });
                        });
                      });
                    });

                  case 3:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "Genel_Ortalama_donem_Ortalamalardan_getirme",
        value: function Genel_Ortalama_donem_Ortalamalardan_getirme(donem, ogretim) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
            var _this27 = this;

            var student_numbers, donemlik, i, tpkredi, tpx, _loop, j;

            return regeneratorRuntime.wrap(function _callee20$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    student_numbers = [];
                    donemlik = ['GUZ', 'BAHAR'];
                    i = 0;

                  case 3:
                    if (!(i < this.sem.length)) {
                      _context23.next = 9;
                      break;
                    }

                    _context23.next = 6;
                    return this.db.database.ref("Siciller/".concat(this.sem[i], "/").concat(donem, "/").concat(ogretim)).once('value', function (sp) {
                      if (sp.exists()) sp.forEach(function (e) {
                        var id = e.key; // console.log('id '+id);

                        student_numbers.push(id);
                      });
                    });

                  case 6:
                    i++;
                    _context23.next = 3;
                    break;

                  case 9:
                    // student_numbers.forEach(r=>{
                    //   console.log('element '+r);
                    // });
                    tpkredi = 0;
                    tpx = 0;
                    _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(j) {
                      var _loop2, _i6;

                      return regeneratorRuntime.wrap(function _loop$(_context22) {
                        while (1) {
                          switch (_context22.prev = _context22.next) {
                            case 0:
                              _loop2 = /*#__PURE__*/regeneratorRuntime.mark(function _loop2(_i6) {
                                var _loop3, c, yaklasim, avgsobj;

                                return regeneratorRuntime.wrap(function _loop2$(_context21) {
                                  while (1) {
                                    switch (_context21.prev = _context21.next) {
                                      case 0:
                                        _loop3 = /*#__PURE__*/regeneratorRuntime.mark(function _loop3(c) {
                                          return regeneratorRuntime.wrap(function _loop3$(_context20) {
                                            while (1) {
                                              switch (_context20.prev = _context20.next) {
                                                case 0:
                                                  _context20.next = 2;
                                                  return _this27.db.database.ref("Siciller/".concat(_this27.sem[_i6], "/").concat(donemlik[c], "/").concat(ogretim, "/").concat(student_numbers[j])).once('value', function (sp) {
                                                    if (sp.exists()) sp.forEach(function (e) {
                                                      if (e.key === 'Average') // console.log('id '+ student_numbers[j]+' - '+e.val().Genel_Ortalama+' '+e.val().Toplam_Kredi);
                                                        {
                                                          tpkredi += Number(e.val().Toplam_Kredi);
                                                          console.log("Siciller/".concat(_this27.sem[_i6], "/").concat(donemlik[c], "/").concat(ogretim, "/").concat(student_numbers[j]));
                                                          console.log('every donem kredisi ' + e.val().Toplam_Kredi);
                                                          tpx += Number(e.val().Genel_Ortalama);
                                                        }
                                                    });
                                                  });

                                                case 2:
                                                case "end":
                                                  return _context20.stop();
                                              }
                                            }
                                          }, _loop3);
                                        });
                                        c = 0;

                                      case 2:
                                        if (!(c < donemlik.length)) {
                                          _context21.next = 7;
                                          break;
                                        }

                                        return _context21.delegateYield(_loop3(c), "t0", 4);

                                      case 4:
                                        c++;
                                        _context21.next = 2;
                                        break;

                                      case 7:
                                        console.log('toplam kredi ' + tpkredi + ' Genel carpim' + tpx);
                                        yaklasim = Math.round(tpx / tpkredi * 100) / 100;
                                        avgsobj = {
                                          'Genel_Ort': yaklasim,
                                          'avg': tpx,
                                          'kredi': tpkredi
                                        };

                                        _this27.db.database.ref("Siciller/Avgsler/".concat(ogretim, "/").concat(student_numbers[j])).set(avgsobj);

                                        tpkredi = 0;
                                        tpx = 0;

                                      case 13:
                                      case "end":
                                        return _context21.stop();
                                    }
                                  }
                                }, _loop2);
                              });
                              _i6 = 0;

                            case 2:
                              if (!(_i6 < _this27.sem.length)) {
                                _context22.next = 7;
                                break;
                              }

                              return _context22.delegateYield(_loop2(_i6), "t0", 4);

                            case 4:
                              _i6++;
                              _context22.next = 2;
                              break;

                            case 7:
                            case "end":
                              return _context22.stop();
                          }
                        }
                      }, _loop);
                    });
                    j = 0;

                  case 13:
                    if (!(j < student_numbers.length)) {
                      _context23.next = 18;
                      break;
                    }

                    return _context23.delegateYield(_loop(j), "t0", 15);

                  case 15:
                    j++;
                    _context23.next = 13;
                    break;

                  case 18:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "But",
        value: function But() {
          var _this28 = this;

          var yb = jquery__WEBPACK_IMPORTED_MODULE_2__('#But').text();
          this.db.database.ref('But').once('value', function (sp) {
            if (sp.exists()) {
              console.log(sp.val());

              if (yb === 'Bütünleme Başlat') {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#But').text('Bütünleme Kapat');

                _this28.db.database.ref('But').set('true');
              } else {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#But').text('Bütünleme Başlat');

                _this28.db.database.ref('But').set('false');
              }
            } else if (!sp.exists()) {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#But').text('Bütünleme Kapat');

              _this28.db.database.ref('But').set('true');
            }
          });
        }
      }]);

      return MenuIdariComponent;
    }();

    MenuIdariComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_4__["StudentsecService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    MenuIdariComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-idari',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu-idari.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu-idari.component.scss */
      "./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.scss")).default]
    })], MenuIdariComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemIdarikismiMenuIdariOgretimOgretimComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9pZGFyaWtpc21pL21lbnUtaWRhcmkvb2dyZXRpbS9vZ3JldGltLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.ts ***!
    \******************************************************************************/

  /*! exports provided: OgretimComponent */

  /***/
  function srcAppAnasistemIdarikismiMenuIdariOgretimOgretimComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OgretimComponent", function () {
      return OgretimComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");

    var OgretimComponent = /*#__PURE__*/function () {
      function OgretimComponent(st, router, route, db) {
        _classCallCheck(this, OgretimComponent);

        this.st = st;
        this.router = router;
        this.route = route;
        this.db = db;
      }

      _createClass(OgretimComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          var d = '';
          this.db.database.ref('Donem').once('value', function (sp) {
            _this29.st.set_Donem(sp.val());
          });
        }
      }, {
        key: "fn",
        value: function fn(OT) {
          var _this30 = this;

          this.st.set_Ogretim_Turu(OT);
          var t = setInterval(function () {
            if (_this30.st.get_Donem() !== undefined) {
              // clearInterval(t);
              return _this30.router.navigate(['acilacakdersler'], {
                relativeTo: _this30.route
              });
            }
          }, 10);
        }
      }]);

      return OgretimComponent;
    }();

    OgretimComponent.ctorParameters = function () {
      return [{
        type: src_app_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_2__["StudentsecService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
      }];
    };

    OgretimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ogretim',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ogretim.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ogretim.component.scss */
      "./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.scss")).default]
    })], OgretimComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/idarikismi/style.css":
  /*!************************************************!*\
    !*** ./src/app/anasistem/idarikismi/style.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemIdarikismiStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table\r\n{\r\n    border: 1px solid red;\r\n    border-radius: 20%;\r\n}\r\n#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px;\r\n    width: 80%;\r\n    height: 307px;\r\n    margin: 100px;\r\n}\r\n#ab\r\n{\r\n    margin-top: -50px;\r\n    background: white;\r\n    width: 190px;\r\n}\r\n#academic\r\n{\r\n    background: url('akademic.jpg');\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL2lkYXJpa2lzbWkvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLCtCQUFzRDtJQUN0RCxXQUFXO0lBQ1gsWUFBWTs7QUFFaEIiLCJmaWxlIjoic3JjL2FwcC9hbmFzaXN0ZW0vaWRhcmlraXNtaS9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbn1cclxuI3Jjb3JuZXJzMiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzczQUQyMTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAzMDdweDtcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbn1cclxuI2FiXHJcbntcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbn1cclxuI2FjYWRlbWljXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ha2FkZW1pYy5qcGcnKTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG5cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/myservice.service.ts":
  /*!************************************************!*\
    !*** ./src/app/anasistem/myservice.service.ts ***!
    \************************************************/

  /*! exports provided: MyserviceService */

  /***/
  function srcAppAnasistemMyserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyserviceService", function () {
      return MyserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MyserviceService = function MyserviceService() {
      _classCallCheck(this, MyserviceService);
    };

    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MyserviceService);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciisleri.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciisleri.component.ts ***!
    \********************************************************************/

  /*! exports provided: OgrenciisleriComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciisleriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OgrenciisleriComponent", function () {
      return OgrenciisleriComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    var OgrenciisleriComponent_1;

    var OgrenciisleriComponent = OgrenciisleriComponent_1 = /*#__PURE__*/function () {
      function OgrenciisleriComponent(db, router, route, zone, cookiess) {
        var _this31 = this;

        _classCallCheck(this, OgrenciisleriComponent);

        this.db = db;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.cookiess = cookiess;
        this.options = [];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.filteredOptions = this.name.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
          return _this31._filter(value);
        }));
      }

      _createClass(OgrenciisleriComponent, [{
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          OgrenciisleriComponent_1.id = undefined;
          this.cookies = this.cookiess.getAll();

          for (var key in this.cookies) {
            if (key[0] === 'i') {
              this.options.push(key.substring(1, key.length).toString());
            }
          }
        }
      }, {
        key: "controlletme",
        value: function controlletme() {
          var _this32 = this;

          this.db.database.ref("ogrenciisleri/".concat(this.name.value)).once('value', function (sp) {
            if (sp.exists()) {
              if (sp.val().password === _this32.password.value) {
                _this32.zone.run(function () {
                  if (_this32.cookiess.check(_this32.name.value) === false) {
                    _this32.cookiess.set('i' + _this32.name.value, _this32.password.value, 100000, '/');
                  }

                  OgrenciisleriComponent_1.id = _this32.password.value;

                  _this32.router.navigate(['ogrenciIsleriMenue'], {
                    relativeTo: _this32.route
                  });
                });
              }
            }
          });
          console.log(this.name.value + ' ' + this.password.value);
        }
      }, {
        key: "fcall",
        value: function fcall(op) {
          this.password.setValue(this.cookies['i' + op]);
        }
      }]);

      return OgrenciisleriComponent;
    }();

    OgrenciisleriComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    OgrenciisleriComponent = OgrenciisleriComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ogrenciisleri',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./isler.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/isler.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style.css */
      "./src/app/anasistem/ogrenciisleri/style.css")).default]
    })], OgrenciisleriComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: OgrenciislerimenueComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrenciislerimenueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OgrenciislerimenueComponent", function () {
      return OgrenciislerimenueComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/esm2015/layout.js");
    /* harmony import */


    var _ogrenciisleri_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ogrenciisleri.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciisleri.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var OgrenciislerimenueComponent = /*#__PURE__*/function () {
      function OgrenciislerimenueComponent(changeDetectorRef, media, router, route, zone) {
        _classCallCheck(this, OgrenciislerimenueComponent);

        this.router = router;
        this.route = route;
        this.zone = zone;
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) {
          return h.test(window.location.host);
        });
        this.fillerNav = Array.from({
          length: 50
        }, function (_, i) {
          return "Nav Item ".concat(i + 1);
        });
        this.fillerContent = Array.from({
          length: 50
        }, function () {
          return "";
        });

        if (_ogrenciisleri_component__WEBPACK_IMPORTED_MODULE_3__["OgrenciisleriComponent"].id === undefined) {
          this.router.navigate(['../'], {
            relativeTo: this.route
          });
        }

        this.mobileQuery = media.matchMedia('(max-width: 600px)');

        this.mobileQueryListener = function () {
          return changeDetectorRef.detectChanges();
        };

        this.mobileQuery.addListener(this.mobileQueryListener);
      }

      _createClass(OgrenciislerimenueComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mobileQuery.removeListener(this.mobileQueryListener);
        }
      }]);

      return OgrenciislerimenueComponent;
    }();

    OgrenciislerimenueComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    OgrenciislerimenueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ogrenciislerimenue',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ogrenciislerimenue.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenavbar.css */
      "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/sidenavbar.css")).default]
    })], OgrenciislerimenueComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: BorcComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriBorcBorcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorcComponent", function () {
      return BorcComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BorcComponent = /*#__PURE__*/function () {
      function BorcComponent(router, activerouter) {
        _classCallCheck(this, BorcComponent);

        this.router = router;
        this.activerouter = activerouter;
        this.f('Borcunuz=' + 50 + ' Tl');
        this.f2();
      }

      _createClass(BorcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "f",
        value: function f(s) {
          alert(s);
        }
      }, {
        key: "f2",
        value: function f2() {
          this.router.navigate(['../'], {
            relativeTo: this.activerouter
          });
        }
      }]);

      return BorcComponent;
    }();

    BorcComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    BorcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-borc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./borc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./borc.css */
      "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.css")).default]
    })], BorcComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.css":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.css ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriBorcBorcCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9vZ3JlbmNpaXNsZXJpL29ncmVuY2lpc2xlcmltZW51ZS9vZ3JlbmNpbnVtYXJhc2kvb2dyZW5jaWJpbGdpbGVyaS9ib3JjL2JvcmMuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: IslerserviceService */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriIslerserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IslerserviceService", function () {
      return IslerserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var IslerserviceService = /*#__PURE__*/function () {
      function IslerserviceService(router, route, zone) {
        _classCallCheck(this, IslerserviceService);

        this.router = router;
        this.route = route;
        this.zone = zone;
      }

      _createClass(IslerserviceService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this33 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (obs) {
            if (_this33.get_id() === undefined) {
              obs.next(false);

              _this33.zone.run(function () {
                _this33.router.navigate(['anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi']);
              });
            } else {
              obs.next(true);
            }
          });
        }
      }, {
        key: "set_id",
        value: function set_id(id) {
          this.id = id;
        }
      }, {
        key: "set_Ogretim",
        value: function set_Ogretim(ogretim) {
          this.Ogretim = ogretim;
        }
      }, {
        key: "get_id",
        value: function get_id() {
          return this.id;
        }
      }, {
        key: "get_ogretim",
        value: function get_ogretim() {
          return this.Ogretim;
        }
      }]);

      return IslerserviceService;
    }();

    IslerserviceService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    IslerserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], IslerserviceService);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.scss":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.scss ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriOgrencibilgileriComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9vZ3JlbmNpaXNsZXJpL29ncmVuY2lpc2xlcmltZW51ZS9vZ3JlbmNpbnVtYXJhc2kvb2dyZW5jaWJpbGdpbGVyaS9vZ3JlbmNpYmlsZ2lsZXJpLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: OgrencibilgileriComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriOgrencibilgileriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OgrencibilgileriComponent", function () {
      return OgrencibilgileriComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../myservice.service */
    "./src/app/anasistem/myservice.service.ts");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/auth */
    "./src/app/anasistem/node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/firestore */
    "./src/app/anasistem/node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _islerservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./islerservice.service */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service.ts");

    var OgrencibilgileriComponent = /*#__PURE__*/function () {
      function OgrencibilgileriComponent(ts, db, router, activerouter, Is) {
        var _this34 = this;

        _classCallCheck(this, OgrencibilgileriComponent);

        // console.log(ts.id);
        this.ts = ts;
        this.db = db;
        this.router = router;
        this.activerouter = activerouter;
        this.Is = Is;
        this.db.database.ref("Ogrenciler/".concat(this.Is.get_id())).once('value', function (sp) {
          console.log('Ogretim ' + sp.val().Ogretim);

          _this34.Is.set_Ogretim(sp.val().Ogretim);
        });
      }

      _createClass(OgrencibilgileriComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.Is.get_id());
        }
      }, {
        key: "geri",
        value: function geri() {
          this.router.navigate(['../'], {
            relativeTo: this.activerouter
          });
        }
      }, {
        key: "extra",
        value: function extra() {
          alert('ikinci donemde yasamaya devam etsem devam ederim');
        }
      }, {
        key: "sonucular",
        value: function sonucular() {
          var _this35 = this;

          var t = setInterval(function () {
            if (_this35.Is.get_ogretim() !== undefined) {
              clearInterval(t);
              return _this35.router.navigate(['sonuclar'], {
                relativeTo: _this35.activerouter
              });
            }
          }, 10);
        }
      }]);

      return OgrencibilgileriComponent;
    }();

    OgrencibilgileriComponent.ctorParameters = function () {
      return [{
        type: _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _islerservice_service__WEBPACK_IMPORTED_MODULE_7__["IslerserviceService"]
      }];
    };

    OgrencibilgileriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ogrencibilgileri',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ogrencibilgileri.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ogrencibilgileri.component.scss */
      "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.scss")).default]
    })], OgrencibilgileriComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: SonuclarComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriSonuclarSonuclarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SonuclarComponent", function () {
      return SonuclarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _islerservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../islerservice.service */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service.ts"); /////////////////


    var siciller = function siciller(ders, kredi, harf, donem) {
      _classCallCheck(this, siciller);

      this.ders = ders;
      this.kredi = kredi;
      this.harf = harf;
      this.donem = donem;
    };

    var SonuclarComponent = /*#__PURE__*/function () {
      function SonuclarComponent(router, activerouter, db, Is) {
        _classCallCheck(this, SonuclarComponent);

        this.router = router;
        this.activerouter = activerouter;
        this.db = db;
        this.Is = Is;
        this.donemler = [];
        this.sc = [];
        this.years = []; ///get years

        this.TpOrtalam = '';
        this.TpKredi = '';
        this.Dortala = [];
        this.Dkredi = [];
      }

      _createClass(SonuclarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return this.get_Genel_Ortalama();

                  case 2:
                    _context24.next = 4;
                    return this.get_years();

                  case 4:
                    _context24.next = 6;
                    return this.get_Data('GUZ');

                  case 6:
                    _context24.next = 8;
                    return this.get_Data('BAHAR');

                  case 8:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "get_Ogretim",
        value: function get_Ogretim() {
          var ogretim = '';

          if (this.Is.get_id()[5] === '1') {
            ogretim = 'IOgretim';
          } else {
            ogretim = 'IIOgretim';
          }

          return ogretim;
        }
      }, {
        key: "get_Genel_Ortalama",
        value: function get_Genel_Ortalama() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
            var _this36 = this;

            var ogrt;
            return regeneratorRuntime.wrap(function _callee22$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    ogrt = this.get_Ogretim();
                    console.log("Siciller/Avgsler/".concat(ogrt, "/").concat(this.Is.get_id()));
                    _context25.next = 4;
                    return this.db.database.ref("Siciller/Avgsler/".concat(ogrt, "/").concat(this.Is.get_id())).once('value', function (sp) {
                      console.log(sp.val().kredi);
                      _this36.TpKredi += sp.val().kredi;
                      _this36.TpOrtalam += sp.val().Genel_Ort;
                    });

                  case 4:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee22, this);
          }));
        }
      }, {
        key: "get_years",
        value: function get_years() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
            var _this37 = this;

            return regeneratorRuntime.wrap(function _callee23$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    _context26.next = 2;
                    return this.db.database.ref('Siciller').once('value', function (sp) {
                      sp.forEach(function (e) {
                        if (e.key != 'Avgsler') _this37.years.push(e.key);
                      });
                    });

                  case 2:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "get_Data",
        value: function get_Data(donem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
            var _this38 = this;

            return regeneratorRuntime.wrap(function _callee24$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    ////////////////////////////////////////////////////////
                    //////////////////////////////////////////////////////////////////////
                    this.years.forEach(function (y) {
                      _this38.db.database.ref("Siciller/".concat(y, "/").concat(donem, "/").concat(_this38.get_Ogretim(), "/").concat(_this38.Is.get_id())).once('value', function (sp) {
                        _this38.donemler.push(donem);

                        sp.forEach(function (e) {
                          if (e.key === 'Average') {
                            var db = e.val().Genel_Ortalama;
                            var tpk = e.val().Toplam_Kredi;
                            var tpp = Math.round(db / tpk * 100) / 100;

                            _this38.Dortala.push(tpp);

                            _this38.Dkredi.push(tpk);
                          }

                          if (e.val().Harf !== '' && e.val().Harf !== undefined) {
                            //console.log(e.key);
                            _this38.sc.push(new siciller(e.key, e.val().Kredi, e.val().Harf, donem));
                          }
                        });
                      });
                    });

                  case 1:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "geri",
        value: function geri() {
          this.router.navigate(['../../'], {
            relativeTo: this.activerouter
          });
        }
      }, {
        key: "extra",
        value: function extra() {
          alert('ikinci donemde yasamaya devam etsem devam ederim');
        }
      }, {
        key: "printf",
        value: function printf() {
          window.print();
        }
      }]);

      return SonuclarComponent;
    }();

    SonuclarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _islerservice_service__WEBPACK_IMPORTED_MODULE_4__["IslerserviceService"]
      }];
    };

    SonuclarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sonuclar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sonuclar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sonuclar.css */
      "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.css")).default]
    })], SonuclarComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.css":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.css ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencibilgileriSonuclarSonuclarCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tb {\r\n    border-radius: 20%;\r\n    border-collapse: separate; \r\n    border: 1px solid black;\r\n    width: auto;\r\n    padding: 10px;\r\n    margin-left: 20px;\r\n    margin-top: 0px;\r\n    /* text-align: center; */\r\n}\r\n*{\r\n    text-align: center;\r\n}\r\ntd,tr {\r\n   /* text-align: center; */\r\n    width: auto;\r\n    padding: 20px;    \r\n  \r\n    \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL29ncmVuY2lpc2xlcmkvb2dyZW5jaWlzbGVyaW1lbnVlL29ncmVuY2ludW1hcmFzaS9vZ3JlbmNpYmlsZ2lsZXJpL3NvbnVjbGFyL3NvbnVjbGFyLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0dBQ0csd0JBQXdCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhOzs7QUFHakIiLCJmaWxlIjoic3JjL2FwcC9hbmFzaXN0ZW0vb2dyZW5jaWlzbGVyaS9vZ3JlbmNpaXNsZXJpbWVudWUvb2dyZW5jaW51bWFyYXNpL29ncmVuY2liaWxnaWxlcmkvc29udWNsYXIvc29udWNsYXIuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRiIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7IFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG4qe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRkLHRyIHtcclxuICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4OyAgICBcclxuICBcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencinumarasiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9vZ3JlbmNpaXNsZXJpL29ncmVuY2lpc2xlcmltZW51ZS9vZ3JlbmNpbnVtYXJhc2kvb2dyZW5jaW51bWFyYXNpLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: OgrencinumarasiComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueOgrencinumarasiOgrencinumarasiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OgrencinumarasiComponent", function () {
      return OgrencinumarasiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../myservice.service */
    "./src/app/anasistem/myservice.service.ts");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _ogrencibilgileri_islerservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ogrencibilgileri/islerservice.service */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service.ts");

    var Shirt = function Shirt() {
      _classCallCheck(this, Shirt);
    };

    var OgrencinumarasiComponent = /*#__PURE__*/function () {
      function OgrencinumarasiComponent(r, route, ts, db, zone, Is) {
        _classCallCheck(this, OgrencinumarasiComponent);

        this.r = r;
        this.route = route;
        this.ts = ts;
        this.db = db;
        this.zone = zone;
        this.Is = Is;
      }

      _createClass(OgrencinumarasiComponent, [{
        key: "database_mi",
        value: function database_mi() {
          var _this39 = this;

          var id = jquery__WEBPACK_IMPORTED_MODULE_4__('#exampleInputEmail1').val().toString();
          console.log(id);

          if (id.length > 0) {
            var database = this.db.database.ref().child('Ogrenciler').child(id.toString());
            database.on('value', function (snapshot) {
              // if (snapshot.val() === null)
              //     console.log('true');
              //   console.log(snapshot.val());
              _this39.zone.run(function () {
                if (snapshot.val() !== null) {
                  _this39.r.navigate(['./ogrencibilgileri/'], {
                    relativeTo: _this39.route
                  }).then(function () {//   location.reload();
                  });
                } else {
                  console.log('false');
                  jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').text('Ogrenci numarasi yanlis');
                  jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').show();
                  jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').addClass('alert alert-danger').removeClass('alert alert-success'); // return false;
                }
              });
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').hide();
          this.Is.set_id(undefined);
        }
      }, {
        key: "controlStudentId",
        value: function controlStudentId() {
          if (jquery__WEBPACK_IMPORTED_MODULE_4__('#exampleInputEmail1').val().toString().length === 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').addClass('alert alert-danger').removeClass('alert alert-success');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').text('bos alani birakamazsiniz');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').show();
            return false;
          } else if (this.kontrol() === 2 && jquery__WEBPACK_IMPORTED_MODULE_4__('#exampleInputEmail1').val().toString().length !== 0) {
            return true;
          }
        }
      }, {
        key: "kontrol",
        value: function kontrol() {
          var id = jquery__WEBPACK_IMPORTED_MODULE_4__('#exampleInputEmail1').val();
          this.Is.set_id(id);

          if (id.toString().length < 9 || id.toString().length > 9 && id.toString().length !== 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').show();
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').addClass('alert alert-danger').removeClass('alert alert-success');
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').text(' Öğrenci Nümarası rakamlarin sayisi 9 dur');
            return 1;
          } else if (id.toString().length === 9 && id.toString().length !== 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('#danger').addClass('alert alert-success').removeClass('alert alert-danger').text('Okey!!!');
            return 2;
          }
        }
      }]);

      return OgrencinumarasiComponent;
    }();

    OgrencinumarasiComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ogrencibilgileri_islerservice_service__WEBPACK_IMPORTED_MODULE_6__["IslerserviceService"]
      }];
    };

    OgrencinumarasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ogrencinumarasi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ogrencinumarasi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ogrencinumarasi.component.scss */
      "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.scss")).default]
    })], OgrencinumarasiComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/sidenavbar.css":
  /*!***************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/sidenavbar.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueSidenavbarCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n}\r\n\r\nh1.example-app-name {\r\n    margin-left: 8px;\r\n}\r\n\r\n.example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    -webkit-box-flex: 1;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.yenikayit\r\n{\r\n    background-image: url('yenikayit.png');\r\n    image-rendering: high-quality;\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n   background-size: 7%;\r\ndisplay: block;\r\n    position: relative;\r\nright: 10px;\r\n}\r\n\r\n.belgevermek\r\n{\r\n    background-image: url('book.png');\r\n    image-rendering: high-quality;\r\n    background-position: right;\r\n    background-repeat: no-repeat;\r\n    background-size: 7%;\r\n    display: block;\r\n    position: relative;\r\n    right: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL29ncmVuY2lpc2xlcmkvb2dyZW5jaWlzbGVyaW1lbnVlL3NpZGVuYXZiYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4RUFBOEU7SUFDOUUsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7NEZBQ3dGO0lBQ3hGLG1CQUFPO1lBQVAsT0FBTztBQUNYOztBQUVBO0lBQ0k7aUVBQzZEO0lBQzdELG1CQUFjO1lBQWQsY0FBYztBQUNsQjs7QUFDQTs7SUFFSSxzQ0FBZ0U7SUFDaEUsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiw0QkFBNEI7R0FDN0IsbUJBQW1CO0FBQ3RCLGNBQWM7SUFDVixrQkFBa0I7QUFDdEIsV0FBVztBQUNYOztBQUNBOztJQUVJLGlDQUEyRDtJQUMzRCw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hbmFzaXN0ZW0vb2dyZW5jaWlzbGVyaS9vZ3JlbmNpaXNsZXJpbWVudWUvc2lkZW5hdmJhci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmgxLmV4YW1wbGUtYXBwLW5hbWUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLyogV2hlbiB0aGUgc2lkZW5hdiBpcyBub3QgZml4ZWQsIHN0cmV0Y2ggdGhlIHNpZGVuYXYgY29udGFpbmVyIHRvIGZpbGwgdGhlIGF2YWlsYWJsZSBzcGFjZS4gVGhpc1xyXG4gICAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5leGFtcGxlLWlzLW1vYmlsZSAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIGZpeGVkLCBkb24ndCBjb25zdHJhaW4gdGhlIGhlaWdodCBvZiB0aGUgc2lkZW5hdiBjb250YWluZXIuIFRoaXMgYWxsb3dzIHRoZVxyXG4gICAgICAgYDxib2R5PmAgdG8gYmUgb3VyIHNjcm9sbGluZyBlbGVtZW50IGZvciBtb2JpbGUgbGF5b3V0cy4gKi9cclxuICAgIGZsZXg6IDEgMCBhdXRvO1xyXG59XHJcbi55ZW5pa2F5aXRcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3llbmlrYXlpdC5wbmcnKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogaGlnaC1xdWFsaXR5O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICBiYWNrZ3JvdW5kLXNpemU6IDclO1xyXG5kaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxucmlnaHQ6IDEwcHg7XHJcbn1cclxuLmJlbGdldmVybWVrXHJcbntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ib29rLnBuZycpO1xyXG4gICAgaW1hZ2UtcmVuZGVyaW5nOiBoaWdoLXF1YWxpdHk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDclO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMTBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yenikayit.css":
  /*!*******************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yenikayit.css ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueYeniogrencikayitYenikayitCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\ndiv\r\n{\r\n    width: 100%;\r\n}\r\nmat-form-field\r\n{\r\nfont-size: 20px;\r\n}\r\nmat-option{\r\n/* {background-color: black; */\r\n}\r\nmat-grid-tile {\r\n    /* background: lightblue; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL29ncmVuY2lpc2xlcmkvb2dyZW5jaWlzbGVyaW1lbnVlL3llbmlvZ3JlbmNpa2F5aXQveWVuaWtheWl0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBQ0E7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFFQTtJQUNJLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9vZ3JlbmNpaXNsZXJpL29ncmVuY2lpc2xlcmltZW51ZS95ZW5pb2dyZW5jaWtheWl0L3llbmlrYXlpdC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2XHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkXHJcbntcclxuZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbm1hdC1vcHRpb257XHJcbi8qIHtiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7ICovXHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: YeniogrencikayitComponent */

  /***/
  function srcAppAnasistemOgrenciisleriOgrenciislerimenueYeniogrencikayitYeniogrencikayitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YeniogrencikayitComponent", function () {
      return YeniogrencikayitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! firebase/auth */
    "./src/app/anasistem/node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/firestore */
    "./src/app/anasistem/node_modules/firebase/firestore/dist/index.esm.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var Details = function Details(name, surename, pass, tarih, gender, address, yil, Ogretim) {
      _classCallCheck(this, Details);

      this.name = name;
      this.surename = surename;
      this.pass = pass;
      this.tarih = tarih;
      this.gender = gender;
      this.address = address;
      this.yil = yil;
      this.Ogretim = Ogretim;
    };

    var YeniogrencikayitComponent = /*#__PURE__*/function () {
      function YeniogrencikayitComponent(db, r, activatedRoute) {
        _classCallCheck(this, YeniogrencikayitComponent);

        this.db = db;
        this.r = r;
        this.activatedRoute = activatedRoute;
        this.cinsiyet = [{
          value: 'Erkek'
        }, {
          value: 'Kadın'
        }];
        this.yil = [{
          value: '1'
        }, {
          value: '2'
        }, {
          value: '3'
        }, {
          value: '4'
        }];
        this.sinif = [{
          value: 'IOgretim'
        }, {
          value: 'IIOgretim'
        }];
      }

      _createClass(YeniogrencikayitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ogretim = '';
        }
      }, {
        key: "get_g",
        value: function get_g(i) {
          return this.x = i;
        }
      }, {
        key: "kaydet",
        value: function kaydet() {
          var adres = jquery__WEBPACK_IMPORTED_MODULE_4__('#address').val().toString();
          var name = jquery__WEBPACK_IMPORTED_MODULE_4__('#name').val().toString();
          var surename = jquery__WEBPACK_IMPORTED_MODULE_4__('#surename').val().toString();
          var id = jquery__WEBPACK_IMPORTED_MODULE_4__('#num').val().toString();
          var pass = jquery__WEBPACK_IMPORTED_MODULE_4__('#pwd').val().toString();
          var TarihDogumu = jquery__WEBPACK_IMPORTED_MODULE_4__('#birthdate').val().toString();
          var Gender = this.x;
          var yil = this.y; // alert(TarihDogumu+' '+Gender+' '+yil);

          this.db.database.ref().child('Ogrenciler/' + id).set(new Details(name, surename, pass, TarihDogumu, Gender, adres, yil, this.ogretim));
          alert('yeni kayit oldu!!!');
          this.r.navigate(['../'], {
            relativeTo: this.activatedRoute
          });
        }
      }]);

      return YeniogrencikayitComponent;
    }();

    YeniogrencikayitComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    YeniogrencikayitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-yeniogrencikayit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./yeniogrencikayit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./yenikayit.css */
      "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yenikayit.css")).default]
    })], YeniogrencikayitComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/ogrenciisleri/style.css":
  /*!***************************************************!*\
    !*** ./src/app/anasistem/ogrenciisleri/style.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemOgrenciisleriStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table\r\n{\r\n    border: 1px solid red;\r\n    border-radius: 20%;\r\n}\r\n#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px;\r\n    width: 80%;\r\n    height: 307px;\r\n    margin: 100px;\r\n}\r\n#ab\r\n{\r\n    margin-top: -50px;\r\n    background: white;\r\n    width: 240px;\r\n}\r\n#academic\r\n{\r\n    background: url('student.jpg');\r\n    width: 10px;\r\n    height: 10px;\r\n\r\n}\r\n.navbar-collapse{\r\n        position: relative;\r\n       left: 50px;\r\n    }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL29ncmVuY2lpc2xlcmkvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLDhCQUFxRDtJQUNyRCxXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFFSTtRQUNJLGtCQUFrQjtPQUNuQixVQUFVO0lBQ2IiLCJmaWxlIjoic3JjL2FwcC9hbmFzaXN0ZW0vb2dyZW5jaWlzbGVyaS9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZVxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XHJcbn1cclxuI3Jjb3JuZXJzMiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzczQUQyMTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAzMDdweDtcclxuICAgIG1hcmdpbjogMTAwcHg7XHJcbn1cclxuI2FiXHJcbntcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbn1cclxuI2FjYWRlbWljXHJcbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdHVkZW50LmpwZycpO1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcblxyXG59XHJcblxyXG4gICAgLm5hdmJhci1jb2xsYXBzZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgfVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/anasistem/pagenotfound/pagenotfound.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/anasistem/pagenotfound/pagenotfound.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemPagenotfoundPagenotfoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/pagenotfound/pagenotfound.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/anasistem/pagenotfound/pagenotfound.component.ts ***!
    \******************************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppAnasistemPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

    var PagenotfoundComponent = /*#__PURE__*/function () {
      function PagenotfoundComponent(router) {
        _classCallCheck(this, PagenotfoundComponent);

        this.router = router;
        this.counter = 9;
        this.hat = 120;
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          setInterval(function () {
            if (_this40.counter === 0) _this40.router.navigate(['anasistem']);
            _this40.counter--;

            _this40.animate();
          }, 1000);
        }
      }, {
        key: "animate",
        value: function animate() {
          jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('#konu').animate({
              backgroundColor: 'green'
            }, 500);
            jquery__WEBPACK_IMPORTED_MODULE_3__('#counter').animate({
              opacity: 1,
              fontSize: '+=100'
            }, 1000).animate({
              opacity: 0.8,
              fontSize: '-=100'
            }, 1000);
          });
        }
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pagenotfound',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfound.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/pagenotfound/pagenotfound.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfound.component.scss */
      "./src/app/anasistem/pagenotfound/pagenotfound.component.scss")).default]
    })], PagenotfoundComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiAlinanDerslerAlinanDerslerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L29ncmVuY2lzYXlmYXNpL2FsaW5hbi1kZXJzbGVyL2FsaW5hbi1kZXJzbGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: AlinanDerslerComponent */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiAlinanDerslerAlinanDerslerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlinanDerslerComponent", function () {
      return AlinanDerslerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _studentsec_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _dersdetay_dersdetay_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dersdetay/dersdetay.component */
    "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AlinanDerslerComponent_1;

    var AlinanDerslerComponent = AlinanDerslerComponent_1 = /*#__PURE__*/function () {
      function AlinanDerslerComponent(fb, st, dialog, router, route, zone) {
        _classCallCheck(this, AlinanDerslerComponent);

        this.fb = fb;
        this.st = st;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.D_Avg = 0;
        this.T_Avg = 0;
        this.N_D_Avg = 0;
        this.N_T_Avg = 0;
        this.N_T_Kredi = 0;
        this.T_Kredi = 0; //////////////

        this.Genel_ortalama = 0;
        this.Toplam_kredi = 0; ///////////////////

        this.Donemler = [{
          viewValue: '2019-2020/BAHAR'
        }, {
          viewValue: '2019-2020/GUZ'
        }];
        this.displayedColumns = ['position', 'Ders', 'Kredi', 'Harf', 'Note'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
        console.log('selected value = ' + this.selectedValue); //////////////////////////////////////////////////////////
      } //////////////////


      _createClass(AlinanDerslerComponent, [{
        key: "get_Ogretim",
        value: function get_Ogretim() {
          var ogretim = '';

          if (this.st.get_id()[5] === '1') {
            ogretim = 'IOgretim';
          } else ogretim = 'IIOgretim';

          return ogretim;
        }
      }, {
        key: "openDialog",
        value: function openDialog(e) {
          // console.log('Ders '+e.Ders);
          var dialogRef = this.dialog.open(_dersdetay_dersdetay_component__WEBPACK_IMPORTED_MODULE_6__["DersdetayComponent"], {
            width: '75%',
            height: '80%',
            data: {
              obj: e,
              id: this.st.get_id(),
              donem: AlinanDerslerComponent_1.donemandyear,
              ogretim: this.get_Ogretim()
            }
          }); // dialogRef.afterClosed().subscribe(result => {
          //   console.log('The dialog was closed');
          //   this.animal = result;
          // });
        } ////////////////////////////////////////////////////////////
        // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
            var _this41 = this;

            var a, cc, ogretim, T_Avg_t;
            return regeneratorRuntime.wrap(function _callee25$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    // if(this.st.get_id()===undefined)
                    // {
                    //    this.zone.run( ()=>{
                    //      this.router.navigate(['../'],{relativeTo:this.route});
                    //    })
                    // }
                    this.N_D_Avg = 0;
                    this.N_T_Avg = 0;
                    this.N_T_Kredi = 0;
                    this.T_Kredi = 0;
                    ELEMENT_DATA.length = 0;
                    a = '';
                    cc = 0; //  ELEMENT_DATA.push({position:1,Ders:'ahmed',Kredi:2,Harf:'AA',Note:'90'});

                    ogretim = '';

                    if (this.st.get_id()[5] === '1') {
                      ogretim = 'IOgretim';
                    } else ogretim = 'IIOgretim';

                    _context28.next = 11;
                    return this.fb.database.ref("Siciller/Avgsler/".concat(ogretim, "/").concat(this.st.get_id())).once('value', function (sp) {
                      if (sp.exists()) sp.forEach(function (e) {
                        if (e.exists()) {
                          _this41.Genel_ortalama = sp.val().Genel_Ort;
                          _this41.Toplam_kredi = sp.val().kredi;
                        }
                      });
                    });

                  case 11:
                    _context28.next = 13;
                    return this.fb.database.ref("Siciller/2019-2020/BAHAR/".concat(ogretim, "/").concat(this.st.get_id())).once('value', function (sp) {
                      sp.forEach(function (e) {
                        if (e.key !== 'Average') {
                          cc++;
                          if (e.val().Final === '') ELEMENT_DATA.push({
                            position: cc,
                            Ders: e.key,
                            Kredi: e.val().kredi,
                            Harf: e.val().Harf,
                            Note: e.val().Donem_ort
                          });else {
                            ELEMENT_DATA.push({
                              position: cc,
                              Ders: e.key,
                              Kredi: e.val().Kredi,
                              Harf: e.val().Harf,
                              Note: e.val().Donem_ort
                            });
                            _this41.N_T_Kredi += Number(e.val().Kredi);
                            _this41.N_T_Avg += Number(e.val().Kredi * e.val().Harf_etkisi);
                          }
                        }
                      });
                    });

                  case 13:
                    //console.log('keys '+ a);
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);
                    T_Avg_t = Math.round(this.N_T_Avg / this.N_T_Kredi * 100) / 100;
                    if (this.N_T_Kredi === 0) T_Avg_t = 0;
                    this.D_Avg = T_Avg_t;
                    this.T_Kredi = this.N_T_Kredi; //  dataSource =

                  case 18:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "fp",
        value: function fp(donem) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
            var _this42 = this;

            var a, cc, ogretim, T_Avg_t;
            return regeneratorRuntime.wrap(function _callee26$(_context29) {
              while (1) {
                switch (_context29.prev = _context29.next) {
                  case 0:
                    AlinanDerslerComponent_1.donemandyear = donem.toString();
                    AlinanDerslerComponent_1.justyear = AlinanDerslerComponent_1.donemandyear.substring(0, AlinanDerslerComponent_1.donemandyear.indexOf('/'));
                    AlinanDerslerComponent_1.justdonem = AlinanDerslerComponent_1.donemandyear.substring(AlinanDerslerComponent_1.justyear.length, AlinanDerslerComponent_1.donemandyear.length);
                    console.log('from fp ' + donem);
                    ELEMENT_DATA.length = 0;
                    this.N_D_Avg = 0;
                    this.N_T_Avg = 0;
                    this.N_T_Kredi = 0;
                    this.T_Kredi = 0;
                    a = '';
                    cc = 0; //  ELEMENT_DATA.push({position:1,Ders:'ahmed',Kredi:2,Harf:'AA',Note:'90'});
                    //

                    ogretim = '';

                    if (this.st.get_id()[5] === '1') {
                      ogretim = 'IOgretim';
                    } else ogretim = 'IIOgretim';

                    _context29.next = 15;
                    return this.fb.database.ref("Siciller/".concat(this.selectedValue, "/").concat(ogretim, "/").concat(this.st.get_id())).once('value', function (sp) {
                      sp.forEach(function (e) {
                        if (e.key !== 'Average') {
                          cc++;
                          if (e.val().Final === '') ELEMENT_DATA.push({
                            position: cc,
                            Ders: e.key,
                            Kredi: e.val().kredi,
                            Harf: e.val().Harf,
                            Note: e.val().Donem_ort
                          });else {
                            ELEMENT_DATA.push({
                              position: cc,
                              Ders: e.key,
                              Kredi: e.val().Kredi,
                              Harf: e.val().Harf,
                              Note: e.val().Donem_ort
                            });
                            _this42.N_T_Kredi += Number(e.val().Kredi);
                            _this42.N_T_Avg += Number(e.val().Kredi * e.val().Harf_etkisi);
                          }
                        }
                      });
                    });

                  case 15:
                    //console.log('keys '+ a);
                    // console.log(this.N_T_Avg/this.N_T_Kredi);
                    T_Avg_t = 0;
                    if (this.N_T_Kredi !== 0) T_Avg_t = Math.round(this.N_T_Avg / this.N_T_Kredi * 100) / 100;
                    this.D_Avg = T_Avg_t;
                    this.T_Kredi = this.N_T_Kredi;
                    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](ELEMENT_DATA);

                  case 20:
                  case "end":
                    return _context29.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "yaklasim",
        value: function yaklasim(sayi) {
          if (sayi >= 0 && sayi <= 100) return sayi = Math.round(sayi);else return 'X';
        }
      }]);

      return AlinanDerslerComponent;
    }(); ///////////////////


    AlinanDerslerComponent.donemandyear = '';
    AlinanDerslerComponent.justdonem = '';
    AlinanDerslerComponent.justyear = '';

    AlinanDerslerComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _studentsec_service__WEBPACK_IMPORTED_MODULE_4__["StudentsecService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AlinanDerslerComponent = AlinanDerslerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alinan-dersler',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alinan-dersler.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alinan-dersler.component.scss */
      "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.scss")).default]
    })], AlinanDerslerComponent);
    var ELEMENT_DATA = [];
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinandersler-service.service.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinandersler-service.service.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AlinanderslerServiceService */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiAlinanDerslerAlinanderslerServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlinanderslerServiceService", function () {
      return AlinanderslerServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _studentsec_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");

    var AlinanderslerServiceService = /*#__PURE__*/function () {
      function AlinanderslerServiceService(st, router, route) {
        _classCallCheck(this, AlinanderslerServiceService);

        this.st = st;
        this.router = router;
        this.route = route;
      }

      _createClass(AlinanderslerServiceService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.st.get_id() === undefined) {
            this.router.navigate(['anasistem/student']);
            return false;
          } else return true;
        }
      }]);

      return AlinanderslerServiceService;
    }();

    AlinanderslerServiceService.ctorParameters = function () {
      return [{
        type: _studentsec_service__WEBPACK_IMPORTED_MODULE_3__["StudentsecService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AlinanderslerServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlinanderslerServiceService);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiAlinanDerslerDersdetayDersdetayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L29ncmVuY2lzYXlmYXNpL2FsaW5hbi1kZXJzbGVyL2RlcnNkZXRheS9kZXJzZGV0YXkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: DersdetayComponent */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiAlinanDerslerDersdetayDersdetayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DersdetayComponent", function () {
      return DersdetayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");
    /* harmony import */


    var _alinan_dersler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../alinan-dersler.component */
    "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.ts");

    var DersdetayComponent = /*#__PURE__*/function () {
      function DersdetayComponent(dialogRef, data, db, Tc) {
        _classCallCheck(this, DersdetayComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.db = db;
        this.Tc = Tc;
        this.Odevler = [];
        this.OdevPuani = [];
      }

      _createClass(DersdetayComponent, [{
        key: "onNoClick",
        value: function onNoClick() {// alert(this.data['obj']['Ders']);
          // this.dialogRef.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
            var _this43 = this;

            return regeneratorRuntime.wrap(function _callee29$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    this.IsthereOdev = 'true';
                    console.log(this.Tc.myObj);
                    this.Ogretim = this.data['ogretim'];
                    this.Donem = this.data['donem'];
                    this.justyear = _alinan_dersler_component__WEBPACK_IMPORTED_MODULE_5__["AlinanDerslerComponent"].justyear;
                    this.justdonem = _alinan_dersler_component__WEBPACK_IMPORTED_MODULE_5__["AlinanDerslerComponent"].justdonem;
                    console.log("table/".concat(this.justyear, "/").concat(this.Ogretim).concat(this.justdonem));
                    new Promise(function (res, rej) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this43, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
                        var _this44 = this;

                        return regeneratorRuntime.wrap(function _callee27$(_context30) {
                          while (1) {
                            switch (_context30.prev = _context30.next) {
                              case 0:
                                _context30.next = 2;
                                return this.db.database.ref("table/".concat(this.justyear, "/").concat(this.Ogretim).concat(this.justdonem)).once('value', function (sp) {
                                  // console.log(sp.val());
                                  _this44.Tc.myObj = sp.val();
                                });

                              case 2:
                                console.log('Json file ' + this.Tc.myObj);
                                res('next');

                              case 4:
                              case "end":
                                return _context30.stop();
                            }
                          }
                        }, _callee27, this);
                      }));
                    }).then(function (res) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this43, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
                        var _this45 = this;

                        return regeneratorRuntime.wrap(function _callee28$(_context31) {
                          while (1) {
                            switch (_context31.prev = _context31.next) {
                              case 0:
                                this.projeorisnot = true;
                                this.Ders = this.data['obj']['Ders'];
                                this.Id = this.data['id'];
                                this.Kredi = this.data['obj']['Kredi'];
                                this.Harf = this.data['obj']['Harf'];
                                this.finalEtkisi = this.Tc.myObj["".concat(this.Ders)].Final;
                                this.vizeEtkisi = this.Tc.myObj["".concat(this.Ders)].Vize;
                                this.projeEtkisi = this.Tc.myObj["".concat(this.Ders)].Proje;
                                this.Odevler = this.Tc.myObj["".concat(this.Ders)]['Odevler'];
                                console.log('Odevler ' + this.Odevler);

                                if (!(this.Odevler[0] === 'Y')) {
                                  _context31.next = 14;
                                  break;
                                }

                                this.IsthereOdev = 'false';
                                _context31.next = 16;
                                break;

                              case 14:
                                _context31.next = 16;
                                return this.db.database.ref("Siciller/".concat(this.Donem, "/").concat(this.Ogretim, "/").concat(this.Id, "/").concat(this.Ders, "/OdevPuani")).once('value', function (sp) {
                                  sp.forEach(function (e) {
                                    _this45.OdevPuani.push(e.val());
                                  });
                                });

                              case 16:
                                if (this.projeEtkisi === 'Yok') {
                                  this.projeorisnot = false;
                                }

                                _context31.next = 19;
                                return this.db.database.ref("Siciller/".concat(this.Donem, "/").concat(this.Ogretim, "/").concat(this.Id, "/").concat(this.Ders)).once('value', function (sp) {
                                  _this45.sinav = sp.val();
                                }).then(function () {
                                  if (_this45.sinav.Final !== null) {
                                    _this45.final = _this45.sinav.Final;
                                  }

                                  if (_this45.sinav.vize !== null) _this45.vize = _this45.sinav.vize;
                                  if (_this45.sinav.proje !== null) _this45.proje = _this45.sinav.proje;

                                  if (_this45.final === '') {
                                    _this45.final = 'X';
                                  }

                                  if (_this45.vize === '') {
                                    _this45.vize = 'X';
                                  }

                                  if (_this45.proje === '') {
                                    _this45.proje = 'X';
                                  }
                                });

                              case 19:
                                //alert(this.sinav.key+' '+this.sinav.val().vize);
                                if (this.sinav.But !== null || this.sinav.But !== '' || this.sinav.But >= 0 && this.sinav.But <= 100) {
                                  this.But = this.sinav.But;
                                } else this.But = 'X';

                              case 20:
                              case "end":
                                return _context31.stop();
                            }
                          }
                        }, _callee28, this);
                      }));
                    });

                  case 8:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee29, this);
          }));
        }
      }]);

      return DersdetayComponent;
    }();

    DersdetayComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_4__["TeachersecService"]
      }];
    };

    DersdetayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dersdetay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dersdetay.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dersdetay.component.scss */
      "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DersdetayComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DersSecimComponent */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiDersSecimDersSecimComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DersSecimComponent", function () {
      return DersSecimComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _studentsec_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/teachersec.service */
    "./src/app/teachersec.service.ts");

    var DersSecim = function DersSecim(id, name) {
      _classCallCheck(this, DersSecim);

      this.id = id;
      this.name = name;
    };

    var alinmisDersler = /*#__PURE__*/function () {
      function alinmisDersler(ders, dr, kredi, saat, yil, alan, id) {
        _classCallCheck(this, alinmisDersler);

        this.Ders = ders;
        this.Dr = dr;
        this.kredi = kredi;
        this.saat = saat;
        this.yil = yil;
        this.OgrenciSayisi = alan;
        this.id = id;
      }

      _createClass(alinmisDersler, [{
        key: "get_ders",
        value: function get_ders() {
          return this.Ders;
        }
      }]);

      return alinmisDersler;
    }();

    var DersSecimComponent = /*#__PURE__*/function () {
      function DersSecimComponent(db, router, route, st, zone, Tc) {
        var _this46 = this;

        _classCallCheck(this, DersSecimComponent);

        this.db = db;
        this.router = router;
        this.route = route;
        this.st = st;
        this.zone = zone;
        this.Tc = Tc;
        this.Dersler = [];
        this.Acik = 0;
        this.Names = [];
        this.tempt = [];
        this.fullOgrenciSayisi = [];
        this.btnlar = [];

        if (this.st.get_id() == undefined) {
          this.router.navigate(['../../'], {
            relativeTo: this.route
          });
        }

        var ttp = [];
        new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
          _this46.db.database.ref("table/".concat(_this46.st.get_date(), "/").concat(_this46.st.get_Ogretim_Turu(), "/").concat(_this46.st.get_Donem())).once('value', function (sop) {
            sop.forEach(function (e) {
              // ttp.push(e.val().fullOgrenciSayisi);
              ttp["".concat(e.val().Ders)] = e.val().fullOgrenciSayisi; // console.log('xx'+e.val().fullOgrenciSayisi);
            });
            obs.next(ttp);
          });
        }).subscribe(function (k) {
          _this46.fullOgrenciSayisi = k; // this.fullOgrenciSayisi.push(k);
        }); /////////////////////////////////////////////////

        this.get_yil = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
          _this46.db.database.ref("Ogrenciler/".concat(_this46.st.get_id(), "/yil")).once('value', function (p) {
            obs.next(p.val());
          });
        }); // this.get_yil.subscribe(k=>{
        //   console.log('yil '+k);
        // })
        ////////////////////////////////////////////////////////

        var getidersler = [];
        this.gecismis_dersler = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
          _this46.db.database.ref('Donem').once('value', function (sp) {
            _this46.db.database.ref("Ogrenciler/".concat(_this46.st.get_id(), "/Ogretim")).once('value', function (Ogretim) {
              _this46.db.database.ref("Siciller/".concat(_this46.get_date(), "/").concat(_this46.st.get_Donem(), "/").concat(sp.val(), "/").concat(Ogretim.val(), "/").concat(_this46.st.get_id())).once('value', function (sp2) {
                if (sp2.exists()) {
                  sp2.forEach(function (a) {
                    if (a.key !== 'Average') {
                      //  console.log('dis '+a.key); //algo , algo22 , algo33
                      if (a.val().Harf != 'FD' && a.val().Harf !== 'FF' && a.val().Harf !== "DD" && a.val().Harf !== undefined) {
                        console.log(a.key);
                        getidersler.push(a.key);
                      }
                    }
                  });
                }
              }).then(function () {
                obs.next(getidersler);
              });
            });
          });
        });
        var c = 0;
        var kt = 0;
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
          _this46.gecismis_dersler.subscribe(function (k) {
            console.log('inside subscribe');

            _this46.db.database.ref("table/".concat(_this46.st.get_date(), "/").concat(_this46.st.get_Ogretim_Turu(), "/").concat(_this46.st.get_Donem())).once('value', function (p) {
              _this46.tempt.length = 0;
              p.forEach(function (a) {
                if (kt === 1) {
                  kt = 0;
                }

                c++; //  console.log('sub'+ a.val().Ders); // tabledeki Butun Dersler getirdi

                if (k.includes(a.val().Ders) === false) {
                  //(ders:string,dr:string,kredi:string,saat:string,yil:string,alan:string,id:string)
                  _this46.tempt.push(new alinmisDersler(a.val().Ders, a.val().Dr, a.val().kredi, a.val().saat, a.val().yil, a.val().OgrenciSayisi, _this46.st.get_id()));

                  console.log('sayisi ' + a.val().OgrenciSayisi);
                }

                console.log(p.numChildren());

                if (p.numChildren() === c) {
                  obs.next(_this46.tempt);
                }
              });
            });
          });
        });
        var tiri = [];
        new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
          _this46.db.database.ref("AlinmisDersler/".concat(_this46.get_date(), "/").concat(_this46.st.get_id())).once('value', function (al) {
            if (al.exists()) {
              al.forEach(function (e) {
                tiri["".concat(e.val().Ders)] = true;
              });
              obs.next(tiri);
            }
          });
        }).subscribe(function (k) {
          _this46.btnlar = k;
        });
        this.gecici = 0;
        this.id = st.get_id();
        setInterval(function () {
          _this46.c_t();
        }, 1000);
      }

      _createClass(DersSecimComponent, [{
        key: "get_date",
        value: function get_date() {
          var d = new Date();
          var n = d.getFullYear();
          return n - 1 + '-' + n;
        }
        /**
         * geri
         */

      }, {
        key: "geri",
        value: function geri() {
          var _this47 = this;

          this.zone.run(function () {
            return _this47.router.navigate(['../'], {
              relativeTo: _this47.route
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
            var _this48 = this,
                _ref2;

            var t_y, Ogretim_turu;
            return regeneratorRuntime.wrap(function _callee31$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    if (this.st.get_id() === undefined) {
                      this.zone.run(function () {
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this48, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
                          return regeneratorRuntime.wrap(function _callee30$(_context33) {
                            while (1) {
                              switch (_context33.prev = _context33.next) {
                                case 0:
                                  _context33.next = 2;
                                  return this.router.navigate(['../'], {
                                    relativeTo: this.route
                                  });

                                case 2:
                                case "end":
                                  return _context33.stop();
                              }
                            }
                          }, _callee30, this);
                        }));
                      });
                    }

                    console.log('my ' + this.st.get_Donem() + ' ' + this.st.get_Ogretim_Turu()); /////////////////////////////

                    t_y = (_ref2 = [], _ref2);
                    Ogretim_turu = '';
                    this.Harflar = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
                      _this48.db.database.ref("Ogrenciler/".concat(_this48.st.get_id())).once('value', function (snap) {
                        Ogretim_turu = snap.val().Ogretim;

                        _this48.db.database.ref("AlinmisDersler/".concat(_this48.get_date(), "/basariliBasarsiz/").concat(Ogretim_turu)).once('value', function (snap2) {
                          if (snap2.exists()) {
                            snap2.forEach(function (a) {
                              // console.log(a.key); algo , algo22 , algo33 .....etcx
                              _this48.db.database.ref("AlinmisDersler/".concat(_this48.get_date(), "/basariliBasarsiz/").concat(Ogretim_turu, "/").concat(a.key, "/").concat(_this48.st.get_id())).once('value', function (snap3) {
                                // console.log(snap3.val().Harf_Notu);
                                if (snap3.exists()) if (snap3.val().Harf_Notu !== 'FD' && snap3.val().Harf_Notu !== 'FF') t_y.push(a.key);
                              }).then(function () {
                                //After ForeEach
                                obs.next(t_y);
                              });
                            });
                          }
                        });
                      });
                    });
                    this.Ders = this.db.list("AlinmisDersler/".concat(this.get_date(), "/").concat(this.st.get_id())).valueChanges(); // this.Table = new Observable<Tablo[]>((obs)=>{
                    //   this.db.database.ref('table').once('value',m=>{
                    //  m.forEach(e=>{
                    //   // console.log('table' , e.val().Ders);
                    //   let c=0;
                    //   this.Harflar.subscribe(k=>{
                    //     k.forEach(el=>{
                    //      if(el===e.val().Ders)
                    //      {
                    //       c=1;
                    //      }
                    //    })
                    //   })
                    //  })
                    //   })
                    // });
                    // this.Table.subscribe(k=>{
                    // })

                    this.db.database.ref('secim').once('value', function (element) {
                      if (element.val() === true) {
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#DS').css('visibility', 'visible');
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#DS').text('Ders Secimleri');
                      } else {
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#DS').css('visibility', 'hidden');
                        jquery__WEBPACK_IMPORTED_MODULE_6__('#DS').text('');
                      }
                    });

                  case 7:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "nav",
        value: function nav() {
          var _this49 = this;

          this.zone.run(function () {
            return _this49.router.navigate(["DersSecim"], {
              relativeTo: _this49.route
            });
          });
        }
      }, {
        key: "b_func",
        value: function b_func(i) {
          var _this50 = this;

          var t = jquery__WEBPACK_IMPORTED_MODULE_6__('td button').eq(i).text().toString();
          var ders = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(0)")).text().toString().trim();
          var dr = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(1)")).text().toString().trim();
          var kredi = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(2)")).text().toString().trim();
          var saat = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(3)")).text().toString().trim();
          var yil = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(4)")).text().toString().trim();
          var Alan_sayisi = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(5) span")).text().toString().trim();

          if (t.trim() === 'Ekleme'.trim()) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('td button').eq(i).text('Silme').toggleClass('btn btn-primary').toggleClass('btn btn-danger');
            this.Obj = new alinmisDersler(ders, dr, kredi, saat, yil, Alan_sayisi, this.st.get_id());
            this.Dersler.push(this.Obj);
            jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(5) span")).text((Number(jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(5) span")).text()) - 1).toString()); // this.db.database.ref(`table`).once('value',spp=>{
            //   spp.forEach(a=>{
            //     // console.log('boyraz'+a.val().Ders);
            //     if(a.val().Ders===ders)
            //     {
            //       // console.log(a.key);
            //       this.db.database.ref(`table/${a.key}/OgrenciSayisi`).set(a.val().OgrenciSayisi-1).then(()=>{
            //       })
            //     }
            //   })
            // })
          } else if (t.trim() === 'Silme'.trim()) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('td button').eq(i).text('Ekleme').toggleClass('btn btn-danger').toggleClass('btn btn-primary');
            jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(5) span")).text((Number(jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(5) span")).text()) + 1).toString()); // this.db.database.ref(`table`).once('value',spp=>{
            //   spp.forEach(a=>{
            //     // console.log('boyraz'+a.val().Ders);
            //     if(a.val().Ders===ders)
            //     {
            //       // console.log(a.key);
            //       this.db.database.ref(`table/${a.key}/OgrenciSayisi`).set(a.val().OgrenciSayisi+1);
            //     }
            //   })
            // })

            this.Dersler.forEach(function (a, index) {
              if (a.get_ders() === ders) {
                // this.db.database.ref('AlinmisDersler/${this.get_date()}/'+this.id+'/'+i).set(this.Dersler);
                _this50.Dersler.splice(index, 1); // AlinmisDersler/2019-2020/IOgretim/algo/160201099


                _this50.db.database.ref("Ogrenciler/".concat(_this50.st.get_id(), "/Ogretim")).once('value', function (sp) {
                  _this50.db.database.ref("AlinmisDersler/".concat(_this50.get_date(), "/").concat(sp.val(), "/").concat(ders, "/").concat(_this50.st.get_id())).remove(); // console.log(sp.val());

                }); // console.log('show '+`AlinmisDersler/${this.get_date()}/${this.st.get_Ogretim_Turu()}/${ders}/${this.st.get_id()}`);

              }
            });
          }

          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/") + this.id).set(this.Dersler);
          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/") + this.id + '/Onay/').set(false);
        }
      }, {
        key: "onay",
        value: function onay() {
          var _this51 = this;

          // $(`tr:eq(${i+1}) td:eq(5)`).text((Number($(`tr:eq(${i+1}) td:eq(5)`).text())+1).toString());
          var L = jquery__WEBPACK_IMPORTED_MODULE_6__('tr').length;
          var bx = [];

          var _loop4 = function _loop4(i) {
            // console.log($(`tr:eq(${i}) td:eq(0)`).text()+'  '+$(`tr:eq(${i}) td:eq(5)`).text());
            var ders_adi = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i, ") td:eq(0)")).text();
            var sayi = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i, ") td:eq(5) span")).text();

            _this51.db.database.ref("table/".concat(_this51.st.get_date(), "/").concat(_this51.st.get_Ogretim_Turu(), "/").concat(_this51.st.get_Donem())).once('value', function (po) {
              po.forEach(function (e) {
                if (e.val().Ders === ders_adi) {
                  _this51.db.database.ref("table/".concat(_this51.st.get_date(), "/").concat(_this51.st.get_Ogretim_Turu(), "/").concat(_this51.st.get_Donem(), "/").concat(e.key, "/OgrenciSayisi")).set(sayi);
                }
              });
            });
          };

          for (var i = 1; i < L; i++) {
            _loop4(i);
          }

          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/") + this.id + '/Onay/').once('value', function (e) {
            if (e.val() === false) {
              jquery__WEBPACK_IMPORTED_MODULE_6__('button:gt(1)').prop('disabled', true);

              _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id).set(_this51.Dersler);

              jquery__WEBPACK_IMPORTED_MODULE_6__('#onay').removeClass('btn btn-success').addClass('btn btn-danger').text('Onay kaldir');

              _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id + '/Onay/').set(true);

              _this51.db.database.ref('Onaylananlar').set(_this51.id);
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_6__('button:gt(1)').prop('disabled', false);

              _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id).set(_this51.Dersler);

              jquery__WEBPACK_IMPORTED_MODULE_6__('#onay').removeClass('btn btn-danger').addClass('btn btn-success').text('Onay');

              _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id + '/Onay/').set(false);

              _this51.db.database.ref('Onaylananlar/' + _this51.id).remove();

              var _L = jquery__WEBPACK_IMPORTED_MODULE_6__('tr').length;

              var _loop5 = function _loop5(_i7) {
                var ders_ad = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(_i7, ") td:eq(5) span")).text();
                var btn_text = jquery__WEBPACK_IMPORTED_MODULE_6__('button').eq(_i7 + 1).text();

                _this51.db.database.ref("table/".concat(_this51.st.get_date(), "/").concat(_this51.st.get_Ogretim_Turu(), "/").concat(_this51.st.get_Donem())).once('value', function (ore) {
                  ore.forEach(function (e) {
                    if (e.val().Ders === ders_ad.trim() && btn_text.trim() === 'Silme') {
                      _this51.db.database.ref("table/".concat(e.key, "/").concat(ders_ad)).set((Number(e.val().OgrenciSayisi) + 1).toString().trim());
                    }
                  });
                });
              };

              for (var _i7 = 1; _i7 < _L; _i7++) {
                _loop5(_i7);
              }
            }
          });
          if (this.id !== undefined) this.db.database.ref('Ogrenciler/' + this.id).once('value', function (snap) {
            _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id + '/Ogretim').set(snap.val().Ogretim);
          });
          if (this.id !== undefined) this.db.database.ref('Ogrenciler/' + this.id).once('value', function (snap) {
            _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id + '/name').set(snap.val().name);
          });
          if (this.id !== undefined) this.db.database.ref('Ogrenciler/' + this.id).once('value', function (snap) {
            _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.id + '/soyad').set(snap.val().surename);
          }); /////////////////////////////////

          var e = setTimeout(function () {
            _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + _this51.st.get_id()).once('value', function (sp) {
              var t = sp.val().Ogretim; //  console.log('inside'+ t);

              sp.forEach(function (a) {
                if (a.val().Ders !== undefined) {
                  _this51.db.database.ref('Ogrenciler/' + _this51.st.get_id()).once('value', function (iu) {
                    _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/") + t + '/' + a.val().Ders + '/' + _this51.id).set(iu.val().name + ' ' + iu.val().surename);
                  });
                }
              });
            });
          }, 500);
          console.log("AlinmisDersler/".concat(this.get_date(), "/").concat(this.st.get_id())); ////////////////////////////////////copy alinimis dersler bos durumunda /////////////////////

          this.get_Ogretim().subscribe(function (kogretim) {
            //console.log('Observer '+kogretim);
            _this51.db.database.ref("AlinmisDersler/".concat(_this51.get_date(), "/").concat(_this51.st.get_id())).once('value', function (op) {
              op.forEach(function (e) {
                if (e.val().Ders !== undefined) {
                  console.log(op.val().Ogretim);
                  console.log('dersler' + e.val().Ders); //   Siciller/2019-2020/BAHAR/IOgretim/160201099/algo

                  _this51.get_donem().subscribe(function (donemi) {
                    var tobj = {
                      'Final': '',
                      'vize': '',
                      'proje': '',
                      'Dr': e.val().Dr,
                      'kredi': e.val().kredi
                    };
                    console.log("Siciller/".concat(_this51.get_date(), "/").concat(donemi, "/").concat(kogretim, "/").concat(_this51.st.get_id(), "/").concat(e.val().Ders));

                    _this51.db.database.ref("Siciller/".concat(_this51.get_date(), "/").concat(donemi, "/").concat(kogretim, "/").concat(_this51.st.get_id(), "/").concat(e.val().Ders)).set(tobj);
                  });
                }
              });
            });
          });
        }
      }, {
        key: "t",
        value: function t() {
          var _this52 = this;

          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/").concat(this.st.get_id(), "/Onay")).once('value', function (e) {
            if (e.val() === false || e.val() === null) {
              jquery__WEBPACK_IMPORTED_MODULE_6__('button:gt(1)').prop('disabled', false); // this.db.database.ref('AlinmisDersler/${this.get_date()}/'+this.id).set(this.Dersler);

              jquery__WEBPACK_IMPORTED_MODULE_6__('#onay').addClass('btn btn-success').removeClass('btn btn-danger').text('Onay'); // this.db.database.ref('AlinmisDersler/${this.get_date()}/'+this.id+'/Onay/').set(true);
            } else {
              _this52.get_ders();

              jquery__WEBPACK_IMPORTED_MODULE_6__('button:gt(1)').prop('disabled', true);
              jquery__WEBPACK_IMPORTED_MODULE_6__('#onay').addClass('btn btn-danger').removeClass('btn btn-success').text('Onay kaldir');
            }
          });
          this.Dersler = [];

          for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_6__('button').length - 1; i++) {
            var ders = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(0)")).text().toString().trim();
            var dr = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(1)")).text().toString().trim();
            var kredi = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(2)")).text().toString().trim();
            var saat = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(3)")).text().toString().trim();
            var yil = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(4)")).text().toString().trim();
            var Alan_sayisi = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(5) span")).text().toString().trim();
            var btn_text = jquery__WEBPACK_IMPORTED_MODULE_6__('button').eq(i + 2).text();

            if (btn_text === 'Silme') {
              this.Obj = new alinmisDersler(ders, dr, kredi, saat, yil, Alan_sayisi, this.st.get_id());
              if (this.Dersler.indexOf(this.Obj) === -1) this.Dersler.push(this.Obj);
            }
          }
        }
      }, {
        key: "get_Ogretim",
        value: function get_Ogretim() {
          var _this53 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (ob) {
            _this53.db.database.ref("Ogrenciler/".concat(_this53.st.get_id())).once('value', function (op) {
              // console.log(op.val().Ogretim);
              ob.next(op.val().Ogretim);
            });
          });
        }
      }, {
        key: "c_t",
        value: function c_t() {
          this.t();
        }
      }, {
        key: "get_ders",
        value: function get_ders() {
          this.db.database.ref("AlinmisDersler/".concat(this.get_date(), "/").concat(this.st.get_id())).once('value', function (e) {
            e.forEach(function (e2) {
              for (var i = 0; i < jquery__WEBPACK_IMPORTED_MODULE_6__('tr').length; i++) {
                var ders = jquery__WEBPACK_IMPORTED_MODULE_6__("tr:eq(".concat(i + 1, ") td:eq(0)")).text().toString().trim();

                if (ders === e2.val().Ders) {
                  // console.log(ders);
                  jquery__WEBPACK_IMPORTED_MODULE_6__('button').eq(i + 2).removeClass('btn btn-primary').addClass('btn btn-danger').text('Silme');
                }
              }
            });
          });
        }
      }, {
        key: "get_donem",
        value: function get_donem() {
          var _this54 = this;

          this.getdonem = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
            _this54.db.database.ref('Donem').once('value', function (sp) {
              obs.next(sp.val());
            });
          });
          return this.getdonem;
        }
      }, {
        key: "cikis",
        value: function cikis() {
          var _this55 = this;

          this.zone.run(function () {
            _this55.st.set_id(undefined);

            _this55.router.navigate(['../../', {
              relativeTo: _this55.route
            }]);
          });
        }
      }]);

      return DersSecimComponent;
    }();

    DersSecimComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _studentsec_service__WEBPACK_IMPORTED_MODULE_3__["StudentsecService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_teachersec_service__WEBPACK_IMPORTED_MODULE_7__["TeachersecService"]
      }];
    };

    DersSecimComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ders-secim',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ders-secim.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style.css */
      "./src/app/anasistem/student/ogrencisayfasi/ders-secim/style.css")).default]
    })], DersSecimComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/ders-secim/style.css":
  /*!***********************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/ders-secim/style.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiDersSecimStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L29ncmVuY2lzYXlmYXNpL2RlcnMtc2VjaW0vc3R5bGUuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiMessagesMessagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L29ncmVuY2lzYXlmYXNpL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MessagesComponent */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _studentsec_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent(st, router, route, zone) {
        var _this56 = this;

        _classCallCheck(this, MessagesComponent);

        // document.oncontextmenu = (e)=>{
        //   e.preventDefault();
        //   }
        this.st = st;
        this.router = router;
        this.route = route;
        this.zone = zone;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.state = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.states = [{
          name: 'dr.yaşar becerekli',
          mail: 'ybecerikli@kocaeli.edu.tr',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
          resim: 'http://bilgisayar.kocaeli.edu.tr/dosyalar/akademikRes/YBecerikli.jpg'
        }, {
          name: 'dr.burak inner',
          mail: 'binner@kocaeli.edu.tr',
          // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
          resim: 'http://bilgisayar.kocaeli.edu.tr/dosyalar/akademikRes/BInner.jpg'
        }, {
          name: 'dr.onur gok',
          mail: 'ogok@kocaeli.edu.tr',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
          resim: 'http://bilgisayar.kocaeli.edu.tr/dosyalar/akademikRes/OGok.jpg'
        }, {
          name: 'dr.Alev mutlu',
          mail: 'alev.mutlu@kocaeli.edu.tr',
          // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
          resim: 'http://bilgisayar.kocaeli.edu.tr/dosyalar/akademikRes/AMutlu.jpg'
        }]; //////////////////////////////////////////////////

        this.filteredStates = this.stateCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) {
          return state ? _this56._filterStates(state) : _this56.states.slice();
        }));
      }

      _createClass(MessagesComponent, [{
        key: "_filterStates",
        value: function _filterStates(value) {
          var filterValue = value.toLowerCase();
          return this.states.filter(function (state) {
            return state.name.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "send_message",
        value: function send_message() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
            var _this57 = this;

            var text, subject, mail_send_to, xhttp;
            return regeneratorRuntime.wrap(function _callee32$(_context35) {
              while (1) {
                switch (_context35.prev = _context35.next) {
                  case 0:
                    // console.log($('#Email').val());
                    // console.log($('#msg').val());
                    text = jquery__WEBPACK_IMPORTED_MODULE_4__('#msg').val();
                    subject = jquery__WEBPACK_IMPORTED_MODULE_4__('#konu').val();
                    mail_send_to = jquery__WEBPACK_IMPORTED_MODULE_4__('#Email').val(); // console.log(mail_send_to);

                    xhttp = new XMLHttpRequest();
                    _context35.next = 6;
                    return new Promise(function (resolve, rej) {
                      xhttp.open("GET", "https://messagenode.herokuapp.com/?\nname=".concat(_this57.st.get_id(), "&&mail=").concat(mail_send_to, "&&subject=").concat(subject, "&&text=").concat(text), true);
                      resolve('bisey');
                    }).then(function (obs) {
                      xhttp.send();
                      alert('Mesaj Gönderildi');
                    });

                  case 6:
                    this.zone.run(function () {
                      return _this57.router.navigate(['../'], {
                        relativeTo: _this57.route
                      });
                    });

                  case 7:
                  case "end":
                    return _context35.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }]);

      return MessagesComponent;
    }();

    MessagesComponent.ctorParameters = function () {
      return [{
        type: _studentsec_service__WEBPACK_IMPORTED_MODULE_5__["StudentsecService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.component.scss */
      "./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.scss")).default]
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiOgrencisayfasiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L29ncmVuY2lzYXlmYXNpL29ncmVuY2lzYXlmYXNpLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.ts ***!
    \******************************************************************************/

  /*! exports provided: OgrencisayfasiComponent */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiOgrencisayfasiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OgrencisayfasiComponent", function () {
      return OgrencisayfasiComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _studentsec_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");

    var OgrencisayfasiComponent = /*#__PURE__*/function () {
      function OgrencisayfasiComponent(db, router, route, st, zone) {
        _classCallCheck(this, OgrencisayfasiComponent);

        this.db = db;
        this.router = router;
        this.route = route;
        this.st = st;
        this.zone = zone;
        console.log('from service' + this.st.get_id() + '   ' + this.st.get_pws()); // let id = this.route.snapshot.paramMap.get('id');
        // console.log(id+' '+this.route.snapshot.paramMap.get('name'));
      }
      /**
       * geri
       */


      _createClass(OgrencisayfasiComponent, [{
        key: "geri",
        value: function geri() {
          var _this58 = this;

          this.zone.run(function () {
            _this58.st.set_id('');

            _this58.st.set_pws(''); // window.history.go(-1);


            window.history.back(); // return   this.router.navigate(['../'],{relativeTo:this.route , replaceUrl:true});
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this59 = this;

          this.db.database.ref("Ogrenciler/".concat(this.st.get_id(), "/Ogretim")).once('value', function (sp) {
            console.log(sp.val());

            _this59.st.set_Ogretim_Turu(sp.val());
          });
          this.db.database.ref("Donem").once('value', function (sp) {
            _this59.st.set_Donem(sp.val());
          });
          this.db.database.ref('secim').on('value', function (element) {
            if (element.val() === true) {
              jquery__WEBPACK_IMPORTED_MODULE_3__('#DS').css('visibility', 'visible');
              jquery__WEBPACK_IMPORTED_MODULE_3__('#DS').text('Ders Secimleri');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_3__('#DS').css('visibility', 'hidden');
              jquery__WEBPACK_IMPORTED_MODULE_3__('#DS').text('');
            }
          });
        }
      }, {
        key: "nav",
        value: function nav() {
          var _this60 = this;

          this.zone.run(function () {
            var t = setInterval(function () {
              if (_this60.st.get_Ogretim_Turu() !== undefined && _this60.st.get_Donem() !== undefined) {
                _this60.router.navigate(["DersSecim"], {
                  relativeTo: _this60.route
                }).then(function () {
                  clearInterval(t); // console.log('after nav');
                });
              }
            });
          }, 10);
        }
      }, {
        key: "message",
        value: function message() {
          var _this61 = this;

          this.zone.run(function () {
            return _this61.router.navigate(['Messages'], {
              relativeTo: _this61.route
            });
          });
        }
      }, {
        key: "dersler",
        value: function dersler() {
          var _this62 = this;

          this.zone.run(function () {
            _this62.router.navigate(["dersler"], {
              relativeTo: _this62.route
            });
          });
        }
      }]);

      return OgrencisayfasiComponent;
    }();

    OgrencisayfasiComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _studentsec_service__WEBPACK_IMPORTED_MODULE_5__["StudentsecService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    OgrencisayfasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ogrencisayfasi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ogrencisayfasi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ogrencisayfasi.component.scss */
      "./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.scss")).default]
    })], OgrencisayfasiComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiSicilSicilSicilComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L29ncmVuY2lzYXlmYXNpL3NpY2lsL3NpY2lsL3NpY2lsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: SicilComponent */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiSicilSicilSicilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SicilComponent", function () {
      return SicilComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");

    var A = function A(node, key) {
      _classCallCheck(this, A);

      this.key = key;
      this.node = node;
    };

    var SicilComponent = /*#__PURE__*/function () {
      function SicilComponent(db, zone) {
        _classCallCheck(this, SicilComponent);

        this.db = db;
        this.zone = zone;

        if (this.p() === 'BAHAR') {
          console.log('yes');
        }
      }

      _createClass(SicilComponent, [{
        key: "f",
        value: function f() {
          var _this63 = this;

          this.L = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            _this63.db.database.ref("Donem").once('value', function (sp) {
              obs.next(sp.val());
            });
          });
          return this.L;
        }
      }, {
        key: "p",
        value: function p() {
          this.f().subscribe(function (k) {
            console.log(k);
            return k;
          });
        }
      }]);

      return SicilComponent;
    }();

    SicilComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    SicilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sicil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sicil.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sicil.component.scss */
      "./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.scss")).default]
    })], SicilComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts ***!
    \************************************************************************/

  /*! exports provided: StudentsecService */

  /***/
  function srcAppAnasistemStudentOgrencisayfasiStudentsecServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentsecService", function () {
      return StudentsecService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    var C = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");

    var StudentsecService = /*#__PURE__*/function () {
      function StudentsecService(db, route, router, zone, cookieService) {
        _classCallCheck(this, StudentsecService);

        this.db = db;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.cookieService = cookieService;
      }

      _createClass(StudentsecService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this64 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this64.db.database.ref('Ogrenciler/' + _this64.get_id()).once('value', function (snap) {
              if (_this64.get_id() === undefined) {
                _this64.zone.run(function () {
                  _this64.router.navigate(['anasistem/student'], {
                    replaceUrl: false
                  });
                });
              }

              if (_this64.get_id() !== undefined && snap.exists()) {
                console.log(_this64.get_id());

                if (_this64.get_pws() === snap.val().pass) {
                  if (_this64.cookieService.check(_this64.get_id()) === false) _this64.cookieService.set('s' + _this64.get_id(), _this64.get_pws(), 100000, '/'); // C.set(this.get_id(),this.get_pws(),{path:'/anasistem/student'});

                  observer.next(true);
                } else {
                  observer.next(false);
                }
              } // else{
              //   this.router.navigate(['anasistem/student']);
              // //  observer.next(false);
              // }

            });
          });
        }
      }, {
        key: "control",
        value: function control() {
          //console.log(this.get_id()+' '+this.get_pws())
          this.db.database.ref('Ogrenciler').once('value', function (snap) {
            snap.forEach(function (a) {
              console.log(a.key);
              console.log(a.val().pass);
            });
          });
        }
      }, {
        key: "set_id",
        value: function set_id(id) {
          this.id = id;
        }
      }, {
        key: "get_id",
        value: function get_id() {
          return this.id;
        }
      }, {
        key: "set_pws",
        value: function set_pws(pw) {
          this.psw = pw;
        }
      }, {
        key: "get_pws",
        value: function get_pws() {
          return this.psw;
        }
      }, {
        key: "set_Ogretim_Turu",
        value: function set_Ogretim_Turu(O) {
          this.Ogretim_Turu = O;
        }
      }, {
        key: "get_Ogretim_Turu",
        value: function get_Ogretim_Turu() {
          return this.Ogretim_Turu;
        }
      }, {
        key: "set_Donem",
        value: function set_Donem(a) {
          this.Donem = a;
        }
      }, {
        key: "get_Donem",
        value: function get_Donem() {
          return this.Donem;
        }
      }, {
        key: "get_date",
        value: function get_date() {
          var d = new Date();
          var n = d.getFullYear();
          return n - 1 + '-' + n;
        }
      }]);

      return StudentsecService;
    }();

    StudentsecService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    StudentsecService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentsecService);
    /***/
  },

  /***/
  "./src/app/anasistem/student/student.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/anasistem/student/student.component.ts ***!
    \********************************************************/

  /*! exports provided: StudentComponent */

  /***/
  function srcAppAnasistemStudentStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentComponent", function () {
      return StudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./src/app/anasistem/node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var C = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");

    var A = function A(name, id) {
      _classCallCheck(this, A);

      this.name = name;
      this.id = id;
    };

    var StudentComponent = /*#__PURE__*/function () {
      function StudentComponent(db, router, route, st, cookieservice, http) {
        var _this65 = this;

        _classCallCheck(this, StudentComponent);

        this.db = db;
        this.router = router;
        this.route = route;
        this.st = st;
        this.cookieservice = cookieservice;
        this.http = http;
        this.pswfc = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''); // control in the password failed value

        this.cookies = [];
        this.t = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]();
        this.options = [];
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
          return _this65._filter(value);
        }));
        this.st.set_id(undefined);
        this.r = '';
        this.L = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"](function (obs) {
          _this65.db.database.ref('AlinmisDersler/2019-2020/IOgretim/algo22').once('value', function (snap) {
            snap.forEach(function (a) {
              console.log('read');
              console.log(a.val());

              _this65.t.push(new A(a.val(), a.key));
            });
            obs.next(_this65.t);
          });
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__('#deneme').css('visibility', 'hidden');
      }

      _createClass(StudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this66 = this;

          this.router.urlUpdateStrategy;
          this.cookies = this.cookieservice.getAll();

          for (var key in this.cookies) {
            console.log(key[0]);

            if (key[0] === 's') {
              this.options.push(key.substring(1, key.length).toString());
            }
          }

          this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (value) {
            return _this66._filter(value);
          }));
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.options.filter(function (option) {
            return option.toLowerCase().includes(filterValue);
          });
        }
      }, {
        key: "func",
        value: function func() {
          var pswd = jquery__WEBPACK_IMPORTED_MODULE_3__('#pwd').val().toString().trim();
          var id = jquery__WEBPACK_IMPORTED_MODULE_3__('#uid').val().toString().trim();
          this.st.set_id(id);
          this.st.set_pws(pswd);
          this.router.navigate(['ogrencisayfasi'], {
            relativeTo: this.route
          });
        }
      }, {
        key: "fcall",
        value: function fcall(op) {
          this.pswfc.setValue(this.cookies['s' + op.toString()]);
        }
      }]);

      return StudentComponent;
    }();

    StudentComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_5__["StudentsecService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]
      }];
    };

    StudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./student.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/anasistem/student/student.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./style.css */
      "./src/app/anasistem/student/style.css")).default]
    })], StudentComponent);
    /***/
  },

  /***/
  "./src/app/anasistem/student/style.css":
  /*!*********************************************!*\
    !*** ./src/app/anasistem/student/style.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAnasistemStudentStyleCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table\r\n{\r\n    border: 1px solid red;\r\n    border-radius: 20%;\r\n}\r\n#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid #73AD21;\r\n    padding: 20px;\r\n    width: 80%;\r\n    height: 307px;\r\n    margin: 100px;\r\n}\r\n#ab\r\n{\r\n    margin-top: -50px;\r\n    background: white;\r\n    width: 200px;\r\n}\r\n#academic\r\n{\r\n    background: url('student.jpg');\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hc2lzdGVtL3N0dWRlbnQvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtBQUNqQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBOztJQUVJLDhCQUFxRDtJQUNyRCxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FuYXNpc3RlbS9zdHVkZW50L3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlXHJcbntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxufVxyXG4jcmNvcm5lcnMyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzNBRDIxO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDMwN3B4O1xyXG4gICAgbWFyZ2luOiAxMDBweDtcclxufVxyXG4jYWJcclxue1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufVxyXG4jYWNhZGVtaWNcclxue1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0dWRlbnQuanBnJyk7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxufVxyXG4iXX0= */";
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


    var _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_sheetstudents_sheetstudents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _anasistem_anasistem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./anasistem/anasistem.component */
    "./src/app/anasistem/anasistem.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_idarikismi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./anasistem/idarikismi/idarikismi.component */
    "./src/app/anasistem/idarikismi/idarikismi.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademikkismi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademikkismi.component */
    "./src/app/anasistem/akademikkismi/akademikkismi.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _anasistem_student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./anasistem/student/student.component */
    "./src/app/anasistem/student/student.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciisleri_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciisleri.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciisleri.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrenciislerimenue_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_yeniogrencikayit_yeniogrencikayit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencinumarasi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_ogrencibilgileri_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_sonuclar_sonuclar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_borc_borc_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.ts");
    /* harmony import */


    var _anasistem_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./anasistem/pagenotfound/pagenotfound.component */
    "./src/app/anasistem/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_menu_idari_acilacak_dersler_acilacak_dersler_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component */
    "./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_menu_idari_menu_idari_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./anasistem/idarikismi/menu-idari/menu-idari.component */
    "./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_ogrencisayfasi_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/ogrencisayfasi.component */
    "./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_ders_secim_ders_secim_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component */
    "./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_akademik_giris_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/akademik-giris.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.ts");
    /* harmony import */


    var _teachersec_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./teachersec.service */
    "./src/app/teachersec.service.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_ders_alanlari_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_dersler_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/dersler.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/messages/messages.component */
    "./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_sicil_sicil_sicil_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component */
    "./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_menu_idari_ogretim_ogretim_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./anasistem/idarikismi/menu-idari/ogretim/ogretim.component */
    "./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_islerservice_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/islerservice.service.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_alinan_dersler_alinan_dersler_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component */
    "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.ts");
    /* harmony import */


    var _anasistem_hakkimda_hakkimda_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./anasistem/hakkimda/hakkimda.component */
    "./src/app/anasistem/hakkimda/hakkimda.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_alinan_dersler_alinandersler_service_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/alinan-dersler/alinandersler-service.service */
    "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinandersler-service.service.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_chart_chart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.ts");

    var routes = [{
      path: 'anasistem',
      component: _anasistem_anasistem_component__WEBPACK_IMPORTED_MODULE_4__["AnasistemComponent"]
    }, {
      path: 'anasistem/idarikismi',
      component: _anasistem_idarikismi_idarikismi_component__WEBPACK_IMPORTED_MODULE_5__["IdarikismiComponent"]
    }, {
      path: 'anasistem/akademikkismi',
      component: _anasistem_akademikkismi_akademikkismi_component__WEBPACK_IMPORTED_MODULE_6__["AkademikkismiComponent"]
    }, {
      path: 'anasistem/student',
      component: _anasistem_student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"]
    }, {
      path: 'anasistem/isler',
      component: _anasistem_ogrenciisleri_ogrenciisleri_component__WEBPACK_IMPORTED_MODULE_9__["OgrenciisleriComponent"]
    }, {
      path: 'anasistem/Hakkimda',
      component: _anasistem_hakkimda_hakkimda_component__WEBPACK_IMPORTED_MODULE_31__["HakkimdaComponent"]
    }, {
      path: 'anasistem/isler/ogrenciIsleriMenue',
      component: _anasistem_ogrenciisleri_ogrenciislerimenue_ogrenciislerimenue_component__WEBPACK_IMPORTED_MODULE_10__["OgrenciislerimenueComponent"]
    }, {
      path: 'anasistem/isler/ogrenciIsleriMenue/yenikayit',
      component: _anasistem_ogrenciisleri_ogrenciislerimenue_yeniogrencikayit_yeniogrencikayit_component__WEBPACK_IMPORTED_MODULE_11__["YeniogrencikayitComponent"]
    }, {
      path: 'anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi',
      component: _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencinumarasi_component__WEBPACK_IMPORTED_MODULE_12__["OgrencinumarasiComponent"]
    }, {
      path: 'anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri',
      component: _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_ogrencibilgileri_component__WEBPACK_IMPORTED_MODULE_13__["OgrencibilgileriComponent"],
      canActivate: [_anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_islerservice_service__WEBPACK_IMPORTED_MODULE_29__["IslerserviceService"]]
    }, {
      path: 'anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri/sonuclar',
      component: _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_sonuclar_sonuclar_component__WEBPACK_IMPORTED_MODULE_14__["SonuclarComponent"],
      canActivate: [_anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_islerservice_service__WEBPACK_IMPORTED_MODULE_29__["IslerserviceService"]]
    }, {
      path: 'anasistem/isler/ogrenciIsleriMenue/ogrencinumarasi/ogrencibilgileri/borc',
      component: _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_borc_borc_component__WEBPACK_IMPORTED_MODULE_15__["BorcComponent"]
    }, {
      path: '',
      redirectTo: '/anasistem',
      pathMatch: 'full'
    }, {
      path: 'anasistem/idarikismi/idari_menu/Ogretim/acilacakdersler',
      component: _anasistem_idarikismi_menu_idari_acilacak_dersler_acilacak_dersler_component__WEBPACK_IMPORTED_MODULE_17__["AcilacakDerslerComponent"]
    }, {
      path: 'anasistem/idarikismi/idari_menu',
      component: _anasistem_idarikismi_menu_idari_menu_idari_component__WEBPACK_IMPORTED_MODULE_18__["MenuIdariComponent"]
    }, {
      path: 'anasistem/student/ogrencisayfasi',
      component: _anasistem_student_ogrencisayfasi_ogrencisayfasi_component__WEBPACK_IMPORTED_MODULE_19__["OgrencisayfasiComponent"],
      canActivate: [_anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_20__["StudentsecService"]]
    }, {
      path: 'anasistem/student/ogrencisayfasi/DersSecim',
      component: _anasistem_student_ogrencisayfasi_ders_secim_ders_secim_component__WEBPACK_IMPORTED_MODULE_21__["DersSecimComponent"]
    }, {
      path: 'anasistem/akademikkismi/giris',
      component: _anasistem_akademikkismi_akademik_giris_akademik_giris_component__WEBPACK_IMPORTED_MODULE_22__["AkademikGirisComponent"],
      canActivate: [_teachersec_service__WEBPACK_IMPORTED_MODULE_23__["TeachersecService"]]
    }, {
      path: 'anasistem/akademikkismi/giris/dersler',
      component: _anasistem_akademikkismi_akademik_giris_dersler_dersler_component__WEBPACK_IMPORTED_MODULE_25__["DerslerComponent"],
      canActivate: [_teachersec_service__WEBPACK_IMPORTED_MODULE_23__["TeachersecService"]]
    }, {
      path: 'anasistem/akademikkismi/giris/dersler/DersAlanlari',
      component: _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_ders_alanlari_component__WEBPACK_IMPORTED_MODULE_24__["DersAlanlariComponent"]
    }, {
      path: 'anasistem/student/ogrencisayfasi/Messages',
      component: _anasistem_student_ogrencisayfasi_messages_messages_component__WEBPACK_IMPORTED_MODULE_26__["MessagesComponent"]
    }, {
      path: 'anasistem/student/ogrencisayfasi/sicil',
      component: _anasistem_student_ogrencisayfasi_sicil_sicil_sicil_component__WEBPACK_IMPORTED_MODULE_27__["SicilComponent"]
    }, {
      path: 'anasistem/idarikismi/idari_menu/Ogretim',
      component: _anasistem_idarikismi_menu_idari_ogretim_ogretim_component__WEBPACK_IMPORTED_MODULE_28__["OgretimComponent"]
    }, {
      path: 'anasistem/student/ogrencisayfasi/dersler',
      component: _anasistem_student_ogrencisayfasi_alinan_dersler_alinan_dersler_component__WEBPACK_IMPORTED_MODULE_30__["AlinanDerslerComponent"],
      canActivate: [_anasistem_student_ogrencisayfasi_alinan_dersler_alinandersler_service_service__WEBPACK_IMPORTED_MODULE_32__["AlinanderslerServiceService"]]
    }, {
      path: 'anasistem/akademikkismi/giris/dersler/DersAlanlari/sheet',
      component: _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_sheetstudents_sheetstudents_component__WEBPACK_IMPORTED_MODULE_1__["SheetstudentsComponent"],
      canActivate: [_teachersec_service__WEBPACK_IMPORTED_MODULE_23__["TeachersecService"]]
    }, {
      path: 'anasistem/akademikkismi/giris/dersler/DersAlanlari/chart',
      component: _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_chart_chart_component__WEBPACK_IMPORTED_MODULE_33__["ChartComponent"],
      canActivate: [_teachersec_service__WEBPACK_IMPORTED_MODULE_23__["TeachersecService"]]
    }, {
      path: '**',
      component: _anasistem_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__["PagenotfoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");
    /* harmony import */


    var _teachersec_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./teachersec.service */
    "./src/app/teachersec.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, st, Tc) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.st = st;
        this.Tc = Tc;
        this.title = 'sistem';
        console.log('kullandi');
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "student",
        value: function student() {
          this.st.set_id(undefined);
          this.Tc.set_id(undefined);
          this.router.navigate(['anasistem/student']);
        }
      }, {
        key: "akademikkismi",
        value: function akademikkismi() {
          this.st.set_id(undefined);
          this.Tc.set_id(undefined);
          this.router.navigate(['anasistem/akademikkismi']);
        }
      }, {
        key: "idarikismi",
        value: function idarikismi() {
          this.st.set_id(undefined);
          this.Tc.set_id(undefined);
          this.router.navigate(['anasistem/idarikismi']);
        }
      }, {
        key: "isler",
        value: function isler() {
          this.st.set_id(undefined);
          this.Tc.set_id(undefined);
          this.router.navigate(['anasistem/isler']);
        }
      }, {
        key: "AnaSayfa",
        value: function AnaSayfa() {
          this.st.set_id(undefined);
          this.Tc.set_id(undefined);
          this.router.navigate(['anasistem']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_3__["StudentsecService"]
      }, {
        type: _teachersec_service__WEBPACK_IMPORTED_MODULE_4__["TeachersecService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _anasistem_anasistem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./anasistem/anasistem.component */
    "./src/app/anasistem/anasistem.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _anasistem_akademikkismi_akademikkismi_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademikkismi.component */
    "./src/app/anasistem/akademikkismi/akademikkismi.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_idarikismi_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./anasistem/idarikismi/idarikismi.component */
    "./src/app/anasistem/idarikismi/idarikismi.component.ts");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _anasistem_student_student_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./anasistem/student/student.component */
    "./src/app/anasistem/student/student.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciisleri_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciisleri.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciisleri.component.ts");
    /* harmony import */


    var _anasistem_hakkimda_hakkimda_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./anasistem/hakkimda/hakkimda.component */
    "./src/app/anasistem/hakkimda/hakkimda.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "../../environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrenciislerimenue_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrenciislerimenue.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_yeniogrencikayit_yeniogrencikayit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/yeniogrencikayit/yeniogrencikayit.component.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencinumarasi_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencinumarasi.component.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_ogrencibilgileri_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/ogrencibilgileri.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _anasistem_myservice_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./anasistem/myservice.service */
    "./src/app/anasistem/myservice.service.ts");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_sonuclar_sonuclar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/sonuclar/sonuclar.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_borc_borc_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component */
    "./src/app/anasistem/ogrenciisleri/ogrenciislerimenue/ogrencinumarasi/ogrencibilgileri/borc/borc.component.ts");
    /* harmony import */


    var _anasistem_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./anasistem/pagenotfound/pagenotfound.component */
    "./src/app/anasistem/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_menu_idari_acilacak_dersler_acilacak_dersler_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component */
    "./src/app/anasistem/idarikismi/menu-idari/acilacak-dersler/acilacak-dersler.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_menu_idari_menu_idari_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./anasistem/idarikismi/menu-idari/menu-idari.component */
    "./src/app/anasistem/idarikismi/menu-idari/menu-idari.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_ogrencisayfasi_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/ogrencisayfasi.component */
    "./src/app/anasistem/student/ogrencisayfasi/ogrencisayfasi.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_ders_secim_ders_secim_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component */
    "./src/app/anasistem/student/ogrencisayfasi/ders-secim/ders-secim.component.ts");
    /* harmony import */


    var _bar_bar_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./bar/bar.component */
    "./src/app/bar/bar.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_akademik_giris_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/akademik-giris.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/akademik-giris.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_ders_alanlari_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/ders-alanlari.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_dersler_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/dersler.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/dersler.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_messages_messages_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/messages/messages.component */
    "./src/app/anasistem/student/ogrencisayfasi/messages/messages.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_sicil_sicil_sicil_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component */
    "./src/app/anasistem/student/ogrencisayfasi/sicil/sicil/sicil.component.ts");
    /* harmony import */


    var _anasistem_idarikismi_menu_idari_ogretim_ogretim_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./anasistem/idarikismi/menu-idari/ogretim/ogretim.component */
    "./src/app/anasistem/idarikismi/menu-idari/ogretim/ogretim.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_alinan_dersler_alinan_dersler_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component */
    "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/alinan-dersler.component.ts");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_alinan_dersler_dersdetay_dersdetay_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component */
    "./src/app/anasistem/student/ogrencisayfasi/alinan-dersler/dersdetay/dersdetay.component.ts");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ngx-contextmenu */
    "./node_modules/ngx-contextmenu/fesm2015/ngx-contextmenu.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_sheetstudents_sheetstudents_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/sheetstudents/sheetstudents.component.ts");
    /* harmony import */


    var _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_chart_chart_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component */
    "./src/app/anasistem/akademikkismi/akademik-giris/dersler/ders-alanlari/chart/chart.component.ts"); // import {environment} from '../environments/environment';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _anasistem_anasistem_component__WEBPACK_IMPORTED_MODULE_5__["AnasistemComponent"], _anasistem_akademikkismi_akademikkismi_component__WEBPACK_IMPORTED_MODULE_10__["AkademikkismiComponent"], _anasistem_idarikismi_idarikismi_component__WEBPACK_IMPORTED_MODULE_11__["IdarikismiComponent"], _anasistem_student_student_component__WEBPACK_IMPORTED_MODULE_15__["StudentComponent"], _anasistem_ogrenciisleri_ogrenciisleri_component__WEBPACK_IMPORTED_MODULE_16__["OgrenciisleriComponent"], _anasistem_hakkimda_hakkimda_component__WEBPACK_IMPORTED_MODULE_17__["HakkimdaComponent"], _anasistem_ogrenciisleri_ogrenciislerimenue_ogrenciislerimenue_component__WEBPACK_IMPORTED_MODULE_23__["OgrenciislerimenueComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNavList"], _anasistem_ogrenciisleri_ogrenciislerimenue_yeniogrencikayit_yeniogrencikayit_component__WEBPACK_IMPORTED_MODULE_24__["YeniogrencikayitComponent"], _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencinumarasi_component__WEBPACK_IMPORTED_MODULE_26__["OgrencinumarasiComponent"], _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_ogrencibilgileri_component__WEBPACK_IMPORTED_MODULE_27__["OgrencibilgileriComponent"], _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_sonuclar_sonuclar_component__WEBPACK_IMPORTED_MODULE_30__["SonuclarComponent"], _anasistem_ogrenciisleri_ogrenciislerimenue_ogrencinumarasi_ogrencibilgileri_borc_borc_component__WEBPACK_IMPORTED_MODULE_32__["BorcComponent"], _anasistem_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_33__["PagenotfoundComponent"], _anasistem_idarikismi_menu_idari_acilacak_dersler_acilacak_dersler_component__WEBPACK_IMPORTED_MODULE_34__["AcilacakDerslerComponent"], _anasistem_idarikismi_menu_idari_menu_idari_component__WEBPACK_IMPORTED_MODULE_35__["MenuIdariComponent"], _anasistem_student_ogrencisayfasi_ogrencisayfasi_component__WEBPACK_IMPORTED_MODULE_36__["OgrencisayfasiComponent"], _anasistem_student_ogrencisayfasi_ders_secim_ders_secim_component__WEBPACK_IMPORTED_MODULE_37__["DersSecimComponent"], _bar_bar_component__WEBPACK_IMPORTED_MODULE_38__["BarComponent"], _anasistem_akademikkismi_akademik_giris_akademik_giris_component__WEBPACK_IMPORTED_MODULE_39__["AkademikGirisComponent"], _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_ders_alanlari_component__WEBPACK_IMPORTED_MODULE_40__["DersAlanlariComponent"], _anasistem_akademikkismi_akademik_giris_dersler_dersler_component__WEBPACK_IMPORTED_MODULE_41__["DerslerComponent"], _anasistem_student_ogrencisayfasi_messages_messages_component__WEBPACK_IMPORTED_MODULE_42__["MessagesComponent"], _anasistem_student_ogrencisayfasi_sicil_sicil_sicil_component__WEBPACK_IMPORTED_MODULE_43__["SicilComponent"], _anasistem_idarikismi_menu_idari_ogretim_ogretim_component__WEBPACK_IMPORTED_MODULE_44__["OgretimComponent"], _anasistem_student_ogrencisayfasi_alinan_dersler_alinan_dersler_component__WEBPACK_IMPORTED_MODULE_46__["AlinanDerslerComponent"], _anasistem_student_ogrencisayfasi_alinan_dersler_dersdetay_dersdetay_component__WEBPACK_IMPORTED_MODULE_47__["DersdetayComponent"], _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_sheetstudents_sheetstudents_component__WEBPACK_IMPORTED_MODULE_51__["SheetstudentsComponent"], _anasistem_akademikkismi_akademik_giris_dersler_ders_alanlari_chart_chart_component__WEBPACK_IMPORTED_MODULE_52__["ChartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_25__["AngularFireAuthModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_45__["HttpClientModule"], ngx_contextmenu__WEBPACK_IMPORTED_MODULE_49__["ContextMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"]],
      exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_12__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"], _anasistem_student_ogrencisayfasi_ogrencisayfasi_component__WEBPACK_IMPORTED_MODULE_36__["OgrencisayfasiComponent"]],
      providers: [_anasistem_myservice_service__WEBPACK_IMPORTED_MODULE_29__["MyserviceService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_50__["CookieService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      entryComponents: [_anasistem_student_ogrencisayfasi_alinan_dersler_dersdetay_dersdetay_component__WEBPACK_IMPORTED_MODULE_47__["DersdetayComponent"]]
    })], AppModule);
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_48__["platformBrowserDynamic"])().bootstrapModule(AppModule);
    /***/
  },

  /***/
  "./src/app/bar/bar.component.scss":
  /*!****************************************!*\
    !*** ./src/app/bar/bar.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppBarBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci9iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/bar/bar.component.ts":
  /*!**************************************!*\
    !*** ./src/app/bar/bar.component.ts ***!
    \**************************************/

  /*! exports provided: BarComponent */

  /***/
  function srcAppBarBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarComponent", function () {
      return BarComponent;
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


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../anasistem/student/ogrencisayfasi/studentsec.service */
    "./src/app/anasistem/student/ogrencisayfasi/studentsec.service.ts");

    var BarComponent = /*#__PURE__*/function () {
      function BarComponent(db, router, route, st, zone) {
        _classCallCheck(this, BarComponent);

        this.db = db;
        this.router = router;
        this.route = route;
        this.st = st;
        this.zone = zone;
        console.log('from service' + this.st.get_id() + '   ' + this.st.get_pws()); // let id = this.route.snapshot.paramMap.get('id');
        // console.log(id+' '+this.route.snapshot.paramMap.get('name'));
      }
      /**
       * geri
       */


      _createClass(BarComponent, [{
        key: "geri",
        value: function geri() {
          var _this67 = this;

          this.zone.run(function () {
            return _this67.router.navigate(['../'], {
              relativeTo: _this67.route
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.db.database.ref('secim').on('value', function (element) {
            if (element.val() === true) {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#DS').css('visibility', 'visible');
              jquery__WEBPACK_IMPORTED_MODULE_2__('#DS').text('Ders Secimleri');
            } else {
              jquery__WEBPACK_IMPORTED_MODULE_2__('#DS').css('visibility', 'hidden');
              jquery__WEBPACK_IMPORTED_MODULE_2__('#DS').text('');
            }
          });
        }
      }, {
        key: "nav",
        value: function nav() {
          var _this68 = this;

          this.zone.run(function () {
            return _this68.router.navigate(["DersSecim"], {
              relativeTo: _this68.route
            });
          });
        }
      }]);

      return BarComponent;
    }();

    BarComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _anasistem_student_ogrencisayfasi_studentsec_service__WEBPACK_IMPORTED_MODULE_5__["StudentsecService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    BarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/bar/bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bar.component.scss */
      "./src/app/bar/bar.component.scss")).default]
    })], BarComponent);
    /***/
  },

  /***/
  "./src/app/teachersec.service.ts":
  /*!***************************************!*\
    !*** ./src/app/teachersec.service.ts ***!
    \***************************************/

  /*! exports provided: TeachersecService */

  /***/
  function srcAppTeachersecServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeachersecService", function () {
      return TeachersecService;
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
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    var C = __webpack_require__(
    /*! js-cookie */
    "./node_modules/js-cookie/src/js.cookie.js");

    var TeachersecService = /*#__PURE__*/function () {
      function TeachersecService(db, route, router, zone, cookies) {
        _classCallCheck(this, TeachersecService);

        this.db = db;
        this.route = route;
        this.router = router;
        this.zone = zone;
        this.cookies = cookies;
        this.ButDegeri = undefined;
        this.myObj = {};
      }

      _createClass(TeachersecService, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this69 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this69.db.database.ref('Teachers/' + _this69.get_id()).once('value', function (snap) {
              if (_this69.get_id() === undefined) {
                _this69.zone.run(function () {
                  _this69.router.navigate(['anasistem/akademikkismi']);
                });
              }

              if (_this69.get_id() !== undefined && snap.exists()) {
                if (_this69.get_pass() === snap.val().password) {
                  if (_this69.cookies.check(_this69.get_id()) === false) _this69.cookies.set('t' + _this69.get_id(), _this69.get_pass(), 100000, '/');
                  observer.next(true);
                } else {
                  observer.next(false);
                }
              }
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
            return regeneratorRuntime.wrap(function _callee33$(_context36) {
              while (1) {
                switch (_context36.prev = _context36.next) {
                  case 0:
                    this.ButDegeri = undefined;

                  case 1:
                  case "end":
                    return _context36.stop();
                }
              }
            }, _callee33, this);
          }));
        } // Dersler_Kredi ={
        //   "algoritma": {
        //     "kredi":4
        //   },
        //   "YazlabI":{
        //     "kredi":5
        //   },
        //   "YazlabII":{
        //     "kredi":5
        //   },
        //   "ProgramalamaI":{
        //     "kredi":3
        //   } ,
        //   "ProgramalamaII":{
        //     "kredi":3
        //   } ,
        //   "BilLabI":{
        //     "kredi":3
        //   } ,
        //   "BilLabII":{
        //     "kredi":3
        //   } ,
        //   "NoronAglari":{
        //     "kredi":5
        //   } ,
        //   "BulanikMantik":{
        //     "kredi":5
        //   } ,
        //   "Biyonformatic":{
        //     "kredi":5
        //   } ,
        //   "ProlabI":{
        //     "kredi":3
        //   } ,
        //   "ProlabII":{
        //     "kredi":4
        //   } ,
        //   "VeriYapilari":{
        //     "kredi":4
        //   } ,
        //   "VeriTabani":{
        //     "kredi":3
        //   } ,
        // }

      }, {
        key: "set_id",
        value: function set_id(id) {
          this.id = id;
        }
      }, {
        key: "set_pass",
        value: function set_pass(pass) {
          this.pass = pass;
        }
      }, {
        key: "set_ogretim",
        value: function set_ogretim(o) {
          this.Ogretim = o;
        }
      }, {
        key: "get_id",
        value: function get_id() {
          return this.id;
        }
      }, {
        key: "get_pass",
        value: function get_pass() {
          return this.pass;
        }
      }, {
        key: "get_ogretim",
        value: function get_ogretim() {
          return this.Ogretim;
        }
      }, {
        key: "set_Ders_adi",
        value: function set_Ders_adi(o) {
          this.Ders_adi = o;
        }
      }, {
        key: "get_Ders_adi",
        value: function get_Ders_adi() {
          return this.Ders_adi;
        }
      }, {
        key: "set_donem",
        value: function set_donem(s) {
          this.donem = s;
        }
      }, {
        key: "get_donem",
        value: function get_donem() {
          return this.donem;
        }
      }, {
        key: "get_date",
        value: function get_date() {
          var d = new Date();
          var n = d.getFullYear();
          return n - 1 + '-' + n;
        }
      }]);

      return TeachersecService;
    }();

    TeachersecService.ctorParameters = function () {
      return [{
        type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    TeachersecService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TeachersecService);
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
    // Included with Angular CLI.

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


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
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
    /*! D:\yuklemeden once\BitirmeProjesi\src\app\sistem\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map