"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("@rheas/support/helpers");
const services_1 = require("@rheas/services");
class ViewServiceProvider extends services_1.DeferredServiceProvider {
    /**
     * Registers view handlers when a node receives a new request.
     * The container will be the request instance.
     */
    register() {
        this.container.singleton(this.name, request => {
            const viewFactory = helpers_1.app().get('view');
            return viewFactory.createNewView();
        });
    }
}
exports.ViewServiceProvider = ViewServiceProvider;
