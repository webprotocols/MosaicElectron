"use strict";
var router_1 = require('@angular/router');
var not_found_component_1 = require('./not-found.component');
var intro_component_1 = require('./intro.component');
var list_component_1 = require('./article/dept/list/list.component');
var append_component_1 = require('./article/dept/append/append.component');
var modify_component_1 = require('./article/dept/modify/modify.component');
var delete_component_1 = require('./article/dept/delete/delete.component');
// Config
var hashLocationStrategy = false;
var helloRoutes = [
    { path: '', component: intro_component_1.IntroComponent },
    { path: 'dept/list', component: list_component_1.ListComponent },
    { path: 'dept/append', component: append_component_1.AppendComponent },
    { path: 'dept/modify', component: modify_component_1.ModifyComponent },
    { path: 'dept/delete', component: delete_component_1.DeleteComponent }
];
var appRoutes = helloRoutes.concat([
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
exports.AppRoutingModule = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map