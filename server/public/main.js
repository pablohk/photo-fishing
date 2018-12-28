(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar *ngIf=\"this.authService.getUser()\"></app-nav-bar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");


//SERVICES

//MODELS
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.error = String;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngOnDestroy = function () {
        this.authService.logout();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/isLoggedIn.canActivate.service */ "./src/app/services/isLoggedIn.canActivate.service.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _components_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-photo/add-photo.component */ "./src/app/components/add-photo/add-photo.component.ts");
/* harmony import */ var _components_photo_photo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/photo/photo.component */ "./src/app/components/photo/photo.component.ts");
/* harmony import */ var _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/photo-list/photo-list.component */ "./src/app/components/photo-list/photo-list.component.ts");
/* harmony import */ var _components_weather_today_weather_today_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/weather-today/weather-today.component */ "./src/app/components/weather-today/weather-today.component.ts");
/* harmony import */ var _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/weather-forecast/weather-forecast.component */ "./src/app/components/weather-forecast/weather-forecast.component.ts");
/* harmony import */ var _components_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/add-location/add-location.component */ "./src/app/components/add-location/add-location.component.ts");
/* harmony import */ var _components_pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pruebas/pruebas.component */ "./src/app/components/pruebas/pruebas.component.ts");
/* harmony import */ var _components_remark_remark_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/remark/remark.component */ "./src/app/components/remark/remark.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
/* harmony import */ var _components_knot_knot_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/knot/knot.component */ "./src/app/components/knot/knot.component.ts");
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/chat/chat.component */ "./src/app/components/chat/chat.component.ts");
/* harmony import */ var _components_add_remark_add_remark_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/add-remark/add-remark.component */ "./src/app/components/add-remark/add-remark.component.ts");
/* harmony import */ var _pipes_filter_remark_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pipes/filter-remark.pipe */ "./src/app/pipes/filter-remark.pipe.ts");







// CUSTOM imports



// SERVICES



// COMPONENTS



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _components_location_location_component__WEBPACK_IMPORTED_MODULE_17__["LocationComponent"],
                _components_photo_photo_component__WEBPACK_IMPORTED_MODULE_19__["PhotoComponent"],
                _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_20__["PhotoListComponent"],
                _components_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_18__["AddPhotoComponent"],
                _components_weather_today_weather_today_component__WEBPACK_IMPORTED_MODULE_21__["WeatherTodayComponent"],
                _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_22__["WeatherForecastComponent"],
                _components_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_23__["AddLocationComponent"],
                _components_pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_24__["PruebasComponent"],
                _components_remark_remark_component__WEBPACK_IMPORTED_MODULE_25__["RemarkComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_26__["NavBarComponent"],
                _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_27__["ErrorPageComponent"],
                _components_knot_knot_component__WEBPACK_IMPORTED_MODULE_28__["KnotComponent"],
                _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_29__["ChatComponent"],
                _components_add_remark_add_remark_component__WEBPACK_IMPORTED_MODULE_30__["AddRemarkComponent"],
                _pipes_filter_remark_pipe__WEBPACK_IMPORTED_MODULE_31__["FilterRemarkPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiKeyMaps })
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_11__["IsLoggedInService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_12__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-location/add-location.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-location/add-location.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 90%;\n}\n.top-spacing{\n  margin-top:1vh;\n}\n.left-position{\n  margin-left:5vh;\n}\n.row {\n  margin-top:2vh;\n}\n@media (max-width: 450px) {\n  agm-map {\n    height: 200px;\n  }\n  .attach {\n    margin-bottom:1vh;\n  }\n}\n@media (min-width: 451px) and (max-width: 800px) {\n  agm-map {\n    height: 400px;\n  }\n}\n@media (min-width: 801px)  {\n  agm-map {\n    height: 600px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbG9jYXRpb24vYWRkLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0U7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLGtCQUFrQjtHQUNuQjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbG9jYXRpb24vYWRkLWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbn1cbi50b3Atc3BhY2luZ3tcbiAgbWFyZ2luLXRvcDoxdmg7XG59XG4ubGVmdC1wb3NpdGlvbntcbiAgbWFyZ2luLWxlZnQ6NXZoO1xufVxuLnJvdyB7XG4gIG1hcmdpbi10b3A6MnZoO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbiAgLmF0dGFjaCB7XG4gICAgbWFyZ2luLWJvdHRvbToxdmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0NTFweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGFnbS1tYXAge1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkgIHtcbiAgYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/add-location/add-location.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-location/add-location.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n  <div class=\"map\">\n    <agm-map [latitude]=\"latInit\" [longitude]=\"lonInit\" [zoom]=\"zoom\"\n        [streetViewControl]=\"false\" (mapClick)=\"mapClicked($event)\">\n      <agm-marker [latitude]= \"newLat\" [longitude]= \"newLon\">\n      </agm-marker>\n    </agm-map>\n  </div>\n  <div>\n    <form (ngSubmit)=\"onSubmitLocation(locatForm)\" #locatForm=\"ngForm\" novalidate>\n      <div class=\"row\">\n        <input class=\"col-xs-5\" type=\"number\" name=\"name\" [(ngModel)]=\"location.lat\" [value]=\"newLat\" disabled>\n        <div class=\"col-xs-2\"></div>\n        <input class=\"col-xs-5\" type=\"number\" name=\"name\" [(ngModel)]=\"location.lon\" [value]=\"newLon\"  disabled>\n      </div>\n      <div class=\"top-spacing\">\n        <label>name</label>\n        <input type=\"text\" name=\"name\" [(ngModel)]=\"location.name\" required>\n      </div>\n      <div class=\"top-spacing\">\n        <label>rating</label>\n        <input type=\"number\" name=\"rating\" [(ngModel)]=\"location.rating\" min=\"0\" max=\"10\" required> [0-10]\n        <label class=\"left-positon\">private</label>\n        <input type=\"checkbox\" name=\"private\" [(ngModel)]=\"location.priv\" chequed>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!locatForm.valid\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-location/add-location.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-location/add-location.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLocationComponent", function() { return AddLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_Location_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Location.model */ "./src/app/models/Location.model.ts");



//SERVICES


//MODELS

var LAT_DEFAULT = 40.392283;
var LON_DEFAULT = -3.698536;
var AddLocationComponent = /** @class */ (function () {
    function AddLocationComponent(authService, route, router, locationService) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.locationService = locationService;
        this.location = new _models_Location_model__WEBPACK_IMPORTED_MODULE_5__["Location"]();
    }
    AddLocationComponent.prototype.ngOnInit = function () {
        this.setCurrentPosition();
    };
    AddLocationComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latInit = position.coords.latitude;
                _this.lonInit = position.coords.longitude;
                _this.zoom = 13;
            });
        }
        else {
            this.latInit = LAT_DEFAULT;
            this.lonInit = LON_DEFAULT;
            this.zoom = 13;
        }
    };
    AddLocationComponent.prototype.onSubmitLocation = function (locatForm) {
        var _this = this;
        this.location.lat = this.newLat;
        this.location.lon = this.newLon;
        this.locationService.add(this.location).subscribe(function () {
            locatForm.reset();
            _this.router.navigate(['location']);
        }, function (err) { _this.error = err; });
    };
    AddLocationComponent.prototype.mapClicked = function ($event) {
        this.newLat = $event.coords.lat;
        this.newLon = $event.coords.lng;
    };
    AddLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-location',
            template: __webpack_require__(/*! ./add-location.component.html */ "./src/app/components/add-location/add-location.component.html"),
            providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]],
            styles: [__webpack_require__(/*! ./add-location.component.css */ "./src/app/components/add-location/add-location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], AddLocationComponent);
    return AddLocationComponent;
}());



/***/ }),

/***/ "./src/app/components/add-photo/add-photo.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-photo/add-photo.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin-bottom:1vh;\n}\n.btn-file {\n    display:none;\n}\n.input-file-trigger {\n  width: 50%;\n  display: block;\n  text-align: center;\n  padding-top:1rem;\n  height: 4rem;\n  background: #5bc0de;\n  color: #fff;\n  font-size: 1em;\n  cursor: pointer;\n}\nlegend {\n  margin-left: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcGhvdG8vYWRkLXBob3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxrQkFBa0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC1waG90by9hZGQtcGhvdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206MXZoO1xufVxuLmJ0bi1maWxlIHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4uaW5wdXQtZmlsZS10cmlnZ2VyIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6MXJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBiYWNrZ3JvdW5kOiAjNWJjMGRlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmxlZ2VuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/add-photo/add-photo.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/add-photo/add-photo.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form role=\"form\" #formAdd=\"ngForm\">\n    <fieldset class=\"row\">\n      <legend>Photo info </legend>\n      <div class=\"col-xs-12\">\n        <input class=\"title\" type=\"text\" [(ngModel)]=\"newPhoto.title\" name=\"title\" placeholder=\"Title\" required />\n        <input type=\"text\" [(ngModel)]=\"newPhoto.description\" name=\"description\" placeholder=\"Description\" required />\n        <label> Private </label>\n        <input type=\"checkbox\" [(ngModel)]=\"newPhoto.priv\" name=\"priv\" checked>\n      </div>\n    </fieldset>\n  </form>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n      <h3>Select file</h3>\n      <input class=\"btn-file\" id=\"my-file\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n      <label tabindex=\"0\" for=\"my-file\" class=\"input-file-trigger\">Select a file...</label>\n    </div>\n\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>Name</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><strong>{{ uploader.queue[0]?.file?.name }}</strong></td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div>\n        <div>\n          progress:\n          <div class=\"progress\" style=\"\">\n            <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n          </div>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"addToFolder()\" [disabled]=\"!formAdd.valid || !uploader.getNotUploadedItems().length\">\n                      <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                  </button>\n\n        <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                      <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                  </button>\n        <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                      <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                  </button>\n      </div>\n\n    </div>\n\n  </div>\n  <button  type=\"button\" class=\"btn btn-primary \" [routerLink]=\"['/photo']\"\n    [style.display]=\"uploader.progress!=100 ? 'none': 'inherit'\">\n\n                <span class=\"glyphicon glyphicon-upload\"></span> Ok\n            </button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-photo/add-photo.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-photo/add-photo.component.ts ***!
  \*************************************************************/
/*! exports provided: AddPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPhotoComponent", function() { return AddPhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");





// SERVICES


var AddPhotoComponent = /** @class */ (function () {
    function AddPhotoComponent(photoService, locationService, route, router) {
        var _this = this;
        this.photoService = photoService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.newPhoto = {
            title: '',
            description: '',
            priv: true,
            _location: ''
        };
        this.route.params.subscribe(function (params) {
            _this.newPhoto._location = params.id;
        });
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/api/photo/" + this.newPhoto._location
        });
    }
    AddPhotoComponent.prototype.ngOnInit = function () { };
    AddPhotoComponent.prototype.addToFolder = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('title', _this.newPhoto.title);
            form.append('description', _this.newPhoto.description);
            form.append('priv', _this.newPhoto.priv);
        };
        this.uploader.uploadAll();
    };
    AddPhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-photo',
            template: __webpack_require__(/*! ./add-photo.component.html */ "./src/app/components/add-photo/add-photo.component.html"),
            providers: [_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"], _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]],
            styles: [__webpack_require__(/*! ./add-photo.component.css */ "./src/app/components/add-photo/add-photo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddPhotoComponent);
    return AddPhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/add-remark/add-remark.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add-remark/add-remark.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".textRemark{\n  margin-top: 2rem;\n}\n.textRemark textarea{\n  height:20vh;\n  margin: 2rem 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcmVtYXJrL2FkZC1yZW1hcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXJlbWFyay9hZGQtcmVtYXJrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dFJlbWFya3tcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi50ZXh0UmVtYXJrIHRleHRhcmVhe1xuICBoZWlnaHQ6MjB2aDtcbiAgbWFyZ2luOiAycmVtIDFyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/add-remark/add-remark.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-remark/add-remark.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-8\">\n      <select class=\"form-control\" data-style=\"btn-primary\" data-live-search=\"true\" #selectElement (change)=\"selectLocation(selectElement.value)\">\n      <option selected disabled> Select one</option>\n      <option *ngFor=\"let e of ListLocation\" [value]=\"e._id\">{{e.name}}</option>\n    </select>\n    </div>\n  </div>\n  <form (ngSubmit)=\"onSubmitRemark(remarkForm)\" #remarkForm=\"ngForm\" novalidate>\n    <div class=\"row textRemark\">\n      <textarea class=\"col-xs-10 col-sm-10 col-md-10\"  type=\"text\" name=\"conatin\"\n                placeholder=\"All you think about this location....\" [(ngModel)]=\"contain\" required></textarea>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!remarkForm.valid\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-remark/add-remark.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add-remark/add-remark.component.ts ***!
  \***************************************************************/
/*! exports provided: AddRemarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRemarkComponent", function() { return AddRemarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_remark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/remark.service */ "./src/app/services/remark.service.ts");



//SERVICES


var AddRemarkComponent = /** @class */ (function () {
    function AddRemarkComponent(locationService, remarkService, router) {
        var _this = this;
        this.locationService = locationService;
        this.remarkService = remarkService;
        this.router = router;
        this.locationService.getAll().subscribe(function (items) { _this.ListLocation = items; }, function (err) { _this.error = err.message; });
    }
    AddRemarkComponent.prototype.ngOnInit = function () { };
    AddRemarkComponent.prototype.selectLocation = function (id) {
        var _this = this;
        this.locationService.getById(id).subscribe(function (item) { _this.location = item; }, function (err) { _this.error = err; });
    };
    AddRemarkComponent.prototype.onSubmitRemark = function (remarkForm) {
        var _this = this;
        this.remarkService.add(this.location._id, this.contain).subscribe(function () {
            remarkForm.reset();
            _this.router.navigate(['remark']);
        }, function (err) { _this.error = err; });
    };
    AddRemarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-remark',
            template: __webpack_require__(/*! ./add-remark.component.html */ "./src/app/components/add-remark/add-remark.component.html"),
            providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"], _services_remark_service__WEBPACK_IMPORTED_MODULE_4__["RemarkService"]],
            styles: [__webpack_require__(/*! ./add-remark.component.css */ "./src/app/components/add-remark/add-remark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _services_remark_service__WEBPACK_IMPORTED_MODULE_4__["RemarkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddRemarkComponent);
    return AddRemarkComponent;
}());



/***/ }),

/***/ "./src/app/components/chat/chat.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/chat/chat.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 90%;\n  margin-top:2vh;\n}\n.meNick{\n  color: Blue;\n}\n.youNick{\n  color:green;\n}\n.chat {\n  list-style: none;\n  margin-top: 1vh;\n  padding: 0;\n}\n.chat li {\n  margin-bottom: 5%;\n  padding-bottom: 2%;\n  border-bottom: 1px dotted #B3A9A9;\n}\n.chat li.left .chat-body {\n  margin-left: 5vw;\n}\n.chat li .chat-body p {\n  margin: 0;\n  color: #777777;\n}\n.panel .slidedown .glyphicon, .chat .glyphicon {\n  margin-right: 1vw;\n}\n.panel-body {\n  overflow: scroll;\n  height: 60vh;\n}\n::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5;\n}\n::-webkit-scrollbar-thumb {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\n  background-color: #555;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0NBQ1o7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0NBQWtDO0NBQ25DO0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLFVBQVU7RUFDVixlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0NBQ2Q7QUFFRDtFQUNFLHFEQUFxRDtFQUNyRCwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLFlBQVk7RUFDWiwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLG9EQUFvRDtFQUNwRCx1QkFBdUI7Q0FDeEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6MnZoO1xufVxuLm1lTmlja3tcbiAgY29sb3I6IEJsdWU7XG59XG4ueW91Tmlja3tcbiAgY29sb3I6Z3JlZW47XG59XG4uY2hhdCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDF2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNoYXQgbGkge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICNCM0E5QTk7XG59XG5cbi5jaGF0IGxpLmxlZnQgLmNoYXQtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiA1dnc7XG59XG5cbi5jaGF0IGxpIC5jaGF0LWJvZHkgcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5wYW5lbCAuc2xpZGVkb3duIC5nbHlwaGljb24sIC5jaGF0IC5nbHlwaGljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDF2dztcbn1cblxuLnBhbmVsLWJvZHkge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBoZWlnaHQ6IDYwdmg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/chat/chat.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/chat/chat.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-md-10\">\n      <div class=\"panel panel-success\">\n        <div class=\"panel-heading\">\n          <span class=\"glyphicon glyphicon-comment\"></span> Chat\n        </div>\n        <div class=\"panel-body\" #scrollMe >\n          <ul class=\"chat\">\n              <li *ngFor=\"let m of chatService.messages\" class=\"left clearfix\">\n              <div class=\"chat-body clearfix\">\n                <div class=\"header\">\n                  <strong *ngIf=\"m.userChat\" class=\"primary-font meNick\">{{m.userChat}}</strong>\n                  <strong *ngIf=\"m.otherUser\" class=\"primary-font youNick\">{{m.otherUser}}</strong>\n                  <small class=\"pull-right text-muted\">\n                    <span class=\"glyphicon glyphicon-time\"></span>{{m.created | date:'dd/MM/yy HH:mm'}}\n                  </small>\n                </div>\n                <p> {{m.message}} </p>\n              </div>\n            </li>\n          </ul>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"input-group\">\n            <input [(ngModel)]=\"m\" id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\"/>\n            <span class=\"input-group-btn\">\n              <button (click)=\"chatService.sendMessage(m); m=''\" class=\"btn btn-success btn-sm\" id=\"btn-chat\"> Send</button>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat/chat.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chat.service */ "./src/app/services/chat.service.ts");



var ChatComponent = /** @class */ (function () {
    function ChatComponent(chatService) {
        this.chatService = chatService;
    }
    ChatComponent.prototype.ngOnInit = function () { };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/components/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/components/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/components/error-page/error-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\n  padding:2rem;\n  font-size: 2rem;\n  text-align: justify;\n  background-image: url();\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci1wYWdlL2Vycm9yLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtDQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXJyb3ItcGFnZS9lcnJvci1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XG4gIHBhZGRpbmc6MnJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error\">\n\n  <p> You are trying to access in a unknow page</p>\n  <p *ngIf=\"error\">Error message: {{error}}</p>\n\n  <div *ngIf=\"this.authService.getUser();\">\n    <a [routerLink]=\"['/home']\"> Go Home</a>\n  </div>\n  <div *ngIf=\"!this.authService.getUser();\">\n    <a [routerLink]=\"['/login']\"> Go login</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/error-page/error-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/error-page/error-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



// SERVICES

// MODELS
var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(authService, router, route) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.error = params['error'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.error = params['error'];
        });
    }
    ErrorPageComponent.prototype.ngOnInit = function () { };
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/components/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/components/error-page/error-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chat></app-chat>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(route) {
        var _this = this;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.error = params['error'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.error = params['error'];
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/knot/knot.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/knot/knot.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row:nth-child(2n){\n  background-color: #e1d9d961;\n}\n\n\n.row div > div {\n   font-size: 2vw;\n   display:inline-block;\n   margin-bottom: 2vh;\n   text-align: justify;\n  }\n\n\n.knotImg {\n  width: 70%;\n  margin-left:15%;\n}\n\n\n.knotImg img {\n  width: 100%;\n}\n\n\n.title{\n  color:red;\n  padding-top:2rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rbm90L2tub3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtDQUM3Qjs7O0FBR0Q7R0FDRyxlQUFlO0dBQ2YscUJBQXFCO0dBQ3JCLG1CQUFtQjtHQUNuQixvQkFBb0I7R0FDcEI7OztBQUVIO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtDQUNqQjs7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7OztBQUNEO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva25vdC9rbm90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93Om50aC1jaGlsZCgybil7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWQ5ZDk2MTtcbn1cblxuXG4ucm93IGRpdiA+IGRpdiB7XG4gICBmb250LXNpemU6IDJ2dztcbiAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICAgbWFyZ2luLWJvdHRvbTogMnZoO1xuICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgfVxuXG4ua25vdEltZyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi1sZWZ0OjE1JTtcbn1cblxuLmtub3RJbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGl0bGV7XG4gIGNvbG9yOnJlZDtcbiAgcGFkZGluZy10b3A6MnJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/knot/knot.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/knot/knot.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">IMPROVED CLINCH KNOT </div>\n      <div>(for tying line to a hook)</div>\n      <div class=\"knotImg\"><img src=\"https://i1.wp.com/fishing.boyslife.org/files/2013/03/clinchknot.jpg?w=650&amp;ssl=1\" alt=\"\"></div>\n      <div>1. Thread the line through the eye of the hook, then make 5 to 7 wraps around the line with the loose end.</div>\n      <div>2. Thread the loose end of the line through the loop closest to the eye, then back around inside the loose section of line.</div>\n      <div>3. Pull both ends of the line until tight.</div>\n      <div>4. Trim the loose end of the line if necessary.</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">PALOMAR KNOT </div>\n      <div>(for tying line to a hook)</div>\n      <div class=\"knotImg\"><img src=\"https://i2.wp.com/fishing.boyslife.org/files/2013/03/palomer.jpg?w=650&amp;ssl=1\" alt=\"\"></div>\n      <div>1. Double your line to make a loop, then push the loop through the eye of your hook.</div>\n      <div>2. Tie a loose overhand knot.</div>\n      <div>3. Pass the loop around the end of the hook</div>\n      <div>4. Pull on the line to tighten.</div>\n      <div>5. Trim the loose end of the line if necessary.</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">TURLE KNOT </div>\n      <div>(for tying thin line to a small hook)</div>\n      <div class=\"knotImg\"><img src=\"https://i2.wp.com/fishing.boyslife.org/files/2013/03/turleknot.jpg?w=650&amp;ssl=1\" alt=\"\"></div>\n      <div>1. Run the line through the eye of the hook, then tie a loose double overhand knot in the end of the line.</div>\n      <div>2. Pass the open loop over the hook and tighten the whole thing so that the loop tightens around the eye.</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">BLOOD KNOT </div>\n      <div>(for joining two sections of line together)</div>\n      <div class=\"knotImg\"><img src=\"https://i2.wp.com/fishing.boyslife.org/files/2013/03/bloodknot.jpg?w=650&amp;ssl=1\" alt=\"\"></div>\n      <div>1. Line up the ends of each line together for several inches, then wrap the first line around the second at least five times.</div>\n      <div>2. Wrap the second around the first at least five times, and bring both loose ends back to the middle between the two lines.</div>\n      <div>3. Pull tight on each line until the knot is snug.</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">DOUBLE SURGEON’S LOOP </div>\n      <div>(for forming a loop in the end of a line)</div>\n      <div class=\"knotImg\"><img src=\"https://i2.wp.com/fishing.boyslife.org/files/2013/03/doublesurgeonloop.jpg?w=650&amp;ssl=1\"></div>\n      <div>1. Line up the ends of each line together for several inches, then wrap the first line around the second at least five times.</div>\n      <div>2. Wrap the second around the first at least five times, and bring both loose ends back to the middle between the two lines.</div>\n      <div>3. Pull tight on each line until the knot is snug.</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">WIRE LINE TO MONO KNOT</div>\n      <div>(for attaching wire line to monofilament)</div>\n      <div class=\"knotImg\"><img src=\"https://i0.wp.com/fishing.boyslife.org/files/2013/03/wiremonoknot.jpg?w=650&amp;ssl=1\"></div>\n      <div>1. Fold four inches of wire line back over itself to form a bend at the end of the line.</div>\n      <div>2. Run your monofilament line through the middle of the bend, then wrap it once around the bottom of the bend.</div>\n      <div>3. With the monofilament, make seven close turns around both lines.</div>\n      <div>4. Pass the loose end of the monofilament above the center strand of monofilament and below the wire line, then pull snug.</div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">TUCKED SHEET BEND</div>\n      <div>(for attaching wire line to monofilament)</div>\n      <div class=\"knotImg\"><img src=\"https://i0.wp.com/fishing.boyslife.org/files/2013/03/tuckedsheetbend.jpg?w=650&amp;ssl=1\"></div>\n      <div>1. Pass the end of the line through the loop, then make a simple sheet bend knot.</div>\n      <div>2. Pass the end of the line back through the loop of the sheet bend.</div>\n      <div>3. Tighten until snug.</div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-offset-3 col-md-6\">\n      <div class=\"title\">TSNELLING A HOOK</div>\n      <div>(for attaching monofilament to a hook)</div>\n      <div class=\"knotImg\"><img src=\"https://i0.wp.com/fishing.boyslife.org/files/2013/03/tuckedsheetbend.jpg?w=650&amp;ssl=1\"></div>\n      <div>1. Pass the end of the line through the eye of the hook twice, creating a loop that hangs alongside the hook.</div>\n      <div>2. Wrap the loop around the hook, forming tight coils, 5 to 10 times.</div>\n      <div>3. Holding the coils in place with one finger, pull the line up until the loop is snug under the coils.</div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/knot/knot.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/knot/knot.component.ts ***!
  \***************************************************/
/*! exports provided: KnotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnotComponent", function() { return KnotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KnotComponent = /** @class */ (function () {
    function KnotComponent() {
    }
    KnotComponent.prototype.ngOnInit = function () {
    };
    KnotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-knot',
            template: __webpack_require__(/*! ./knot.component.html */ "./src/app/components/knot/knot.component.html"),
            styles: [__webpack_require__(/*! ./knot.component.css */ "./src/app/components/knot/knot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KnotComponent);
    return KnotComponent;
}());



/***/ }),

/***/ "./src/app/components/location/location.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/location/location.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 90%;\n}\n.map {\n  margin:1rem 0;\n}\n.row {\n  margin:0;\n  padding:1rem 0;\n}\n@media (max-width: 450px) {\n  agm-map {\n    height: 200px;\n  }\n}\n@media (min-width: 451px) and (max-width: 800px) {\n  agm-map {\n    height: 400px;\n  }\n}\n@media (min-width: 801px)  {\n  agm-map {\n    height: 600px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxjQUFjO0NBQ2Y7QUFDRDtFQUNFLFNBQVM7RUFDVCxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGO0FBQ0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG59XG4ubWFwIHtcbiAgbWFyZ2luOjFyZW0gMDtcbn1cbi5yb3cge1xuICBtYXJnaW46MDtcbiAgcGFkZGluZzoxcmVtIDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQ1MXB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSAge1xuICBhZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/location/location.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/location/location.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n  <div class=\"row\">\n    <div class=\"col-xs-8 col-sm-10\">\n      <select class=\"form-control\" data-style=\"btn-primary\" data-live-search=\"true\" #selectElement (change)=\"selectLocation(selectElement.value)\">\n        <option selected disabled> Select one</option>\n        <option *ngFor=\"let e of ListLocation\" [value]=\"e._id\">{{e.name}}</option>\n      </select>\n    </div>\n    <a class=\"col-xs-4 col-sm-2\" [routerLink]=\"['./add']\">Add new</a>\n  </div>\n  <div class=\"map\">\n    <agm-map [latitude]=\"latInit\" [longitude]=\"lonInit\" [zoom]=\"zoom\" [streetViewControl]=\"false\">\n      <agm-marker [latitude]=location?.lat [longitude]=location?.lon>\n        <agm-info-window>Rating {{location?.rating}}</agm-info-window>\n      </agm-marker>\n    </agm-map>\n  </div>\n  <div *ngIf=\"location\" class=\"panel panel-default\">\n    <div class=\"panel-heading row\">\n      <div class=\"col-md-10 col-sm-12 col-xs-12\">\n        <div class=\"pull-left\">Created: {{location.created_at | date:'dd/MM/yyyy'}}</div>\n        <div class=\"pull-right\">Rating: {{location.rating}}</div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <strong>{{location.name}}</strong>\n      </div>\n      <div class=\"col-md-6 col-sm-6 col-xs-12\">\n        <p *ngIf=\"location.priv\"> Location private</p>\n        <p *ngIf=\"!location.priv\"> Location public</p>\n      </div>\n    </div>\n    <button class=\"btn btn-success\" [routerLink]=\"['../photo/add',location._id]\">Add Photo</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/location/location.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/location/location.component.ts ***!
  \***********************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");



// SERVICES

var LAT_DEFAULT = 40.392283;
var LON_DEFAULT = -3.698536;
var LocationComponent = /** @class */ (function () {
    function LocationComponent(route, locationService) {
        var _this = this;
        this.route = route;
        this.locationService = locationService;
        this.setCurrentPosition();
        this.locationService.getMyLocation().subscribe(function (items) { _this.ListLocation = items; }, function (err) { _this.error = err.message; });
    }
    LocationComponent.prototype.ngOnInit = function () { };
    LocationComponent.prototype.selectLocation = function (id) {
        var _this = this;
        this.locationService.getById(id).subscribe(function (item) {
            _this.location = item;
            _this.latInit = item.lat;
            _this.lonInit = item.lon;
        }, function (err) { _this.error = err; });
    };
    LocationComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latInit = position.coords.latitude;
                _this.lonInit = position.coords.longitude;
                _this.zoom = 13;
            });
        }
        else {
            this.latInit = LAT_DEFAULT;
            this.lonInit = LON_DEFAULT;
            this.zoom = 13;
        }
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/location/location.component.html"),
            providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]],
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/components/location/location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#loginbox {\n  margin-top: 50px;\n}\n\n.panel-body {\n  padding-top: 30px;\n}\n\n#login-alert {\n  display: none;\n}\n\n.input-group {\n  margin-bottom: 25px;\n}\n\n.form-group {\n  margin-top: 10px;\n}\n\n.horizontal-line {\n  border-top: 1px solid#888;\n  padding-top: 15px;\n  font-size: 85%;\n}\n\n.error{\n  color:#FF0000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVEO0VBQ0UsY0FBYztDQUNmOztBQUVEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsaUJBQWlCO0NBQ2xCOztBQUVEO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOztBQUNEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ2luYm94IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuI2xvZ2luLWFsZXJ0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaG9yaXpvbnRhbC1saW5lIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIzg4ODtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogODUlO1xufVxuLmVycm9ye1xuICBjb2xvcjojRkYwMDAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!this.authService.isAuthenticated();\">\n    <div id=\"loginbox\" class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">Sign In</div>\n        </div>\n        <div class=\"panel-body\">\n          <div id=\"login-alert\" class=\"alert alert-danger col-sm-12\"></div>\n          <form id=\"loginform\" class=\"form-horizontal\" role=\"form\" (ngSubmit)=\"onSubmitLogin(loginForm)\" #loginForm=\"ngForm\">\n\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n              <input id=\"login-username\" type=\"text\" class=\"form-control\" name=\"username\" value=\"\" placeholder=\"username\" [(ngModel)]=\"formInfo.username\" required>\n            </div>\n\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n              <input id=\"login-password\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"formInfo.password\" required>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-12\">\n                <button id=\"btn-login\" [disabled]=\"!loginForm.valid\" class=\"btn btn-success\">Login  </button>\n                <span class=\"error\" *ngIf=\"error\">{{error}}</span>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-md-12\">\n                <div class=\"horizontal-line\">\n                  <p>Don't have an account!\n                    <a [routerLink]=\"['/register']\">Sign Up Here</a></p>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"this.authService.isAuthenticated();\">\n    {{this.router.navigate(['/home'])}}\n    <!-- <p>You are allready Logged <a [routerLink]=\"['/home']\">Go Home</a></p> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



// MODELS
// SERVICES

var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.formInfo = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.error = params['error'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.error = params['error'];
        });
    };
    LoginComponent.prototype.onSubmitLogin = function (loginForm) {
        var _this = this;
        this.authService.login(this.formInfo).subscribe(function (user) {
            _this.error = null;
            loginForm.reset();
            _this.router.navigate(['/home']);
        }, function (error) {
            _this.error = error;
            setTimeout(function () { _this.error = null; }, 2000);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-group {\n  width: 100%;\n  position:fixed;\n  top:0;\n  z-index: 10;\n  background-color: #3478b7;\n}\n.btn-circle.btn-lg {\n  width: 14.3%;\n  height: 4rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGFBQWE7RUFDYixhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ncm91cCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOjA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ3OGI3O1xufVxuLmJ0bi1jaXJjbGUuYnRuLWxnIHtcbiAgd2lkdGg6IDE0LjMlO1xuICBoZWlnaHQ6IDRyZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <button [routerLink]=\"['/home']\" type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"glyphicon glyphicon-home\"></i></button>\n  <button [routerLink]=\"['/location']\" type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"glyphicon glyphicon-map-marker\"></i></button>\n  <button [routerLink]=\"['/remark']\" type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"glyphicon glyphicon-th-list\"></i></button>\n  <button [routerLink]=\"['/photo']\" type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"glyphicon glyphicon-picture\"></i></button>\n  <button [routerLink]=\"['/weather']\" type=\"button\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"glyphicon glyphicon-cloud\"></i></button>\n  <button [routerLink]=\"['/knot']\" type=\"button\" class=\"btn btn-info btn-circle btn-lg\"><i class=\"glyphicon glyphicon-education\"></i></button>\n  <button [routerLink]=\"['/login']\" (click)=\"logOut()\" type=\"submit\" class=\"btn btn-primary btn-circle btn-lg\"><i class=\"glyphicon glyphicon-log-out\"></i></button>\n</div>\n<div style=\"height:12vh\"></div>\n<p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");



// SERVICES

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () { };
    NavBarComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().subscribe(function () { _this.router.navigate(['/login']); });
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/photo-list/photo-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/photo-list/photo-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#noPhoto {\n  margin-top:3vh;\n  color: red;\n  font-size: 3rem;\n  text-align: justify;\n  width: 90%;\n}\n.container {\n  width: 100%;\n}\n.description p{\n  width: 100%;\n  font-size: 1rem;\n  text-align: justify;\n}\n.description h4{\n  font-size: 2rem;\n  text-align:justify;\n  color:#b4c710;\n  width: 100%;\n}\nimg {\n  width: 100%;\n}\nhr {\n  width:100%;\n  background-color:#a1a1a1 !important;\n  height:1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG90by1saXN0L3Bob3RvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0NBQ1o7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFFRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8tbGlzdC9waG90by1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbm9QaG90byB7XG4gIG1hcmdpbi10b3A6M3ZoO1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDNyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHdpZHRoOiA5MCU7XG59XG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kZXNjcmlwdGlvbiBwe1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uZGVzY3JpcHRpb24gaDR7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xuICBjb2xvcjojYjRjNzEwO1xuICB3aWR0aDogMTAwJTtcbn1cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaHIge1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNhMWExYTEgIWltcG9ydGFudDtcbiAgaGVpZ2h0OjFweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/photo-list/photo-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/photo-list/photo-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p *ngIf=\"error\">{{error}}</p>\n  <div *ngIf=\"listPhotos?.length>0\">\n    <div class=\"row\" *ngFor=\"let e of listPhotos\">\n      <div class=\"col-xs-12 col-sm-10 col-md-10\">\n        <h2 class=\"text-primary\">{{e.title}}</h2>\n      </div>\n      <div class=\"col-xs-12 col-offset-sm-1 col-sm-10 col-offset-md-1 col-md-10\">\n        <img src=\"{{e.imageURL}}\" alt=\"{{e.title}}\">\n      </div>\n      <div class=\"col-xs-10 col-sm-10 col-md-10 description\">\n        <h4>{{e._location.name}}</h4>\n        <p>{{e.description}}</p>\n      </div>\n      <hr/>\n    </div>\n  </div>\n  <div *ngIf=\"listPhotos?.length===0\" id=\"noPhoto\">\n    <p> There are no photos for this selection</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/photo-list/photo-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/photo-list/photo-list.component.ts ***!
  \***************************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");




// SERVICES



var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(authService, photoService, locationService, route) {
        this.authService = authService;
        this.photoService = photoService;
        this.locationService = locationService;
        this.route = route;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/";
    }
    PhotoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.error = params['error'];
            _this._location = params['id'];
        });
        this.photoService.getByLocation(this._location).subscribe(function (items) {
            _this.listPhotos = items;
        }, function (err) { _this.error = err.message; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PhotoListComponent.prototype, "listPhotos", void 0);
    PhotoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-list',
            template: __webpack_require__(/*! ./photo-list.component.html */ "./src/app/components/photo-list/photo-list.component.html"),
            providers: [_services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"], _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"]],
            styles: [__webpack_require__(/*! ./photo-list.component.css */ "./src/app/components/photo-list/photo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_photo_service__WEBPACK_IMPORTED_MODULE_5__["PhotoService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_6__["LocationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PhotoListComponent);
    return PhotoListComponent;
}());



/***/ }),

/***/ "./src/app/components/photo/photo.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/photo/photo.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvdG8vcGhvdG8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/photo/photo.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/photo/photo.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n      <select class=\"form-control\" data-style=\"btn-primary\" data-live-search=\"true\" #selectLoc (change)=\"selectLocation(selectLoc.value)\">\n        <option selected disabled> Select location</option>\n        <option *ngFor=\"let e of ListLocation\" [value]=\"e._id\">{{e.name}}</option>\n      </select>\n    </div>\n    <div class=\"col-xs-6\">\n      <select class=\"form-control\" data-style=\"btn-primary\" data-live-search=\"true\" #selectUsr (change)=\"selectUser(selectUsr.value)\">\n        <option selected disabled> Select User</option>\n        <option *ngFor=\"let e of ListUser\" [value]=\"e._id\">{{e.username}}</option>\n      </select>\n    </div>\n  </div>\n  <app-photo-list [listPhotos]=ListPhotos></app-photo-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/photo/photo.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/photo/photo.component.ts ***!
  \*****************************************************/
/*! exports provided: PhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoComponent", function() { return PhotoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/photo.service */ "./src/app/services/photo.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");



//SERVICES



var PhotoComponent = /** @class */ (function () {
    function PhotoComponent(route, locationService, photoService, userService) {
        var _this = this;
        this.route = route;
        this.locationService = locationService;
        this.photoService = photoService;
        this.userService = userService;
        this.locationService.getMyLocation().subscribe(function (items) { _this.ListLocation = items; }, function (err) { _this.error = err.message; });
        this.userService.getAll().subscribe(function (items) {
            _this.ListUser = items;
        }, function (err) { _this.error = err.message; });
    }
    ;
    PhotoComponent.prototype.ngOnInit = function () { };
    PhotoComponent.prototype.selectLocation = function (id) {
        var _this = this;
        this.locationService.getById(id).subscribe(function (item) {
            _this.location = item;
            _this.photoService.getByLocation(item._id).subscribe(function (items) { _this.ListPhotos = items; }, function (err) { _this.error = err; });
        }, function (err) { _this.error = err; });
    };
    PhotoComponent.prototype.selectUser = function (id) {
        var _this = this;
        this.userService.getById(id).subscribe(function (item) {
            _this.userP = item;
            _this.photoService.getByUser(item._id).subscribe(function (items) {
                console.log(items);
                _this.ListPhotos = items;
            }, function (err) { _this.error = err; });
        }, function (err) { _this.error = err; });
    };
    PhotoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo',
            template: __webpack_require__(/*! ./photo.component.html */ "./src/app/components/photo/photo.component.html"),
            providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"], _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
            styles: [__webpack_require__(/*! ./photo.component.css */ "./src/app/components/photo/photo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"],
            _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], PhotoComponent);
    return PhotoComponent;
}());



/***/ }),

/***/ "./src/app/components/pruebas/pruebas.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/pruebas/pruebas.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJ1ZWJhcy9wcnVlYmFzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/pruebas/pruebas.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/pruebas/pruebas.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pruebas/pruebas.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/pruebas/pruebas.component.ts ***!
  \*********************************************************/
/*! exports provided: PruebasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PruebasComponent", function() { return PruebasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);



var PruebasComponent = /** @class */ (function () {
    function PruebasComponent() {
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: '' });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    PruebasComponent.prototype.ngOnInit = function () {
    };
    PruebasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pruebas',
            template: __webpack_require__(/*! ./pruebas.component.html */ "./src/app/components/pruebas/pruebas.component.html"),
            styles: [__webpack_require__(/*! ./pruebas.component.css */ "./src/app/components/pruebas/pruebas.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PruebasComponent);
    return PruebasComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#signupbox{\nmargin-top:50px;\n}\n.right-pos{\n  float:right;\n  font-size: 85%;\n  position: relative;\n  top:-10px;\n}\n.error{\n  color:red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsZ0JBQWdCO0NBQ2Y7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFVBQVU7Q0FDWDtBQUNEO0VBQ0UsVUFBVTtDQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZ251cGJveHtcbm1hcmdpbi10b3A6NTBweDtcbn1cbi5yaWdodC1wb3N7XG4gIGZsb2F0OnJpZ2h0O1xuICBmb250LXNpemU6IDg1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6LTEwcHg7XG59XG4uZXJyb3J7XG4gIGNvbG9yOnJlZDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!this.authService.isAuthenticated();\">\n    <div id=\"signupbox\" class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n      <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n          <div class=\"panel-title\">Sign Up</div>\n          <div class=\"right-pos\">\n            <a id=\"signinlink\" [routerLink]=\"['/login']\">Sign In</a></div>\n        </div>\n        <div class=\"panel-body\">\n          <form id=\"signupform\" class=\"form-horizontal\" role=\"form\" (ngSubmit)=\"onSubmitSign(signForm)\" #signForm=\"ngForm\">\n            <div class=\"form-group\">\n              <label for=\"username\" class=\"col-md-3 control-label\">username</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"username\" [(ngModel)]=\"formInfo.username\" required>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\" class=\"col-md-3 control-label\">password</label>\n              <div class=\"col-md-9\">\n                <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"password\" [(ngModel)]=\"formInfo.password\" required>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\" class=\"col-md-3 control-label\">Email</label>\n              <div class=\"col-md-9\">\n                <input type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"formInfo.email\" required>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-md-offset-3 col-md-9\">\n                <button id=\"btn-signup\" [disabled]=\"!signForm.valid\" type=\"submit\" class=\"btn btn-info\"><i class=\"icon-hand-right\"></i>Sign Up</button>\n                <span class=\"error\" *ngIf=\"error\">{{error}}</span>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"this.authService.isAuthenticated();\">\n    {{this.router.navigate(['/home'])}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.formInfo = {
            username: '',
            password: '',
            email: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onSubmitSign = function (signForm) {
        var _this = this;
        this.authService.signup(this.formInfo).subscribe(function (user) {
            _this.error = null;
            signForm.reset();
            _this.router.navigate(['home']);
        }, function (error) {
            _this.error = error;
            setTimeout(function () { _this.error = null; }, 2000);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/remark/remark.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/remark/remark.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel{\n  margin-top:2.5rem;\n}\n.description {\n  padding: 0.5rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZW1hcmsvcmVtYXJrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVtYXJrL3JlbWFyay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVse1xuICBtYXJnaW4tdG9wOjIuNXJlbTtcbn1cbi5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/remark/remark.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/remark/remark.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p *ngIf=\"error\">{{error}}</p>\n  <div class=\"filter\">\n    <input type=\"text\" placeholder=\"Filter by location\" [(ngModel)]=\"pattern\">\n    <button [routerLink]=\"['./add']\" class=\"btn btn-success pull-right\">Add remark</button>\n  </div>\n  <div class=\"panel panel-default\" *ngFor=\"let e of listRemark | filterRemark:pattern\">\n    <div class=\"panel-heading\">\n      <label>Location: {{e._location.name}}</label>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"pull-left\">{{e._user.created_at | date:'dd/MM/yyyy'}}</div>\n      <div class=\"pull-right\">{{e._user.username}}</div>\n    </div>\n    <div class=\"description\">\n      <strong>Description: </strong>\n      <p>{{e.contain}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/remark/remark.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/remark/remark.component.ts ***!
  \*******************************************************/
/*! exports provided: RemarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkComponent", function() { return RemarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_remark_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/remark.service */ "./src/app/services/remark.service.ts");



//SERVICES

var RemarkComponent = /** @class */ (function () {
    function RemarkComponent(route, remarkService) {
        this.route = route;
        this.remarkService = remarkService;
    }
    RemarkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.error = params['error'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.error = params['error'];
        });
        this.remarkService.getMyRemark().subscribe(function (items) { _this.listRemark = items; }, function (err) { _this.error = err; });
    };
    RemarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remark',
            template: __webpack_require__(/*! ./remark.component.html */ "./src/app/components/remark/remark.component.html"),
            providers: [_services_remark_service__WEBPACK_IMPORTED_MODULE_3__["RemarkService"]],
            styles: [__webpack_require__(/*! ./remark.component.css */ "./src/app/components/remark/remark.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_remark_service__WEBPACK_IMPORTED_MODULE_3__["RemarkService"]])
    ], RemarkComponent);
    return RemarkComponent;
}());



/***/ }),

/***/ "./src/app/components/weather-forecast/weather-forecast.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/weather-forecast/weather-forecast.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci1mb3JlY2FzdC93ZWF0aGVyLWZvcmVjYXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/weather-forecast/weather-forecast.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/weather-forecast/weather-forecast.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n    <div>\n      <select class=\"form-control\" data-style=\"btn-primary\" data-live-search=\"true\" #selectElement (change)=\"selectLocation(selectElement.value)\" style=\"margin-top:20px\">\n      <option selected disabled>Select one</option>\n      <option *ngFor=\"let e of ListLocation\" [value]=\"e._id\">{{e.name}}</option>\n    </select>\n    </div>\n    <div class=\"forecast\" *ngFor=\"let e of forecast\" style=\"border: 1px solid red; margin-top:10px\">\n      <div class=\"row text-center\" style=\"margin:10px\">\n        <div class=\"col-xs-offset-3 col-xs-6 col-sn-offset-3 col-sm-6 col-lg-offset-3 col-lg-6\">\n          {{e.prediction.day}} -- {{e.prediction.hour}}h\n        </div>\n        <div class=\"col-xs-offset-3 col-xs-6 col-sn-offset-3 col-sm-6 col-lg-offset-3 col-lg-6\">\n          {{location?.name}}\n        </div>\n        <div class=\"col-xs-offset-3 col-xs-6 col-sm-offset-3 col-sm-6 col-lg-offset-3 col-lg-6\">\n          <img style=\"height:10vh\" src=\"//openweathermap.org/img/w/{{e.daily.icon}}.png\" alt=\"{{e.daily.description}}\">\n          <p>{{e.daily.description}}</p>\n        </div>\n      </div>\n      <div class=\"row text-center\" style=\"border: 1px solid blue; margin:10px\">\n        <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\">Min: {{e.daily.temp_min}} ºc</p>\n        <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\"> Max: {{e.daily.temp_max}} ºC</p>\n      </div>\n      <div class=\"row text-center\" style=\"border: 1px solid blue\" style=\"border: 1px solid blue; margin:10px\">\n        <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\">Humidity: {{e.daily.humidity}}%</p>\n        <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\">Wind: {{e.daily.wind}} m/s</p>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/weather-forecast/weather-forecast.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/weather-forecast/weather-forecast.component.ts ***!
  \***************************************************************************/
/*! exports provided: WeatherForecastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherForecastComponent", function() { return WeatherForecastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");




var WeatherForecastComponent = /** @class */ (function () {
    function WeatherForecastComponent(weatherService, locationService) {
        this.weatherService = weatherService;
        this.locationService = locationService;
    }
    WeatherForecastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getMyLocation().subscribe(function (items) { _this.ListLocation = items; }, function (err) { _this.error = err.message; });
        this.getCurrentPosition()
            .then(function (coord) {
            _this.latInit = coord.latitude;
            _this.lonInit = coord.longitude;
            _this.getForecast();
        })
            .catch(function (err) { return _this.error = err; });
    };
    WeatherForecastComponent.prototype.selectLocation = function (id) {
        var _this = this;
        this.locationService.getById(id).subscribe(function (item) {
            _this.location = item;
            _this.latInit = item.lat;
            _this.lonInit = item.lon;
            _this.getForecast();
        }, function (err) {
            _this.error = err;
        });
    };
    WeatherForecastComponent.prototype.getForecast = function () {
        var _this = this;
        this.weatherService.getForecast(this.latInit, this.lonInit).subscribe(function (items) { _this.forecast = items; }, function (err) { _this.error = err.message; });
    };
    WeatherForecastComponent.prototype.getCurrentPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                resolve({ latitude: latitude, longitude: longitude });
            }, function () { reject('We could not get your location.'); });
        });
    };
    WeatherForecastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-forecast',
            template: __webpack_require__(/*! ./weather-forecast.component.html */ "./src/app/components/weather-forecast/weather-forecast.component.html"),
            providers: [_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"], _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]],
            styles: [__webpack_require__(/*! ./weather-forecast.component.css */ "./src/app/components/weather-forecast/weather-forecast.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"],
            _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"]])
    ], WeatherForecastComponent);
    return WeatherForecastComponent;
}());



/***/ }),

/***/ "./src/app/components/weather-today/weather-today.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/weather-today/weather-today.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2VhdGhlci10b2RheS93ZWF0aGVyLXRvZGF5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/weather-today/weather-today.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/weather-today/weather-today.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n    <div class=\"row text-center\" style=\"border: 1px solid blue; margin:10px\">\n      <div class=\"col-xs-offset-3 col-xs-6 col-sn-offset-3 col-sm-6 col-lg-offset-3 col-lg-6\">\n        {{weather?.name}}\n      </div>\n      <div class=\"col-xs-offset-3 col-xs-6 col-sm-offset-3 col-sm-6 col-lg-offset-3 col-lg-6\">\n        <img style=\"height:20vh\" src=\"//openweathermap.org/img/w/{{weather?.icon}}.png\" alt=\"{{weather?.description}}\">\n        <p>{{weather?.description}}</p>\n      </div>\n    </div>\n    <div class=\"row text-center\" style=\"border: 1px solid blue; margin:10px\">\n      <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\">Min: {{weather?.temp_min}} ºc</p>\n      <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\"> Max: {{weather?.temp_max}} ºC</p>\n    </div>\n    <div class=\"row text-center\"style=\"border: 1px solid blue\" style=\"border: 1px solid blue; margin:10px\">\n      <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\">Humidity: {{weather?.humidity}}%</p>\n      <p class=\"col-xs-6 col-sm-6 col-lg-offest-3 col-lg-6\">Wind: {{weather?.wind}} m/s</p>\n    </div>\n    <button class=\"btn btn-success col-xs-offset-3 col-xs-6\" [routerLink]=\"['./forecast']\"> Go to Forecast</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/weather-today/weather-today.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-today/weather-today.component.ts ***!
  \*********************************************************************/
/*! exports provided: WeatherTodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherTodayComponent", function() { return WeatherTodayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather.service */ "./src/app/services/weather.service.ts");


// SERVICES

var WeatherTodayComponent = /** @class */ (function () {
    function WeatherTodayComponent(weatherService) {
        this.weatherService = weatherService;
    }
    WeatherTodayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCurrentPosition()
            .then(function (coord) {
            _this.latInit = coord.latitude;
            _this.lonInit = coord.longitude;
            _this.weatherService.getToday(_this.latInit, _this.lonInit).subscribe(function (item) { _this.weather = item; }, function (err) { _this.error = err.message; });
        })
            .catch(function (err) { return _this.error = err; });
    };
    WeatherTodayComponent.prototype.getCurrentPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                resolve({ latitude: latitude, longitude: longitude });
            }, function () { reject('We could not get your location.'); });
        });
    };
    WeatherTodayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-today',
            template: __webpack_require__(/*! ./weather-today.component.html */ "./src/app/components/weather-today/weather-today.component.html"),
            providers: [_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]],
            styles: [__webpack_require__(/*! ./weather-today.component.css */ "./src/app/components/weather-today/weather-today.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], WeatherTodayComponent);
    return WeatherTodayComponent;
}());



/***/ }),

/***/ "./src/app/models/Location.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/Location.model.ts ***!
  \******************************************/
/*! exports provided: Location */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
var Location = /** @class */ (function () {
    function Location() {
    }
    return Location;
}());



/***/ }),

/***/ "./src/app/pipes/filter-remark.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/filter-remark.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterRemarkPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterRemarkPipe", function() { return FilterRemarkPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterRemarkPipe = /** @class */ (function () {
    function FilterRemarkPipe() {
    }
    FilterRemarkPipe.prototype.transform = function (items, pattern) {
        if (!items) {
            return [];
        }
        if (!pattern) {
            return items;
        }
        var myRegExp = new RegExp(pattern, 'i');
        return items.filter(function (e) { return e._location.name.match(myRegExp); });
        // return items.filter(e=>{return e._location.rating>parseInt(pattern)});
    };
    FilterRemarkPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterRemark',
            pure: false
        })
    ], FilterRemarkPipe);
    return FilterRemarkPipe;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_location_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/location/location.component */ "./src/app/components/location/location.component.ts");
/* harmony import */ var _components_photo_photo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/photo/photo.component */ "./src/app/components/photo/photo.component.ts");
/* harmony import */ var _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/photo-list/photo-list.component */ "./src/app/components/photo-list/photo-list.component.ts");
/* harmony import */ var _components_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-photo/add-photo.component */ "./src/app/components/add-photo/add-photo.component.ts");
/* harmony import */ var _components_weather_today_weather_today_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/weather-today/weather-today.component */ "./src/app/components/weather-today/weather-today.component.ts");
/* harmony import */ var _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/weather-forecast/weather-forecast.component */ "./src/app/components/weather-forecast/weather-forecast.component.ts");
/* harmony import */ var _components_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-location/add-location.component */ "./src/app/components/add-location/add-location.component.ts");
/* harmony import */ var _components_pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pruebas/pruebas.component */ "./src/app/components/pruebas/pruebas.component.ts");
/* harmony import */ var _components_remark_remark_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/remark/remark.component */ "./src/app/components/remark/remark.component.ts");
/* harmony import */ var _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/error-page/error-page.component */ "./src/app/components/error-page/error-page.component.ts");
/* harmony import */ var _components_knot_knot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/knot/knot.component */ "./src/app/components/knot/knot.component.ts");
/* harmony import */ var _components_add_remark_add_remark_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-remark/add-remark.component */ "./src/app/components/add-remark/add-remark.component.ts");
/* harmony import */ var _services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/isLoggedIn.canActivate.service */ "./src/app/services/isLoggedIn.canActivate.service.ts");
//COMPONENTS















// SERVICES

var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] },
    { path: 'location', component: _components_location_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'location/add', component: _components_add_location_add_location_component__WEBPACK_IMPORTED_MODULE_9__["AddLocationComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'photo/list/:id', component: _components_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_5__["PhotoListComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'photo/add/:id', component: _components_add_photo_add_photo_component__WEBPACK_IMPORTED_MODULE_6__["AddPhotoComponent"] },
    { path: 'photo', component: _components_photo_photo_component__WEBPACK_IMPORTED_MODULE_4__["PhotoComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'weather', component: _components_weather_today_weather_today_component__WEBPACK_IMPORTED_MODULE_7__["WeatherTodayComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'weather/forecast', component: _components_weather_forecast_weather_forecast_component__WEBPACK_IMPORTED_MODULE_8__["WeatherForecastComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'remark', component: _components_remark_remark_component__WEBPACK_IMPORTED_MODULE_11__["RemarkComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'remark/add', component: _components_add_remark_add_remark_component__WEBPACK_IMPORTED_MODULE_14__["AddRemarkComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'pruebas', component: _components_pruebas_pruebas_component__WEBPACK_IMPORTED_MODULE_10__["PruebasComponent"] },
    { path: 'knot', component: _components_knot_knot_component__WEBPACK_IMPORTED_MODULE_13__["KnotComponent"], canActivate: [_services_isLoggedIn_canActivate_service__WEBPACK_IMPORTED_MODULE_15__["IsLoggedInService"]] },
    { path: 'errorPage', component: _components_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_12__["ErrorPageComponent"] },
    { path: '**', redirectTo: 'errorPage' }
];



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






// SERVICES
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api";
        this.options = { withCredentials: true };
        this.userLoginEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.user !== null && this.user !== undefined;
    };
    AuthService.prototype.getUser = function () { return this.user; };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(this.user);
        return user;
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.baseUrl + "/login", user, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return _this.emitUserLoginEvent(user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(this.baseUrl + "/signup", user, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return _this.emitUserLoginEvent(user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(this.baseUrl + "/logout", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return _this.emitUserLoginEvent(undefined); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.baseUrl + "/loggedin", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) { return _this.emitUserLoginEvent(user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    AuthService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().message);
    };
    AuthService.prototype.handleUser = function (obj) {
        this.user = obj;
        this.userLoginEvent.emit(this.user);
        return this.user;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




// MODELS
// import { User } from '../models/User.model';
//SERVICES

var ChatService = /** @class */ (function () {
    function ChatService(authService) {
        this.authService = authService;
        this.messages = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__["connect"]("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
        this.socket.on('recibe-message', function (data) {
            this.messages.push({
                userChat: false,
                message: data.message.m,
                created: new Date(),
                otherUser: data.message.usr
            });
        }.bind(this));
    }
    ChatService.prototype.sendMessage = function (m) {
        var usr = this.authService.user.username;
        this.socket.emit('send-message', {
            message: { m: m, usr: usr }
        });
        this.messages.push({
            userChat: "" + this.authService.user.username,
            message: m,
            created: new Date(),
            otherUser: false
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/isLoggedIn.canActivate.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/isLoggedIn.canActivate.service.ts ***!
  \************************************************************/
/*! exports provided: IsLoggedInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLoggedInService", function() { return IsLoggedInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



//SERVICES

var IsLoggedInService = /** @class */ (function () {
    function IsLoggedInService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    IsLoggedInService.prototype.ngOnInit = function () { };
    IsLoggedInService.prototype.canActivate = function (next, state) {
        var isAuth = this.authService.isAuthenticated();
        if (!isAuth) {
            this.router.navigate(['/login'], { queryParams: { error: "Unauthorized permisson. Please Logged " } });
        }
        return isAuth;
    };
    IsLoggedInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IsLoggedInService);
    return IsLoggedInService;
}());



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var LocationService = /** @class */ (function () {
    // private user: User;
    // private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
    function LocationService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api/location";
        this.options = { withCredentials: true };
    }
    LocationService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    LocationService.prototype.getMyLocation = function () {
        return this.http.get(this.baseUrl + "/myLocation", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    LocationService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + "/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    LocationService.prototype.add = function (location) {
        console.log(location);
        return this.http.post(this.baseUrl + "/", location, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    LocationService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().message);
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/services/photo.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var PhotoService = /** @class */ (function () {
    function PhotoService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api/photo";
        this.options = { withCredentials: true };
    }
    PhotoService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PhotoService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + "/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PhotoService.prototype.getMyPhotos = function () {
        return this.http.get(this.baseUrl + "/myPhoto", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PhotoService.prototype.getByLocation = function (id) {
        return this.http.get(this.baseUrl + "/byLocation/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PhotoService.prototype.getByUser = function (id) {
        return this.http.get(this.baseUrl + "/byUser/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PhotoService.prototype.add = function (photo) {
        return this.http.post(this.baseUrl + "/" + photo._location, photo, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    PhotoService.prototype.photoLocationId = function (locationId) {
        console.log(locationId);
    };
    PhotoService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().message);
    };
    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], PhotoService);
    return PhotoService;
}());



/***/ }),

/***/ "./src/app/services/remark.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/remark.service.ts ***!
  \********************************************/
/*! exports provided: RemarkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarkService", function() { return RemarkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var RemarkService = /** @class */ (function () {
    function RemarkService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api/remark";
        this.options = { withCredentials: true };
    }
    RemarkService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RemarkService.prototype.getMyRemark = function () {
        return this.http.get(this.baseUrl + "/myRemark", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RemarkService.prototype.getByUser = function (id) {
        return this.http.get(this.baseUrl + "/byUser/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RemarkService.prototype.getByLocation = function (id) {
        return this.http.get(this.baseUrl + "/byLocation/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RemarkService.prototype.add = function (id, contain) {
        console.log(id);
        return this.http.post(this.baseUrl + "/" + id, { contain: contain }, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    RemarkService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().message);
    };
    RemarkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], RemarkService);
    return RemarkService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api/user";
        this.options = { withCredentials: true };
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.baseUrl + "/", this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.baseUrl + "/" + id, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().message);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/api/weather";
        this.options = { withCredentials: true };
    }
    WeatherService.prototype.getToday = function (lat, lon) {
        var loc = { "lat": lat, "lon": lon };
        return this.http.post(this.baseUrl + "/today", loc, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    WeatherService.prototype.getForecast = function (lat, lon) {
        var loc = { "lat": lat, "lon": lon };
        return this.http.post(this.baseUrl + "/forecast", loc, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    WeatherService.prototype.handleError = function (error) {
        console.log(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error.json().message);
    };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3000',
    apiKeyMaps: 'AIzaSyAaDOMBPrVAk6syCIRaDS_BAeTl9mi6QyE'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pablo/Escritorio/ironhack/proyectos/proyecto-3/v-01/client/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map