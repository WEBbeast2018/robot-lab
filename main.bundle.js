webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_robot_list_robot_list_component__ = __webpack_require__("../../../../../src/app/components/robot-list/robot-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_robot_detail_robot_detail_component__ = __webpack_require__("../../../../../src/app/components/robot-detail/robot-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_part_list_part_list_component__ = __webpack_require__("../../../../../src/app/components/part-list/part-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_part_part_component__ = __webpack_require__("../../../../../src/app/components/part/part.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'robots', component: __WEBPACK_IMPORTED_MODULE_2__components_robot_list_robot_list_component__["a" /* RobotListComponent */] },
    { path: '', redirectTo: '/robots', pathMatch: 'full' },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_3__components_robot_detail_robot_detail_component__["a" /* RobotDetailComponent */] },
    { path: 'partDetail/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_part_part_component__["a" /* PartComponent */] },
    { path: 'parts', component: __WEBPACK_IMPORTED_MODULE_4__components_part_list_part_list_component__["a" /* PartListComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-header-nav></app-header-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_robot_list_robot_list_component__ = __webpack_require__("../../../../../src/app/components/robot-list/robot-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_robot_detail_robot_detail_component__ = __webpack_require__("../../../../../src/app/components/robot-detail/robot-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_part_part_component__ = __webpack_require__("../../../../../src/app/components/part/part.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_part_list_part_list_component__ = __webpack_require__("../../../../../src/app/components/part-list/part-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_nav_header_nav_component__ = __webpack_require__("../../../../../src/app/components/header-nav/header-nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_robot_list_robot_list_component__["a" /* RobotListComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_robot_detail_robot_detail_component__["a" /* RobotDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_part_part_component__["a" /* PartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_part_list_part_list_component__["a" /* PartListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_header_nav_header_nav_component__["a" /* HeaderNavComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/header-nav/header-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header class='header'>\r\n\r\n  <h1>\r\n    <a routerLink=\"/\" (click)=\"toggleSelect('robot')\">\r\n      <img src=\"../../../assets/images/icon.png\" class=\"logo\">\r\n      <span>ROBOT LAB</span>\r\n    </a>\r\n  </h1>\r\n\r\n  <nav>\r\n    <button routerLink=\"/robots\" type=\"button\" [ngClass]=\"{'selected':isRobotsSelected === true}\"\r\n            (click)=\"toggleSelect('robot')\">\r\n      Robots\r\n    </button>\r\n    <button routerLink=\"/parts\" type=\"button\" [ngClass]=\"{'selected':isRobotsSelected === false}\"\r\n            (click)=\"toggleSelect('part')\">\r\n      Parts\r\n    </button>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/header-nav/header-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  text-align: center;\n  height: 250px; }\n  .header h1 {\n    color: black;\n    font-weight: 800;\n    font-family: sans-serif;\n    font-size: 60px; }\n  .header .logo {\n    height: 50px; }\n  .header nav {\n    max-width: 80%;\n    margin: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .header nav button {\n      -webkit-transition: all 0.5s;\n      transition: all 0.5s;\n      font-size: 70px;\n      font-weight: 600;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      outline: none;\n      cursor: pointer;\n      border-radius: 3px;\n      height: 80px;\n      border-color: transparent;\n      background: transparent;\n      width: 100px;\n      color: coral; }\n  .header nav button:hover {\n        color: white;\n        -webkit-animation: neon 1.5s ease-in-out infinite alternate;\n                animation: neon 1.5s ease-in-out infinite alternate; }\n  .header nav .selected {\n      border: none;\n      outline: none;\n      -webkit-box-shadow: 3px 1px 10px 5px coral;\n              box-shadow: 3px 1px 10px 5px coral; }\n  @-webkit-keyframes neon {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px coral, 0 0 70px coral, 0 0 80px coral, 0 0 100px coral, 0 0 150px coral; }\n  to {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px coral, 0 0 35px coral, 0 0 40px coral, 0 0 50px coral, 0 0 75px coral; } }\n  @keyframes neon {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px coral, 0 0 70px coral, 0 0 80px coral, 0 0 100px coral, 0 0 150px coral; }\n  to {\n    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px coral, 0 0 35px coral, 0 0 40px coral, 0 0 50px coral, 0 0 75px coral; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header-nav/header-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
        this.isRobotsSelected = true;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.toggleSelect = function (type) {
        type === 'robot' ? this.isRobotsSelected = true : this.isRobotsSelected = false;
    };
    HeaderNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header-nav',
            template: __webpack_require__("../../../../../src/app/components/header-nav/header-nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header-nav/header-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/part-list/part-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-div\">\r\n  <div class=\"part-div-card\" *ngFor=\"let part of parts\">\r\n    <a\r\n      routerLink=\"/partDetail/{{part.id}}\">\r\n      <span>{{part.name}}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/part-list/part-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n.part-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 80%;\n  margin: auto; }\n.part-div img {\n    width: 30px;\n    height: 30px;\n    display: inline; }\n.part-div .part-div-card {\n    color: #eee;\n    min-width: 55px;\n    border-radius: 2px;\n    height: 100px;\n    width: 150px;\n    display: inline-block;\n    text-align: center;\n    position: relative;\n    margin-left: 50px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAQAAABpN6lAAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiARgMKh/U7H5QAAAGy0lEQVR42u2dbWwURRjHf7dtaSESRCwqKLYKpEQqBRIVIRRFBUUbIDFgxEDECk1EIIjQRAz6BVCbgNGoCSa8CGL4AAIJQpQo1QbBQIiSkCLvAuXdivSV3vnhrsfM7d7t3t3Wh7u9/3yZnf3f7P957mZnZm/2GXCOHsznCAFT8vMnsy3449jCDQv+VTZyt4ldyFLOW7AbqWaoid2N2RyyYAc4TiVGHFY5Rjb7LC/YnsZE8GfEZG+KYOdzIQb7PJ00to9dMWuf1BEOGBbzkgE2R/APxmTfoLfGrrCpfbLGHmDD/tG5Wc5/LP1tzj8TFz+L0UnUbscujfjFuOIAX5w1xcd3lx2HXR1yu0glZCf4uVJagCF86oi9nG8A2MD9Dti7WQDAIp5zVPs4rgD9WPN/OmAvTUCeQ/ZJ9gDQ5Ih9NcS+6LD2/dQ5rtsEzzeBjAOkBUjD8w5wehPsTrF2vAU/cIdSksN3GiNHyc9gLAD3KmXztNFdkZIfFqpJveLTWu09tSutpwXoqpWVsptGd1zko5way0nNrZ2aqWZC8uYXUyNuSjLpS25LxvyhNIubkGzaS1YsE2Od7MJO7nKnHQmiN9eoSeyjK8S/PXdSA32iGxl9XpXDRbopx81sYAcB6S/UAQyKmEKhUrKAD+Kv5knNi1tSrDF0Ybuifnd0YvAXkMdwrd8GmKr00/X05ZK0TXGiF6fDw7w2JtIScb6BGm4A5FLFZZtWtFPamoRQa2NVHUvxwRIHt5FV0rYkhD0OLCszeF5apygWGORLaxDFg5nZoHbUQGs438XUL6QymmgO53PVR3n6L+Blbg+n9dKaXUWlYtl76gnPNwHPO0C/B4xQWkdhvFXd0hisjGsf1k/VeXogVOf5JmDgl5YgijaDXdIaRFFr8IW0BkEEWJpNNXN5K2K9Rvrhuul5Ritb+Zza9sOuykipfSSYTr1AVAvaxwHXTGda8AQy3aC0AGlkHCAtQBqJrhFKNWSZ1jP5g7f5bKA/M3nB9PznTmnNrmIKU0xlJ/mIT2AMfg/PBh83WOhg3WX6osKwXXeb3hhtxF4+kPYwMt2gdlTFb+F8BSOlxbmINWwP58t4KZoDflZeexibVg44wIZwvkB1gOebgOcdoDeBddp/g+mEJSwO53OjOyC9jFaRF+3dBs83AYND0hJEcdHgM2kNotgGOWz06GzwMlXkZtPKixTQ33Q3mMdT0ha4iO+piihp5Rea2nuBE5wwfWSyfa0phDMRr3OEkekFpAVII+MAaQHS8LwDsoEsxlk8Fh8hLc1VjDCNZfzUsppz0JdTHh0IBbhAT4Nl3CetVAz5vGpYRGjxEqYajmMApCe6Z3oB7WiHMid4Iq3+M6rh93C+hEfVU+pS2fFK+aq06gXmKOULM0tlFXjeAfo9oJJp4fwQaWmuYjqjwvl+0R3wiLTODsNABlqf8HwTMCzWiHoJzQbrpDWI4qDBSq5LqxDDP7yTzV8MooIBpqUyxfSS1uciziojwSBa2cq6WF9+eo0Eo1qQ6QWkBUgj4wBpAdLwvAOCc4EsSkyPxdMrskQ+j0WU+DnC1aALFtk+GF8lrT8h2D8WX0kWvOvpl6fLDCZK6xTFTMMizruXMMTzvUDGAdrRBHzhtFpamquYq1hWGd0BHoTnHaA/FR6shChPr4gCRaHIxmDaniETRcbbMEiFMKkdh4BBtbQGUZx2FkUmNV+udKJ6LfhYTL3NreJXaVsSwt82Vu2nHF/wxWmD3iZ/FSohlvwMD+37kTp4Rdt0ZczNgDkhtHLGropjirfOUpZCwRY6M5Nrivor0Qd8sYzaxqxw/h6+pYVz0pY5gkGviN9zdWIR0wbQ6GAokQrp2UR9OUtcuhvJ2WZQlvCxSVx+smk/nZNrT/NTeJcJPyvcWAk7iLVcEjcm3vQvm5y89+Y0gEoWI7XQi6/TChSFtkUL4gAXlCN1fcHXofj0S5RHsH9o/XCRsg3bAT4G4DWGh8vqtXFIZy22wRzqgT5avOBy1iqhlF1Bnubf4A9rlFY2XuOr6wvmhMoOK2XTNPZy5cxmixr0YViBdt2gU0u0shKnZmWmw9ICpJFxgLQAaSQ6wfmQNvTN02JhAgVA5CZp0VDMcsD5wt33aSDhv/MTdcAbcbFHxhWS5wHLfayjozxBG4BME4jDAfYTykBc/I5kR/JdcUALP9kw9GcudnsTHUuCfYrDNuYfd2xXHJgUc+y9K2JY3clyL/mbc7TI7dSPxmC3URqhZXZMLV91hPlgUMlxywse4k1tY7YghlJt+UjlKG/Tw8R+iB+4bsFuZLVFf9CJZZy21LKP6fHMAP8DftclsdjWLEYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDEtMjRUMTI6NDI6MzErMDE6MDDN7rlnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTAxLTI0VDEyOjQyOjMxKzAxOjAwvLMB2wAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=\");\n    background-size: 70px 70px;\n    background-repeat: no-repeat;\n    background-position: bottom; }\n.part-div a, .part-div a:visited {\n    text-decoration: none;\n    color: coral;\n    display: inline-block;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/part-list/part-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_parts_service__ = __webpack_require__("../../../../../src/app/services/parts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartListComponent = /** @class */ (function () {
    function PartListComponent(partsService) {
        this.partsService = partsService;
    }
    PartListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partsService.getParts().subscribe(function (partsFromAPI) { return _this.parts = partsFromAPI; });
    };
    PartListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-part-list',
            template: __webpack_require__("../../../../../src/app/components/part-list/part-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/part-list/part-list.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_parts_service__["a" /* PartsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_parts_service__["a" /* PartsService */]])
    ], PartListComponent);
    return PartListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/part/part.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"part-div\">\r\n  <div class=\"part-image\">\r\n    <img src=\"assets/images/cpu.png\">\r\n  </div>\r\n  <div class=\"part-info\">\r\n    <div>\r\n      <label>Name</label>\r\n      <span>{{part.name}}</span>\r\n    </div>\r\n    <div>\r\n      <label>Type</label>\r\n      <span>{{part.type}}</span>\r\n    </div>\r\n    <div>\r\n      <label>Cpu</label>\r\n      <span>{{part.cpu}}</span>\r\n    </div>\r\n  </div>\r\n  <button (click)=\"goBack()\" class=\"btn-back\">Go Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/part/part.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host .part-div {\n    background-color: rgba(249, 249, 249, 0.55);\n    padding: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto; }\n  :host .part-div div {\n      margin: 10px; }\n  :host .part-div label {\n      font-size: 1rem;\n      display: inline-block; }\n  :host .part-div span {\n      font-size: 1rem;\n      font-weight: bold; }\n  :host .part-div .part-image img {\n      height: 100px; }\n  :host .part-div .part-info {\n      display: inline-block; }\n  :host .part-div .btn-back {\n      border-radius: 3px;\n      display: inline-block;\n      height: 30px;\n      width: 80px;\n      height: 40px;\n      border: none;\n      background: lightblue;\n      cursor: pointer; }\n  :host .part-div .btn-back:hover {\n      background: #83d2f4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/part/part.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_part_model__ = __webpack_require__("../../../../../src/app/models/part.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_parts_service__ = __webpack_require__("../../../../../src/app/services/parts.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PartComponent = /** @class */ (function () {
    function PartComponent(robotsService, route, location) {
        this.robotsService = robotsService;
        this.route = route;
        this.location = location;
    }
    PartComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.robotsService.getPart(id)
            .subscribe(function (part) { return _this.part = part; });
        this.getCurrectUrl();
    };
    PartComponent.prototype.getCurrectUrl = function () {
        return this.route.url;
    };
    PartComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_part_model__["a" /* Part */])
    ], PartComponent.prototype, "part", void 0);
    PartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-robot-detail',
            template: __webpack_require__("../../../../../src/app/components/part/part.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/part/part.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_parts_service__["a" /* PartsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_parts_service__["a" /* PartsService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], PartComponent);
    return PartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/robot-detail/robot-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"robot-div\">\r\n  <div class=\"robot-image\">\r\n  <img src=\"assets/images/robotic-arm.png\">\r\n</div>\r\n  <div class=\"robot-info\">\r\n    <div>\r\n      <label>Name</label>\r\n      <span>{{robot.name}}</span>\r\n    </div>\r\n    <div>\r\n      <label>Type</label>\r\n      <span>{{robot.type}}</span>\r\n    </div>\r\n    <div>\r\n      <label>Age</label>\r\n      <span>{{robot.age}}</span>\r\n    </div>\r\n    <div>\r\n      <label>Parts List:</label>\r\n      <ul>\r\n        <li *ngFor=\"let part of robot.parts; let i = index\">\r\n          <a\r\n            routerLink=\"/partDetail/{{part.part.id}}\">\r\n            <span>{{i+1}}.{{part.part.name}}\r\n                    Condition:{{part.condition}}\r\n            </span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <button (click)=\"goBack()\" class=\"btn-back\">Go Back</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/robot-detail/robot-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  :host .robot-div {\n    background-color: rgba(249, 249, 249, 0.55);\n    padding: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin: auto; }\n  :host .robot-div div {\n      margin: 10px; }\n  :host .robot-div label {\n      font-size: 1rem;\n      display: inline-block; }\n  :host .robot-div span {\n      font-size: 1rem;\n      font-weight: bold; }\n  :host .robot-div .btn-back {\n      font-size: 14px;\n      border-radius: 3px;\n      display: inline-block;\n      height: 30px;\n      width: 80px;\n      height: 40px;\n      border: none;\n      background: lightblue;\n      cursor: pointer; }\n  :host .robot-div .btn-back:hover {\n      background: #83d2f4; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/robot-detail/robot-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_robot_model__ = __webpack_require__("../../../../../src/app/models/robot.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_robot_service__ = __webpack_require__("../../../../../src/app/services/robot.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RobotDetailComponent = /** @class */ (function () {
    function RobotDetailComponent(robotsService, route, location) {
        this.robotsService = robotsService;
        this.route = route;
        this.location = location;
    }
    RobotDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.robotsService.getRobot(id)
            .subscribe(function (robot) { return _this.robot = robot; });
        this.getCurrectUrl();
    };
    RobotDetailComponent.prototype.getCurrectUrl = function () {
        return this.route.url;
    };
    RobotDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__models_robot_model__["a" /* Robot */])
    ], RobotDetailComponent.prototype, "robot", void 0);
    RobotDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-robot-detail',
            template: __webpack_require__("../../../../../src/app/components/robot-detail/robot-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/robot-detail/robot-detail.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_robot_service__["a" /* RobotService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_robot_service__["a" /* RobotService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], RobotDetailComponent);
    return RobotDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/robot-list/robot-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"robot-div\">\r\n  <div *ngFor=\"let robot of robots\" class=\"robot-div-card\">\r\n       <a\r\n         routerLink=\"/detail/{{robot.id}}\">\r\n         <span>{{robot.name}}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/robot-list/robot-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\n.robot-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  max-width: 80%;\n  margin: auto; }\n.robot-div .robot-div-card {\n    height: 100px;\n    width: 150px;\n    display: inline-block;\n    text-align: center;\n    margin-left: 50px;\n    background-image: url(\"data:image/png;base64,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\");\n    background-size: 70px 70px;\n    background-repeat: no-repeat;\n    background-position: bottom; }\n.robot-div a, .robot-div a:visited {\n    text-decoration: none;\n    color: coral;\n    display: inline-block;\n    width: 100%;\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/robot-list/robot-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_robot_service__ = __webpack_require__("../../../../../src/app/services/robot.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RobotListComponent = /** @class */ (function () {
    function RobotListComponent(robotsService) {
        this.robotsService = robotsService;
    }
    RobotListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.robotsService.getRobots().subscribe(function (robotsFromAPI) { return _this.robots = robotsFromAPI; });
    };
    RobotListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-robot-list',
            template: __webpack_require__("../../../../../src/app/components/robot-list/robot-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/robot-list/robot-list.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_robot_service__["a" /* RobotService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_robot_service__["a" /* RobotService */]])
    ], RobotListComponent);
    return RobotListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mocks/parts.mocks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PARTS; });
var PARTS = [
    {
        cpu: 'i5',
        engine: 'GPU',
        id: 1,
        name: 'Lidar',
        type: 'Sensors'
    },
    {
        cpu: 'Core 2 Duo',
        engine: 'GPU',
        id: 2,
        name: 'Cytron 13A',
        type: 'Cameras'
    },
    {
        cpu: 'Core M',
        engine: 'Volta',
        id: 3,
        name: 'LIDAR-Lite 3',
        type: 'Control Systems'
    },
    {
        cpu: 'Merom-L',
        engine: 'Quadro',
        id: 4,
        name: 'Lidar',
        type: 'hydraulics'
    },
    {
        cpu: 'Penryn',
        engine: '\tTesla',
        id: 4,
        name: 'Lynxmotion',
        type: 'Pneumatics'
    }
];


/***/ }),

/***/ "../../../../../src/app/mocks/robots.mocks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROBOTS; });
var ROBOTS = [
    {
        id: 1,
        age: 15,
        name: 'Dave',
        parts: [{
                part: {
                    cpu: 'Merom-L',
                    engine: 'Quadro',
                    id: 4,
                    name: 'Lidar',
                    type: 'hydraulics'
                },
                condition: 35
            }],
        type: 'droid'
    },
    {
        id: 2,
        age: 16,
        name: 'Dave2',
        parts: [{
                part: {
                    cpu: 'Penryn',
                    engine: '\tTesla',
                    id: 4,
                    name: 'Lynxmotion',
                    type: 'Pneumatics'
                },
                condition: 90
            }, {
                part: {
                    cpu: 'i5',
                    engine: 'GPU',
                    id: 3,
                    name: 'Lidar',
                    type: 'Sensors'
                },
                condition: 90
            }
        ],
        type: 'droid'
    },
    {
        id: 3,
        age: 17,
        name: 'Dave3',
        parts: [{
                part: {
                    cpu: 'Merom-L',
                    engine: 'Quadro',
                    id: 4,
                    name: 'Lidar',
                    type: 'hydraulics'
                },
                condition: 23
            }
        ],
        type: 'droid'
    },
    {
        id: 4,
        age: 18,
        name: 'Dave4',
        parts: [
            {
                part: {
                    cpu: 'i5',
                    engine: 'GPU',
                    id: 1,
                    name: 'Lidar',
                    type: 'Sensors'
                },
                condition: 99
            },
            {
                part: {
                    cpu: 'Core 2 Duo',
                    engine: 'GPU',
                    id: 2,
                    name: 'Cytron 13A',
                    type: 'Cameras'
                },
                condition: 76
            },
            {
                part: {
                    cpu: 'Core M',
                    engine: 'Volta',
                    id: 3,
                    name: 'LIDAR-Lite 3',
                    type: 'Control Systems'
                },
                condition: 87
            }
        ],
        type: 'droid'
    }
];


/***/ }),

/***/ "../../../../../src/app/models/part.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part; });
var Part = /** @class */ (function () {
    function Part() {
    }
    return Part;
}());



/***/ }),

/***/ "../../../../../src/app/models/robot.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Robot; });
var Robot = /** @class */ (function () {
    function Robot() {
    }
    return Robot;
}());

var InUsePart = /** @class */ (function () {
    function InUsePart() {
    }
    return InUsePart;
}());


/***/ }),

/***/ "../../../../../src/app/services/parts.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_parts_mocks__ = __webpack_require__("../../../../../src/app/mocks/parts.mocks.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PartsService = /** @class */ (function () {
    function PartsService() {
    }
    PartsService.prototype.getParts = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mocks_parts_mocks__["a" /* PARTS */]);
    };
    PartsService.prototype.getPart = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mocks_parts_mocks__["a" /* PARTS */].find(function (part) { return part.id === id; }));
    };
    PartsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PartsService);
    return PartsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/robot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RobotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_robots_mocks__ = __webpack_require__("../../../../../src/app/mocks/robots.mocks.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RobotService = /** @class */ (function () {
    function RobotService() {
    }
    RobotService.prototype.getRobots = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mocks_robots_mocks__["a" /* ROBOTS */]);
    };
    RobotService.prototype.getRobot = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__mocks_robots_mocks__["a" /* ROBOTS */].find(function (robot) { return robot.id === id; }));
    };
    RobotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RobotService);
    return RobotService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map