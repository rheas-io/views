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
var core_1 = require("@rheas/core");
var ViewServiceProvider = /** @class */ (function (_super) {
    __extends(ViewServiceProvider, _super);
    function ViewServiceProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers view handlers when a node receives a new request.
     * The container will be the request instance.
     */
    ViewServiceProvider.prototype.register = function () {
        this.container.singleton(this.name, function (request) {
            var app = request.get('app');
            var viewFactory = app.get('view');
            return viewFactory.createNewView();
        });
    };
    return ViewServiceProvider;
}(core_1.DeferredServiceProvider));
exports.ViewServiceProvider = ViewServiceProvider;
