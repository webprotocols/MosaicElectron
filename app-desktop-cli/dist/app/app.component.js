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
var core_1 = require('@angular/core');
var fs = require('fs');
var java = require('java');
var System = java.import('java.lang.System');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.depts = "XXXXXXXX";
        this.file = fs.readFileSync("package.json", "utf-8");
        var System = java.import("java.lang.System");
        System.out.println("Hello Java!!!");
        // oracledb.getConnection({
        // 	user: "scott",
        // 	password: "tiger",
        // 	connectString: "localhost/orcl"
        // }).then(conn => {
        // 	console.log("@@@@@@@@@@@");
        // 	conn.execute("select * from emp").then(result => {
        // 		this.depts = JSON.stringify(result.rows);
        // 		console.log(this.depts);
        // 		System.out.println(this.depts);
        // 	}).catch(err => {
        // 		console.log(err);
        // 	});
        // }).catch(err => {
        // 	console.log(err);
        // });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map