webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_demo_demo_component__ = __webpack_require__("../../../../../src/app/components/demo/demo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_demo_demo_component__["a" /* DemoComponent */] },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

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

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_demo_demo_component__ = __webpack_require__("../../../../../src/app/components/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_demo_demo_service__ = __webpack_require__("../../../../../src/app/components/demo/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_demo_demo_component__["a" /* DemoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__reducers__["b" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* metaReducers */] }),
            __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["a" /* StoreRouterConnectingModule */],
            __WEBPACK_IMPORTED_MODULE_4__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                maxAge: 25,
            }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__components_demo_demo_service__["a" /* DemoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loadDemoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadDemoFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadDemoPending; });
/* unused harmony export resetDemo */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_constants__ = __webpack_require__("../../../../../src/app/components/demo/demo.constants.ts");

var loadDemoSuccess = function (_a) {
    var data = _a.data;
    return ({
        type: __WEBPACK_IMPORTED_MODULE_0__demo_constants__["c" /* LOAD_DEMO_SUCCESS */],
        payload: data,
    });
};
var loadDemoFailure = function (_a) {
    var error = _a.error, id = _a.id;
    return ({
        type: __WEBPACK_IMPORTED_MODULE_0__demo_constants__["a" /* LOAD_DEMO_FAILURE */],
        error: error,
        payload: id
    });
};
var loadDemoPending = function (_a) {
    var id = _a.id;
    return ({
        type: __WEBPACK_IMPORTED_MODULE_0__demo_constants__["b" /* LOAD_DEMO_PENDING */],
        payload: id
    });
};
var resetDemo = function () { return ({
    type: __WEBPACK_IMPORTED_MODULE_0__demo_constants__["d" /* RESET_DEMO */],
}); };
//# sourceMappingURL=demo.actions.js.map

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-component {\n  float: left;\n  width: 300px;\n  background: white;\n  height: 210px;\n  border: 1px solid #cccccc;\n  margin: 20px;\n  padding: 10px;\n  box-shadow: 2px 2px 2px #cccccc;\n}\n\n.example-component.loading {\n  background: rgba(255, 255, 0, 0.56);\n}\n\n.example-component.loaded {\n  background: white;\n}\n\n.example-component.error {\n  background: rgba(255, 0, 0, 0.51);\n}\n\nbutton {\n  font-size: 18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_service__ = __webpack_require__("../../../../../src/app/components/demo/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_selectors__ = __webpack_require__("../../../../../src/app/components/demo/demo.selectors.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DemoComponent = (function () {
    function DemoComponent(store, demoService) {
        this.store = store;
        this.demoService = demoService;
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        [1, 2, 4, 5, 6, 7, 8, 9].forEach(function (id) { return _this.demoService.loadDemoData({ id: id }); });
        this.demoData = this.store.select(__WEBPACK_IMPORTED_MODULE_3__demo_selectors__["a" /* getDemoData */]);
    };
    DemoComponent.prototype.reload = function (item) {
        this.demoService.loadDemoData({ id: item.id });
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-demo',
        styles: [__webpack_require__("../../../../../src/app/components/demo/demo.component.css")],
        template: "\n    <div *ngFor='let item of (demoData | async)' class=\"example-component\" \n    [ngClass]=\"{\n      'loading':item.loading,\n      'loaded':item.loaded,\n      'error':item.error\n    }\"\n    >\n      <h3>ID: {{ item.id }}</h3>\n      <h2>Status:</h2>\n      <p>loading: {{ item.loading }}</p>\n      <p>loading: {{ item.loaded }}</p>\n      \n      <button *ngIf=\"item.error\" (click)=\"reload(item)\">reload</button>\n    </div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */]) === "function" && _b || Object])
], DemoComponent);

var _a, _b;
//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_DEMO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_DEMO_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_DEMO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return RESET_DEMO; });
var LOAD_DEMO_SUCCESS = 'softserve/LOAD_DEMO_SUCCESS';
var LOAD_DEMO_PENDING = 'softserve/LOAD_DEMO_PENDING';
var LOAD_DEMO_FAILURE = 'softserve/LOAD_DEMO_FAILURE';
var RESET_DEMO = 'softserve/RESET_DEMO';
//# sourceMappingURL=demo.constants.js.map

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_constants__ = __webpack_require__("../../../../../src/app/components/demo/demo.constants.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    data: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__demo_constants__["b" /* LOAD_DEMO_PENDING */]: {
            return __assign({}, state, { data: __assign({}, state.data, (_a = {}, _a[action.payload] = {
                    id: action.payload,
                    loading: true,
                    loaded: false,
                }, _a)) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__demo_constants__["c" /* LOAD_DEMO_SUCCESS */]: {
            return __assign({}, state, { data: __assign({}, state.data, (_b = {}, _b[action.payload.id] = {
                    id: action.payload.id,
                    data: action.payload,
                    loading: false,
                    loaded: true,
                }, _b)) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__demo_constants__["a" /* LOAD_DEMO_FAILURE */]:
            return __assign({}, state, { data: __assign({}, state.data, (_c = {}, _c[action.payload] = {
                    loading: false,
                    loaded: false,
                    id: action.payload,
                    error: action.error,
                }, _c)) });
        case __WEBPACK_IMPORTED_MODULE_0__demo_constants__["d" /* RESET_DEMO */]: {
            return initialState;
        }
        default:
            return state;
    }
    var _a, _b, _c;
}
//# sourceMappingURL=demo.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getDemoDataReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDemoData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");

var getDemoDataReducer = function (state) {
    return state.demo;
};
var getDemoData = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["k" /* createSelector */])(getDemoDataReducer, function (demoReducer) {
    if (demoReducer.data) {
        return Object.keys(demoReducer.data).map(function (key) { return demoReducer.data[key]; });
    }
});
//# sourceMappingURL=demo.selectors.js.map

/***/ }),

/***/ "../../../../../src/app/components/demo/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_actions__ = __webpack_require__("../../../../../src/app/components/demo/demo.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoService = (function () {
    function DemoService(store) {
        this.store = store;
    }
    DemoService.prototype.loadDemoData = function (_a) {
        var _this = this;
        var id = _a.id;
        this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__demo_actions__["b" /* loadDemoPending */])({ id: id }));
        try {
            var success = Math.random() < 0.5;
            if (!success) {
                throw 'I am Error';
            }
            setTimeout(function () {
                _this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__demo_actions__["c" /* loadDemoSuccess */])({ data: {
                        id: id,
                        text: id
                    } }));
            }, Math.random() * 4000);
        }
        catch (error) {
            this.store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_2__demo_actions__["a" /* loadDemoFailure */])({ error: error, id: id }));
        }
    };
    return DemoService;
}());
DemoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], DemoService);

var _a;
//# sourceMappingURL=demo.service.js.map

/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_demo_demo_reducer__ = __webpack_require__("../../../../../src/app/components/demo/demo.reducer.ts");


//storeFreeze
var metaReducers = [];
var reducers = {
    demo: __WEBPACK_IMPORTED_MODULE_1__components_demo_demo_reducer__["a" /* reducer */],
    routerReducer: __WEBPACK_IMPORTED_MODULE_0__ngrx_router_store__["b" /* routerReducer */],
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map