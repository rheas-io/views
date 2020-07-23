"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const viewFactory_1 = require("./viewFactory");
const services_1 = require("@rheas/services");
class ViewFactoryServiceProvider extends services_1.DeferredServiceProvider {
    /**
     * Registers view factory on the application. This factory is responsible
     * for creating a view handler for each request. The container will be the
     * app instance.
     */
    register() {
        this.container.singleton(this.name, app => {
            return new viewFactory_1.ViewFactory(app);
        });
    }
}
exports.ViewFactoryServiceProvider = ViewFactoryServiceProvider;
