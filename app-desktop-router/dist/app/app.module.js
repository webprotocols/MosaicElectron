"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
/* application router settings */
var app_routing_1 = require('./app.routing');
/* global components */
var app_component_1 = require('./app.component');
var intro_component_1 = require('./intro.component');
var list_component_1 = require('./article/dept/list/list.component');
var append_component_1 = require('./article/dept/append/append.component');
var modify_component_1 = require('./article/dept/modify/modify.component');
var delete_component_1 = require('./article/dept/delete/delete.component');
var not_found_component_1 = require('./not-found.component');
var header_content_component_1 = require('./header-content/header-content.component');
var footer_content_component_1 = require('./footer-content/footer-content.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, common_1.CommonModule, forms_1.FormsModule,
                app_routing_1.AppRoutingModule
            ],
            declarations: [
                header_content_component_1.HeaderContentComponent, footer_content_component_1.FooterContentComponent,
                app_component_1.AppComponent, intro_component_1.IntroComponent, not_found_component_1.NotFoundComponent,
                list_component_1.ListComponent, append_component_1.AppendComponent, modify_component_1.ModifyComponent, delete_component_1.DeleteComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map