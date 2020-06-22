"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var viewFactory_1 = require("./viewFactory");
var core_1 = require("@rheas/core");
var ViewFactoryServiceProvider = /** @class */ (function (_super) {
    __extends(ViewFactoryServiceProvider, _super);
    function ViewFactoryServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers view factory on the application. This factory is responsible
     * for creating a view handler for each request. The container will be the
     * app instance.
     */
    ViewFactoryServiceProvider.prototype.register = function () {
        this.container.singleton(this.name, function (app) {
            return new viewFactory_1.ViewFactory(app);
        });
    };
    return ViewFactoryServiceProvider;
}(core_1.DeferredServiceProvider));
exports.ViewFactoryServiceProvider = ViewFactoryServiceProvider;
