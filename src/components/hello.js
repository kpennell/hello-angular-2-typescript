if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Angular 2.x component written in TypeScript.
 * Imports Component and View Angular Annotations
 * Imports Angular bootstrapping to load the Hello Component.
 *
 * See the generated/compiled code within ../components/hello.js
 */
/// <reference path="../../typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var HelloComponent = (function () {
    //Constructor utilized to define model properties
    function HelloComponent() {
        this.name = 'World';
    }
    HelloComponent = __decorate([
        angular2_1.Component({
            selector: 'di-hello'
        }),
        angular2_1.View({
            template: '<h1>Hello {{ name }}</h1>'
        })
    ], HelloComponent);
    return HelloComponent;
})();
//Bootstrapping main Angular Component
angular2_1.bootstrap(HelloComponent);
